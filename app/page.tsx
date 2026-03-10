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

function getAllPages() {
  if (!fs.existsSync(contentDir)) return []
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md") && f !== "home.md")
    .map((f) => {
      const raw = fs.readFileSync(path.join(contentDir, f), "utf-8")
      const { data } = matter(raw)
      const slug = f.replace(/\.md$/, "")
      return {
        slug,
        title: data.title || slug,
        lastUpdated: data.lastUpdated instanceof Date
          ? data.lastUpdated.toISOString().split("T")[0]
          : data.lastUpdated || "",
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export default function Page() {
  const result = getHomeContent()
  const pages = getAllPages()

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
        <div className="py-6">
          <main className="max-w-[680px]">
            {/* Render home.md content if it has body text */}
            {result && result.content.trim() && (
              <article className="prose-article mb-8">
                <MarkdownArticle content={result.content} />
              </article>
            )}

            {/* Auto-generated page index */}
            <section>
              <ul className="space-y-1.5">
                {pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="text-sm text-foreground underline underline-offset-3 decoration-muted-foreground/50 hover:decoration-foreground transition-colors"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
