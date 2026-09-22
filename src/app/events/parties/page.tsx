import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Gift, Music, Flame, GlassWater, Users, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Birthday Party & Celebration Venue at Ajodhya Hill | The Divine Oasis, Purulia',
  description: 'Host birthdays, anniversaries & private parties at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with barbeque, family cottages & scenic seating for up to 40 guests.',
  keywords: ['party venue Purulia', 'birthday party venue Ajodhya Hill', 'anniversary celebration Purulia', 'private party resort Purulia', 'event venue near Ajodhya Hill Purulia', 'family celebration Purulia'],
  alternates: { canonical: 'https://thedivineoasisresort.com/events/parties' },
};

export default function PartiesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SocialEvent",
      "name": "Parties & Celebrations - The Divine Oasis Ajodhya Hill",
      "description": "Birthday party & celebration venue at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with barbeque stand, seating area, and family cottages for up to 40 guests.",
      "location": {
        "@type": "PostalAddress",
        "streetAddress": "643G+4Q, Hilltop",
        "addressLocality": "Ajodhya",
        "addressRegion": "West Bengal",
        "postalCode": "723152",
        "addressCountry": "IN"
      },
      "telephone": "+91 99039 89950"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best birthday party venue in Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Divine Oasis is the best birthday party venue in Purulia, located atop Ajodhya Hill with forest views. We host birthdays, anniversaries, and private celebrations with barbeque, customized themes, and family cottages for up to 40 guests."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a party venue near Ajodhya Hill, Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis is a party venue at Ajodhya Hill, Purulia for birthdays, anniversaries, and private celebrations with live BBQ, music setup, and scenic hilltop seating."
          }
        },
        {
          "@type": "Question",
          "name": "Can I host a private party at Ajodhya Hill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis offers a private party venue at Ajodhya Hill, Purulia with customizable themes, decor, sound systems, and organic farm catering for all occasions."
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
        label="Birthday Party Venue at Ajodhya Hill - The Divine Oasis, Purulia"
        title="Party Venue at Ajodhya Hill - Birthday Celebrations & Private Parties"
        tagline="Host birthdays, anniversaries & private parties at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with barbeque, family cottages & scenic seating for up to 40 guests."
        image='https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Deck</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Host the Ultimate Celebration</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Whether it&apos;s a milestone birthday or a long-awaited reunion, our hilltop seating area and family cottages offer the perfect vibe for every party.
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
                href="https://bookone.io/The-Divine-Oasis?bookingEngine=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-forest text-ivory font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-5 hover:bg-forest/90 transition-all rounded-sm"
              >
                <Calendar size={18} />
                Book Direct Online
              </a>
            </div>
            <div className="relative aspect-square">
               <Image src='https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg' alt="Birthday Party Venue at The Divine Oasis Ajodhya Hill" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Party Elements</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">Bespoke Festivities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: GlassWater, title: 'Celebration Vibe', desc: 'Host a vibrant afternoon or evening celebration with refreshing drinks and vegetarian delights at our hilltop seating.' },
              { icon: Music, title: 'Music & Setup', desc: 'Dedicated sound systems and customizable lighting to set the perfect mood at Ajodhya Hill.' },
              { icon: Gift, title: 'Theme Decor', desc: 'Our event team can help bring your specific birthday or celebration theme to life amidst the forest.' }
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