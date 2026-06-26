import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Event Venue & Retreats in Purnia | Hotel Surya Bella Casa',
  description: 'Host professional corporate events, offsites, retreats, and team-building workshops at Hotel Surya Bella Casa in Purnia, Bihar.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/corporate',
  },
  openGraph: {
    title: 'Corporate Event Venue & Retreats in Purnia | Hotel Surya Bella Casa',
    description: 'Host professional corporate events, offsites, retreats, and team-building workshops at Hotel Surya Bella Casa in Purnia, Bihar.',
    url: 'https://hotelsuryabellacasa.com/events/corporate',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Corporate Event Venue at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Event Venue & Retreats in Purnia | Hotel Surya Bella Casa',
    description: 'Host professional corporate events, offsites, retreats, and team-building workshops at Hotel Surya Bella Casa in Purnia, Bihar.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  }
}

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Corporate",
                "item": "https://hotelsuryabellacasa.com/events/corporate"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
