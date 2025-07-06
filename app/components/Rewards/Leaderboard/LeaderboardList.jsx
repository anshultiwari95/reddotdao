'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Crown } from 'lucide-react';
import LeaderboardItem from './LeaderboardItem';

export default function LeaderboardList() {
  const topContributors = [
    {
      rank: 1,
      name: "DataPioneer",
      tokens: "15,420",
      videos: "2,847",
      streak: "45 days",
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600"
    },
    {
      rank: 2,
      name: "PrivacyChampion",
      tokens: "12,890",
      videos: "2,156",
      streak: "38 days",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-gray-300 to-gray-500"
    },
    {
      rank: 3,
      name: "SovereignUser",
      tokens: "10,234",
      videos: "1,892",
      streak: "32 days",
      icon: <Medal className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600"
    },
    {
      rank: 4,
      name: "RedDotHero",
      tokens: "8,567",
      videos: "1,543",
      streak: "28 days",
      icon: <Award className="w-6 h-6" />,
      color: "from-red-400 to-red-600"
    },
    {
      rank: 5,
      name: "DataGuardian",
      tokens: "7,234",
      videos: "1,298",
      streak: "25 days",
      icon: <Award className="w-6 h-6" />,
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-4">
        {topContributors.map((contributor, index) => (
          <LeaderboardItem key={index} contributor={contributor} index={index} />
        ))}
      </div>
    </motion.div>
  );
} 