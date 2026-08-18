export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'rooms' | 'outdoors' | 'food' | 'events' | 'nature'
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: '/Lawn-Facing-Room.png', alt: 'Lawn and pool facing room at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g2', src: '/Forest-Facing-Room.png', alt: 'Forest facing room at Unwind Karjat', category: 'rooms', width: 1200, height: 800 },
  { id: 'g3', src: '/Pool.png', alt: 'The swimming pool at Unwind Karjat', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g4', src: '/outdoorspaces.jpeg', alt: 'Lawn and outdoor spaces at Unwind Karjat', category: 'outdoors', width: 1200, height: 800 },
  { id: 'g5', src: '/inhouse.png', alt: 'The in-house restaurant at Unwind Karjat', category: 'food', width: 1200, height: 800 },
  { id: 'g6', src: '/bbq.jpeg', alt: 'Live tandoor and BBQ at Unwind Karjat', category: 'food', width: 1200, height: 800 },
  { id: 'g7', src: '/celebrationsevenet.png', alt: 'Celebration event at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g8', src: '/birthdaycelebration.jpeg', alt: 'Birthday celebration at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g9', src: '/corporate.jpeg', alt: 'Corporate offsite at Unwind Karjat', category: 'events', width: 1200, height: 800 },
  { id: 'g10', src: '/outdoorspacess.jpeg', alt: 'Open grounds and greenery around Unwind Karjat', category: 'nature', width: 1200, height: 800 },
  { id: 'g11', src: '/daypicnic.jpeg', alt: 'Day picnic at Unwind Karjat', category: 'nature', width: 1200, height: 800 },
  { id: 'g12', src: '/sportsactivities.jpeg', alt: 'Sports and activities at Unwind Karjat', category: 'outdoors', width: 1200, height: 800 },
]
