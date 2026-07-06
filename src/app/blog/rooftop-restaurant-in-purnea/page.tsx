import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Utensils } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rooftop Restaurant in Purnea',
  description:
    'Discover the best rooftop restaurant in Purnea near Bus Stand. Multi-cuisine family dining at Hotel Surya Bella Casa serving Indian, Tandoor, Mughlai, Asian & Continental dishes.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/rooftop-restaurant-in-purnea',
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
            "headline": "Rooftop Restaurant in Purnea | Best Family Dining Near Bus Stand",
            "description": "Guide to the best rooftop restaurant in Purnea. Multi-cuisine family dining at Hotel Surya Bella Casa.",
            "image": "https://bookonelocal.in/cdn/IMG_3739.avif",
            "datePublished": "2026-02-20",
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
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Restaurant & Dining</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Feb 20, 2026</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Rooftop Restaurant in Purnea Near Bus Stand
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="https://bookonelocal.in/cdn/IMG_3739.avif"
            alt="Rooftop restaurant dining area - Hotel Surya Bella Casa Purnea"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            When visiting Purnia, finding a good restaurant near the Bus Stand area is a priority for many 
            travelers. <strong>Hotel Surya Bella Casa</strong> offers one of the finest rooftop dining experiences 
            in the city, located opposite Vikass Market and just minutes from the main bus terminal.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Multi-Cuisine Menu</h2>
          <p>
            Our restaurant serves a diverse range of cuisines including <strong>Indian, Tandoor, Mughlai, Asian, 
            and Continental</strong>. Whether you are craving traditional Bihari flavors or international dishes, 
            our experienced chefs prepare each meal with fresh, locally sourced ingredients.
          </p>
          <p>
            Special <strong>Fish and Mutton dishes</strong> are prepared upon advance request to ensure maximum 
            freshness. Pure vegetarian meals are also available, and we coordinate with top-rated local 
            restaurants via Swiggy and Zomato for doorstep delivery.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">Family-Friendly Atmosphere</h2>
          <p>
            Our rooftop setting provides a relaxed and family-friendly atmosphere with views of the Purnia 
            cityscape. We maintain a pure vegetarian environment on the property premises, making it an ideal 
            choice for family dining and group gatherings.
          </p>

          <h2 className="font-display text-2xl italic text-forest mt-10 mb-4">In-Room Dining</h2>
          <p>
            For guests who prefer privacy, each room at Hotel Surya Bella Casa is equipped with a hot water 
            kettle, complimentary tea/coffee supplies, and a mini-fridge. You can order from our in-room 
            dining menu available 24/7.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <Link href="/dining" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Utensils size={14} /> Explore Full Dining Experience
          </Link>
        </div>
      </article>
    </main>
  )
}
