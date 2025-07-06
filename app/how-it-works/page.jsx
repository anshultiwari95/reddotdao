'use client';

import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/HowItWorks/Hero';
import ProcessSteps from '../components/HowItWorks/ProcessSteps';
import TechnicalArchitecture from '../components/HowItWorks/TechnicalArchitecture';
import UserJourney from '../components/HowItWorks/UserJourney';
import SecurityFeatures from '../components/HowItWorks/SecurityFeatures';
import CTA from '../components/HowItWorks/CTA';

export default function HowItWorks() {
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
        <Hero />

        {/* Process Steps Section */}
        <ProcessSteps />

        {/* Technical Architecture Section */}
        <TechnicalArchitecture />

        {/* User Journey Section */}
        <UserJourney />

        {/* Security Features Section */}
        <SecurityFeatures />

        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
} 