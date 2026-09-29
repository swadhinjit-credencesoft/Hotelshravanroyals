import HeroSection from '@/components/sections/HeroSection';
import BrandStatement from '@/components/sections/BrandStatement';
import RoomsCarousel from '@/components/sections/RoomsCarousel';
import ParallaxDivider from '@/components/sections/ParallaxDivider';
import DiningSection from '@/components/sections/DiningSection';
import ExperiencesGrid from '@/components/sections/ExperiencesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import HistorySection from '@/components/sections/HistorySection';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import ArtOfStaySection from '@/components/sections/ArtOfStaySection';
import FAQSection from '@/components/sections/FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Divine Oasis | Forest Resort at Ajodhya Hill, Purulia',
  description:
    'The Divine Oasis is a tranquil forest resort nestled atop Ajodhya Hill in Purulia, West Bengal. Stay in premium mud cottages and luxury suites surrounded by nature, with organic farm dining, barbeque evenings, and serene hilltop views. Book direct and save!',
  alternates: {
    canonical: 'https://thedivineoasisresort.com/',
  },
  keywords: [
    'resort in Purulia',
    'best resort in Purulia near Ajodhya Hill',
    'The Divine Oasis',
    'forest resort Ajodhya Hill',
    'mud cottage resort Purulia',
    'family resort Purulia',
    'corporate resort Purulia',
    'book resort Purulia',
    'best resort West Bengal',
  ],
};

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen" id="main-content">
      
      {/* Organization schema is defined in root layout.tsx */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is The Divine Oasis located in Purulia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis is located at 643G+4Q, Hilltop, Ajodhya, Purulia, West Bengal 723152, India, perched atop Ajodhya Hill within the Ajodhya Hills & Forest Reserve."
                }
              },
              {
                "@type": "Question",
                "name": "How far is the resort from Purulia Junction Railway Station?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis is approximately 42.6 km from Purulia Junction Railway Station, around a 60-70 minute drive through the scenic Purulia hills."
                }
              },
              {
                "@type": "Question",
                "name": "Is The Divine Oasis a family-friendly resort?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, The Divine Oasis is fully family-friendly with spacious family rooms (VISTA Four Beds), a safe hilltop environment, and 24/7 staff assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Is pure vegetarian food available at the resort?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, The Divine Oasis serves fresh organic vegetarian meals (veg thali) from our own farm-to-table kitchen. Non-vegetarian food is not permitted on the property premises."
                }
              },
              {
                "@type": "Question",
                "name": "What are the cottage categories available at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Divine Oasis offers 4 cottage categories: Premium Deluxe Mud Cottages (₹4,255/night), Luxury Suite Cottage (₹7,225/night), VISTA Four Beds (₹6,500/night), and Vista Pod Cottage (₹4,000/night)."
                }
              },
              {
                "@type": "Question",
                "name": "What are the check-in and check-out timings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check-in time is 1:00 PM and check-out time is 11:00 AM."
                }
              },
              {
                "@type": "Question",
                "name": "Is there free high-speed Wi-Fi at the resort?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, complimentary high-speed Wi-Fi is available throughout the property for all guests."
                }
              },
              {
                "@type": "Question",
                "name": "Is there dedicated parking available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, secure and complimentary dedicated parking facilities are available on-site for guests."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book a stay at The Divine Oasis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book directly at https://bookone.io/The-Divine-Oasis?bookingEngine=true or call +91 99039 89950. Direct booking guarantees the best rate."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "The Divine Oasis Ajodhya Hill - Virtual Tour",
            "description": "Video tour of The Divine Oasis, forest resort atop Ajodhya Hill in Purulia, West Bengal. See premium mud cottages, luxury suites, organic farm dining, and hilltop views.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
            "contentUrl": "https://bookonelocal.in/cdn/2026-05-13-064432393-WhatsApp Image 2026-05-11 at 15.42.15.jpg",
            "embedUrl": "https://thedivineoasisresort.com",
            "uploadDate": "2026-05-13",
            "duration": "PT30S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://thedivineoasisresort.com"
            }
          })
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Brand Statement */}
      <BrandStatement />

      {/* History & Legacy */}
      <HistorySection />

      {/* The Art of the Stay */}
      <ArtOfStaySection />

      {/* Rooms & Suites Carousel */}
      <RoomsCarousel />

      {/* Parallax Quote Divider */}
      <ParallaxDivider />

      {/* Dining Section */}
      <DiningSection />

      {/* Experiences Bento Grid */}
      <ExperiencesGrid />

      {/* Luxury Amenities */}
      <LuxuryAmenities />

      {/* Awards Marquee */}
      <AwardsMarquee />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section with Lightbox */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

    </main>
  );
}
