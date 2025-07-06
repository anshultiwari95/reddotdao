'use client';

import Hero from './components/Hero/Hero';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import FullScrollWrapper from './components/ScrollSections/FullScrollWrapper';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      
      {/* 🔴 Particles Background (behind everything) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* 🟥 Hero Section */}
      <section className="relative z-10 h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* 🟢 Scrollable Full-Screen Sections */}
      <section
        id="scroll-wrapper"
        className="relative z-10 h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      >
        <FullScrollWrapper />
      </section>
    </div>
  );
}
