'use client';

import { motion } from 'framer-motion';
import { Gift, TrendingUp, Users, Shield, Star, Coins, Trophy, Zap } from 'lucide-react';

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="youtube-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold youtube-gradient-text">Rewards for Contributors</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Earn tokens and exclusive perks by sharing anonymized data to help train AI responsibly and build a better digital future.
          </p>
        </motion.div>

        {/* Reward Tiers */}
        <div className="youtube-grid mb-16">
          <motion.div
            className="youtube-card relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full -mr-10 -mt-10 opacity-20"></div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Bronze Contributor</h3>
                <p className="text-gray-400 text-sm">0-100 videos/month</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Base Reward</span>
                <span className="text-white font-semibold">10 RDD/month</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Bonus Multiplier</span>
                <span className="text-white font-semibold">1x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Governance Rights</span>
                <span className="text-green-400 text-sm">Basic</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Access to data dashboard</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Community Discord access</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="youtube-card relative overflow-hidden border-2 border-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full -mr-10 -mt-10 opacity-20"></div>
            <div className="absolute top-4 right-4">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Silver Contributor</h3>
                <p className="text-gray-400 text-sm">100-500 videos/month</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Base Reward</span>
                <span className="text-white font-semibold">50 RDD/month</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Bonus Multiplier</span>
                <span className="text-white font-semibold">1.5x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Governance Rights</span>
                <span className="text-green-400 text-sm">Enhanced</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Early feature access</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Priority support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="youtube-card relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-red-500 rounded-full -mr-10 -mt-10 opacity-20"></div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Gold Contributor</h3>
                <p className="text-gray-400 text-sm">500+ videos/month</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Base Reward</span>
                <span className="text-white font-semibold">150 RDD/month</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Bonus Multiplier</span>
                <span className="text-white font-semibold">2x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Governance Rights</span>
                <span className="text-green-400 text-sm">Full</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Exclusive NFT rewards</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>DAO governance voting</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Beta testing access</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Token Economics */}
        <motion.div
          className="youtube-card max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Coins className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Token Economics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">1,000,000</div>
              <div className="text-gray-400">Total Supply (RDD)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">60%</div>
              <div className="text-gray-400">Community Rewards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
              <div className="text-gray-400">DAO Treasury</div>
            </div>
          </div>
        </motion.div>

        {/* Special Rewards */}
        <motion.div
          className="youtube-card max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Zap className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold text-white">Special Rewards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Achievement Badges</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Data Pioneer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Privacy Champion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Community Leader</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Exclusive Perks</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-gray-300">Premium privacy tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-300">VIP community access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-300">Early feature releases</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="youtube-btn youtube-hover text-lg px-8 py-4">
            <Gift className="w-5 h-5 mr-2 inline" />
            Start Earning Rewards
          </button>
          <p className="text-gray-400 mt-4 text-sm">
            Join thousands of contributors already earning rewards for their data
          </p>
        </motion.div>
      </div>
    </div>
  );
}

const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);
