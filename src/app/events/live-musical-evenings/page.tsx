'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Music, Users, Flame, Mic, Star, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function LiveMusicalEveningsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Unwind Karjat Live Music Venue",
    "description": "Soulful acoustic nights, live bands, DJ evenings, and bonfire jam sessions under the Karjat sky.",
    "url": "https://unwindkarjat.com/events/live-musical-evenings",
    "telephone": "+91919619198839",
    "image": "https://unwindkarjat.com/music.jpeg",
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
        label="Live Musical Evenings"
        title="Evenings That Come Alive"
        tagline="Acoustic nights, live bands and karaoke — music is very much part of the Unwind experience."
        image='/music.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Experience</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Music Is Part of the Stay</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                At Unwind, evenings come alive with music — from an acoustic set to a karaoke night or a DJ evening on the lawn. Some of our best memories are made around music.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Capacity</p>
                  <p className="font-serif text-forest text-xl italic">Private Groups</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Flame className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Setting</p>
                  <p className="font-serif text-forest text-xl italic">Lawn & Open Air</p>
                </div>
              </div>

              <a
                href="https://bookone.io/Unwind-Karjat?bookingEngine=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Plan a Musical Evening
              </a>
            </div>
            <div className="relative aspect-square">
              <Image src='/celebrationsevenet.png' alt="An evening of music at Unwind Karjat" fill loading="lazy" className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Formats</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Choose Your Vibe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Music, title: 'Acoustic Nights', desc: 'A relaxed acoustic evening with music that fits the mood — perfect for small groups and slow evenings.' },
              { icon: Mic, title: 'Live Bands & DJ', desc: 'Live bands and DJ evenings for birthdays, celebrations and corporate get-togethers.' },
              { icon: Flame, title: 'Karaoke & Jams', desc: 'An interactive evening where your group joins in around a bonfire on the lawn.' }
            ].map((format, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <format.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{format.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-24 bg-forest/5 border border-gold/10 rounded-sm p-12 md:p-16">
            <div className="text-center mb-12">
              <SectionLabel className="justify-center mb-4">What&apos;s Included</SectionLabel>
              <h2 className="font-display text-3xl italic text-forest">Every Evening, Every Detail</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Sound & music setup',
                'Bonfire arrangement',
                'Karaoke & song requests',
                'Food & drinks to go with the music',
                'Space for your group on the lawn',
                'Help with planning the evening',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-taupe font-sans text-sm">
                  <Star size={12} className="text-gold flex-shrink-0" fill="currentColor" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-4">Plan a Musical Evening</h2>
          <p className="font-serif text-ivory/60 italic mb-10">Tell us what you have in mind and we will help put the evening together</p>
          <Link
            href="/events#enquiry"
            className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm"
          >
            Enquire About Music Evenings
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
