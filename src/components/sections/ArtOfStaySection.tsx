'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

const serviceDetails = [
  { title: 'Cozy Bedding', description: 'Enjoy clean, soft linens and premium pillows in every cottage, ensuring a perfect night of sleep.' },
  { title: 'Local Sightseeing', description: 'Our team helps plan trails to the Ajodhya Hills & Forest Reserve, Thurga Dam, and Deulghata Temples.' },
  { title: 'Quiet Forest Stays', description: 'Enjoy a peaceful, secure setting in the heart of the forest atop Ajodhya Hill, ideal for families and nature lovers.' },
  { title: 'Farm-to-Table Dining', description: 'Savour fresh veg thalis from our organic farm, plus barbeque evenings and drinks at our hilltop seating area.' },
];

export default function ArtOfStaySection() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32 border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
           <div>
              <SectionLabel className="mb-6">Our Standards</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                A Family Forest Stay Above Ajodhya Hill
              </h2>
              <GoldDivider className="mb-10" />
              <p className="font-serif text-xl text-taupe italic mb-12 leading-relaxed">
                True hospitality is found in the essential details that make you feel at home. It is the spotless cleanliness of your room, the seamless connectivity of our Wi-Fi, and a helpful team ready to assist you at any hour.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {serviceDetails.map((item, i) => (
                  <motion.div 
                    key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group"
                >
                  <h3 className="font-serif text-2xl text-forest italic mb-4 group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h3>
                  <div className="h-px bg-gold/30 w-12 mb-4 group-hover:w-full transition-all duration-700" />
                  <p className="font-sans text-sm text-taupe/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
