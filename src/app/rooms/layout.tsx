import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Deluxe Rooms in Purulia | AC Near Ajodhya Hill',
  description: 'Best hotel rooms in Purulia at The Divine Oasis near Ajodhya Hill. Deluxe AC rooms, family rooms, executive rooms, standard non-AC rooms with free WiFi, parking, room service. Book directly for best rates.',
  keywords: ['deluxe rooms in Purulia', 'ac rooms in Purulia', 'luxury rooms in Purulia', 'family rooms in Purulia', 'hotel rooms in Purulia', 'executive room Purulia', 'premium room Purulia', 'standard non ac room Purulia', 'super deluxe room Purulia', 'rooms near Ajodhya Hill Purulia', 'Purulia accommodation', 'Purulia hotel room booking', 'spacious hotel rooms Purulia', 'comfortable rooms in Purulia', 'Purulia budget room'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/rooms',
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
    title: 'Deluxe Rooms in Purulia | AC Near Ajodhya Hill',
    description: 'Best hotel rooms in Purulia at The Divine Oasis near Ajodhya Hill. Deluxe AC rooms, family rooms, executive rooms with free WiFi, parking, room service. Book directly for best rates.',
    url: 'https://thedivineoasisresort.com/rooms',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Hotel Rooms at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  title: 'Deluxe Rooms in Purulia | AC Near Ajodhya Hill',
    description: 'Best hotel rooms in Purulia - deluxe AC rooms, family rooms near Ajodhya Hill. Free WiFi & parking. Book direct.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Rooms',
                item: 'https://thedivineoasisresort.com/rooms',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
