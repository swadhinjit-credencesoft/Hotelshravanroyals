'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Heart, Users, Utensils, Camera, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WeddingsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Unwind Karjat Wedding Lawns",
    "description": "Premium destination wedding venue near Mumbai with forest views and bespoke catering.",
    "url": "https://unwindkarjat.com/events/weddings",
    "telephone": "+91919619198839",
    "image": "https://unwindkarjat.com/images/exterior6.jpeg",
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
        label="Destination Weddings"
        title="Begin Your Forever"
        tagline="A magical forest-side setting for your most significant moments. Exchange vows surrounded by the Sahyadris."
        image='/images/exterior5.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Venue</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Karjat&apos;s Premier Wedding Destination</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                At Unwind Karjat, we transform your dream wedding into a reality. Our expansive lawns can host up to 250 guests, offering a seamless blend of rustic charm and premium luxury.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Capacity</p>
                  <p className="font-serif text-forest text-xl italic">250 Guests</p>
                </div>
                <div className="flex flex-col gap-3">
                  <MapPin className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Setting</p>
                  <p className="font-serif text-forest text-xl italic">Forest-Side Lawns</p>
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
               <Image src='/images/exterior6.jpeg' alt="Outdoor wedding setup at sunset" fill loading="lazy" className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Services</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">A Seamless Celebration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Utensils, title: 'Bespoke Catering', desc: 'Customizable menus featuring local Maharashtrian flavors and global cuisines.' },
              { icon: Heart, title: 'Decor & Planning', desc: 'From minimal rustic setups to lavish floral arrangements, we handle it all.' },
              { icon: Camera, title: 'Memories', desc: 'Exclusive bridal suites and stunning photo locations throughout the resort.' }
            ].map((service, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <service.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{service.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-8">Start Planning Your Special Day</h2>
          <Link href="/events#enquiry" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
            Request Wedding Proposal
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
