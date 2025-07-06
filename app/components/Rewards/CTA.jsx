'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function CTA() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
            Start Earning Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who are already earning rewards while contributing to data sovereignty.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span>Connect Wallet</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="border border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Star className="w-5 h-5" />
            <span>Learn More</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">50K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">2.5M</div>
            <div className="text-gray-400">Videos Shared</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-400 mb-2">$1.2M</div>
            <div className="text-gray-400">Rewards Distributed</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 