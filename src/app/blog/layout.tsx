import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Purnea Travel Blog | Hotels & Attractions',
  description: 'Purnea travel blog by Hotel Surya Bella Casa. Best hotels in Purnea, rooftop restaurant guide, wedding venues, places to visit, business travel guide. Tips for staying near Purnea Bus Stand.',
  keywords: ['purnea travel blog', 'best hotels in purnea', 'places to visit in purnea', 'top restaurants in purnea', 'business travel guide to purnea', 'wedding venues in purnea', 'hotels near purnea bus stand', 'weekend trip to purnea', 'tourist attractions near purnea', 'family stay in purnea', 'budget vs luxury hotels in purnea', 'things to do in purnea', 'purnea food guide', 'purnea sightseeing blog', 'purnea bihar travel guide'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog',
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
    title: 'Purnea Travel Blog | Hotels & Attractions',
    description: 'Purnea travel blog by Hotel Surya Bella Casa. Best hotels in Purnea, rooftop restaurant guide, wedding venues, places to visit. Tips for staying near Purnea Bus Stand.',
    url: 'https://hotelsuryabellacasa.com/blog',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purnea Travel Blog | Hotels & Attractions',
    description: 'Purnea travel blog - best hotels, rooftop restaurant guide, places to visit, wedding venues in Purnea.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Blog',
                item: 'https://hotelsuryabellacasa.com/blog',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
