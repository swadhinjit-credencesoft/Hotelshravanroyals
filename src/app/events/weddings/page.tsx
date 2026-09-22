import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Heart, Users, Utensils, Camera, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Outdoor Wedding Venue at Ajodhya Hill | The Divine Oasis, Purulia',
  description: 'Dream outdoor weddings at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with organic farm catering, barbeque evenings & family cottages for up to 100 guests.',
  keywords: ['wedding venue Purulia', 'outdoor wedding Ajodhya Hill', 'marriage hall Purulia', 'banquet hall wedding Purulia', 'best wedding resort Purulia', 'wedding catering Purulia'],
  alternates: { canonical: 'https://thedivineoasisresort.com/events/weddings' },
};

export default function WeddingsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Wedding Venue - The Divine Oasis Ajodhya Hill",
      "description": "Outdoor wedding venue at The Divine Oasis atop Ajodhya Hill, Purulia. Forest resort with hilltop ceremony spaces, organic farm catering, barbeque evenings & family cottages.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "643G+4Q, Hilltop",
        "addressLocality": "Ajodhya",
        "addressRegion": "West Bengal",
        "postalCode": "723152",
        "addressCountry": "IN"
      },
      "maximumAttendeeCapacity": "100",
      "telephone": "+91 99039 89950"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best outdoor wedding venue in Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Divine Oasis is the best outdoor wedding venue in Purulia, located atop Ajodhya Hill with forest views. We host weddings, receptions, and multi-day celebrations with organic farm catering and barbeque evenings."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a wedding venue near Ajodhya Hill, Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis is a wedding venue at Ajodhya Hill, Purulia with hilltop ceremony spaces, organic farm catering, and family cottages for guests."
          }
        },
        {
          "@type": "Question",
          "name": "How many guests can a wedding venue in Purulia accommodate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Divine Oasis wedding venue at Ajodhya Hill can accommodate up to 100 guests with customizable organic farm menus, decor, and planning services."
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
        label="Outdoor Wedding Venue at Ajodhya Hill - The Divine Oasis, Purulia"
        title="Wedding Venue at Ajodhya Hill - Hilltop Forest Resort"
        tagline="Dream outdoor weddings at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop ceremony spaces, organic farm catering, barbeque evenings & family cottages for up to 100 guests."
        image='https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Venue</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Ajodhya Hill&apos;s Premier Wedding Destination</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                At The Divine Oasis, we transform your dream wedding into a reality. Our hilltop ceremony spaces can host up to 100 guests, offering a seamless blend of forest serenity and premium comfort.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Users className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Capacity</p>
                  <p className="font-serif text-forest text-xl italic">100 Guests</p>
                </div>
                <div className="flex flex-col gap-3">
                  <MapPin className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Setting</p>
                  <p className="font-serif text-forest text-xl italic">Hilltop Forest</p>
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
               <Image src='https://bookonelocal.in/cdn/2026-05-13-064448375-WhatsApp Image 2026-05-11 at 15.42.13.jpg' alt="Outdoor Wedding Venue at The Divine Oasis Ajodhya Hill" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Services</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">A Seamless Celebration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Utensils, title: 'Organic Farm Catering', desc: 'Customizable veg thali menus featuring seasonal farm vegetables and traditional Bengali flavours.' },
              { icon: Heart, title: 'Decor & Planning', desc: 'From minimal rustic setups to lavish floral arrangements, we handle it all.' },
              { icon: Camera, title: 'Memories', desc: 'Exclusive bridal suites and stunning photo locations throughout the hilltop forest.' }
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

    </main>
  );
}