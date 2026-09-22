import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'Read the cancellation and refund policy of The Divine Oasis, Purulia. Understand amendment charges, cancellation timelines, and general terms.',
  keywords: ['hotel cancellation policy', 'Purulia hotel refund', 'The Divine Oasis cancellation', 'booking cancellation Purulia', 'hotel amendment charges', 'Purulia hotel cancellation refund', 'hotel booking terms Purulia', 'cancel hotel reservation Purulia', 'Purulia hotel refund policy', 'hotel cancellation timeline', 'no show policy Purulia hotel', 'The Divine Oasis refund'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/cancellation',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cancellation & Refund Policy | The Divine Oasis Purulia',
    description: 'Read the cancellation and refund policy of The Divine Oasis, Purulia. Understand amendment charges, cancellation timelines, and general terms.',
    url: 'https://thedivineoasisresort.com/cancellation',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Purulia - Cancellation Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation & Refund Policy | The Divine Oasis Purulia',
    description: 'Read the cancellation and refund policy of The Divine Oasis, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function CancellationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Cancellation Policy',
                item: 'https://thedivineoasisresort.com/cancellation',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
