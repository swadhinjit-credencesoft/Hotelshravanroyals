import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About The Divine Oasis Purulia — best hotel in Purulia near Ajodhya Hill and Ajodhya Hill. Established 2019. Family-friendly, business-ready with free WiFi, parking, AC rooms, rooftop restaurant, banquet hall. Book direct.',
  keywords: ['about The Divine Oasis Purulia', 'best hotel in Purulia about', 'hotel near Ajodhya Hill Purulia story', 'Purulia family hotel history', 'Purulia business hotel', 'hotel opposite Ajodhya Hill Purulia', 'Purulia hotel with rooftop restaurant', 'Purulia hotel with banquet hall', 'Purulia hotel free wifi parking', 'Purulia accommodation best hotel', 'why choose The Divine Oasis Purulia', 'hotel Purulia established 2019', 'Purulia hotel overview about us', 'Purulia hotel mission values', 'best hotel in Purulia West Bengal'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/about',
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
    title: 'About The Divine Oasis Purulia',
    description: 'About The Divine Oasis Purulia — best hotel in Purulia near Ajodhya Hill and Ajodhya Hill. Family hotel, business hotel with free WiFi, parking, AC rooms, rooftop restaurant, banquet hall.',
    url: 'https://thedivineoasisresort.com/about',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'About The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Divine Oasis Purulia',
    description: 'Best hotel in Purulia near Ajodhya Hill & Ajodhya Hill. Family hotel, business hotel, rooftop restaurant, banquet hall.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'About',
                item: 'https://thedivineoasisresort.com/about',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
