'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import { 
  Trophy, 
  TrendingUp, 
  Users, 
  Activity, 
  Award,
  Star,
  Target,
  Zap,
  LogOut,
  Mail,
  Calendar,
  Shield,
  Eye,
  EyeOff,
  Edit,
  Save,
  X
} from 'lucide-react';

export default function PortfolioPage() {
  const { isAuthenticated, user, loading, signOut } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [accountDetails, setAccountDetails] = useState({
    username: user?.username || '',
    email: user?.email || '',
    joinDate: user?.joinDate || new Date().toLocaleDateString(),
    walletAddress: user?.walletAddress || '0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6',
    privateKey: '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••',
    dataContributions: user?.dataContributions || 0,
    totalEarnings: user?.totalEarnings || 15420,
    rank: user?.rank || 'Newcomer',
    badges: user?.badges || ['Early Adopter', 'Data Pioneer'],
    lastActive: user?.lastActive || '2 hours ago'
  });

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth');
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackground />
        </div>
        <div className="relative z-10 text-center">
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-12 px-4">
          <div className="youtube-container">
            {/* Logout Button */}
            <div className="flex justify-end mb-4">
              <motion.button
                onClick={() => {
                  signOut();
                  router.push('/');
                }}
                className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 border border-red-500/30 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={18} />
                Logout
              </motion.button>
            </div>
            
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

        {/* Account Details Section */}
        <div className="youtube-container mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold">Account Details</h2>
              </div>
              <motion.button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-3 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 border border-red-500/30 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                {isEditing ? 'Save' : 'Edit'}
              </motion.button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-400 mb-4">Personal Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Username</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={accountDetails.username}
                          onChange={(e) => setAccountDetails({...accountDetails, username: e.target.value})}
                          className="w-full bg-transparent border-b border-gray-600 text-white focus:border-red-500 outline-none"
                        />
                      ) : (
                        <p className="text-white font-medium">{accountDetails.username}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={accountDetails.email}
                          onChange={(e) => setAccountDetails({...accountDetails, email: e.target.value})}
                          className="w-full bg-transparent border-b border-gray-600 text-white focus:border-red-500 outline-none"
                        />
                      ) : (
                        <p className="text-white font-medium">{accountDetails.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Join Date</label>
                      <p className="text-white font-medium">{accountDetails.joinDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Last Active</label>
                      <p className="text-white font-medium">{accountDetails.lastActive}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-400 mb-4">Wallet Information</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Wallet Address</label>
                      <p className="text-white font-mono text-sm">{accountDetails.walletAddress}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <label className="text-sm text-gray-400">Private Key</label>
                      <div className="flex items-center gap-2">
                        <p className="text-white font-mono text-sm">
                          {showPrivateKey ? accountDetails.privateKey : '••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••'}
                        </p>
                        <motion.button
                          onClick={() => setShowPrivateKey(!showPrivateKey)}
                          className="text-gray-400 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Badges Earned</h4>
                  <div className="flex flex-wrap gap-2">
                    {accountDetails.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-red-600/20 border border-red-500/30 text-red-400 text-sm rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Account Stats Summary */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">{accountDetails.dataContributions}</div>
                  <div className="text-sm text-gray-400">Data Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">{accountDetails.totalEarnings.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Total Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">#{accountDetails.rank}</div>
                  <div className="text-sm text-gray-400">Current Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{accountDetails.badges.length}</div>
                  <div className="text-sm text-gray-400">Badges Earned</div>
                </div>
              </div>
            </div>
          </motion.div>
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
    </div>
  );
} 