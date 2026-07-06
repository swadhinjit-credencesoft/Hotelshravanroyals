import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

import { Barlow, Tangerine } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'

import PageTransition from '@/components/providers/PageTransition'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { MessageCircle, PhoneCall, Calendar } from 'lucide-react'
import { buildWhatsAppUrl } from '@/lib/hotelmate'

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
    default: 'Hotel Surya Bella Casa Purnea | Best Near Bus Stand & Vikass Market',
    template: '%s | Hotel Surya Bella Casa Purnea',
  },

  description:
    'Book Hotel Surya Bella Casa in Purnea near Bus Stand ✓ Free WiFi & Parking ✓ Rooftop Restaurant ✓ Banquet Hall ✓ 4.5★ Guest Rating. Best hotel in Purnia, Bihar. Book Direct & Save!',

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
        <link rel="preconnect" href="https://bookone.io" />
        <link rel="preconnect" href="https://bookonelocal.in" />
        <link rel="dns-prefetch" href="https://bookone.io" />
        <link rel="dns-prefetch" href="https://bookonelocal.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://hotelsuryabellacasa.com/#website",
              "url": "https://hotelsuryabellacasa.com",
              "name": "Hotel Surya Bella Casa Purnea",
              "description": "Best hotel in Purnea near Bus Stand. Book comfortable rooms with free WiFi, parking, rooftop restaurant. Hotel Surya Bella Casa, Purnia, Bihar.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://hotelsuryabellacasa.com/?s={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              "@id": "https://hotelsuryabellacasa.com/#hotel",
              "name": "Hotel Surya Bella Casa",
              "description": "Best hotel in Purnea near Bus Stand. Book comfortable rooms with free WiFi, parking, rooftop restaurant. Hotel Surya Bella Casa, Purnia, Bihar.",
              "url": "https://hotelsuryabellacasa.com",
              "telephone": "+919835923601",
              "email": "reservations@hotelsuryabellacasa.com",
              "image": "https://bookonelocal.in/cdn/IMG_3815.avif",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
                "addressLocality": "Purnea",
                "addressRegion": "Bihar",
                "postalCode": "854301",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.7771,
                "longitude": 87.4753
              },
              "hasMap": "https://www.google.com/maps/place/?cid=8931275976043074034",
              "sameAs": [
                "https://www.google.com/maps/place/?cid=8931275976043074034"
              ],
              "priceRange": "₹1,200 - ₹2,700",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "120",
                "bestRating": "5"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919835923601",
                "contactType": "reservations",
                "availableLanguage": ["Hindi", "English"]
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "23:59" }
              ]
            })
          }}
        />
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
        {/* Mobile Sticky Booking Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-forest/95 via-forest to-forest/95 backdrop-blur-xl border-t border-gold/15 px-4 py-2.5 shadow-2xl" style={{ boxShadow: '0 -4px 30px rgba(0,0,0,0.5)' }}>
          {/* Gold shimmer accent */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent 0%, #C9A84C 25%, #F5E6A3 50%, #C9A84C 75%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmerSweep 2.5s ease-in-out infinite'
              }}
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-shrink-0">
              <span className="font-sans text-[8px] uppercase tracking-[0.18em] text-gold/70">Best Rate Guarantee</span>
              <span className="font-serif text-xs text-ivory block leading-tight">Book Direct & Save</span>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-green-500/30 text-green-400 px-3 py-2 rounded-sm text-[10px] uppercase tracking-[0.12em] font-sans hover:bg-green-600/10 hover:border-green-400/50 transition-all"
                aria-label="Enquire via WhatsApp"
              >
                <MessageCircle size={14} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="tel:+919835923601"
                className="flex items-center gap-1.5 border border-gold/25 text-gold/80 px-3 py-2 rounded-sm text-[10px] uppercase tracking-[0.12em] font-sans hover:bg-gold/10 hover:border-gold/50 transition-all"
                aria-label="Call hotel"
              >
                <PhoneCall size={14} />
                <span className="hidden sm:inline">Call</span>
              </a>
              <a
                href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-gold to-amber-400 text-[#1a1004] px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.15em] font-sans font-bold hover:from-gold-light hover:to-amber-300 transition-all shadow-lg shadow-gold/20 active:scale-[0.97]"
                aria-label="Book your stay now"
              >
                <Calendar size={13} />
                <span>Book</span>
              </a>
            </div>
          </div>
        </div>
      {/* Preload hero poster image */}
      <link rel="preload" href="https://bookonelocal.in/cdn/IMG_3815.avif" as="image" fetchPriority="high" />
      </body>
    </html>
  )
}
