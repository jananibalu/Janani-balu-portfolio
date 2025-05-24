import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { slideUp, slideLeft, slideRight } from '../utils/animation';


const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp()}
        >
          Get in <span className="text-accent-500">Touch</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight()}
          >
            <h3 className="text-2xl mt-28 font-bold mb-6 text-primary-800 dark:text-primary-100">
              Contact <span className="text-accent-500">Information </span>
            </h3>


            <p className="text-primary-700 dark:text-primary-300 mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 dark:text-primary-100">Location</h4>
                  <p className="text-primary-600 dark:text-primary-400">Chennai</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 dark:text-primary-100">Email</h4>
                  <a
                    href="mailto:jananibalu2050@example.com"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    jananibalu2050@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 dark:text-primary-100">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-primary-600 dark:text-primary-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft()}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-100">
              Send me a <span className="text-accent-500">Message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-primary-700 dark:text-primary-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-primary-700 dark:text-primary-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-primary-700 dark:text-primary-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-primary-700 dark:text-primary-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-primary-800 border border-primary-300 dark:border-primary-700 text-primary-800 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn px-8 py-4 ${isSubmitted
                  ? 'bg-success-500 text-white'
                  : 'btn-primary'
                  }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <Check size={18} className="mr-2" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;