'use client';

import { motion } from 'framer-motion';

export default function TwoColumnLayout({ title, content, image, reverse }) {
  return (
    <section className="h-screen w-full snap-start flex items-center justify-center px-6">
      <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image */}
        <motion.img
          src={image}
          alt={title}
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 rounded-lg shadow-[0_0_40px_rgba(255,0,0,0.25)]"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_30px_rgba(255,0,0,0.4)] mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{content}</p>
        </motion.div>
      </div>
    </section>
  );
}
