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
    <section ref={containerRef} className="bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 overflow-hidden border border-gold/10">
              <Image
                src='/homehero/homehero2.jpg'
                alt="The Divine Oasis hilltop resort at Ajodhya Hill, Purulia"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover transition-all duration-1000"
                loading="lazy"
              />
            </div>
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-8 w-64 aspect-square hidden lg:block z-20 border border-gold/20 overflow-hidden"
            >
               <Image
                src='https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg'
                alt="The Divine Oasis hilltop exterior"
                fill
                sizes="256px"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-16 -left-12 w-80 aspect-[3/2] hidden lg:block z-0 opacity-40 grayscale"
            >
               <Image
                src='https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg'
                alt="Scenic view from The Divine Oasis Ajodhya Hill"
                fill
                sizes="320px"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <SectionLabel className="mb-6">Our Story</SectionLabel>
            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight" style={{ textWrap: 'balance' }}>
              A Forest Resort Born out of love to  Ajodhya Hills & Purulia.
            </h2>
            <GoldDivider className="mb-10" />
            
            <div className="space-y-6">
              <p className="font-serif text-xl text-taupe leading-relaxed italic">
                &ldquo;We didn&apos;t just build a resort; we created a sanctuary where the forest meets comfort.&rdquo;
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                The Divine Oasis was born from a vision to create an authentic forest retreat atop Ajodhya Hill in Purulia, West Bengal. What began as a family dream to share the serenity of the Ajodhya Hills & Forest Reserve has grown into a destination where nature lovers, families, and corporate travelers find their perfect hilltop escape.
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Perched at 0.4 km from the forest reserve, our cottages are crafted with natural materials and modern amenities — geyser, smart TV, room service, and complimentary Wi-Fi. Here, the forest isn&apos;t a backdrop; it&apos;s your living room. Wake to mist over the hills, dine on organic farm-to-table vegetarian thalis, and gather around barbeque evenings under starlit skies.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">
               <div>
                  <span className="font-serif text-3xl text-gold">2023</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Established</p>
               </div>
               <div>
                  <span className="font-serif text-3xl text-gold">The Divine Oasis</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Ajodhya Hill Top, Purulia</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}