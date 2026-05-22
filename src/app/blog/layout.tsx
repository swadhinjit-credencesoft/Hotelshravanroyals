import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karjat Travel Blog & Itineraries | Hotel Bella Casa',
  description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/blog',
  },
  openGraph: {
    title: 'Karjat Travel Blog & Itineraries | Hotel Bella Casa',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
    url: 'https://hotelbellacasa.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karjat Travel Blog & Itineraries | Hotel Bella Casa',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
