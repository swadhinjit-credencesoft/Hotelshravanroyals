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
    slug: 'red-brick-cottage',
    name: 'Red Brick Cottage',
    tagline: 'Rustic charm meets modern comfort',
    description: 'Experience the soul of Karjat in our signature Red Brick Cottages. These sanctuaries offer a unique blend of earthy aesthetics and premium amenities, featuring exposed brick walls, high ceilings, and a private sit-out to enjoy the cool monsoon breeze.',
    size: 55,
    guests: 2,
    price: 6500,
    category: 'Cottage',
    view: 'Garden View',
    image: '/images/exterior3.jpeg',
    imageAlt: 'Authentic rustic Red Brick Cottage exterior at Unwind Karjat resort',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Private Sit-out', 'King Bed'],
    featured: true,
  },
  {
    id: 'r2',
    slug: 'lawn-facing-room',
    name: 'Lawn Facing Room',
    tagline: 'Wake up to lush green vistas',
    description: 'Our Lawn Facing Rooms are designed for those who love open spaces. Step directly from your room onto our manicured emerald lawns. Perfect for morning yoga or evening tea, these rooms offer a sense of boundless freedom and serenity.',
    size: 45,
    guests: 3,
    price: 5500,
    category: 'Premium',
    view: 'Lawn View',
    image: '/images/room1.jpeg',
    imageAlt: 'Cozy real bedroom setup of the Lawn Facing Room at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Balcony', 'King Bed', 'Wifi'],
    featured: true,
  },
  {
    id: 'r3',
    slug: 'forest-facing-room',
    name: 'Forest Facing Room',
    tagline: 'Immerse yourself in deep nature',
    description: 'Nestled at the edge of the resort, these rooms offer an intimate connection with the Karjat forest. Listen to the symphony of birds and the rustle of leaves from your private balcony. A true sanctuary for nature lovers seeking peace and privacy.',
    size: 50,
    guests: 2,
    price: 7500,
    category: 'Luxury',
    view: 'Forest View',
    image: '/images/room2.jpeg',
    imageAlt: 'Cozy room interior showing premium wooden wardrobe and amenities at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Private Balcony', 'King Bed', 'Mini Fridge'],
    featured: true,
  }
]
