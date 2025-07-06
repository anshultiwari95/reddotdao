'use client';

import { motion } from 'framer-motion';
import { Lock, Network, Key, Server } from 'lucide-react';

export default function TechnicalArchitecture() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const technicalFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Knowledge Proofs",
      description: "Prove data ownership without revealing the actual data"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Decentralized Storage",
      description: "Data distributed across secure, censorship-resistant networks"
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Self-Sovereign Identity",
      description: "Complete control over your digital identity and data"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Smart Contracts",
      description: "Automated, transparent governance and reward distribution"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Technical Architecture
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Built on cutting-edge blockchain technology with privacy-first principles
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {technicalFeatures.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-black/20 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 text-center hover:border-red-400/50 hover:bg-black/30 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="flex items-center justify-center w-12 h-12 bg-red-500/20 rounded-full mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mb-2 text-red-400">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 