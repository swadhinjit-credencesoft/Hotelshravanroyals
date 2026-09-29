import type { Metadata, Viewport } from 'next'
import './globals.css'

import { Barlow, Tangerine } from 'next/font/google'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LenisProvider from '@/components/providers/LenisProvider'
import ScrollToTop from '@/components/providers/ScrollToTop'

import PageTransition from '@/components/providers/PageTransition'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import MobileStickyBar from '@/components/layout/MobileStickyBar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FBF7F0',
}

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
  display: 'optional',
  variable: '--font-tangerine',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thedivineoasisresort.com'),

  title: {
    default: 'The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
    template: '%s | The Divine Oasis',
  },

  description:
    'The Divine Oasis is a forest resort atop Ajodhya Hill in Purulia, West Bengal. Mud cottages, luxury suites, organic farm dining, and hilltop serenity. Book direct and save!',

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
  'the divine oasis',
  'The Divine Oasis resort',
  'the divine oasis Ajodhya Hill',
  'The Divine Oasis Purulia',
  'divine oasis resort',

  // Core Resort Keywords
  'resort in Purulia',
  'best resort in Purulia',
  'top resort in Purulia',
  'forest resort in Ajodhya Hill',
  'hill resort in West Bengal',
  'stay in Purulia',
  'weekend getaway Purulia',
  'nature resort Purulia',
  'cottage stay near Ajodhya Hill',
  'best place to stay in Purulia',

  // Booking Intent Keywords
  'book resort in Purulia',
  'resort booking in Purulia',
  'online resort booking Purulia',
  'resort reservation Purulia',
  'mud cottage booking Purulia',
  'resort near me in Purulia',
  'cottages available in Purulia',
  'resort room booking Purulia',

  // Location Keywords
  'Ajodhya Hill resort',
  'resort near Ajodhya Hill',
  'resort near Thurga Dam',
  'resort near Deulghata',
  'Deulghata temple stay',
  'resort near Barabhum',
  'resort in Baghmundi',
  'Ajodhya Hills and Forest Reserve cottages',

  // Experience Keywords
  'organic farm resort Purulia',
  'barbeque resort Purulia',
  'mud cottage resort',
  'eco resort Ajodhya Hill purulia',
  'nature experience purulia',
  'hillside cottage stay west bengal',

  // Family & Group Keywords
  'family resort in Purulia',
  'group stay Ajodhya Hill',
  'couple cottage Purulia',
  'birthday party resort Purulia',
  'corporate offsite resort Purulia',
  'social event venue Purulia',

  // Amenities Keywords
  'resort with wifi Purulia',
  'resort with organic food',
  'resort with barbeque Purulia',
  'peaceful resort West Bengal',
  'hilltop resort Ajodhya',

  // Long Tail High Conversion Keywords
  'best resort near Purulia Junction',
  'resort near Ajodhya Hill for family',
  'luxury cottage Ajodhya Hill',
  'budget cottage stay Purulia',
  'weekend cottage resort Purulia',
  'top rated resort in Purulia',
  'eco friendly resort West Bengal',
  'resort with forest view',
  'mud cottage stay in Ajodhya Hills'
],

  alternates: {
    canonical: 'https://thedivineoasisresort.com/',
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
    title: 'The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
    description:
      'Book a serene forest retreat at The Divine Oasis on Ajodhya Hill, Purulia, West Bengal. Premium mud cottages, luxury suites, organic farm dining, and barbeque evenings.',
    url: 'https://thedivineoasisresort.com',
    siteName: 'The Divine Oasis',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis - Ajodhya Hill Forest Resort',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
    description:
      'Book a serene forest retreat at The Divine Oasis on Ajodhya Hill, Purulia, West Bengal. Premium mud cottages, luxury suites, organic farm dining, and barbeque evenings.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preconnect" href="https://bookone.io" />
        <link rel="preconnect" href="https://bookonelocal.in" />
        <link rel="dns-prefetch" href="https://bookone.io" />
        <link rel="dns-prefetch" href="https://bookonelocal.in" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg" imageSizes="100vw" imageSrcSet="https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg 1920w" fetchPriority="high" />
        <link rel="preload" as="image" href="/homehero/homehero2.jpg" imageSizes="100vw" imageSrcSet="/homehero/homehero2.jpg 1920w" />
        <link rel="preload" as="image" href="/homehero/homehero3.jpg" imageSizes="100vw" imageSrcSet="/homehero/homehero3.jpg 1920w" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://thedivineoasisresort.com/#website",
              "url": "https://thedivineoasisresort.com",
              "name": "The Divine Oasis",
              "description": "Forest resort atop Ajodhya Hill in Purulia, West Bengal. Premium mud cottages, luxury suite cottages, organic farm dining, and hilltop serenity.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://thedivineoasisresort.com/?s={search_term_string}"
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
              "@id": "https://thedivineoasisresort.com/#hotel",
              "name": "The Divine Oasis",
              "alternateName": "The Divine Oasis Resort",
              "description": "The Divine Oasis is a tranquil forest resort nestled atop Ajodhya Hill in Purulia, West Bengal. Stay in premium mud cottages and luxury suite cottages surrounded by nature, with organic farm dining, barbeque evenings, and serene hilltop views.",
              "url": "https://thedivineoasisresort.com",
              "telephone": "+91990398950",
              "email": "thedivineoasisresort@gmail.com",
              "image": [
                "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
                "https://thedivineoasisresort.com/homehero/homehero2.jpg",
                "https://thedivineoasisresort.com/homehero/homehero3.jpg"
              ],
              "logo": "https://thedivineoasisresort.com/devinelogo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "643G+4Q, Hilltop",
                "addressLocality": "Ajodhya",
                "addressRegion": "West Bengal",
                "postalCode": "723152",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.2028654,
                "longitude": 86.1268909
              },
              "hasMap": "https://www.google.com/maps/search/?api=1&query=The+Divine+Oasis+Ajodhya+Hill+Purulia",
              "sameAs": [],
              "priceRange": "₹4,000 - ₹7,225",
              "checkinTime": "13:00",
              "checkoutTime": "11:00",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "4"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Smart TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Room Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Geyser / Hot Water", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Organic Farm Dining", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Barbeque Evenings", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Seating Area / Lounge", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Luggage Storage", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Family Rooms", "value": true }
              ],
              "touristType": ["Family", "Couples", "Groups", "Corporate"],
              "availableLanguage": ["Hindi", "English", "Bengali"],
              "numberOfRooms": 12,
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, UPI",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91990398950",
                "contactType": "reservations",
                "availableLanguage": ["Hindi", "English", "Bengali"],
                "areaServed": "IN"
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "23:59" }
              ],
              "parentOrganization": {
                "@type": "Organization",
                "@id": "https://thedivineoasisresort.com/#organization",
                "name": "The Divine Oasis",
                "logo": "https://thedivineoasisresort.com/devinelogo.png",
                "url": "https://thedivineoasisresort.com",
                "description": "The Divine Oasis is a forest resort atop Ajodhya Hill in Purulia, West Bengal, offering premium mud cottages, luxury suite cottages, organic farm dining, and immersive nature experiences."
              }
            })
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
          <ScrollToTop />
          <Navbar />

          <PageTransition>
            <Breadcrumbs />

            {children}

            <WhatsAppButton />
          </PageTransition>

          <Footer />
        </LenisProvider>
        <MobileStickyBar />
      </body>
    </html>
  )
}
