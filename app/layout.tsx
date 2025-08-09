import type { Metadata } from "next"
import { Cairo } from 'next/font/google'
import "./globals.css"

const cairo = Cairo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "شركة مصر للتحليل والدراسات التسويقية",
  description: "شركة رائدة في مجال التحليل والدراسات التسويقية والتصميم الإبداعي",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
