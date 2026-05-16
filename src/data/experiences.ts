export interface Experience {
  id: string
  title: string
  category: string
  description: string
  duration: string
  image: string
  imageAlt: string
  season: string
}

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Infinity Swimming Pool',
    category: 'Leisure',
    description: 'Relax in our pristine swimming pool surrounded by nature and hills.',
    duration: 'All day',
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=95',
    imageAlt: 'Resort swimming pool',
    season: 'Year-round',
  },
  {
    id: 'e2',
    title: 'Live BBQ Night',
    category: 'Dining',
    description: 'Enjoy freshly grilled delicacies under the starlit Karjat sky.',
    duration: 'Evening',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=95',
    imageAlt: 'Live barbecue dinner',
    season: 'Winter',
  },
  {
    id: 'e3',
    title: 'Bonfire & Music',
    category: 'Evening',
    description: 'Gather around a crackling bonfire with loved ones, acoustic music, and warmth.',
    duration: '2 hours',
    image: 'https://images.unsplash.com/photo-1517594422361-5e18d0333396?w=1920&q=95',
    imageAlt: 'Cozy bonfire setup in nature',
    season: 'Winter',
  },
  {
    id: 'e4',
    title: 'Bhivpuri Waterfall Trek',
    category: 'Adventure',
    description: 'Guided morning trek to the nearby cascading waterfalls and lush green trails.',
    duration: '3 hours',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=95',
    imageAlt: 'Forest trekking trail',
    season: 'Monsoon',
  },
  {
    id: 'e5',
    title: 'Morning Birdwatching',
    category: 'Nature',
    description: 'Spot exotic local bird species in the quiet early hours of the resort grounds.',
    duration: 'Early morning',
    image: 'https://images.unsplash.com/photo-1552728089-571ebdcdbe15?w=1920&q=95',
    imageAlt: 'Birdwatching in forest',
    season: 'Year-round',
  },
]
