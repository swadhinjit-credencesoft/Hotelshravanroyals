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
    slug: 'lawn-and-pool-facing-room',
    name: 'Lawn & Pool Facing Room',
    tagline: 'Bright, comfortable rooms overlooking the pool and lawn',
    description: 'Bright, comfortable rooms overlooking the pool and lawn. Step out and you are already by the water, with open green space for a relaxed morning or an easy afternoon. Ideal for couples and small families.',
    size: 45,
    guests: 3,
    price: 5500,
    category: 'Lawn & Pool Facing',
    view: 'Pool & Lawn',
    image: '/Lawn-Facing-Room.png',
    imageAlt: 'Lawn and pool facing room at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Balcony', 'King Bed', 'Wifi'],
    featured: true,
  },
  {
    id: 'r2',
    slug: 'farm-facing-room',
    name: 'Farm Facing Room',
    tagline: 'Quiet rooms looking towards the farm and greenery',
    description: 'Quiet rooms looking towards the farm and the surrounding greenery. A more peaceful stay for guests who want calm, open views and the sound of the countryside. Ideal for guests looking to truly slow down.',
    size: 45,
    guests: 2,
    price: 5000,
    category: 'Farm Facing',
    view: 'Farm & Greenery',
    image: '/Forest-Facing-Room.png',
    imageAlt: 'Farm facing room with views of greenery at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Private Sit-out', 'King Bed', 'Wifi'],
    featured: true,
  },
  {
    id: 'r3',
    slug: 'red-brick-suite',
    name: 'Red Brick Suite',
    tagline: 'Our signature suite, with a little more space and character',
    description: 'Our signature suite, with a little more space and character. Exposed red brick, high ceilings and a private sit-out make it the perfect pick for couples looking for something special.',
    size: 55,
    guests: 2,
    price: 7500,
    category: 'Signature Suite',
    view: 'Garden View',
    image: '/images/cottage-exterior.png',
    imageAlt: 'Red Brick Suite at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Private Sit-out', 'King Bed', 'Mini Fridge'],
    featured: true,
  },
  {
    id: 'r4',
    slug: 'family-room',
    name: 'Family Room',
    tagline: 'A large room designed for families and groups',
    description: 'A large room designed for families and groups, comfortably accommodating up to 8 guests. Plenty of space to stay together, get ready together and make plans together. Ideal for families and close groups travelling as one.',
    size: 75,
    guests: 8,
    price: 11000,
    category: 'Family Room',
    view: 'Lawn View',
    image: '/images/room-interior.jpg',
    imageAlt: 'Spacious family room at Unwind Karjat',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Balcony', 'Double Bed', 'Wifi', 'Mini Fridge'],
    featured: true,
  }
]
