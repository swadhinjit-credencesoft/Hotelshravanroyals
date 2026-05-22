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
        image='/images/exterior7.jpeg'
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
                  src='/LawnsDecks.png' 
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
                  "name": "Bhivpuri Waterfalls",
                  "description": "Spectacular monsoon waterfalls near Karjat.",
                  "location": { "@type": "Place", "name": "Purnia, Bihar" }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "TouristAttraction",
                  "name": "Kondana Caves",
                  "description": "Ancient Buddhist rock-cut caves.",
                  "location": { "@type": "Place", "name": "Kondana, Karjat" }
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
            <SectionLabel className="justify-center mb-6">Explore Karjat</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-16">Nearby Attractions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Bhivpuri Waterfalls</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">A spectacular sight during the monsoons, perfect for a short morning trek and natural showers.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">15 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Trekking & Sightseeing</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Kondana Caves</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">Ancient Buddhist caves nestled in lush forests. A historical sanctuary for meditation and nature buffs.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">30 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">History & Caves</span>
                  </div>
               </div>

               <div className="bg-white p-10 border border-gold/10 hover:border-gold/30 hover:shadow-warm-lg transition-all duration-500 rounded-sm group">
                  <div className="w-14 h-14 bg-gold/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-3xl italic text-forest mb-4">Peth Fort</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-6 text-lg">Also known as Kothaligad, it offers breathtaking 360-degree views of the Western Ghats and Sahyadri range.</p>
                  <div className="flex items-center gap-2 pt-6 border-t border-gold/10">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">45 mins drive</span>
                    <span className="w-1 h-1 rounded-full bg-gold/30" />
                    <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Advanced Trekking</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  )
}
