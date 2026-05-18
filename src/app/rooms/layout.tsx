import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
  description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
  alternates: {
    canonical: 'https://unwindkarjat.com/rooms',
  },
  openGraph: {
    title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
    url: 'https://unwindkarjat.com/rooms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Cottages & Rooms near Mumbai | Unwind Karjat',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Karjat.',
  }
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
