import type { Metadata } from 'next'
import FAQSection from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Hotel Booking & Stay FAQs',
  description:
    'Find answers to frequently asked questions about Hotel Surya Bella Casa in Purnea. Check-in timings, room categories, parking, Wi-Fi, food, and booking info.',
  keywords: [
    'hotel faq purnea',
    'hotel booking questions purnea',
    'check in check out time purnea hotel',
    'hotel amenities purnea',
    'room categories purnea',
    'hotel near bus stand faq',
    'Purnea hotel frequently asked questions',
  ],
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/faq',
  },
  openGraph: {
    title: 'Hotel Booking & Stay FAQs | Hotel Surya Bella Casa Purnea',
    description: 'Find answers to all your questions about Hotel Surya Bella Casa in Purnea - check-in timings, rooms, parking, WiFi, food, booking, and more.',
    url: 'https://hotelsuryabellacasa.com/faq',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Surya Bella Casa Purnea - Frequently Asked Questions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Booking & Stay FAQs | Hotel Surya Bella Casa',
    description: 'FAQ about Hotel Surya Bella Casa in Purnea - check-in, rooms, parking, WiFi, food, and booking information.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is Hotel Surya Bella Casa located in Purnea?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hotel Surya Bella Casa is centrally located at Suryalok Complex, Opposite Vikass Market, Near the main Bus Stand, Purnea, Bihar 854301, India."
        }
      },
      {
        "@type": "Question",
        "name": "How far is the hotel from Purnea Junction Railway Station?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The hotel is approximately 6.1 km from Purnea Junction Railway Station, about a 15-minute drive."
        }
      },
      {
        "@type": "Question",
        "name": "Is Hotel Surya Bella Casa a family-friendly hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer clean, secure, and spacious AC and Non-AC accommodations suitable for families with children and elderly members."
        }
      },
      {
        "@type": "Question",
        "name": "Is pure vegetarian food available at the hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guests can order vegetarian delicacies from partner restaurants in Purnea via Swiggy and Zomato. Non-vegetarian food is not permitted on the premises."
        }
      },
      {
        "@type": "Question",
        "name": "What are the room categories at Hotel Surya Bella Casa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Super Deluxe Rooms, Deluxe AC Rooms, Deluxe Non-AC Rooms, and Standard Non-AC Rooms to suit all budgets."
        }
      },
      {
        "@type": "Question",
        "name": "What are the check-in and check-out timings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check-in is at 12:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are subject to availability."
        }
      },
      {
        "@type": "Question",
        "name": "Is there free Wi-Fi at the hotel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, complimentary high-speed Wi-Fi is available throughout the property for all guests."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have parking on-site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, secure and complimentary dedicated parking is available on-site for all guests."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Book directly on our website, call +91 9835923601, or message us on WhatsApp for instant confirmation."
        }
      },
      {
        "@type": "Question",
        "name": "Is the hotel near Purnea Bus Stand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Hotel Surya Bella Casa is located just a short walk from the main Purnea Bus Stand, opposite Vikass Market."
        }
      }
    ]
  }

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
                item: 'https://hotelsuryabellacasa.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'FAQ',
                item: 'https://hotelsuryabellacasa.com/faq',
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
