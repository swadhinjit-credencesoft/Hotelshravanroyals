import type { Metadata } from 'next'
import './globals.css'

import { Barlow, Tangerine } from 'next/font/google'

import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import PageTransition from '@/components/providers/PageTransition'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

import { MessageCircle } from 'lucide-react'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-barlow',
})

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
  variable: '--font-tangerine',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hotelsuryabellacasa.com'),

  title: {
    default: 'Hotel Surya Bella Casa Purnia | Best Stay in Purnia',
    template: '%s | Hotel Surya Bella Casa',
  },

  description:
    'Book a comfortable, budget-friendly stay at Hotel Surya Bella Casa in Purnia, Bihar. Near Bus Stand & Vikass Market. Perfect for families & business travelers.',

  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },

  keywords: [
    'Hotel Surya Bella Casa',
    'hotel in purnia',
    'best hotel in purnia',
    'bella casa purnia',
    'hotel near bus stand purnia',
    'hotel near vikass market purnia',
    'budget hotel in purnia',
    'family hotel in purnia',
    'business hotel in purnia',
    'hotel rooms in purnia',
    'accommodation in purnia',
    'stay in purnia',
    'hotel near purnia railway station',
    'affordable hotel in purnia',
    'hotel in bhatta bazar purnia',
    'banquet hall purnia',
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
    title: 'Hotel Surya Bella Casa Purnia | Best Stay in Purnia',
    description:
      'Book a comfortable, budget-friendly stay at Hotel Surya Bella Casa in Purnia, Bihar. Near Bus Stand & Vikass Market. Perfect for families & business travelers.',
    url: 'https://hotelsuryabellacasa.com',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Surya Bella Casa Purnia | Best Stay in Purnia',
    description:
      'Book a comfortable, budget-friendly stay at Hotel Surya Bella Casa in Purnia, Bihar. Near Bus Stand & Vikass Market. Perfect for families & business travelers.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FBF7F0" />
      </head>

      <body
        className={`${barlow.variable} ${tangerine.variable} antialiased`}
        suppressHydrationWarning
      >
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
              href="https://wa.me/9835923601"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-20 md:bottom-8 right-6 md:right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
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
