import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Award, Briefcase } from 'lucide-react';
import { skills } from '../data';
// import { slideUp, slideRight, slideLeft, staggerContainer, staggerItem } from '../utils/animation';
import { slideUp, slideRight, slideLeft, staggerContainer, staggerItem } from '../utils/animation';


const About: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');


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

            {/* <p className="text-primary-700 dark:text-primary-300 mb-6">
              I'm a passionate Frontend  developer and designer with over 2 years of experience
              creating beautiful, functional, and user-centered digital experiences. I believe
              in crafting clean, efficient code and intuitive designs that provide exceptional
              user experiences.
            </p>

            <p className="text-primary-700 dark:text-primary-300 mb-8">
              Having worked with clients ranging from startups to large corporations, I bring
              a diverse set of skills and perspectives to every project. My goal is always to
              build products that are not only visually appealing but also functionally robust
              and aligned with business objectives.
            </p> */}
            <p>
              I'm Janani Balu, a passionate Frontend Developer with 2 years of experience building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, and React, and I love turning creative ideas into clean and functional user interfaces.
            </p>
            <p>
              Currently based in Chennai, I’ve worked on real-time projects that involved both frontend tasks and team collaboration. I enjoy learning new technologies, solving UI/UX problems, and continuously improving my skills.
            </p>
            <p>
              When I'm not coding, you’ll probably find me exploring new design trends, doing a bit of gym training, or sipping coffee while learning something new on YouTube.
            </p>
            <p>
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

              {/* <div className="flex items-center">
                <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-500 mr-3">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-800 dark:text-primary-100">Awards</h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400">Best Designer 2022</p>
                </div>
              </div> */}

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

          {/* Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft()}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-800 dark:text-primary-100">
              My <span className="text-accent-500">Skills</span>
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary-800 dark:text-primary-200">Frontend Development</h4>
                <div className="space-y-4">
                  {frontendSkills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-primary-700 dark:text-primary-300">{skill.name}</span>
                        <span className="text-primary-700 dark:text-primary-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2">
                        <motion.div
                          className="bg-accent-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold mb-3 text-primary-800 dark:text-primary-200">Backend Development</h4>
                <div className="space-y-4">
                  {backendSkills.slice(0, 2).map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-primary-700 dark:text-primary-300">{skill.name}</span>
                        <span className="text-primary-700 dark:text-primary-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2">
                        <motion.div
                          className="bg-accent-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              {/* 
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary-800 dark:text-primary-200">Design</h4>
                <div className="space-y-4">
                  {designSkills.slice(0, 2).map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-primary-700 dark:text-primary-300">{skill.name}</span>
                        <span className="text-primary-700 dark:text-primary-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-primary-200 dark:bg-primary-700 rounded-full h-2">
                        <motion.div
                          className="bg-accent-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;