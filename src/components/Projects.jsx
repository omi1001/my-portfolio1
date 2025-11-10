import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Using react-icons for the links
import netlixImage from '../assets/image2.png';
import webappImage from '../assets/image5.png';
import blogappimage from '..assets/image.png';

// --- ⚠️ ADD YOUR IMAGE IMPORT HERE ---
// import netflixImage from '../assets/netflix-clone.png';
// import project2Image from '../assets/project2.png';

// This is where you'll add all your project details
const projectData = [
  {
    title: 'Netflix Clone',
    
    image: netlixImage, // <-- Add your image import
    description:
      'A feature-rich clone of the Netflix homepage. Built with React, Tailwind CSS, and powered by the TMDB API for movie data. Includes Firebase authentication for user sign-in.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'TMDB API'],
    liveLink: 'https://omi1001.github.io/netflix-clone/',
    githubLink: 'https://github.com/omi1001/netflix-clone.git',
  },
  {
    title: 'webapp',
    image: webappImage, // <-- Add your image import
    description:
      'A full-stack E-Commerce. Users can browse, Buy, and return PC parts. Built with JSP, Servlets, and a Oracle XE database.',
    tags: ['JSP', 'Java', 'ORACLE', 'HTML', 'CSS'],
    liveLink: '#', // <-- Add link
    githubLink: 'https://github.com/omi1001/webapp.git', // <-- Add link
  },
  {
    title: 'Blog-App',
    image: blogappimage, // <-- Add your image import
    description:
      'This mobile app is made with using react-native for live preview while the development android studio is used to ensure the better frontend. Meanwhile for the backend PostgreSql is used to store the data like posts and to connect the frontend to backend Rest API is used. Authorization has been implemented so that used does not  have to use the spring generated password again and again. ',
    tags: ['Spring-Boot', 'Java', 'PostgreSql', 'React-Native', 'CSS', 'Android Studio', 'Postman'],
    //liveLink: '#', // <-- Add link
    githubLink: 'https://github.com/omi1001/MyBlogApp.git', // <-- Add link
  },
  // Add more projects here
];

// Animation for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* === Section Header === */}
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </span>
        </h2>

        {/* === Projects Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {/* --- Image --- */}
              <img
                // Use a placeholder if no image is provided
                src={project.image || 'https://via.placeholder.com/600x400'}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* --- Card Content --- */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* --- Tags --- */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* --- Links --- */}
                <div className="flex justify-start gap-4 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 font-medium text-gray-300 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
