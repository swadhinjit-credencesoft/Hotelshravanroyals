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
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=95"
                alt="The original Estate drawing room, 1924"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-8 w-64 aspect-square hidden lg:block z-20 border border-gold/20 overflow-hidden"
            >
               <Image
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=95"
                alt="Vintage crystal at the Estate"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-16 -left-12 w-80 aspect-[3/2] hidden lg:block z-0 opacity-40 grayscale"
            >
               <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=95"
                alt="Archival estate blueprints"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <SectionLabel className="mb-6">Our Legacy</SectionLabel>
            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight">
              A Century of <br /> Invisible Service
            </h2>
            <GoldDivider className="mb-10" />
            
            <div className="space-y-6">
              <p className="font-serif text-xl text-taupe leading-relaxed italic">
                &ldquo;We did not intend to build a hotel. We intended to preserve a feeling.&rdquo;
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Established in 1924 as a private retreat in the heart of the Karjat, Unwind Karjat has evolved over a century into Karjat&apos;s most distinguished boutique sanctuary. While the world has changed, our philosophy has remained unyielding: true luxury is not heard; it is felt in the silence of the morning and the unhurried grace of the evening.
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Every stone in our courtyard, every bottle in our cellar, and every ritual in our spa carries the weight of a hundred years of quiet excellence.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">
               <div>
                  <span className="font-serif text-3xl text-gold">1924</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Founded</p>
               </div>
               <div>
                  <span className="font-serif text-3xl text-gold">3rd Gen</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Family Owned</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
