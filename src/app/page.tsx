import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import BrandStatement from '@/components/sections/BrandStatement';
import RoomsCarousel from '@/components/sections/RoomsCarousel';
import ParallaxDivider from '@/components/sections/ParallaxDivider';
import ExperiencesGrid from '@/components/sections/ExperiencesGrid';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
// import OffersSection from '@/components/sections/OffersSection';
import AwardsMarquee from '@/components/sections/AwardsMarquee';
// import NewsletterSection from '@/components/sections/NewsletterSection';
import HistorySection from '@/components/sections/HistorySection';
import LuxuryAmenities from '@/components/sections/LuxuryAmenities';
import WellnessSection from '@/components/sections/WellnessSection';
import ForestSection from '@/components/sections/ForestSection';
import ArtOfStaySection from '@/components/sections/ArtOfStaySection';

export default function Home() {
  return (
    <main className="relative bg-cream min-h-screen" id="main-content">
      <Navbar />
      
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
      
      {/* Experiences Bento Grid */}
      <ExperiencesGrid />

      {/* Luxury Amenities */}
      <LuxuryAmenities />

      {/* Wellness & Hospitality */}
      <WellnessSection />
      
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
      {/* <NewsletterSection /> */}
      
      <Footer />
    </main>
  );
}
