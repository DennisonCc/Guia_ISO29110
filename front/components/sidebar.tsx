"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Lock, CheckCircle2, Home, Layers } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { isoStandards } from "@/data/iso-standards"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProgressBar } from "@/components/ProgressBar"
import { useProgress } from "@/hooks/useProgress"

const colorDot = {
  blue: "bg-blue-500",
  violet: "bg-violet-500",
  indigo: "bg-indigo-500",
  amber: "bg-amber-500",
  emerald: "bg-emerald-500",
  rose: "bg-rose-500",
}

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const { isLoaded, isPhaseComplete, getPhaseProgress, isPhaseUnlocked } = useProgress()

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-background border border-border shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-4 w-4 text-foreground" />
        ) : (
          <Menu className="h-4 w-4 text-foreground" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-72 border-r border-sidebar-border bg-sidebar transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 border-b border-sidebar-border">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setIsOpen(false)}
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-sm">
                  <Layers className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-sidebar-foreground leading-none">
                    ISO/IEC 29110
                  </p>
                  <p className="text-xs text-sidebar-foreground/60 mt-0.5">
                    Guía Interactiva VSE
                  </p>
                </div>
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Home link */}
          <div className="px-3 pt-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === "/"
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <Home className="h-4 w-4 shrink-0" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Nav label */}
          <div className="px-5 pt-4 pb-1">
            <p className="text-xs font-semibold text-sidebar-foreground/40 uppercase tracking-wider">
              Fases
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 pb-3">
            <div className="space-y-1">
              {isoStandards.map((standard) => {
                const isActive = pathname === `/docs/${standard.id}`
                const complete = isLoaded ? isPhaseComplete(standard) : false
                const unlocked = isLoaded
                  ? isPhaseUnlocked(standard, isoStandards)
                  : standard.requiredPhase === null
                const progress = isLoaded
                  ? getPhaseProgress(standard)
                  : { percentage: 0, completed: 0, total: 0 }

                // Status: completed > active > unlocked-not-started > locked
                const isLocked = isLoaded && !unlocked

                return (
                  <Link
                    key={standard.id}
                    href={`/docs/${standard.id}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-start gap-2.5 rounded-lg px-3 py-2.5 transition-all",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : isLocked
                        ? "text-sidebar-foreground/50 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground/70"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    {/* Status dot / icon */}
                    <div className="shrink-0 mt-0.5">
                      {complete ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      ) : isLocked ? (
                        <Lock className="h-3.5 w-3.5 text-sidebar-foreground/30 mt-0.5" />
                      ) : (
                        <div
                          className={cn(
                            "h-2 w-2 rounded-full mt-1",
                            isActive
                              ? colorDot[standard.color]
                              : "bg-muted-foreground/30"
                          )}
                        />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-semibold truncate">
                          {standard.partNumber}
                        </span>
                        {isLoaded && !complete && progress.total > 0 && !isLocked && (
                          <span className="text-xs text-sidebar-foreground/40 shrink-0 tabular-nums">
                            {progress.completed}/{progress.total}
                          </span>
                        )}
                      </div>
                      <span className="block text-xs mt-0.5 opacity-70 truncate">
                        {standard.subtitle}
                      </span>
                      {isLoaded && progress.total > 0 && !isLocked && (
                        <ProgressBar
                          percentage={progress.percentage}
                          color={complete ? "emerald" : standard.color}
                          size="sm"
                          className="mt-1.5"
                          animated={false}
                        />
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/40 text-center">
              Tu progreso se guarda localmente
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
