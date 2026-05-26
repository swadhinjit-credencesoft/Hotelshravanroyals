import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Cottages & Rooms in Purnia | Hotel Bella Casa',
  description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Purnia.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/rooms',
  },
  openGraph: {
    title: 'Luxury Cottages & Rooms in Purnia | Hotel Bella Casa',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Purnia.',
    url: 'https://hotelsuryabellacasa.com/rooms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Cottages & Rooms in Purnia | Hotel Bella Casa',
    description: 'Explore our premium accommodations, featuring rustic Red Brick Cottages, Lawn-facing rooms, and Forest suites with deep nature views in Purnia.',
  }
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
