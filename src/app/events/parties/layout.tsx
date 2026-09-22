import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birthday Party Hall Purulia | Celebrations',
  description: 'Best birthday party hall in Purulia at The Divine Oasis near Ajodhya Hill. Party venue for birthdays, anniversaries, private parties with customized themes, decoration and dining options. Book now.',
  keywords: ['birthday party hall Purulia', 'party venue Purulia', 'celebration hall Purulia', 'private party Purulia', 'anniversary venue Purulia', 'Purulia party hall', 'birthday celebration Purulia hotel', 'Purulia celebration deck', 'party decoration Purulia', 'get together venue Purulia', 'friends gathering Purulia', 'Purulia private dining', 'pool party Purulia', 'event decoration Purulia', 'party hall near Ajodhya Hill Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events/parties',
  },
  openGraph: {
    title: 'Birthday Party Hall Purulia | Celebrations',
    description: 'Best birthday party hall in Purulia near Ajodhya Hill. Party venue for birthdays, anniversaries, private parties with customized themes & decoration.',
    url: 'https://thedivineoasisresort.com/events/parties',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Party and Celebration Hall at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Party Hall Purulia | Celebrations',
    description: 'Best birthday party hall in Purulia near Ajodhya Hill. Party venue for birthdays, anniversaries, private parties at The Divine Oasis.',
  }
}

export default function PartiesLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Parties",
                "item": "https://thedivineoasisresort.com/events/parties"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
