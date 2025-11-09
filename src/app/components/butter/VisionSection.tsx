"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Image, MapPin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
      {
        icon: Search,
        emoji: "🔍",
        title: t("butter.vision.features.filters.title"),
        description: t("butter.vision.features.filters.description")
      },
      {
        icon: Image,
        emoji: "🍝",
        title: t("butter.vision.features.feed.title"),
        description: t("butter.vision.features.feed.description")
      },
      {
        icon: MapPin,
        emoji: "📍",
        title: t("butter.vision.features.navigation.title"),
        description: t("butter.vision.features.navigation.description")
      }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gray-50 dark:bg-[#0A0A0E]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#0A0A0E] via-gray-100 dark:via-[#121218] to-gray-50 dark:to-[#0A0A0E]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-[#5AB1FF]/10 blur-[120px] rounded-full" />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20 space-y-6"
        >
          <h2 className="text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent font-bold">
            {t("butter.vision.title")}
          </h2>
          <p className="text-2xl text-gray-600 dark:text-white/60">
            {t("butter.vision.description")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 rounded-2xl flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                {/* Content */}
                <h3 className="text-2xl mb-4 text-gray-900 dark:text-white/90 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/0 dark:from-[#5AB1FF]/0 to-purple-500/0 dark:to-[#B77BFF]/0 group-hover:from-blue-500/20 dark:group-hover:from-[#5AB1FF]/20 group-hover:to-purple-500/20 dark:group-hover:to-[#B77BFF]/20 blur-xl rounded-3xl -z-10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

