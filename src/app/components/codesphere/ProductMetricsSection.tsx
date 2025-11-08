"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Zap, Target } from "lucide-react";

const metrics = [
  {
    value: "95%",
    label: "de temps de setup économisé",
    description: "De 10 minutes à 10 secondes",
    icon: Clock,
    color: "#5AB1FF"
  },
  {
    value: "5 min",
    label: "de l'idée au déploiement",
    description: "Record moyen des utilisateurs",
    icon: Zap,
    color: "#7B9FFF"
  },
  {
    value: "100%",
    label: "cloud-native",
    description: "Aucune installation requise",
    icon: TrendingUp,
    color: "#9B8FFF"
  },
  {
    value: "0",
    label: "configuration manuelle",
    description: "Tout est automatisé",
    icon: Target,
    color: "#B77BFF"
  }
];

export function ProductMetricsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D14] to-[#0A0A0E]"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 700 }}>
            L&apos;impact{" "}
            <span style={{
              background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              mesurable
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Chaque métrique reflète un problème utilisateur résolu
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ 
                      backgroundColor: `${metric.color}20`,
                      boxShadow: `0 0 20px ${metric.color}30`
                    }}
                  >
                    <metric.icon 
                      className="w-6 h-6" 
                      style={{ color: metric.color }}
                    />
                  </div>
                </div>
                {/* Metric */}
                <div className="mb-3">
                  <div 
                    className="text-5xl mb-2"
                    style={{ 
                      color: metric.color,
                      fontWeight: 700 
                    }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-lg text-white" style={{ fontWeight: 700 }}>
                    {metric.label}
                  </div>
                </div>
                {/* Description */}
                <p className="text-sm text-gray-400">
                  {metric.description}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute inset-0 rounded-2xl"
                    style={{ 
                      background: `radial-gradient(circle at center, ${metric.color}05, transparent 70%)`
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-[#5AB1FF]" />
            <p className="text-gray-400">
              Ces métriques guident chaque décision produit
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

