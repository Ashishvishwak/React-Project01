import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Initial state
        animate={{ opacity: 1, y: 0 }} // Final state
        transition={{ duration: 1 }} // Animation duration
        className="text-center"
      >
        <p>Developed by <span className="font-bold">Vedant</span></p>
      </motion.div>
    </footer>
  );
}

export default Footer;
