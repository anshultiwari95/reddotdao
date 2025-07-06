'use client';

import { motion } from 'framer-motion';
import { Play, Shield, Users, TrendingUp, Github, Twitter, Linkedin, ArrowRight, Eye, Lock, Zap, DollarSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-gray-900 to-black text-gray-400 py-6 sm:py-8 px-4 border-t border-gray-800 relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-4 sm:right-10 w-20 sm:w-24 h-20 sm:h-24 bg-red-600 rounded-full blur-2xl"></div>
      </div>

      <div className="youtube-container relative z-10 w-full max-w-6xl mx-auto">
        {/* Compact Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8 items-center">
          {/* Image and content section */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* YouTube-style symbolic representation */}
              <div className="relative rounded-xl overflow-hidden youtube-hover bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 sm:p-8">
                {/* Main large icon - Data Ownership */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl youtube-glow">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                
                {/* Symbolic icon grid - Data Sovereignty */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-700">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    </div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-700">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    </div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg border border-gray-700">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    </div>
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Animated elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-3 right-3 w-1.5 h-1.5 bg-red-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-3 left-3 w-1 h-1 bg-red-300 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white youtube-glow-text">
                Own Your Digital Future
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Break free from data exploitation. Your digital footprint belongs to you, not to algorithms. 
                Join the movement for true data sovereignty and privacy.
              </p>
              
              {/* Compact feature highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-lg flex items-center justify-center">
                    <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 text-center">Privacy</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 text-center">Ownership</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-lg flex items-center justify-center">
                    <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 text-center">Community</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compact CTA section */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="youtube-card p-4 sm:p-6">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    Ready to Reclaim Your Data?
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Download our browser extension and start earning rewards while maintaining 
                    complete control over your YouTube watch history data.
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <motion.button
                    className="youtube-btn w-full text-xs sm:text-sm py-2.5 px-4 min-h-[40px] sm:min-h-[44px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download Extension
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 inline" />
                  </motion.button>
                  
                  <p className="text-xs text-gray-500">
                    Free • Open Source • Privacy First
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="youtube-card p-2 sm:p-3">
                <div className="text-sm sm:text-lg font-bold text-red-500">10K+</div>
                <div className="text-xs text-gray-400">Users</div>
              </div>
              <div className="youtube-card p-2 sm:p-3">
                <div className="text-sm sm:text-lg font-bold text-red-500">50M+</div>
                <div className="text-xs text-gray-400">Videos</div>
              </div>
              <div className="youtube-card p-2 sm:p-3">
                <div className="text-sm sm:text-lg font-bold text-red-500">$100K+</div>
                <div className="text-xs text-gray-400">Paid</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* YouTube-style divider */}
        <div className="youtube-divider mb-4 sm:mb-6"></div>

        {/* Compact footer links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Brand section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Play className="w-3 h-3 sm:w-4 sm:h-4 text-white ml-0.5" />
              </div>
              <h2 className="text-sm sm:text-lg font-bold text-white">RedDotDAO</h2>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Reclaiming your digital sovereignty through decentralized data ownership.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <motion.a
                href="#"
                className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </motion.a>
              <motion.a
                href="#"
                className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </motion.a>
              <motion.a
                href="#"
                className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </motion.a>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold mb-2 text-xs sm:text-sm">Product</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Browser Extension</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Data Dashboard</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Rewards System</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">API Documentation</a></li>
            </ul>
          </div>

          {/* Community links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold mb-2 text-xs sm:text-sm">Community</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Discord</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Telegram</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Twitter</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-white font-semibold mb-2 text-xs sm:text-sm">Resources</h3>
            <ul className="space-y-1 text-xs">
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-200">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 sm:mt-6 pt-4 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © 2024 RedDotDAO. All rights reserved. Built for data sovereignty.
          </p>
        </div>
      </div>
    </footer>
  );
}
