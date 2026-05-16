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
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=2400&q=95"
      />

      <section className="py-32 bg-forest text-ivory/80">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <SectionLabel light className="mb-6">Outdoor Spaces</SectionLabel>
               <h2 className="font-display text-4xl md:text-6xl italic text-ivory mb-8">
                  Lawns, Decks & <br /> Campfire Areas
               </h2>
                <p className="font-sans text-lg leading-relaxed mb-8">
                  Unwind Karjat features expansive outdoor spaces designed for relaxation and gathering. Enjoy morning yoga on our wooden decks, spend the afternoon reading on our manicured lawns, or end the night sharing stories around our dedicated campfire zones.
                </p>
               <a href="/gallery" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all">
                  View Gallery
               </a>
            </div>
            <div className="relative aspect-[4/3] border border-ivory/10">
               <Image 
                  src="https://images.unsplash.com/photo-1517594422361-5e18d0333396?w=1200&q=95" 
                  alt="Outdoor campfire and seating area in nature" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
         </div>
      </section>

      <ExperiencesGrid />

      {/* Nearby Attractions */}
      <section className="py-32 bg-cream">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
            <SectionLabel className="justify-center mb-6">Explore Karjat</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-16">Nearby Attractions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
               <div className="bg-white p-8 border border-gold/10 hover:shadow-warm-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-2xl italic text-forest mb-3">Bhivpuri Waterfalls</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-4">A spectacular sight during the monsoons, perfect for a short morning trek.</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-gold">Distance: 15 mins</p>
               </div>

               <div className="bg-white p-8 border border-gold/10 hover:shadow-warm-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-2xl italic text-forest mb-3">Kondana Caves</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-4">Ancient Buddhist caves nestled in the lush forests. Ideal for history and nature buffs.</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-gold">Distance: 30 mins</p>
               </div>

               <div className="bg-white p-8 border border-gold/10 hover:shadow-warm-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                     <MapPin className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-2xl italic text-forest mb-3">Karjat Railway Route</h3>
                  <p className="font-serif text-taupe leading-relaxed mb-4">A scenic drive or train ride through the valleys, especially beautiful at dawn.</p>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-gold">Distance: 10 mins</p>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  )
}
