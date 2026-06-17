import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import { MapPin, Star, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Hotel Near Purnia Bus Stand | Hotel Surya Bella Casa',
  description: 'Looking for a hotel near Purnia Bus Stand? Hotel Surya Bella Casa is located opposite Vikass Market, offering clean, affordable rooms with 24/7 service.',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/hotel-near-purnia-bus-stand',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    title: 'Hotel Near Purnia Bus Stand | Hotel Surya Bella Casa',
    description: 'Looking for a hotel near Purnia Bus Stand? Hotel Surya Bella Casa is located opposite Vikass Market, offering clean, affordable rooms with 24/7 service.',
    url: 'https://hotelsuryabellacasa.com/hotel-near-purnia-bus-stand',
    siteName: 'Hotel Surya Bella Casa',
    type: 'website',
    images: [{ url: 'https://bookonelocal.in/cdn/IMG_3815.avif', width: 1200, height: 630, alt: 'Hotel Near Purnia Bus Stand - Hotel Surya Bella Casa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Near Purnia Bus Stand | Hotel Surya Bella Casa',
    description: 'Clean, affordable rooms near Purnia Bus Stand with 24/7 service.',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif'],
  },
};

export default function PurniaBusStandLandingPage() {
  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label="Strategic Location"
        title="Hotel Near Purnia Bus Stand"
        tagline="Step off the bus and into absolute comfort. Hotel Surya Bella Casa is situated just minutes from Purnia&apos;s primary bus terminus."
        image='https://bookonelocal.in/cdn/IMG_7424.mp4'
      />

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <SectionLabel className="mb-6">Local Advantage</SectionLabel>
            <h1 className="font-display text-4xl md:text-5xl italic text-forest mb-8 leading-tight">
              Comfortable Lodging Just Steps Away From Purnia Bus Stand
            </h1>
            <GoldDivider className="mb-8" />
            
            <div className="font-sans text-base text-taupe/80 space-y-6 leading-loose">
              <p>
                When traveling to Purnia, proximity to the primary transit point is crucial. <strong>Hotel Surya Bella Casa</strong> offers an unmatched geographic advantage, situated just a stone&apos;s throw from the main <strong>Purnia Bus Stand</strong>.
              </p>
              <p>
                Perfect for transit travelers, corporate executives, and visiting families, our hotel eliminates the stress of long commutes inside Purnia. Located opposite the iconic Vikass Market in Suryalok Complex, you are connected immediately to local dining, sweets, and business centers.
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

      <LuxuryAmenities />
    </main>
  );
}
