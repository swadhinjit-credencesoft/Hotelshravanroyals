import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Concierge & Travel Directions | Unwind Karjat',
  description: 'Plan your nature getaway. Contact our dedicated concierge team for reservations, custom booking rates, and travel guides from Mumbai or Pune.',
  alternates: {
    canonical: 'https://unwindkarjat.com/contact',
  },
  openGraph: {
    title: 'Contact Concierge & Travel Directions | Unwind Karjat',
    description: 'Plan your nature getaway. Contact our dedicated concierge team for reservations, custom booking rates, and travel guides from Mumbai or Pune.',
    url: 'https://unwindkarjat.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Concierge & Travel Directions | Unwind Karjat',
    description: 'Plan your nature getaway. Contact our dedicated concierge team for reservations, custom booking rates, and travel guides from Mumbai or Pune.',
  }
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
