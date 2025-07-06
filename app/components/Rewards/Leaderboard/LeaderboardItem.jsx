'use client';

import { motion } from 'framer-motion';

export default function LeaderboardItem({ contributor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-black/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-400/50 hover:bg-black/30 transition-all duration-300"
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div 
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${contributor.color} flex items-center justify-center`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {contributor.icon}
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-white">
              #{contributor.rank} {contributor.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {contributor.videos} videos • {contributor.streak} streak
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-red-400">
            {contributor.tokens}
          </div>
          <div className="text-sm text-gray-400">
            RedDot Tokens
          </div>
        </div>
      </div>
    </motion.div>
  );
} 