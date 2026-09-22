import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay Online',
  description: 'Book your hotel room directly at The Divine Oasis, Purulia. Choose from AC and Non-AC rooms. Best rates guaranteed on direct bookings.',
  keywords: ['book hotel Purulia', 'hotel reservation Purulia', 'Purulia room booking', 'The Divine Oasis reservation', 'online booking Purulia', 'Purulia hotel booking online', 'Purulia ac room booking', 'Purulia non ac room booking', 'hotel near Ajodhya Hill Purulia booking', 'Purulia hotel best rate', 'Purulia hotel direct booking', 'instant booking Purulia hotel', 'Purulia hotel room availability', 'Purulia hotel reservation online', 'secure hotel booking Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/reservations',
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
    title: 'Book Your Stay Online | The Divine Oasis Purulia',
    description: 'Book your hotel room directly at The Divine Oasis, Purulia. Best rates guaranteed on direct bookings.',
    url: 'https://thedivineoasisresort.com/reservations',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Book your stay at The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay Online | The Divine Oasis Purulia',
    description: 'Book your hotel room directly at The Divine Oasis, Purulia. Best rates guaranteed.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Reservations',
                item: 'https://thedivineoasisresort.com/reservations',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
