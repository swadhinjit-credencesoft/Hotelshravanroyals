import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Nature Retreat Stay | Unwind Karjat',
  description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
  keywords: [
    'book cottage karjat',
    'resort availability checking',
    'online booking unwind karjat',
    'luxury room reservation',
    'karjat weekend booking',
    'direct booking resort discount'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/reservations',
  },
  openGraph: {
    title: 'Book Your Nature Retreat Stay | Unwind Karjat',
    description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
    url: 'https://unwindkarjat.com/reservations',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Book your luxury stay at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Nature Retreat Stay | Unwind Karjat',
    description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
