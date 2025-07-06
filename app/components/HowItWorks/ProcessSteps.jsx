'use client';

import { motion } from 'framer-motion';
import { Download, Shield, Database, Users, CheckCircle } from 'lucide-react';

export default function ProcessSteps() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const processSteps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Data Collection",
      description: "Securely collect your YouTube watch history and usage data through our privacy-first API integration.",
      features: ["OAuth2 authentication", "Granular data access", "Real-time sync"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Protection",
      description: "Your data is encrypted and stored locally on your device, ensuring complete sovereignty over your information.",
      features: ["End-to-end encryption", "Local storage", "Zero-knowledge proofs"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing",
      description: "Advanced algorithms analyze your data to extract meaningful insights while preserving privacy.",
      features: ["Differential privacy", "Federated learning", "Secure computation"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Contribution",
      description: "Contribute anonymized insights to the DAO while maintaining full control over your personal data.",
      features: ["Anonymous aggregation", "Community rewards", "Transparent governance"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="relative group"
          >
            <div className="bg-black/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 h-full transition-all duration-300 hover:border-red-400/50 hover:bg-black/30">
              <div className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6 group-hover:bg-red-500/30 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400">
                {step.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 