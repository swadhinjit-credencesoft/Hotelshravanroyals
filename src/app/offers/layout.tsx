import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Deals & Offers | Book Direct Purulia',
  description: 'Best hotel deals in Purulia at The Divine Oasis. Book direct for cheapest rates. Online hotel booking in Purulia near Ajodhya Hill. Reserve deluxe rooms, family rooms at best price. Direct hotel booking Purulia.',
  keywords: ['hotel booking Purulia', 'book hotel in Purulia', 'cheap hotel booking Purulia', 'best hotel deals Purulia', 'hotel offers Purulia', 'direct hotel booking Purulia', 'online hotel booking Purulia', 'hotel reservation Purulia', 'book deluxe room Purulia', 'best price hotel Purulia', 'Purulia hotel discount', 'Purulia hotel weekend offer', 'Purulia room package deals', 'book hotel near Ajodhya Hill Purulia', 'hotel booking online Purulia West Bengal'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/offers',
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
    title: 'Hotel Deals & Offers | Book Direct Purulia',
    description: 'Best hotel deals in Purulia at The Divine Oasis. Book direct for cheapest rates. Online hotel booking in Purulia near Ajodhya Hill. Reserve deluxe rooms at best price.',
    url: 'https://thedivineoasisresort.com/offers',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Purulia Offers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Deals & Offers | Book Direct Purulia',
    description: 'Book hotel in Purulia at best price. Direct hotel booking near Ajodhya Hill. Deluxe rooms, family rooms available.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function OffersLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Offers',
                item: 'https://thedivineoasisresort.com/offers',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
