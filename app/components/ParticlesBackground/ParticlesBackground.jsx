'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const { scrollY } = useScroll();

  // Enhanced scroll transforms with more movement
  const frontY = useTransform(scrollY, [0, 1000], [0, 20]);
  const frontX = useTransform(scrollY, [0, 1000], [0, 12]);
  const backY = useTransform(scrollY, [0, 1000], [0, 8]);
  const backX = useTransform(scrollY, [0, 1000], [0, 6]);

  // Memoized particle options for better performance
  const backParticlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { 
        value: 120, // Increased from 50 for more populous effect
        density: { enable: true, area: 800 } 
      },
      color: { value: ['#ff0000', '#cc0000', '#ff4444', '#ff6666'] },
      shape: { 
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      size: { 
        value: { min: 0.5, max: 1.5 }, // Varied sizes
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
          sync: false,
        }
      },
      opacity: { 
        value: { min: 0.05, max: 0.15 }, // Much more subtle opacity
        animation: {
          enable: true,
          speed: 1.8,
          minimumValue: 0.05,
          sync: false,
        }
      },
      move: {
        enable: true,
        speed: 0.4, // Faster movement
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
        trail: {
          enable: false, // Disabled trails to reduce red background
          length: 10,
          fill: { color: '#000000' }
        },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      },
      links: { enable: false },
      collisions: {
        enable: true,
        mode: 'bounce'
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: 'random',
        animation: {
          enable: true,
          speed: 2
        }
      }
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  }), []);

  const frontParticlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { 
        value: 200, // Increased from 80 for much more populous effect
        density: { enable: true, area: 800 } 
      },
      shape: {
        type: 'circle', // Simplified to only circles to avoid any image loading issues
      },
      color: { value: ['#FF0000', '#ff4d4d', '#cc0000', '#ff3333', '#ff6666'] },
      size: {
        value: { min: 1, max: 3 }, // Larger particles
        animation: {
          enable: true,
          speed: 2.5,
          minimumValue: 1,
          sync: false,
        }
      },
      opacity: {
        value: { min: 0.15, max: 0.4 }, // Reduced opacity for subtlety
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.15,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.2, // Much faster movement
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        },
        trail: {
          enable: false, // Disabled trails to reduce red background
          length: 5,
          fill: { color: '#ff0000' }
        }
      },
      links: {
        enable: true,
        distance: 150, // Increased distance
        color: '#ff3333',
        opacity: 0.15, // Reduced opacity for subtlety
        width: 0.8, // Thinner lines
        blink: true,
        consent: true,
        shadow: {
          blur: 3, // Reduced blur
          color: '#ff0000'
        }
      },
      collisions: {
        enable: true,
        mode: 'bounce'
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: 'random',
        animation: {
          enable: true,
          speed: 3
        }
      },
      interactivity: {
        detectOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          onClick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          repulse: {
            distance: 120, // Increased distance
            duration: 0.4
          },
          push: {
            particles_nb: 4 // More particles on click
          },
          grab: {
            distance: 140,
            links: {
              opacity: 0.3 // Reduced opacity
            }
          }
        }
      }
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
  }), []);

  // Enhanced floating elements with more variety
  const floatingElements = useMemo(() => [
    {
      className: "absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full",
      animation: { 
        scale: [1, 1.8, 1], 
        opacity: [0.2, 0.6, 0.2], // Reduced opacity
        y: [0, -15, 0],
        rotate: [0, 180, 360]
      },
      transition: { duration: 4, repeat: Infinity }
    },
    {
      className: "absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-red-400 rounded-full",
      animation: { 
        scale: [1, 2, 1], 
        opacity: [0.15, 0.5, 0.15], // Reduced opacity
        x: [0, 8, 0],
        y: [0, -5, 0]
      },
      transition: { duration: 5, repeat: Infinity, delay: 1 }
    },
    {
      className: "absolute top-1/2 right-1/3 w-1 h-1 bg-red-300 rounded-full",
      animation: { 
        scale: [1, 1.6, 1], 
        opacity: [0.1, 0.4, 0.1], // Reduced opacity
        rotate: [0, 180, 360],
        x: [0, -3, 0]
      },
      transition: { duration: 6, repeat: Infinity, delay: 2 }
    },
    {
      className: "absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-red-600 rounded-full",
      animation: { 
        scale: [1, 1.4, 1], 
        opacity: [0.1, 0.3, 0.1], // Reduced opacity
        y: [0, 10, 0],
        x: [0, 5, 0]
      },
      transition: { duration: 7, repeat: Infinity, delay: 3 }
    },
    {
      className: "absolute bottom-1/4 left-1/2 w-1 h-1 bg-red-200 rounded-full",
      animation: { 
        scale: [1, 1.9, 1], 
        opacity: [0.2, 0.5, 0.2], // Reduced opacity
        rotate: [0, 360, 720],
        y: [0, -8, 0]
      },
      transition: { duration: 8, repeat: Infinity, delay: 1.5 }
    }
  ], []);

  return (
    <>
      {/* Back Ambient Layer - Enhanced */}
      <motion.div
        style={{ y: backY, x: backX }}
        className="absolute inset-0 -z-20 pointer-events-none will-change-transform"
      >
        <Particles
          id="tsparticles-back"
          init={particlesInit}
          className="w-full h-full"
          options={backParticlesOptions}
        />
      </motion.div>

      {/* Front Layer: YouTube Icons + Red Glow Links - Enhanced */}
      <motion.div
        style={{ y: frontY, x: frontX }}
        className="absolute inset-0 -z-10 pointer-events-none will-change-transform"
      >
        <Particles
          id="tsparticles-front"
          init={particlesInit}
          className="w-full h-full"
          options={frontParticlesOptions}
        />
      </motion.div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={element.className}
            animate={element.animation}
            transition={element.transition}
          />
        ))}
      </div>
    </>
  );
}
