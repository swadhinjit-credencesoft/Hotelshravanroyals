'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Sun, Utensils, MapPin, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DayTripsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Unwind Karjat Day Outing",
    "description": "The perfect one-day picnic and resort visit near Mumbai and Pune with pool access and lunch packages.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karjat",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  };

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CinematicHero 
        label="Day Picnics & Outings"
        title="A Day in Paradise"
        tagline="Short on time? Experience the best of Unwind Karjat with our curated day-trip packages for families and groups."
        image='/images/room2.jpeg'
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Escape</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Quick Retreat, Lasting Memories</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Our day-out packages are designed for those seeking a quick escape from the city. Enjoy access to our infinity pool, expansive lawns, and a lavish multi-cuisine lunch.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Clock className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Timings</p>
                  <p className="font-serif text-forest text-xl italic">10 AM - 6 PM</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Utensils className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Includes</p>
                  <p className="font-serif text-forest text-xl italic">Lunch & Tea</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/Unwind-Karjat?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Book Direct Online
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src='/images/exterior.jpeg' alt="Family enjoying a day picnic at a luxury resort" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Package Highlights</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">What&apos;s Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Sun, title: 'Pool & Lawn Access', desc: 'Full access to our signature infinity pool and manicured emerald lawns.' },
              { icon: Utensils, title: 'Lavish Buffet Lunch', desc: 'A wide spread of Indian and global cuisines prepared by our expert chefs.' },
              { icon: MapPin, title: 'Nature Trails', desc: 'Guided access to our private forest trails for a quick morning exploration.' }
            ].map((feature, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <feature.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{feature.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-8">Ready for a Day Out?</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/events#enquiry" className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
              Request Day Package
            </Link>
          </div>
          <p className="mt-8 font-sans text-[10px] uppercase tracking-widest text-ivory/40">*Prior booking mandatory for day-trips.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
