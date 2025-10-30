import React, { useState } from 'react';
// 1. We import 'Link' from 'react-scroll', NOT 'react-router-dom'
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion'; // Added for extra polish

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 2. These are the IDs of your sections, not URL paths
  const navLinks = [
    { name: 'Home', to: 'hero' }, // 'hero' is the ID of your Hero section
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
  ];
  const contactLink = { name: 'Contact', to: 'contact' };

  // 3. This is the new, eye-catchy style for the *active* link
  const activeLinkClass = 'text-white font-bold border-b-2 border-purple-500';
  const inactiveLinkClass = 'text-gray-300 hover:text-white transition-colors duration-200';

  // Shared Link properties
  const linkProps = {
    spy: true,          // Makes the link "spy" on the scroll position
    smooth: true,       // Enables smooth scrolling
    duration: 500,      // Scroll speed in milliseconds
    offset: -80,        // Adjust this to your navbar height!
    activeClass: activeLinkClass, // Class to apply when link is active
    className: `cursor-pointer ${inactiveLinkClass}`, // Default classes
  };

  return (
    // 4. Added backdrop-blur for a "frosted glass" effect. More eye-catchy!
    <nav className="w-full p-4 bg-gray-900/70 backdrop-blur-md text-white shadow-lg shadow-white/5 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* === Logo/Brand Name === */}
        {/* We can use a react-scroll Link here to scroll to the top */}
        <Link
          to="hero" // Points to the Hero section
          smooth={true}
          duration={500}
          className="text-2xl font-bold tracking-tight cursor-pointer transition-transform hover:scale-105"
        >
          Om.dev
        </Link>

        {/* === Desktop Nav Links === */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} {...linkProps}>
              {link.name}
            </Link>
          ))}
          {/* === CTA Button (Desktop) === */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={contactLink.to}
              {...linkProps}
              activeClass="" // Reset activeClass for the button
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-all duration-200"
            >
              {contactLink.name}
            </Link>
          </motion.div>
        </div>

        {/* === Mobile Menu Button === */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* === Mobile Menu (Dropdown) === */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              {...linkProps}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {link.name}
            </Link>
          ))}
          {/* === CTA Button (Mobile) === */}
          <Link
            to={contactLink.to}
            {...linkProps}
            activeClass=""
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-10 py-2 rounded-md hover:opacity-90 transition-all duration-200 w-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {contactLink.name}
          </Link>
        </div>
      </div>
    </nav>
  );
}