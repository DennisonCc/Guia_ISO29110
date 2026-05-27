import { Sidebar } from "@/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:pl-72 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-10 lg:px-10 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
