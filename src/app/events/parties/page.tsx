'use client';

import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Gift, Music, Flame, GlassWater, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function PartiesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Hotel Surya Bella Casa Birthday Party Hall & Celebration Deck Purnea",
      "description": "Best birthday party hall in Purnea near Bus Stand. Party venue for birthdays, anniversaries, private parties with customized themes and decoration.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
        "addressLocality": "Purnea",
        "addressRegion": "Bihar",
        "postalCode": "854301",
        "addressCountry": "IN"
      },
      "telephone": "+91 9835923601"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best birthday party hall in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel Surya Bella Casa is the best birthday party hall in Purnea near Bus Stand with celebration deck, customized themes, decoration, and dining options for up to 40 guests."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a party venue in Purnea near Bus Stand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa has a party venue in Purnea near Bus Stand for birthday parties, anniversaries, and private celebrations with live BBQ and music setup."
          }
        },
        {
          "@type": "Question",
          "name": "Can I host a private party in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa offers a private party venue in Purnea near Bus Stand with customizable themes, decor, sound systems, and catering for all occasions."
          }
        }
      ]
    }
  ];

  return (
    <main className="bg-cream min-h-screen">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CinematicHero 
        label="Birthday Party Hall in Purnea - Party Venue Near Bus Stand"
        title="Party Hall in Purnea - Birthday Party Venue, Celebration Deck & Private Parties"
        tagline="Looking for a birthday party hall in Purnea near Bus Stand? Hotel Surya Bella Casa offers party venue for birthdays, anniversaries, and private celebrations with customized themes. Best party hall in Purnea."
        image='/images/exterior3.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Deck</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Host the Ultimate Celebration</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Whether it&apos;s a milestone birthday or a long-awaited reunion, our celebration deck and modern banquet space offer the perfect vibe for every party.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Space</p>
                  <p className="font-serif text-forest text-xl italic">40+ Guests</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Flame className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Highlight</p>
                  <p className="font-serif text-forest text-xl italic">Live BBQ Grill</p>
                </div>
              </div>

              <a 
                href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Book Direct Online
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src='/images/exterior4.jpeg' alt="Birthday Party Hall in Purnea - Party Venue Near Bus Stand | Hotel Surya Bella Casa" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Party Elements</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Bespoke Festivities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: GlassWater, title: 'Celebration Vibe', desc: 'Host a vibrant afternoon or evening celebration with refreshing drinks and vegetarian delights.' },
              { icon: Music, title: 'Music & Setup', desc: 'Dedicated sound systems and customizable lighting to set the perfect mood.' },
              { icon: Gift, title: 'Theme Decor', desc: 'Our event team can help bring your specific birthday or celebration theme to life.' }
            ].map((element, i) => (
              <div key={i} className="text-center p-10 bg-white border border-gold/10 hover:shadow-warm-lg transition-all duration-500 group">
                <element.icon className="text-gold mx-auto mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display text-2xl italic text-forest mb-4">{element.title}</h3>
                <p className="font-serif text-taupe leading-relaxed">{element.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-ivory text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl italic mb-8">Ready to Celebrate?</h2>
          <Link href="/events#enquiry" className="inline-block bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 hover:bg-gold-light transition-all rounded-sm">
            Check Date Availability
          </Link>
        </div>
      </section>

    </main>
  );
}
