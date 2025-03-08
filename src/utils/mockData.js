import moment from 'moment';

// Wedding date (example - you should update this with your actual date)
export const WEDDING_DATE = '2024-12-31T16:00:00';

// Calculate days until or since wedding
export const getDaysUntilWedding = () => {
  const today = moment();
  const weddingDay = moment(WEDDING_DATE);
  const diff = weddingDay.diff(today, 'days');
  
  if (diff > 0) {
    return { count: diff, label: 'Days until our wedding' };
  } else if (diff < 0) {
    return { count: Math.abs(diff), label: 'Days since we said "I do"' };
  } else {
    return { count: 0, label: 'Today is our wedding day!' };
  }
};

// Mock data for memories
export const MEMORIES = [
  {
    id: '1',
    title: 'Engagement Day',
    date: '2023-06-15',
    description: 'The day we got engaged at the beach sunset.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Venue Visit',
    date: '2023-08-20',
    description: 'Our first visit to the wedding venue. We knew it was perfect!',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Cake Tasting',
    date: '2023-09-10',
    description: 'Tasting different cake flavors for our wedding cake.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

// Mock data for reminders
export const REMINDERS = [
  {
    id: '1',
    title: 'Send out invitations',
    date: '2024-09-15',
    completed: true,
  },
  {
    id: '2',
    title: 'Final dress fitting',
    date: '2024-11-20',
    completed: false,
  },
  {
    id: '3',
    title: 'Confirm with caterer',
    date: '2024-12-01',
    completed: false,
  },
  {
    id: '4',
    title: 'Pick up wedding rings',
    date: '2024-12-15',
    completed: false,
  },
];

// Mock data for notes
export const NOTES = [
  {
    id: '1',
    title: 'Vows Ideas',
    content: 'Start with how we met, mention our first date, talk about our journey together...',
    date: '2024-08-05',
  },
  {
    id: '2',
    title: 'Guest Seating Thoughts',
    content: 'Keep Uncle Bob away from Aunt Susan. Make sure grandparents are seated near the front.',
    date: '2024-08-15',
  },
  {
    id: '3',
    title: 'Honeymoon Packing List',
    content: 'Passports, camera, sunscreen, beach clothes, hiking boots...',
    date: '2024-09-01',
  },
];

// Mock data for livestream
export const LIVESTREAM = {
  isLive: false,
  scheduledTime: WEDDING_DATE,
  url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Example URL (you'll replace with your actual stream URL)
  title: 'Our Wedding Ceremony',
  description: 'Join us live as we say "I do"!',
};