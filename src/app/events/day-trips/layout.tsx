import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Trips in Purulia | Weekend Getaway',
  description: 'Plan day trips and picnics in Purulia at The Divine Oasis near Ajodhya Hill. Weekend getaway, family outing, pool day pass. Enjoy delicious food and pristine settings. Book direct for day-pass rates.',
  keywords: ['day trips Purulia', 'picnic Purulia', 'weekend getaway Purulia', 'family outing Purulia', 'pool day pass Purulia', 'one day trip Purulia', 'Purulia resort day outing', 'Purulia weekend plan', 'day picnic Purulia West Bengal', 'Purulia family day out', 'Purulia short getaway', 'Purulia staycation', 'Purulia relaxation day', 'Purulia pool access', 'weekend trip near Ajodhya Hill Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events/day-trips',
  },
  openGraph: {
    title: 'Day Trips in Purulia | Weekend Getaway',
    description: 'Plan day trips and picnics in Purulia at The Divine Oasis near Ajodhya Hill. Weekend getaway, family outing, pool day pass in Purulia, West Bengal.',
    url: 'https://thedivineoasisresort.com/events/day-trips',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Day Trips and Picnics at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Trips in Purulia | Weekend Getaway',
    description: 'Plan day trips and picnics in Purulia at The Divine Oasis near Ajodhya Hill. Family outing, pool day pass.',
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
                "item": "https://thedivineoasisresort.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Events",
                "item": "https://thedivineoasisresort.com/events"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Day Trips",
                "item": "https://thedivineoasisresort.com/events/day-trips"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
