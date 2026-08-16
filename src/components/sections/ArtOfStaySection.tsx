'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

const serviceDetails = [
  { title: 'Private Boutique Setting', description: 'An intimate, private setting that feels personal — not like a crowded resort.' },
  { title: 'Close to Pune & Mumbai', description: 'Just over an hour and a half from both cities — close enough to come easily.' },
  { title: 'Stay, Food & Experiences Together', description: 'Rooms, meals, pool, lawn and experiences under one roof — no planning or moving around required.' },
  { title: 'Made for Groups', description: 'Families and groups of friends fit in beautifully, with spaces designed to bring people together.' },
  { title: 'Space to Slow Down', description: 'Plenty of open space, greenery and quiet corners to relax, recharge and simply unwind.' },
];

export default function ArtOfStaySection() {
  return (
    <section className="bg-cream py-32 border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <SectionLabel className="mb-6">Why Unwind</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Why Unwind <br /> Karjat
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-12 leading-relaxed">
              Unwind is close to Mumbai and Pune, yet feels like another world — and brings everything you need for a good time together in one place.
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
