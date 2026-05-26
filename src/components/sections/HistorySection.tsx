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
                src='https://bookonelocal.in/cdn/IMG_3808.avif'
                alt="Modern rustic interior at Hotel Bella Casa"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-8 w-64 aspect-square hidden lg:block z-20 border border-gold/20 overflow-hidden"
            >
               <Image
                src='https://bookonelocal.in/cdn/IMG_3815.avif'
                alt="Natural details at the retreat"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-16 -left-12 w-80 aspect-[3/2] hidden lg:block z-0 opacity-40 grayscale"
            >
               <Image
                src='https://bookonelocal.in/cdn/IMG_3784.avif'
                alt="Architecture sketches of Hotel Bella Casa"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <SectionLabel className="mb-6">Our Legacy</SectionLabel>
            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight">
              A Vision of <br /> Natural Stillness
            </h2>
            <GoldDivider className="mb-10" />
            
            <div className="space-y-6">
              <p className="font-serif text-xl text-taupe leading-relaxed italic">
                &ldquo;We didn&apos;t just build a resort; we framed the Sahyadris.&rdquo;
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Conceived in 2019 as a sanctuary for those seeking a deeper connection with nature, Hotel Bella Casa was born from a passion for the rugged beauty of the Sahyadri mountain range. Our retreat is designed to be a quiet observer of the landscape, offering a space where the unhurried grace of the forest meets modern luxury.
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Every red brick in our cottages and every trail in our forest has been thoughtfully curated to provide an immersive experience that celebrates the soul of Purnea.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">
               <div>
                  <span className="font-serif text-3xl text-gold">2019</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Conceived</p>
               </div>
               <div>
                  <span className="font-serif text-3xl text-gold">Bella Casa</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Heart of Sahyadris</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
