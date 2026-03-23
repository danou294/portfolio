"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const futureFeatures = [
  { key: "git", icon: "🔗", gradient: "from-amber-400 to-orange-500" },
  { key: "vercel", icon: "▲", gradient: "from-gray-600 to-gray-800" },
  { key: "templates", icon: "📦", gradient: "from-violet-400 to-purple-500" },
  { key: "collaboration", icon: "👥", gradient: "from-cyan-400 to-teal-500" },
];

export function FutureFeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D] mb-4">
            {t("codesphere.futureFeatures.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("codesphere.futureFeatures.title")}{" "}
            <span className="gradient-text">{t("codesphere.futureFeatures.subtitle")}</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {t("codesphere.futureFeatures.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-xl flex-shrink-0 shadow-md`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-heading">
                      {t(`codesphere.futureFeatures.features.${feature.key}.title`)}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-[#F59E0B]/10 text-xs font-medium text-[#B45309] dark:text-[#FCD34D]">
                      {t(`codesphere.futureFeatures.features.${feature.key}.status`)}
                    </span>
                  </div>
                  <p className="text-body text-sm">
                    {t(`codesphere.futureFeatures.features.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
