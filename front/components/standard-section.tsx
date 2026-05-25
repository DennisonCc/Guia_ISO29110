import { Lightbulb } from "lucide-react"

interface StandardSectionProps {
  title: string
  content: string
  example?: string
}

export function StandardSection({ title, content, example }: StandardSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-foreground mb-6 pb-2 border-b border-border">
        {title}
      </h2>
      
      <div className={`grid gap-6 ${example ? "lg:grid-cols-[7fr_3fr]" : "grid-cols-1"}`}>
        {/* Main Content - 70% on desktop */}
        <div 
          className="prose prose-neutral dark:prose-invert max-w-none text-foreground/90 leading-relaxed
            [&_h4]:text-lg [&_h4]:font-medium [&_h4]:text-foreground [&_h4]:mt-6 [&_h4]:mb-3
            [&_p]:mb-4 [&_p]:leading-relaxed
            [&_ul]:my-4 [&_ul]:pl-6 [&_ul]:list-disc
            [&_li]:mb-2
            [&_dl]:my-4
            [&_dt]:font-semibold [&_dt]:text-foreground [&_dt]:mt-4 [&_dt]:mb-1
            [&_dd]:ml-4 [&_dd]:mb-3 [&_dd]:text-muted-foreground
            [&_em]:text-muted-foreground [&_em]:text-sm
            [&_table]:w-full [&_table]:my-4 [&_table]:border-collapse
            [&_th]:text-left [&_th]:p-3 [&_th]:bg-muted [&_th]:font-semibold [&_th]:border [&_th]:border-border
            [&_td]:p-3 [&_td]:border [&_td]:border-border
            [&_.placeholder]:text-muted-foreground [&_.placeholder]:italic"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {/* Example Card - 30% on desktop, stacks below on mobile */}
        {example && (
          <aside className="lg:sticky lg:top-6 h-fit">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/60">
                  <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                  Example
                </h4>
              </div>
              <p className="text-sm leading-relaxed text-blue-800 dark:text-blue-200">
                {example}
              </p>
            </div>
          </aside>
        )}
      </div>
    </section>
  )
}
