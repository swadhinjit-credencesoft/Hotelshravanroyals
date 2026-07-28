import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birthday Party Hall Purnea | Celebrations',
  description: 'Best birthday party hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Party venue for birthdays, anniversaries, private parties with customized themes, decoration and dining options. Book now.',
  keywords: ['birthday party hall purnea', 'party venue purnea', 'celebration hall purnea', 'private party purnea', 'anniversary venue purnea', 'purnea party hall', 'birthday celebration purnea hotel', 'purnea celebration deck', 'party decoration purnea', 'get together venue purnea', 'friends gathering purnea', 'purnea private dining', 'pool party purnea', 'event decoration purnea', 'party hall near bus stand purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/parties',
  },
  openGraph: {
    title: 'Birthday Party Hall Purnea | Celebrations',
    description: 'Best birthday party hall in Purnea near Bus Stand. Party venue for birthdays, anniversaries, private parties with customized themes & decoration.',
    url: 'https://hotelsuryabellacasa.com/events/parties',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3808.avif',
        width: 1200,
        height: 630,
        alt: 'Party and Celebration Hall at Hotel Surya Bella Casa Purnea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Party Hall Purnea | Celebrations',
    description: 'Best birthday party hall in Purnea near Bus Stand. Party venue for birthdays, anniversaries, private parties at Hotel Surya Bella Casa.',
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
                "name": "Parties",
                "item": "https://hotelsuryabellacasa.com/events/parties"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
