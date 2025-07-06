'use client';

import { motion } from 'framer-motion';
import EarningSystemHeader from './EarningSystem/EarningSystemHeader';
import EarningStepsList from './EarningSystem/EarningStepsList';

export default function EarningSystem() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <EarningSystemHeader />
        <EarningStepsList />
      </div>
    </motion.section>
  );
} 