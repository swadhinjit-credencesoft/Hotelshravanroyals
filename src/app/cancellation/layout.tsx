import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Unwind Karjat',
  description: 'Read the cancellation and refund policy guidelines of Unwind Karjat regarding direct booking reservation amendments, monsoon policies, and refunds.',
  keywords: [
    'unwind karjat cancellation policy',
    'resort refund guidelines',
    'booking modification rules',
    'hotel refund policy'
  ],
  alternates: {
    canonical: 'https://unwindkarjat.com/cancellation',
  },
  openGraph: {
    title: 'Cancellation & Refund Policy | Unwind Karjat',
    description: 'Read the cancellation and refund policy guidelines of Unwind Karjat regarding direct booking reservation amendments, monsoon policies, and refunds.',
    url: 'https://unwindkarjat.com/cancellation',
    type: 'website',
    images: [
      {
        url: 'https://unwindkarjat.com/images/resort-exterior.png',
        width: 1200,
        height: 630,
        alt: 'Unwind Karjat Resort Nature View'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation & Refund Policy | Unwind Karjat',
    description: 'Read the cancellation and refund policy guidelines of Unwind Karjat regarding direct booking reservation amendments, monsoon policies, and refunds.',
    images: ['https://unwindkarjat.com/images/resort-exterior.png']
  }
}

export default function CancellationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
