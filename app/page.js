'use client';

import Hero from './components/Hero/Hero';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import WatchHistory from './components/ScrollSections/WatchHistory';
import GoogleUsage from './components/ScrollSections/GoogleUsage';
import WhyCare from './components/ScrollSections/WhyCare';
import RedDotDAO from './components/ScrollSections/RedDotDAO';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { motion } from 'framer-motion';
import { Upload, Shield, Award } from 'lucide-react';
import { useState } from 'react';
import UploadModal from './components/UploadModal/UploadModal';
import AuthModal from './components/Auth/AuthModal';
import { useAuthModal } from './contexts/AuthModalContext';

export default function Home() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { isAuthModalOpen, closeAuthModal } = useAuthModal();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* 🔴 Particles Background (behind everything) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* 🟥 Navbar */}
      <Navbar />

      {/* 🟥 Main Scrollable Container */}
      <div className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory smooth-scroll-container pt-14 sm:pt-16">
        
        {/* Hero Section */}
        <section className="full-screen-section flex items-center justify-center min-h-screen">
          <Hero />
        </section>

        {/* Contribution Methods Section */}
        <section className="full-screen-section flex items-center justify-center min-h-screen">
          <div className="youtube-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How to <span className="text-red-500">Contribute</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose your preferred method to share your YouTube data and start earning rewards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {/* Browser Extension */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Browser Extension</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  Install our browser extension to automatically share your YouTube watch history anonymously.
                </p>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 mt-auto">
                  Download Extension
                </button>
              </div>

              {/* Manual Upload */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Manual Upload</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  Upload your YouTube data export files directly to our secure platform.
                </p>
                <button 
                  onClick={() => setIsUploadModalOpen(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 mt-auto"
                >
                  Upload Data
                </button>
              </div>

              {/* Earn Rewards */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Earn Rewards</h3>
                </div>
                <p className="text-gray-300 mb-4 flex-grow">
                  Earn tokens and rewards for contributing your YouTube watch history data to the RedDotDAO ecosystem.
                </p>
                <button 
                  onClick={() => window.location.href = '/rewards'}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-200 mt-auto"
                >
                  View Rewards
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Watch History Section */}
        <div className="full-screen-section">
          <WatchHistory />
        </div>

        {/* Google Usage Section */}
        <div className="full-screen-section">
          <GoogleUsage />
        </div>

        {/* Why Care Section */}
        <div className="full-screen-section">
          <WhyCare />
        </div>

        {/* RedDotDAO Section */}
        <div className="full-screen-section">
          <RedDotDAO />
        </div>

        {/* Footer Section */}
        <div className="full-screen-section">
          <Footer />
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal 
        isOpen={isUploadModalOpen} 
        onClose={() => setIsUploadModalOpen(false)} 
      />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
      />
    </div>
  );
}
