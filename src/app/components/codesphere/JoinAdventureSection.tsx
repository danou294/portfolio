"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const benefits = [
  { key: "contribute", icon: "💻" },
  { key: "community", icon: "🤝" },
  { key: "impact", icon: "🎯" },
];

export function JoinAdventureSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("codesphere.joinAdventure.title")}{" "}
            <span className="gradient-text">{t("codesphere.joinAdventure.subtitle")}</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {t("codesphere.joinAdventure.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-background border border-border text-center"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="font-bold text-heading mb-2">
                {t(`codesphere.joinAdventure.benefits.${benefit.key}.title`)}
              </h3>
              <p className="text-body text-sm">
                {t(`codesphere.joinAdventure.benefits.${benefit.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/danielMusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            {t("codesphere.joinAdventure.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
