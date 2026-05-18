import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Nature Retreat Stay | Unwind Karjat',
  description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
  alternates: {
    canonical: 'https://unwindkarjat.com/reservations',
  },
  openGraph: {
    title: 'Book Your Nature Retreat Stay | Unwind Karjat',
    description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
    url: 'https://unwindkarjat.com/reservations',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Nature Retreat Stay | Unwind Karjat',
    description: 'Secure your luxury cottage booking in Karjat today. Fill in check-in and check-out dates to request a custom travel itinerary from our concierge.',
  }
}

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
