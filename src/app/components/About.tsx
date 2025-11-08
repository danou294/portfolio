"use client";
import { motion } from "framer-motion";
import { Database, Workflow, Cloud, Layers } from "lucide-react";
import { Badge } from "./ui/badge";
import { useLanguage } from "../context/LanguageContext";

const capabilities = [
  {
    icon: <Database className="w-5 h-5" />,
    titleKey: "skills.sections.architecture.title",
    descriptionKey: "skills.sections.architecture.description"
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    titleKey: "skills.sections.apis.title",
    descriptionKey: "skills.sections.apis.description"
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    titleKey: "skills.sections.devops.title",
    descriptionKey: "skills.sections.devops.description"
  },
  {
    icon: <Layers className="w-5 h-5" />,
    titleKey: "skills.sections.ui.title",
    descriptionKey: "skills.sections.ui.description"
  }
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/40 rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4 text-4xl lg:text-5xl font-bold">
            {t("about.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  {t("about.subtitle")}
                </p>
                <p>
                  {t("about.approach.text")}
                </p>
                <p>
                  <span className="font-semibold">{t("about.objective").split(" : ")[0]}</span> : {t("about.objective").split(" : ")[1]}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/20 dark:border-blue-500/30">
                5+ ans d&apos;expérience
              </Badge>
              <Badge className="bg-violet-500/10 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-500/20 dark:border-violet-500/30">
                20+ projets livrés
              </Badge>
              <Badge className="bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-500/30">
                {t("hero.available")}
              </Badge>
            </div>
          </motion.div>

          {/* Right Column - Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 dark:from-blue-500/10 dark:to-violet-500/10 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-gray-900 dark:text-white mb-6 text-2xl font-bold">
                {t("skills.subtitle")}
              </h3>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.titleKey}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {capability.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white mb-1 font-semibold">
                        {t(capability.titleKey)}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t(capability.descriptionKey)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
