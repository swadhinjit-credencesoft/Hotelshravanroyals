export interface EstateEvent {
  id: string;
  title: string;
  category: 'Weddings' | 'Corporate' | 'Parties' | 'Day Trips';
  description: string;
  capacity: string;
  image: string;
  features: string[];
}


export const estateEvents: EstateEvent[] = [
  {
    id: 'e1',
    title: 'Family & Marriage Group Stays',
    category: 'Weddings',
    description: 'Provide a comfortable and hassle-free stay for your wedding guests visiting Purnea.',
    capacity: 'Up to 50 guests',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070002480-1000080267.jpg',
    features: ['Convenient location near markets', 'Vegetarian food delivery options', 'Clean, well-maintained rooms'],
  },
  {
    id: 'e2',
    title: 'Corporate Travel Hub',
    category: 'Corporate',
    description: 'Perfect for business travelers seeking simple, comfortable, and budget-friendly accommodation.',
    capacity: 'Single & group bookings',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070017792-1000080277.jpg',
    features: ['Free high-speed Wi-Fi', 'Desk space in premium rooms', 'Convenient town center access'],
  },
  {
    id: 'e3',
    title: 'Private & Birthday Group Bookings',
    category: 'Parties',
    description: 'Book blocks of rooms to gather with friends and family for private milestones and celebrations.',
    capacity: 'Up to 30 guests',
    image: 'https://bookonelocal.in/cdn/2026-04-09-070022437-1000080276.jpg',
    features: ['Attentive hospitality', 'Spacious Deluxe Rooms', 'Close to local sweet shops'],
  },
];
