import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service & Booking Conditions | Unwind Karjat',
  description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
  alternates: {
    canonical: 'https://unwindkarjat.com/terms',
  },
  openGraph: {
    title: 'Terms of Service & Booking Conditions | Unwind Karjat',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
    url: 'https://unwindkarjat.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Booking Conditions | Unwind Karjat',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
  }
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
