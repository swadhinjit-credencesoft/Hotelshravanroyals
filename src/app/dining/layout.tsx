import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dining in Purnia | Pure Vegetarian Food',
  description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia. Order from top local restaurants via Swiggy & Zomato or explore Vikass Market street food nearby.',
  keywords: ['dining in purnia', 'pure vegetarian hotel purnia', 'food near vikass market purnia', 'restaurant purnia', 'hotel dining purnia', 'swiggy purnia hotel', 'zomato delivery purnia hotel', 'vegetarian food purnia hotel', 'purnia street food near hotel', 'in room dining purnia', 'purnia restaurant delivery', 'best food purnia hotel', 'purnia lunch hotel', 'purnia dinner options', 'pure veg hotel bihar purnia'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/dining',
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
    title: 'Dining in Purnia | Pure Vegetarian Food | Hotel Surya Bella Casa',
    description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia. Order from top local restaurants via Swiggy & Zomato or explore Vikass Market street food nearby.',
    url: 'https://hotelsuryabellacasa.com/dining',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3808.avif',
        width: 1200,
        height: 630,
        alt: 'Dining at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dining in Purnia | Pure Vegetarian Food | Hotel Surya Bella Casa',
    description: 'Enjoy pure vegetarian dining at Hotel Surya Bella Casa, Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3808.avif'],
  },
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Dining',
                item: 'https://hotelsuryabellacasa.com/dining',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
