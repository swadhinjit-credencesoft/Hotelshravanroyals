import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import { Star, Calendar, Laptop, Wifi, Shield } from 'lucide-react';

export const metadata = {
  title: 'Business Hotel in Purnia | Hotel Surya Bella Casa',
  description: 'Searching for a corporate or business hotel in Purnia? Hotel Surya Bella Casa offers high-speed Wi-Fi, desk space, and central access near Purnia Bus Stand.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/business-hotel-in-purnia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Business Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'Searching for a corporate or business hotel in Purnia? Hotel Surya Bella Casa offers high-speed Wi-Fi, desk space, and central access near Purnia Bus Stand.',
    url: 'https://hotelsuryabellacasa.com/business-hotel-in-purnia',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Business Hotel in Purnia - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Hotel in Purnia | Hotel Surya Bella Casa',
    description: 'High-speed Wi-Fi, desk space, and central access near Purnia Bus Stand.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function BusinessHotelLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label="Corporate Stay"
        title="Business Hotel in Purnia"
        tagline="Maximize your business trip efficiency. Seamless connectivity, clean workspaces, and absolute peace of mind in central Purnia."
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
                Situated opposite Vikass Market in central Suryalok Complex, we put you minutes away from the administrative, commercial, and banking hubs of Bhatta Bazar and Purnia town.
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

      <LuxuryAmenities />
    </main>
  );
}
