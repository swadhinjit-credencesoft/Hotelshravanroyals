export interface EstateEvent {
  id: string;
  title: string;
  category: 'Corporate' | 'Parties' | 'Day Trips';
  description: string;
  capacity: string;
  image: string;
  features: string[];
}


export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'Corporate Retreats & Team Offsites',
    category: 'Corporate',
    description: 'Take the team away from the boardroom and into the calm of Ajodhya Hills. Focused offsites, strategy sessions, and team-bonding retreats with reliable Wi-Fi and attentive service.',
    capacity: 'Group bookings up to 25',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg',
    features: ['Free high-speed Wi-Fi', 'Peaceful, focused environment', 'Group accommodation options'],
  },
  {
    id: 'e2',
    title: 'Birthday Parties at The Divine Oasis',
    category: 'Parties',
    description: 'Celebrate birthdays under the open forest sky. Block a clutch of cottages, fire up the barbeque, and let the Ajodhya Hills do the decorating for your special day.',
    capacity: 'Up to 40 guests',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064459381-WhatsApp Image 2026-05-11 at 15.42.11.jpg',
    features: ['Barbeque & bonfire evenings', 'Birthday theme décor on request', 'Vista cottages for the group'],
  },
  {
    id: 'e3',
    title: 'Anniversary Parties & Private Celebrations',
    category: 'Parties',
    description: 'Mark anniversaries and intimate milestones in the hilltop seating area with forest views, organic farm dining, and attentive hosts who make the day truly special.',
    capacity: 'Up to 40 guests',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064452634-WhatsApp Image 2026-05-11 at 15.42.14 (2).jpg',
    features: ['Hilltop seating with forest views', 'Organic farm-to-table dining', 'Friendly, attentive hosts'],
  },
  {
    id: 'e4',
    title: 'Weekend Day Trips from Ajodhya',
    category: 'Day Trips',
    description: 'A hassle-free hilltop base for exploring the Ajodhya Hills & Forest Reserve, Thurga Dam, and Deulghata Temples. Arrive early, stay the day, and soak in the forest breeze.',
    capacity: 'Day visitors welcome',
    image: 'https://bookonelocal.in/cdn/2026-05-13-064437235-WhatsApp Image 2026-05-11 at 15.42.11 (1).jpg',
    features: ['0.4 km from Ajodhya Hills & Forest Reserve', 'Packaged veg meals available', 'Luggage storage for early arrivals'],
  },
];