import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EXP. - Experience Point Circle",
  description: "プログラミングサークル EXP.（Experience Point Circle）の公式サイト。仲間と一緒にプログラミングを学び、成長しよう。",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
