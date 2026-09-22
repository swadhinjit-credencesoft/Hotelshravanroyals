import ExperiencesGrid from '@/components/sections/ExperiencesGrid'
import CinematicHero from '@/components/ui/CinematicHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forest Experiences at Ajodhya Hill | The Divine Oasis, Purulia',
  description: 'Explore forest trekking, heritage temples, dam picnics, and organic farm walks at The Divine Oasis atop Ajodhya Hill, Purulia. Curated nature & cultural experiences.',
  alternates: {
    canonical: 'https://thedivineoasisresort.com/experiences',
  },
  keywords: [
    'things to do in Purulia',
    'Ajodhya Hill experiences',
    'Purulia tourist attractions',
    'sightseeing Ajodhya Hill',
    'local experiences Purulia',
    'forest trekking Purulia',
    'Thurga Dam day trip',
    'Deulghata temples Purulia',
  ],
}

export default function ExperiencesPage() {
  return (
    <main className="bg-cream min-h-screen">
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
                name: 'Experiences',
                item: 'https://thedivineoasisresort.com/experiences',
              },
            ],
          })
        }}
      />

      <CinematicHero 
        label="Beyond the Cottage"
        title="Experiences at Ajodhya Hill"
        tagline="Discover forest trekking, heritage temples, dam picnics, and organic farm walks at The Divine Oasis atop Ajodhya Hill, Purulia."
        image='https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'
      />

      <section className="py-32 bg-forest text-ivory/80">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <SectionLabel light className="mb-6">Local Accessibility</SectionLabel>
               <h2 className="font-display text-4xl md:text-6xl italic text-ivory mb-8">
                  Forest Stays & <br /> Nature Sightseeing
               </h2>
                <p className="font-sans text-lg leading-relaxed mb-8">
                  The Divine Oasis sits atop Ajodhya Hill, just 0.4 km from the Ajodhya Hills & Forest Reserve. Enjoy effortless access to Thurga Dam, Deulghata Temples, and organic farm walks, making it simple to plan your Purulia nature escape.
                </p>
               <a href="/gallery" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all">
                 View Gallery
               </a>
            </div>
            <div className="relative aspect-[4/3] border border-ivory/10">
               <Image 
                  src='https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg' 
                  alt="The Divine Oasis Ajodhya Hill - forest resort exterior" 
                  fill
                  className="object-cover transition-all duration-1000"
               />
            </div>
         </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Ajodhya Hills & Forest Reserve",
                  "description": "Protected forest reserve with trekking trails, wildlife spotting, and hilltop views, 0.4 km from The Divine Oasis.",
                  "location": { "@type": "Place", "name": "Ajodhya Hill, Purulia, West Bengal" }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Thurga Dam",
                  "description": "Scenic dam and reservoir surrounded by hills, ideal for picnics and photography, 13.8 km from The Divine Oasis.",
                  "location": { "@type": "Place", "name": "Thurga Dam, Purulia, West Bengal" }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Deulghata Temples",
                  "description": "Ancient stone temples of eastern India, UNESCO heritage candidate, 33.7 km from The Divine Oasis.",
                  "location": { "@type": "Place", "name": "Deulghata, Purulia, West Bengal" }
                }
              }
            ]
          })
        }}
      />

      <ExperiencesGrid />

      {/* Nearby Attractions */}
      <section className="py-32 bg-cream">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
            <SectionLabel className="justify-center mb-6">Explore Purulia</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-16">Nearby Attractions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Ajodhya Hills & Forest Reserve</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">Protected forest reserve with trekking trails, wildlife spotting, and panoramic hilltop views â€” just 0.4 km from The Divine Oasis.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">0.4 km away</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Nature & Trekking</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Thurga Dam</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">Scenic reservoir surrounded by Purulia hills, perfect for picnics, photography, and peaceful evening walks â€” 13.8 km away.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">13.8 km</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Water & Leisure</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Deulghata Temples</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">Ancient stone temples of eastern India, UNESCO heritage candidate, showcasing unique brick architecture â€” 33.7 km away.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">33.7 km</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Heritage & Culture</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  )
}
