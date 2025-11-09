"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Sliders, Grid3x3, FileText } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function UserExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      icon: Sliders,
      emoji: "🎯",
      title: t("butter.userExperience.steps.filters.title"),
      description: t("butter.userExperience.steps.filters.description"),
      mockup: "3.png"
    },
    {
      number: "2",
      icon: Grid3x3,
      emoji: "📱",
      title: t("butter.userExperience.steps.feed.title"),
      description: t("butter.userExperience.steps.feed.description"),
      mockup: "5.png"
    },
    {
      number: "3",
      icon: FileText,
      emoji: "📖",
      title: t("butter.userExperience.steps.details.title"),
      description: t("butter.userExperience.steps.details.description"),
      mockup: "6.png"
    },
    {
      number: "4",
      icon: FileText,
      emoji: "🗺️",
      title: t("butter.userExperience.steps.accessibility.title"),
      description: t("butter.userExperience.steps.accessibility.description"),
      mockup: "7.png"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gray-50 dark:bg-[#0A0A0E]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#0A0A0E] via-gray-100 dark:via-[#1a1530] to-gray-50 dark:to-[#0A0A0E]" />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-white/5 backdrop-blur-sm border border-blue-200 dark:border-white/10 rounded-full mb-6">
            <span className="text-sm text-blue-600 dark:text-[#5AB1FF] font-semibold">{t("butter.userExperience.badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white/90 font-bold">
            {t("butter.userExperience.title")}
          </h2>
        </motion.div>
        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500 dark:from-[#5AB1FF] dark:via-[#8B96FF] dark:to-[#B77BFF]" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`relative inline-block ${index % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    <div className="p-10 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl hover:shadow-2xl hover:border-blue-300 dark:hover:border-[#5AB1FF]/30 transition-all duration-300 max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-2xl flex items-center justify-center text-2xl shadow-lg ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                          {step.emoji}
                        </div>
                        <h3 className="text-2xl lg:text-3xl text-gray-900 dark:text-white/90 font-bold">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {/* Card glow */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 blur-3xl rounded-3xl -z-10 opacity-60" />
                  </div>
                </div>
                {/* Number badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-full flex items-center justify-center z-10 relative border-4 border-white dark:border-[#0A0A0E]">
                    <span className="text-2xl text-white font-bold">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] blur-xl rounded-full opacity-50" />
                </div>
                {/* Mockup */}
                <div className="flex-1 flex justify-center">
                  {step.mockup ? (
                    <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="relative"
                    >
                      <div className="w-48 h-96 relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10">
                        <Image
                          src={`/Assets/Mockups/${step.mockup}`}
                          alt={`Butter App - ${step.title}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
                      </div>
                      {/* Glow effect behind phone */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 dark:from-[#5AB1FF]/30 to-purple-500/30 dark:to-[#B77BFF]/30 blur-2xl rounded-[2.5rem] -z-10 opacity-60" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="w-48 h-96 relative rounded-[2.5rem] overflow-hidden"
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white dark:from-white/5 to-gray-100 dark:to-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-3 relative overflow-hidden">
                        {/* Mini phone UI */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/5 dark:from-[#5AB1FF]/5 to-purple-500/5 dark:to-[#B77BFF]/5 rounded-[2rem] p-4">
                          <div className="w-full h-8 bg-white/5 dark:bg-white/5 rounded-xl mb-4" />
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-full h-20 bg-white/5 dark:bg-white/5 rounded-2xl mb-3" />
                          ))}
                        </div>
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-[#5AB1FF]/10 to-purple-500/10 dark:to-[#B77BFF]/10 blur-2xl -z-10" />
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

