'use client';

import { motion } from 'framer-motion';
import { Globe, Eye, Monitor, BarChart3 } from 'lucide-react';

export default function UserJourney() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const journeySteps = [
    {
      step: "01",
      title: "Connect Your YouTube Account",
      description: "Securely authenticate with YouTube using OAuth2. We only request the permissions you choose.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Review & Approve Data Access",
      description: "See exactly what data we'll collect and customize your privacy settings before proceeding.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Local Data Processing",
      description: "Your data is processed locally on your device, ensuring complete privacy and control.",
      icon: <Monitor className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Contribute to the DAO",
      description: "Choose to contribute anonymized insights to the community while earning rewards.",
      icon: <BarChart3 className="w-8 h-8" />
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
          Your Journey to Data Sovereignty
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="space-y-8">
          {journeySteps.map((journey, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start space-x-6"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {journey.icon}
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
                    {journey.step}
                  </span>
                  <h3 className="text-2xl font-bold text-red-400">
                    {journey.title}
                  </h3>
                </motion.div>
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {journey.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 