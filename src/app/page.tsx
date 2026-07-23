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
  title: 'Hotel Surya Bella Casa Purnea | Best Near Bus Stand & Vikass Market',
  description:
    'Book Hotel Surya Bella Casa in Purnea near Bus Stand ✓ Free WiFi & Parking ✓ AC & Non-AC Rooms ✓ Banquet Hall ✓ 24/7 Room Service. Best hotel in Purnia, Bihar. Book Direct & Save!',
  alternates: {
    canonical: 'https://hotelsuryabellacasa.com/',
  },
  keywords: [
    'hotel in purnea',
    'best hotel in purnea near bus stand',
    'hotel surya bella casa',
    'luxury hotel purnia',
    'family hotel purnea',
    'business hotel purnia',
    'book hotel purnea',
    'best hotel bihar',
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
                "name": "Where is Hotel Surya Bella Casa located in Purnia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa is located at Suryalok Complex, Opposite Vikass Market, Near the main Bus Stand, Purnia, Bihar 854301, India."
                }
              },
              {
                "@type": "Question",
                "name": "How far is the hotel from Purnea Junction Railway Station?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa is approximately 6.1 km from Purnea Junction Railway Station, around a 15-minute drive."
                }
              },
              {
                "@type": "Question",
                "name": "Is Hotel Surya Bella Casa a family-friendly hotel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Hotel Surya Bella Casa is fully family-friendly with spacious rooms, a safe environment, elevator access, and 24/7 staff assistance."
                }
              },
              {
                "@type": "Question",
                "name": "Is pure vegetarian food available at the hotel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, pure vegetarian food is available via partner restaurant deliveries through Swiggy and Zomato. Non-vegetarian food is not permitted on the property premises."
                }
              },
              {
                "@type": "Question",
                "name": "What are the room categories available at Hotel Surya Bella Casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa offers 4 room categories: Super Deluxe AC Room, Deluxe AC Room, Deluxe Non-AC Room, and Standard Non-AC Room."
                }
              },
              {
                "@type": "Question",
                "name": "What are the check-in and check-out timings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check-in time is 12:00 PM and check-out time is 12:00 PM."
                }
              },
              {
                "@type": "Question",
                "name": "Is there free high-speed Wi-Fi at the hotel?",
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
                "name": "How can I book a room at Hotel Surya Bella Casa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book directly at https://hotelsuryabellacasa.com or call +91 9835923601. Rooms are also available on Booking.com, MakeMyTrip, Goibibo, and Agoda."
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
            "name": "Hotel Surya Bella Casa Purnea - Virtual Tour",
            "description": "Video tour of Hotel Surya Bella Casa, best hotel in Purnea near Bus Stand and Vikass Market. See rooms, dining, and facilities.",
            "thumbnailUrl": "https://bookonelocal.in/cdn/IMG_3815.avif",
            "contentUrl": "https://bookonelocal.in/cdn/website-home-video.mp4",
            "embedUrl": "https://hotelsuryabellacasa.com",
            "uploadDate": "2024-01-01",
            "duration": "PT30S",
            "potentialAction": {
              "@type": "WatchAction",
              "target": "https://hotelsuryabellacasa.com"
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
