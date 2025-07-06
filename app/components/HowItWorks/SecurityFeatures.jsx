'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function SecurityFeatures() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const securityFeatures = [
    "End-to-end encryption for all data transmission",
    "Local data storage with optional cloud backup",
    "Zero-knowledge proofs for privacy-preserving verification",
    "Decentralized identity management",
    "Transparent audit trails for all operations",
    "Community-driven security protocols"
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
          Security & Privacy
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your data sovereignty is our top priority
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start space-x-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="w-6 h-6 text-red-500 mt-1 flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <CheckCircle className="w-6 h-6" />
              </motion.div>
              <span className="text-gray-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 