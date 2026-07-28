import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnea, Bihar. Understand our booking, check-in/check-out, and guest conduct policies.',
  keywords: ['hotel terms and conditions', 'Purnea hotel policies', 'hotel surya bella casa terms', 'booking policy Purnea', 'Purnea hotel check in time', 'Purnea hotel check out time', 'hotel guest conduct Purnea', 'Purnea hotel tariff terms', 'Purnea hotel age policy', 'hotel id proof Purnea', 'Purnea hotel foreign guest policy', 'Purnea hotel pet policy', 'hotel smoking policy Purnea', 'Purnea hotel group booking terms'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/terms',
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
    title: 'Terms & Conditions | Hotel Surya Bella Casa Purnea',
    description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnea, Bihar.',
    url: 'https://hotelsuryabellacasa.com/terms',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | Hotel Surya Bella Casa Purnea',
    description: 'Read the terms and conditions of Hotel Surya Bella Casa, Purnea.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Terms & Conditions',
                item: 'https://hotelsuryabellacasa.com/terms',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
