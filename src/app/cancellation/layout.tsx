import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnea. Understand amendment charges, cancellation timelines, and general terms.',
  keywords: ['hotel cancellation policy', 'Purnea hotel refund', 'hotel surya bella casa cancellation', 'booking cancellation Purnea', 'hotel amendment charges', 'Purnea hotel cancellation refund', 'hotel booking terms Purnea', 'cancel hotel reservation Purnea', 'Purnea hotel refund policy', 'hotel cancellation timeline', 'no show policy Purnea hotel', 'hotel surya bella casa refund'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/cancellation',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cancellation & Refund Policy | Hotel Surya Bella Casa Purnea',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnea. Understand amendment charges, cancellation timelines, and general terms.',
    url: 'https://hotelsuryabellacasa.com/cancellation',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnea - Cancellation Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation & Refund Policy | Hotel Surya Bella Casa Purnea',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnea.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Cancellation Policy',
                item: 'https://hotelsuryabellacasa.com/cancellation',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
