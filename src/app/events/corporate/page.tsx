'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Briefcase, Wifi, Presentation, Coffee, Target, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CorporatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Unwind Karjat Corporate Hub",
    "description": "Professional corporate retreat and offsite venue in Karjat with team building and tech facilities.",
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
        label="Corporate Retreats"
        title="Strategy in Serenity"
        tagline="Foster innovation and team spirit in a setting that inspires. Our corporate hub blends professional needs with nature."
        image="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=2400&q=95"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Hub</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Productivity Meets Peace</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Break away from the traditional boardroom. Our Karjat corporate offsite venue offers high-speed connectivity, state-of-the-art tech, and vast open spaces for breakthrough thinking.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Briefcase className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Focus</p>
                  <p className="font-serif text-forest text-xl italic">60+ Attendees</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Target className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Activities</p>
                  <p className="font-serif text-forest text-xl italic">Team Building</p>
                </div>
              </div>

              <a 
                href="https://wa.me/910000000000" 
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <MessageCircle size={18} />
                WhatsApp Corporate Enquiry
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=95" alt="Corporate team meeting in a luxury nature resort" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Offsite Facilities</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Designed for Business</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Wifi, title: 'High-Speed Connectivity', desc: 'Resilient Wi-Fi across the resort to keep your team connected.' },
              { icon: Presentation, title: 'Tech Support', desc: 'Projectors, sound systems, and whiteboards for effective workshops.' },
              { icon: Coffee, title: 'Catering Support', desc: 'Bespoke menus from high-energy lunches to celebratory BBQ dinners.' }
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
          <h2 className="font-display text-4xl italic mb-8">Empower Your Team Today</h2>
          <Link href="/events#enquiry" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
            Download Corporate Kit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
