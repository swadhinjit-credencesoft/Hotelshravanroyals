import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
  description: 'Explore room categories at Hotel Surya Bella Casa, Purnia — Lawn Facing, Forest Facing, AC & Non-AC rooms. Book directly for the best rates.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/rooms',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
    description: 'Explore room categories at Hotel Surya Bella Casa, Purnia — Lawn Facing, Forest Facing, AC & Non-AC rooms. Book directly for the best rates.',
    url: 'https://hotelsuryabellacasa.com/rooms',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Rooms at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Rooms in Purnia | AC & Non-AC Rooms — Hotel Surya Bella Casa',
    description: 'Explore room categories at Hotel Surya Bella Casa, Purnia. Book directly for the best rates.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Rooms',
                item: 'https://hotelsuryabellacasa.com/rooms',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
