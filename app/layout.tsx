import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import {Navigation} from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Emmanuel Oye - Web Developer',
  description: 'Portfolio of Emmanuel Oye, React and Next.js Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden`}>
        <Navigation />
        <main className="container mx-auto px-4 pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}