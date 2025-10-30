import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/WhatsApp.jpg';

// You'll need to replace this with the actual path to your image
// For example: import profilePic from '../assets/my-photo.png';
const YOUR_PROFILE_IMAGE_URL = './assets/WhatsApp.jpg';

// --- Animation Variants ---

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger the children animations
    },
  },
};

// Text and button animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

// Image animation
const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, delay: 0.4 },
  },
};

// --- Component ---

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-900 text-white overflow-hidden" id='hero'>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === Text Content === */}
        <motion.div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <motion.h1
            className="text-5xl font-bold md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            variants={itemVariants}
          >
            {/* ⚠️ REPLACE THIS */}
            Hi, I'm Om
          </motion.h1>

          <motion.div
            className="mt-4 text-xl md:text-2xl text-gray-300"
            variants={itemVariants}
          >
            <TypeAnimation
              // ⚠️ REPLACE THESE STRINGS
              sequence={[
                'I am a React Developer',
                1500, // wait 1.5s
                'I am a MERN Stack Developer',
                1500,
                'I am a UI/UX Enthusiast',
                1500,
                'I love building cool things',
                1500,
                'I already have built some projects wanna check it out...?',
                1500,
                'Check out my latest work NETFLIX-CLONE',
                1500,
                'Glad to meet you here !',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.a
            href="#projects" // Link to your projects section
            className="mt-8 px-8 py-3 font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* === Image === */}
        <motion.div
          className="mt-8 md:mt-0"
          variants={imageVariants}
        >
          <img
            src= {profilePic}
            alt="Your Name"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-2xl shadow-purple-800/30"
          />
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Hero;