import type { StandardPart } from "@/data/iso-standards"
import { StandardSection } from "./standard-section"

interface StandardContentProps {
  standard: StandardPart
}

export function StandardContent({ standard }: StandardContentProps) {
  return (
    <article className="max-w-4xl">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
            {standard.partNumber}
          </span>
          <span>{standard.title}</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-3 text-balance">
          {standard.subtitle}
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          {standard.description}
        </p>
      </header>

      {/* Table of Contents */}
      <nav className="mb-10 p-5 rounded-lg border border-border bg-card">
        <h2 className="text-sm font-semibold text-foreground mb-3">On this page</h2>
        <ul className="space-y-2">
          {standard.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <div>
        {standard.sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-6">
            <StandardSection
              title={section.title}
              content={section.content}
              example={section.example}
            />
          </div>
        ))}
      </div>
    </article>
  )
}
