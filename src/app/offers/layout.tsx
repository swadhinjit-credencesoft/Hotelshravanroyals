import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Deals & Offers | Book Direct Purnea',
  description: 'Best hotel deals in Purnea at Hotel Surya Bella Casa. Book direct for cheapest rates. Online hotel booking in Purnea near Bus Stand. Reserve deluxe rooms, family rooms at best price. Direct hotel booking Purnea.',
  keywords: ['hotel booking purnea', 'book hotel in purnea', 'cheap hotel booking purnea', 'best hotel deals purnea', 'hotel offers purnea', 'direct hotel booking purnea', 'online hotel booking purnea', 'hotel reservation purnea', 'book deluxe room purnea', 'best price hotel purnea', 'purnea hotel discount', 'purnea hotel weekend offer', 'purnea room package deals', 'book hotel near bus stand purnea', 'hotel booking online purnea bihar'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/offers',
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
    title: 'Hotel Deals & Offers | Book Direct Purnea',
    description: 'Best hotel deals in Purnea at Hotel Surya Bella Casa. Book direct for cheapest rates. Online hotel booking in Purnea near Bus Stand. Reserve deluxe rooms at best price.',
    url: 'https://hotelsuryabellacasa.com/offers',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3739.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia Offers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Deals & Offers | Book Direct Purnea',
    description: 'Book hotel in Purnea at best price. Direct hotel booking near Bus Stand. Deluxe rooms, family rooms available.',
    images: ['https://bookonelocal.in/cdn/IMG_3739.avif'],
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Offers',
                item: 'https://hotelsuryabellacasa.com/offers',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
