export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Parties' | 'Live Musical Evenings' | 'Day Trips';
  description: string;
  capacity: string;
  image: string;
  video?: string;
  features: string[];
}

export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'Weddings & Receptions',
    category: 'Weddings',
    description: 'A relaxed open-air setting surrounded by greenery, perfect for your special day and the people closest to you.',
    capacity: 'Intimate celebrations',
    image: '/images/exterior3.jpeg',
    video: '/weddingvideo.mp4',
    features: ['Customised catering', 'Celebration setup', 'Stay for your guests'],
  },
  {
    id: 'e2',
    title: 'The Corporate Offsite',
    category: 'Corporate',
    description: 'Step away from the office without stepping too far away from Pune. Combine meetings with good food, open spaces and time for the team to connect.',
    capacity: 'Small groups',
    image: '/corporate.jpeg',
    features: ['Wi-Fi', 'Projector & sound system', 'Pool, games & lawn between sessions'],
  },
  {
    id: 'e3',
    title: 'Birthday & Pool Parties',
    category: 'Parties',
    description: 'Poolside birthdays, intimate parties and private get-togethers — with the whole experience under one roof.',
    capacity: 'Private groups',
    image: '/birthdaycelebration.jpeg',
    features: ['Live tandoor & BBQ setup', 'Pool access', 'Music & karaoke option'],
  },
  {
    id: 'e4',
    title: 'Anniversary Celebrations',
    category: 'Parties',
    description: 'Milestones deserve more than a restaurant table. Celebrate anniversaries and family moments with the people who matter.',
    capacity: 'Private dining',
    image: '/anneversaryimg.jpeg',
    features: ['Private dining', 'Celebration setup', 'Help planning the day'],
  },
  {
    id: 'e5',
    title: 'Family Get-Togethers',
    category: 'Parties',
    description: 'More time together, less planning. Stay, eat, swim and celebrate without moving from one venue to another.',
    capacity: 'Groups & families',
    image: '/parties.jpeg',
    features: ['Family Room available', 'Open lawns & pool', 'Group meal plans'],
  },
  {
    id: 'e6',
    title: 'Acoustic Nights',
    category: 'Live Musical Evenings',
    description: 'A relaxed acoustic evening with music to match the mood — perfect for small groups and slow evenings.',
    capacity: 'Small gatherings',
    image: '/music.jpeg',
    features: ['Live acoustic set', 'Bonfire setup', 'Song requests'],
  },
  {
    id: 'e7',
    title: 'Live Bands, DJ & Karaoke',
    category: 'Live Musical Evenings',
    description: 'Live bands, DJs and karaoke evenings for birthdays, celebrations and corporate get-togethers.',
    capacity: 'Private events',
    image: '/celebrationsevenet.png',
    features: ['Sound system', 'Playlists & karaoke', 'Lawn setup'],
  },
  {
    id: 'e8',
    title: 'Day Picnic Package',
    category: 'Day Trips',
    description: 'A simple day out — pool and lawn time, games, music and a generous meal, all in one place.',
    capacity: 'By arrangement',
    image: '/daypicnic.jpeg',
    features: ['Pool & lawn access', 'Generous lunch', 'Games & music'],
  },
  {
    id: 'e9',
    title: 'Group Day Outing',
    category: 'Day Trips',
    description: 'Group day-outings for teams, families and friends — with space, activities and catering in one place.',
    capacity: 'Groups of any size',
    image: '/groupday.jpeg',
    features: ['Group space & activities', 'BBQ & bonfire option', 'Prior booking required'],
  },
];
