'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import Image from 'next/image';

export default function NewsletterSection() {
  return (
    <section className="relative py-48 overflow-hidden text-center" id="contact">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/images/exterior7.jpeg'
          alt="Inn at twilight"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest/20 to-forest" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-gold mb-8 block">
            Begin Your Journey
          </span>
          <h2 className="font-display text-5xl md:text-[84px] italic text-ivory mb-8 leading-none">
            The Inn Awaits
          </h2>
          <p className="font-serif text-xl md:text-2xl font-light text-ivory/60 mb-16 max-w-2xl mx-auto leading-relaxed">
            Exclusive offers, seasonal menus, and stories from the inn — delivered to your inbox with the same discretion we afford our guests.
          </p>

          <div className="mt-24 pt-16 border-t border-ivory/10">
            <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-4">
              Direct Inquiries
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-serif text-3xl md:text-5xl italic text-ivory hover:text-gold transition-colors duration-500"
            >
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
