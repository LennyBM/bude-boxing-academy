
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface ScheduleItem {
  day: string;
  classes: Array<{
    time: string;
    label: string;
  }>;
  status: 'Open' | 'Closed';
}
