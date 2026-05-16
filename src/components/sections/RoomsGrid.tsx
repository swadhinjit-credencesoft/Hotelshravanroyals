'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, Maximize } from 'lucide-react';
import { rooms } from '@/data/rooms';

export default function RoomsGrid() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/10 mb-6">
                <Image
                  src={room.image}
                  alt={room.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 left-4 z-10 bg-cream/90 px-3 py-1 rounded-sm">
                  <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold">{room.category}</span>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-3xl italic text-forest mb-2">{room.name}</h3>
                <p className="font-serif text-base text-taupe/70 italic mb-6 leading-relaxed">
                  {room.tagline}
                </p>
                
                <div className="flex items-center gap-6 mb-8 text-taupe/60">
                  <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                    <Maximize size={12} className="text-gold" /> {room.size} m²
                  </span>
                  <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                    <Users size={12} className="text-gold" /> {room.guests} Guests
                  </span>
                </div>

                <div className="mt-auto pt-6 border-t border-gold/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold/60 mb-0.5">From</span>
                    <span className="font-serif text-xl text-forest">${room.price.toLocaleString()}<span className="text-sm opacity-50 ml-1">/nt</span></span>
                  </div>
                  <a
                    href={`/rooms/${room.id}`}
                    className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-forest hover:text-gold transition-colors duration-300"
                  >
                    View Sanctuary <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
