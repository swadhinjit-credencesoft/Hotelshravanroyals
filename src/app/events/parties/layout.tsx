import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celebrations & Birthday Party Hall in Purnia | Hotel Surya Bella Casa',
  description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/parties',
  },
  openGraph: {
    title: 'Celebrations & Birthday Party Hall in Purnia | Hotel Surya Bella Casa',
    description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
    url: 'https://hotelsuryabellacasa.com/events/parties',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrations & Birthday Party Hall in Purnia | Hotel Surya Bella Casa',
    description: 'Celebrate birthdays, anniversaries, and private parties at our celebration deck and party hall in Purnia. Customized themes and dining options.',
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
