"use client"

import { isoStandards } from "@/data/iso-standards"
import { useProgress } from "@/hooks/useProgress"
import { PhasesStepper } from "@/components/PhasesStepper"
import { ProgressBar } from "@/components/ProgressBar"
import { ThemeToggle } from "@/components/theme-toggle"
import { RotateCcw, BookOpen, CheckCircle2, ListTodo, Layers } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const {
    isLoaded,
    isPhaseComplete,
    getPhaseProgress,
    isPhaseUnlocked,
    getGlobalProgress,
    resetProgress,
  } = useProgress()

  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const globalProgress = isLoaded ? getGlobalProgress(isoStandards) : { completed: 0, total: 0, percentage: 0 }
  const completedPhases = isLoaded ? isoStandards.filter((p) => isPhaseComplete(p)).length : 0
  const unlockedPhases = isLoaded ? isoStandards.filter((p) => isPhaseUnlocked(p, isoStandards)).length : 1
  const totalTasks = isoStandards.reduce((acc, p) => acc + p.sections.reduce((a, s) => a + s.tasks.length, 0), 0)

  function handleReset() {
    resetProgress()
    setShowResetConfirm(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-foreground text-sm">ISO/IEC 29110</span>
          </div>
          <div className="flex items-center gap-3">
            {showResetConfirm ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">¿Reiniciar progreso?</span>
                <button
                  onClick={handleReset}
                  className="text-xs px-2 py-1 rounded bg-destructive text-white hover:bg-destructive/90 transition-colors"
                >
                  Sí, reiniciar
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="text-xs px-2 py-1 rounded bg-muted text-foreground hover:bg-muted/80 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                title="Reiniciar progreso"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Reiniciar</span>
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Hero */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 border border-blue-200 dark:border-blue-800">
            <BookOpen className="h-3.5 w-3.5" />
            Guía Interactiva de Implementación
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Perfiles de Ciclo de Vida{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              ISO/IEC 29110
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Sigue el flujo de fases para implementar la norma en tu organización VSE.
            Completa cada fase para desbloquear la siguiente.
          </p>
        </header>

        {/* Dashboard Stats */}
        {isLoaded && (
          <section className="mb-10">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Global progress bar */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">Progreso general</span>
                  <span className="text-sm font-bold text-foreground tabular-nums">
                    {globalProgress.percentage}%
                  </span>
                </div>
                <ProgressBar
                  percentage={globalProgress.percentage}
                  color="blue"
                  size="lg"
                />
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span className="text-xs">Fases completadas</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground tabular-nums">
                    {completedPhases}
                    <span className="text-sm font-normal text-muted-foreground">
                      /{isoStandards.length}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Layers className="h-3.5 w-3.5" />
                    <span className="text-xs">Fases desbloqueadas</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground tabular-nums">
                    {unlockedPhases}
                    <span className="text-sm font-normal text-muted-foreground">
                      /{isoStandards.length}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <ListTodo className="h-3.5 w-3.5" />
                    <span className="text-xs">Tareas completadas</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground tabular-nums">
                    {globalProgress.completed}
                    <span className="text-sm font-normal text-muted-foreground">
                      /{totalTasks}
                    </span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span className="text-xs">Secciones totales</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground tabular-nums">
                    {isoStandards.reduce((acc, p) => acc + p.sections.length, 0)}
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Phase Stepper */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Tu Ruta de Implementación</h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Completa cada fase para desbloquear la siguiente
              </p>
            </div>
          </div>

          {isLoaded ? (
            <PhasesStepper
              phases={isoStandards}
              getPhaseProgress={getPhaseProgress}
              isPhaseComplete={isPhaseComplete}
              isPhaseUnlocked={isPhaseUnlocked}
            />
          ) : (
            /* Skeleton loading state */
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-28 rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          )}
        </section>

        {/* Footer note */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <p className="text-sm text-muted-foreground">
                ISO/IEC 29110 — Guía de implementación interactiva
              </p>
              <p className="text-xs text-muted-foreground/60 mt-0.5">
                Tu progreso se guarda automáticamente en este dispositivo.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.iso.org/standard/62711.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                ISO.org ↗
              </a>
              <a
                href="https://www.iec.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                IEC.ch ↗
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
