export interface Room {
  id: string
  name: string
  tagline: string
  size: number
  guests: number
  price: number
  category: string
  image: string
  imageAlt: string
  amenities: string[]
  featured: boolean
}

export const rooms: Room[] = [
  {
    id: 'r1',
    name: 'The Forest Suite',
    tagline: 'Canopy views, absolute silence',
    size: 85,
    guests: 2,
    price: 1200,
    category: 'suite',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=95',
    imageAlt: 'Luxury suite with forest view',
    amenities: ['Private terrace', 'Soaking tub', 'Fireplace', 'Butler service'],
    featured: true,
  },
  {
    id: 'r2',
    name: 'Coastal Villa',
    tagline: 'Your private shore, your private world',
    size: 180,
    guests: 4,
    price: 3400,
    category: 'villa',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=95',
    imageAlt: 'Private villa with ocean view',
    amenities: ['Private pool', 'Chef on request', 'Beach access', 'Golf cart'],
    featured: true,
  },
  {
    id: 'r3',
    name: 'Garden Pavilion',
    tagline: 'Bloom-framed mornings, starlit nights',
    size: 65,
    guests: 2,
    price: 780,
    category: 'deluxe',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=95',
    imageAlt: 'Garden pavilion room with floral surroundings',
    amenities: ['Garden terrace', 'Rain shower', 'King bed', 'Minibar'],
    featured: true,
  },
  {
    id: 'r4',
    name: 'Signature Penthouse',
    tagline: 'Above it all — literally',
    size: 240,
    guests: 6,
    price: 6800,
    category: 'villa',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=95',
    imageAlt: 'Penthouse suite with panoramic terrace',
    amenities: ['360° terrace', 'Private pool', 'Dedicated host', 'Helipad access'],
    featured: false,
  },
  {
    id: 'r5',
    name: 'Heritage Room',
    tagline: 'Classic luxury, timeless comfort',
    size: 48,
    guests: 2,
    price: 480,
    category: 'standard',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=95',
    imageAlt: 'Heritage room with antique furnishings',
    amenities: ['Garden view', 'Clawfoot bath', 'Writing desk', 'Evening turndown'],
    featured: false,
  },
]
