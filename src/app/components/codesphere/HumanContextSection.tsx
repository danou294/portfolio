"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function HumanContextSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#16161C]">
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#16161C]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 dark:bg-[#5AB1FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Main text */}
          <div className="space-y-6">
            <p className="text-2xl lg:text-3xl text-gray-900 dark:text-white leading-relaxed" style={{ fontWeight: 500 }}>
              {t("codesphere.humanContext.text")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent font-bold">
                {t("codesphere.humanContext.highlight")}
              </span>
            </p>
          </div>

          {/* Quote box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-2xl mx-auto p-8 rounded-2xl border border-blue-300/30 dark:border-[#5AB1FF]/30 bg-gradient-to-br from-blue-50/50 dark:from-[#5AB1FF]/10 to-violet-50/50 dark:to-[#B77BFF]/10 backdrop-blur-sm"
          >
            <div className="absolute top-4 left-4">
              <Quote className="w-8 h-8 text-blue-400/30 dark:text-[#5AB1FF]/30" />
            </div>
            <p className="text-xl text-gray-800 dark:text-white/90 italic leading-relaxed relative z-10">
              {t("codesphere.humanContext.quote")}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 relative z-10">
              {t("codesphere.humanContext.author")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

