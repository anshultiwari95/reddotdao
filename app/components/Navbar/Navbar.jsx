'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  Menu, 
  X, 
  Play, 
  Trophy, 
  Users, 
  BookOpen, 
  ExternalLink,
  ChevronDown,
  LogOut,
  User,
  Settings
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

// Dynamically import ConnectWallet to prevent SSR issues
const ConnectWallet = dynamic(() => import('../Wallet/ConnectWallet'), {
  ssr: false,
  loading: () => (
    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
      Connect Wallet
    </button>
  ),
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, signOut } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
      setIsMatrixOpen(false);
      setIsUserMenuOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'How It Works', href: '/how-it-works', icon: BookOpen },
    { name: 'Rewards', href: '/rewards', icon: Trophy },
  ];

  const handleSignOut = () => {
    signOut();
    setIsUserMenuOpen(false);
  };

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

              {/* User Menu or Auth Status */}
              {isAuthenticated ? (
                <div className="relative">
                  <motion.button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="hidden sm:block text-sm">{user?.username || 'User'}</span>
                    <ChevronDown className="w-3 h-3" />
                  </motion.button>

                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl"
                      >
                        <div className="p-2">
                          <div className="px-3 py-2 text-sm text-gray-400 border-b border-gray-700 mb-2">
                            <div className="font-semibold text-white">{user?.username || 'User'}</div>
                            <div className="text-xs">{user?.email}</div>
                          </div>
                          
                          <motion.a
                            href="/portfolio"
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors"
                            whileHover={{ x: 5 }}
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Users className="w-4 h-4" />
                            <span>My Portfolio</span>
                          </motion.a>
                          
                          <motion.button
                            onClick={handleSignOut}
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-red-400 hover:bg-gray-800 rounded transition-colors w-full"
                            whileHover={{ x: 5 }}
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign Out</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.a
                  href="/auth"
                  className="flex items-center space-x-1 sm:space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Sign In</span>
                </motion.a>
              )}

              {/* Wallet Connect Button */}
              <ConnectWallet />

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
                  <Users className="w-4 h-4" />
                  <span>Portfolio</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Mobile Auth Link */}
                {!isAuthenticated && (
                  <motion.a
                    href="/auth"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-2 text-sm"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    <span>Sign In</span>
                  </motion.a>
                )}

                {/* Mobile Sign Out */}
                {isAuthenticated && (
                  <motion.button
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors duration-200 py-2 text-sm w-full"
                    whileHover={{ x: 10 }}
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Dropdown */}
      <AnimatePresence>
        {isMatrixOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl hidden md:block"
            onMouseEnter={() => setIsMatrixOpen(true)}
            onMouseLeave={() => setIsMatrixOpen(false)}
          >
            <div className="p-4">
              <div className="space-y-4">
                {/* Top Contributors */}
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Top Contributors</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'DataPioneer', tokens: '15,420', rank: 1 },
                      { name: 'PrivacyChampion', tokens: '12,890', rank: 2 },
                      { name: 'SovereignUser', tokens: '10,234', rank: 3 }
                    ].map((contributor, index) => (
                      <motion.div
                        key={contributor.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-2 rounded bg-gray-800/50"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-red-400 font-bold">#{contributor.rank}</span>
                          <span className="text-gray-300">{contributor.name}</span>
                        </div>
                        <span className="text-red-400 font-semibold">{contributor.tokens}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Recent Activity</h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div>• DataPioneer shared 47 videos</div>
                    <div>• PrivacyChampion earned 1,200 tokens</div>
                    <div>• New user joined the DAO</div>
                  </div>
                </div>

                {/* DAO Stats */}
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">DAO Stats</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-800/50 p-2 rounded">
                      <div className="text-red-400 font-semibold">50K+</div>
                      <div className="text-gray-400">Active Users</div>
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded">
                      <div className="text-red-400 font-semibold">2.5M</div>
                      <div className="text-gray-400">Videos Shared</div>
                    </div>
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