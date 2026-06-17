import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

import { Barlow, Tangerine } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
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
  // Brand Keywords
  'hotel surya bella casa',
  'surya bella casa purnia',
  'bella casa purnia',
  'hotel surya bella casa purnia',
  'surya bella casa hotel',

  // Core Hotel Keywords
  'hotel in purnia',
  'best hotel in purnia',
  'top hotel in purnia',
  'luxury hotel in purnia',
  'premium hotel in purnia',
  'budget hotel in purnia',
  'affordable hotel in purnia',
  'family hotel in purnia',
  'business hotel in purnia',
  'hotel rooms in purnia',
  'best accommodation in purnia',
  'accommodation in purnia',
  'stay in purnia',
  'best place to stay in purnia',

  // Booking Intent Keywords
  'book hotel in purnia',
  'hotel booking in purnia',
  'online hotel booking purnia',
  'hotel reservation purnia',
  'best hotel deals in purnia',
  'hotel near me in purnia',
  'rooms available in purnia',
  'hotel room booking purnia',

  // Location Keywords
  'hotel near purnia railway station',
  'best hotel near purnia railway station',
  'hotel near purnia bus stand',
  'hotel near bus stand purnia',
  'hotel near vikas market purnia',
  'hotel in bhatta bazar purnia',
  'hotel near bhatta bazar purnia',
  'hotel near line bazar purnia',
  'hotel near gulabbagh purnia',
  'hotel in central purnia',

  // Business Travel Keywords
  'corporate hotel in purnia',
  'hotel for business travelers in purnia',
  'business stay in purnia',
  'executive rooms in purnia',
  'corporate accommodation in purnia',
  'conference hotel in purnia',

  // Family Stay Keywords
  'family stay in purnia',
  'safe hotel in purnia',
  'hotel for family stay in purnia',
  'comfortable stay in purnia',
  'weekend stay in purnia',

  // Banquet & Event Keywords
  'banquet hall in purnia',
  'best banquet hall in purnia',
  'marriage hall in purnia',
  'wedding venue in purnia',
  'engagement venue in purnia',
  'birthday party hall in purnia',
  'event venue in purnia',
  'conference hall in purnia',
  'corporate event venue in purnia',
  'party hall in purnia',

  // Amenities Keywords
  'hotel with restaurant in purnia',
  'hotel with parking in purnia',
  'hotel with banquet hall in purnia',
  'hotel with conference hall in purnia',
  'modern hotel in purnia',
  'comfortable hotel rooms in purnia',

  // Long Tail High Conversion Keywords
  'best hotel near purnia railway station',
  'best family hotel in purnia',
  'best business hotel in purnia',
  'affordable hotel near purnia bus stand',
  'hotel with banquet hall in purnia',
  'premium stay in purnia',
  'top rated hotel in purnia',
  'luxury stay in purnia',
  'hotel for wedding guests in purnia',
  'hotel for corporate stays in purnia'
],

  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/',
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WM9Z3LN3'}');
            `,
          }}
        />
      </head>

      <body
        className={`${barlow.variable} ${tangerine.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WM9Z3LN3'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CustomCursor />

        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <LenisProvider>
          <Navbar />

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

          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
