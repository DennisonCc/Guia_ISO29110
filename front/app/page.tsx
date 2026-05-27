"use client"

import { isoStandards } from "@/data/iso-standards"
import { useProgress } from "@/hooks/useProgress"
import { PhasesStepper } from "@/components/PhasesStepper"
import { ProgressBar } from "@/components/ProgressBar"
import { ThemeToggle } from "@/components/theme-toggle"
import { RotateCcw, BookOpen, CheckCircle2, ListTodo, Layers, ExternalLink } from "lucide-react"
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
              {[...Array(isoStandards.length)].map((_, i) => (
                <div key={i} className="h-28 rounded-2xl bg-muted animate-pulse" />
              ))}
            </div>
          )}
        </section>

        {/* Resources Hub */}
        <section className="mt-16 mb-6">
          <div className="border-t border-border pt-10">
            <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-500" />
              Documentación y Referencias de la Norma (Enlaces Activos)
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              Accede directamente a los portales oficiales de estandarización, publicaciones científicas y repositorios académicos reales para complementar la implementación de la norma.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Category 1: Portales y Estándares Oficiales */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  Portales y Estándares Oficiales
                </h3>
                
                <a
                  href="https://www.iso.org/obp/ui#iso:std:iso-iec:tr:29110:-1:ed-2:v1:es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    ISO OBP en Español (TR 29110-1)
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Plataforma oficial de navegación online de la ISO. Acceso libre al texto oficial de terminología de la Edición 2 en español.
                  </p>
                </a>

                <a
                  href="https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/isoiec-29110-series.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Comité Técnico ISO/IEC JTC1/SC7
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Portal de proyectos insignia de la serie ISO/IEC 29110 para el ciclo de vida de desarrollo de software en VSEs.
                  </p>
                </a>

                <a
                  href="https://webstore.iec.ch/en/publication/105848"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Webstore Oficial de la IEC
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Catálogo y adquisición oficial de guías de evaluación e ingeniería de sistemas de la Comisión Electrotécnica Internacional.
                  </p>
                </a>
              </div>

              {/* Category 2: Publicaciones y Estudios Científicos */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                  Estudios y Artículos Técnicos
                </h3>

                <a
                  href="https://www.researchgate.net/publication/299380599_ISOIEC_29110_Normas_y_guias_de_ingenieria_de_software_y_sistemas_para_entidades_muy_pequenas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Publicación en ResearchGate
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Estudio exhaustivo sobre el uso de normas de ingeniería y guías adaptadas a las Entidades Muy Pequeñas (VSEs).
                  </p>
                </a>

                <a
                  href="https://sci-hub.box/10.1109/CIMPS49236.2019.9082430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Artículo de Validación en Sci-Hub
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Publicación científica de IEEE CIMPS que valida e instrumenta la aplicación de ISO/IEC 29110 en la industria de TI.
                  </p>
                </a>

                <a
                  href="https://revista.aenor.com/344/isoiec-29110-apoyo-a-las-pequenas-organizaciones-desarrollad.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Revista Oficial AENOR
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Artículo de apoyo y justificación sobre cómo la ISO/IEC 29110 ayuda a las pequeñas organizaciones de desarrollo de software.
                  </p>
                </a>
              </div>

              {/* Category 3: Repositorios Académicos (Casos Reales) */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Tesis y Casos de Éxito Reales
                </h3>

                <a
                  href="https://bibdigital.epn.edu.ec/bitstream/15000/21937/1/CD%2011427.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Caso Práctico EPN (Ecuador)
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Tesis académica de la Escuela Politécnica Nacional. Muestra una implementación real, entregables y auditoría interna de ISO 29110.
                  </p>
                </a>

                <a
                  href="https://repository.upb.edu.co/server/api/core/bitstreams/34196acd-0798-4a4f-a4d2-a755357d2f08/content"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-850 hover:-translate-y-0.5"
                >
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Libro Guía UPB (Colombia)
                    <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Publicación académica de la Universidad Pontificia Bolivariana sobre gestión de proyectos y calidad de software mediante la norma.
                  </p>
                </a>
              </div>
            </div>
          </div>
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
