'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Play, 
  Wallet, 
  Trophy, 
  Users, 
  BookOpen, 
  Github,
  ExternalLink,
  ChevronDown,
  Home
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle wallet connection
  const handleWalletConnect = () => {
    setIsWalletConnected(!isWalletConnected);
    // Here you would integrate with actual wallet connection
  };

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
      setIsMatrixOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'How It Works', href: '/how-it-works', icon: BookOpen },
    { name: 'Rewards', href: '/rewards', icon: Trophy },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="youtube-container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 sm:space-x-3"
                onClick={() => {
                  // Ensure navigation to homepage
                  window.location.href = '/';
                }}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                </div>
                <span className="text-lg sm:text-xl font-bold text-white">RedDotDAO</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group text-sm lg:text-base"
                    whileHover={{ y: -2 }}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-red-500 transition-colors duration-200" />
                    <span>{item.name}</span>
                  </motion.a>
                );
              })}
              
              {/* Matrix Dropdown Trigger */}
              <motion.div
                className="relative"
                onMouseEnter={() => setIsMatrixOpen(true)}
                onMouseLeave={() => setIsMatrixOpen(false)}
              >
                <motion.button
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group text-sm lg:text-base"
                  whileHover={{ y: -2 }}
                >
                  <Trophy className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-red-500 transition-colors duration-200" />
                  <span>Matrix</span>
                  <ChevronDown className="w-2 h-2 sm:w-3 sm:h-3" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              
              {/* Portfolio Link */}
              <motion.a
                href="/portfolio"
                className="hidden sm:flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Portfolio</span>
                <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3" />
              </motion.a>

              {/* Wallet Connect Button */}
              <motion.button
                onClick={handleWalletConnect}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm ${
                  isWalletConnected
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Wallet className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">
                  {isWalletConnected ? 'Connected' : 'Connect Wallet'}
                </span>
                <span className="sm:hidden">
                  {isWalletConnected ? '✓' : 'Wallet'}
                </span>
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-800 md:hidden"
          >
            <div className="youtube-container py-4">
              <div className="space-y-3">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
                      whileHover={{ x: 10 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
                
                {/* Mobile Matrix Link */}
                <motion.a
                  href="/portfolio"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Trophy className="w-4 h-4" />
                  <span>Matrix</span>
                </motion.a>
                
                {/* Mobile Portfolio Link */}
                <motion.a
                  href="/portfolio"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  <span>Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Dropdown (Desktop) */}
      <AnimatePresence>
        {isMatrixOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-30 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 hidden md:block"
            onMouseEnter={() => setIsMatrixOpen(true)}
            onMouseLeave={() => setIsMatrixOpen(false)}
          >
            <div className="youtube-container py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                
                {/* Top Contributors */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold mb-4 flex items-center space-x-2 text-sm lg:text-base">
                    <Trophy className="w-4 h-4 lg:w-5 lg:h-5 text-red-500" />
                    <span>Top Contributors</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'CryptoWhale', rank: 1, points: '2.5K', avatar: '🐋' },
                      { name: 'DataMaster', rank: 2, points: '2.1K', avatar: '👨‍💻' },
                      { name: 'PrivacyGuru', rank: 3, points: '1.8K', avatar: '🛡️' },
                    ].map((contributor) => (
                      <motion.div 
                        key={contributor.rank} 
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl lg:text-2xl">{contributor.avatar}</span>
                          <div>
                            <div className="text-white font-medium text-sm lg:text-base">{contributor.name}</div>
                            <div className="text-gray-400 text-xs">#{contributor.rank} Rank</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-red-500 font-bold text-sm lg:text-base">{contributor.points}</div>
                          <div className="text-gray-400 text-xs">Points</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold mb-4 flex items-center space-x-2 text-sm lg:text-base">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-red-500" />
                    <span>Recent Activity</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { user: 'Alice', action: 'contributed 50 videos', time: '2m ago' },
                      { user: 'Bob', action: 'earned 100 points', time: '5m ago' },
                      { user: 'Charlie', action: 'joined the DAO', time: '10m ago' },
                    ].map((activity, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="w-7 h-7 lg:w-8 lg:h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs lg:text-sm font-bold">
                            {activity.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-xs lg:text-sm">
                            <span className="font-medium">{activity.user}</span> {activity.action}
                          </div>
                          <div className="text-gray-400 text-xs">{activity.time}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold mb-4 flex items-center space-x-2 text-sm lg:text-base">
                    <Github className="w-4 h-4 lg:w-5 lg:h-5 text-red-500" />
                    <span>DAO Stats</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {[
                      { value: '1.2K', label: 'Active Members' },
                      { value: '$45K', label: 'Total Rewards' },
                      { value: '2.1M', label: 'Videos Tracked' },
                      { value: '89%', label: 'Privacy Score' },
                    ].map((stat, index) => (
                      <motion.div 
                        key={index}
                        className="bg-gray-800 p-3 lg:p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-lg lg:text-2xl font-bold text-red-500">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 