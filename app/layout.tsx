import { siteConfig } from '@/config/site'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template:`%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons:[
    {
      url:"/logo.svg",
      href:"/logo.svg"
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
