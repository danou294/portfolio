"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Filter, Image as ImageIcon, MapPin, Heart, FileText, Navigation } from "lucide-react";

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: ImageIcon,
      title: "Interface de type feed",
      description: "Photos, menus, ambiance — une navigation immersive et visuelle",
      emoji: "📸"
    },
    {
      icon: Filter,
      title: "Filtres personnalisés",
      description: "Quartier, cuisine, prix — des filtres clairs pour affiner la recherche",
      emoji: "🎯"
    },
    {
      icon: FileText,
      title: "Fiches restaurants détaillées",
      description: "Menu, localisation, lien de réservation — toutes les infos essentielles",
      emoji: "📋"
    },
    {
      icon: Heart,
      title: "Sauvegarde d'adresses favorites",
      description: "Liste personnalisée pour retrouver facilement vos meilleures adresses",
      emoji: "💾"
    },
    {
      icon: Navigation,
      title: "Intégration navigation",
      description: "Ouverture directe dans Plans / Waze pour un trajet sans friction",
      emoji: "🗺️"
    },
    {
      icon: FileText,
      title: "Base de données exclusive",
      description: "Sélection manuelle des restaurants \"validés Butter\" — curation humaine garantie",
      emoji: "✨"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-white dark:bg-[#0A0A0E]">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0A0A0E]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-[#5AB1FF]/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-white/5 backdrop-blur-sm border border-blue-200 dark:border-white/10 rounded-full mb-6">
            <span className="text-sm text-blue-600 dark:text-[#5AB1FF] font-semibold">Fonctionnalités principales</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white/90 font-bold">
            Une expérience complète et soignée
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto">
            Aucune IA ici, juste de la curation humaine et de la qualité manuelle — pour garantir que tout ce qui est affiché est réellement bon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 h-full"
            >
              {/* Icon */}
              <div className="mb-4 relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl mb-3 text-gray-900 dark:text-white/90 font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 dark:from-[#5AB1FF]/0 to-purple-500/0 dark:to-[#B77BFF]/0 group-hover:from-blue-500/20 dark:group-hover:from-[#5AB1FF]/20 group-hover:to-purple-500/20 dark:group-hover:to-[#B77BFF]/20 blur-xl rounded-3xl -z-10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

