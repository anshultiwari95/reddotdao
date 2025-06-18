'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="font-orbitron text-xl sm:text-2xl tracking-widest">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-blue-800 font-semibold drop-shadow-[0_0_8px_rgba(3,105,161,0.4)]"
          >
            BitsNebula
          </motion.span>
        </h1>

        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/guide" className="hover:text-blue-600 transition-colors">Guide</Link>
          </li>
          <li>
            <Link href="/rewards" className="hover:text-blue-600 transition-colors">Rewards</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
