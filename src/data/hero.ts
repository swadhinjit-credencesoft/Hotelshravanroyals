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
    tagline: 'Nature Resort near Mumbai',
    headline: 'Escape to Unwind Karjat ',
    subheadline: 'A boutique nature retreat offering luxurious yet cozy stays for leisure travellers and groups.',
    image: '/images/unwindvideo.mp4',
    imageAlt: 'Luxury resort infinity pool at golden hour',
    primaryCta: 'Book Now',
    primaryHref: '/reservations',
    secondaryCta: 'Explore',
    secondaryHref: '/rooms',
  },
  {
    id: 's2',
    tagline: 'Culinary Excellence',
    headline: 'Farm to Table Dining',
    subheadline: 'Chef-curated tasting menus where local flavors meet rustic charm. Every meal an occasion.',
    image: '/images/unwindvideo.mp4',
    imageAlt: 'Private terrace fine dining at sunset',
    primaryCta: 'View Dining',
    primaryHref: '/dining',
    secondaryCta: 'Reserve a Table',
    secondaryHref: '/contact',
  },
  {
    id: 's3',
    tagline: 'Immerse in Nature',
    headline: 'Curated Experiences',
    subheadline: 'From monsoon treks to cozy winter bonfires, discover activities designed to help you reconnect with the outdoors.',
    image: '/images/unwindvideo.mp4',
    imageAlt: 'Nature trails and outdoor activities',
    primaryCta: 'Explore Activities',
    primaryHref: '/experiences',
    secondaryCta: 'Book a Stay',
    secondaryHref: '/reservations',
  },
  {
    id: 's4',
    tagline: 'Events & Celebrations',
    headline: 'Unforgettable Gatherings',
    subheadline: 'From intimate forest weddings to strategic corporate retreats, we provide the perfect backdrop for your significant moments.',
    image: '/images/unwindvideo.mp4',
    imageAlt: 'Event spaces and outdoor lawns',
    primaryCta: 'Plan an Event',
    primaryHref: '/events',
    secondaryCta: 'Get a Quote',
    secondaryHref: '/contact',
  },
]

export const heroStats = [
  { value: '1.5', label: 'Hours from Mumbai' },
  { value: '3', label: 'Room Categories' },
  { value: '5+', label: 'Years Open' },
]
