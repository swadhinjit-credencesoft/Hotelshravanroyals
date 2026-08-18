'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import { Heart, Users, Utensils, Camera, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WeddingsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Unwind Karjat Wedding Lawns",
    "description": "Intimate weddings and receptions near Mumbai and Pune at Unwind Karjat, with private lawns, stay and catering together in one place.",
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
        label="Weddings & Receptions"
        title="Celebrate Your Day, Your Way"
        tagline="Intimate weddings and receptions with everything together in one place — accommodation, food, lawns and celebration."
        image='/weddingvideo.mp4'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Setting</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">An Intimate Setting for Your Day</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                We host weddings and receptions in our private lawns and open spaces, with accommodation, food and celebrations all in one relaxed place.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Setting</p>
                  <p className="font-serif text-forest text-xl italic">Private Lawns</p>
                </div>
                <div className="flex flex-col gap-3">
                  <MapPin className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Stay</p>
                  <p className="font-serif text-forest text-xl italic">Rooms on Site</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/Unwind-Karjat?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Plan Your Celebration
              </a>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-2xl">
               <video
                 src="/weddingvideo.mp4"
                 autoPlay
                 loop
                 muted
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Services</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">A Day We Help You Put Together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Utensils, title: 'Generous Catering', desc: 'Menus designed to be enjoyed together, with live tandoor and special dishes prepared on request.' },
              { icon: Heart, title: 'Celebration Setup', desc: 'We help you put the day together — from simple setups to the touches that matter to you.' },
              { icon: Camera, title: 'Space & Stay', desc: 'Rooms for your family and guests, and plenty of spots across the property for photos.' }
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
          <h2 className="font-display text-4xl italic mb-8">Tell Us About Your Day</h2>
          <Link href="/events#enquiry" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
            Plan Your Celebration
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
