import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import PageTransition from '@/components/providers/PageTransition'
import JsonLd from '@/components/seo/JsonLd'
import { pageMetadata, siteUrl } from '@/lib/seo'

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
  ...pageMetadata(
    'Shravan Royal Inn | Hotel in Jaipur, Rajasthan',
    'Discover Shravan Royal Inn in Jaipur, Rajasthan. Explore rooms, hotel experiences, events and reservation information.',
    '/',
  ),
  metadataBase: siteUrl,
  icons: {
    icon: [{ url: '/Shravan%20Logo.png', type: 'image/png' }],
    shortcut: [{ url: '/Shravan%20Logo.png', type: 'image/png' }],
    apple: [{ url: '/Shravan%20Logo.png', type: 'image/png' }],
  },
  keywords: ['hotel Jaipur', 'Shravan Royal Inn', 'Jaipur hotel', 'hotel rooms Jaipur'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': new URL('/#website', siteUrl).toString(),
  name: 'Shravan Royal Inn',
  url: siteUrl.toString(),
  publisher: { '@id': new URL('/#hotel', siteUrl).toString() },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <meta name="theme-color" content="#FBF7F0" />
      </head>
      <body>
        <JsonLd data={websiteSchema} />
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
