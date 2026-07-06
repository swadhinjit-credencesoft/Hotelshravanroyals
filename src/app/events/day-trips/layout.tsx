import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Trips in Purnea | Weekend Getaway',
  description: 'Plan day trips and picnics in Purnea at Hotel Surya Bella Casa near Bus Stand. Weekend getaway, family outing, pool day pass. Enjoy delicious food and pristine settings for one day trip in Purnea, Bihar.',
  keywords: ['day trips purnea', 'picnic purnea', 'weekend getaway purnea', 'family outing purnea', 'pool day pass purnea', 'one day trip purnea', 'purnea resort day outing', 'purnea weekend plan', 'day picnic purnea bihar', 'purnea family day out', 'purnea short getaway', 'purnea staycation', 'purnea relaxation day', 'purnea pool access', 'weekend trip near bus stand purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/day-trips',
  },
  openGraph: {
    title: 'Day Trips in Purnea | Weekend Getaway',
    description: 'Plan day trips and picnics in Purnea at Hotel Surya Bella Casa near Bus Stand. Weekend getaway, family outing, pool day pass in Purnea, Bihar.',
    url: 'https://hotelsuryabellacasa.com/events/day-trips',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3809.avif',
        width: 1200,
        height: 630,
        alt: 'Day Trips and Picnics at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Trips in Purnea | Weekend Getaway',
    description: 'Plan day trips and picnics in Purnea at Hotel Surya Bella Casa near Bus Stand. Family outing, pool day pass.',
  }
}

export default function DayTripsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hotelsuryabellacasa.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Events",
                "item": "https://hotelsuryabellacasa.com/events"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Day Trips",
                "item": "https://hotelsuryabellacasa.com/events/day-trips"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
