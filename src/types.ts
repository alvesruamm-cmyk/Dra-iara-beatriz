import { LucideIcon } from 'lucide-react';

export interface Procedure {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location: string;
  text: string;
  stars: number;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface LocationInfo {
  name: string;
  address: string;
  mapsUrl: string;
  phone: string;
}
