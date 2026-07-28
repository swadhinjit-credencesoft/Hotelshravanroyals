import type { Metadata } from 'next'
import EventsContent from './EventsContent'

export const metadata: Metadata = {
  title: 'Banquet Hall & Wedding Venue in Purnea',
  description: 'Best banquet hall in Purnea near Bus Stand. Hotel Surya Bella Casa hosts weddings, corporate events, parties & day trips near Vikass Market. Book venue directly.',
  keywords: [
    'banquet hall purnea', 'wedding venue Purnea', 'party hall purnea',
    'conference hall purnea', 'event venue near bus stand purnea',
    'marriage hall Purnea', 'corporate event purnea', 'birthday party hall Purnea',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/events',
  },
  openGraph: {
    title: 'Banquet Hall & Wedding Venue in Purnea',
    description: 'Best banquet hall in Purnea near Bus Stand at Hotel Surya Bella Casa. Weddings, corporate events, parties & celebrations near Vikass Market.',
    url: 'https://hotelsuryabellacasa.com/events',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_7431.avif', width: 1200, height: 630, alt: 'Banquet Hall & Wedding Venue in Purnea - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall & Wedding Venue in Purnea',
    description: 'Best banquet hall in Purnea near Bus Stand. Weddings, corporate events & parties at Hotel Surya Bella Casa.',
    images: ['https://bookonelocal.in/cdn/IMG_7431.avif'],
  },
}

export default function EventsPage() {
  return (
    <main className="bg-cream min-h-screen">

      {/* EventVenue Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": "Hotel Surya Bella Casa Banquet Hall & Wedding Venue Purnea",
              "description": "Best banquet hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Wedding hall, marriage hall, conference hall, party hall near Vikass Market. Perfect for weddings, corporate events, and family celebrations.",
              "url": "https://hotelsuryabellacasa.com/events",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
                "addressLocality": "Purnea",
                "addressRegion": "Bihar",
                "postalCode": "854301",
                "addressCountry": "IN"
              },
              "telephone": "+919835923601"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the best banquet hall in Purnea?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hotel Surya Bella Casa is the best banquet hall in Purnea, located near Bus Stand opposite Vikass Market. We host weddings, corporate events, and birthday parties."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the wedding capacity at Hotel Surya Bella Casa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our wedding banquet hall and lawns in Purnea can comfortably host up to 250 guests with bespoke catering and decor."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide conference hall facilities in Purnea?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have a dedicated conference hall in Purnea with high-speed Wi-Fi, projectors, and team-building activities for up to 60 guests."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a marriage hall near Purnea Bus Stand?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Hotel Surya Bella Casa is a marriage hall near Purnea Bus Stand with wedding lawns, banquet facilities, and bridal suites for a perfect wedding venue."
                  }
                }
              ]
            }
          ])
        }}
      />

      {/* VideoObject Schema for Google Video Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Hotel Surya Bella Casa Events - Banquet Hall & Wedding Venue",
            "description": "Best banquet hall in Purnea at Hotel Surya Bella Casa near Bus Stand. Video showcase of wedding venue, conference hall, party hall near Vikass Market.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/IMG_7431.avif",
            "contentUrl": "https://bookonelocal.in/cdn/IMG_7431.mp4",
            "embedUrl": "https://hotelsuryabellacasa.com/events",
            "uploadDate": "2024-03-15",
            "duration": "PT60S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://hotelsuryabellacasa.com/events"
            },
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "userInteractionCount": 300
            }
          })
        }}
      />

      <EventsContent />

    </main>
  );
}
