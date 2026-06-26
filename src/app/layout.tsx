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
import WhatsAppButton from '@/components/ui/WhatsAppButton'

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
        url: 'https://bookonelocal.in/cdn/IMG_3815.jpg',
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
    images: ['https://bookonelocal.in/cdn/IMG_3815.jpg'],
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
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G1ZTFH35ZB"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G1ZTFH35ZB');
            `,
          }}
        />

      </head>
      <body
        className={`${barlow.variable} ${tangerine.variable} antialiased pb-16 md:pb-0`}
        suppressHydrationWarning
      >
        <CustomCursor />

        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        <LenisProvider>
          <Navbar />

          <PageTransition>
            <Breadcrumbs />

            {children}

            <WhatsAppButton />
          </PageTransition>

          <Footer />
        </LenisProvider>
        {/* Mobile Sticky Booking Button */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cream/95 backdrop-blur-md border-t border-gold/10 px-4 py-3 flex items-center justify-between shadow-warm-lg">
          <span className="font-serif text-sm text-forest">Book Your Stay</span>
          <a
            href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.16em] px-6 py-2.5 rounded-sm hover:bg-gold-light transition-colors shadow-md"
            aria-label="Book your stay now"
          >
            Book Now
          </a>
        </div>
      </body>
    </html>
  )
}
