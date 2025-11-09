"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-white dark:bg-[#0A0A0E]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/Assets/blog/LN.jpeg"
                alt="Friends at restaurant"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 dark:from-[#0A0A0E]/60 to-transparent" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 dark:from-[#5AB1FF]/10 to-purple-500/10 dark:to-[#B77BFF]/10 blur-3xl -z-10" />
          </motion.div>
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-white/5 backdrop-blur-sm border border-blue-200 dark:border-white/10 rounded-full">
                <span className="text-sm text-blue-600 dark:text-[#5AB1FF] font-semibold">{t("butter.problem.badge")}</span>
              </div>
              <p className="text-2xl lg:text-3xl text-gray-900 dark:text-white/80 leading-relaxed font-semibold">
                {t("butter.problem.title")}
              </p>
              <p className="text-xl text-gray-600 dark:text-white/60">
                {t("butter.problem.description")}
              </p>
            </div>
            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-8 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-2xl flex items-center justify-center text-3xl">
                💬
              </div>
              
              <p className="text-xl text-gray-800 dark:text-white/90 italic">
                {t("butter.problem.quote")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

