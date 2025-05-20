import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Lightbulb } from 'lucide-react';
import { services } from '../data';
import { slideUp, staggerContainer, staggerItem } from '../utils/animation';

const Services: React.FC = () => {
  // Map service icon names to Lucide icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={36} className="text-accent-500" />;
      case 'palette':
        return <Palette size={36} className="text-accent-500" />;
      case 'smartphone':
        return <Smartphone size={36} className="text-accent-500" />;
      case 'lightbulb':
        return <Lightbulb size={36} className="text-accent-500" />;
      default:
        return <Code size={36} className="text-accent-500" />;
    }
  };

  return (
    <section id="services" className="section bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp()}
        >
          My <span className="text-accent-500">Services</span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="card p-8 group"
              variants={staggerItem}
              whileHover={{ y: -10 }}
            >
              <div className="p-4 bg-accent-100 dark:bg-accent-900/30 rounded-xl inline-flex mb-6 group-hover:bg-accent-500 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {getIcon(service.icon)}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-primary-800 dark:text-primary-100 mb-4">
                {service.title}
              </h3>
              
              <p className="text-primary-600 dark:text-primary-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="mt-20 p-8 lg:p-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-xl text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp(0.3)}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to start your project?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. I offer tailored solutions to meet your specific needs.
          </p>
          <a 
            href="#contact" 
            className="btn bg-white text-accent-600 hover:bg-primary-100 focus:ring-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;