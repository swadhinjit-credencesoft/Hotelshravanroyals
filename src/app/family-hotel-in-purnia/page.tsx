import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import { Star, Calendar, Shield, Users, Heart } from 'lucide-react';

export const metadata = {
  title: 'Family Hotel in Purnia | Hotel Surya Bella Casa',
  description: 'Looking for a safe, comfortable family hotel in Purnia? Hotel Surya Bella Casa offers spacious rooms, lift access, and peaceful environments for family stays.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/family-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Family Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'Looking for a safe, comfortable family hotel in Purnia? Hotel Surya Bella Casa offers spacious rooms, lift access, and peaceful environments for family stays.',
    url: 'https://hotelsuryabellacasa.com/family-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Family Hotel in Purnia - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'Spacious rooms, lift access, and peaceful environments for family stays in Purnia.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function FamilyHotelLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label="Safe Family Travel"
        title="Family Hotel in Purnia"
        tagline="Create warm memories in comfort. We offer clean, secure accommodations designed with family safety and convenience in mind."
        image='https://bookonelocal.in/cdn/IMG_3764.avif'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Family Comfort</SectionLabel>
            <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              A Warm, Safe & Comfortable Haven for Families in Purnia
            </h1>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                Traveling with family, children, or elderly parents requires a hotel that understands care, safety, and hygiene. <strong>Hotel Surya Bella Casa</strong> prides itself on being Purnia&apos;s premier family-friendly stay.
              </p>
              <p>
                We focus on offering a peaceful, alcohol-free, and wholesome environment where families can truly relax. Our pure vegetarian guidelines guarantee a respectful atmosphere, and we provide seamless food delivery coordination from top-rated local restaurants.
              </p>
              <p>
                Equipped with modern amenities including air conditioning, flat screen TVs, geysers, and most importantly—a <strong>modern lift/elevator</strong>, we ensure elder family members face no difficulty during their stay.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Shield className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">24/7 Security</h3>
                <p className="font-sans text-sm text-taupe/70">Continuous monitoring, backup power, and attentive staff ensuring total family safety.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Users className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Spacious Rooms</h3>
                <p className="font-sans text-sm text-taupe/70">Super Deluxe and Deluxe AC rooms offering enough space for couples and kids.</p>
              </div>
              <div className="bg-white p-6 border border-gold/10 rounded-sm text-center">
                <Heart className="text-gold mx-auto mb-4" size={32} />
                <h3 className="font-serif text-lg font-bold text-forest mb-2">Pure Veg Ethos</h3>
                <p className="font-sans text-sm text-taupe/70">A completely pure and peaceful local family environment without any disruption.</p>
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
              <h3 className="font-display text-3xl italic mb-6">Plan Your Family Stay</h3>
              <p className="font-serif text-ivory/80 leading-relaxed mb-8">
                Reserve well-appointed family rooms with lift access and dedicated concierge services near the Bus Stand.
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
