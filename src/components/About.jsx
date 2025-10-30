import React from 'react';
import { motion } from 'framer-motion';

// Animation for the whole section fading in
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.8,
      delay: 0.1,
    },
  },
};

// Animation for staggering the skill "pills"
const skillContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Each skill will animate 0.15s after the previous
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

// ⚠️ REPLACE THIS with your actual skills
const mySkills = [
  'React',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'Framer Motion',
  'Vite',
  'Bun',
  'Node.js',
  'MongoDB',
  'Git & GitHub',
  'Bootstrap',
  'HTML5',
  'CSS3',
  'Firebase',
  'Express.js',
];

const About = () => {
  return (
    <motion.section
      id="about" // Add an ID so the navbar link can find it
      className="w-full py-24 px-4 bg-gray-900 text-gray-300"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate once when 30% is in view
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* === Left Column: Text === */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </span>
          </h2>
          <p className="text-lg mb-4">
            {/* ⚠️ REPLACE THIS PARAGRAPH */}
            Hello! I'm Om, a passionate web developer with a love for building
            clean, intuitive, and dynamic user interfaces. My journey in tech
            started with a simple "Hello World" and has grown into a full-blown
            passion for creating applications that are both functional and
            beautiful.
          </p>
          <p className="text-lg">
            {/* ⚠️ REPLACE THIS PARAGRAPH */}
            I specialize in the MERN stack (MongoDB, Express, React, Node.js)
            and enjoy bringing ideas to life in the browser. Whether it's a
            complex web-app or a modern-portfolio, I'm always eager to take
            on new challenges and learn new technologies.
          </p>
        </div>

        {/* === Right Column: Skills === */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6 text-white">My Toolkit</h3>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={skillContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {mySkills.map((skill) => (
              <motion.span
                key={skill}
                className="bg-gray-800 border border-gray-700 text-blue-300 px-4 py-2 rounded-full font-medium"
                variants={skillItemVariants}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;