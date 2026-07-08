import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conference Hall Purnea | Corporate Events',
  description: 'Best conference hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Corporate event venue, business meeting room, seminar hall, team outing space. Host offsites & retreats. Book direct for corporate rates.',
  keywords: ['conference hall purnea', 'corporate event venue purnea', 'business meeting room purnea', 'seminar hall purnea', 'team outing purnea', 'corporate hotel purnea', 'offsites purnea', 'meeting room purnea', 'board meeting venue purnea', 'purnea corporate stay', 'training hall purnea', 'business seminar purnea', 'workshop venue purnea', 'company retreat purnea bihar', 'conference hall near bus stand purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/corporate',
  },
  openGraph: {
    title: 'Conference Hall Purnea | Corporate Events',
    description: 'Best conference hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Corporate event venue, meeting room, seminar hall for offsites & workshops.',
    url: 'https://hotelsuryabellacasa.com/events/corporate',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3784.avif',
        width: 1200,
        height: 630,
        alt: 'Corporate Event Venue at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conference Hall Purnea | Corporate Events',
    description: 'Best conference hall in Purnea near Bus Stand. Corporate event venue, meeting room, seminar hall at Hotel Surya Bella Casa.',
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
