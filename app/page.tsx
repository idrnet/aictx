import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MarkdownArticle } from "@/components/markdown-article"
import { TableOfContents } from "@/components/table-of-contents"
import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"

const contentDir = path.join(process.cwd(), "content")

function getHomeContent() {
  const filePath = path.join(contentDir, "home.md")
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

export default function Page() {
  const result = getHomeContent()
  if (!result) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
            <Link href="/" className="font-serif text-base font-semibold tracking-tight text-foreground">
              aictx
            </Link>
            <ThemeSwitcher />
          </div>
        </header>
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-muted-foreground">No home.md found in content/</p>
        </div>
      </div>
    )
  }

  const { frontmatter, content } = result
  const headings = extractHeadings(content)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-serif text-base font-semibold tracking-tight text-foreground">
            aictx
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className="py-6 lg:flex lg:gap-12">
          <main className="min-w-0 max-w-[680px] flex-1">
            {frontmatter.lastUpdated && (
              <p className="mb-4 text-xs text-muted-foreground">
                Last updated {frontmatter.lastUpdated}
              </p>
            )}

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
