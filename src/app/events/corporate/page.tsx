'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Briefcase, Wifi, Presentation, Coffee, Target, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CorporatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Unwind Karjat Corporate Offsite",
    "description": "Corporate offsite venue near Mumbai and Pune for small groups, with stay, meals, pool, lawns and activities together in one place.",
    "url": "https://unwindkarjat.com/events/corporate",
    "telephone": "+91919619198839",
    "image": "https://unwindkarjat.com/corporate.jpeg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karjat",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  };

  return (
    <main className="bg-cream min-h-screen" id="main-content">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CinematicHero 
        label="Corporate Offsites"
        title="Work Somewhere Different."
        tagline="Step away from the office without stepping too far away from Pune. A relaxed setting designed for small corporate groups."
        image='/corporate.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Setting</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Made for Small Corporate Groups</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Whether it is a team offsite, leadership meet, annual gathering or simply a day away from the office, Unwind offers stay, meals, pool and open spaces — without the usual corporate rigidity.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Briefcase className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Groups</p>
                  <p className="font-serif text-forest text-xl italic">Small Teams</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Target className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Activities</p>
                  <p className="font-serif text-forest text-xl italic">Pool, Games & Lawn</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/Unwind-Karjat?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Plan a Corporate Stay
              </a>
            </div>
            <div className="relative aspect-square">
                <Image src='/corporate.jpeg' alt="Corporate offsite at Unwind Karjat" fill loading="lazy" className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Offsite Facilities</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Everything Your Group Needs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Wifi, title: 'Wi-Fi & Connectivity', desc: 'Reliable Wi-Fi across the property to keep your team connected.' },
              { icon: Presentation, title: 'Meeting Space', desc: 'Space for presentations and workshops, with projectors and sound available.' },
              { icon: Coffee, title: 'Stay, Meals & Activities', desc: 'Comfortable rooms, generous meals and pool, lawn and games between sessions.' }
            ].map((facility, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <facility.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{facility.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-8">Plan a Corporate Offsite</h2>
          <Link href="/events#enquiry" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
            Request a Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
