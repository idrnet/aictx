import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Lora } from 'next/font/google'
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _lora = Lora({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'aictx',
  description: 'Tesla Model 3 2021 RWD, standard wheel (no Yoke)',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 65"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="%23000"/></svg>',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 65"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="%23fff"/></svg>',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
