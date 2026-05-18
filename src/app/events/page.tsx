'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { estateEvents } from '@/data/events';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function EventsPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Celebrations & Summits"
        title="Stage Your Legacy"
        tagline="From clifftop vows to boardroom breakthroughs, we provide the backdrop for life's most significant moments."
        image="https://bookonelocal.in/cdn/IMG_6350.mp4"
      />

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-24">
             <SectionLabel className="justify-center mb-6">Our Venues</SectionLabel>
             <h2 className="font-display text-4xl md:text-6xl italic text-forest">Spaces of Distinction</h2>
             <GoldDivider className="justify-center mt-8" />
          </div>

          <div className="space-y-32">
             {estateEvents.map((event, i) => (
               <motion.div 
                 key={event.id}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
               >
                 <div className={`relative aspect-[4/3] overflow-hidden border border-gold/10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                 </div>
                 <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-4 block">
                      {event.category}
                    </span>
                    <h3 className="font-display text-4xl md:text-5xl italic text-forest mb-6">{event.title}</h3>
                    <p className="font-serif text-xl text-taupe mb-8 leading-relaxed italic">{event.description}</p>
                    <p className="font-sans text-sm text-taupe/60 mb-8 uppercase tracking-widest">{event.capacity}</p>
                    
                    <ul className="space-y-4 mb-10">
                       {event.features.map((feature, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-taupe font-sans text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {feature}
                         </li>
                       ))}
                    </ul>

                    <button className="border border-forest/30 text-forest font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold hover:text-forest transition-all">
                       Inquire for {event.title}
                    </button>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-32 text-ivory text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-4xl md:text-6xl italic mb-8">Exclusive Buyouts</h2>
            <p className="font-serif text-xl italic mb-12 opacity-80">
              For total privacy and unyielding focus, the entire inn—including all 47 suites and 4 dining venues—can be reserved exclusively for your party.
            </p>
            <button className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all">
               Request Buyout Proposal
            </button>
         </div>
      </section>

      <Footer />
    </main>
  );
}
