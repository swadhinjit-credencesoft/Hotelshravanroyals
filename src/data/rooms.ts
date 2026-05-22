export interface Room {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  size: number
  guests: number
  price: number
  category: string
  view: string
  image: string
  imageAlt: string
  amenities: string[]
  featured: boolean
}

export const rooms: Room[] = [
  {
    id: 'r1',
    slug: 'super-deluxe-room',
    name: 'Super Deluxe Room',
    tagline: 'Experience premium comfort with air conditioning',
    description: 'Experience premium comfort with this spacious room featuring elegant interiors, plush bedding, air conditioning, and modern amenities for a truly relaxing stay.',
    size: 30,
    guests: 3,
    price: 2100,
    category: 'Super Deluxe',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070105794-1000080272.jpg',
    imageAlt: 'Super Deluxe Room at Hotel Bella Casa',
    amenities: ['AC', 'Free WiFi', 'Free Parking', 'Geyser', 'TV', 'Room Service'],
    featured: true,
  },
  {
    id: 'r2',
    slug: 'deluxe-ac-room',
    name: 'Deluxe AC Room',
    tagline: 'Cool comfort with standard amenities',
    description: 'Enjoy a cool and comfortable stay in this well-furnished air-conditioned room, equipped with cozy bedding and essential amenities for convenience and relaxation.',
    size: 25,
    guests: 4,
    price: 1890,
    category: 'Deluxe AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070306938-1000080271.jpg',
    imageAlt: 'Deluxe AC Room at Hotel Bella Casa',
    amenities: ['AC', 'Free WiFi', 'Free Parking', 'Geyser', 'TV', 'Room Service'],
    featured: true,
  },
  {
    id: 'r3',
    slug: 'deluxe-non-ac-room',
    name: 'Deluxe Non AC Room',
    tagline: 'Budget-friendly comfort',
    description: 'Designed for budget-friendly stays, this room offers comfortable bedding, basic furnishings, and good ventilation, ensuring a pleasant and simple accommodation experience.',
    size: 25,
    guests: 4,
    price: 1470,
    category: 'Deluxe Non AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070330986-1000080270.jpg',
    imageAlt: 'Deluxe Non AC Room at Hotel Bella Casa',
    amenities: ['Free WiFi', 'Free Parking', 'Geyser', 'TV', 'Room Service'],
    featured: true,
  },
  {
    id: 'r4',
    slug: 'standard-non-ac-room',
    name: 'Standard Non AC Room',
    tagline: 'Simple and economical stay',
    description: 'Ideal for short stays, this compact room provides essential facilities, natural airflow, and simple furnishings, perfect for guests seeking economical accommodation.',
    size: 20,
    guests: 4,
    price: 1500,
    category: 'Standard Non AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070349660-1000080268.jpg',
    imageAlt: 'Standard Non AC Room at Hotel Bella Casa',
    amenities: ['Free WiFi', 'Free Parking', 'Geyser', 'TV', 'Room Service'],
    featured: true,
  }
]
