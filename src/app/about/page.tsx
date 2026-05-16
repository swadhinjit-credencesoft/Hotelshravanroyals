'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CinematicHero 
        label="Our Story"
        title="Rooted in Nature"
        tagline="Founded on the belief that true luxury is reconnecting with the wild. Discover the vision behind Unwind Karjat."
        image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2400&q=95"
      />

      {/* Organization Schema for SEO (E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Unwind Karjat",
            "description": "Premium nature resort in Karjat offering rustic luxury cottages and eco-friendly stays.",
            "url": "https://unwindkarjat.com",
            "logo": "https://unwindkarjat.com/logo.png",
            "foundingDate": "2019",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Karjat",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/unwindkarjat",
              "https://www.tripadvisor.com/Hotel_Review-Unwind_Karjat",
              "https://maps.google.com/?cid=unwind-karjat-id"
            ]
          })
        }}
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
                Where the Wild <br /> Meets the Refined
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
                &ldquo;We didn't just want to build a resort. We wanted to build a sanctuary that frames the Sahyadris and respects the earth.&rdquo;
              </p>
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  Unwind Karjat was conceived in 2019 by a family of nature enthusiasts who wanted to create a pristine escape just a short drive from Mumbai and Pune. What started as a small passion project quickly blossomed into Karjat's premier boutique retreat.
                </p>
                <p>
                  Our design language is one of restraint and sustainability. We use local red bricks, reclaimed timber, and the natural movement of light to create spaces like our <Link href="/rooms/red-brick-cottage" className="text-gold hover:underline">Red Brick Cottages</Link> that breathe with the landscape.
                </p>
                <p>
                  Explore our <Link href="/experiences" className="text-gold hover:underline">curated experiences</Link> or our <Link href="/blog" className="text-gold hover:underline">nature blog</Link> to learn more about our philosophy.
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
                alt="Architectural detail seamlessly blending with nature"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nature & Sustainability Section */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center mb-8">Eco Commitments</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-12">Treading Lightly</h2>
            <p className="font-serif text-xl italic text-taupe mb-16 leading-relaxed">
              We are dedicated to preserving the pristine ecosystem of Karjat. From rainwater harvesting to eliminating single-use plastics, our operations are designed to protect the environment that makes our resort so special.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">100%</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Solar Water Heating</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">400+</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Trees Planted</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">Zero</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Single-Use Plastics</span>
              </div>
              <div className="p-8 border border-gold/10">
                <span className="block font-serif text-4xl text-gold mb-2">Local</span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-taupe/60">Farm-to-Table</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team / Leadership */}
      <section className="bg-forest py-24 text-ivory overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <SectionLabel light className="justify-center mb-6">Hospitality Team</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic">Faces of Unwind Karjat</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Rahul Desai', role: 'General Manager', bio: 'With over 15 years in luxury hospitality, Rahul ensures every guest feels the soul of our retreat.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=95' },
              { name: 'Priya Sharma', role: 'Head Chef', bio: 'Master of local Maharashtrian flavors, Priya brings forest-to-fork dining to life.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=95' },
              { name: 'Vikram Singh', role: 'Guest Experience Lead', bio: 'Expert naturalist and guide, Vikram curates our signature forest immersions.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=95' },
            ].map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="relative aspect-square mb-8 overflow-hidden rounded-full grayscale group-hover:grayscale-0 transition-all duration-700 max-w-[240px] mx-auto border border-gold/20">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                <h3 className="font-serif text-2xl italic text-gold mb-2">{person.name}</h3>
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] opacity-60 mb-4">{person.role}</p>
                <p className="font-serif text-ivory/60 text-sm leading-relaxed max-w-[200px] mx-auto">{person.bio}</p>
              </motion.div>
            ))}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2123456789!2d73.3!3d18.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7fb0000000001%3A0x0!2zMTjCsDU0JzAwLjAiTiA3M8KwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
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
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Getting to Sanctuary</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
                Nestled in the lush hills of Karjat, we are approximately 90 minutes from Mumbai and Pune. Our retreat offers the perfect balance of accessibility and absolute solitude.
              </p>
              <div className="space-y-4">
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-bold">Address</p>
                <p className="font-serif text-forest text-xl italic">Survey No. 123, Forest Lane, Karjat, Maharashtra 410201</p>
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
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Ready for Tranquility?</h2>
            <p className="font-serif text-xl italic text-taupe mb-12">
              Join us for a weekend of unmatched serenity, exceptional food, and raw nature.
            </p>
            <Link href="/reservations" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
               Come Experience It
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
