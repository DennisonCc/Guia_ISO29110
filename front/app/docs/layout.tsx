import { Sidebar } from "@/components/sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:pl-72">
        <div className="px-6 py-10 lg:px-10 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
