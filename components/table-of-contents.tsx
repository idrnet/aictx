"use client"

import { useEffect, useState } from "react"

interface Heading {
  level: number
  text: string
  id: string
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    for (const { id } of headings) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  return (
    <nav className="text-xs">
      <p className="mb-3 font-medium uppercase tracking-wider text-muted-foreground/70">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {headings.map(({ level, text, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block border-l-2 transition-colors ${
                level === 3 ? "pl-5" : level === 4 ? "pl-8" : "pl-3"
              } ${
                activeId === id
                  ? "border-foreground text-foreground font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
