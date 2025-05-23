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
    title: 'Blockchain-Based Crypto Tracking System',
    description: 'A decentralized platform designed to track and display cryptocurrency transactions in real-time using blockchain technology, ensuring transparency and security.',
    image: 'https://images.pexels.com/photos/8353791/pexels-photo-8353791.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'Redux', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 2,
    title: 'Medical Calculator Application',
    description: 'A responsive medical web app that allows healthcare professionals to perform complex dosage and clinical calculations quickly and accurately.',
    image: 'https://images.pexels.com/photos/3738937/pexels-photo-3738937.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'Redux', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 3,
    title: 'Fin Aixs – Stock Details & Bot',
    description: 'A modern finance dashboard that provides real-time stock updates and integrates an automated trading bot for seamless portfolio management.',
    image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 4,
    title: 'Astro Tour Booking',
    description: 'A feature-rich travel website offering destination packages, booking services, and promotional offers with an intuitive user interface.',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 5,
    title: 'CRM',
    description: 'A robust Customer Relationship Management web app to handle client records, streamline communication, and track customer interactions effectively.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 6,
    title: 'Digital Marketing Website',
    description: 'A clean and professional website that showcases digital marketing solutions, service offerings, and company achievements with responsive design.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'Static Websites',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    url: '#',
  },
  {
    id: 7,
    title: 'Japanese Online Test',
    description: 'An online examination platform for Japanese language students, supporting registration, hall ticket generation, and exam tracking.',
    image: 'https://images.pexels.com/photos/590587/pexels-photo-590587.jpeg',
    category: 'Web Applications',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 8,
    title: 'Courier Services Website',
    description: 'A simple and informative website for a courier company, providing tracking features, contact info, and service highlights.',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg',
    category: 'Static Websites',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    url: '#',
  },
];



export const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   name: 'Vinoth Kumar',
  //   role: 'CEO',
  //   avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   content: 'Working with Janani was an absolute pleasure. She delivered our website ahead of schedule and exceeded all expectations. Her attention to detail and creative solutions made our project stand out.',
  // },
  // {
  //   id: 2,
  //   name: 'Priya Sharma',
  //   role: 'Marketing Director',
  //   avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   content: 'Janani’s expertise in both design and development made our collaboration seamless. She understood our vision immediately and transformed it into a beautiful, functional website that has significantly increased our conversions.',
  // },
  {
    id: 3,
    name: 'Ravi Narayanan',
    role: 'Founder',
    avatar: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'I have worked with many developers, but Janani stands out for her commitment to quality and her ability to solve complex problems with elegant solutions. Our app has received outstanding feedback from users.',
  },
  {
    id: 4,
    name: 'Anjali Mehra',
    role: 'Product Manager',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Janani impressed us with her professionalism and ability to quickly adapt to our requirements. Her contributions were key to launching our product on time with great success.',
  },
  {
    id: 5,
    name: 'Rahul Desai',
    role: 'CTO',
    avatar: 'https://images.pexels.com/photos/1832328/pexels-photo-1832328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Janani brought our ideas to life with precision and passion. Her development skills and innovative thinking have helped us scale our platform to new heights.',
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