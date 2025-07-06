'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const { scrollY } = useScroll();

  const frontY = useTransform(scrollY, [0, 1000], [0, 25]);
  const frontX = useTransform(scrollY, [0, 1000], [0, 10]);
  const backY = useTransform(scrollY, [0, 1000], [0, 8]);
  const backX = useTransform(scrollY, [0, 1000], [0, 4]);

  return (
    <>
      {/* 🔴 Back Ambient Layer */}
      <motion.div
        style={{ y: backY, x: backX }}
        className="absolute inset-0 -z-20 pointer-events-none will-change-transform"
      >
        <Particles
          id="tsparticles-back"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            background: { color: { value: '#0a0a0a' } },
            particles: {
              number: { value: 100, density: { enable: true, area: 800 } },
              color: { value: '#330000' },
              shape: { type: 'circle' },
              size: { value: { min: 0.6, max: 1.4 } },
              opacity: { value: 0.05 },
              move: {
                enable: true,
                speed: 0.2,
                random: true,
                outModes: { default: 'out' },
              },
              links: { enable: false },
            },
            detectRetina: true,
          }}
        />
      </motion.div>

      {/* 🔺 Front Layer: Play Icons + Red Glow Links */}
      <motion.div
        style={{ y: frontY, x: frontX }}
        className="absolute inset-0 -z-10 pointer-events-none will-change-transform"
      >
        <Particles
          id="tsparticles-front"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 200, density: { enable: true, area: 800 } },
              shape: {
                type: ['image', 'circle'],
                image: [
                  {
                    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiNGRjAwMDAiLz48cG9seWdvbiBwb2ludHM9IjEwLDggMTYsMTIgMTAsMTYiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
                    width: 12,
                    height: 8,
                  },
                ],
              },
              color: { value: ['#FF0000', '#ff4d4d'] },
              size: {
                value: { min: 0.8, max: 1.8 },
              },
              opacity: {
                value: { min: 0.2, max: 0.9 },
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
                random: true,
                outModes: { default: 'out' },
              },
              links: {
                enable: true,
                distance: 120,
                color: '#ff3333',
                opacity: 0.15,
                width: 0.7,
                blink: true,
              },
            },
            detectRetina: true,
          }}
        />
      </motion.div>
    </>
  );
}
