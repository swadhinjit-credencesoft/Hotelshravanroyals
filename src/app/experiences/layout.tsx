import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Places to Visit in Purnea | Nearby Attractions & Things to Do | Hotel Surya Bella Casa',
  description: 'Explore places to visit in Purnea and nearby attractions near Hotel Surya Bella Casa. Maa Puran Devi Temple, Purnea Court, Polytechnic, shopping markets. Best things to do in Purnea, Bihar.',
  keywords: ['places to visit in purnea', 'things to do in purnea', 'purnea nearby attractions', 'maa puran devi temple purnea', 'purnea court', 'district hospital purnea', 'polytechnic purnea', 'shopping market purnea', 'bus terminal purnea', 'purnea sightseeing', 'purnea city tour', 'purnea local markets', 'weekend activities purnea', 'purnea bihar tourism', 'hotel near attractions purnea'],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/experiences',
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
    title: 'Places to Visit in Purnea | Nearby Attractions & Things to Do | Hotel Surya Bella Casa',
    description: 'Explore places to visit in Purnea and nearby attractions near Hotel Surya Bella Casa. Maa Puran Devi Temple, shopping markets, and more. Best things to do in Purnea.',
    url: 'https://hotelsuryabellacasa.com/experiences',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3809.avif',
        width: 1200,
        height: 630,
        alt: 'Experiences at Hotel Surya Bella Casa Purnia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Places to Visit in Purnea | Nearby Attractions | Hotel Surya Bella Casa',
    description: 'Explore places to visit in Purnea near Hotel Surya Bella Casa. Temples, markets, attractions near Bus Stand.',
    images: ['https://bookonelocal.in/cdn/IMG_3809.avif'],
  },
}

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Experiences',
                item: 'https://hotelsuryabellacasa.com/experiences',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
