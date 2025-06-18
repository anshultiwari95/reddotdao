'use client';

import { motion } from 'framer-motion';

export default function HomeContent() {
  return (
    <>
      {/* How It Works */}
      <section className="py-24 px-4 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-700 drop-shadow-[0_0_8px_rgba(3,105,161,0.25)] mb-10"
        >
          How BitsNebula Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: '1. Connect',
              desc: 'Start by installing our secure Chrome extension. With just one click, you can link your YouTube watch history directly to BitsNebula — all while keeping your identity private and your data encrypted.',
              note: 'Only *you* control when and how your data is used.',
            },
            {
              title: '2. Contribute',
              desc: 'Your data is anonymized and added to a collective dataset powering the training of advanced AI models. These datasets are decentralized, privacy-respecting, and focused on creating AI aligned with user values.',
              note: 'Think of it as joining a research DAO — but you’re the boss.',
            },
            {
              title: '3. Earn',
              desc: 'The more useful and unique your contributions, the more you earn. Get rewarded in native tokens that unlock perks, grant voting rights, and power future BitsNebula features.',
              note: 'You own your data. You earn from it. Period.',
            },
          ].map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-neutral-800">
                {step.title}
              </h3>
              <p className="mt-4 text-neutral-600">{step.desc}</p>
              <p className="mt-2 text-sm text-neutral-500 italic">{step.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why BitsNebula */}
      <section className="py-24 px-4 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-blue-700 drop-shadow-[0_0_8px_rgba(3,105,161,0.25)] mb-10">
            Why Choose BitsNebula?
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto text-lg leading-relaxed">
            In a world where tech giants quietly harvest your digital habits, BitsNebula offers a radical alternative: true data ownership.
            <br /><br />
            We believe your YouTube watch history — your choices, curiosities, and culture — should work for you, not be sold behind your back. BitsNebula transforms this history into a privacy-respecting, decentralized asset that fuels ethical AI innovation.
          </p>
        </motion.div>
      </section>

      {/* Network Stats */}
      <section className="py-24 px-4 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-700 drop-shadow-[0_0_8px_rgba(3,105,161,0.25)] mb-10"
        >
          Network Stats
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 mb-10 text-lg"
        >
          BitsNebula is growing fast — here’s what we’ve built together so far:
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-neutral-800">
          {[
            ['1.2M+', 'Videos Contributed'],
            ['8,000+', 'Active Contributors'],
            ['3.5TB', 'Data Processed'],
            ['12+', 'AI Models Trained'],
          ].map(([stat, label], i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <p className="text-5xl font-bold text-blue-600">{stat}</p>
              <p className="mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4 text-center bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-blue-700 drop-shadow-[0_0_8px_rgba(3,105,161,0.25)] mb-6"
        >
          Ready to Own Your Data?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-700 max-w-2xl mx-auto text-lg mb-8 leading-relaxed"
        >
          Join thousands of users reclaiming control over their digital footprint. Contribute to ethical AI, earn crypto rewards, and shape a data economy built for people — not corporations.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition"
        >
          Get Started with BitsNebula
        </motion.button>
      </section>
    </>
  );
}
