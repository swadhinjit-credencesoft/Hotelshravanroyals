'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';

const rituals = [
  { 
    season: 'Autumn', 
    title: 'The Harvest Table', 
    description: 'A communal forest feast celebrating the peak of the estate’s organic harvest.',
    image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800&q=95' 
  },
  { 
    season: 'Winter', 
    title: 'Solstice Stargazing', 
    description: 'Guided by our resident astronomer on the shoreline deck with mulled library vintages.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=95' 
  },
  { 
    season: 'Spring', 
    title: 'Bloom Bathing', 
    description: 'Therapeutic walks through the wildflower meadows followed by botanical spa rituals.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=95' 
  },
];

export default function SeasonalRituals() {
  return (
    <section className="bg-ivory py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="mb-20">
           <SectionLabel className="mb-6">The Cycle of Life</SectionLabel>
           <h2 className="font-display text-4xl md:text-6xl italic text-forest">Seasonal Rituals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {rituals.map((ritual, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: i * 0.2 }}
               className="group relative"
             >
                <div className="relative aspect-[3/4] overflow-hidden border border-gold/10">
                   <Image
                     src={ritual.image}
                     alt={ritual.title}
                     fill
                     className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="mt-8">
                   <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold mb-3 block">
                      {ritual.season}
                   </span>
                   <h3 className="font-serif text-3xl italic text-forest mb-4 group-hover:text-gold transition-colors duration-500">
                      {ritual.title}
                   </h3>
                   <p className="font-sans text-sm text-taupe/70 leading-relaxed max-w-xs">
                      {ritual.description}
                   </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
