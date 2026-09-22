import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy of The Divine Oasis, Purulia, West Bengal — guidelines on data collection, storage, and reservation security.',
  keywords: ['hotel privacy policy', 'Purulia hotel privacy', 'The Divine Oasis privacy', 'data policy Purulia hotel', 'guest privacy Purulia hotel', 'hotel data protection', 'Purulia hotel personal information', 'hotel privacy terms Purulia', 'cookie policy Purulia hotel', 'Purulia hotel booking privacy', 'hotel information security Purulia', 'privacy policy West Bengal hotel'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/privacy',
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
    title: 'Privacy Policy | The Divine Oasis Purulia',
    description: 'Read the privacy policy of The Divine Oasis, Purulia, West Bengal.',
    url: 'https://thedivineoasisresort.com/privacy',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | The Divine Oasis Purulia',
    description: 'Read the privacy policy of The Divine Oasis, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Privacy Policy',
                item: 'https://thedivineoasisresort.com/privacy',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
