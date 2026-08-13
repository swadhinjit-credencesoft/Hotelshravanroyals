import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destination Weddings & Forest Lawns in Karjat',
  description: 'Exchange vows in a magical forest-side setting. Unwind Karjat offers destination wedding venues, bespoke catering, and luxury stay packages for up to 250 guests.',
  keywords: [
    'destination wedding karjat',
    'wedding lawns near mumbai',
    'forest wedding venue maharashtra',
    'pre wedding shoot resort',
    'karjat marriage lawn',
    'luxury wedding lawns pune'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/events/weddings',
  },
  openGraph: {
    title: 'Destination Weddings & Forest Lawns in Karjat | Unwind Karjat',
    description: 'Exchange vows in a magical forest-side setting. Unwind Karjat offers destination wedding venues, bespoke catering, and luxury stay packages for up to 250 guests.',
    url: 'https://unwindkarjat.com/events/weddings',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/exterior6.jpeg',
        width: 1200,
        height: 630,
        alt: 'Elegant Wedding Setup at Sunset in Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destination Weddings & Forest Lawns in Karjat | Unwind Karjat',
    description: 'Exchange vows in a magical forest-side setting. Unwind Karjat offers destination wedding venues, bespoke catering, and luxury stay packages for up to 250 guests.',
    images: ['https://unwindkarjat.com/images/exterior6.jpeg']
  }
}

export default function WeddingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
