'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, BarChart3 } from 'lucide-react';
import EarningStep from './EarningStep';

export default function EarningStepsList() {
  const earningSteps = [
    {
      step: "01",
      title: "Share Your Data",
      description: "Contribute your YouTube watch history anonymously. The more you share, the more you earn.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Build Your Streak",
      description: "Maintain daily contributions to earn bonus multipliers and unlock higher reward tiers.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Complete Challenges",
      description: "Participate in community challenges and special events for extra rewards and exclusive badges.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Level Up",
      description: "Reach higher levels to unlock premium features, governance rights, and exclusive rewards.",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-8">
        {earningSteps.map((step, index) => (
          <EarningStep key={index} step={step} index={index} />
        ))}
      </div>
    </motion.div>
  );
} 