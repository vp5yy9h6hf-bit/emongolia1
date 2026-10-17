import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'eMongolia',
  description: 'eMongolia',
}

export const viewport: Viewport = {
  themeColor: '#0b0d12',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
