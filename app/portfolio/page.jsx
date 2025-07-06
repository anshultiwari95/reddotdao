'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Github, 
  Star, 
  Award,
  Crown,
  Zap,
  Eye,
  Lock,
  Shield
} from 'lucide-react';

export default function Portfolio() {
  const topContributors = [
    { 
      name: 'CryptoWhale', 
      rank: 1, 
      points: '2,547', 
      avatar: '🐋', 
      videos: '1,234',
      rewards: '$1,250',
      badge: 'Crown',
      badgeColor: 'text-yellow-400'
    },
    { 
      name: 'DataMaster', 
      rank: 2, 
      points: '2,134', 
      avatar: '👨‍💻', 
      videos: '987',
      rewards: '$1,100',
      badge: 'Star',
      badgeColor: 'text-blue-400'
    },
    { 
      name: 'PrivacyGuru', 
      rank: 3, 
      points: '1,876', 
      avatar: '🛡️', 
      videos: '756',
      rewards: '$950',
      badge: 'Award',
      badgeColor: 'text-green-400'
    },
    { 
      name: 'BlockchainQueen', 
      rank: 4, 
      points: '1,654', 
      avatar: '👑', 
      videos: '654',
      rewards: '$825',
      badge: 'Trophy',
      badgeColor: 'text-purple-400'
    },
    { 
      name: 'DeFiDude', 
      rank: 5, 
      points: '1,432', 
      avatar: '💎', 
      videos: '543',
      rewards: '$715',
      badge: 'Zap',
      badgeColor: 'text-red-400'
    },
  ];

  const recentActivity = [
    { user: 'Alice', action: 'contributed 50 videos', time: '2m ago', points: '+100' },
    { user: 'Bob', action: 'earned 100 points', time: '5m ago', points: '+100' },
    { user: 'Charlie', action: 'joined the DAO', time: '10m ago', points: '+50' },
    { user: 'Diana', action: 'reached level 5', time: '15m ago', points: '+200' },
    { user: 'Eve', action: 'completed challenge', time: '20m ago', points: '+150' },
  ];

  const daoStats = [
    { label: 'Active Members', value: '1,247', icon: Users, color: 'text-blue-400' },
    { label: 'Total Videos Tracked', value: '2.1M', icon: Eye, color: 'text-green-400' },
    { label: 'Total Rewards Paid', value: '$45,230', icon: TrendingUp, color: 'text-yellow-400' },
    { label: 'Privacy Score', value: '89%', icon: Shield, color: 'text-red-400' },
    { label: 'Data Sovereignty', value: '100%', icon: Lock, color: 'text-purple-400' },
    { label: 'Community Growth', value: '+23%', icon: Github, color: 'text-pink-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <div className="youtube-container pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white youtube-glow-text">
              Contributor Matrix
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the top contributors, track your progress, and see how the RedDotDAO community 
            is building the future of data sovereignty.
          </p>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="youtube-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {daoStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="youtube-card p-4 text-center">
                <div className={`w-8 h-8 mx-auto mb-3 ${stat.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="youtube-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Top Contributors */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="youtube-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Top Contributors</h2>
              </div>
              
              <div className="space-y-4">
                {topContributors.map((contributor, index) => {
                  const BadgeIcon = contributor.badge === 'Crown' ? Crown : 
                                   contributor.badge === 'Star' ? Star :
                                   contributor.badge === 'Award' ? Award :
                                   contributor.badge === 'Trophy' ? Trophy : Zap;
                  
                  return (
                    <motion.div
                      key={contributor.rank}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <span className="text-3xl">{contributor.avatar}</span>
                          <div className={`absolute -top-1 -right-1 ${contributor.badgeColor}`}>
                            <BadgeIcon className="w-4 h-4" />
                          </div>
                        </div>
                        <div>
                          <div className="text-white font-semibold">{contributor.name}</div>
                          <div className="text-gray-400 text-sm">#{contributor.rank} Rank</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-red-500 font-bold text-lg">{contributor.points}</div>
                        <div className="text-gray-400 text-xs">Points</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-white font-medium">{contributor.videos}</div>
                        <div className="text-gray-400 text-xs">Videos</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-green-400 font-bold">{contributor.rewards}</div>
                        <div className="text-gray-400 text-xs">Earned</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="youtube-card p-6">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {activity.user.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </div>
                      <div className="text-gray-400 text-xs">{activity.time}</div>
                    </div>
                    <div className="text-green-400 font-bold text-sm">
                      {activity.points}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Your Portfolio */}
            <div className="youtube-card p-6 mt-6">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-blue-500" />
                <h2 className="text-2xl font-bold text-white">Your Portfolio</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Current Rank</span>
                  <span className="text-white font-bold">#127</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Total Points</span>
                  <span className="text-red-500 font-bold">847</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Videos Tracked</span>
                  <span className="text-white font-bold">234</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                  <span className="text-gray-400">Rewards Earned</span>
                  <span className="text-green-400 font-bold">$423</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="youtube-container mt-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="youtube-card p-8 text-center"
        >
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Join the Leaderboard?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Start contributing your YouTube data and climb the ranks. Earn rewards while 
            maintaining complete control over your privacy.
          </p>
          <motion.button
            className="youtube-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Contributing
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
} 