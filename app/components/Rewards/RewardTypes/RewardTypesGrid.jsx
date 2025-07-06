'use client';

import { motion } from 'framer-motion';
import { Coins, Trophy, Star, Gift } from 'lucide-react';
import RewardCard from './RewardCard';

export default function RewardTypesGrid() {
  const rewardTypes = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "RedDot Tokens",
      description: "Earn RedDot tokens for every contribution. Use them for governance, staking, or trading.",
      features: ["1 token per video shared", "Bonus for daily streaks", "Governance voting power"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement Badges",
      description: "Unlock exclusive badges and achievements as you contribute more data and engage with the community.",
      features: ["Data Pioneer badge", "Privacy Champion", "Community Leader"]
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Exclusive Features",
      description: "Access premium features and advanced analytics as you reach higher contribution levels.",
      features: ["Advanced analytics", "Priority support", "Beta feature access"]
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Community Rewards",
      description: "Participate in community challenges and earn special rewards from partner projects.",
      features: ["Monthly challenges", "Partner airdrops", "Exclusive NFTs"]
    }
  ];

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {rewardTypes.map((reward, index) => (
        <RewardCard key={index} reward={reward} index={index} />
      ))}
    </motion.div>
  );
} 