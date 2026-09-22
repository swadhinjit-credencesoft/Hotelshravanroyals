'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import GoldDivider from '@/components/ui/GoldDivider';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is The Divine Oasis located?",
    answer: "The Divine Oasis is located at 643G+4Q, Hilltop, Ajodhya, Purulia, West Bengal 723152, at the top of Ajodhya Hill. We are just 0.4 km from the Ajodhya Hills &amp; Forest Reserve, surrounded by dense forest and serene hilltop views."
  },
  {
    question: "How far is the resort from Purulia Junction Railway Station?",
    answer: "The Divine Oasis is approximately 42.6 km from Purulia Junction Railway Station. You can easily find local taxis and cabs to reach the resort, and Barabhum (38.5 km) connects guests coming from the Jharkhand side."
  },
  {
    question: "What are the nearby attractions and their distances?",
    answer: "Ajodhya Hills &amp; Forest Reserve is 0.4 km away, Thurga Dam is 13.8 km, Deulghata Temples are 33.7 km, and Barabhum is 38.5 km from the resort."
  },
  {
    question: "Is The Divine Oasis a family-friendly resort?",
    answer: "Yes, we are a family-oriented forest resort in Purulia. We offer family cottages, a safe and secure environment, and a peaceful setting suitable for guests traveling with children and elder family members."
  },
  {
    question: "What dining options are available at the resort?",
    answer: "We offer farm-to-table dining with fresh veg thalis prepared from our own organic farm, barbeque evenings at our barbeque stand, and drinks &amp; hors d'oeuvres served at our scenic seating areas."
  },
  {
    question: "What are the room categories available at The Divine Oasis?",
    answer: "We offer 4 cottage categories: Premium Deluxe Mud Cottages (from ₹4,255/night, 2-3 guests, 5 available), Luxury Suite Cottage (from ₹7,225/night, 2-5 guests, 1 available), Vista Four Beds (from ₹6,500/night, 4-6 guests, 4 available), and Vista Pod Cottage (from ₹4,000/night, 2-3 guests, 2 available)."
  },
  {
    question: "What amenities do the cottages come with?",
    answer: "Every cottage includes free Wi-Fi, flat screen TV, room service, geyser/hot water, 24-hour room service, and hand sanitizer. The resort also offers social events, family rooms, luggage storage, and a seating area."
  },
  {
    question: "Is there free Wi-Fi at the resort?",
    answer: "Yes, we provide complimentary high-speed Wi-Fi to all our guests across the property, so you stay connected while enjoying the serenity of the forest."
  },
  {
    question: "What are the check-in and check-out timings?",
    answer: "Our standard check-in time is 12:00 PM, and check-out time is 12:00 PM. Early check-in or late check-out requests can be accommodated based on availability and prior coordination."
  },
  {
    question: "How can I book a stay at The Divine Oasis?",
    answer: "You can book directly using our integrated secure Booking Engine at bookone.io/The-Divine-Oasis, call or WhatsApp us at +91 99039 89950, or email us at thedivineoasisresort@gmail.com for instant confirmation."
  },
  {
    question: "Do you host events at the resort?",
    answer: "Yes, we host social events, family gatherings, and celebrations. Our barbeque stand, seating areas, and family rooms make The Divine Oasis a lovely venue for memorable occasions amidst the forest."
  },
  {
    question: "Do you offer luggage storage?",
    answer: "Yes, baggage storage is available at the resort so you can explore Ajodhya Hill freely before check-in or after check-out."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-gold/10" id="faq-section">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionLabel className="justify-center mb-6">Got Questions?</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] italic text-forest mb-6">
            Resort Booking & Stay FAQs | The Divine Oasis Ajodhya Hill
          </h2>
          <GoldDivider className="justify-center mb-6" />
          <p className="font-serif text-xl font-light text-taupe max-w-xl mx-auto leading-relaxed">
            Everything you need to know about booking your stay at The Divine Oasis atop Ajodhya Hill. Best forest resort in Purulia for families and nature lovers.
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

                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 border-t border-gold/5">
                    <p className="font-sans text-base text-taupe/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
