import { notFound } from "next/navigation"
import { getStandardById, getAllStandardIds } from "@/data/iso-standards"
import { StandardContent } from "@/components/standard-content"

interface DocPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllStandardIds().map((id) => ({
    slug: id,
  }))
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = await params
  const standard = getStandardById(slug)
  
  if (!standard) {
    return {
      title: "Not Found",
    }
  }

  return {
    title: `${standard.partNumber}: ${standard.subtitle} | ISO/IEC 29110 Documentation`,
    description: standard.description,
  }
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params
  const standard = getStandardById(slug)

  if (!standard) {
    notFound()
  }

  return <StandardContent standard={standard} />
}
