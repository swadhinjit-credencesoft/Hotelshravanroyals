import type { Metadata } from 'next'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Hotel Surya Bella Casa Reviews | Guest Testimonials & Ratings',
  description:
    'Read genuine guest reviews of Hotel Surya Bella Casa in Purnea. Rated 4.5★ by guests. See what travelers say about our rooms, rooftop restaurant, and service near Bus Stand Purnea. Book direct for best rates.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/reviews',
  },
  openGraph: {
    title: 'Hotel Surya Bella Casa Reviews | Guest Testimonials & Ratings',
    description: 'Read genuine guest reviews of Hotel Surya Bella Casa in Purnea. Rated 4.5★ by 120+ guests. Best hotel near Bus Stand and Vikass Market.',
    url: 'https://hotelsuryabellacasa.com/reviews',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Surya Bella Casa Reviews - Guest Testimonials' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Surya Bella Casa Reviews | 4.5★ Guest Rating',
    description: 'Read genuine guest reviews of Hotel Surya Bella Casa in Purnea near Bus Stand. Rated 4.5★ by travelers.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hotel Surya Bella Casa Purnea",
    "description": "Guest reviews and testimonials for Hotel Surya Bella Casa, best hotel in Purnea near Bus Stand",
    "url": "https://www.google.com/maps/place/?cid=8931275976043074034",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "120"
    },
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

  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
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
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/travel/search?q=hotel%20surya%20bella%20casa%20review&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764%2C121529350%2C121747502%2C121762713&hl=en-IN&gl=in&ssta=1&ts=CAEaRwopEicyJTB4MzllZmY5ZGQ0Y2U2YjBhZjoweDdiZmM4YjdkMGVmNTA5ZjISGhIUCgcI6g8QBxgHEgcI6g8QBxgIGAEyAhAA&qs=CAEyE0Nnb0k4cFBVOTlEdm92NTdFQUU4AkIJCfIJ9Q59i_x7QgkJ8gn1Dn2L_Hs&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjwtKX11L6VAxUAAAAAHQAAAAAQCw"
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
