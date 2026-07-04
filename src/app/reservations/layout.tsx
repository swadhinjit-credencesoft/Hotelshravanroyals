import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Stay Online',
  description: 'Book your hotel room directly at Hotel Surya Bella Casa, Purnia. Choose from AC and Non-AC rooms. Best rates guaranteed on direct bookings.',
  keywords: ['book hotel purnia', 'hotel reservation purnia', 'purnia room booking', 'hotel surya bella casa reservation', 'online booking purnia', 'purnia hotel booking online', 'purnia ac room booking', 'purnia non ac room booking', 'hotel near bus stand purnia booking', 'purnia hotel best rate', 'purnia hotel direct booking', 'instant booking purnia hotel', 'purnia hotel room availability', 'purnia hotel reservation online', 'secure hotel booking purnia'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/reservations',
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
    title: 'Book Your Stay Online | Hotel Surya Bella Casa Purnia',
    description: 'Book your hotel room directly at Hotel Surya Bella Casa, Purnia. Best rates guaranteed on direct bookings.',
    url: 'https://hotelsuryabellacasa.com/reservations',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Book your stay at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Stay Online | Hotel Surya Bella Casa Purnia',
    description: 'Book your hotel room directly at Hotel Surya Bella Casa, Purnia. Best rates guaranteed.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Reservations',
                item: 'https://hotelsuryabellacasa.com/reservations',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
