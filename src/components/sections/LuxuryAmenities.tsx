'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { 
  Sparkles, 
  Wind, 
  Wine, 
  Compass, 
  ShieldCheck, 
  CalendarDays 
} from 'lucide-react';

const amenities = [
  {
    icon: Sparkles,
    title: 'Personal Butler',
    description: 'Bespoke service that anticipates your needs before they arise, with absolute discretion.'
  },
  {
    icon: Wine,
    title: 'Private Cellar',
    description: 'Access to our library of over 12,000 rare vintages, including private royal reserves.'
  },
  {
    icon: Wind,
    title: 'Helipad Access',
    description: 'Seamless arrivals and departures via our private clifftop landing pad.'
  },
  {
    icon: Compass,
    title: 'Estate Botanist',
    description: 'Private guided tours of our 12-acre ancient forest and organic gardens.'
  },
  {
    icon: ShieldCheck,
    title: 'Discreet Security',
    description: 'State-of-the-art privacy measures designed to be entirely invisible to the guest.'
  },
  {
    icon: CalendarDays,
    title: 'Daily Rituals',
    description: 'From dawn breathwork to evening starlit libations, every hour is a curated event.'
  }
];

export default function LuxuryAmenities() {
  return (
    <section className="bg-cream-dark py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <SectionLabel className="justify-center mb-6">The Royal Standards</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest">
            Bespoke Without Compromise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
          {amenities.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream-dark p-12 group hover:bg-forest transition-colors duration-700"
            >
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-8 rounded-none group-hover:bg-gold transition-colors duration-500">
                <amenity.icon size={24} className="text-gold group-hover:text-forest transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-2xl italic text-forest mb-4 group-hover:text-ivory transition-colors duration-500">
                {amenity.title}
              </h3>
              <p className="font-sans text-sm text-taupe leading-relaxed group-hover:text-ivory/60 transition-colors duration-500">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
