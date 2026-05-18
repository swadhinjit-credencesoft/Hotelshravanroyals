'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Shravan Royal Legacy"
        title="Architecture of Silence"
        tagline="Founded on the belief that true luxury is not heard, but felt. Discover the vision behind our Jaipur sanctuary."
        image="https://bookonelocal.in/cdn/IMG_6229.mp4"
      />

      {/* Vision Section */}
      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Where the Wild <br /> Meets the Refined
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
                &ldquo;We did not want to build a hotel. We wanted to build a frame for the forest and a stage for the sea.&rdquo;
              </p>
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  Shravan Royal Inn was conceived in 1924 as a private retreat in the heart of the Pink City. Today, it stands as a testament to timeless architecture and the preservation of solitude in Jaipur.
                </p>
                <p>
                  Our design language is one of restraint. We use local stone, reclaimed timber, and the natural movement of light to create spaces that breathe with the landscape rather than competing against it.
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
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=95"
                alt="Architectural detail of the estate"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Founders / Leadership */}
      <section className="bg-forest py-32 text-ivory overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <SectionLabel light className="justify-center mb-6">Custodians</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic">The Visionaries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Shravan Singh', role: 'Founder (1924)', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=95' },
              { name: 'Anjali Sharma', role: 'Lead Architect', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=95' },
              { name: 'Vikram Rathore', role: 'Head of Experience', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=95' },
            ].map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="relative aspect-square mb-8 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 max-w-[280px] mx-auto border border-gold/20">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                <h3 className="font-serif text-2xl italic text-gold mb-2">{person.name}</h3>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-60">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-32 bg-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center mb-8">Craftsmanship</SectionLabel>
            <h2 className="font-display text-4xl md:text-7xl italic text-forest mb-12">Built to Last <br /> Generations</h2>
            <p className="font-serif text-xl italic text-taupe mb-16 leading-relaxed">
              Every chair, every handle, and every stone has been curated to age gracefully. We believe in the integrity of materials and the power of human touch.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">100+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Years of History</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">400</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Native Species</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">24h</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Butler Service</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">0</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Digital Noise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
