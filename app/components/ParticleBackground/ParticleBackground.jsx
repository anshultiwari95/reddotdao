'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: '#000000' },
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: '#00f0ff' },
          links: {
            enable: true,
            color: '#00f0ff',
            distance: 140,
            opacity: 0.5,
          },
          move: { enable: true, speed: 1.2 },
          size: { value: 2 },
        },
      }}
    />
  );
}
