import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandStatement from '@/components/sections/BrandStatement';
import RoomsCarousel from '@/components/sections/RoomsCarousel';
import ParallaxDivider from '@/components/sections/ParallaxDivider';
import DiningSection from '@/components/sections/DiningSection';
import ExperiencesGrid from '@/components/sections/ExperiencesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FaqSection from '@/components/sections/FaqSection';
import HistorySection from '@/components/sections/HistorySection';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
// import WellnessSection from '@/components/sections/WellnessSection';
// import ForestSection from '@/components/sections/ForestSection';
import ArtOfStaySection from '@/components/sections/ArtOfStaySection';

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            "@id": "https://unwindkarjat.com/#organization",
            "name": "Unwind Karjat",
            "description": "A boutique nature retreat in Karjat, Maharashtra offering luxurious yet cozy stays, forest weddings, and corporate offsites.",
            "url": "https://unwindkarjat.com",
            "logo": "https://unwindkarjat.com/unwindkarjatlogo.png",
            "image": "https://unwindkarjat.com/images/resort-exterior.png",
            "email": "stay@unwindkarjat.com",
            "priceRange": "₹₹",
            "checkinTime": "13:00",
            "checkoutTime": "11:00",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Karjat - Chowk Rd, behind Baba Dairy, Wavarle",
              "addressLocality": "Karjat",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.922485,
              "longitude": 73.315053
            },
            "telephone": "+91 9619198839",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.5"
            },
            "sameAs": [
              "https://www.instagram.com/unwind_karjat"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the best things to do in Karjat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Karjat offers trekking to Kondana Caves, visiting Bhivpuri Waterfalls, and birdwatching. Unwind Karjat provides guided forest immersions and infinity pool access."
                }
              },
              {
                "@type": "Question",
                "name": "How do I reach Unwind Karjat from Mumbai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Take the Mumbai-Pune Expressway, exit at Chowk/Karjat, and follow the Karjat-Chowk road for 15km. We are located behind Baba Dairy in Wavarle village."
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
            "@type": "WebSite",
            "@id": "https://unwindkarjat.com/#website",
            "name": "Unwind Karjat",
            "url": "https://unwindkarjat.com",
            "description": "A boutique nature retreat in Karjat, Maharashtra offering luxurious yet cozy stays.",
            "inLanguage": "en",
            "publisher": {
              "@id": "https://unwindkarjat.com/#organization"
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

      {/* Wellness & Spa - Commented out as requested */}
      {/* <WellnessSection /> */}

      {/* Awards Marquee */}
      <AwardsMarquee />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section with Lightbox */}
      <GallerySection viewAllHref="/gallery" />

      {/* FAQ (answers match on-page FAQPage schema) */}
      <FaqSection
        faqs={[
          {
            question: 'What are the best things to do in Karjat?',
            answer: 'Karjat offers trekking to Kondana Caves, visiting Bhivpuri Waterfalls, and birdwatching. Unwind Karjat provides guided forest immersions and infinity pool access.'
          },
          {
            question: 'How do I reach Unwind Karjat from Mumbai?',
            answer: 'Take the Mumbai-Pune Expressway, exit at Chowk/Karjat, and follow the Karjat-Chowk road for 15km. We are located behind Baba Dairy in Wavarle village.'
          }
        ]}
      />

      {/* Newsletter & Contact */}
      <NewsletterSection />

      <Footer />
    </main>
  );
}
