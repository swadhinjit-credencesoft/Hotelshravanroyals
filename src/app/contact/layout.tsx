import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact The Divine Oasis in Purulia, West Bengal. Call +91 9903989950. Located at Ajodhya Hill, Opposite Ajodhya Hill, Near Ajodhya Hill, Purulia 854301. Best hotel near Purulia Ajodhya Hill, near Railway Station.',
  keywords: ['contact The Divine Oasis Purulia', 'hotel near Ajodhya Hill Purulia', 'hotel Purulia phone number', 'hotel opp Ajodhya Hill Purulia', 'The Divine Oasis address', 'Purulia hotel contact number', 'hotel near railway station Purulia', 'hotel in mariam nagar Purulia', 'hotel near gulabbagh Purulia', 'hotel near line bazar Purulia', 'hotel near Purulia junction', 'hotel near airport Purulia', 'hotel near nh-31 Purulia', 'hotel in bhatta bazar Purulia', 'The Divine Oasis whatsapp number'],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/contact',
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
    title: 'Contact The Divine Oasis | +91 9903989950',
    description: 'Contact The Divine Oasis in Purulia. Call +91 9903989950. Located at Ajodhya Hill, Opposite Ajodhya Hill, Near Ajodhya Hill, Purulia 854301.',
    url: 'https://thedivineoasisresort.com/contact',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact The Divine Oasis Purulia - Hotel Near Ajodhya Hill Near Railway Station',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Divine Oasis | +91 9903989950',
    description: 'Contact The Divine Oasis in Purulia near Ajodhya Hill and Railway Station. Call +91 9903989950.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
                name: 'Contact',
                item: 'https://thedivineoasisresort.com/contact',
              },
            ],
          }),
        }}
      />
      {children}
    </>
  )
}
