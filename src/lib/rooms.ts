import { HotelRoom } from '@/lib/hotelmate'

export const FALLBACK_ROOMS: Room[] = [
  {
    id: '1',
    slug: 'super-deluxe-room',
    name: 'Super Deluxe Room',
    tagline: 'Premium comfort with elegant interiors',
    description: 'Experience premium comfort in our Super Deluxe Room featuring elegant interiors, plush bedding, air conditioning, and modern amenities for a truly relaxing stay.',
    size: 28,
    guests: 3,
    price: 3000,
    category: 'Super Deluxe',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/IMG_3815.avif',
    images: ['https://bookonelocal.in/cdn/IMG_3815.avif', 'https://bookonelocal.in/cdn/IMG_3808.avif'],
    imageAlt: 'Super Deluxe Room at Hotel Surya Bella Casa',
    amenities: ['AC', 'WiFi', 'TV', 'Geyser', 'Room Service', 'Mini Fridge'],
    featured: true,
    roomId: '1',
    noOfRooms: 4,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 3000,
    isAvailable: true,
  },
  {
    id: '2',
    slug: 'deluxe-ac-room',
    name: 'Deluxe AC Room',
    tagline: 'Cool comfort for a relaxing stay',
    description: 'Enjoy a cool and comfortable stay in our Deluxe AC Room, equipped with cozy bedding, air conditioning, and essential amenities for convenience and relaxation.',
    size: 24,
    guests: 3,
    price: 2400,
    category: 'Deluxe AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/IMG_3703.avif',
    images: ['https://bookonelocal.in/cdn/IMG_3703.avif', 'https://bookonelocal.in/cdn/IMG_3701.avif'],
    imageAlt: 'Deluxe AC Room at Hotel Surya Bella Casa',
    amenities: ['AC', 'WiFi', 'TV', 'Geyser', 'Room Service'],
    featured: true,
    roomId: '2',
    noOfRooms: 6,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 2400,
    isAvailable: true,
  },
  {
    id: '3',
    slug: 'deluxe-non-ac-room',
    name: 'Deluxe Non AC Room',
    tagline: 'Spacious comfort at great value',
    description: 'Designed for budget-friendly stays, our Deluxe Non AC Room offers comfortable bedding, basic furnishings, and good ventilation for a pleasant stay.',
    size: 22,
    guests: 2,
    price: 1800,
    category: 'Deluxe Non AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/IMG_3709.jpeg',
    images: ['https://bookonelocal.in/cdn/IMG_3709.jpeg', 'https://bookonelocal.in/cdn/IMG_3784.avif'],
    imageAlt: 'Deluxe Non AC Room at Hotel Surya Bella Casa',
    amenities: ['WiFi', 'TV', 'Geyser', 'Room Service', 'Window Ventilation'],
    featured: false,
    roomId: '3',
    noOfRooms: 5,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 1800,
    isAvailable: true,
  },
  {
    id: '4',
    slug: 'standard-non-ac-room',
    name: 'Standard Non AC Room',
    tagline: 'Essential comfort for short stays',
    description: 'Ideal for short stays, our Standard Non AC Room provides essential facilities, natural airflow, and simple furnishings for economical accommodation.',
    size: 18,
    guests: 2,
    price: 1500,
    category: 'Standard Non AC',
    view: 'City View',
    image: 'https://bookonelocal.in/cdn/IMG_3739.avif',
    images: ['https://bookonelocal.in/cdn/IMG_3739.avif'],
    imageAlt: 'Standard Non AC Room at Hotel Surya Bella Casa',
    amenities: ['WiFi', 'TV', 'Geyser', 'Room Service'],
    featured: false,
    roomId: '4',
    noOfRooms: 4,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 1500,
    isAvailable: true,
  },
]

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
  images: string[]
  imageAlt: string
  amenities: string[]
  featured: boolean
  roomId: string
  noOfRooms: number
  ratesAndAvailabilityDtos: HotelRoom['ratesAndAvailabilityDtos']
  roomOnlyPrice: number
  isAvailable: boolean
}

export function slugifyRoomName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function stripHtml(value?: string | null): string {
  if (!value) return ''

  return value
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}

export function getRoomPrice(room: HotelRoom): number {
  const rate = room.ratesAndAvailabilityDtos?.find((item) => item.price > 0)
  const plan = room.ratesAndAvailabilityDtos
    ?.flatMap((item) => item.roomRatePlans ?? [])
    .find((item) => item.active && item.amount > 0)

  return plan?.amount || rate?.price || room.roomOnlyPrice || 0
}

export function getRoomAvailability(room: HotelRoom): boolean {
  const availability = room.ratesAndAvailabilityDtos?.[0]
  return availability ? availability.noOfAvailable > 0 : room.noOfRooms > 0
}

export function mapHotelMateRoom(room: HotelRoom): Room {
  const name = stripHtml(room.name) || 'Room'
  const description = stripHtml(room.description)
  const amenities = room.roomFacilities?.map((facility) => stripHtml(facility.name)).filter(Boolean) ?? []
  const category = name.replace(/\s*room\s*$/i, '').trim() || name
  const images = Array.from(
    new Set(room.imageList?.map((image) => image.url).filter(Boolean) ?? [])
  )
  const firstImage = images[0] ?? ''

  return {
    id: String(room.id),
    roomId: String(room.id),
    slug: slugifyRoomName(name),
    name,
    tagline: description || `${name} at Hotel Surya Bella Casa`,
    description,
    size: 0,
    guests: room.maximumOccupancy || room.minimumOccupancy || 1,
    price: getRoomPrice(room),
    category,
    view: 'Hotel View',
    image: firstImage,
    images,
    imageAlt: `${name} at Hotel Surya Bella Casa`,
    amenities,
    featured: true,
    noOfRooms: room.noOfRooms,
    ratesAndAvailabilityDtos: room.ratesAndAvailabilityDtos,
    roomOnlyPrice: room.roomOnlyPrice,
    isAvailable: getRoomAvailability(room),
  }
}

export function mapHotelMateRooms(roomList?: HotelRoom[] | null): Room[] {
  return (roomList ?? []).map(mapHotelMateRoom).filter((room) => room.name && room.image)
}
