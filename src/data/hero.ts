export interface HeroSlide {
  id: string
  tagline: string
  headline: string
  subheadline: string
  image: string
  imageAlt: string
  primaryCta: string
  primaryHref: string
  secondaryCta: string
  secondaryHref: string
}

export const heroSlides: HeroSlide[] = [
  {
    id: 's1',
    tagline: 'Best Hotel in Purnea, Bihar — Book Direct & Save',
    headline: 'Hotel Surya Bella Casa | Best Hotel Near Bus Stand Purnea',
    subheadline: 'Looking for the best hotel in Purnea? Hotel Surya Bella Casa offers comfortable rooms with free WiFi, parking, and rooftop restaurant. Located opposite Vikass Market near Bus Stand. Book direct for best rates.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Surya Bella Casa Purnea - Best Hotel Near Bus Stand Purnea',
    primaryCta: 'Book Direct',
    primaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
    secondaryCta: 'View All Rooms',
    secondaryHref: '/rooms',
  },
  {
    id: 's2',
    tagline: 'Deluxe Rooms in Purnea - AC, Family & Budget Options',
    headline: 'Comfortable & Spacious Rooms Near Vikass Market',
    subheadline: 'Choose from deluxe AC rooms, family rooms, and budget-friendly accommodations. Each room features air conditioning, flat-screen TV, geyser, and complimentary WiFi. Perfect for business and family stays in Purnea.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Surya Bella Casa Purnea - Deluxe AC Rooms Near Bus Stand Purnea',
    primaryCta: 'Explore Rooms',
    primaryHref: '/rooms',
    secondaryCta: 'Book Now',
    secondaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
  },
  {
    id: 's3',
    tagline: 'Hotel Opposite Vikass Market, Near Bus Stand Purnea',
    headline: 'Prime Location - Near Railway Station & Main Market',
    subheadline: 'Located opposite Vikass Market and near the Main Bus Stand Purnea. Easy access to Purnea Junction Railway Station (6.1 km), Gulabbagh, Line Bazar, and NH-31. Stay in the heart of Purnea, Bihar.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Surya Bella Casa Purnea - Hotel Near Bus Stand & Vikass Market',
    primaryCta: 'Get Directions',
    primaryHref: '/contact',
    secondaryCta: 'Book Now',
    secondaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
  },
  {
    id: 's4',
    tagline: 'Free WiFi, Parking & Banquet Hall in Purnea',
    headline: 'Premium Amenities - Rooftop Restaurant & Conference Hall',
    subheadline: 'Hotel with free WiFi, free parking, rooftop restaurant, banquet hall, conference hall, lift access, 24/7 room service, and CCTV security. Best hotel for business travelers, families, weddings, and events in Purnea.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Surya Bella Casa Purnea - Hotel with Free WiFi & Banquet Hall',
    primaryCta: 'Book Now',
    primaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
    secondaryCta: 'Contact Us',
    secondaryHref: '/contact',
  },
]

export const heroStats = [
  { value: '6.1 Km', label: 'From Purnea Junction' },
  { value: '4', label: 'Room Categories' },
  { value: '24/7', label: 'Room Service & Care' },
]