export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}