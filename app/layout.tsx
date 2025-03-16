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
  metadataBase: new URL('https://emmanueloye.xyz'),
  keywords: [
    "Frontend Developer",
    "Next.js Developer",
    "Web Developer",
    "React Developer Portfolio",
    "Next.js Developer Portfolio",
    "Frontend Developer Portfolio",
    "Hire Freelance Next.js Developer",
    "SEO Optimized Next.js Landing Pages",
    "Figma-to-Code developer",
    "Next.js & Tailwind CSS Developer",
    "Modern Responsive Web Apps Portfolio",
  ],
  title: 'Emmanuel Oye | Next.js & Frontend Developer',
  description: 'Frontend Developer specializing in Next.js, React, and Tailwind. I build modern, fast and SEO-friendly web apps and landing pages. Check out my work!',
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