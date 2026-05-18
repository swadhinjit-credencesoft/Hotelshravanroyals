export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  imageAlt: string
  season: 'Monsoon' | 'Winter' | 'Year-round'
  priceInfo?: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Infinity Swimming Pool',
    category: 'Leisure',
    description: 'Relax in our pristine infinity pool overlooking the undulating hills of Karjat. A perfect spot for sunset dips.',
    duration: 'All day',
    image: '/images/exterior6.jpeg',
    imageAlt: 'Infinity swimming pool overlooking Karjat hills',
    season: 'Year-round',
  },
  {
    id: 'e2',
    title: 'Live BBQ Night',
    category: 'Dining',
    description: 'A curated culinary experience featuring local spices and fresh produce, grilled to perfection under the stars.',
    duration: '7 PM - 10 PM',
    image: '/images/exterior7.jpeg',
    imageAlt: 'Gourmet live barbecue dinner setup',
    season: 'Winter',
    priceInfo: 'Starting ₹1,200/pp'
  },
  {
    id: 'e3',
    title: 'Bonfire & Acoustic Music',
    category: 'Evening',
    description: 'Gather around our dedicated campfire zones for an evening of warmth, stories, and soft acoustic melodies.',
    duration: '8 PM Onwards',
    image: '/images/exterior8.jpeg',
    imageAlt: 'Cozy bonfire gathering area at Unwind Karjat',
    season: 'Winter',
  },
  {
    id: 'e4',
    title: 'Monsoon Forest Trek',
    category: 'Adventure',
    description: 'Guided treks through private trails that come alive during the rains. Discover hidden streams and lush flora.',
    duration: '3 hours',
    image: '/images/room1.jpeg',
    imageAlt: 'Lush green forest trekking trails in Karjat',
    season: 'Monsoon',
  },
  {
    id: 'e5',
    title: 'Morning Birdwatching',
    category: 'Nature',
    description: 'Join our naturalist to spot exotic local species. Karjat is a haven for migratory birds during the season.',
    duration: '6 AM - 8 AM',
    image: '/images/room2.jpeg',
    imageAlt: 'Birdwatching and nature photography in Karjat',
    season: 'Year-round',
  },
  {
    id: 'e6',
    title: 'Bhivpuri Falls',
    category: 'Attraction',
    description: 'A stunning waterfall located just a short drive away. Majestic during the monsoons and a popular spot for trekkers.',
    duration: 'Half Day',
    image: '/images/exterior.jpeg',
    imageAlt: 'Majestic Bhivpuri Falls during monsoon',
    season: 'Monsoon',
  },
  {
    id: 'e7',
    title: 'Kondana Caves',
    category: 'Attraction',
    description: 'Ancient Buddhist caves dating back to the 1st century BC. A must-visit for history enthusiasts and nature lovers.',
    duration: 'Full Day',
    image: '/images/exterior2.jpeg',
    imageAlt: 'Ancient Kondana Caves architecture',
    season: 'Year-round',
  },
]
