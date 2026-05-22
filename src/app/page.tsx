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
// import OffersSection from '@/components/sections/OffersSection';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
import NewsletterSection from '@/components/sections/NewsletterSection';
import HistorySection from '@/components/sections/HistorySection';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
// import WellnessSection from '@/components/sections/WellnessSection';
import ForestSection from '@/components/sections/ForestSection';
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
            "name": "Hotel Bella Casa",
            "description": "Hotel Bella Casa offers well-maintained rooms with essential amenities in Purnia, Bihar. Ideal for business and leisure travelers with easy access to local markets and transport.",
            "url": "https://hotelbellacasa.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Suryalok Complex, Opposite Vikass Market, Near Bus Stand",
              "addressLocality": "Purnia",
              "addressRegion": "Bihar",
              "postalCode": "854301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 25.76889728,
              "longitude": 87.47058097
            },
            "telephone": "+91 9835923601",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "4.5"
            }
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
                "name": "What are the best things to do in Purnia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Purnia offers local markets like Vikass Market, visits to historic Kali Mandir temple, and easy access to Purnea Junction for rail connectivity. Hotel Bella Casa provides comfortable stays with free WiFi and room service."
                }
              },
              {
                "@type": "Question",
                "name": "How do I reach Hotel Bella Casa in Purnia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Bella Casa is located at Suryalok Complex, opposite Vikass Market, near the Bus Stand in Purnia, Bihar. Purnea Junction Railway Station is 7.5 km away with easy rickshaw connectivity."
                }
              }
            ]
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
      <GallerySection />

      {/* Seasonal Offers */}
      {/* <OffersSection /> */}

      {/* Sustainability & Forest */}
      <ForestSection />

      {/* Newsletter & Contact */}
      <NewsletterSection />

      <Footer />
    </main>
  );
}
