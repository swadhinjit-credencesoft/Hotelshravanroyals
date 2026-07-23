import type { Metadata, Viewport } from 'next'
import './globals.css'
import Script from 'next/script'

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
  metadataBase: new URL('https://hotelsuryabellacasa.com'),

  title: {
    default: 'Hotel Surya Bella Casa Purnea | Best Near Bus Stand',
    template: '%s | Hotel Surya Bella Casa Purnea',
  },

  description:
    'Book Hotel Surya Bella Casa in Purnea near Bus Stand. Free WiFi, parking, rooftop restaurant, banquet hall. Best hotel in Purnea, Bihar. Book direct and save!',

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
    site: '@hotelsuryabellacasa',
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
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="preconnect" href="https://bookone.io" />
        <link rel="preconnect" href="https://bookonelocal.in" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://bookone.io" />
        <link rel="dns-prefetch" href="https://bookonelocal.in" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="https://bookonelocal.in/cdn/IMG_3815.avif" imageSizes="100vw" imageSrcSet="https://bookonelocal.in/cdn/IMG_3815.avif 1920w" fetchPriority="high" />
        <link rel="preload" as="image" href="https://bookonelocal.in/cdn/IMG_3808.avif" imageSizes="100vw" imageSrcSet="https://bookonelocal.in/cdn/IMG_3808.avif 1920w" />
        <link rel="preload" as="image" href="https://bookonelocal.in/cdn/IMG_3784.avif" imageSizes="100vw" imageSrcSet="https://bookonelocal.in/cdn/IMG_3784.avif 1920w" />
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
              "alternateName": "Hotel Surya Bella Casa Purnia",
              "description": "Hotel Surya Bella Casa is a comfortable and budget-friendly hotel in Purnia, Bihar, located at Suryalok Complex opposite Vikass Market near the main Bus Stand. Offering 4 room categories, free Wi-Fi, air conditioning, elevator, and 24/7 room service for business travelers and families.",
              "url": "https://hotelsuryabellacasa.com",
              "telephone": "+919835923601",
              "email": "bellacasa561@gmail.com",
              "image": [
                "https://bookonelocal.in/cdn/IMG_3815.avif",
                "https://bookonelocal.in/cdn/IMG_3808.avif",
                "https://bookonelocal.in/cdn/IMG_3809.avif"
              ],
              "logo": "https://hotelsuryabellacasa.com/suryabellacasalogo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
                "addressLocality": "Purnia",
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
                "https://www.instagram.com/hotel.bellacasaa/",
                "https://www.facebook.com/hotelsuryabellacasa",
                "https://www.youtube.com/@hotelsuryabellacasa",
                "https://www.google.com/maps/place/?cid=8931275976043074034"
              ],
              "priceRange": "₹1,500 - ₹3,000",
              "checkinTime": "12:00",
              "checkoutTime": "12:00",
              "starRating": {
                "@type": "Rating",
                "ratingValue": "3"
              },
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "24/7 Room Service", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Flat Screen TV", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Hot Water", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Tea/Coffee Maker", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Housekeeping", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Doctor on Call", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Luggage Storage", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Laundry Service", "value": true }
              ],
              "touristType": ["Business", "Family", "Couples"],
              "availableLanguage": ["Hindi", "English"],
              "numberOfRooms": 19,
              "floorSize": {
                "@type": "QuantitativeValue",
                "value": 4500,
                "unitCode": "FTK"
              },
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Credit Card, UPI",
              /* aggregateRating removed — add back once real review count
                 is verified from Google Business Profile. Using unverified
                 reviewCount values can trigger a Google structured data penalty. */
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919835923601",
                "contactType": "reservations",
                "availableLanguage": ["Hindi", "English"],
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
                "@id": "https://hotelsuryabellacasa.com/#organization",
                "name": "Hotel Surya Bella Casa",
                "logo": "https://hotelsuryabellacasa.com/suryabellacasalogo.png",
                "url": "https://hotelsuryabellacasa.com",
                "foundingDate": "2019",
                "description": "Hotel Surya Bella Casa is a premier hospitality establishment in Purnia, Bihar, offering comfortable accommodation, rooftop dining, and event spaces.",
                "sameAs": [
                  "https://www.facebook.com/hotelsuryabellacasa",
                  "https://www.instagram.com/hotel.bellacasaa/",
                  "https://www.youtube.com/@hotelsuryabellacasa"
                ]
              }
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
