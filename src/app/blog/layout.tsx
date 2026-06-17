import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Purnia Travel Blog & Guides | Hotel Surya Bella Casa',
  description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
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
    title: 'Purnia Travel Blog & Guides | Hotel Surya Bella Casa',
    description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
    url: 'https://hotelsuryabellacasa.com/blog',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia - Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purnia Travel Blog & Guides | Hotel Surya Bella Casa',
    description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
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
