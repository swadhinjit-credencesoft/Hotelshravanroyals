import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service & Booking Conditions | Unwind Karjat',
  description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
  keywords: [
    'resort check in rules',
    'lodging terms of service',
    'hotel booking terms',
    'unwind karjat terms',
    'resort rules and regulations'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/terms',
  },
  openGraph: {
    title: 'Terms of Service & Booking Conditions | Unwind Karjat',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
    url: 'https://unwindkarjat.com/terms',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Terms and Conditions at Unwind Karjat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service & Booking Conditions | Unwind Karjat',
    description: 'Review the official terms of service, check-in schedules, lodging policies, and cancellation conditions for resort reservations at Unwind Karjat.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
