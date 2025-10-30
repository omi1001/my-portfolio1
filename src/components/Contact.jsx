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

const Contact = () => {
  // ⚠️ IMPORTANT:
  // 1. Go to https://formspree.io/ and create a new form.
  // 2. Get your unique endpoint URL.
  // 3. Paste it below to replace 'YOUR_UNIQUE_FORM_ID'.
  const FORM_ENDPOINT = 'https://formspree.io/f/mrboalow';

  return (
    <motion.section
      id="contact"
      className="w-full py-24 px-4 bg-gray-900 text-gray-300"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* === Section Header === */}
        <h2 className="text-4xl font-bold mb-6 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Get In Touch
          </span>
        </h2>
        <p className="text-lg mb-8">
          Have a question or want to work together? Feel free to send me a
          message!
        </p>

        {/* === The Form === */}
        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* --- Name --- */}
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* --- Email --- */}
          <div>
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* --- Message --- */}
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* --- Submit Button --- */}
          <motion.button
            type="submit"
            className="px-8 py-3 w-full md:w-auto mx-auto font-semibold text-lg text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;