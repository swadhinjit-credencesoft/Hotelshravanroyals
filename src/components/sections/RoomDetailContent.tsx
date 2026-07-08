'use client';

import { Room } from '@/lib/rooms';
import CinematicHero from '@/components/ui/CinematicHero';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface RoomDetailContentProps {
  room: Room;
}

export default function RoomDetailContent({ room }: RoomDetailContentProps) {
  const roomImages = room.images.length > 0 ? room.images : [room.image];

  return (
    <main className="bg-cream min-h-screen">
      
      <CinematicHero 
        label={room.category}
        title={room.name}
        tagline={room.tagline}
        image={room.image}
      />

      <section className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
             {/* Left: Details */}
             <div>
                <SectionLabel className="mb-6">The Experience</SectionLabel>
                <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                   A Sanctuary Built <br /> Around You
                </h2>
                <GoldDivider className="mb-10" />
                
                <div className="flex gap-12 mb-12">
                   <div className="flex flex-col">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-gold mb-2">Space</span>
                       <span className="font-serif text-2xl text-forest">{room.size} m²</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-gold mb-2">Occupancy</span>
                      <span className="font-serif text-2xl text-forest">{room.guests} Guests</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="font-sans text-[10px] uppercase tracking-widest text-gold mb-2">Category</span>
                      <span className="font-serif text-2xl text-forest capitalize">{room.category}</span>
                   </div>
                </div>

                <p className="font-serif text-xl text-taupe italic mb-12 leading-relaxed">
                   Every inch of {room.name} has been curated to promote deep restoration. From the acoustics of the walls to the texture of the linen, we prioritize your peace above all else.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                   {room.amenities.map((amenity) => (
                     <div key={amenity} className="flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-gold/60" />
                        <span className="font-sans text-sm text-forest/80 uppercase tracking-wide">{amenity}</span>
                     </div>
                   ))}
                </div>

                <div className="flex items-center gap-8">
                   <div className="flex flex-col">
                      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-gold mb-1">Starting from</span>
                       <span className="font-serif text-4xl text-forest">₹{room.price.toLocaleString()}<span className="text-base text-taupe/60 ml-2">/ night</span></span>
                   </div>
                    <a 
                      href="https://bookone.io/Hotel-Bella-Casa?bookingEngine=true"
                      onClick={() => { try { window.gtag?.('event', 'booking_start', { 'event_category': 'booking', 'event_label': room.name }); } catch {} } }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.2em] px-12 py-5 rounded-sm hover:bg-gold-light transition-all flex items-center gap-3 shadow-warm-lg"
                    >
                       Book Your Stay <ArrowRight size={14} />
                    </a>
                </div>
             </div>

             {/* Right: Gallery/Images */}
             <div className="space-y-8">
                <div className="relative aspect-[4/3] overflow-hidden border border-gold/10">
                   <Image 
                     src={roomImages[0]} 
                     alt={`${room.name} at Hotel Surya Bella Casa Purnea - Best Room Near Bus Stand`} 
                     fill 
                     priority
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     className="object-cover"
                   />
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                   {roomImages.slice(1).map((image) => (
                     <div key={image} className="relative h-40 w-56 flex-shrink-0 overflow-hidden border border-gold/10">
                        <Image 
                          src={image} 
                          alt={`${room.name} - Hotel Surya Bella Casa Purnea Near Bus Stand`} 
                          fill 
                          sizes="224px"
                          className="object-cover"
                        />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-forest py-48 relative overflow-hidden">
         <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center relative z-10">
            <SectionLabel light className="justify-center mb-8">The Philosophy</SectionLabel>
            <h2 className="font-display text-5xl md:text-8xl italic text-ivory mb-12">Architecture <br /> of Silence</h2>
            <p className="font-serif text-xl md:text-2xl italic text-ivory/70 max-w-3xl mx-auto leading-relaxed">
               &ldquo;We don&apos;t just provide a room; we provide a frame for the horizon. Our architecture is designed to disappear, leaving you alone with the forest and the sea.&rdquo;
            </p>
         </div>
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image 
               src='/images/exterior4.jpeg' 
               alt="Hotel Surya Bella Casa Purnea - Best Hotel in Purnea Near Bus Stand" 
               fill 
               sizes="100vw"
               className="object-cover mix-blend-overlay"
            />
         </div>
      </section>

    </main>
  );
}
