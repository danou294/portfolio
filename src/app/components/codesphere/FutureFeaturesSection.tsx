"use client";

import { motion } from "framer-motion";
import { GitBranch, Rocket, Code2, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function FutureFeaturesSection() {
  const { t } = useLanguage();
  
  const futureFeatures = [
    {
      icon: GitBranch,
      title: t("codesphere.futureFeatures.features.git.title"),
      description: t("codesphere.futureFeatures.features.git.description"),
      color: "#5AB1FF",
      status: t("codesphere.futureFeatures.features.git.status")
    },
    {
      icon: Rocket,
      title: t("codesphere.futureFeatures.features.vercel.title"),
      description: t("codesphere.futureFeatures.features.vercel.description"),
      color: "#7B9FFF",
      status: t("codesphere.futureFeatures.features.vercel.status")
    },
    {
      icon: Code2,
      title: t("codesphere.futureFeatures.features.templates.title"),
      description: t("codesphere.futureFeatures.features.templates.description"),
      color: "#9B8FFF",
      status: t("codesphere.futureFeatures.features.templates.status")
    },
    {
      icon: Zap,
      title: t("codesphere.futureFeatures.features.collaboration.title"),
      description: t("codesphere.futureFeatures.features.collaboration.description"),
      color: "#B77BFF",
      status: t("codesphere.futureFeatures.features.collaboration.status")
    }
  ];

  const templates = [
    { name: "React", color: "#61DAFB", icon: "⚛️" },
    { name: "Vue", color: "#4FC08D", icon: "🟢" },
    { name: "Angular", color: "#DD0031", icon: "🅰️" },
    { name: "Next.js", color: "#000000", icon: "▲" },
    { name: "Svelte", color: "#FF3E00", icon: "🧡" },
    { name: "Nuxt", color: "#00DC82", icon: "💚" }
  ];
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#0B0B0E]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#0B0B0E] via-gray-100 dark:via-[#121218] to-gray-50 dark:to-[#0B0B0E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 dark:bg-[#5AB1FF]/5 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 dark:border-[#5AB1FF]/30 bg-blue-50/50 dark:bg-[#5AB1FF]/10 backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 text-blue-600 dark:text-[#5AB1FF]" />
            <span className="text-sm text-blue-600 dark:text-[#5AB1FF]">{t("codesphere.futureFeatures.badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6" style={{ fontWeight: 700 }}>
            {t("codesphere.futureFeatures.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
              {t("codesphere.futureFeatures.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("codesphere.futureFeatures.description")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 dark:from-white/5 to-transparent backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
                    {feature.status}
                  </span>
                </div>

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

        {/* Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 dark:border-[#7B9FFF]/30 bg-violet-50/50 dark:bg-[#7B9FFF]/10 backdrop-blur-sm mb-4">
              <Zap className="w-4 h-4 text-violet-600 dark:text-[#7B9FFF]" />
              <span className="text-sm text-violet-600 dark:text-[#7B9FFF] font-medium">{t("codesphere.futureFeatures.comingSoon")}</span>
            </div>
            <h3 className="text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4" style={{ fontWeight: 700 }}>
              {t("codesphere.futureFeatures.templates.heading")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
                {t("codesphere.futureFeatures.templates.subheading")}
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("codesphere.futureFeatures.templates.title")}{" "}
              <span className="text-blue-600 dark:text-[#7B9FFF] font-medium">{t("codesphere.futureFeatures.comingSoon")}.</span>
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {templates.map((template, index) => (
              <motion.div
                key={template.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-50 dark:from-white/5 to-transparent backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 text-center opacity-60">
                  {/* Coming soon badge */}
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#7B9FFF]/20 border border-[#7B9FFF]/30 text-[#7B9FFF]">
                    Bientôt
                  </div>
                  <div className="text-3xl mb-3">{template.icon}</div>
                  <div className="text-sm text-gray-900 dark:text-white font-medium">{template.name}</div>
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${template.color}20 0%, transparent 70%)`
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Integration highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl border border-blue-300/30 dark:border-[#5AB1FF]/30 bg-gradient-to-br from-blue-50/50 dark:from-[#5AB1FF]/10 to-violet-50/50 dark:to-[#B77BFF]/10 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h4 className="text-xl text-gray-900 dark:text-white mb-2" style={{ fontWeight: 700 }}>
                  Intégrations natives
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Git, Vercel, et bien d&apos;autres. CodeSphere s&apos;intègre naturellement dans ton workflow existant.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <GitBranch className="w-4 h-4 text-blue-600 dark:text-[#5AB1FF]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Git</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <Rocket className="w-4 h-4 text-violet-600 dark:text-[#7B9FFF]" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Vercel</span>
                </div>
                <ArrowRight className="w-5 h-5 text-violet-600 dark:text-[#B77BFF]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

