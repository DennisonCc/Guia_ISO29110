"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Lock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react"
import type { StandardPart } from "@/data/iso-standards"
import { isoStandards } from "@/data/iso-standards"
import { useProgress } from "@/hooks/useProgress"
import { ProgressBar } from "@/components/ProgressBar"
import { TaskChecklist } from "@/components/TaskChecklist"
import { useState } from "react"

interface StandardContentProps {
  standard: StandardPart
}

const colorConfig = {
  blue: { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", header: "from-blue-500 to-indigo-500" },
  violet: { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", header: "from-violet-500 to-purple-500" },
  indigo: { badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", header: "from-indigo-500 to-blue-600" },
  amber: { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", header: "from-amber-500 to-orange-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", header: "from-emerald-500 to-teal-500" },
  rose: { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", header: "from-rose-500 to-pink-500" },
}

export function StandardContent({ standard }: StandardContentProps) {
  const {
    isLoaded,
    isTaskComplete,
    isSectionComplete,
    getSectionProgress,
    isPhaseComplete,
    getPhaseProgress,
    isPhaseUnlocked,
    toggleTask,
  } = useProgress()

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([standard.sections[0]?.id])
  )

  const c = colorConfig[standard.color]
  const isUnlocked = isLoaded ? isPhaseUnlocked(standard, isoStandards) : false
  const isComplete = isLoaded ? isPhaseComplete(standard) : false
  const progress = isLoaded ? getPhaseProgress(standard) : { completed: 0, total: 0, percentage: 0 }

  // Determine prev/next phases
  const currentIndex = isoStandards.findIndex((p) => p.id === standard.id)
  const prevPhase = currentIndex > 0 ? isoStandards[currentIndex - 1] : null
  const nextPhase = currentIndex < isoStandards.length - 1 ? isoStandards[currentIndex + 1] : null
  const isNextUnlocked = nextPhase ? (isLoaded ? isPhaseUnlocked(nextPhase, isoStandards) : false) : false

  function toggleSection(sectionId: string) {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  // Soft prerequisite warning (not a hard block)
  const showPrerequisiteWarning = isLoaded && !isUnlocked
  const requiredPhase = isoStandards.find((p) => p.phase === standard.requiredPhase)

  return (
    <article className="max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{standard.subtitle}</span>
      </nav>

      {/* Soft prerequisite warning */}
      {showPrerequisiteWarning && requiredPhase && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 px-4 py-3">
          <Lock className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              Fase con prerequisito pendiente
            </p>
            <p className="text-xs text-amber-700/80 dark:text-amber-400/80 mt-0.5">
              Para desbloquear completamente esta fase, completa primero{" "}
              <Link
                href={`/docs/${requiredPhase.id}`}
                className="font-semibold underline underline-offset-2 hover:text-amber-900 dark:hover:text-amber-200 transition-colors"
              >
                {requiredPhase.subtitle}
              </Link>
              . Puedes explorar el contenido aquí, pero las tareas se habilitarán al completar la fase anterior.
            </p>
          </div>
        </div>
      )}

      {/* Header card */}
      <header className="mb-8 rounded-2xl overflow-hidden border border-border shadow-sm">
        <div className={`h-2 bg-gradient-to-r ${c.header}`} />
        <div className="p-6 bg-card">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                  {standard.partNumber}
                </span>
                <span className="text-2xl">{standard.icon}</span>
                {isComplete && (
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Fase completada
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-extrabold text-foreground mb-2">
                {standard.subtitle}
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                {standard.description}
              </p>
            </div>
          </div>

          {/* Progress */}
          {isLoaded && (
            <div className="mt-5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-muted-foreground font-medium">
                  Progreso de esta fase
                </span>
                <span className="text-xs font-bold text-foreground tabular-nums">
                  {progress.completed}/{progress.total} tareas
                </span>
              </div>
              <ProgressBar
                percentage={progress.percentage}
                color={isComplete ? "emerald" : standard.color}
                size="md"
              />
            </div>
          )}
        </div>
      </header>

      {/* Sections */}
      <div className="space-y-4">
        {standard.sections.map((section, index) => {
          const sectionComplete = isLoaded ? isSectionComplete(section) : false
          const sectionProg = isLoaded ? getSectionProgress(section) : { completed: 0, total: 0, percentage: 0 }
          const isExpanded = expandedSections.has(section.id)

          return (
            <div
              key={section.id}
              id={section.id}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                sectionComplete
                  ? "border-emerald-200 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/10"
                  : "border-border bg-card"
              }`}
            >
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
              >
                {/* Number badge */}
                <div
                  className={`shrink-0 h-8 w-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                    sectionComplete
                      ? "bg-emerald-500 text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {sectionComplete ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-semibold text-foreground line-clamp-1">
                    {section.title}
                  </h2>
                  {isLoaded && (
                    <div className="flex items-center gap-2 mt-1">
                      <ProgressBar
                        percentage={sectionProg.percentage}
                        color={sectionComplete ? "emerald" : standard.color}
                        size="sm"
                        className="max-w-24"
                        animated={false}
                      />
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {sectionProg.completed}/{sectionProg.total}
                      </span>
                    </div>
                  )}
                </div>

                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
              </button>

              {/* Section content */}
              {isExpanded && (
                <div className="px-5 pb-5 border-t border-border/50">
                  {/* Main content */}
                  <div
                    className="mt-5 prose prose-sm prose-neutral dark:prose-invert max-w-none text-foreground/90 leading-relaxed
                      [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-foreground [&_h4]:mt-5 [&_h4]:mb-2
                      [&_p]:mb-3 [&_p]:leading-relaxed [&_p]:text-sm
                      [&_ul]:my-3 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-1
                      [&_ol]:my-3 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-1
                      [&_li]:text-sm [&_li]:text-foreground/80
                      [&_dl]:my-3 [&_dt]:font-semibold [&_dt]:text-foreground [&_dt]:mt-3 [&_dt]:mb-0.5
                      [&_dd]:ml-4 [&_dd]:text-sm [&_dd]:text-muted-foreground [&_dd]:mb-2
                      [&_em]:text-muted-foreground [&_em]:text-xs
                      [&_strong]:text-foreground [&_strong]:font-semibold
                      [&_table]:w-full [&_table]:my-3 [&_table]:border-collapse [&_table]:text-sm
                      [&_th]:text-left [&_th]:p-2.5 [&_th]:bg-muted [&_th]:font-semibold [&_th]:border [&_th]:border-border
                      [&_td]:p-2.5 [&_td]:border [&_td]:border-border"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  {/* Example */}
                  {section.example && (
                    <div className={`mt-4 rounded-xl border ${c.border} p-4 bg-card`}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                        💡 Ejemplo práctico
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {section.example}
                      </p>
                    </div>
                  )}

                  {/* Task checklist */}
                  {isLoaded && section.tasks.length > 0 && (
                    <TaskChecklist
                      sectionId={section.id}
                      tasks={section.tasks}
                      isTaskComplete={isTaskComplete}
                      onToggle={showPrerequisiteWarning ? () => {} : toggleTask}
                      color={standard.color}
                      disabled={showPrerequisiteWarning}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Phase complete celebration */}
      {isLoaded && isComplete && (
        <div className="mt-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20 p-6 text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-300 mb-1">
            ¡Fase completada!
          </h3>
          <p className="text-sm text-emerald-600/80 dark:text-emerald-400/80">
            Completaste todas las tareas de <strong>{standard.subtitle}</strong>.
          </p>
          {nextPhase && isNextUnlocked && (
            <Link
              href={`/docs/${nextPhase.id}`}
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              Continuar con {nextPhase.subtitle}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {!nextPhase && (
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2">
              🏆 ¡Completaste toda la ruta de implementación ISO/IEC 29110!
            </p>
          )}
        </div>
      )}

      {/* Bottom navigation */}
      <nav className="flex items-center justify-between mt-10 pt-6 border-t border-border">
        {prevPhase ? (
          <Link
            href={`/docs/${prevPhase.id}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{prevPhase.subtitle}</span>
          </Link>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Inicio</span>
          </Link>
        )}

        {nextPhase && (
          <Link
            href={`/docs/${nextPhase.id}`}
            className={`flex items-center gap-2 text-sm transition-colors ${
              isNextUnlocked
                ? "text-foreground hover:text-primary"
                : "text-muted-foreground/40 cursor-not-allowed pointer-events-none"
            }`}
          >
            <span>{nextPhase.subtitle}</span>
            {isNextUnlocked ? (
              <ArrowRight className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </Link>
        )}
      </nav>
    </article>
  )
}
