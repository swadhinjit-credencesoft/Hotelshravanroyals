import type { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Purnea Hotel History & Legacy',
  description:
    'Learn about Hotel Surya Bella Casa in Purnea. Established in 2019, opposite Vikass Market near Bus Stand, providing clean, comfortable lodging with local Bihari hospitality.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/about',
  },
  openGraph: {
    title: 'About Us | Hotel Surya Bella Casa Purnea',
    description: 'Learn about our journey from 2019, our commitment to hospitality, and our location near Purnia Bus Stand.',
    url: 'https://hotelsuryabellacasa.com/about',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [
      {
        url: 'https://bookonelocal.in/cdn/IMG_3815.avif',
        width: 1200,
        height: 630,
        alt: 'Hotel Surya Bella Casa About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Hotel Surya Bella Casa Purnea',
    description: 'Discover the history, values, and hospitality standards of Hotel Surya Bella Casa in Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      {/* Organization Schema for SEO (E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Hotel Surya Bella Casa",
            "description": "Premium budget and mid-range hotel in Purnia offering modern rooms, delicious pure veg dining partners, and warm local hospitality.",
            "url": "https://hotelsuryabellacasa.com",
            "logo": "https://hotelsuryabellacasa.com/suryabellacasalogo.png",
            "foundingDate": "2019",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Purnia",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/hotelsuryabellacasa",
              "https://www.instagram.com/hotel.bellacasaa/",
              "https://www.youtube.com/@hotelsuryabellacasa"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "About Hotel Surya Bella Casa - Purnea Heritage Hotel",
            "description": "Video tour of Hotel Surya Bella Casa about page showcasing our history, values, and hospitality in Purnea. Learn about our journey from 2019 to becoming Purnea's preferred budget hotel.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/IMG_7429.avif",
            "contentUrl": "https://bookonelocal.in/cdn/IMG_7429.mp4",
            "embedUrl": "https://hotelsuryabellacasa.com/about",
            "uploadDate": "2024-02-20",
            "duration": "PT45S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://hotelsuryabellacasa.com/about"
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
                "name": "Why choose Hotel Surya Bella Casa for your stay in Purnea?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa offers the perfect blend of comfort, convenience, and local heritage. Located just 2 minutes from Purnea Bus Stand and opposite Vikass Market, we provide clean, affordable rooms with essential amenities, 100% power backup, AC, and free high-speed Wi-Fi. Our welcoming Bihari service and vegetarian dining options make it ideal for both business travelers and families visiting Purnea."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key amenities and services at Hotel Surya Bella Casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa provides 100% power backup and AC in all rooms, daily hygiene and sanitization, zero hidden charges, and local Bihari hospitality. Our rooms are equipped with hot water kettles, complimentary tea/coffee supplies, and mini-fridges. We're conveniently located near Bhatta Bazar and bus stand attractions, with 24/7 security and active commercial activity."
                }
              },
              {
                "@type": "Question",
                "name": "How does Hotel Surya Bella Casa ensure guest comfort and safety?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain strict hygiene standards with daily sanitization services, 24/7 security in a well-lit area, and transparent pricing with zero hidden charges. All rooms are air-conditioned with power backup, and our staff provides attentive local service. The hotel is in a safe neighborhood with easy access to transportation and amenities."
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
