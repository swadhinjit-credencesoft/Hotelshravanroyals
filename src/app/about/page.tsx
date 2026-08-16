'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

const values = [
  {
    title: 'Personal Attention',
    description: 'No corporate service standards here — just genuine care from the people who built and run this place, day in and day out.'
  },
  {
    title: 'Home-Style Food',
    description: 'Freshly prepared, generous and familiar. Meals are made to be shared around the table, and special dishes are prepared on request.'
  },
  {
    title: 'A Private Setting',
    description: 'An intimate property where the space feels like your own — not a crowded resort. Plenty of open grounds, greenery and quiet corners.'
  },
  {
    title: 'Everything in One Place',
    description: 'Rooms, pool, lawns, dining and experiences under one roof. For families, groups and celebrations, there is no planning or moving around required.'
  }
];

export default function AboutPage() {
  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      <CinematicHero 
        label="About Us"
        title="Built With Heart. Run Like Home."
        tagline="Unwind Karjat is run by the people who built it. A private, comfortable, good-food-and-good-times kind of getaway."
        image='/images/exterior.jpeg'
      />

      {/* Organization Schema for SEO (E-E-A-T) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Unwind Karjat",
            "description": "A private boutique retreat in Karjat with comfortable rooms, a large pool, in-house dining, outdoor spaces and experiences for families, groups, celebrations and corporate getaways.",
            "url": "https://unwindkarjat.com",
            "logo": "https://unwindkarjat.com/unwindkarjatlogo.png",
            "image": "https://unwindkarjat.com/aboutimg.png",
            "email": "stay@unwindkarjat.com",
            "telephone": "+91919619198839",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Karjat - Chowk Rd, behind Baba Dairy, Wavarle",
              "addressLocality": "Karjat",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.922485,
              "longitude": 73.315053
            },
            "sameAs": [
              "https://www.instagram.com/unwind_karjat"
            ]
          })
        }}
      />

      {/* The People Behind Unwind */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel className="mb-6">The People Behind Unwind</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                Meet Kapil &amp; Savita
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-8 leading-relaxed">
                &ldquo;From Day 1, we have done everything ourselves — from the construction to the daily running of the property.&rdquo;
              </p>
              <div className="space-y-6 font-sans text-base text-taupe/80 leading-loose">
                <p>
                  We are Kapil &amp; Savita, and Unwind Karjat is our home and our work. The property is run by the people who built it — not by a management that is a call away, but by us, right here.
                </p>
                <p>
                  From the rooms to the food to the little details across the property, everything is looked after with care and pride. When you stay with us, you are our guest — and we want you to feel it.
                </p>
                <p>
                  Explore our <Link href="/rooms" className="text-gold hover:underline">rooms</Link>, our <Link href="/experiences" className="text-gold hover:underline">experiences</Link> and our <Link href="/dining" className="text-gold hover:underline">dining</Link>, and you will see what we mean.
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
                src='https://bookonelocal.in/cdn/2026-05-18-120154785-p10.jpg'
                alt="Kapil & Savita at Unwind Karjat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Staying With Us Means */}
      <section className="py-24 bg-ivory">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <SectionLabel className="justify-center mb-8">What Staying With Us Means</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-12">Simple. Honest. Comfortable.</h2>
            <p className="font-serif text-xl italic text-taupe mb-16 leading-relaxed">
              Unwind was built on a simple idea: a place to slow down, spend time with your people and simply enjoy the moment — with good food and good times as part of the deal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {values.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="border border-gold/10 bg-cream p-8 hover:bg-forest group transition-colors duration-500"
                >
                  <h3 className="font-serif text-2xl italic text-forest mb-4 group-hover:text-ivory transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="h-px bg-gold/30 w-12 mb-4 group-hover:w-full transition-all duration-700" />
                  <p className="font-sans text-sm text-taupe leading-relaxed group-hover:text-ivory/70 transition-colors duration-500">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative aspect-video w-full border border-gold/10 overflow-hidden">
              <Image
                src='/images/exterior3.jpeg'
                alt="The grounds of Unwind Karjat in Karjat"
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionLabel className="mb-6">Location</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Close Enough to Come Easily.</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-8">
                Unwind Karjat is just over an hour and a half from both Mumbai and Pune — close enough for a quick getaway, far enough to feel like a break. Set on the Karjat-Chowk road in Wavarle, surrounded by open greenery.
              </p>
              <div className="space-y-4 mb-10">
                <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-bold">Address</p>
                <p className="font-serif text-forest text-xl italic">{siteConfig.address}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=18.922485,73.315053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-forest/90 transition-all rounded-sm"
                >
                  <MapPin size={14} />
                  Get Directions
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-gold/30 text-gold font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-gold/5 transition-all rounded-sm"
                >
                  Driving Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-champagne text-center border-t border-gold/10">
         <div className="max-w-3xl mx-auto px-6">
            <SectionLabel className="justify-center mb-6">Plan Your Visit</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Your Weekend Could Be This Simple.</h2>
            <p className="font-serif text-xl italic text-taupe mb-12">
              Book your stay, pack light and let Unwind do the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://bookone.io/Unwind-Karjat?bookingEngine=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gold text-[#1a1004] font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-gold-light transition-all shadow-xl hover:shadow-gold/20 duration-500 rounded-sm font-bold">
                 <Calendar size={16} />
                 Book Your Stay
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-xs uppercase tracking-[0.25em] px-12 py-5 hover:bg-forest/90 transition-all rounded-sm">
                 <MessageCircle size={16} />
                 WhatsApp Us
              </a>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
