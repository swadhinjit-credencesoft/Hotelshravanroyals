import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resort Gallery & Virtual Walkthrough | Unwind Karjat',
  description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
  keywords: [
    'unwind karjat photos',
    'cottage interior gallery',
    'resort lawn images',
    'karjat resort walkthrough',
    'luxury hotel pictures',
    'boutique resort photo gallery'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/gallery',
  },
  openGraph: {
    title: 'Resort Gallery & Virtual Walkthrough | Unwind Karjat',
    description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
    url: 'https://unwindkarjat.com/gallery',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Beautiful Exterior View of Unwind Karjat Resort'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Gallery & Virtual Walkthrough | Unwind Karjat',
    description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
