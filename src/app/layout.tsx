import type { Metadata } from 'next'
import localFont from "next/font/local";
import { Navbar } from '@/components/'
import './globals.css'

const myFont = localFont({ src: "../fonts/eurostile.ttf" });

export const metadata: Metadata = {
  title: 'Kev\'s Porfolio',
  description: 'KevTheDev Web Dev Porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
