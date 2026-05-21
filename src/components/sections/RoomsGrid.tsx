'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, Maximize } from 'lucide-react';
import { fetchAvailability, PROPERTY_ID } from '@/services/api';
import { buildBookingEngineUrl } from '@/lib/hotelmate-availability';

interface RoomData {
  id: number;
  name: string;
  description?: string;
  roomOnlyPrice?: number;
  maxAdult?: number;
  maxChildren?: number;
  maximumOccupancy?: number;
  size?: number;
  imageList?: { url: string }[];
}

export default function RoomsGrid() {
  const [dynamicRooms, setDynamicRooms] = useState<RoomData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const pad = (n: number) => String(n).padStart(2, "0");
    const fromDate = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    const toDate = `${tomorrow.getFullYear()}-${pad(tomorrow.getMonth() + 1)}-${pad(tomorrow.getDate())}`;

    fetchAvailability(PROPERTY_ID, fromDate, toDate)
      .then(data => {
        if (data && data.roomList) {
          setDynamicRooms(data.roomList);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load rooms:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-pulse flex space-x-2">
              <div className="w-3 h-3 bg-gold rounded-full"></div>
              <div className="w-3 h-3 bg-gold rounded-full delay-75"></div>
              <div className="w-3 h-3 bg-gold rounded-full delay-150"></div>
            </div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 ${dynamicRooms.length === 1 ? 'lg:grid-cols-1 max-w-2xl mx-auto' : dynamicRooms.length === 2 ? 'lg:grid-cols-2 max-w-[1100px] mx-auto' : 'lg:grid-cols-3'} gap-12`}>
            {dynamicRooms.map((room, i) => {
              const imageUrl = room.imageList && room.imageList.length > 0 ? room.imageList[0].url : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=95';
              const description = room.description ? room.description.replace(/<[^>]*>?/gm, '') : '';
              
              return (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden border border-gold/10 mb-6">
                    <Image
                      src={imageUrl}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-cream/90 px-3 py-1 rounded-sm">
                      <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-gold">
                        {room.name.toLowerCase().includes('suite') ? 'suite' : 'deluxe'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-display text-3xl italic text-forest mb-2">{room.name}</h3>
                    <p className="font-serif text-base text-taupe/70 italic mb-6 leading-relaxed line-clamp-3">
                      {description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-8 text-taupe/60">
                      <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                        <Maximize size={12} className="text-gold" /> {room.size || 45} m²
                      </span>
                      <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest">
                        <Users size={12} className="text-gold" /> Up to {room.maximumOccupancy || (room.maxAdult ? (room.maxAdult + (room.maxChildren || 0)) : 2)} Guests
                      </span>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gold/10 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-gold/60 mb-0.5">From</span>
                        <span className="font-serif text-xl text-forest">
                          {room.roomOnlyPrice
                            ? `₹${room.roomOnlyPrice.toLocaleString()}`
                            : 'Contact for price'}
                          <span className="text-sm opacity-50 ml-1">/nt</span>
                        </span>
                      </div>
                      <a
                        href={(() => {
                          const today = new Date();
                          const tomorrow = new Date(today);
                          tomorrow.setDate(tomorrow.getDate() + 1);
                          return buildBookingEngineUrl({
                            baseUrl: 'https://bookone.io/Hotel-Shravan-Royal-Inn',
                            checkIn: today,
                            checkOut: tomorrow,
                            adults: room.maximumOccupancy || room.maxAdult || 2,
                            rooms: 1,
                          });
                        })()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-forest hover:text-gold transition-colors duration-300"
                      >
                        Book Now <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
