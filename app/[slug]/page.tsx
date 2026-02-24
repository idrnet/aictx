import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MarkdownArticle } from "@/components/markdown-article"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

const contentDir = path.join(process.cwd(), "content")

function getContent(slug: string) {
  const filePath = path.join(contentDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const frontmatter: Record<string, string> = {}
  for (const [key, value] of Object.entries(data)) {
    frontmatter[key] = value instanceof Date ? value.toISOString().split("T")[0] : String(value)
  }
  return { frontmatter, content }
}

function extractHeadings(markdown: string) {
  const headings: { level: number; text: string; id: string }[] = []
  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,4})\s+(.+)$/)
    if (match) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
      headings.push({ level, text, id })
    }
  }
  return headings
}

export function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const result = getContent(slug)
  if (!result) return { title: "Not Found — aictx" }
  return {
    title: `${result.frontmatter.title || slug} — aictx`,
    description: result.frontmatter.description || "",
  }
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = getContent(slug)
  if (!result) notFound()

  const { frontmatter, content } = result
  const headings = extractHeadings(content)
  const title = frontmatter.title || slug

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="font-serif text-base font-semibold tracking-tight text-foreground"
          >
            aictx
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="py-6 lg:flex lg:gap-12">
          <main className="min-w-0 max-w-[680px] flex-1">
            <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                aictx
              </Link>
              <span>/</span>
              <span className="text-foreground">{title}</span>
            </nav>

            <header className="mb-8">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                {title}
              </h1>
              {frontmatter.lastUpdated && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Last updated {frontmatter.lastUpdated}
                </p>
              )}
            </header>

            <article className="prose-article">
              <MarkdownArticle content={content} />
            </article>
          </main>

          {headings.length > 0 && (
            <aside className="hidden lg:block lg:w-56 lg:shrink-0">
              <div className="sticky top-20">
                <TableOfContents headings={headings} />
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
