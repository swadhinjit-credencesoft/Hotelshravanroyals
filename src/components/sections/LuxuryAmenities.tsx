'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import * as Icons from 'lucide-react';

export interface AmenityItem {
  icon: string;
  title: string;
  description: string;
}

interface LuxuryAmenitiesProps {
  label?: string;
  heading?: string;
  amenities?: AmenityItem[];
}

const defaultAmenities: AmenityItem[] = [
  {
    icon: 'Wind',
    title: 'Air Conditioned Rooms',
    description: 'Fully air-conditioned spaces with individual climate controls to keep you comfortable year-round.'
  },
  {
    icon: 'Wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'Stay connected with complimentary high-speed internet available throughout the property.'
  },
  {
    icon: 'ArrowUpCircle',
    title: 'Elevator & Lift Access',
    description: 'Convenient modern lift access ensuring comfort and hassle-free movement for all guests and elder family members.'
  },
  {
    icon: 'ParkingCircle',
    title: 'Secure Dedicated Parking',
    description: 'Rest easy with secure, complimentary on-site parking facilities for your private vehicles.'
  },
  {
    icon: 'ShieldCheck',
    title: '24/7 Safety & Care',
    description: 'Continuous room service, backup power generators, and secure lock systems for complete peace of mind.'
  },
  {
    icon: 'Tv',
    title: 'Modern Flat Screen TVs',
    description: 'Entertainment at your fingertips with multi-channel LED TVs equipped in every room.'
  }
];

function AmenityIcon({ name }: { name: string }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name]
  if (!IconComponent) return null
  return <IconComponent size={24} className="text-gold group-hover:text-forest transition-colors duration-500" />
}

import Link from 'next/link';

export default function LuxuryAmenities({ label = 'Our Standards', heading = 'Comfort Without Compromise', amenities }: LuxuryAmenitiesProps) {
  const items = amenities || defaultAmenities;
  return (
    <section className="bg-cream-dark py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionLabel className="justify-center mb-6">{label}</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
          {items.map((amenity, i) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream-dark p-8 sm:p-12 group hover:bg-forest transition-colors duration-700"
            >
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-8 rounded-none group-hover:bg-gold transition-colors duration-500">
                <AmenityIcon name={amenity.icon} />
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

        <div className="text-center mt-16 flex flex-wrap justify-center gap-6">
          <Link href="/rooms" className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-forest transition-all rounded-sm">
            Explore Deluxe Rooms in Purnea
          </Link>
          <Link href="/offers" className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-forest transition-all rounded-sm">
            View Hotel Booking Offers
          </Link>
        </div>
      </div>
    </section>
  );
}
