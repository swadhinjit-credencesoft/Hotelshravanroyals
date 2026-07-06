import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Deluxe Rooms in Purnea | AC Near Bus Stand',
  description: 'Best hotel rooms in Purnea at Hotel Surya Bella Casa near Bus Stand. Deluxe AC rooms, family rooms, executive rooms, standard non-AC rooms with free WiFi, parking, room service. Book directly for best rates.',
  keywords: ['deluxe rooms in purnea', 'ac rooms in purnea', 'luxury rooms in purnea', 'family rooms in purnea', 'hotel rooms in purnea', 'executive room purnea', 'premium room purnea', 'standard non ac room purnea', 'super deluxe room purnea', 'rooms near bus stand purnea', 'purnea accommodation', 'purnea hotel room booking', 'spacious hotel rooms purnea', 'comfortable rooms in purnea', 'purnea budget room'],
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
    title: 'Deluxe Rooms in Purnea | AC Near Bus Stand',
    description: 'Best hotel rooms in Purnea at Hotel Surya Bella Casa near Bus Stand. Deluxe AC rooms, family rooms, executive rooms with free WiFi, parking, room service. Book directly for best rates.',
    url: 'https://hotelsuryabellacasa.com/rooms',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3739.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Rooms at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  title: 'Deluxe Rooms in Purnea | AC Near Bus Stand',
    description: 'Best hotel rooms in Purnea - deluxe AC rooms, family rooms near Bus Stand. Free WiFi & parking. Book direct.',
    images: ['https://bookonelocal.in/cdn/IMG_3739.avif'],
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
