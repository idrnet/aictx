import Link from "next/link"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Page() {
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
        <div className="py-4">
          <main className="max-w-[680px]">
            <article>
              <p className="text-sm text-foreground/70">Context tools and documentation.</p>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}
