import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ExperiencesGrid from '@/components/sections/ExperiencesGrid'
import CinematicHero from '@/components/ui/CinematicHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function ExperiencesPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Beyond the Room"
        title="Immerse in Nature"
        tagline="From monsoon treks to cozy winter bonfires, discover activities designed to help you reconnect with the outdoors."
        image='https://bookonelocal.in/cdn/IMG_3739.avif'
      />

      <section className="py-32 bg-forest text-ivory/80">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <SectionLabel light className="mb-6">Outdoor Spaces</SectionLabel>
               <h2 className="font-display text-4xl md:text-6xl italic text-ivory mb-8">
                  Lawns, Decks & <br /> Campfire Areas
               </h2>
                <p className="font-sans text-lg leading-relaxed mb-8">
                  Hotel Bella Casa features expansive outdoor spaces designed for relaxation and gathering. Enjoy morning yoga on our wooden decks, spend the afternoon reading on our manicured lawns, or end the night sharing stories around our dedicated campfire zones.
                </p>
               <a href="/gallery" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all">
                  View Gallery
               </a>
            </div>
            <div className="relative aspect-[4/3] border border-ivory/10">
               <Image 
                  src='https://bookonelocal.in/cdn/IMG_3764.avif' 
                  alt="Outdoor campfire and seating area in nature" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
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
                  "name": "Jalalgarh Fort",
                  "description": "Historic 300-year-old fort displaying a unique blend of Hindu and Islamic architecture.",
                  "location": { "@type": "Place", "name": "Jalalgarh, Purnia, Bihar" }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Puran Devi Temple",
                  "description": "Ancient temple dedicated to Goddess Puran Devi, the namesake of Purnia.",
                  "location": { "@type": "Place", "name": "Purnia, Bihar" }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Kali Mandir Temple",
                  "description": "Revered historic temple in Purnia dedicated to Goddess Kali.",
                  "location": { "@type": "Place", "name": "Purnia, Bihar" }
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
            <SectionLabel className="justify-center mb-6">Explore Purnia</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-16">Nearby Attractions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Jalalgarh Fort</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">A 300-year-old historic fort exhibiting a mix of Hindu and Islamic styles, built to protect the region from invaders.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">25 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">History & Heritage</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Puran Devi Temple</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">One of the oldest and most important spiritual landmarks in Purnia, believed to be the origin of the city&apos;s name.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">10 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Spiritual & Historic</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Kali Mandir Temple</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">A highly revered temple in Purnia town dedicated to Goddess Kali, offering a peaceful atmosphere for visitors.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">5 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Heritage & Devotion</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  )
}
