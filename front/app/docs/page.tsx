import Link from "next/link"
import { isoStandards } from "@/data/iso-standards"

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span>Documentation</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3">
          Documentation
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Select a part of the ISO/IEC 29110 series to explore its content.
        </p>
      </header>

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
  )
}
