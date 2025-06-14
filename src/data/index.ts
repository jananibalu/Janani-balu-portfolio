import { Project, Testimonial, Service, NavLink } from '../types';
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import bootstrap from "../assets/images/bootstrap.png";
import redux from "../assets/images/redux.png";
import css from "../assets/images/css-3.png";
import figma from "../assets/images/figma.png";
import git from "../assets/images/git.png";
import node from "../assets/images/node-js.png";
import javascript from "../assets/images/javascript.png";
import typescript from "../assets/images/typescript.png";
import blockchani from "../assets/images/blockchani.jpg";
import medi from "../assets/images/medi-cal.jpg";
import japanese from "../assets/images/japanese.jpg";
import dm from "../assets/images/dm.jpg";
import tour from "../assets/images/tour.jpg";
import todo from "../assets/images/to-do.png";




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
    id: 9,
    title: 'TrackWise – Task Management Web App',
    description: 'A clean and responsive to-do application that allows users to create, manage, filter, and search tasks with light and dark mode support. Built using modern React and Redux patterns with a focus on UI accessibility and theme customization.',
    image: todo, // Replace with your actual app screenshot or hero image URL
    category: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'Redux', 'Bootstrap 5', 'CSS3'],
    url: 'https://trackwise-to-do.vercel.app/',
  },
  
  {
    id: 1,
    title: 'Blockchain-Based Crypto Tracking System',
    description: 'A decentralized platform designed to track and display cryptocurrency transactions in real-time using blockchain technology, ensuring transparency and security.',
    image: blockchani,
    category: 'Web Applications',
    technologies: ['React.js', 'TypeScript', 'Redux', 'CSS3', 'HTML5'],
    url: '#',
  },
  {
    id: 2,
    title: 'Medi-cal Calculator Application',
    description: 'A responsive medical web app that allows healthcare professionals to perform complex dosage and clinical calculations quickly and accurately.',
    image: medi,
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
    title: 'Tour Booking',
    description: 'A feature-rich travel website offering destination packages, booking services, and promotional offers with an intuitive user interface.',
    image: tour,
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
    image: dm,
    category: 'Static Websites',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    url: '#',
  },
  {
    id: 7,
    title: 'Japanese Online Test',
    description: 'An online examination platform for Japanese language students, supporting registration, hall ticket generation, and exam tracking.',
    image: japanese,
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

// export const skills: Skill[] = [
//   { id: 1, name: 'HTML5', level: 95, category: 'frontend', icon:{science} },
//   { id: 2, name: 'CSS3', level: 95, category: 'frontend' },
//   { id: 3, name: 'JavaScript', level: 92, category: 'frontend' },
//   { id: 4, name: 'bootstrap', level: 95, category: 'frontend' },
//   { id: 4, name: 'React', level: 90, category: 'frontend' },
//   { id: 5, name: 'Redux', level: 90, category: 'frontend' },
//   { id: 7, name: 'Node.js', level: 85, category: 'frontend' },
//   { id: 13, name: 'Figma', level: 90, category: 'frontend' },
//   { id: 15, name: 'Git', level: 88, category: 'frontend' },
// ];


export const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: html,
    category: 'frontend',
  },
  {
    id: 2,
    name: 'CSS3',
    icon: css,
    category: 'frontend',
  },
  {
    id: 3,
    name: 'Bootstrap',
    icon: bootstrap,
    category: 'frontend',
  },
  {
    id: 4,
    name: 'JavaScript',
    icon: javascript,
    category: 'frontend',
  },
  {
    id: 5,
    name: 'React.js',
    icon: react,
    category: 'frontend'
  },
  {
    id: 6,
    name: 'typescript',
    icon: typescript,
    category: 'frontend',
  },
  {
    id: 7,
    name: 'redux',
    icon: redux,
    category: 'frontend',
  },
  {
    id: 8,
    name: 'figma',
    icon: figma,
    category: 'frontend',
  },
  {
    id: 9,
    name: 'git',
    icon: git,
    category: 'frontend',
  },
  {
    id: 10,
    name: 'node',
    icon: node,
    category: 'frontend',
  },

];


