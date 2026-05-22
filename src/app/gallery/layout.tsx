import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resort Gallery & Virtual Walkthrough | Hotel Bella Casa',
  description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/gallery',
  },
  openGraph: {
    title: 'Resort Gallery & Virtual Walkthrough | Hotel Bella Casa',
    description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
    url: 'https://hotelbellacasa.com/gallery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Gallery & Virtual Walkthrough | Hotel Bella Casa',
    description: 'Browse photos of our stunning red brick cottages, infinity pool, and lush forest surroundings. Take a virtual walkthrough tour of our resort.',
  }
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
