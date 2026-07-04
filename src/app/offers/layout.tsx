import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exclusive Offers & Packages',
  description: 'Discover exclusive deals, seasonal packages, and special offers at Hotel Surya Bella Casa, Purnia. Book direct for the best rates on AC and Non-AC rooms.',
  keywords: ['hotel deals purnia', 'purnia hotel offers', 'discount hotel purnia', 'seasonal packages purnia', 'budget stay purnia offers', 'purnia hotel discount', 'hotel promotional offers purnia', 'purnia room package deals', 'purnia hotel weekend offer', 'purnia hotel festival offer', 'couple package purnia hotel', 'purnia hotel long stay discount', 'purnia hotel corporate discount', 'purnia hotel advance booking offer', 'best rate purnia hotel'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/offers',
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
    title: 'Exclusive Offers & Packages | Hotel Surya Bella Casa Purnia',
    description: 'Discover exclusive deals, seasonal packages, and special offers at Hotel Surya Bella Casa, Purnia. Book direct for the best rates.',
    url: 'https://hotelsuryabellacasa.com/offers',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa Purnia Offers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exclusive Offers & Packages | Hotel Surya Bella Casa Purnia',
    description: 'Discover exclusive deals, seasonal packages, and special offers at Hotel Surya Bella Casa, Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
}

export default function OffersLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Offers',
                item: 'https://hotelsuryabellacasa.com/offers',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
