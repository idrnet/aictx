# aictx

**Public, anonymous knowledge base** — static markdown pages on Vercel.

- **URL:** https://aictx.vercel.app
- **Repo:** [idrnet/aictx](https://github.com/idrnet/aictx) (private repo, public site)
- **Stack:** Next.js 16, Tailwind CSS, react-markdown, gray-matter
- **Host:** Vercel (auto-deploy on push to main)
- **Parent:** `/root/CLAUDE.md` (SkyNex kernel)

## Purpose

Anonymous public context pages readable by any LLM with web fetch capabilities. No authentication required. Digital business card + knowledge sharing.

## How it works

1. Add/edit `.md` files in `content/`
2. Frontmatter: `title`, `description`, `lastUpdated` (optional)
3. Double-click `publish.bat` → pushes to GitHub → Vercel deploys in ~30s
4. `content/home.md` → renders at `/` (homepage)
5. `content/<anything>.md` → renders at `/<anything>` (auto-routed via `[slug]`)
6. Homepage auto-lists all pages (no manual index needed)

## Key files

| File | Purpose |
|------|---------|
| `content/home.md` | Homepage content (rendered at `/`) |
| `content/*.md` | Each becomes a public page at `/<filename>` |
| `app/page.tsx` | Homepage: renders `home.md` + auto-generated page index |
| `app/[slug]/page.tsx` | Dynamic route: renders any `content/*.md` |
| `components/markdown-article.tsx` | Client-side markdown renderer |
| `components/table-of-contents.tsx` | Scroll-spy TOC sidebar |
| `publish.bat` | One-click publish from Laptop |
| `pull.bat` | One-click sync from remote |

## Conventions

- Favicon: Vercel's favicon (`public/favicon.ico`)
- Fonts: Inter (sans), Lora (serif headings), Geist Mono
- Theme: light/dark/system via shadcn ThemeProvider
- CSS: Obsidian Publish-style prose in `globals.css`
- `.lnk` and `.url` files are gitignored (user convenience shortcuts in `content/`)

## Laptop path

`D:\codeb\webs\aictx\`
