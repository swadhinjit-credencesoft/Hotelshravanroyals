import type { Metadata } from 'next'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Guest Reviews & Ratings | The Divine Oasis Ajodhya Hill, Purulia',
  description:
    'Read genuine guest reviews of The Divine Oasis at Ajodhya Hill, Purulia. Rated 5 stars by guests for forest resort experience, organic farm dining, and barbeque evenings.',
  keywords: [
    'The Divine Oasis reviews',
    'Purulia resort guest reviews',
    'best resort in Purulia ratings',
    'resort near Ajodhya Hill Purulia reviews',
    'family resort Purulia reviews',
    'corporate retreat Purulia reviews',
  ],
  alternates: {
    canonical: 'https://thedivineoasisresort.com/reviews',
  },
  openGraph: {
    title: 'The Divine Oasis Reviews | Guest Testimonials',
    description: 'Read genuine guest reviews of The Divine Oasis at Ajodhya Hill, Purulia. Real testimonials from nature lovers, families, and corporate travelers.',
    url: 'https://thedivineoasisresort.com/reviews',
    siteName: 'The Divine Oasis',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg', width: 1200, height: 630, alt: 'The Divine Oasis Reviews - Guest Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Divine Oasis Reviews | 5â˜… Guest Rating',
    description: 'Read genuine guest reviews of The Divine Oasis at Ajodhya Hill, Purulia. Rated 5â˜… by travelers.',
    images: ['https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Divine Oasis Ajodhya Hill",
  "description": "Guest reviews and testimonials for The Divine Oasis, forest resort at Ajodhya Hill, Purulia",
  "url": "https://www.google.com/maps/place/?api=1&query=The+Divine+Oasis+Ajodhya+Hill+Purulia",
  "review": testimonials.map(t => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": t.name
    },
    "reviewBody": t.text
  }))
}

export default function ReviewsPage() {
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
                name: 'Reviews',
                item: 'https://thedivineoasisresort.com/reviews',
              },
            ],
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="text-center pt-8 pb-4 px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl italic text-forest">
          Guest Reviews & Ratings
        </h1>
      </div>
      <TestimonialsSection />
      <div className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
        <div className="bg-white border border-gold/10 rounded-sm p-8 md:p-12">
          <h2 className="font-display text-3xl italic text-forest mb-8 text-center">
            More Guest Reviews
          </h2>
          <div className="space-y-6">
            {testimonials.map(t => (
              <div key={t.id} className="border-b border-gold/10 pb-6 last:border-0">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < t.rating ? 'text-gold' : 'text-gold/30'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="font-sans text-xs text-taupe ml-2">{t.stayType}</span>
                </div>
                <p className="font-serif text-base text-forest/80 italic leading-relaxed mb-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-sans text-xs uppercase tracking-wider text-taupe font-medium">
                  â€” {t.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Divine+Oasis+Ajodhya+Hill+Purulia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-sm hover:bg-gold-light transition-all font-bold"
            >
              Write a Google Review
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
