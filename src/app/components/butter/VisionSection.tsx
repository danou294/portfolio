"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const features = [
  { key: "filters", icon: "🎯", gradient: "from-amber-400 to-orange-500" },
  { key: "feed", icon: "📸", gradient: "from-rose-400 to-pink-500" },
  { key: "navigation", icon: "🗺️", gradient: "from-cyan-400 to-teal-500" },
];

export function VisionSection() {
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
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("butter.vision.title")}
          </h2>
          <p className="text-body text-lg max-w-3xl mx-auto">
            {t("butter.vision.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-5 mx-auto shadow-md group-hover:scale-105 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">
                {t(`butter.vision.features.${feature.key}.title`)}
              </h3>
              <p className="text-body text-sm">
                {t(`butter.vision.features.${feature.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
