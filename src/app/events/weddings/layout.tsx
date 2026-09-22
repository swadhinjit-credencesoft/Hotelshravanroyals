import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wedding & Marriage Hall Purulia | Near Ajodhya Hill',
  description: 'Best wedding venue in Purulia at The Divine Oasis near Ajodhya Hill. Marriage hall, wedding lawns, banquet hall, bridal suites, wedding catering. Destination wedding venue in Purulia, West Bengal. Book now.',
  keywords: ['wedding venue Purulia', 'marriage hall Purulia', 'wedding hall near Ajodhya Hill Purulia', 'banquet hall wedding Purulia', 'destination wedding Purulia', 'wedding lawns Purulia', 'bridal suite Purulia', 'wedding catering Purulia', 'engagement venue Purulia', 'wedding reception hall Purulia', 'Purulia marriage lawn', 'Purulia wedding packages', 'best wedding venue in Purulia', 'marriage hall near Ajodhya Hill Purulia', 'Purulia court marriage venue'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events/weddings',
  },
  openGraph: {
    title: 'Wedding & Marriage Hall Purulia | Near Ajodhya Hill',
    description: 'Best wedding venue in Purulia near Ajodhya Hill. Marriage hall, wedding lawns, banquet hall, bridal suites, wedding catering at The Divine Oasis.',
    url: 'https://thedivineoasisresort.com/events/weddings',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Destination Wedding Venue at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding & Marriage Hall Purulia | Near Ajodhya Hill',
    description: 'Best wedding venue in Purulia near Ajodhya Hill. Marriage hall, wedding lawns, bridal suites, banquet hall at The Divine Oasis.',
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
                "name": "Weddings",
                "item": "https://thedivineoasisresort.com/events/weddings"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
