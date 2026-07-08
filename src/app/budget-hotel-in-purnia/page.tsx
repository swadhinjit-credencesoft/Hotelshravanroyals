import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { Star, Calendar, ShieldCheck, DollarSign, Sparkles, ArrowRight } from 'lucide-react';

const budgetAmenities: AmenityItem[] = [
  { icon: 'DollarSign', title: 'Best Price Guarantee', description: 'We actively match or beat competitor rates for comparable rooms in Purnia. No hidden charges, no surprises.' },
  { icon: 'Sparkles', title: 'Immaculate Housekeeping', description: 'Daily professional cleaning with fresh linens, sanitized bathrooms, and spotless common areas.' },
  { icon: 'ShieldCheck', title: 'No Hidden Fees', description: 'What you see is what you pay. Transparent pricing with no resort fees or surprise add-ons at check-in.' },
  { icon: 'BadgePercent', title: 'Weekly & Monthly Discounts', description: 'Extended stay discounts for travelers, construction professionals, and medical visitors.' },
  { icon: 'Headphones', title: '24/7 Front Desk', description: 'Round-the-clock assistance for late check-ins, early departures, and any guest requests.' },
  { icon: 'Calendar', title: 'Flexible Booking Options', description: 'Free cancellation up to 48 hours. Easy online booking with instant confirmation.' },
];

export const metadata = {
  title: 'Budget Hotel in Purnia',
  description: 'Looking for a budget hotel in Purnia? Hotel Surya Bella Casa offers affordable AC and Non-AC rooms near Bus Stand Purnea. Free WiFi, parking, room service. Best budget hotel near Vikass Market. Book direct for lowest rates.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/budget-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Budget Hotel in Purnia | Affordable Rooms Near Bus Stand Purnea',
    description: 'Best budget hotel near Bus Stand Purnea. AC/Non-AC rooms with free WiFi, parking, 24/7 service. Located opposite Vikass Market. Book affordable hotel in Purnia now.',
    url: 'https://hotelsuryabellacasa.com/budget-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3784.avif', width: 1200, height: 630, alt: 'Budget Hotel in Purnia - Hotel Surya Bella Casa Purnea - Affordable Hotel Near Bus Stand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Hotel in Purnia | Hotel Surya Bella Casa Purnea',
    description: 'Affordable hotel rooms in Purnia near Bus Stand with free WiFi and parking. Best budget hotel near Vikass Market.',
    images: ['https://bookonelocal.in/cdn/IMG_3784.avif'],
  },
};

export default function BudgetHotelLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Budget Hotel in Purnia", "item": "https://hotelsuryabellacasa.com/budget-hotel-in-purnia" }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Best Budget Hotel Near Bus Stand Purnea"
        title="Budget Hotel in Purnia - Affordable Rooms with Free WiFi & Parking"
        tagline="Looking for an affordable hotel in Purnia? Hotel Surya Bella Casa offers clean AC and Non-AC rooms near Bus Stand Purnea. Free WiFi, parking, lift access, and 24/7 room service at the best prices."
        image='https://bookonelocal.in/cdn/IMG_3784.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Pocket-Friendly Stay</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Affordable Luxury & Clean Accommodations in Central Purnia
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Who says budget stays can&apos;t feel premium? At <strong>Hotel Surya Bella Casa</strong>, we believe in providing exceptionally high value at affordable rates.
              </p>
              <p>
                Our room selection includes <Link href="/rooms" className="text-gold hover:underline">Standard and Deluxe options</Link> (both AC and Non-AC) to cater perfectly to solo budget travelers, medical reps, sales agents, and groups. Check our <Link href="/offers" className="text-gold hover:underline">budget-friendly packages</Link> for the best deals.
              </p>
              <p>
                Unlike generic budget guest houses, we do not compromise on key elements: we feature a secure property, elevator/lift access, 24/7 power backup, complimentary high-speed Wi-Fi, and sparkling clean washrooms.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <DollarSign className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Honest Pricing</h3>
                <p className="font-sans text-sm text-taupe/70">Highly competitive and transparent room rates with zero hidden check-in fees.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Sparkles className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Spotless Rooms</h3>
                <p className="font-sans text-sm text-taupe/70">Continuous room service and high standards of cleanliness across all our budget categories.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <ShieldCheck className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Essential Conveniences</h3>
                <p className="font-sans text-sm text-taupe/70">AC options, hot water geysers, high-speed Wi-Fi, elevator access, and secure parking.</p>
              </div>
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
              <h3 className="font-display text-3xl italic mb-6">Book Budget Friendly</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve well-appointed budget rooms with secure parking and high-speed Wi-Fi near the Bus Stand.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Options in Purnia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/hotel-near-purnia-bus-stand', label: 'Hotel Near Bus Stand' },
            { href: '/hotel-near-vikass-market', label: 'Hotel Near Vikass Market' },
            { href: '/family-hotel-in-purnia', label: 'Family Hotel in Purnia' },
            { href: '/business-hotel-in-purnia', label: 'Business Hotel in Purnia' },
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

      <LuxuryAmenities label="Budget-Friendly Features" heading="Maximum Value, Minimum Spend" amenities={budgetAmenities} />
    </main>
  );
}
