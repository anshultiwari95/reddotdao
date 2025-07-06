'use client';

import { motion } from 'framer-motion';
import LeaderboardHeader from './Leaderboard/LeaderboardHeader';
import LeaderboardList from './Leaderboard/LeaderboardList';

export default function Leaderboard() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <LeaderboardHeader />
        <LeaderboardList />
      </div>
    </motion.section>
  );
} 