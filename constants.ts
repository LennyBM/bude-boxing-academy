
import { Program, Coach, Testimonial, ScheduleItem } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'boxing-fitness',
    title: 'Boxing Fitness',
    description: 'High-intensity interval training focusing on cardio and boxing fundamentals.',
    icon: 'activity',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'technical-boxing',
    title: 'Technical Training',
    description: 'Master the art of boxing with drills focusing on footwork, stance, and punching power.',
    icon: 'target',
    image: 'https://images.unsplash.com/photo-1544117518-30dd5fb7a940?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kids-youth',
    title: 'Kids & Youth (10-15)',
    description: 'Fun, disciplined environment teaching character and skills to the next generation.',
    icon: 'users',
    image: 'https://images.unsplash.com/photo-1552667466-07f704e139bd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'seniors',
    title: 'Seniors (16+)',
    description: 'Adult sessions tailored for all levels, from competitive boxers to hobbyists.',
    icon: 'award',
    image: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description: 'One-on-one coaching to accelerate your progress and reach specific fitness goals.',
    icon: 'user',
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'boot-camps',
    title: 'Outdoor Boot Camps',
    description: 'Seasonal outdoor sessions to challenge your endurance in the fresh Cornwall air.',
    icon: 'sun',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: 'Monday',
    status: 'Open',
    classes: [
      { time: '18:00 - 19:00', label: 'Youths (10-15)' },
      { time: '19:00 - 20:30', label: 'Seniors (16+)' }
    ]
  },
  { day: 'Tuesday', status: 'Closed', classes: [] },
  {
    day: 'Wednesday',
    status: 'Open',
    classes: [
      { time: '18:00 - 19:00', label: 'Youths (10-15)' },
      { time: '19:00 - 20:30', label: 'Seniors (16+)' }
    ]
  },
  { day: 'Thursday', status: 'Closed', classes: [] },
  { day: 'Friday', status: 'Closed', classes: [] },
  {
    day: 'Saturday',
    status: 'Open',
    classes: [
      { time: '10:00 - 11:00', label: 'Youths (10-15)' },
      { time: '11:00 - 12:30', label: 'Seniors (16+)' }
    ]
  },
  { day: 'Sunday', status: 'Closed', classes: [] }
];

export const COACHES: Coach[] = [
  {
    id: 'coach-1',
    name: 'Head Coach Sam',
    role: 'Founder & Lead Trainer',
    bio: 'Over 15 years of competitive experience and a passion for community boxing.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'coach-2',
    name: 'Coach Dave',
    role: 'Youth Specialist',
    bio: 'Dedicated to helping the youth of Bude find discipline and confidence through boxing.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Chris M.',
    text: "BBA has changed my outlook on fitness. The community here is unmatched. It's tough training, but so rewarding.",
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah L.',
    text: "The youth classes are fantastic. My son has grown so much in confidence since joining the academy.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Mark T.',
    text: "Best gym in Bude! No egos, just hard work and great coaching. Everyone is welcome here.",
    rating: 5
  }
];
