import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Communauté Events',
  description: 'Open-source, dedicated to the french minecraft events community.',
  openGraph: {
    description: "Communauté Events est une organization open-source, créant des outils pour la communauté event français sur Minecraft",
    type: "website",
    images: "https://commu.events/og-image.png"
  },
  twitter: {
    card: "summary_large_image",
    description: "Communauté Events est une organization open-source, créant des outils pour la communauté event français sur Minecraft",
    images: "https://commu.events/og-image.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overscroll-none`}>{children}</body>
    </html>
  )
}
