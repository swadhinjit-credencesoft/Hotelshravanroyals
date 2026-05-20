'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

export default function WellnessSection() {
  return (
    <section className="bg-ivory py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Section */}
          <div className="order-2 lg:order-1">
            <SectionLabel className="mb-6">
              Hotel Shravan Royal Inn
            </SectionLabel>

            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
              Luxury Comfort <br /> Exceptional Hospitality
            </h2>

            <GoldDivider className="mb-10" />

            <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
              &ldquo;Experience premium comfort, elegant interiors, and memorable hospitality in the heart of Jaipur.&rdquo;
            </p>

            <div className="space-y-6 mb-12">
              <p className="font-sans text-base text-taupe/80 leading-loose">
                Hotel Shravan Royal Inn offers beautifully designed rooms,
                quality dining experiences, and modern facilities for families,
                couples, business travelers, and event guests. Every space is
                thoughtfully created to provide comfort, convenience, and a
                relaxing atmosphere during your stay.
              </p>

              <p className="font-sans text-base text-taupe/80 leading-loose">
                From elegant accommodations to rooftop dining and banquet
                facilities, the hotel combines modern luxury with warm
                hospitality to create a truly comfortable Jaipur experience.
              </p>
            </div>

            <button className="border border-forest/30 text-forest font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:border-gold hover:text-gold transition-all duration-500">
              Explore Our Services
            </button>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden border border-gold/10 rounded-2xl">
              <Image
                src="https://bookonelocal.in/cdn/IMG_6333.JPG"
                alt="Luxury hotel comfort"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -left-12 w-64 h-80 hidden md:block border border-gold/20 overflow-hidden bg-cream rounded-2xl"
            >
              <Image
                src="https://bookonelocal.in/cdn/IMG_6334.JPG"
                alt="Luxury hotel dining experience"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}