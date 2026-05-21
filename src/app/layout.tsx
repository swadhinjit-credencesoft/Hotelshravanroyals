import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import 'react-datepicker/dist/react-datepicker.css'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import PageTransition from '@/components/providers/PageTransition'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shravan Royal Inn — Excellence in Jaipur Hospitality',
  description:
    'A premium luxury hotel in Jaipur offering bespoke service and timeless comfort.',
  keywords: [
    'luxury hotel Jaipur',
    'Shravan Royal Inn',
    'Jaipur hospitality',
    'premium stay Jaipur',
    'luxury boutique hotel',
    'exclusive Jaipur getaway',
  ],
  openGraph: {
    title: 'Shravan Royal Inn — Excellence in Jaipur Hospitality',
    description:
      'A premium luxury hotel in Jaipur offering bespoke service and timeless comfort.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#FBF7F0" />
      </head>
      <body>
        <CustomCursor />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <LenisProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  )
}
