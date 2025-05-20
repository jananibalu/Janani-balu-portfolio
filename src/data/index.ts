import { Project, Testimonial, Service, Skill, NavLink } from '../types';

export const navigation: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    url: '#',
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    description: 'A mobile application for healthcare providers to manage patient records and appointments.',
    image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Redux'],
    url: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for financial analysis with real-time data visualization.',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'UI/UX Design',
    technologies: ['Figma', 'Adobe XD', 'Sketch'],
    url: '#',
  },
  {
    id: 4,
    title: 'Travel Booking Platform',
    description: 'A comprehensive travel booking platform with hotel, flight, and activity reservations.',
    image: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    url: '#',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'A tool for businesses to track and analyze their social media performance across platforms.',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['Angular', 'Python', 'Django', 'D3.js'],
    url: '#',
  },
  {
    id: 6,
    title: 'Educational Platform',
    description: 'An interactive learning platform with courses, quizzes, and progress tracking.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB'],
    url: '#',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Innovate Tech',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Working with Janani was an absolute pleasure. He delivered our website ahead of schedule and exceeded all of our expectations. His attention to detail and creative solutions made our project stand out.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Global Solutions',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Janani expertise in both design and development made our collaboration seamless. He understood our vision immediately and transformed it into a beautiful, functional website that has significantly increased our conversions.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'DesignMasters',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'I have worked with many developers, but Janani stands out for his commitment to quality and his ability to solve complex problems with elegant solutions. Our app has received outstanding feedback from users.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating responsive, performant websites and web applications tailored to your specific needs using the latest technologies.',
    icon: 'code',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-friendly interfaces that provide exceptional user experiences and align with your brand identity.',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Mobile Development',
    description: 'Building native and cross-platform mobile applications that work seamlessly across iOS and Android devices.',
    icon: 'smartphone',
  },
  {
    id: 4,
    title: 'Digital Strategy',
    description: 'Developing comprehensive digital strategies that help your business leverage technology to achieve its goals.',
    icon: 'lightbulb',
  },
];

export const skills: Skill[] = [
  { id: 1, name: 'HTML5', level: 95, category: 'frontend' },
  { id: 2, name: 'CSS3', level: 90, category: 'frontend' },
  { id: 3, name: 'JavaScript', level: 92, category: 'frontend' },
  { id: 4, name: 'bootstrap', level: 88, category: 'frontend' },
  { id: 4, name: 'React', level: 88, category: 'frontend' },
  { id: 5, name: 'Redux', level: 85, category: 'frontend' },
  { id: 7, name: 'Node.js', level: 85, category: 'frontend' },
  // { id: 8, name: 'Express', level: 82, category: 'backend' },
  // { id: 9, name: 'MongoDB', level: 78, category: 'backend' },
  // { id: 10, name: 'PostgreSQL', level: 75, category: 'backend' },
  // { id: 11, name: 'UI Design', level: 88, category: 'design' },
  // { id: 12, name: 'UX Design', level: 86, category: 'design' },
  { id: 13, name: 'Figma', level: 90, category: 'frontend' },
  { id: 15, name: 'Git', level: 88, category: 'frontend' },
  // { id: 17, name: 'AWS', level: 70, category: 'tools' },
  // { id: 18, name: 'CI/CD', level: 72, category: 'tools' },
];