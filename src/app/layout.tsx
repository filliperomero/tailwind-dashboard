import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Sidebar } from '@/components/Sidebar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind Dashboard',
  description: 'Tailwind Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <Sidebar />
            <main className="max-w-[100vw] px-4 py-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
