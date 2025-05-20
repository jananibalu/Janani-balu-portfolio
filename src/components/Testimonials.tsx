import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data';
import { slideUp } from '../utils/animation';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp()}
        >
          Client <span className="text-accent-500">Testimonials</span>
        </motion.h2>
        
        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp(0.1)}
        >
          {/* Testimonial Slider */}
          <div className="overflow-hidden relative py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="card p-8 md:p-12 text-center">
                    <div className="flex justify-center mb-6">
                      <Quote size={40} className="text-accent-500 rotate-180" />
                    </div>
                    
                    <p className="text-lg md:text-xl text-primary-700 dark:text-primary-300 italic mb-8">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent-500">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-bold text-primary-800 dark:text-primary-100">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-primary-100 dark:bg-primary-800 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 rounded-full text-primary-700 dark:text-primary-300 transition-colors z-10 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-primary-100 dark:bg-primary-800 hover:bg-accent-500 hover:text-white dark:hover:bg-accent-500 rounded-full text-primary-700 dark:text-primary-300 transition-colors z-10 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? 'bg-accent-500'
                    : 'bg-primary-300 dark:bg-primary-700 hover:bg-primary-400 dark:hover:bg-primary-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;