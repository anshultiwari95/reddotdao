'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl font-orbitron tracking-wide text-blue-700 drop-shadow-[0_0_12px_rgba(3,105,161,0.25)] text-center mb-10"
      >
        About <span className="text-blue-800 font-medium drop-shadow-[0_0_8px_rgba(3,105,161,0.4)]">BitsNebula</span>
      </motion.h1>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-neutral-800 text-lg leading-relaxed space-y-8"
      >
        <p>
          <strong>BitsNebula</strong> is a futuristic data cooperative built for the age of ethical AI. It empowers users to transform their personal YouTube watch history into a valuable, anonymized dataset — not for corporations, but for communities.
        </p>

        <p>
          In a world dominated by surveillance capitalism, BitsNebula flips the model. Instead of platforms exploiting your behavior, we give you the power to contribute your data, train transparent AI systems, and get rewarded fairly. It’s your data — we just help you own it.
        </p>

        <p>
          Built around a decentralized protocol, BitsNebula uses privacy-preserving mechanisms to ensure your identity is never exposed. Contributions are anonymized, encrypted, and stored in a collective dataset designed to serve open AI innovation — not ad targeting or manipulation.
        </p>

        <p>
          Our community is growing rapidly. Contributors range from curious users and privacy advocates to developers and AI researchers. Together, we’re training models that reflect human curiosity, creativity, and diversity — not just profit-driven algorithms.
        </p>

        <p>
          We envision a world where the data economy is <em>inclusive, ethical, and user-owned</em>. Whether you're here to earn, learn, or reshape the future of machine intelligence, BitsNebula gives you the tools to make your digital footprint work for you — not against you.
        </p>

        <p className="text-blue-700 font-semibold text-xl">
          Join the Nebula. Own your data. Power the future.
        </p>
      </motion.div>
    </section>
  );
}
