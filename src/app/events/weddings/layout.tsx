import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Wedding Venue in Purnea | Marriage Hall & Banquet Hall Near Bus Stand | Hotel Surya Bella Casa',
  description: 'Best wedding venue in Purnea at Hotel Surya Bella Casa near Bus Stand. Marriage hall, wedding lawns, banquet hall, bridal suites, wedding catering. Destination wedding venue in Purnea, Bihar. Book now.',
  keywords: ['wedding venue purnea', 'marriage hall purnea', 'wedding hall near bus stand purnea', 'banquet hall wedding purnea', 'destination wedding purnea', 'wedding lawns purnea', 'bridal suite purnea', 'wedding catering purnea', 'engagement venue purnea', 'wedding reception hall purnea', 'purnea marriage lawn', 'purnea wedding packages', 'best wedding venue in purnea', 'marriage hall near vikass market purnea', 'purnea court marriage venue'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/weddings',
  },
  openGraph: {
    title: 'Best Wedding Venue in Purnea | Marriage Hall & Banquet Hall Near Bus Stand | Hotel Surya Bella Casa',
    description: 'Best wedding venue in Purnea near Bus Stand. Marriage hall, wedding lawns, banquet hall, bridal suites, wedding catering at Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/events/weddings',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3764.avif',
        width: 1200,
        height: 630,
        alt: 'Destination Wedding Venue at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wedding Venue in Purnea | Marriage Hall Near Bus Stand | Hotel Surya Bella Casa',
    description: 'Best wedding venue in Purnea near Bus Stand. Marriage hall, wedding lawns, bridal suites, banquet hall at Hotel Surya Bella Casa.',
  }
}

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Weddings",
                "item": "https://hotelsuryabellacasa.com/events/weddings"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
