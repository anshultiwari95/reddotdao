'use client';

import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Rewards/Hero';
import RewardTypes from '../components/Rewards/RewardTypes';
import EarningSystem from '../components/Rewards/EarningSystem';
import Leaderboard from '../components/Rewards/Leaderboard';
import CTA from '../components/Rewards/CTA';

export default function Rewards() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Full-screen scrollable container */}
      <div className="relative z-10 h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory pt-16">
        
        {/* Hero Section */}
        <div className="snap-start min-h-screen">
          <Hero />
        </div>

        {/* Reward Types */}
        <div className="snap-start min-h-screen">
          <RewardTypes />
        </div>

        {/* Earning System */}
        <div className="snap-start min-h-screen">
          <EarningSystem />
        </div>

        {/* Leaderboard */}
        <div className="snap-start min-h-screen">
          <Leaderboard />
        </div>

        {/* CTA Section */}
        <div className="snap-start min-h-screen">
          <CTA />
        </div>
      </div>
    </div>
  );
}
