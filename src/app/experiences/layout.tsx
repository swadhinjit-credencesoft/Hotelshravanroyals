import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experiences & Activities in Purnia | Hotel Surya Bella Casa',
  description: 'Explore unique local experiences from Hotel Surya Bella Casa in Purnia — city tours, local markets, cultural attractions, and more.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/experiences',
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
    title: 'Experiences & Activities in Purnia | Hotel Surya Bella Casa',
    description: 'Explore unique local experiences from Hotel Surya Bella Casa in Purnia — city tours, local markets, cultural attractions, and more.',
    url: 'https://hotelsuryabellacasa.com/experiences',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Experiences at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiences & Activities in Purnia | Hotel Surya Bella Casa',
    description: 'Explore unique local experiences from Hotel Surya Bella Casa in Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Experiences',
                item: 'https://hotelsuryabellacasa.com/experiences',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
