import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
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
  title: 'Unwind Karjat | Resort & Nature Retreat near Mumbai',
  description:
    'A boutique nature retreat in Karjat, Maharashtra offering luxurious yet cozy stays for leisure travellers, event groups, and corporate teams.',
  keywords: [
    'resort near Mumbai',
    'weekend getaway Karjat',
    'Karjat hotel',
    'Unwind Karjat',
    'nature resort',
    'Karjat resort',
  ],
  openGraph: {
    title: 'Unwind Karjat | Resort & Nature Retreat near Mumbai',
    description:
      'A boutique nature retreat in Karjat, Maharashtra offering luxurious yet cozy stays for leisure travellers, event groups, and corporate teams.',
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
