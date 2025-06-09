import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Briefcase } from 'lucide-react';
import { skills } from '../data';
// import { slideUp, slideRight, slideLeft, staggerContainer, staggerItem } from '../utils/animation';
import { slideUp, slideRight, slideLeft } from '../utils/animation';


const About: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');


  return (
    <section id="about" className="section bg-primary-50 dark:bg-primary-900/50">
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp()}
        >
          About <span className="text-accent-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight()}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-800 dark:text-primary-100">
              Professional <span className="text-accent-500">Bio</span>
            </h3>

            <p>
              I'm Janani Balu, a passionate Frontend Developer with 2 years of experience building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, and React, and I love turning creative ideas into clean and functional user interfaces.
            </p>
            <p>
              Currently based in Chennai, I’ve worked on real-time projects that involved both frontend tasks and team collaboration. I enjoy learning new technologies, solving UI/UX problems, and continuously improving my skills.
            </p>
            <p>
              When I'm not coding, you’ll probably find me exploring new design trends, doing a bit of gym training, or sipping coffee while learning something new on YouTube.
            </p>
            <p className='mb-5'>
              I'm actively looking for opportunities where I can contribute, learn, and grow as a frontend engineer. Let’s connect!
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-3">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800 dark:text-primary-100">Education</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">BCA, (GACW)</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-3">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800 dark:text-primary-100">Experience</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-3">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800 dark:text-primary-100">Projects</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">10+ Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft()}
          >
            <h3 className="text-2xl text-center font-bold mb-6 text-primary-800 dark:text-primary-100">
              My <span className="text-accent-500">Skills</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  className={`animate-slide-fade flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-white dark:bg-primary-800 
        transition-transform duration-300 hover:scale-105 hover:animate-pulse-shadow`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;