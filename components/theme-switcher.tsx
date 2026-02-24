"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-md border border-border bg-secondary p-0.5">
        <button className="h-6 w-6 rounded-sm" aria-label="Loading theme" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-border bg-secondary p-0.5">
      <button
        onClick={() => setTheme("light")}
        className={`flex h-6 w-6 items-center justify-center rounded-sm transition-colors ${
          theme === "light"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light theme"
      >
        <Sun className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex h-6 w-6 items-center justify-center rounded-sm transition-colors ${
          theme === "dark"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark theme"
      >
        <Moon className="h-3.5 w-3.5" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`flex h-6 w-6 items-center justify-center rounded-sm transition-colors ${
          theme === "system"
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
