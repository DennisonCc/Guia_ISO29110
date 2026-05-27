"use client"

import { useState, useEffect, useCallback } from "react"
import type { StandardPart, StandardSection } from "@/data/iso-standards"

interface ProgressState {
  completedTasks: Record<string, boolean> // key: `${sectionId}:${taskId}`
}

const STORAGE_KEY = "iso-29110-progress-v1"

function loadState(): ProgressState {
  if (typeof window === "undefined") return { completedTasks: {} }
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved) as ProgressState
  } catch {
    // ignore malformed data
  }
  return { completedTasks: {} }
}

function saveState(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore storage errors
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>({ completedTasks: {} })
  const [isLoaded, setIsLoaded] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    setState(loadState())
    setIsLoaded(true)
  }, [])

  const toggleTask = useCallback((sectionId: string, taskId: string) => {
    setState((prev) => {
      const key = `${sectionId}:${taskId}`
      const newState: ProgressState = {
        completedTasks: {
          ...prev.completedTasks,
          [key]: !prev.completedTasks[key],
        },
      }
      saveState(newState)
      return newState
    })
  }, [])

  const isTaskComplete = useCallback(
    (sectionId: string, taskId: string): boolean => {
      return !!state.completedTasks[`${sectionId}:${taskId}`]
    },
    [state]
  )

  const isSectionComplete = useCallback(
    (section: StandardSection): boolean => {
      if (section.tasks.length === 0) return true
      return section.tasks.every(
        (task) => !!state.completedTasks[`${section.id}:${task.id}`]
      )
    },
    [state]
  )

  const getSectionProgress = useCallback(
    (section: StandardSection): { completed: number; total: number; percentage: number } => {
      const total = section.tasks.length
      if (total === 0) return { completed: 0, total: 0, percentage: 100 }
      const completed = section.tasks.filter(
        (task) => !!state.completedTasks[`${section.id}:${task.id}`]
      ).length
      return {
        completed,
        total,
        percentage: Math.round((completed / total) * 100),
      }
    },
    [state]
  )

  const isPhaseComplete = useCallback(
    (phase: StandardPart): boolean => {
      return phase.sections.every((section) =>
        section.tasks.every(
          (task) => !!state.completedTasks[`${section.id}:${task.id}`]
        )
      )
    },
    [state]
  )

  const getPhaseProgress = useCallback(
    (phase: StandardPart): { completed: number; total: number; percentage: number } => {
      const total = phase.sections.reduce((acc, s) => acc + s.tasks.length, 0)
      if (total === 0) return { completed: 0, total: 0, percentage: 0 }
      const completed = phase.sections.reduce(
        (acc, s) =>
          acc +
          s.tasks.filter((t) => !!state.completedTasks[`${s.id}:${t.id}`]).length,
        0
      )
      return {
        completed,
        total,
        percentage: Math.round((completed / total) * 100),
      }
    },
    [state]
  )

  const isPhaseUnlocked = useCallback(
    (phase: StandardPart, allPhases: StandardPart[]): boolean => {
      if (phase.requiredPhase === null) return true
      const requiredPhase = allPhases.find((p) => p.phase === phase.requiredPhase)
      if (!requiredPhase) return true
      return isPhaseComplete(requiredPhase)
    },
    [isPhaseComplete]
  )

  const getGlobalProgress = useCallback(
    (allPhases: StandardPart[]): { completed: number; total: number; percentage: number } => {
      const total = allPhases.reduce(
        (acc, phase) =>
          acc + phase.sections.reduce((a, s) => a + s.tasks.length, 0),
        0
      )
      const completed = Object.values(state.completedTasks).filter(Boolean).length
      return {
        completed,
        total,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
      }
    },
    [state]
  )

  const resetProgress = useCallback(() => {
    const newState: ProgressState = { completedTasks: {} }
    saveState(newState)
    setState(newState)
  }, [])

  return {
    isLoaded,
    toggleTask,
    isTaskComplete,
    isSectionComplete,
    getSectionProgress,
    isPhaseComplete,
    getPhaseProgress,
    isPhaseUnlocked,
    getGlobalProgress,
    resetProgress,
  }
}
