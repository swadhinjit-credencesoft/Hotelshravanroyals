'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

const serviceDetails = [
  { title: 'The Pillow Menu', description: 'Seven options of varying density, from Hungarian goose down to organic buckwheat.' },
  { title: 'Private Butler', description: 'Available at the touch of a button for unpacking, garment care, and itinerary planning.' },
  { title: 'Estate Botanist', description: 'Discover the native flora with our resident expert on a private morning walk.' },
  { title: 'The Vault', description: 'A temperature-controlled sanctuary for your personal vintages and rare finds.' },
];

export default function ArtOfStaySection() {
  return (
    <section className="bg-cream py-32 border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <SectionLabel className="mb-6">The Royal Standards</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                The Art of <br /> the Stay
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-12 leading-relaxed">
                True luxury is found in the details that you never have to ask for. It is the silent adjustment of the room temperature, the unprompted tea at twilight, and the perfect pillow before you even know you need it.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {serviceDetails.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  <h3 className="font-serif text-2xl text-forest italic mb-4 group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="h-px bg-gold/30 w-12 mb-4 group-hover:w-full transition-all duration-700" />
                  <p className="font-sans text-sm text-taupe/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
