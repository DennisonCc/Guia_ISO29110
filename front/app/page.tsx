import Link from "next/link"
import { isoStandards } from "@/data/iso-standards"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-foreground">
            ISO/IEC 29110
          </Link>
          <div className="flex items-center gap-4">
            <Link 
              href="/docs/part-1" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                ISO/IEC 29110
              </span>
              <span>Technical Documentation</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
               Perfiles de ciclo de vida para Pequeñas Organizaciones
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Normativa internacional desarrollada específicamente para 
              satisfacer las necesidades de las Pequeñas Organizaciones (VSEs)
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/part-1"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started with Part 1
                <svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://www.iso.org/standard/62711.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Official ISO Page
                <svg 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* What is a VSE Section */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            What is a VSE?
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            A <strong className="text-foreground">Very Small Entity (VSE)</strong> is defined as an enterprise, 
            organization, department, or project of up to 25 people. VSEs represent 
            between 95% and 99% of all business organizations worldwide. The ISO/IEC 29110 
            series provides these organizations with accessible, practical standards for 
            software and systems development.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg border border-border bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Small Teams</h3>
              <p className="text-sm text-muted-foreground">
                Designed for organizations with 25 or fewer people, including startups and small departments.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-border bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Enables VSEs to be recognized as organizations producing quality software and systems.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-border bg-card">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Practical Approach</h3>
              <p className="text-sm text-muted-foreground">
                Streamlined profiles that are achievable without extensive resources or expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Parts */}
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Documentation Structure
          </h2>
          <p className="text-muted-foreground mb-8">
            Browse the different parts of the ISO/IEC 29110 series
          </p>
          <div className="grid gap-4">
            {isoStandards.map((standard) => (
              <Link
                key={standard.id}
                href={`/docs/${standard.id}`}
                className="group flex items-start gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 h-12 w-12 rounded-lg bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {standard.partNumber.replace("Part ", "")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {standard.partNumber}: {standard.subtitle}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {standard.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-muted-foreground">
                      {standard.sections.length} sections
                    </span>
                    {standard.id === "part-1" && (
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary">
                        Start Here
                      </span>
                    )}
                  </div>
                </div>
                <svg 
                  className="shrink-0 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                ISO/IEC 29110 Documentation Reference
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                For research and educational purposes. Refer to official ISO documents for authoritative content.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.iso.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ISO.org
              </a>
              <a
                href="https://www.iec.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                IEC.ch
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
