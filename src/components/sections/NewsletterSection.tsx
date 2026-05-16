'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { Check, Loader2 } from 'lucide-react';
import Image from 'next/image';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export default function NewsletterSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    setStatus('loading');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus('success');
    reset();
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="relative py-48 overflow-hidden text-center" id="contact">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=2400&q=95"
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

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold border border-gold/20">
                  <Check size={32} />
                </div>
                <p className="font-serif text-2xl italic text-ivory">
                  Thank you. We look forward to sharing our world with you.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
              >
                <div className="w-full relative group">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Inquire with your email"
                    className={`w-full bg-ivory/5 border-b border-ivory/20 px-6 py-5 font-sans text-sm tracking-widest text-ivory placeholder-ivory/30 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                      errors.email ? 'border-red-400' : 'focus:border-gold group-hover:border-ivory/40'
                    }`}
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <span className="absolute -bottom-6 left-0 text-[10px] uppercase tracking-widest text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto bg-gold text-[#1a1004] font-sans text-[11px] uppercase tracking-[0.25em] px-12 py-5 transition-all duration-500 hover:bg-gold-light disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> ...
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

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
