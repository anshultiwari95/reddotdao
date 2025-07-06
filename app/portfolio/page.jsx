'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Activity, 
  Award,
  Star,
  Target,
  Zap
} from 'lucide-react';

export default function PortfolioPage() {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to auth page
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4">
        <div className="youtube-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome back, <span className="text-red-500">{user?.username}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your YouTube data sovereignty dashboard
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="youtube-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-red-500">#{user?.rank || 'Newcomer'}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Rank</h3>
            <p className="text-gray-400">Your current position in the DAO</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-500">{user?.dataPoints || 0}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Points</h3>
            <p className="text-gray-400">Videos you've shared</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-500">{user?.contributions || 0}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Contributions</h3>
            <p className="text-gray-400">Total contributions made</p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-500">15,420</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tokens Earned</h3>
            <p className="text-gray-400">Your total earnings</p>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="youtube-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { action: 'Shared video', title: 'How to Build a React App', time: '2 hours ago', tokens: '+150' },
              { action: 'Earned tokens', title: 'Data contribution bonus', time: '1 day ago', tokens: '+500' },
              { action: 'Joined DAO', title: 'Welcome to RedDotDAO', time: '3 days ago', tokens: '+100' }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold">{activity.action}</p>
                    <p className="text-gray-400 text-sm">{activity.title}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-500 font-semibold">{activity.tokens}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="youtube-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold">Share More Data</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Upload your YouTube data to earn more tokens and climb the leaderboard.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Upload Data
            </button>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Boost Earnings</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Complete daily challenges and earn bonus tokens for active participation.
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              View Challenges
            </button>
          </div>
        </motion.div>
      </div>

      {/* Community Stats */}
      <div className="youtube-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold">Community Stats</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">2.5M</div>
              <div className="text-gray-400">Videos Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">$15M</div>
              <div className="text-gray-400">Total Value Distributed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 