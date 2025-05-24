import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../data';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const navItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    

    
    
    // <motion.header
    //   className={`fixed w-full z-50 transition-all duration-300 
    //     ${isOpen
    //       ? 'bg-white dark:bg-primary-900 py-4 shadow-md'
    //       : scrolled
    //         ? 'py-3 glassmorphism shadow-md'
    //         : 'py-5 bg-transparent'}`}
    //   initial="hidden"
    //   animate="visible"
    //   variants={headerVariants}
    // >

    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-white dark:bg-primary-900 shadow-md py-4'
          : 'bg-white dark:bg-primary-900 py-6'
        }`}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ height: 'auto' }}
    >
  

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-2xl md:text-xl font-bold text-primary-800 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Janani <span className="text-accent-500">Balu</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base md:text-sm">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500"
                />
              )}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="p-2 text-primary-800 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-primary-900 z-40 pt-20 w-full md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Close Button Inside Menu */}
            <div className="absolute top-4 right-6">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} className="text-primary-800 dark:text-white" />
              </button>
            </div>

            <nav className="max-w-7xl mx-auto px-6 flex flex-col space-y-6 mt-6">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  className={`text-2xl font-medium ${activeSection === item.id
                    ? 'text-accent-500'
                    : 'text-primary-800 dark:text-primary-100'
                    }`}
                  custom={i}
                  variants={navItemVariants}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
