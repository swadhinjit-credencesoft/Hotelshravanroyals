import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities, { type AmenityItem } from '@/components/sections/LuxuryAmenities';
import Link from 'next/link';
import { Star, Calendar, Laptop, Wifi, Shield, ArrowRight } from 'lucide-react';

const businessAmenities: AmenityItem[] = [
  { icon: 'Laptop', title: 'Dedicated Work Desk', description: 'Spacious desk with ergonomic chair, task lighting, and convenient power outlets in select premium rooms.' },
  { icon: 'Wifi', title: 'Enterprise-Grade Wi-Fi', description: 'High-bandwidth fiber connection with backup link for uninterrupted video conferences and large file transfers.' },
  { icon: 'Printer', title: 'Business Support Services', description: 'Print, scan, and fax assistance available at the front desk for last-minute documentation needs.' },
  { icon: 'Shield', title: 'Express Check-In/Out', description: 'Pre-arranged billing and documentation for corporate travelers. Zero-wait departure process.' },
  { icon: 'Clock', title: 'Early Arrival Assistance', description: 'Early check-in and luggage hold service for morning train and bus arrivals to Purnia.' },
  { icon: 'Calendar', title: 'Corporate Billing', description: 'Simplified invoicing with GST compliance for corporate travel and reimbursements.' },
];

export const metadata = {
  title: 'Business Hotel in Purnia',
  description: 'Searching for a business hotel in Purnia? Hotel Surya Bella Casa offers high-speed Wi-Fi, work desk, conference facilities near Bus Stand Purnea. Best corporate hotel for executives with free parking. Book direct.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/business-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Business Hotel in Purnia | Near Bus Stand Purnea',
    description: 'Best business hotel near Purnea Bus Stand. High-speed WiFi, work desk, conference hall, free parking. Perfect for corporate travelers and executives.',
    url: 'https://hotelsuryabellacasa.com/business-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Business Hotel in Purnia - Corporate Stay Near Bus Stand - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Hotel in Purnia | Corporate Stay Near Bus Stand',
    description: 'Best business hotel in Purnia near Bus Stand with high-speed WiFi, conference hall, and free parking for corporate travelers.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function BusinessHotelLandingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "Business Hotel in Purnia", "item": "https://hotelsuryabellacasa.com/business-hotel-in-purnia" }
            ]
          })
        }}
      />

      <CinematicHero 
        label="Best Business Hotel Near Bus Stand Purnea"
        title="Business Hotel in Purnia - Corporate Stay with WiFi & Conference Hall"
        tagline="Looking for a business hotel in Purnia? Hotel Surya Bella Casa offers high-speed WiFi, dedicated work desks, conference hall, and free parking near Bus Stand Purnea. Perfect for corporate travelers."
        image='https://bookonelocal.in/cdn/IMG_3709.jpeg'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Corporate Comfort</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Seamless Efficiency & Peaceful Rest for Corporate Travelers
            </h2>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                A successful business trip requires a quiet environment, reliable amenities, and robust connectivity. <strong>Hotel Surya Bella Casa</strong> is specifically optimized to meet the high standards of Purnia&apos;s executive travelers.
              </p>
              <p>
                Situated opposite <Link href="/hotel-near-vikass-market" className="text-gold hover:underline">Vikass Market</Link> in central Suryalok Complex, we put you minutes away from the administrative, commercial, and banking hubs of Bhatta Bazar and Purnia town. For extended corporate stays, explore our <Link href="/offers" className="text-gold hover:underline">corporate packages</Link> and <Link href="/rooms" className="text-gold hover:underline">premium room options</Link>.
              </p>
              <p>
                With continuous power backup, dedicated working desks in our premium rooms, high-speed complimentary Wi-Fi, and quick checkout, we cater to all your corporate workflow requirements.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Laptop className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Dedicated Workspace</h3>
                <p className="font-sans text-sm text-taupe/70">Desk spaces in premium rooms to work without any distractions or discomfort.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Wifi className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Free High-Speed Wi-Fi</h3>
                <p className="font-sans text-sm text-taupe/70">Stay continuously connected for virtual meetings, emails, and corporate tasks.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Shield className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Express Checkout</h3>
                <p className="font-sans text-sm text-taupe/70">Timely assistance, transparent billing, and concierge coordination for instant transit.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Book Your Corporate Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Benefit from corporate tariffs, express check-in, secure parking, and clean rooms opposite Vikass Market.
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
        <h2 className="font-display text-3xl md:text-4xl italic text-forest mb-8">More Travel Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { href: '/hotel-near-purnia-bus-stand', label: 'Hotel Near Bus Stand' },
            { href: '/hotel-near-vikass-market', label: 'Hotel Near Vikass Market' },
            { href: '/family-hotel-in-purnia', label: 'Family Hotel in Purnia' },
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

      <LuxuryAmenities label="Corporate Essentials" heading="Built for the Business Traveler" amenities={businessAmenities} />
    </main>
  );
}
