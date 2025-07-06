'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, TrendingUp, Eye, Lock, Zap, Users, Database, Globe, BarChart3, Clock, DollarSign, Vote } from 'lucide-react';

export default function TwoColumnLayout({ title, content, image, reverse, icon }) {
  const IconComponent = icon || Play;
  
  // Get appropriate icons based on title/content
  const getSymbolicIcons = (title, content) => {
    const lowerTitle = title.toLowerCase();
    const lowerContent = content.toLowerCase();
    
    // Watch History - focus on viewing, tracking, data collection
    if (lowerTitle.includes('watch') || lowerTitle.includes('history')) {
      return [Eye, BarChart3, Clock];
    } 
    // Google Usage - focus on data collection, privacy, surveillance
    else if (lowerTitle.includes('google') || lowerTitle.includes('usage') || lowerContent.includes('google')) {
      return [Globe, Shield, Lock];
    } 
    // Why Care - focus on privacy, value, control
    else if (lowerTitle.includes('care') || lowerTitle.includes('why') || lowerContent.includes('privacy') || lowerContent.includes('sovereignty')) {
      return [Shield, DollarSign, Users];
    } 
    // RedDotDAO - focus on community, governance, decentralization
    else if (lowerTitle.includes('dao') || lowerTitle.includes('reddot') || lowerContent.includes('community') || lowerContent.includes('decentralized')) {
      return [Users, TrendingUp, Vote];
    }
    // Default fallback
    return [IconComponent, Shield, TrendingUp];
  };
  
  const symbolicIcons = getSymbolicIcons(title, content);
  
  return (
    <section className="w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute top-1/4 ${reverse ? 'left-1/4' : 'right-1/4'} w-32 h-32 sm:w-64 sm:h-64 bg-red-500 rounded-full blur-3xl`}></div>
      </div>

      <div className={`flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-16 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Symbolic Icon Section */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* YouTube-style symbolic representation */}
            <div className="relative rounded-xl overflow-hidden youtube-hover shadow-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 sm:p-8">
              {/* Main large icon */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl youtube-glow">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                </div>
              </div>
              
              {/* Symbolic icon grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {symbolicIcons.map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-700">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
                    </div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
              
              {/* Animated elements */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1 h-1 bg-red-300 rounded-full"
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />
              </div>
            </div>
            
            {/* Content info */}
            <div className="mt-4 sm:mt-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg line-clamp-2">{title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">RedDotDAO • Data Sovereignty</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Text Section */}
        <motion.div
          className="lg:w-1/2 text-left space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Icon and title */}
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
              <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white youtube-glow-text leading-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Content with enhanced typography */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              {content}
            </p>
            
            {/* Feature highlights */}
            <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                <span className="text-gray-400 text-sm sm:text-base">Anonymous data collection</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                <span className="text-gray-400 text-sm sm:text-base">Secure blockchain storage</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                <span className="text-gray-400 text-sm sm:text-base">Community governance</span>
              </div>
            </div>
          </div>

          {/* YouTube-style CTA */}
          <motion.button
            className="youtube-btn youtube-hover mt-8 sm:mt-10 text-sm sm:text-base lg:text-lg py-3 sm:py-4 px-6 sm:px-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute top-1/3 ${reverse ? 'right-1/4' : 'left-1/4'} w-1 h-1 bg-red-400 rounded-full`}
          animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
