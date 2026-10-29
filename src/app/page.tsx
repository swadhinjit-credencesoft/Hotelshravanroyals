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
import JsonLd from '@/components/seo/JsonLd';
import { siteUrl } from '@/lib/seo';

const hotelSchema = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  '@id': new URL('/#hotel', siteUrl).toString(),
  name: 'Shravan Royal Inn',
  url: siteUrl.toString(),
  description: 'A hotel in Jaipur, Rajasthan, India.',
  logo: new URL('/Shravan%20Logo.png', siteUrl).toString(),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  checkinTime: '14:00',
  checkoutTime: '11:00',
}

export default function Home() {
  return (
    <>
    <JsonLd data={hotelSchema} />
    <JsonLd data={{
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': new URL('/#webpage', siteUrl).toString(),
      url: siteUrl.toString(),
      name: 'Shravan Royal Inn | Hotel in Jaipur, Rajasthan',
      isPartOf: { '@id': new URL('/#website', siteUrl).toString() },
      about: { '@id': new URL('/#hotel', siteUrl).toString() },
    }} />
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
    </>
  );
}
