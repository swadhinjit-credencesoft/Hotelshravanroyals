import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event & Banquet Hall in Purnia — Hotel Surya Bella Casa',
  description: 'Host your corporate events, family functions, and celebrations at Hotel Surya Bella Casa\'s event spaces in Purnia, Bihar. Contact us for bookings.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Event & Banquet Hall in Purnia — Hotel Surya Bella Casa',
    description: 'Host your corporate events, family functions, and celebrations at Hotel Surya Bella Casa\'s event spaces in Purnia, Bihar. Contact us for bookings.',
    url: 'https://hotelsuryabellacasa.com/events',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event & Banquet Hall in Purnia — Hotel Surya Bella Casa',
    description: 'Host your corporate events, family functions, and celebrations at Hotel Surya Bella Casa\'s event spaces in Purnia, Bihar. Contact us for bookings.',
  }
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
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
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
