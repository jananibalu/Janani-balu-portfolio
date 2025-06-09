import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import { slideUp, slideLeft } from '../utils/animation';
import janani from '../assets/images/janani-img.png';
import jananiResume from '../Janani-Balu-frontend-developer.pdf';


const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 mt-8 pb-12">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}

          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 font-medium text-sm mb-6"
              variants={slideUp(0.1)}
            >
              Web Developer & Designer
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-900 dark:text-white"
              variants={slideUp(0.2)}
            >
              Hi, I'm Janani Balu
              <span className="block text-accent-500">
                I build things for the web
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={slideUp(0.3)}
            >
              I'm a passionate Frontend  developer with a strong focus on creating
              elegant, efficient, and user-friendly applications that solve real-world problems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={slideUp(0.4)}
            >
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Contact Me <ArrowRight size={18} className="ml-2" />
              </a>

              <a
                href={jananiResume}
                download
                className="btn btn-secondary"
              >
                Download my resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              variants={slideUp(0.5)}
            >
              <a
                href="https://github.com/jananibalu"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/janani-balu-86a31923b/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_zenjb"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft(0.2)}
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-accent-500/20 dark:bg-accent-500/10 animate-pulse" />
              <img
                src={janani}
                alt="Janani Balu"
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-primary-800 shadow-xl"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 p-4 bg-white dark:bg-primary-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="font-bold text-2xl text-accent-500">2+</span>
                <p className="text-xs text-primary-600 dark:text-primary-300">Years Experience</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 p-4 bg-white dark:bg-primary-800 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="font-bold text-2xl text-accent-500">10+</span>
                <p className="text-xs text-primary-600 dark:text-primary-300">Projects Completed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;