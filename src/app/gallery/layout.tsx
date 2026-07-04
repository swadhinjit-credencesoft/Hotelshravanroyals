import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Photo Gallery',
  description: 'Browse photos of our modern rooms, lobby, banquet halls, and facilities at Hotel Surya Bella Casa, Purnia, Bihar. See what makes us the best hotel in Purnia.',
  keywords: ['hotel purnia photos', 'hotel surya bella casa gallery', 'purnia hotel pictures', 'hotel rooms purnia images', 'purnia hotel lobby', 'purnia hotel room photos', 'hotel banquet hall purnia images', 'purnia hotel exterior', 'hotel purnia interior photos', 'purnia hotel bathroom images', 'hotel deluxe room purnia', 'super deluxe room purnia photos', 'purnia hotel gallery 2024', 'ac room purnia images', 'purnia hotel facilities photos'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/gallery',
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
    title: 'Hotel Photo Gallery | Hotel Surya Bella Casa Purnia',
    description: 'Browse photos of our modern rooms, lobby, banquet halls, and facilities at Hotel Surya Bella Casa, Purnia, Bihar.',
    url: 'https://hotelsuryabellacasa.com/gallery',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3764.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Photo Gallery | Hotel Surya Bella Casa Purnia',
    description: 'Browse photos of our modern rooms, lobby, banquet halls, and facilities at Hotel Surya Bella Casa, Purnia, Bihar.',
    images: ['https://bookonelocal.in/cdn/IMG_3764.avif'],
  },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Gallery',
                item: 'https://hotelsuryabellacasa.com/gallery',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
