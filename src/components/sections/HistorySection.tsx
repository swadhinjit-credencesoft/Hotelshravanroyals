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
                src='https://bookonelocal.in/cdn/IMG_3808.avif'
                alt="Comfortable clean rooms at Hotel Surya Bella Casa"
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
                src='https://bookonelocal.in/cdn/IMG_3815.avif'
                alt="Well-appointed budget stay in Purnea"
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
                src='https://bookonelocal.in/cdn/IMG_3784.avif'
                alt="Clean hotel interiors at Surya Bella Casa"
                fill
                sizes="320px"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="flex flex-col">
            <SectionLabel className="mb-6">Our Legacy</SectionLabel>
            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight" style={{ textWrap: 'balance' }}>
              Why Choose Hotel Surya Bella Casa Purnea
            </h2>
            <GoldDivider className="mb-10" />
            
            <div className="space-y-6">
              <p className="font-serif text-xl text-taupe leading-relaxed italic">
                &ldquo;We didn&apos;t just build a hotel; we created a home away from home in Purnea.&rdquo;
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Established in 2019 to cater to the growing needs of corporate guests and families visiting Seemanchal, Hotel Surya Bella Casa has quickly become the preferred choice for comfortable and affordable accommodation in Purnea, Bihar.
              </p>
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Every corner of our hotel is designed to offer a peaceful stay with a focus on hygiene, modern facilities, and courteous service. Situated opposite Vikass Market and near the main Bus Stand, our strategic location provides business travelers and tourists with effortless connectivity to the entire city.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">
               <div>
                  <span className="font-serif text-3xl text-gold">2019</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Established</p>
               </div>
               <div>
                  <span className="font-serif text-3xl text-gold">Surya Bella Casa</span>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">Heart of Purnea</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
