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
    tagline: 'Premium Stay in Purnia, Bihar',
    headline: 'Best Hotel in Purnia, Bihar — Hotel Surya Bella Casa',
    subheadline: 'A comfortable and budget-friendly stay located at Suryalok Complex, opposite Vikass Market in Purnia.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Bella Casa Exterior View',
    primaryCta: 'Book Now',
    primaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
    secondaryCta: 'Explore Rooms',
    secondaryHref: '/rooms',
  },
  {
    id: 's2',
    tagline: 'Convenient & Comfortable Stays',
    headline: 'Well-Maintained Accommodations',
    subheadline: 'Modern amenities including air conditioning, geyser, flat-screen TVs, and cozy bedding for business and leisure travelers.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Comfortable Deluxe Room Interior',
    primaryCta: 'Explore Rooms',
    primaryHref: '/rooms',
    secondaryCta: 'Book Now',
    secondaryHref: 'https://bookone.io/Hotel-Bella-Casa?bookingEngine=true',
  },
  {
    id: 's3',
    tagline: 'Heart of the City',
    headline: 'Prime Location & Connectivity',
    subheadline: 'Located opposite Vikass Market and near the Bus Stand with easy access to Purnea Junction Railway Station.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Entrance and Reception Area',
    primaryCta: 'Get Directions',
    primaryHref: '/contact',
    secondaryCta: 'Explore Rooms',
    secondaryHref: '/rooms',
  },
  {
    id: 's4',
    tagline: 'Exquisite Amenities',
    headline: 'Free Wi-Fi & Dedicated Parking',
    subheadline: 'Enjoy high-speed internet connectivity, lift/elevator access, doctor on call, and local newspaper services during your stay.',
    image: 'https://bookonelocal.in/cdn/website-home-video.mp4',
    imageAlt: 'Hotel Amenities and Facilities',
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