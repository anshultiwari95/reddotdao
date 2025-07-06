'use client';

import { motion } from 'framer-motion';
import { Gift, TrendingUp, Star } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Earn Rewards
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get rewarded for contributing to data sovereignty. Share your YouTube data and earn RedDot tokens, badges, and exclusive features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div 
            className="flex items-center justify-center space-x-3 text-red-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Gift className="w-8 h-8" />
            <span className="text-lg font-semibold">Multiple Reward Types</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-3 text-red-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TrendingUp className="w-8 h-8" />
            <span className="text-lg font-semibold">Daily Streaks</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-3 text-red-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-8 h-8" />
            <span className="text-lg font-semibold">Exclusive Features</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 