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
    tagline: 'A Sanctuary Awaits',
    headline: 'Where Time Stands Still',
    subheadline: 'Nestled in the heart of Jaipur — crafted for those who seek comfort, elegance, and extraordinary hospitality.',
    image: 'https://bookonelocal.in/cdn/IMG_6387.mp4',
    imageAlt: 'Luxury hotel corridor at Hotel Shravan Royal Inn',
    primaryCta: 'Reserve Your Suite',
    primaryHref: '/reservations',
    secondaryCta: 'Explore the Inn',
    secondaryHref: '/rooms',
  },
  {
  id: 's2',
  tagline: 'Premium Banquet & Events',
  headline: 'Moments Made Grand',
  subheadline:
    'Elegant spaces for weddings, celebrations, and corporate gatherings.',
  image: 'https://bookonelocal.in/cdn/IMG_6260.mp4',
  imageAlt: 'Premium banquet hall at Hotel Shravan Royal Inn',
  primaryCta: 'View Event Spaces',
  primaryHref: '/events',
  secondaryCta: 'Enquire Now',
  secondaryHref: '/contact',
},
  {
    id: 's3',
    tagline: 'Royal Comfort & Stay',
    headline: 'Surrender to Luxury',
    subheadline: 'Beautifully appointed rooms and suites with modern interiors, premium amenities, and warm Jaipur hospitality.',
    image: 'https://bookonelocal.in/cdn/IMG_6295.mp4',
    imageAlt: 'Luxury hotel room at Hotel Shravan Royal Inn',
    primaryCta: 'Explore Rooms',
    primaryHref: '/rooms',
    secondaryCta: 'Book Your Stay',
    secondaryHref: '/reservations',
  },
  {
    id: 's4',
    tagline: 'Jaipur Experiences',
    headline: 'Discover the Pink City',
    subheadline: 'Perfectly located for heritage tours, local markets, and cultural exploration — with expert guidance from our concierge.',
    image: 'https://bookonelocal.in/cdn/IMG_6294.mp4',
    imageAlt: 'Jaipur heritage experience from Hotel Shravan Royal Inn',
    primaryCta: 'Explore Experiences',
    primaryHref: '/experiences',
    secondaryCta: 'Contact Concierge',
    secondaryHref: '/contact',
  },
]

export const heroStats = [
  { value: '47', label: 'Private Suites' },
  { value: '3', label: 'Event Spaces' },
  { value: '12', label: 'Acres of Grounds' },
  { value: '5★', label: 'Guest Rating' },
]

