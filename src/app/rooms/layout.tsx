import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
  description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
  keywords: [
    'luxury cottages karjat',
    'red brick cottage booking',
    'lawn facing rooms karjat',
    'forest facing cottages',
    'karjat lodging suites',
    'resort accommodations near pune'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/rooms',
  },
  openGraph: {
    title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
    url: 'https://unwindkarjat.com/rooms',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/Lawn-Facing-Room.png',
        width: 1200,
        height: 630,
        alt: 'Lawn Facing Rooms at Unwind Karjat Resort'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
    images: ['https://unwindkarjat.com/Lawn-Facing-Room.png']
  }
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
