import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hotel Surya Bella Casa Purnea | Best Hotel Near Bus Stand & Vikass Market',
  description: 'About Hotel Surya Bella Casa Purnea — best hotel in Purnea near Bus Stand and Vikass Market. Established 2019. Family hotel, business hotel with free WiFi, parking, AC rooms, rooftop restaurant, banquet hall.',
  keywords: ['about hotel surya bella casa purnea', 'best hotel in purnea about', 'hotel near bus stand purnea story', 'purnea family hotel history', 'purnea business hotel', 'hotel opposite vikass market purnea', 'purnea hotel with rooftop restaurant', 'purnea hotel with banquet hall', 'purnea hotel free wifi parking', 'purnea accommodation best hotel', 'why choose hotel surya bella casa purnea', 'hotel purnea established 2019', 'purnea hotel overview about us', 'purnea hotel mission values', 'best hotel in purnea bihar'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/about',
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
    title: 'About Hotel Surya Bella Casa Purnea | Best Hotel Near Bus Stand & Vikass Market',
    description: 'About Hotel Surya Bella Casa Purnea — best hotel in Purnea near Bus Stand and Vikass Market. Family hotel, business hotel with free WiFi, parking, AC rooms, rooftop restaurant, banquet hall.',
    url: 'https://hotelsuryabellacasa.com/about',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3784.avif',
        width: 1200,
        height: 630,
        alt: 'About Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hotel Surya Bella Casa Purnea | Best Hotel Near Bus Stand',
    description: 'Best hotel in Purnea near Bus Stand & Vikass Market. Family hotel, business hotel, rooftop restaurant, banquet hall.',
    images: ['https://bookonelocal.in/cdn/IMG_3784.avif'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
                name: 'About',
                item: 'https://hotelsuryabellacasa.com/about',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
