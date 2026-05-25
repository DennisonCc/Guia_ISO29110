"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { isoStandards } from "@/data/iso-standards"
import { ThemeToggle } from "@/components/theme-toggle"

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-md bg-background border border-border shadow-sm"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-foreground" />
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
          "fixed top-0 left-0 z-40 h-screen w-72 border-r border-border bg-sidebar transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-sidebar-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="block" onClick={() => setIsOpen(false)}>
                <h1 className="text-lg font-bold text-sidebar-foreground">ISO/IEC 29110</h1>
                <p className="text-sm text-sidebar-foreground/70 mt-1">
                  VSE Lifecycle Profiles
                </p>
              </Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              {isoStandards.map((standard) => {
                const isActive = pathname === `/docs/${standard.id}`
                return (
                  <Link
                    key={standard.id}
                    href={`/docs/${standard.id}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <span className="font-medium">{standard.partNumber}</span>
                    <span className="block text-xs mt-0.5 opacity-70">{standard.subtitle}</span>
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-foreground/50">
              Documentation reference for research purposes
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
