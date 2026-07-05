import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Rooftop Restaurant in Purnea | Family Restaurant Near Bus Stand | Hotel Surya Bella Casa Purnea',
  description: 'Enjoy the best rooftop restaurant in Purnea at Hotel Surya Bella Casa. Family restaurant near Bus Stand serving Indian, Tandoor, Mughlai, Asian & Continental cuisine. Best dinner restaurant in Purnea. Book now.',
  keywords: ['rooftop restaurant purnea', 'best restaurant in purnea', 'family restaurant purnea', 'restaurant near bus stand purnea', 'dinner in purnea', 'lunch restaurant purnea', 'breakfast restaurant purnea', 'best rooftop restaurant in purnea', 'veg restaurant purnea', 'non veg restaurant purnea', 'multi cuisine restaurant purnea', 'fine dining restaurant purnea', 'hotel restaurant purnea', 'purnea restaurant food', 'restaurant near vikass market purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/dining',
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
    title: 'Best Rooftop Restaurant in Purnea | Family Restaurant Near Bus Stand | Hotel Surya Bella Casa',
    description: 'Enjoy the best rooftop restaurant in Purnea at Hotel Surya Bella Casa. Family restaurant near Bus Stand serving Indian, Tandoor, Mughlai, Asian & Continental cuisine. Best dinner restaurant in Purnea.',
    url: 'https://hotelsuryabellacasa.com/dining',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3808.avif',
        width: 1200,
        height: 630,
        alt: 'Best Rooftop Restaurant in Purnea - Family Restaurant Near Bus Stand - Hotel Surya Bella Casa Purnea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Rooftop Restaurant in Purnea | Family Restaurant Near Bus Stand',
    description: 'Enjoy the best rooftop restaurant in Purnea at Hotel Surya Bella Casa near Bus Stand. Best dinner and lunch restaurant in Purnea.',
    images: ['https://bookonelocal.in/cdn/IMG_3808.avif'],
  },
}

export default function DiningLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Dining',
                item: 'https://hotelsuryabellacasa.com/dining',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
