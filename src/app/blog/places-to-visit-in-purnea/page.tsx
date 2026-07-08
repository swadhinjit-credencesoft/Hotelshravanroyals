import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Places to Visit in Purnea',
  description:
    'Explore the best places to visit in Purnea near Hotel Surya Bella Casa. Maa Puran Devi Temple, Kali Mandir, Jalalgarh Fort, shopping markets, and local attractions near Bus Stand. Book now.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/blog/places-to-visit-in-purnea',
  },
}

const attractions = [
  {
    name: 'Maa Puran Devi Temple',
    distance: '10 mins drive',
    description: 'One of the oldest and most significant temples in Purnia, believed to be the origin of the city\'s name. A must-visit spiritual landmark.',
  },
  {
    name: 'Kali Mandir',
    distance: '5 mins drive',
    description: 'A highly revered temple in central Purnia dedicated to Goddess Kali. Known for its peaceful atmosphere and devotional significance.',
  },
  {
    name: 'Jalalgarh Fort',
    distance: '25 mins drive',
    description: 'A 300-year-old historic fort exhibiting a unique blend of Hindu and Islamic architecture. Built to protect the Seemanchal region from invaders.',
  },
  {
    name: 'Vikass Market',
    distance: '2 min walk',
    description: 'The largest commercial market in Purnia, located right opposite the hotel. Shop for fabrics, garments, electronics, and local handicrafts.',
  },
  {
    name: 'Bhatta Bazar',
    distance: '5 mins drive',
    description: 'Purnia\'s oldest commercial district known for traditional goods, local eateries, and authentic Bihari snacks.',
  },
  {
    name: 'Purnea Junction Railway Station',
    distance: '15 mins drive (6.1 km)',
    description: 'The main railway station connecting Purnia to Katihar, Bhagalpur, Saharsa, and major cities in Bihar and West Bengal.',
  },
]

export default function BlogPost() {
  return (
    <main className="bg-cream min-h-screen pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Places to Visit in Purnea | Nearby Attractions & Things to Do",
            "description": "Complete guide to places to visit in Purnea near Hotel Surya Bella Casa. Temples, forts, markets, and local attractions.",
            "image": "https://hotelsuryabellacasa.com/purneacity.jpg",
            "datePublished": "2025-10-22",
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
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold">Travel Guide</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="font-sans text-[10px] text-taupe/60 tracking-wider">Oct 22, 2025</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
          Places to Visit in Purnea
        </h1>

        <div className="relative aspect-[16/9] mb-12 border border-gold/10">
          <Image
            src="/purneacity.jpg"
            alt="Purnea cityscape - Places to visit near Hotel Surya Bella Casa"
            fill
            className="object-cover"
          />
        </div>

        <div className="font-sans text-base text-taupe/80 space-y-5 leading-loose">
          <p>
            Purnia (also spelled Purnea) is the largest city in the Seemanchal region of Bihar, rich in 
            history, culture, and spiritual significance. Whether you are visiting for business or leisure, 
            there are several attractions near <strong><Link href="/" className="text-gold hover:underline">Hotel Surya Bella Casa</Link></strong> that are worth exploring.
          </p>
          <p>
            Located centrally at Suryalok Complex opposite Vikass Market and near the Bus Stand, our hotel 
            provides easy access to all major attractions in and around Purnia.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {attractions.map((attraction, i) => (
            <div key={i} className="bg-white border border-gold/10 rounded-sm p-6 md:p-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <h2 className="font-display text-xl italic text-forest mb-2">{attraction.name}</h2>
                  <p className="font-sans text-sm text-gold font-medium mb-3">{attraction.distance}</p>
                  <p className="font-sans text-base text-taupe/80 leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gold/10">
          <Link href="/experiences" className="inline-flex items-center gap-2 bg-gold text-[#1a1004] font-sans text-[10px] uppercase tracking-[0.2em] px-6 py-3 rounded-sm hover:bg-gold-light transition-all font-bold">
            <Calendar size={14} /> Explore All Experiences
          </Link>
        </div>
      </article>
    </main>
  )
}
