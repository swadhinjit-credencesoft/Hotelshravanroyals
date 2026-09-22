import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions of The Divine Oasis, Purulia, West Bengal. Understand our booking, check-in/check-out, and guest conduct policies.',
  keywords: ['hotel terms and conditions', 'Purulia hotel policies', 'The Divine Oasis terms', 'booking policy Purulia', 'Purulia hotel check in time', 'Purulia hotel check out time', 'hotel guest conduct Purulia', 'Purulia hotel tariff terms', 'Purulia hotel age policy', 'hotel id proof Purulia', 'Purulia hotel foreign guest policy', 'Purulia hotel pet policy', 'hotel smoking policy Purulia', 'Purulia hotel group booking terms'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/terms',
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
    title: 'Terms & Conditions | The Divine Oasis Purulia',
    description: 'Read the terms and conditions of The Divine Oasis, Purulia, West Bengal.',
    url: 'https://thedivineoasisresort.com/terms',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Terms and Conditions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | The Divine Oasis Purulia',
    description: 'Read the terms and conditions of The Divine Oasis, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Terms & Conditions',
                item: 'https://thedivineoasisresort.com/terms',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
