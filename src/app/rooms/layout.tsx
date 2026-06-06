import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
  description: 'Explore 4 room categories at Hotel Surya Bella Casa, Purnia — Super Deluxe AC, Deluxe AC, Deluxe Non-AC, and Standard rooms. Book directly for best rates.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/rooms',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
    description: 'Explore 4 room categories at Hotel Surya Bella Casa, Purnia — Super Deluxe AC, Deluxe AC, Deluxe Non-AC, and Standard rooms. Book directly for best rates.',
    url: 'https://hotelsuryabellacasa.com/rooms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
    description: 'Explore 4 room categories at Hotel Surya Bella Casa, Purnia — Super Deluxe AC, Deluxe AC, Deluxe Non-AC, and Standard rooms. Book directly for best rates.',
  }
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Rooms",
                "item": "https://hotelsuryabellacasa.com/rooms"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
