import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Purnia Travel Blog & Guides | Hotel Bella Casa',
  description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/blog',
  },
  openGraph: {
    title: 'Purnia Travel Blog & Guides | Hotel Bella Casa',
    description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
    url: 'https://hotelbellacasa.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purnia Travel Blog & Guides | Hotel Bella Casa',
    description: 'Discover local travel insights, itineraries, business trip guides, and city exploration tips in our official Purnia travel journal.',
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
