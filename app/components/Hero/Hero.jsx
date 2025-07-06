'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* 🚀 Glitch Flicker Neon Headline */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-200 leading-tight tracking-tight animate-[flicker_2.5s_infinite]"
        style={{
          animationName: 'flicker',
          animationDuration: '2.5s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'steps(1, end)',
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Take Back <br className="hidden md:block" />
        What’s Rightfully Yours
      </motion.h1>

      {/* 🔥 Subtext */}
      <motion.p
        className="text-base md:text-lg text-gray-400 max-w-2xl mt-4 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Every video you watched. Every search you made. Every like, every scroll — all of it built a profile you’ve never seen, and never controlled.
        <br className="hidden md:block" />
        <span className="text-gray-100 font-semibold">
          Now, it’s time to reclaim your narrative — your privacy, your power.
        </span>
      </motion.p>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 text-red-500 text-3xl animate-bounce cursor-pointer"
        onClick={() => {
          const scrollTarget = document.getElementById('scroll-wrapper');
          scrollTarget?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓
      </motion.div>

      {/* 🔧 Glitch Flicker Animation */}
      <style>
        {`
          @keyframes flicker {
            0% { text-shadow: 0 0 1px #ff0000; opacity: 1; }
            5% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff1a1a; }
            10% { opacity: 0.8; }
            15% { opacity: 1; text-shadow: 0 0 2px #ff0000; }
            25% { opacity: 0.6; }
            35% { text-shadow: 0 0 4px #ff3333, 0 0 8px #ff1a1a; }
            45% { opacity: 1; text-shadow: 0 0 12px #ff0000; }
            50% { opacity: 0.7; }
            60% { opacity: 1; text-shadow: 0 0 15px #ff1a1a; }
            70% { opacity: 0.9; }
            85% { text-shadow: 0 0 5px #ff0000; }
            100% { text-shadow: 0 0 1px #ff0000; opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
