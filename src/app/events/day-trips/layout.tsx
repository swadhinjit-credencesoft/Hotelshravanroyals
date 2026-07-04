import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Day Trips & Picnics in Purnia',
  description: 'Plan your day trips, picnics, and family get-togethers at Hotel Surya Bella Casa in Purnia, Bihar. Enjoy delicious food and pristine settings.',
  keywords: ['day trips purnia', 'picnic purnia', 'weekend getaway purnia', 'family outing purnia', 'pool day pass purnia', 'one day trip purnia', 'purnia resort day outing', 'pool access purnia hotel', 'purnia weekend plan', 'day picnic purnia bihar', 'purnia family day out', 'swimming pool day pass purnia', 'purnia short getaway', 'purnia staycation', 'purnia relaxation day'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events/day-trips',
  },
  openGraph: {
    title: 'Day Trips & Picnics in Purnia | Hotel Surya Bella Casa',
    description: 'Plan your day trips, picnics, and family get-togethers at Hotel Surya Bella Casa in Purnia, Bihar. Enjoy delicious food and pristine settings.',
    url: 'https://hotelsuryabellacasa.com/events/day-trips',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3809.avif',
        width: 1200,
        height: 630,
        alt: 'Day Trips and Picnics at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Trips & Picnics in Purnia | Hotel Surya Bella Casa',
    description: 'Plan your day trips, picnics, and family get-togethers at Hotel Surya Bella Casa in Purnia, Bihar. Enjoy delicious food and pristine settings.',
    images: ['https://bookonelocal.in/cdn/IMG_3809.avif'],
  }
}

export default function DayTripsLayout({ children }: { children: React.ReactNode }) {
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
                "name": "Day Trips",
                "item": "https://hotelsuryabellacasa.com/events/day-trips"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
