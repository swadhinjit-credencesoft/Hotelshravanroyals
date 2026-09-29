import type { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
  description:
    'Discover The Divine Oasis - a serene forest resort atop Ajodhya Hill in Purulia, West Bengal. Family-run since 2026, offering premium mud cottages, luxury suites, organic farm dining, and authentic hilltop hospitality.',
  keywords: [
    'about The Divine Oasis',
    'forest resort Purulia history',
    'The Divine Oasis Ajodhya Hill story',
    'best resort in Purulia near Ajodhya Hill',
    'Purulia resort family run',
    'organic farm resort West Bengal',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/about',
  },
  openGraph: {
    title: 'About The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
    description: 'Discover our journey as a family-run forest resort at Ajodhya Hill, our commitment to organic farm hospitality, and our hilltop sanctuary in Purulia.',
    url: 'https://thedivineoasisresort.com/about',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg',
        width: 1200,
        height: 630,
        alt: 'The Divine Oasis About Us - Ajodhya Hill Forest Resort',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
    description: 'Discover the history, values, and hospitality standards of The Divine Oasis at Ajodhya Hill, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
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
          })
        }}
      />

      {/* Resort schema is defined in root layout.tsx — using AboutPage for E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About The Divine Oasis Ajodhya Hill",
            "description": "Discover The Divine Oasis - a serene forest resort atop Ajodhya Hill in Purulia, West Bengal. Family-run since 2026, offering premium mud cottages, luxury suites, organic farm dining, and authentic hilltop hospitality.",
            "url": "https://thedivineoasisresort.com/about",
            "mainEntity": {
              "@type": "Hotel",
              "@id": "https://thedivineoasisresort.com/#hotel",
              "name": "The Divine Oasis",
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ajodhya",
                "addressRegion": "West Bengal",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.facebook.com/thedivineoasisresort",
                "https://www.instagram.com/thedivineoasisresort",
                "https://www.youtube.com/@thedivineoasisresort"
              ]
}
            })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "About The Divine Oasis - Ajodhya Hill Forest Resort",
            "description": "Video tour of The Divine Oasis about page showcasing our history, values, and hospitality at Ajodhya Hill, Purulia. Learn about our journey as a family-run forest resort.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
            "contentUrl": "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
            "embedUrl": "https://thedivineoasisresort.com/about",
            "uploadDate": "2026-05-13",
            "duration": "PT45S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://thedivineoasisresort.com/about"
}
            })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why choose The Divine Oasis for your stay in Purulia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis offers a serene forest retreat atop Ajodhya Hill in Purulia, West Bengal. Our premium mud cottages, luxury suites, organic farm dining, and barbeque evenings provide an authentic hilltop experience. Just 0.4 km from Ajodhya Hills & Forest Reserve, we offer free Wi-Fi, geyser, room service, and genuine family hospitality."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key amenities and services at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis provides free high-speed Wi-Fi, geyser/hot water in every cottage, 24/7 room service, organic farm-to-table vegetarian dining, barbeque evenings, family rooms, luggage storage, and scenic seating areas. All cottages include smart TV, room service, and hand sanitizer."
                }
              },
              {
                "@type": "Question",
                "name": "How does The Divine Oasis ensure guest comfort and safety?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain strict hygiene standards with daily sanitization, 24/7 security, and transparent pricing. All cottages have geyser, power backup, and our family-run team provides attentive personal service. The resort is located in a safe hilltop area with easy access to Ajodhya Hills & Forest Reserve."
                }
              }
            ]
          })
        }}
      />

      <AboutContent />

    </main>
  );
}
