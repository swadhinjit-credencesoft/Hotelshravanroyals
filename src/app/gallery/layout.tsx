import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel Surya Bella Casa Photo Gallery',
  description: 'Browse photos of Hotel Surya Bella Casa Purnea near Bus Stand. See deluxe room images, banquet hall, rooftop restaurant, lobby, exterior. Best hotel in Purnea photos and gallery.',
  keywords: ['hotel surya bella casa purnea photos', 'deluxe room in purnea images', 'banquet hall purnea photos', 'rooftop restaurant purnea images', 'best hotel in purnea gallery', 'hotel near bus stand purnea photos', 'purnea hotel exterior images', 'hotel lobby purnea images', 'purnea hotel room photos gallery', 'ac rooms purnea images', 'family room purnea photos', 'hotel reception purnea pictures', 'hotel opposite vikass market photos', 'purnea hotel facilities gallery', 'hotel surya bella casa images'],
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
    title: 'Hotel Surya Bella Casa Photo Gallery',
    description: 'Browse photos of Hotel Surya Bella Casa Purnea near Bus Stand. Deluxe room, banquet hall, rooftop restaurant, exterior. Best hotel in Purnea gallery.',
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
    title: 'Hotel Surya Bella Casa Photo Gallery',
    description: 'Browse photos of Hotel Surya Bella Casa Purnea near Bus Stand. Deluxe room, banquet hall, rooftop restaurant gallery.',
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
