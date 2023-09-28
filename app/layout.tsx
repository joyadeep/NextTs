import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Joyadeep | Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider 
      attribute='class'
      defaultTheme='light'
      enableSystem={false}
      storageKey='portfolio-theme'
      >
      {children}
      <Toaster/>
      </ThemeProvider>
      </body>
    </html>
  )
}
