import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { rooms } from '@/data/rooms';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { Check } from 'lucide-react';

export function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id);
  if (!room) return { title: 'Room Not Found' };

  return {
    title: `${room.name} | Unwind Karjat Resort`,
    description: `Stay in our ${room.name}. ${room.tagline} at Unwind Karjat.`,
  };
}

export default function RoomDetailsPage({ params }: { params: { id: string } }) {
  const room = rooms.find((r) => r.id === params.id);

  if (!room) {
    notFound();
  }

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      
      {/* Hero Image Lightbox style */}
      <div className="relative w-full h-[60vh] md:h-[80vh] mt-20">
        <Image 
          src={room.image}
          alt={room.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-[1600px] mx-auto text-white">
          <SectionLabel light className="mb-4">{room.category}</SectionLabel>
          <h1 className="font-display text-5xl md:text-7xl italic mb-4">{room.name}</h1>
          <p className="font-serif text-xl opacity-90 max-w-2xl">{room.tagline}</p>
        </div>
      </div>

      <section className="py-24 max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl italic text-forest mb-6">About the Room</h2>
            <p className="font-serif text-lg text-taupe leading-relaxed mb-10">
              Immerse yourself in luxury and tranquility. Our {room.name} offers a perfect blend of natural beauty and modern comfort, providing {room.guests} guests with a restorative stay amidst the beautiful Sahyadri landscape.
            </p>

            <h3 className="font-display text-2xl italic text-forest mb-6">Room Amenities</h3>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Check size={16} className="text-gold" />
                  <span className="font-sans text-sm text-taupe uppercase tracking-widest">{amenity}</span>
                </div>
              ))}
            </div>

            <GoldDivider className="mb-10" />

            {/* Policies Accordion Placeholder */}
            <div className="space-y-4">
              <h3 className="font-display text-2xl italic text-forest mb-6">Policies</h3>
              <p className="font-sans text-sm text-taupe leading-relaxed">
                Check-in: 1:00 PM <br/>
                Check-out: 11:00 AM <br/>
                Cancellation: Free cancellation up to 48 hours before check-in.
              </p>
            </div>
          </div>

          {/* Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white p-8 border border-gold/20 shadow-warm-lg text-center">
              <p className="font-sans text-[11px] uppercase tracking-widest text-taupe/60 mb-2">Starting from</p>
              <h3 className="font-serif text-4xl text-forest mb-6">₹{room.price}<span className="text-sm text-taupe/60">/night</span></h3>
              <ul className="text-left font-sans text-xs uppercase tracking-widest text-taupe/80 space-y-3 mb-8">
                <li className="flex justify-between border-b border-gold/10 pb-2"><span>Capacity:</span> <span>Up to {room.guests} Guests</span></li>
                <li className="flex justify-between border-b border-gold/10 pb-2"><span>Size:</span> <span>{room.size} sq m</span></li>
              </ul>
              <a href="/reservations" className="block w-full bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-light transition-colors">
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
