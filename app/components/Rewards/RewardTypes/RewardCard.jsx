'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function RewardCard({ reward, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.3 }}
      viewport={{ once: true }}
      className="relative group"
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="bg-black/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-400/50 hover:bg-black/30"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {reward.icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 text-red-400">
          {reward.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {reward.description}
        </p>
        <ul className="space-y-2">
          {reward.features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              className="flex items-center text-sm text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + featureIndex * 0.15 }}
              viewport={{ once: true }}
            >
              <Star className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
} 