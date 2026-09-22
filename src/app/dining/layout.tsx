import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooftop Dining Purulia | Restaurant Near Ajodhya Hill',
  description: 'Enjoy the best rooftop restaurant in Purulia at The Divine Oasis. Family restaurant near Ajodhya Hill serving Indian, Tandoor, Mughlai, Asian & Continental cuisine. Best dinner restaurant in Purulia. Book now.',
  keywords: ['rooftop restaurant Purulia', 'best restaurant in Purulia', 'family restaurant Purulia', 'restaurant near Ajodhya Hill Purulia', 'dinner in Purulia', 'lunch restaurant Purulia', 'breakfast restaurant Purulia', 'best rooftop restaurant in Purulia', 'veg restaurant Purulia', 'non veg restaurant Purulia', 'multi cuisine restaurant Purulia', 'fine dining restaurant Purulia', 'hotel restaurant Purulia', 'Purulia restaurant food', 'restaurant near Ajodhya Hill Purulia'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/dining',
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
    title: 'Rooftop Dining Purulia | Restaurant Near Ajodhya Hill',
    description: 'Enjoy the best rooftop restaurant in Purulia at The Divine Oasis. Family restaurant near Ajodhya Hill serving Indian, Tandoor, Mughlai, Asian & Continental cuisine. Best dinner restaurant in Purulia.',
    url: 'https://thedivineoasisresort.com/dining',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Rooftop Restaurant in Purulia - Family Restaurant Near Ajodhya Hill - The Divine Oasis Purulia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooftop Dining Purulia | Restaurant Near Ajodhya Hill',
    description: 'Enjoy the best rooftop restaurant in Purulia at The Divine Oasis near Ajodhya Hill. Best dinner and lunch restaurant in Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
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
                item: 'https://thedivineoasisresort.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Dining',
                item: 'https://thedivineoasisresort.com/dining',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
