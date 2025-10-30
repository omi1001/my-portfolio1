import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // We already installed react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ⚠️ REPLACE with your social links
  const GITHUB_URL = 'https://github.com/omi1001';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/om-singh-260167327/'; // Add your LinkedIn URL

  return (
    <footer className="w-full py-8 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* === Copyright === */}
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Om. All rights reserved.
        </p>

        {/* === Social Links === */}
        <div className="flex gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          {/* Add more socials here if you want */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;