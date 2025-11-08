"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Sparkles } from "lucide-react";

const philosophyPrinciples = [
  {
    icon: Target,
    title: "Focus sur le problème réel",
    description: "Trop d'IDE nécessitent des heures de configuration. CodeSphere élimine cette friction pour que tu puisses coder immédiatement.",
    metric: "10 min → 10 sec",
    metricLabel: "Setup time"
  },
  {
    icon: Users,
    title: "Pensé pour les développeurs",
    description: "Chaque feature est conçue à partir de retours d'utilisateurs réels. Pas de bloat, juste ce dont tu as besoin.",
    metric: "100%",
    metricLabel: "User-driven"
  },
  {
    icon: Zap,
    title: "Vitesse d'exécution",
    description: "De l'idée au déploiement en moins de 5 minutes. Le produit est optimisé pour réduire le temps entre inspiration et réalisation.",
    metric: "5 min",
    metricLabel: "Idea to deploy"
  }
];

export function ProductPhilosophySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0E] to-[#0D0D14]">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5AB1FF]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5AB1FF]/30 bg-[#5AB1FF]/10 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#5AB1FF]" />
            <span className="text-sm text-[#5AB1FF]">Philosophie Produit</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl text-white mb-6" style={{ fontWeight: 700 }}>
            Un produit pensé{" "}
            <span style={{
              background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              pour résoudre un vrai problème
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CodeSphere n&apos;est pas juste un IDE. C&apos;est une vision produit : 
            éliminer toutes les frictions entre l&apos;idée et sa réalisation.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          {philosophyPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Icon & Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF] flex items-center justify-center shadow-lg shadow-[#5AB1FF]/20">
                    <principle.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-[#5AB1FF]" style={{ fontWeight: 700 }}>
                      {principle.metric}
                    </div>
                    <div className="text-xs text-gray-500">{principle.metricLabel}</div>
                  </div>
                </div>
                {/* Content */}
                <h3 className="text-2xl text-white mb-4" style={{ fontWeight: 700 }}>
                  {principle.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5AB1FF]/5 to-[#B77BFF]/5"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Product thinking statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-[#5AB1FF]/20 bg-gradient-to-br from-[#5AB1FF]/5 to-[#B77BFF]/5 backdrop-blur-sm">
            <p className="text-2xl text-white/90 leading-relaxed italic mb-4">
              &quot;Je ne construis pas des features. Je résous des problèmes d&apos;utilisateurs.&quot;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF]"></div>
              <div className="text-left">
                <div className="text-white">Daniel Levy</div>
                <div className="text-sm text-gray-400">Product-minded Developer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

