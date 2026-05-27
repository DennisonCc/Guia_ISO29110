"use client"

import Link from "next/link"
import { Lock, CheckCircle2, ArrowRight, Play } from "lucide-react"
import type { StandardPart } from "@/data/iso-standards"
import { ProgressBar } from "@/components/ProgressBar"

interface PhaseCardProps {
  phase: StandardPart
  isUnlocked: boolean
  isComplete: boolean
  isActive: boolean
  progress: { completed: number; total: number; percentage: number }
  isLast: boolean
}

const colorConfig = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    ring: "ring-blue-300 dark:ring-blue-700",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300",
    glow: "shadow-blue-500/20",
    progress: "blue" as const,
    activeBg: "bg-blue-50/50 dark:bg-blue-950/20",
    activeBorder: "border-blue-300 dark:border-blue-700",
    icon: "bg-blue-500",
    iconRing: "ring-blue-200 dark:ring-blue-800",
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    ring: "ring-violet-300 dark:ring-violet-700",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/60 dark:text-violet-300",
    glow: "shadow-violet-500/20",
    progress: "violet" as const,
    activeBg: "bg-violet-50/50 dark:bg-violet-950/20",
    activeBorder: "border-violet-300 dark:border-violet-700",
    icon: "bg-violet-500",
    iconRing: "ring-violet-200 dark:ring-violet-800",
  },
  indigo: {
    gradient: "from-indigo-500 to-indigo-600",
    ring: "ring-indigo-300 dark:ring-indigo-700",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/60 dark:text-indigo-300",
    glow: "shadow-indigo-500/20",
    progress: "indigo" as const,
    activeBg: "bg-indigo-50/50 dark:bg-indigo-950/20",
    activeBorder: "border-indigo-300 dark:border-indigo-700",
    icon: "bg-indigo-500",
    iconRing: "ring-indigo-200 dark:ring-indigo-800",
  },
  amber: {
    gradient: "from-amber-500 to-amber-600",
    ring: "ring-amber-300 dark:ring-amber-700",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300",
    glow: "shadow-amber-500/20",
    progress: "amber" as const,
    activeBg: "bg-amber-50/50 dark:bg-amber-950/20",
    activeBorder: "border-amber-300 dark:border-amber-700",
    icon: "bg-amber-500",
    iconRing: "ring-amber-200 dark:ring-amber-800",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    ring: "ring-emerald-300 dark:ring-emerald-700",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300",
    glow: "shadow-emerald-500/20",
    progress: "emerald" as const,
    activeBg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    activeBorder: "border-emerald-300 dark:border-emerald-700",
    icon: "bg-emerald-500",
    iconRing: "ring-emerald-200 dark:ring-emerald-800",
  },
}

function PhaseCard({ phase, isUnlocked, isComplete, isActive, progress, isLast }: PhaseCardProps) {
  const c = colorConfig[phase.color]

  const cardInner = (
    <div
      className={`relative flex items-start gap-5 p-5 rounded-2xl border transition-all duration-300 ${
        isComplete
          ? `border-emerald-200 dark:border-emerald-800 bg-emerald-50/30 dark:bg-emerald-950/10`
          : isActive
          ? `${c.activeBorder} ${c.activeBg} shadow-lg ${c.glow}`
          : "border-border bg-card/50"
      } group cursor-pointer hover:shadow-md hover:-translate-y-0.5`}
    >
      {/* Phase Icon */}
      <div className="relative shrink-0">
        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-md ring-4 transition-all duration-300 ${
            isComplete
              ? "bg-emerald-500 ring-emerald-200 dark:ring-emerald-800"
              : isActive
              ? `${c.icon} ${c.iconRing}`
              : "bg-muted text-muted-foreground ring-border"
          }`}
        >
          {isComplete ? (
            <CheckCircle2 className="h-7 w-7 text-white" />
          ) : !isUnlocked ? (
            <Lock className="h-6 w-6 text-muted-foreground" />
          ) : (
            <span className="text-xl">{phase.icon}</span>
          )}
        </div>

        {/* Connector line */}
        {!isLast && (
          <div className="absolute left-1/2 -translate-x-1/2 top-14 w-0.5 h-8 bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  isComplete
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300"
                    : isActive
                    ? c.badge
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {phase.partNumber}
              </span>
              {isComplete && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  ✓ Completado
                </span>
              )}
              {isActive && !isComplete && (
                <span className={`text-xs font-medium ${c.badge.split(" ").slice(1).join(" ")}`}>
                  En progreso
                </span>
              )}
              {!isUnlocked && (
                <span className="text-xs text-muted-foreground font-medium">
                  Bloqueado
                </span>
              )}
            </div>
            <h3 className="text-base font-bold text-foreground group-hover:text-foreground/80 transition-colors">
              {phase.subtitle}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 max-w-lg">
              {phase.description}
            </p>
          </div>

          {/* CTA */}
          {isUnlocked && (
            <div
              className={`shrink-0 flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                isComplete
                  ? "text-emerald-600 dark:text-emerald-400"
                  : `${c.badge}`
              }`}
            >
              {isComplete ? (
                <>
                  <span>Revisar</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              ) : isActive ? (
                <>
                  <Play className="h-3.5 w-3.5" />
                  <span>Continuar</span>
                </>
              ) : (
                <>
                  <span>Comenzar</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </div>
          )}
        </div>

        {/* Progress bar */}
        {isUnlocked && (
          <div className="mt-3 flex items-center gap-3">
            <ProgressBar
              percentage={progress.percentage}
              color={isComplete ? "emerald" : c.progress}
              size="sm"
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
              {progress.completed}/{progress.total}
            </span>
          </div>
        )}

        {/* Sections count */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs text-muted-foreground">
            {phase.sections.length} secciones · {progress.total} tareas
          </span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative">
      <Link href={`/docs/${phase.id}`} className="block">
        {cardInner}
      </Link>
    </div>
  )
}

interface PhaseStepperProps {
  phases: StandardPart[]
  getPhaseProgress: (phase: StandardPart) => { completed: number; total: number; percentage: number }
  isPhaseComplete: (phase: StandardPart) => boolean
  isPhaseUnlocked: (phase: StandardPart, allPhases: StandardPart[]) => boolean
}

export function PhasesStepper({
  phases,
  getPhaseProgress,
  isPhaseComplete,
  isPhaseUnlocked,
}: PhaseStepperProps) {
  return (
    <div className="space-y-4">
      {phases.map((phase, index) => {
        const progress = getPhaseProgress(phase)
        const complete = isPhaseComplete(phase)
        const unlocked = isPhaseUnlocked(phase, phases)
        const active = unlocked && !complete && progress.completed > 0

        return (
          <PhaseCard
            key={phase.id}
            phase={phase}
            isUnlocked={unlocked}
            isComplete={complete}
            isActive={active}
            progress={progress}
            isLast={index === phases.length - 1}
          />
        )
      })}
    </div>
  )
}
