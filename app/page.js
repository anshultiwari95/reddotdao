'use client';

import Hero from './components/Hero/Hero';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import WatchHistory from './components/ScrollSections/WatchHistory';
import GoogleUsage from './components/ScrollSections/GoogleUsage';
import WhyCare from './components/ScrollSections/WhyCare';
import RedDotDAO from './components/ScrollSections/RedDotDAO';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function Home() {
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
    </div>
  );
}
