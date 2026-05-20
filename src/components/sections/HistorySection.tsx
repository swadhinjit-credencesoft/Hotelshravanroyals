'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import OptimizedVideo from '@/components/ui/OptimizedVideo';

export default function HistorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={containerRef}
      className="bg-cream py-32 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Images Section */}
          <div className="relative">

             <div className="relative aspect-[4/5] w-full max-w-md mx-auto z-10 overflow-hidden border border-gold/10 rounded-2xl">
              <OptimizedVideo
                src="https://bookonelocal.in/cdn/IMG_6359.mp4"
                className="hover:scale-105 transition-all duration-1000"
              />
            </div>

            <motion.div
              style={{ y: y1 }}
              className="absolute -top-12 -right-8 w-64 aspect-square hidden lg:block z-20 border border-gold/20 overflow-hidden rounded-2xl"
            >
              <OptimizedVideo
                src="https://bookonelocal.in/cdn/IMG_6317.mp4"
              />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-16 -left-12 w-80 aspect-[3/2] hidden lg:block z-0 opacity-60 overflow-hidden rounded-2xl"
            >
              <OptimizedVideo
                src="https://bookonelocal.in/cdn/IMG_6319.mp4"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col">

            <SectionLabel className="mb-6">
              About Hotel
            </SectionLabel>

            <h2 className="font-display text-4xl md:text-[56px] italic text-forest mb-8 leading-tight">
              Comfort, Elegance <br /> & Modern Hospitality
            </h2>

            <GoldDivider className="mb-10" />

            <div className="space-y-6">

              <p className="font-serif text-xl text-taupe leading-relaxed italic">
                &ldquo;Experience premium hospitality with comfort, quality service, and memorable stays in Jaipur.&rdquo;
              </p>

              <p className="font-sans text-base text-taupe/80 leading-loose">
                Hotel Shravan Royal Inn offers modern luxury rooms,
                elegant banquet facilities, and
                exceptional guest services designed for families,
                couples, business travelers, and event guests.
              </p>

              <p className="font-sans text-base text-taupe/80 leading-loose">
                Conveniently located in Jaipur, the hotel combines
                stylish interiors, peaceful ambiance, and quality
                hospitality to create a comfortable and relaxing
                experience for every visitor.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/10 pt-12">

              <div>
                <span className="font-serif text-3xl text-gold">
                  Premium
                </span>

                <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">
                  Luxury Rooms
                </p>
              </div>

              <div>
                <span className="font-serif text-3xl text-gold">
                  Elegant
                </span>

                <p className="font-sans text-[10px] uppercase tracking-widest text-taupe mt-2">
                  Banquet Hall
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}