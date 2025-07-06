'use client';

import { motion } from 'framer-motion';
import RewardTypesHeader from './RewardTypes/RewardTypesHeader';
import RewardTypesGrid from './RewardTypes/RewardTypesGrid';

export default function RewardTypes() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <RewardTypesHeader />
        <RewardTypesGrid />
      </div>
    </motion.section>
  );
} 