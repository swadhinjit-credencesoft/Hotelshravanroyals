import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { MapPin, Star, Calendar, ArrowRight } from 'lucide-react';

const busStandAmenities: AmenityItem[] = [
  { icon: 'MapPin', title: '2 Minutes from Bus Stand', description: 'Purnia Bus Stand is less than a 2-minute walk. Step off the bus and check into comfort instantly.' },
  { icon: 'Luggage', title: 'Luggage Assistance', description: 'Our staff helps with luggage from arrival at the bus stand to your room. Hassle-free transit.' },
  { icon: 'Car', title: 'Auto & Rickshaw Access', description: 'Easy connectivity to Bhatta Bazar, railway station, and all parts of Purnia via auto-rickshaws right outside.' },
  { icon: 'Clock', title: 'Early Check-In for Travelers', description: 'Arrived on an early bus? We offer early check-in and luggage hold service at no extra charge.' },
  { icon: 'Calendar', title: 'Same-Day Booking Welcome', description: 'Walk-ins and same-day online bookings are always welcome. Instant room allocation.' },
  { icon: 'Shield', title: 'Safe Neighborhood', description: 'Located in the well-lit Suryalok Complex with 24/7 security and active commercial activity around the clock.' },
];

export const metadata = {
  title: 'Hotel Near Purnia Bus Stand',
  description: 'Looking for a hotel near Purnia Bus Stand? Hotel Surya Bella Casa is located opposite Vikass Market, just 2 min from Bus Stand Purnea. Clean rooms, free WiFi, parking. Best hotel near Purnea Bus Stand. Book direct.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/hotel-near-purnia-bus-stand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Hotel Near Purnia Bus Stand | Vikass Market Purnea',
    description: 'Best hotel near Purnea Bus Stand. Located opposite Vikass Market, 2 min walk from bus stand. Free WiFi, parking, AC rooms. Perfect for travelers. Book now.',
    url: 'https://hotelsuryabellacasa.com/hotel-near-purnia-bus-stand',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Near Purnia Bus Stand - Best Hotel Opposite Vikass Market - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Near Purnia Bus Stand | Stay Opposite Vikass Market',
    description: 'Best hotel near Purnea Bus Stand with free WiFi and parking. Located opposite Vikass Market. Clean, affordable rooms near bus terminal.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function PurniaBusStandLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hotelsuryabellacasa.com" },
              { "@type": "ListItem", "position": 2, "name": "Hotel Near Purnia Bus Stand", "item": "https://hotelsuryabellacasa.com/hotel-near-purnia-bus-stand" }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Best Hotel Near Purnea Bus Stand & Opposite Vikass Market"
        title="Hotel Near Purnia Bus Stand - 2 Min Walk from Bus Terminal"
        tagline="Looking for a hotel near Purnea Bus Stand? Hotel Surya Bella Casa is located opposite Vikass Market, just 2 minutes from the main Bus Stand. Clean rooms with free WiFi, parking, AC, and 24/7 service. Best stay near Bus Terminal Purnea."
        image='https://bookonelocal.in/cdn/IMG_7424.mp4'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Local Advantage</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Comfortable Lodging Just Steps Away From Purnia Bus Stand
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                When traveling to Purnia, proximity to the primary transit point is crucial. <strong>Hotel Surya Bella Casa</strong> offers an unmatched geographic advantage, situated just a stone&apos;s throw from the main <strong>Purnia Bus Stand</strong>.
              </p>
              <p>
                Perfect for transit travelers, <Link href="/business-hotel-in-purnia" className="text-gold hover:underline">corporate executives</Link>, and <Link href="/family-hotel-in-purnia" className="text-gold hover:underline">visiting families</Link>, our hotel eliminates the stress of long commutes inside Purnia. Located opposite the iconic <Link href="/hotel-near-vikass-market" className="text-gold hover:underline">Vikass Market</Link> in Suryalok Complex, you are connected immediately to local dining, sweets, and business centers. Explore our <Link href="/rooms" className="text-gold hover:underline">room options</Link> and <Link href="/offers" className="text-gold hover:underline">current offers</Link> for the best rates.
              </p>
              <p>
                Forget the hassle of haggling for auto-rickshaws with heavy luggage. Our central location means you can check in, freshen up, and prepare for your day in Purnia immediately after your bus journey.
              </p>
            </div>

            <div className="mt-12 bg-white p-8 border border-gold/10 rounded-sm">
              <h2 className="font-display text-2xl italic text-forest mb-4">Location Highlights</h2>
              <ul className="space-y-4 font-sans text-base text-taupe">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Near Bus Stand Purnia:</strong> Less than 2 minutes of walking distance, offering instant transit convenience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Opposite Vikass Market:</strong> Easy shopping access to fabrics, garments, and daily necessities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <span><strong>Bhatta Bazar Area:</strong> Just 5 minutes away, connecting you to Purnia&apos;s oldest commercial district.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-forest text-ivory p-8 border border-gold/20 flex flex-col justify-between h-fit rounded-sm shadow-warm-lg">
            <div>
              <div className="flex items-center gap-1 mb-4 text-gold">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <h3 className="font-display text-3xl italic mb-6">Book Your Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Enjoy early check-in, secure parking, and clean air-conditioned rooms at competitive rates directly opposite Vikass Market.
              </p>
            </div>
            
            <a 
              href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full flex items-center justify-center gap-2 bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-all rounded-sm font-bold"
            >
              <Calendar size={14} />
              Book Now Online
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionLabel className="mb-6">Also Explore</SectionLabel>
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Ways to Stay in Purnia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/hotel-near-vikass-market', label: 'Hotel Near Vikass Market' },
            { href: '/family-hotel-in-purnia', label: 'Family Hotel in Purnia' },
            { href: '/business-hotel-in-purnia', label: 'Business Hotel in Purnia' },
            { href: '/budget-hotel-in-purnia', label: 'Budget Hotel in Purnia' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 bg-white p-5 border border-gold/10 rounded-sm hover:border-gold/40 transition-all shadow-sm"
            >
              <span className="font-sans text-sm text-forest/80 group-hover:text-gold transition-colors">{item.label}</span>
              <ArrowRight size={14} className="text-gold ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>

      <LuxuryAmenities label="Location Advantages" heading="Unbeatable Transit Access" amenities={busStandAmenities} />
    </main>
  );
}
