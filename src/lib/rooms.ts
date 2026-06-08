import { HotelRoom } from '@/lib/hotelmate'

export const FALLBACK_ROOMS: Room[] = [
  {
    id: '1',
    slug: 'lawn-facing-room',
    name: 'Lawn Facing Room',
    tagline: 'Serene views of our manicured lawns',
    description: 'Wake up to the sight of lush green lawns in our Lawn Facing Rooms. These well-appointed rooms offer a peaceful retreat with modern amenities, ensuring a relaxing stay at Hotel Surya Bella Casa.',
    size: 28,
    guests: 2,
    price: 2800,
    category: 'Lawn Facing',
    view: 'Lawn View',
    image: '/Lawn Facing Room.png',
    images: ['/Lawn Facing Room.png'],
    imageAlt: 'Lawn Facing Room at Hotel Surya Bella Casa',
    amenities: ['AC', 'Wifi', 'TV', 'Geyser', 'Room Service'],
    featured: true,
    roomId: '1',
    noOfRooms: 5,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 2800,
    isAvailable: true,
  },
  {
    id: '2',
    slug: 'forest-facing-room',
    name: 'Forest Facing Room',
    tagline: 'Immersive views of the surrounding greenery',
    description: 'Escape to tranquility in our Forest Facing Rooms. Overlooking the natural greenery, these rooms combine comfort with nature, offering a unique experience at Hotel Surya Bella Casa.',
    size: 32,
    guests: 3,
    price: 3500,
    category: 'Forest Facing',
    view: 'Forest View',
    image: '/Forest Facing Room.png',
    images: ['/Forest Facing Room.png'],
    imageAlt: 'Forest Facing Room at Hotel Surya Bella Casa',
    amenities: ['AC', 'Wifi', 'TV', 'Geyser', 'Room Service', 'Parking'],
    featured: true,
    roomId: '2',
    noOfRooms: 3,
    ratesAndAvailabilityDtos: null,
    roomOnlyPrice: 3500,
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
    tagline: description || `${name} at Hotel Bella Casa`,
    description,
    size: 0,
    guests: room.maximumOccupancy || room.minimumOccupancy || 1,
    price: getRoomPrice(room),
    category,
    view: 'Hotel View',
    image: firstImage,
    images,
    imageAlt: `${name} at Hotel Bella Casa`,
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
