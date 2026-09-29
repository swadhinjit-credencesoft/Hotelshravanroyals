import type { Metadata } from 'next'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Resort Stay FAQs | The Divine Oasis, Ajodhya Hill, Purulia',
  description:
    'Find answers to frequently asked questions about The Divine Oasis at Ajodhya Hill, Purulia. Check-in timings, cottage categories, organic farm dining, barbeque, Wi-Fi, and booking info.',
  keywords: [
    'resort faq Purulia',
    'cottage booking questions Ajodhya Hill',
    'check in check out time Purulia resort',
    'resort amenities Purulia',
    'cottage categories The Divine Oasis',
    'resort near Ajodhya Hill faq',
    'Purulia forest resort frequently asked questions',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/faq',
  },
  openGraph: {
    title: 'Resort Stay FAQs | The Divine Oasis Ajodhya Hill, Purulia',
    description: 'Find answers to all your questions about The Divine Oasis at Ajodhya Hill, Purulia - check-in timings, cottages, organic farm dining, barbeque, Wi-Fi, booking, and more.',
    url: 'https://thedivineoasisresort.com/faq',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg', width: 1200, height: 630, alt: 'The Divine Oasis Ajodhya Hill - Frequently Asked Questions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Stay FAQs | The Divine Oasis Ajodhya Hill',
    description: 'FAQ about The Divine Oasis at Ajodhya Hill, Purulia - check-in, cottages, organic farm dining, barbeque, Wi-Fi, and booking information.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Where is The Divine Oasis located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Divine Oasis is located at 643G+4Q, Hilltop, Ajodhya, Purulia, West Bengal 723152, India, perched atop Ajodhya Hill within the Ajodhya Hills & Forest Reserve."
      }
    },
    {
      "@type": "Question",
      "name": "How far is the resort from Purulia Junction Railway Station?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Divine Oasis is approximately 42.6 km from Purulia Junction Railway Station, around a 60-70 minute drive through the scenic Purulia hills."
      }
    },
    {
      "@type": "Question",
      "name": "Is The Divine Oasis a family-friendly resort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, The Divine Oasis is fully family-friendly with spacious family cottages (VISTA Four Beds), a safe hilltop environment, and 24/7 staff assistance."
      }
    },
    {
      "@type": "Question",
      "name": "Is pure vegetarian food available at the resort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, The Divine Oasis serves fresh organic vegetarian meals (veg thali) from our own farm-to-table kitchen. Non-vegetarian food is not permitted on the property premises."
      }
    },
    {
      "@type": "Question",
      "name": "What are the cottage categories available at The Divine Oasis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Divine Oasis offers 4 cottage categories: Premium Deluxe Mud Cottages (â‚¹4,255/night), Luxury Suite Cottage (â‚¹7,225/night), VISTA Four Beds (â‚¹6,500/night), and Vista Pod Cottage (â‚¹4,000/night)."
      }
    },
    {
      "@type": "Question",
      "name": "What are the check-in and check-out timings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check-in time is 1:00 PM and check-out time is 11:00 AM."
      }
    },
    {
      "@type": "Question",
      "name": "Is there free high-speed Wi-Fi at the resort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, complimentary high-speed Wi-Fi is available throughout the property for all guests."
      }
    },
    {
      "@type": "Question",
      "name": "Is there dedicated parking available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, secure and complimentary dedicated parking facilities are available on-site for guests."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a stay at The Divine Oasis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book directly at https://bookone.io/The-Divine-Oasis?bookingEngine=true or call +91 99039 89950. Direct booking guarantees the best rate."
      }
    },
    {
      "@type": "Question",
      "name": "What are the nearby attractions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ajodhya Hills & Forest Reserve is 0.4 km away, Thurga Dam is 13.8 km, Deulghata Temples are 33.7 km, Barabhum is 38.5 km, and Purulia Junction is 42.6 km from the resort."
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <main className="bg-cream min-h-screen pt-32">
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
                name: 'FAQ',
                item: 'https://thedivineoasisresort.com/faq',
              },
            ],
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center pt-8 pb-4 px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl italic text-forest">
          Frequently Asked Questions
        </h1>
      </div>
      <FAQSection />
    </main>
  )
}
