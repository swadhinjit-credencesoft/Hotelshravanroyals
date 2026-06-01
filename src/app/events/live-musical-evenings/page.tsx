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
    "@name": "Unwind Karjat Live Music Venue",
    "description": "Soulful acoustic nights, live bands, DJ evenings, and bonfire jam sessions under the Karjat sky.",
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
        label="Live Musical Evenings"
        title="Music Under the Stars"
        tagline="From soulful acoustic sets to high-energy live bands, experience unforgettable evenings beneath the Karjat sky."
        image='/images/exterior2.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Experience</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Where Music Meets Nature</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                At Unwind Karjat, evenings come alive with live music. Whether it&apos;s an intimate acoustic set by the bonfire or a full band performance on our lawn stage, our musical evenings create moments that linger long after the last note fades.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Capacity</p>
                  <p className="font-serif text-forest text-xl italic">Up to 150 Guests</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Flame className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Setting</p>
                  <p className="font-serif text-forest text-xl italic">Bonfire & Open Lawn</p>
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
              <Image src='/images/exterior1.jpeg' alt="Live music performance at Unwind Karjat" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Formats</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Choose Your Vibe</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Music, title: 'Acoustic Nights', desc: 'Soulful acoustic performances by talented local artists. Perfect for intimate gatherings and romantic evenings under the stars.' },
              { icon: Mic, title: 'Live Bands & DJ', desc: 'High-energy performances with professional live bands and DJs for weddings, parties, and corporate celebrations.' },
              { icon: Flame, title: 'Bonfire Jam Sessions', desc: 'An interactive musical experience where guests join the performance around a warm bonfire — instruments provided.' }
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
                'Professional sound system',
                'Stage lighting & setup',
                'Bonfire arrangement',
                'Custom song requests',
                'Curated food & drinks menu',
                'Dedicated event coordinator',
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
          <h2 className="font-display text-4xl italic mb-4">Plan Your Musical Evening</h2>
          <p className="font-serif text-ivory/60 italic mb-10">Let us curate the perfect musical experience for your group</p>
          <Link
            href="/events#enquiry"
            className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm"
          >
            Request Musical Evening
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
