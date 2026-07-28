import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnea, Bihar — guidelines on data collection, storage, and reservation security.',
  keywords: ['hotel privacy policy', 'Purnea hotel privacy', 'hotel surya bella casa privacy', 'data policy Purnea hotel', 'guest privacy Purnea hotel', 'hotel data protection', 'Purnea hotel personal information', 'hotel privacy terms Purnea', 'cookie policy Purnea hotel', 'Purnea hotel booking privacy', 'hotel information security Purnea', 'privacy policy bihar hotel'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/privacy',
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
    title: 'Privacy Policy | Hotel Surya Bella Casa Purnea',
    description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnea, Bihar.',
    url: 'https://hotelsuryabellacasa.com/privacy',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Privacy Policy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Hotel Surya Bella Casa Purnea',
    description: 'Read the privacy policy of Hotel Surya Bella Casa, Purnea.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Privacy Policy',
                item: 'https://hotelsuryabellacasa.com/privacy',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
