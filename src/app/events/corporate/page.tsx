import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Briefcase, Wifi, Presentation, Coffee, Target, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Corporate Events in Purnea | Conference Hall & Meeting Room',
  description: 'Best conference hall in Purnea near Bus Stand. Hotel Surya Bella Casa offers corporate event venue, meeting room, seminar hall for offsites, retreats and workshops.',
  keywords: ['conference hall purnea', 'corporate event venue purnia', 'meeting room hotel purnea', 'seminar hall purnea', 'business conference purnia'],
  alternates: { canonical: 'https://hotelsuryabellacasa.com/events/corporate' },
};

export default function CorporatePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BusinessEvent",
      "name": "Corporate Events - Hotel Surya Bella Casa",
      "description": "Best conference hall in Purnea near Bus Stand. Corporate event venue, meeting room, seminar hall for offsites, retreats and workshops.",
      "location": {
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
          "name": "Is there a conference hall in Purnea near Bus Stand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa has a conference hall in Purnea near Bus Stand with high-speed WiFi, projectors, and team-building facilities for up to 60 guests."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best corporate event venue in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel Surya Bella Casa is the best corporate event venue in Purnea with dedicated meeting rooms, seminar hall, and offsite retreat facilities near Bus Stand."
          }
        },
        {
          "@type": "Question",
          "name": "Can I host a business meeting in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa offers a professional business meeting room and conference hall in Purnea near Bus Stand for corporate events and workshops."
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
        label="Conference Hall in Purnea - Corporate Event Venue Near Bus Stand"
        title="Conference Hall & Corporate Event Venue in Purnea - Meeting Rooms & Seminar Hall"
        tagline="Looking for a conference hall in Purnea near Bus Stand? Hotel Surya Bella Casa offers corporate event venue, meeting room, seminar hall for offsites, retreats and business workshops. Best conference hall in Purnea."
        image='/images/exterior8.jpeg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Hub</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Productivity Meets Peace</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Break away from the traditional boardroom. Our Purnia corporate offsite venue offers high-speed connectivity, state-of-the-art tech, and vast open spaces for breakthrough thinking.
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
               <Image src='/images/room1.jpeg' alt="Conference Hall in Purnea - Corporate Event Venue Near Bus Stand | Hotel Surya Bella Casa" fill className="object-cover rounded-sm shadow-2xl" />
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

    </main>
  );
}
