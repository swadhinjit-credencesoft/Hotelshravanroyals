import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ExperiencesGrid from '@/components/sections/ExperiencesGrid'
import CinematicHero from '@/components/ui/CinematicHero'
import SectionLabel from '@/components/ui/SectionLabel'
import Image from 'next/image'
import SeasonalRituals from '@/components/sections/SeasonalRituals'

export default function ExperiencesPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Beyond the Inn"
        title="Immerse in the Extraordinary"
        tagline="Private heritage tours, organic farm-to-table dining, and ancient spa rituals designed to transform the soul."
        image="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=2400&q=95"
      />

      <section className="py-32 bg-forest text-ivory/80">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <SectionLabel light className="mb-6">Expert Led</SectionLabel>
               <h2 className="font-display text-4xl md:text-6xl italic text-ivory mb-8">
                  Guidance by the <br /> Masters of Craft
               </h2>
                <p className="font-sans text-lg leading-relaxed mb-8">
                  Whether you are navigating the historic city streets with our private guides or exploring the local craft markets with our resident expert, every experience at Shravan Royal Inn is guided by individuals who have dedicated their lives to their craft.
                </p>
               <button className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all">
                  Meet the Experts
               </button>
            </div>
            <div className="relative aspect-[4/3] border border-ivory/10">
               <Image 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=95" 
                  alt="Private chef table preparation" 
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </div>
         </div>
      </section>

      <ExperiencesGrid />
      <SeasonalRituals />
      <Footer />
    </main>
  )
}
