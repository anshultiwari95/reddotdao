'use client';

import { motion } from 'framer-motion';

export default function LeaderboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
        Top Contributors
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        See who's leading the data sovereignty movement
      </p>
    </motion.div>
  );
} 