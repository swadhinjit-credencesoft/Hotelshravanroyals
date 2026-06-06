import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Hotel Surya Bella Casa Purnia',
  description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnia, Bihar. Understand charges, amendment rules, and no-show policies for direct bookings.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/cancellation',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cancellation Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnia, Bihar. Understand charges, amendment rules, and no-show policies for direct bookings.',
    url: 'https://hotelsuryabellacasa.com/cancellation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnia, Bihar. Understand charges, amendment rules, and no-show policies for direct bookings.',
  }
}

export default function CancellationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
