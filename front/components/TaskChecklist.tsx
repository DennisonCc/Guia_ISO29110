"use client"

import { CheckCircle2, Circle } from "lucide-react"
import type { Task } from "@/data/iso-standards"

interface TaskChecklistProps {
  sectionId: string
  tasks: Task[]
  isTaskComplete: (sectionId: string, taskId: string) => boolean
  onToggle: (sectionId: string, taskId: string) => void
  color?: "blue" | "violet" | "indigo" | "amber" | "emerald" | "rose"
  disabled?: boolean
}

const colorMap = {
  blue: {
    check: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    hover: "hover:bg-blue-100/60 dark:hover:bg-blue-900/30",
    label: "text-blue-900 dark:text-blue-100",
  },
  violet: {
    check: "text-violet-500",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    hover: "hover:bg-violet-100/60 dark:hover:bg-violet-900/30",
    label: "text-violet-900 dark:text-violet-100",
  },
  indigo: {
    check: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-800",
    hover: "hover:bg-indigo-100/60 dark:hover:bg-indigo-900/30",
    label: "text-indigo-900 dark:text-indigo-100",
  },
  amber: {
    check: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    hover: "hover:bg-amber-100/60 dark:hover:bg-amber-900/30",
    label: "text-amber-900 dark:text-amber-100",
  },
  emerald: {
    check: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    hover: "hover:bg-emerald-100/60 dark:hover:bg-emerald-900/30",
    label: "text-emerald-900 dark:text-emerald-100",
  },
  rose: {
    check: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
    hover: "hover:bg-rose-100/60 dark:hover:bg-rose-900/30",
    label: "text-rose-900 dark:text-rose-100",
  },
}

export function TaskChecklist({
  sectionId,
  tasks,
  isTaskComplete,
  onToggle,
  color = "blue",
  disabled = false,
}: TaskChecklistProps) {
  const c = colorMap[color]
  const completedCount = tasks.filter((t) => isTaskComplete(sectionId, t.id)).length
  const allDone = completedCount === tasks.length

  return (
    <div className={`rounded-xl border ${disabled ? "border-border opacity-60" : c.border} ${disabled ? "bg-muted/30" : c.bg} p-4 mt-6`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckCircle2
            className={`h-4 w-4 ${allDone && !disabled ? c.check : "text-muted-foreground/50"}`}
          />
          <span className="text-sm font-semibold text-foreground">
            Tareas de esta sección
          </span>
        </div>
        <div className="flex items-center gap-2">
          {disabled && (
            <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
              Completa la fase anterior primero
            </span>
          )}
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              allDone && !disabled
                ? `${c.bg} ${c.check} border ${c.border}`
                : "bg-muted text-muted-foreground"
            }`}
          >
            {completedCount}/{tasks.length}
          </span>
        </div>
      </div>

      {/* Task list */}
      <ul className="space-y-1.5">
        {tasks.map((task) => {
          const done = isTaskComplete(sectionId, task.id)
          return (
            <li key={task.id}>
              <button
                onClick={() => !disabled && onToggle(sectionId, task.id)}
                disabled={disabled}
                className={`w-full flex items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200 group ${
                  disabled
                    ? "cursor-not-allowed opacity-70"
                    : `${c.hover} cursor-pointer`
                }`}
                aria-pressed={done}
              >
                <span className="shrink-0 mt-0.5">
                  {done ? (
                    <CheckCircle2
                      className={`h-4.5 w-4.5 ${c.check} transition-all duration-300 scale-110`}
                    />
                  ) : (
                    <Circle className="h-4.5 w-4.5 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                  )}
                </span>
                <span
                  className={`text-sm leading-snug transition-all duration-200 ${
                    done
                      ? "line-through text-muted-foreground/60"
                      : "text-foreground/80"
                  }`}
                >
                  {task.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Completion message */}
      {allDone && (
        <div
          className={`mt-3 pt-3 border-t ${c.border} flex items-center gap-2`}
        >
          <CheckCircle2 className={`h-4 w-4 ${c.check}`} />
          <span className={`text-xs font-medium ${c.check}`}>
            ¡Sección completada!
          </span>
        </div>
      )}
    </div>
  )
}
