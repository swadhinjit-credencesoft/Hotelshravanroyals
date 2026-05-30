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
    default: 'Hotel Bella Casa | Comfortable Stay in Purnia',
    template: '%s | Hotel Bella Casa',
  },

  description:
    'Hotel Bella Casa offers well-maintained rooms with essential amenities in Purnia, Bihar. Ideal for business and leisure travelers with easy access to local markets and transport.',

  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },

  keywords: [
    'Hotel Bella Casa',
    'Purnia hotel',
    'budget stay Purnia',
    'hotels in Purnia',
    'Bihar accommodation',
    'Bihar hotel',
    'Purnia accommodation',
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
    title: 'Hotel Bella Casa | Comfortable Stay in Purnia',
    description:
      'Hotel Bella Casa offers well-maintained rooms with essential amenities in Purnia, Bihar. Ideal for business and leisure travelers with easy access to local markets and transport.',
    url: 'https://hotelsuryabellacasa.com',
    siteName: 'Hotel Bella Casa',
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Bella Casa | Comfortable Stay in Purnia',
    description:
      'Hotel Bella Casa offers well-maintained rooms with essential amenities in Purnia, Bihar. Ideal for business and leisure travelers with easy access to local markets and transport.',
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
              rel="noreferrer"
              className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
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
