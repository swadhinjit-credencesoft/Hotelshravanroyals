'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

export default function HistorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="bg-cream py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 overflow-hidden border border-gold/10">
              <Image
                src='/Pool.png'
                alt="The swimming pool at Unwind Karjat"
                fill
                loading="lazy"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-8 w-64 aspect-square hidden lg:block z-20 border border-gold/20 overflow-hidden"
            >
               <Image
                src='https://bookonelocal.in/cdn/2026-05-18-120147308-p1.jpg'
                alt="Natural details at the retreat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-16 -left-12 w-80 aspect-[3/2] hidden lg:block z-0 opacity-40 grayscale"
            >
               <Image
                src='/carromimg.jpeg'
                alt="Games and activities at Unwind Karjat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <SectionLabel className="mb-6">A Vision of Natural Stillness</SectionLabel>
            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight">
              We wanted to create a place where you could slow down, breathe deeper and simply be
            </h2>
            <GoldDivider className="mb-10" />
            
            <div className="space-y-6">
              <p className="font-serif text-xl text-taupe leading-relaxed italic">
              Unwind Karjat began in August 2024 with a simple idea — to create a peaceful retreat where nature, privacy and warm hospitality come together.
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
             Surrounded by the beauty of Karjat and the Sahyadri foothills, it is a place to step away from everyday life, reconnect and truly unwind.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">
               <div>
                  <span className="font-serif text-3xl text-gold">4</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Room category </p>
               </div>
               <div>
                  <span className="font-serif text-3xl text-gold">1.5 hrs</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">From Mumbai &amp; Pune</p>
               </div>
            </div>

            <div className="mt-12">
              <a
                href="/about"
                className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-gold hover:text-forest transition-colors"
              >
                Read Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
