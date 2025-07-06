'use client';

import { motion } from 'framer-motion';

export default function EarningStep({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.4 }}
      viewport={{ once: true }}
      className="flex items-start space-x-6"
      whileHover={{ x: 10 }}
    >
      <motion.div 
        className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full flex-shrink-0"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {step.icon}
      </motion.div>
      <div className="flex-1">
        <motion.div 
          className="flex items-center mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 font-bold text-lg mr-3">
            {step.step}
          </span>
          <h3 className="text-2xl font-bold text-red-400">
            {step.title}
          </h3>
        </motion.div>
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
} 