'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Intro Description */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-sm sm:text-base text-blue-900 uppercase tracking-widest mb-2 font-bold"
      >
        The Future of Data Ownership Starts Here
      </motion.p>

      {/* Glowing Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-orbitron tracking-wide font-bold text-blue-700 drop-shadow-[0_0_12px_rgba(3,105,161,0.25)]"
      >
        Welcome to <span className="text-blue-800 font-bold drop-shadow-[0_0_8px_rgba(3,105,161,0.4)]">BitsNebula</span>
      </motion.h1>

      {/* Main Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 text-lg sm:text-xl text-neutral-700 max-w-2xl"
      >
        A futuristic data DAO powered by your YouTube history. Contribute your watch data to help train ethical AI models — earn rewards and shape the future of decentralized intelligence.
      </motion.p>

      {/* Call to Action */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-6 text-base sm:text-lg text-gray-600"
      >
        Take control of your digital footprint — and profit from it.
      </motion.p>
    </section>
  );
}
