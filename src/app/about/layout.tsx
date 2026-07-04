import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Best Hotel in Purnia, Bihar',
  description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar. Committed to warm hospitality, clean rooms, and affordable stays for families and business travelers.',
  keywords: ['about hotel surya bella casa', 'about purnia hotel', 'hotel purnia story', 'surya bella casa history', 'purnia hospitality', 'hotel established in purnia 2019', 'purnia hotel owners', 'best hotel in purnia about us', 'why choose hotel surya bella casa', 'purnia hotel overview', 'hotel near vikass market about', 'purnia accommodation story', 'purnia business hotel history', 'family hotel purnia about', 'purnia hotel mission'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/about',
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
    title: 'About Us — Best Hotel in Purnia, Bihar | Hotel Surya Bella Casa',
    description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar. Committed to warm hospitality, clean rooms, and affordable stays for families and business travelers.',
    url: 'https://hotelsuryabellacasa.com/about',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3784.avif',
        width: 1200,
        height: 630,
        alt: 'About Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us — Best Hotel in Purnia, Bihar | Hotel Surya Bella Casa',
    description: 'Learn about Hotel Surya Bella Casa, established in 2019 in Purnia, Bihar.',
    images: ['https://bookonelocal.in/cdn/IMG_3784.avif'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
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
                name: 'About',
                item: 'https://hotelsuryabellacasa.com/about',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
