export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'food' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/images/exterior3.jpeg', alt: 'The Red Brick Suite at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g2', src: '/images/exterior4.jpeg', alt: 'Meals at the in-house restaurant at Unwind Karjat', category: 'food', width: 1200, height: 900 },
  { id: 'g3', src: '/images/exterior5.jpeg', alt: 'A celebration on the lawns at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g4', src: '/images/exterior6.jpeg', alt: 'Open grounds and greenery around Unwind Karjat', category: 'nature', width: 800, height: 1200 },
  { id: 'g5', src: '/images/exterior7.jpeg', alt: 'The Red Brick Suite interior at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g6', src: '/images/exterior8.jpeg', alt: 'The lounge at Unwind Karjat - perfect for morning tea', category: 'outdoors', width: 800, height: 1000 },
  { id: 'g7', src: '/images/room1.jpeg', alt: 'A space for get-togethers at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g8', src: '/images/room2.jpeg', alt: 'The countryside around Unwind Karjat', category: 'nature', width: 1200, height: 800 },
  { id: 'g9', src: '/images/exterior.jpeg', alt: 'Lawn and pool facing room at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g10', src: '/images/exterior2.jpeg', alt: 'Farm facing room at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g11', src: '/outdoorspaces.jpeg', alt: 'Lawn and outdoor spaces at Unwind Karjat', category: 'outdoors', width: 1200, height: 800 },
]
