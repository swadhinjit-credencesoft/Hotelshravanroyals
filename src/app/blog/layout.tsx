import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Hotel Surya Bella Casa Purnia | Travel Guide & Insights',
  description: 'Read the latest travel guides, local insights, and hotel tips for Purnia, Bihar from Hotel Surya Bella Casa. Discover the best places to visit, eat, and explore.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog',
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
    title: 'Blog — Hotel Surya Bella Casa Purnia | Travel Guide & Insights',
    description: 'Read the latest travel guides, local insights, and hotel tips for Purnia, Bihar from Hotel Surya Bella Casa.',
    url: 'https://hotelsuryabellacasa.com/blog',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Hotel Surya Bella Casa Purnia | Travel Guide & Insights',
    description: 'Read the latest travel guides, local insights, and hotel tips for Purnia, Bihar from Hotel Surya Bella Casa.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
