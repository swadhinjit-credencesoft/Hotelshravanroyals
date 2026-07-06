import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Hotels Purnea Near Bus Stand',
  description:
    'Find the best hotel in Purnea near Bus Stand. Compare deluxe AC rooms, budget stays, family rooms, and premium options at Hotel Surya Bella Casa opposite Vikass Market.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/best-hotels-in-purnea-near-bus-stand',
  },
}

export default function BlogPost() {
  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Best Hotels in Purnea Near Bus Stand | Hotel Guide 2026",
            "description": "Complete guide to the best hotels in Purnea near Bus Stand. Compare prices, amenities, and locations.",
            "image": "https://bookonelocal.in/cdn/IMG_3815.avif",
            "datePublished": "2026-03-15",
            "dateModified": "2026-07-06",
            "author": { "@type": "Organization", "name": "Hotel Surya Bella Casa" },
            "publisher": { "@type": "Organization", "name": "Hotel Surya Bella Casa" }
          })
        }}
      />

      <article className="max-w-[800px] mx-auto px-6 md:px-10 pb-24">
        <div className="mb-8">
          <Link href="/blog" className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold hover:text-forest transition-colors">
            &larr; Back to Blog
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Hotel Guide</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Mar 15, 2026</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Best Hotels in Purnea Near Bus Stand
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="https://bookonelocal.in/cdn/IMG_3815.avif"
            alt="Hotel Surya Bella Casa exterior - Best hotel in Purnea near Bus Stand"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            If you are arriving in Purnia by bus, finding a comfortable and well-connected hotel near 
            the <strong>Purnia Bus Stand</strong> is essential. The main bus stand area, especially around 
            <strong>Vikass Market</strong> and <strong>Suryalok Complex</strong>, offers several accommodation 
            options for travelers.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Hotel Surya Bella Casa: Best Pick Near Bus Stand</h2>
          <p>
            <strong><Link href="/" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> is located opposite Vikass Market, less than a 2-minute walk from 
            Purnia Bus Stand. With 4 room categories, free WiFi, dedicated parking, and 24/7 room service, it is 
            the top choice for both transit travelers and extended stays.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Room Options & Pricing</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Super Deluxe AC Room</strong> — ₹2,700/night: Premium room with modern interiors, flat-screen TV, geyser</li>
            <li><strong>Deluxe AC Room</strong> — ₹2,100/night: Comfortable AC room with essential amenities</li>
            <li><strong>Deluxe Non-AC Room</strong> — ₹1,500/night: Well-ventilated budget-friendly option</li>
            <li><strong>Standard Non-AC Room</strong> — ₹1,200/night: Compact room for short stays</li>
          </ul>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Why Stay Near Bus Stand Purnea?</h2>
          <p>
            The area around Purnia Bus Stand is the commercial heart of the city. You have easy access to 
            <strong>Vikass Market</strong> for shopping, <strong>Bhatta Bazar</strong> for local goods, and 
            multiple sweet shops and restaurants within walking distance. Auto-rickshaws to Purnea Junction 
            Railway Station (6.1 km) and other parts of the city are readily available.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Book Direct & Save</h2>
          <p>
            Booking directly with Hotel Surya Bella Casa ensures you get the best available rate, 
            early check-in options, and free cancellation up to 48 hours before arrival. 
            <Link href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" className="text-gold hover:underline"> Book now</Link> or call 
            <a href="tel:+919835923601" className="text-gold hover:underline"> +91 9835923601</a> for assistance.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-wrap gap-3">
          <Link href="/rooms" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Calendar size={14} /> View Rooms & Prices
          </Link>
          <a href="https://www.google.com/maps/dir/?api=1&destination=25.7771,87.4753" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-gold/30 text-forest font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold/10 transition-all">
            <MapPin size={14} /> Get Directions
          </a>
        </div>
      </article>
    </main>
  )
}
