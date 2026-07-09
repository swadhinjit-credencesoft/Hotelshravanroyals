import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import Image from 'next/image';
import { Heart, Users, Utensils, Camera, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WeddingsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Hotel Surya Bella Casa Wedding Lawns & Banquet Hall Purnea",
      "description": "Best wedding venue in Purnea near Bus Stand. Marriage hall, wedding lawns, banquet hall, bridal suites at Hotel Surya Bella Casa.",
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
          "name": "What is the best wedding venue in Purnea?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel Surya Bella Casa is the best wedding venue in Purnea near Bus Stand with wedding lawns, banquet hall, and bridal suites for up to 250 guests."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a marriage hall near Purnea Bus Stand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Hotel Surya Bella Casa has a marriage hall near Purnea Bus Stand with wedding lawns, banquet facilities, and bespoke catering for your special day."
          }
        },
        {
          "@type": "Question",
          "name": "How many guests can a wedding venue in Purnea accommodate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel Surya Bella Casa wedding venue in Purnea can accommodate up to 250 guests with customizable menus, decor, and planning services."
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
        label="Best Wedding Venue in Purnea - Marriage Hall Near Bus Stand"
        title="Wedding Venue in Purnea - Banquet & Wedding Lawns"
        tagline="Best wedding venue in Purnea near Bus Stand. Marriage hall, wedding lawns, banquet hall & bridal suites for your dream celebration."
        image='/images/exterior5.jpeg'
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Hotel Surya Bella Casa Wedding Venue - Marriage Hall & Banquet",
            "description": "Video tour of Hotel Surya Bella Casa weddings facility showcasing our marriage hall, wedding lawns, banquet hall, and bridal suites near Purnea Bus Stand. Perfect for your dream wedding in Purnea.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/IMG_7431.mp4".replace('/images/', '/cdn/').replace('.jpeg', '.mp4').replace('exterior5', '7431'),
            "contentUrl": "https://bookonelocal.in/cdn/IMG_7431.mp4",
            "embedUrl": "https://hotelsuryabellacasa.com/events/weddings",
            "uploadDate": "2024-01-01",
            "duration": "PT90S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://hotelsuryabellacasa.com/events/weddings"
            },
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/WatchAction",
              "userInteractionCount": 650
            }
          })
        }}
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <SectionLabel className="mb-6">The Venue</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8">Purnia&apos;s Premier Wedding Destination</h2>
              <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
                At Hotel Surya Bella Casa, we transform your dream wedding into a reality. Our expansive lawns can host up to 250 guests, offering a seamless blend of rustic charm and premium luxury.
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
                  <p className="font-serif text-forest text-xl italic">Banquets & Lawns</p>
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
               <Image src='/images/exterior6.jpeg' alt="Wedding Venue in Purnea - Marriage Hall Near Bus Stand | Hotel Surya Bella Casa" fill className="object-cover rounded-sm shadow-2xl" />
            </div>
          </div>

          <div className="text-center mb-16">
            <SectionLabel className="justify-center mb-6">Our Services</SectionLabel>
            <h2 className="font-display text-4xl italic text-forest">A Seamless Celebration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Utensils, title: 'Bespoke Catering', desc: 'Customizable menus featuring regional vegetarian specialties and global cuisines.' },
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

    </main>
  );
}
