import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Hotel in Purnea',
  description:
    'Best family hotel in Purnea near Bus Stand and Vikass Market. Spacious family rooms, safe environment, elevator access, and 24/7 staff assistance at Hotel Surya Bella Casa. Book now.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/family-hotel-in-purnea',
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
            "headline": "Family Hotel in Purnea | Safe Family Stay Near Bus Stand & Vikass Market",
            "description": "Complete guide to the best family hotel in Purnea near Bus Stand. Safe, spacious family rooms with modern amenities at Hotel Surya Bella Casa.",
            "image": "https://bookonelocal.in/cdn/IMG_3701.avif",
            "datePublished": "2025-11-18",
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
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Family Stay</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Nov 18, 2025</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Family Hotel in Purnea Near Bus Stand
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="https://bookonelocal.in/cdn/IMG_3701.avif"
            alt="Family-friendly room at Hotel Surya Bella Casa Purnea"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            Traveling with family requires careful planning to ensure safety, comfort, and convenience. 
            <strong><Link href="/family-hotel-in-purnia" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> is the ideal family hotel in Purnea near Bus Stand, 
            offering a welcoming environment for couples, parents with children, and senior citizens.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Family-Friendly Rooms</h2>
          <p>
            Our <strong>Deluxe AC and Super Deluxe AC Rooms</strong> offer ample space for families. 
            Each room is equipped with comfortable bedding, a mini-fridge, a flat-screen TV, and an 
            attached bathroom with geyser for hot water. Extra mattresses can be arranged for children 
            upon request.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Safety & Convenience</h2>
          <p>
            We prioritize family safety with <strong>24/7 staff assistance</strong>, secure key-card 
            access to rooms, and a <strong>lift/elevator</strong> for easy access to upper floors — 
            particularly helpful for elderly family members and guests with luggage. The property 
            maintains a pure vegetarian environment, ensuring a comfortable stay for all guests.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Nearby for Families</h2>
          <p>
            Located opposite <strong>Vikass Market</strong>, families can enjoy shopping, dining, and 
            exploring local attractions within walking distance. <strong>Maa Puran Devi Temple</strong> 
            and <strong>Kali Mandir</strong> are just a short auto ride away, making it easy to plan 
            a spiritual outing during your stay.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Dining for the Whole Family</h2>
          <p>
            Our <Link href="/dining" className="text-gold hover:underline">rooftop restaurant</Link> serves a variety of cuisines including Indian, Tandoor, Mughlai, 
            Asian, and Continental. We also coordinate with local restaurants via Swiggy and Zomato 
            for doorstep delivery, giving families plenty of dining options.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <Link href="/family-hotel-in-purnia" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Users size={14} /> Explore Family Hotel Features
          </Link>
        </div>
      </article>
    </main>
  )
}
