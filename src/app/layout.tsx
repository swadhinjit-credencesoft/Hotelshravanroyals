import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Barlow } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import { siteConfig } from '@/data/site'
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

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://unwindkarjat.com'),
  icons: {
    icon: '/unwindkarjatlogo.png',
  },
  title: {
    default: 'Unwind Karjat | Boutique Resort & Private Getaway Near Pune',
    template: '%s | Unwind Karjat'
  },
  description:
    'Unwind Karjat is a private boutique retreat near Pune with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.',
  keywords: [
    'Unwind Karjat',
    'resort in Karjat',
    'boutique resort near Pune',
    'weekend getaway near Pune',
    'family resort in Karjat',
    'private resort Karjat',
    'corporate offsite Karjat',
    'group stay Karjat',
    'resort near Mumbai and Pune',
    'birthday celebration Karjat',
    'family getaway near Pune',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Unwind Karjat | Boutique Resort & Private Getaway Near Pune',
    description:
      'Unwind Karjat is a private boutique retreat near Pune with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.',
    url: 'https://unwindkarjat.com',
    siteName: 'Unwind Karjat',
    images: [
      {
        url: 'https://unwindkarjat.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unwind Karjat — Stay • Dine • Unwind'
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unwind Karjat | Boutique Resort & Private Getaway Near Pune',
    description:
      'Unwind Karjat is a private boutique retreat near Pune with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.',
    images: ['https://unwindkarjat.com/og-image.png'],
  },
}

import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { MessageCircle } from 'lucide-react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${barlow.variable}`}
    >
      <head>
        
        <meta name="theme-color" content="#FBF7F0" />
      </head>
      <body>
        <CustomCursor />
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <LenisProvider>
          <PageTransition>
            <Breadcrumbs />
            {children}
            
            {/* Global Floating WhatsApp Button */}
            <a 
              href={siteConfig.whatsapp} 
              target="_blank" 
              rel="noreferrer"
              className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
              style={{ bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))' }}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={28} />
              <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-forest px-4 py-2 rounded-sm text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gold/10">
                How can we help?
              </span>
            </a>
          </PageTransition>
        </LenisProvider>
      </body>
    </html>
  )
}
