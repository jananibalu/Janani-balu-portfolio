import React from 'react';
import { Heart, ChevronUp, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">
              Janani <span className="text-accent-500">Balu</span>
            </h2>
            <p className="text-primary-300 max-w-md">
              Creating beautiful digital experiences that make a difference.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-800 hover:bg-accent-500 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-800 hover:bg-accent-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-800 hover:bg-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-accent-500 hover:bg-accent-600 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </motion.button>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Janani Balu. All rights reserved.
          </p>

          <p className="text-primary-400 text-sm flex items-center">
            Made with <Heart size={16} className="text-accent-500 mx-1" /> by Janani Balu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;