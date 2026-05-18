import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
  description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
  alternates: {
    canonical: 'https://unwindkarjat.com/blog',
  },
  openGraph: {
    title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
    url: 'https://unwindkarjat.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karjat Travel Blog & Itineraries | Unwind Karjat',
    description: 'Discover local travel insights, monsoon itineraries, corporate retreat checklists, and peak weekend getaway tips in our official Karjat journal.',
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
