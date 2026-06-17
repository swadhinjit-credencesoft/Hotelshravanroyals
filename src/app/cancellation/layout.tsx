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
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Cancellation Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnia, Bihar.',
    url: 'https://hotelsuryabellacasa.com/cancellation',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Cancellation Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cancellation Policy | Hotel Surya Bella Casa Purnia',
    description: 'Read the cancellation and refund policy of Hotel Surya Bella Casa, Purnia.',
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
