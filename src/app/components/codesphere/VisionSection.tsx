"use client";

import { motion } from "framer-motion";
import { Brain, Zap, Globe } from "lucide-react";

const visionCards = [
  {
    icon: Brain,
    title: "Tout-en-un",
    description: "Éditeur, terminal, base de données, déploiement — tout ce dont tu as besoin, au même endroit.",
    gradient: "from-[#5AB1FF]/20 to-[#5AB1FF]/5"
  },
  {
    icon: Zap,
    title: "Instantané",
    description: "Démarre un projet sans installation. De l'idée au code en quelques secondes.",
    gradient: "from-[#7B9FFF]/20 to-[#7B9FFF]/5"
  },
  {
    icon: Globe,
    title: "Partout",
    description: "Fonctionne depuis n'importe quel navigateur. Ton environnement te suit où que tu sois.",
    gradient: "from-[#B77BFF]/20 to-[#B77BFF]/5"
  }
];

export function VisionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#121218]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5AB1FF]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 700 }}>
            Un IDE{" "}
            <span style={{
              background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              fluide, intégré, et accessible.
            </span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${card.gradient} backdrop-blur-sm hover:border-white/20 transition-all duration-300`}>
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF] flex items-center justify-center shadow-lg shadow-[#5AB1FF]/20 group-hover:shadow-[#5AB1FF]/40 transition-shadow duration-300">
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                {/* Content */}
                <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 700 }}>
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5AB1FF]/5 to-[#B77BFF]/5"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

