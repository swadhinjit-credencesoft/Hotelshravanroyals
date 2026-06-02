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
import HistorySection from '@/components/sections/HistorySection';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import ArtOfStaySection from '@/components/sections/ArtOfStaySection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen" id="main-content">
      <Navbar />
      
      {/* Comprehensive SEO Structured Data Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Hotel",
                "@id": "https://hotelsuryabellacasa.com/#hotel",
                "name": "Hotel Surya Bella Casa",
                "description": "Book a comfortable, budget-friendly stay at Hotel Surya Bella Casa in Purnia, Bihar. Near Bus Stand & Vikass Market. Perfect for families & business travelers.",
                "url": "https://hotelsuryabellacasa.com",
                "telephone": "+91 9835923601",
                "email": "bellacasa561@gmail.com",
                "priceRange": "INR 1200 - INR 3500",
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
                "starRating": {
                  "@type": "Rating",
                  "ratingValue": "4.5"
                },
                "amenityFeature": [
                  { "@type": "LocationFeatureSpecification", "name": "Free High-Speed Wi-Fi", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Air Conditioning (AC)", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Elevator / Lift Access", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Secure Dedicated Parking", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "24/7 Room Service & Safety", "value": true },
                  { "@type": "LocationFeatureSpecification", "name": "Geyser Hot Water", "value": true }
                ]
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://hotelsuryabellacasa.com/#localbusiness",
                "name": "Hotel Surya Bella Casa",
                "image": "https://bookonelocal.in/cdn/IMG_3815.avif",
                "telephone": "+91 9835923601",
                "email": "bellacasa561@gmail.com",
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
                "url": "https://hotelsuryabellacasa.com"
              },
              {
                "@type": "Organization",
                "@id": "https://hotelsuryabellacasa.com/#organization",
                "name": "Hotel Surya Bella Casa",
                "logo": "https://hotelsuryabellacasa.com/suryabellacasalogo.png",
                "url": "https://hotelsuryabellacasa.com",
                "sameAs": [
                  "https://www.facebook.com/",
                  "https://www.instagram.com/hotel.bellacasaa/"
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://hotelsuryabellacasa.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://hotelsuryabellacasa.com"
                  }
                ]
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where is Hotel Surya Bella Casa located in Purnia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hotel Surya Bella Casa is centrally located at Suryalok Complex, Opposite Vikass Market, Near the main Bus Stand, Purnia, Bihar 854301, India."
                }
              },
              {
                "@type": "Question",
                "name": "How far is the hotel from Purnea Junction Railway Station?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The hotel is approximately 6.1 km away from Purnea Junction Railway Station with easy rickshaw connectivity."
                }
              },
              {
                "@type": "Question",
                "name": "Is Hotel Surya Bella Casa family-friendly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we are a family-friendly hotel offering secure rooms, AC/Non-AC options, and a quiet environment."
                }
              },
              {
                "@type": "Question",
                "name": "Is pure vegetarian food available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we allow direct pure veg ordering from local partners. Non-vegetarian food is strictly prohibited on the premises."
                }
              },
              {
                "@type": "Question",
                "name": "Does the hotel have a lift/elevator?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, a modern lift access is available to all floors for our guests' comfort."
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

      {/* Awards Marquee */}
      <AwardsMarquee />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Gallery Section with Lightbox */}
      <GallerySection />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </main>
  );
}
