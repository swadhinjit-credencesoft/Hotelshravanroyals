import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service & Booking Conditions | Hotel Bella Casa',
  description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Hotel Bella Casa.',
  alternates: {
    canonical: 'https://hotelbellacasa.com/terms',
  },
  openGraph: {
    title: 'Terms of Service & Booking Conditions | Hotel Bella Casa',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Hotel Bella Casa.',
    url: 'https://hotelbellacasa.com/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Booking Conditions | Hotel Bella Casa',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Hotel Bella Casa.',
  }
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
