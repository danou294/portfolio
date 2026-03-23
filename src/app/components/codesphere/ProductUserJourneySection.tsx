"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const steps = [
  { key: "create", icon: "🚀" },
  { key: "manage", icon: "📁" },
  { key: "code", icon: "💻" },
  { key: "ai", icon: "🤖" },
];

export function ProductUserJourneySection() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

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
            {t("codesphere.userJourney.title")}{" "}
            <span className="gradient-text">{t("codesphere.userJourney.subtitle")}</span>
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            {t("codesphere.userJourney.description")}
          </p>
        </motion.div>

        {/* Step navigation */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {steps.map((step, index) => (
            <button
              key={step.key}
              onClick={() => setActiveStep(index)}
              className={`px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                activeStep === index
                  ? "bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] shadow-md"
                  : "bg-background border border-border text-muted-foreground hover:bg-secondary"
              }`}
            >
              <span className="mr-2">{step.icon}</span>
              {t(`codesphere.userJourney.steps.${step.key}.title`)}
            </button>
          ))}
        </div>

        {/* Active step content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-background border border-border"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EC4899] flex items-center justify-center text-2xl shadow-md">
              {steps[activeStep].icon}
            </div>
            <h3 className="text-2xl font-bold text-heading">
              {t(`codesphere.userJourney.steps.${steps[activeStep].key}.title`)}
            </h3>
          </div>
          <p className="text-body text-lg leading-relaxed">
            {t(`codesphere.userJourney.steps.${steps[activeStep].key}.description`)}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
