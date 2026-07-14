'use client';

import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { siteConfig } from '@/data/site';

export default function AboutContent() {
  return (
    <>
      <CinematicHero 
        label="Our Story"
        title="Genuine Hospitality"
        tagline="Dedicated to offering clean, comfortable, and affordable accommodation in Purnia for families and business travelers."
        image='https://bookonelocal.in/cdn/IMG_7429.mp4'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel className="mb-6">Ethos & Origins</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Comfortable Stays <br /> Warm Local Welcome
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
                &ldquo;We wanted to establish a premium budget-friendly stay that matches the vibrant commercial growth of Purnia while treating every guest like family.&rdquo;
              </p>
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  Hotel Surya Bella Casa was established in 2019 with a vision to bridge the gap in quality budget-friendly lodging in Seemanchal. Over the years, we have grown to become a preferred destination for corporate executives, family travelers, and tourists visiting Purnia.
                </p>
                <p>
                  Our hotel stands opposite Vikass Market, just a short walk from the main Purnia Bus Stand, making it exceptionally easy to navigate the city. Every room has been designed for functionality, cleanliness, and comfort.
                </p>
                <p>
                  Whether you are in town for an overnight business meeting or a multi-day family celebration, our hospitable staff is here to make your visit seamless and memorable.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden border border-gold/10"
            >
              <Image
                src='https://bookonelocal.in/cdn/IMG_3815.avif'
                alt="Architectural detail seamlessly blending with nature"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Commitments Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center mb-8">Our Commitments</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-12">Reliability & Trust</h2>
            <p className="font-serif text-xl italic text-taupe mb-16 leading-relaxed">
              We are dedicated to providing an exceptionally clean, comfortable, and reliable stay experience. Our operations are fully geared towards business efficiency and cozy family comfort.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">100%</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Power Backup & AC</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">Daily</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Hygiene & Sanitization</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">Zero</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Hidden Charges</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">Local</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Warm Bihari Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
               <div className="relative aspect-video w-full border border-gold/10 grayscale hover:grayscale-0 transition-all duration-1000">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8!2d87.4706!3d25.7689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2efc24c4a7af%3A0x0!2sHotel+Bella+Casa!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel className="mb-6">Find Your Way</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Getting to Hotel Surya Bella Casa</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
                Located in the heart of Purnia at Suryalok Complex, we are well-connected by road and rail to Patna, Siliguri, and Bhagalpur. Our hotel offers the perfect balance of accessibility and comfort.
              </p>
              <div className="space-y-4">
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-bold">Address</p>
                <p className="font-serif text-forest text-xl italic">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-24 border-y border-gold/10">
        <div className="text-center mb-16">
          <SectionLabel className="justify-center mb-6">Recognitions</SectionLabel>
          <h2 className="font-display text-4xl italic text-forest">Award-Winning Hospitality</h2>
        </div>
        <AwardsMarquee />
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-cream text-center">
         <div className="max-w-3xl mx-auto px-6">
             <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Ready for a Memorable Stay?</h2>
             <p className="font-serif text-xl italic text-taupe mb-12">
                Join us for an experience of unmatched comfort, exceptional food, and warm hospitality.
             </p>
            <a href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
               Come Experience It
            </a>
         </div>
      </section>
    </>
  );
}
