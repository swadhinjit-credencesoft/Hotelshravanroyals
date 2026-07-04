import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrations & Birthday Party Hall in Purnia',
  description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
  keywords: ['birthday party hall purnia', 'party venue purnia', 'celebration deck purnia', 'private party purnia', 'anniversary venue purnia', 'purnia party hall', 'birthday celebration purnia hotel', 'purnia celebration deck', 'party decoration purnia', 'purnia get together venue', 'friends gathering purnia', 'purnia private dining', 'pool party purnia', 'purnia event decoration', 'small party hall purnia'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/parties',
  },
  openGraph: {
    title: 'Celebrations & Birthday Party Hall in Purnia | Hotel Surya Bella Casa',
    description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
    url: 'https://hotelsuryabellacasa.com/events/parties',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Party and Celebration Hall at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrations & Birthday Party Hall in Purnia | Hotel Surya Bella Casa',
    description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
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
