import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { Footer, Header } from '@/components'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Therapay',
  description: 'Payroll calculator to help therapists estimate earnings.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
