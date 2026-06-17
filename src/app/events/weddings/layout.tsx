import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destination Wedding Lawns & Banquet in Purnia | Hotel Surya Bella Casa',
  description: 'Exchange your vows at Purnia\'s premier wedding venue. Exquisite lawns, catering, bridal suites, and banquet facilities at Hotel Surya Bella Casa.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/weddings',
  },
  openGraph: {
    title: 'Destination Wedding Lawns & Banquet in Purnia | Hotel Surya Bella Casa',
    description: 'Exchange your vows at Purnia\'s premier wedding venue. Exquisite lawns, catering, bridal suites, and banquet facilities at Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/events/weddings',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Wedding Lawns & Banquet in Purnia | Hotel Surya Bella Casa',
    description: 'Exchange your vows at Purnia\'s premier wedding venue. Exquisite lawns, catering, bridal suites, and banquet facilities at Hotel Surya Bella Casa.',
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
