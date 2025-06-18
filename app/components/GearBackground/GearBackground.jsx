'use client';
import { useEffect, useState } from 'react';

const positions = [
  { top: '5%', left: '10%', size: 'w-12 h-12' },
  { top: '10%', left: '5%', size: 'w-16 h-16' },
  { top: '15%', left: '70%', size: 'w-20 h-20' },
  { top: '25%', left: '60%', size: 'w-24 h-24' },
  { top: '30%', left: '15%', size: 'w-16 h-16' },
  { top: '35%', left: '80%', size: 'w-20 h-20' },
  { top: '45%', left: '30%', size: 'w-20 h-20' },
  { top: '50%', left: '10%', size: 'w-14 h-14' },
  { top: '55%', left: '65%', size: 'w-28 h-28' },
  { top: '60%', left: '40%', size: 'w-18 h-18' },
  { top: '70%', left: '70%', size: 'w-28 h-28' },
  { top: '75%', left: '25%', size: 'w-16 h-16' },
  { top: '80%', left: '20%', size: 'w-14 h-14' },
  { top: '85%', left: '50%', size: 'w-20 h-20' },
  { top: '90%', left: '80%', size: 'w-24 h-24' },
];

export default function GearBackground() {
  const [gears, setGears] = useState([]);

  useEffect(() => {
    const randomized = positions.map(pos => ({
      ...pos,
      spin: Math.random() > 0.5 ? 'animate-spin-slow' : 'animate-spin-reverse-slow',
    }));
    setGears(randomized);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
      {gears.map((gear, idx) => (
        <img
          key={idx}
          src="/gear-svg.svg"
          alt="gear"
          className={`absolute ${gear.size} ${gear.spin}`}
          style={{ top: gear.top, left: gear.left }}
        />
      ))}
    </div>
  );
}
