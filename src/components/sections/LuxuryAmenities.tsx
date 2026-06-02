'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import { 
  Wifi, 
  Wind, 
  Tv, 
  ShieldCheck, 
  ParkingCircle, 
  ArrowUpCircle 
} from 'lucide-react';

const amenities = [
  {
    icon: Wind,
    title: 'Air Conditioned Rooms',
    description: 'Fully air-conditioned spaces with individual climate controls to keep you comfortable year-round.'
  },
  {
    icon: Wifi,
    title: 'Free High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet available throughout the property.'
  },
  {
    icon: ArrowUpCircle,
    title: 'Elevator & Lift Access',
    description: 'Convenient modern lift access ensuring comfort and hassle-free movement for all guests and elder family members.'
  },
  {
    icon: ParkingCircle,
    title: 'Secure Dedicated Parking',
    description: 'Rest easy with secure, complimentary on-site parking facilities for your private vehicles.'
  },
  {
    icon: ShieldCheck,
    title: '24/7 Safety & Care',
    description: 'Continuous room service, backup power generators, and secure lock systems for complete peace of mind.'
  },
  {
    icon: Tv,
    title: 'Modern Flat Screen TVs',
    description: 'Entertainment at your fingertips with multi-channel LED TVs equipped in every room.'
  }
];

export default function LuxuryAmenities() {
  return (
    <section className="bg-cream-dark py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <SectionLabel className="justify-center mb-6">Our Standards</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest">
            Comfort Without Compromise
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
