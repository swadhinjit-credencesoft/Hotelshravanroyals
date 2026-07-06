'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { offers } from '@/data/offers';
import SectionLabel from '@/components/ui/SectionLabel';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function OffersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="bg-champagne py-24" id="offers">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Limited Collections</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest">
            Seasonal Journeys
          </h2>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offers.map((offer, i) => (
            <OfferCard key={offer.id} offer={offer} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  offer,
  index,
  isInView,
}: {
  offer: (typeof offers)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="bg-cream border border-gold/10 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-500 shadow-warm hover:shadow-warm-lg"
    >
      <div className="relative h-[120px] w-full">
        <Image
          src={['/images/exterior8.jpeg', '/images/room1.jpeg', '/images/room2.jpeg'][index]}
          alt={offer.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/20" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" />
      </div>

      <div className="p-8 flex-1 flex flex-col">
        {offer.badge && (
          <div className="self-end mb-4">
            <span className="bg-gold text-[#1a1004] font-sans text-[9px] uppercase tracking-widest px-3 py-1 rounded-none font-medium">
              {offer.badge}
            </span>
          </div>
        )}

        <div className="mb-6">
          <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-2">
            {offer.tagline}
          </p>
          <h3 className="font-serif text-3xl italic text-forest leading-tight">
            {offer.name}
          </h3>
        </div>

        <div className="mb-8">
            <p className="font-display text-lg text-forest mb-2">{offer.nights} Nights of Seclusion</p>
            <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl text-gold">₹{offer.price.toLocaleString()}</span>
                <span className="font-sans text-sm text-taupe/60 line-through">₹{offer.originalPrice.toLocaleString()}</span>
            </div>
        </div>

        <div className="flex-1 mb-8">
          <ul className="space-y-3">
            {offer.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={14} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-sans text-[13px] text-taupe leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="block w-full bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-5 text-center transition-all duration-300 hover:bg-gold-light">
          Reserve This Package
        </a>
      </div>
    </motion.div>
  );
}
