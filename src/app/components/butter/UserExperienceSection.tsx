"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

const steps = [
  { key: "filters", icon: "🎯", mockup: "/Assets/Wireframes/app-home.webp" },
  { key: "feed", icon: "📸", mockup: "/Assets/Wireframes/app-feed.webp" },
  { key: "details", icon: "📋", mockup: "/Assets/Wireframes/app-guides.webp" },
  { key: "accessibility", icon: "🗺️", mockup: "/Assets/Wireframes/app-map.webp" },
];

export function UserExperienceSection() {
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
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D] mb-4">
            {t("butter.userExperience.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading">
            {t("butter.userExperience.title")}
          </h2>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EC4899] flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-heading">
                    {t(`butter.userExperience.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-body text-lg leading-relaxed">
                    {t(`butter.userExperience.steps.${step.key}.description`)}
                  </p>
                </div>

                {/* Mockup */}
                <div className="flex-1 flex justify-center">
                  <div className="w-[220px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-[#1A1A1A] dark:border-[#2A2926]">
                    <Image
                      src={step.mockup}
                      alt={`Etape ${index + 1}`}
                      width={220}
                      height={440}
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
