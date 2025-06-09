import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Update title based on scroll position
  useEffect(() => {
    const updateTitle = () => {
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
          if (sectionId === 'home') {
            document.title = 'Janani Balu | Web Developer & Designer';
          } else {
            document.title = `${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} | Janani Balu`;
          }
        }
      });
    };

    window.addEventListener('scroll', updateTitle);
    return () => window.removeEventListener('scroll', updateTitle);
  }, []);

  useEffect(() => {
    const handleContextmenu = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [])
  
  return (
    <div className="antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;