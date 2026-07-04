'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

const serviceDetails = [
  { title: 'Cozy Bedding', description: 'Enjoy clean, soft linens and premium pillows in every room, ensuring a perfect night of sleep.' },
  { title: 'Local Sightseeing', description: 'Our desk helps coordinate local transport and routes to Kali Mandir, Puran Devi, and historic monuments.' },
  { title: 'Quiet Safe Stays', description: 'Enjoy a peaceful and secure environment opposite Vikass Market, ideal for business travelers.' },
  { title: 'Pure Veg Ordering', description: 'Easily order vegetarian delicacies from top local restaurants directly to your room via partner apps.' },
];

export default function ArtOfStaySection() {
  return (
    <section className="bg-cream py-32 border-t border-gold/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <SectionLabel className="mb-6">Our Standards</SectionLabel>
              <h2 className="font-display text-4xl md:text-6xl italic text-forest mb-8 leading-tight">
                The Art of <br /> the Stay
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
