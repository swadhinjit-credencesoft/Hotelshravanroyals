import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conference Hall Purulia | Corporate Events',
  description: 'Best conference hall in Purulia at The Divine Oasis near Ajodhya Hill. Corporate event venue, business meeting room, seminar hall, team outing space. Host offsites & retreats. Book direct for corporate rates.',
  keywords: ['conference hall Purulia', 'corporate event venue Purulia', 'business meeting room Purulia', 'seminar hall Purulia', 'team outing Purulia', 'corporate hotel Purulia', 'offsites Purulia', 'meeting room Purulia', 'board meeting venue Purulia', 'Purulia corporate stay', 'training hall Purulia', 'business seminar Purulia', 'workshop venue Purulia', 'company retreat Purulia West Bengal', 'conference hall near Ajodhya Hill Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events/corporate',
  },
  openGraph: {
    title: 'Conference Hall Purulia | Corporate Events',
    description: 'Best conference hall in Purulia at The Divine Oasis near Ajodhya Hill. Corporate event venue, meeting room, seminar hall for offsites & workshops.',
    url: 'https://thedivineoasisresort.com/events/corporate',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Event Venue at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conference Hall Purulia | Corporate Events',
    description: 'Best conference hall in Purulia near Ajodhya Hill. Corporate event venue, meeting room, seminar hall at The Divine Oasis.',
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
                "name": "Corporate",
                "item": "https://thedivineoasisresort.com/events/corporate"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
