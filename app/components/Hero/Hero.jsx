'use client';

import { motion } from 'framer-motion';
import { Play, Shield, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* 🔴 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 sm:space-y-8 lg:space-y-10"
      >
        
        {/* 🟥 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium"
        >
          <Shield className="w-4 h-4" />
          <span>YouTube Data Sovereignty</span>
        </motion.div>

        {/* 🟥 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
        >
          Reclaim Your
          <span className="block text-red-500">YouTube Data</span>
        </motion.h1>

        {/* 🟥 Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Take back control of your watch history. Contribute anonymously, earn rewards, 
          and build a decentralized future for your data.
        </motion.p>

        {/* 🟥 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Get Started</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-600 hover:border-white text-white font-semibold rounded-lg transition-all duration-200 text-sm sm:text-base min-h-[44px] sm:min-h-[48px]"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Learn More</span>
          </motion.button>
        </motion.div>

        {/* 🟥 Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
        >
          {[
            { icon: Users, value: '10K+', label: 'Contributors' },
            { icon: TrendingUp, value: '50K+', label: 'Videos Shared' },
            { icon: Shield, value: '100%', label: 'Anonymous' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="flex items-center space-x-2">
                <stat.icon className="w-5 h-5 text-red-500" />
                <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
