import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Comfortable Hotel in Purnia | Hotel Bella Casa',
  description: 'Discover the history, comfort, and hospitality of Hotel Bella Casa, a premier boutique hotel offering well-maintained accommodations in Purnia, Bihar.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/about',
  },
  openGraph: {
    title: 'About Us | Comfortable Hotel in Purnia | Hotel Bella Casa',
    description: 'Discover the history, comfort, and hospitality of Hotel Bella Casa, a premier boutique hotel offering well-maintained accommodations in Purnia, Bihar.',
    url: 'https://hotelbellacasa.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Comfortable Hotel in Purnia | Hotel Bella Casa',
    description: 'Discover the history, comfort, and hospitality of Hotel Bella Casa, a premier boutique hotel offering well-maintained accommodations in Purnia, Bihar.',
  }
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
