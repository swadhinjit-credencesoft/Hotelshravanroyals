'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is Hotel Surya Bella Casa located in Purnia?",
    answer: "Hotel Surya Bella Casa is centrally located at Suryalok Complex, Opposite Vikass Market, Near the main Bus Stand, Purnia, Bihar 854301, India. Our prime location offers quick access to the main transit points and business hubs."
  },
  {
    question: "How far is the hotel from Purnea Junction Railway Station?",
    answer: "The hotel is approximately 6.1 km away from Purnea Junction Railway Station. You can easily find local auto-rickshaws, cycle-rickshaws, and e-rickshaws outside the station to reach our hotel in about 15 minutes."
  },
  {
    question: "Is Hotel Surya Bella Casa a family-friendly hotel?",
    answer: "Yes, we are a family-oriented hotel in Purnia. We offer clean, secure, and spacious AC and Non-AC accommodations, and a peaceful environment suitable for guests traveling with children and elder family members."
  },
  {
    question: "Is pure vegetarian food available at the hotel?",
    answer: "We focus on a pure vegetarian stay experience. Guests can easily order vegetarian delicacies from popular local partner restaurants in Purnia via Swiggy and Zomato directly to their rooms. Please note that non-vegetarian food is strictly prohibited on our premises to respect the preferences of our guests."
  },
  {
    question: "What are the room categories available at Hotel Surya Bella Casa?",
    answer: "We offer 4 distinct room categories to suit all budgets: Super Deluxe Rooms, Deluxe AC Rooms, Deluxe Non-AC Rooms, and Standard Non-AC Rooms. All rooms are well-maintained and equipped with essential amenities."
  },
  {
    question: "Do the rooms have air conditioning (AC) and geysers?",
    answer: "Yes, our Super Deluxe and Deluxe AC Rooms are fully air-conditioned. Every bathroom is fitted with a modern geyser to provide continuous hot water for our guests' comfort."
  },
  {
    question: "Is there free high-speed Wi-Fi at the hotel?",
    answer: "Yes, we provide complimentary high-speed Wi-Fi to all our guests. This is available in all rooms and public spaces, making our hotel highly suitable for corporate and business travelers."
  },
  {
    question: "Is there lift or elevator access at the hotel?",
    answer: "Yes, Hotel Surya Bella Casa is equipped with a modern elevator/lift, ensuring easy and comfortable access to all floors for elderly guests, families with children, and heavy luggage."
  },
  {
    question: "Do you have dedicated parking on-site?",
    answer: "Yes, we have secure, dedicated on-site parking spaces available for all guest vehicles free of charge during their stay."
  },
  {
    question: "What are the check-in and check-out timings?",
    answer: "Our standard check-in time is 12:00 PM, and check-out time is 12:00 PM. Early check-in or late check-out requests can be accommodated based on room availability and prior coordination."
  },
  {
    question: "How can I book a room at Hotel Surya Bella Casa?",
    answer: "You can book directly on our website using our integrated secure Booking Engine (powered by BookOne), call our concierge at +91 9835923601, or message us on WhatsApp for instant confirmation."
  },
  {
    question: "Are sweet shops and local markets nearby?",
    answer: "Yes, being located right opposite Vikass Market and in the central Suryalok Complex, you are steps away from Purnia's famous sweet shops, clothing stores, and daily markets."
  },
  {
    question: "Do you offer laundry and room service?",
    answer: "Yes, we offer 24/7 dedicated room service, daily housekeeping, newspaper services, and local laundry support on request to ensure a highly comfortable stay."
  },
  {
    question: "Is the hotel safe for solo female and corporate travelers?",
    answer: "Absolutely. Security is our top priority. The hotel has 24/7 CCTV surveillance, a secure locked facility, and professional staff to ensure a completely safe environment for solo female, business, and family guests."
  },
  {
    question: "What historical attractions can we visit near Purnia?",
    answer: "Guests can visit the revered Kali Mandir (5 mins drive), the historic Puran Devi Temple (10 mins drive), or the ancient Jalalgarh Fort located just 25 minutes away."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream py-32 overflow-hidden border-t border-gold/10" id="faq-section">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="text-center mb-20">
          <SectionLabel className="justify-center mb-6">Got Questions?</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-6">
            Frequently Asked Questions
          </h2>
          <GoldDivider className="justify-center mb-6" />
          <p className="font-serif text-xl font-light text-taupe max-w-xl mx-auto leading-relaxed">
            Everything you need to know about your comfortable stay in central Purnia, Bihar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-white border border-gold/10 rounded-sm shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-1 focus:ring-gold"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-button-${i}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-gold flex-shrink-0" />
                    <span className="font-serif text-lg md:text-xl text-forest font-medium leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-button-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gold/5">
                        <p className="font-sans text-base text-taupe/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
