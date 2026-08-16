import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Unwind Karjat',
  description: 'A look around Unwind Karjat — the pool, open lawns, rooms, dining and celebrations. Photos of our private boutique retreat in Karjat.',
  keywords: [
    'unwind karjat photos',
    'karjat resort photos',
    'pool and lawn images',
    'karjat resort gallery',
    'boutique resort photos',
    'resort photo gallery'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/gallery',
  },
  openGraph: {
    title: 'Gallery | Unwind Karjat',
    description: 'A look around Unwind Karjat — the pool, open lawns, rooms, dining and celebrations. Photos of our private boutique retreat in Karjat.',
    url: 'https://unwindkarjat.com/gallery',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery | Unwind Karjat',
    description: 'A look around Unwind Karjat — the pool, open lawns, rooms, dining and celebrations. Photos of our private boutique retreat in Karjat.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
