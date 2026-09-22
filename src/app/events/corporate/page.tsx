import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Briefcase, Wifi, Presentation, Coffee, Target, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Corporate Retreat & Offsite Venue at Ajodhya Hill | The Divine Oasis, Purulia',
  description: 'Corporate retreats & offsites at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with high-speed Wi-Fi, meeting spaces & team-building activities for up to 25 guests.',
  keywords: ['corporate retreat Purulia', 'offsite venue Ajodhya Hill', 'conference venue Purulia', 'meeting room resort Purulia', 'seminar hall Purulia', 'business offsite Purulia', 'team building Ajodhya Hill'],
  alternates: { canonical: 'https://thedivineoasisresort.com/events/corporate' },
};

export default function CorporatePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BusinessEvent",
      "name": "Corporate Retreats - The Divine Oasis Ajodhya Hill",
      "description": "Corporate retreats & offsites at The Divine Oasis atop Ajodhya Hill, Purulia. Hilltop forest resort with high-speed Wi-Fi, meeting spaces, team-building activities for up to 25 guests.",
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
          "name": "Is there a corporate retreat venue near Ajodhya Hill, Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis is a corporate retreat venue at Ajodhya Hill, Purulia. We offer high-speed Wi-Fi, peaceful hilltop environment for strategy sessions, group accommodation in premium cottages, and team-building activities near Ajodhya Hills & Forest Reserve."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best corporate offsite venue in Purulia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Divine Oasis is the best corporate offsite venue in Purulia with dedicated meeting spaces, seminar facilities, and team-building retreats at Ajodhya Hill."
          }
        },
        {
          "@type": "Question",
          "name": "Can I host a business meeting at The Divine Oasis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, The Divine Oasis offers meeting spaces and corporate retreat facilities at Ajodhya Hill, Purulia for offsites, strategy sessions, and workshops."
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
        label="Corporate Retreat at Ajodhya Hill - The Divine Oasis, Purulia"
        title="Corporate Retreat & Offsite Venue at Ajodhya Hill - The Divine Oasis"
        tagline="Corporate retreats & offsites at The Divine Oasis atop Ajodhya Hill, Purulia. High-speed Wi-Fi, meeting spaces, team-building activities for up to 25 guests."
        image='https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg'
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Hub</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Productivity Meets Peace</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                Break away from the traditional boardroom. Our Ajodhya Hill corporate offsite venue offers high-speed connectivity, peaceful hilltop environment, and vast open spaces for breakthrough thinking.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex flex-col gap-3">
                  <Briefcase className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Focus</p>
                  <p className="font-serif text-forest text-xl italic">25+ Attendees</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Target className="text-gold" size={24} />
                  <p className="font-sans text-[11px] uppercase tracking-widest text-gold">Activities</p>
                  <p className="font-serif text-forest text-xl italic">Team Building</p>
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
               <Image src='https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg' alt="Corporate Retreat at The Divine Oasis Ajodhya Hill" fill className="object-cover rounded-sm shadow-2xl" />
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
              { icon: Coffee, title: 'Catering Support', desc: 'Bespoke organic farm menus from high-energy lunches to celebratory BBQ dinners.' }
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