import type { Metadata } from 'next'
import EventsContent from './EventsContent'

export const metadata: Metadata = {
  title: 'Banquet Hall & Party Venue at Ajodhya Hill | The Divine Oasis, Purulia',
  description: 'Host birthday parties, anniversary parties, corporate retreats, private events & day trips at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with organic farm dining, barbeque & family rooms.',
  keywords: [
    'banquet hall Purulia',
    'birthday party venue Purulia',
    'anniversary party venue Purulia',
    'party venue Ajodhya Hill',
    'corporate retreat Purulia',
    'event venue Ajodhya Hill',
    'celebration venue Purulia',
    'day trip venue Purulia',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/events',
  },
  openGraph: {
    title: 'Banquet Hall & Party Venue at Ajodhya Hill | The Divine Oasis',
    description: 'Host birthday parties, anniversary parties, corporate retreats, private events & day trips at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with organic farm dining & barbeque.',
    url: 'https://thedivineoasisresort.com/events',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg', width: 1200, height: 630, alt: 'Party & Event Venue at The Divine Oasis Ajodhya Hill' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banquet Hall & Party Venue at Ajodhya Hill | The Divine Oasis',
    description: 'Host birthday parties, anniversary parties, corporate retreats & day trips at The Divine Oasis atop Ajodhya Hill, Purulia.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg'],
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
"name": "The Divine Oasis Event Venue Ajodhya Hill",
              "description": "Party & event venue at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort hosting birthday parties, anniversary parties, corporate retreats, private events, and day trips near Ajodhya Hills & Forest Reserve.",
              "url": "https://thedivineoasisresort.com/events",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "643G+4Q, Hilltop",
                "addressLocality": "Ajodhya",
                "addressRegion": "West Bengal",
                "postalCode": "723152",
                "addressCountry": "IN"
              },
              "telephone": "+91990398950"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
{
                  "@type": "Question",
                  "name": "What is the best venue for birthday and anniversary parties in Purulia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Divine Oasis is the best party venue in Purulia, located atop Ajodhya Hill with forest views. We host birthday parties, anniversary parties, receptions, and private celebrations with organic farm catering and barbeque."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the party capacity at The Divine Oasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our hilltop event spaces at The Divine Oasis can comfortably host up to 100 guests for birthday parties, anniversary parties, and celebrations with bespoke organic farm catering, barbeque evenings, and forest backdrop."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you host corporate retreats at The Divine Oasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, The Divine Oasis is a premier corporate retreat venue in Purulia. We offer high-speed Wi-Fi, peaceful hilltop environment for strategy sessions, group accommodation in premium cottages, and team-building activities near Ajodhya Hills & Forest Reserve."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can we host birthday parties at The Divine Oasis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! The Divine Oasis is perfect for birthday parties and private celebrations. Our family rooms, barbeque stand, and hilltop seating area create a memorable setting for your special day near Ajodhya Hill."
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
"name": "The Divine Oasis Events - Hilltop Party & Retreat Venue",
            "description": "Party & event venue at The Divine Oasis atop Ajodhya Hill, Purulia. Video showcase of hilltop banquet hall, birthday & anniversary party spaces, corporate retreat areas near Ajodhya Hills & Forest Reserve.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg",
            "contentUrl": "https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg",
            "embedUrl": "https://thedivineoasisresort.com/events",
            "uploadDate": "2026-05-13",
            "duration": "PT60S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://thedivineoasisresort.com/events"
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
