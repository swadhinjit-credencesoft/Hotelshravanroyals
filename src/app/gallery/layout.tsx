import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'Browse photos of The Divine Oasis Purulia near Ajodhya Hill. See deluxe room images, banquet hall, rooftop restaurant, lobby, exterior. Best hotel in Purulia photos and gallery.',
  keywords: ['The Divine Oasis Purulia photos', 'deluxe room in Purulia images', 'banquet hall Purulia photos', 'rooftop restaurant Purulia images', 'best hotel in Purulia gallery', 'hotel near Ajodhya Hill Purulia photos', 'Purulia hotel exterior images', 'hotel lobby Purulia images', 'Purulia hotel room photos gallery', 'ac rooms Purulia images', 'family room Purulia photos', 'hotel reception Purulia pictures', 'hotel opposite Ajodhya Hill photos', 'Purulia hotel facilities gallery', 'The Divine Oasis images'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/gallery',
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
    title: 'The Divine Oasis Photo Gallery',
    description: 'Browse photos of The Divine Oasis Purulia near Ajodhya Hill. Deluxe room, banquet hall, rooftop restaurant, exterior. Best hotel in Purulia gallery.',
    url: 'https://thedivineoasisresort.com/gallery',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Purulia Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Divine Oasis Photo Gallery',
    description: 'Browse photos of The Divine Oasis Purulia near Ajodhya Hill. Deluxe room, banquet hall, rooftop restaurant gallery.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Gallery',
                item: 'https://thedivineoasisresort.com/gallery',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
