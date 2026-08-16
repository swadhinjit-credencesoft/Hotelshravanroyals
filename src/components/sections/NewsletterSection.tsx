'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function NewsletterSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden text-center" id="contact">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src='/images/exterior7.jpeg'
          alt="Inn at twilight"
          fill
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest/20 to-forest" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-gold mb-6 block">
            Begin Your Journey
          </span>
          <h2 className="font-display text-5xl md:text-[72px] italic text-ivory mb-6 leading-none">
            The Inn Awaits
          </h2>
          <p className="font-serif text-lg md:text-xl font-light text-ivory/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Exclusive offers, seasonal menus, and stories from the inn — delivered to your inbox with the same discretion we afford our guests.
          </p>

          <div className="pt-10 border-t border-ivory/10">
            <p className="font-sans text-[11px] uppercase tracking-widest text-gold mb-3">
              Direct Inquiries
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-serif text-xl md:text-3xl italic text-ivory hover:text-gold transition-colors duration-500 block leading-tight"
            >
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-5 font-sans text-[11px] uppercase tracking-[0.3em] text-gold hover:text-gold-light transition-colors"
            >
              <MapPin size={14} />
              Contact & Directions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
