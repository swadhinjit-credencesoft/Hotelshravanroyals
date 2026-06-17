import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import { Star, Calendar, ShieldCheck, DollarSign, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Budget Hotel in Purnia | Hotel Surya Bella Casa',
  description: 'Looking for a budget hotel in Purnia? Hotel Surya Bella Casa offers comfortable AC and Non-AC rooms at affordable prices without compromising quality.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/budget-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Budget Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'Looking for a budget hotel in Purnia? Hotel Surya Bella Casa offers comfortable AC and Non-AC rooms at affordable prices without compromising quality.',
    url: 'https://hotelsuryabellacasa.com/budget-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3784.avif', width: 1200, height: 630, alt: 'Budget Hotel in Purnia - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'Comfortable AC and Non-AC rooms at affordable prices in Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3784.avif'],
  },
};

export default function BudgetHotelLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label="Affordable Comfort"
        title="Budget Hotel in Purnia"
        tagline="Exceptional value for your money. Experience cozy beds, modern lift access, and continuous power backup at competitive prices."
        image='https://bookonelocal.in/cdn/IMG_3784.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Pocket-Friendly Stay</SectionLabel>
            <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Affordable Luxury & Clean Accommodations in Central Purnia
            </h1>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Who says budget stays can&apos;t feel premium? At <strong>Hotel Surya Bella Casa</strong>, we believe in providing exceptionally high value at affordable rates.
              </p>
              <p>
                Our room selection includes Standard and Deluxe options (both AC and Non-AC) to cater perfectly to solo budget travelers, medical reps, sales agents, and groups.
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

      <LuxuryAmenities />
    </main>
  );
}
