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
    name: 'Deluxe Cottage',
    tagline: 'Cozy retreat with garden views',
    size: 45,
    guests: 2,
    price: 4500,
    category: 'deluxe',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=95',
    imageAlt: 'Cozy deluxe cottage',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV'],
    featured: true,
  },
  {
    id: 'r2',
    name: 'Premium Nature Villa',
    tagline: 'Spacious luxury surrounded by hills',
    size: 65,
    guests: 4,
    price: 8500,
    category: 'villa',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=95',
    imageAlt: 'Premium nature villa with scenic views',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Private Balcony'],
    featured: true,
  },
  {
    id: 'r3',
    name: 'Family Suite',
    tagline: 'Perfect for group getaways',
    size: 85,
    guests: 6,
    price: 12000,
    category: 'suite',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=95',
    imageAlt: 'Spacious family suite',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV', 'Mini Fridge'],
    featured: true,
  },
  {
    id: 'r4',
    name: 'Luxury Tent',
    tagline: 'Glamping under the stars',
    size: 35,
    guests: 2,
    price: 6500,
    category: 'tent',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=95',
    imageAlt: 'Luxury glamping tent',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'Outdoor Seating'],
    featured: false,
  },
  {
    id: 'r5',
    name: 'Standard AC Room',
    tagline: 'Comfortable stay on a budget',
    size: 30,
    guests: 2,
    price: 3500,
    category: 'standard',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=1920&q=95',
    imageAlt: 'Standard AC room',
    amenities: ['AC', 'Geyser', 'Parking', 'Room Service', 'TV'],
    featured: false,
  },
]
