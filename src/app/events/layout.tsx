import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event & Banquet Hall in Purnia',
  description: 'Host your corporate events, family functions, weddings, and celebrations at Hotel Surya Bella Casa\'s event spaces in Purnia, Bihar. Contact us for bookings.',
  keywords: ['event hall purnia', 'banquet hall purnia', 'party venue purnia', 'hotel events purnia', 'celebration hall bihar', 'purnia event venue', 'marriage hall purnia', 'conference venue purnia', 'purnia gathering hall', 'hotel event space purnia', 'purnia family function hall', 'birthday party venue purnia', 'purnia corporate event space', 'wedding reception purnia', 'purnia celebration venue'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events',
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
    title: 'Event & Banquet Hall in Purnia — Hotel Surya Bella Casa',
    description: 'Host your corporate events, family functions, weddings, and celebrations at Hotel Surya Bella Casa\'s event spaces in Purnia, Bihar.',
    url: 'https://hotelsuryabellacasa.com/events',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Events & Banquet Hall at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event & Banquet Hall in Purnia — Hotel Surya Bella Casa',
    description: 'Host your corporate events, family functions, and celebrations at Hotel Surya Bella Casa, Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Events',
                item: 'https://hotelsuryabellacasa.com/events',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
