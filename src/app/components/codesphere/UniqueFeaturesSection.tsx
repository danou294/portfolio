"use client";

import { motion } from "framer-motion";
import { Brain, Zap, MessageSquare } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function UniqueFeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Brain,
      title: t("codesphere.uniqueFeatures.features.allInOne.title"),
      description: t("codesphere.uniqueFeatures.features.allInOne.description"),
      color: "#5AB1FF"
    },
    {
      icon: Zap,
      title: t("codesphere.uniqueFeatures.features.instant.title"),
      description: t("codesphere.uniqueFeatures.features.instant.description"),
      color: "#7B9FFF"
    },
    {
      icon: MessageSquare,
      title: t("codesphere.uniqueFeatures.features.ai.title"),
      description: t("codesphere.uniqueFeatures.features.ai.description"),
      color: "#B77BFF"
    }
  ];

const techLogos = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Django", color: "#FFFFFF" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "OpenAI", color: "#10A37F" }
];

  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#121218]">
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#121218]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-400/5 dark:bg-[#5AB1FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6" style={{ fontWeight: 700 }}>
            {t("codesphere.uniqueFeatures.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
              {t("codesphere.uniqueFeatures.subtitle")}
            </span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 dark:from-white/5 to-transparent backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}80 100%)`,
                      boxShadow: `0 0 30px ${feature.color}30`
                    }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                {/* Content */}
                <h3 className="text-2xl text-gray-900 dark:text-white mb-4" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 py-8 px-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-sm">
            {techLogos.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 group"
              >
                <div
                  className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

