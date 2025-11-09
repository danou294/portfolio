"use client";

import { motion } from "framer-motion";
import { Sparkles, Code } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function FinalCTASection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#0B0B0E]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-[#0B0B0E] via-gray-100 dark:via-[#0D0D14] to-gray-50 dark:to-[#0B0B0E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-400/10 dark:from-[#5AB1FF]/10 via-violet-400/10 dark:via-[#B77BFF]/10 to-blue-400/10 dark:to-[#5AB1FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main title */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl text-gray-900 dark:text-white leading-tight" style={{ fontWeight: 700 }}>
              {t("codesphere.finalCta.title")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
                {t("codesphere.finalCta.subtitle")}
              </span>
              <br />
              {t("codesphere.finalCta.suffix")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("codesphere.finalCta.description")}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://codesphere.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-10 py-6 text-lg inline-flex items-center justify-center rounded-lg font-medium transition-all text-white bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {t("article.tryNow")}
            </a>
            <a
              href="https://github.com/danou294/codesphere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 text-lg border-2 border-gray-300 dark:border-white/20 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Code className="w-5 h-5 mr-2" />
              {t("article.viewCode")}
            </a>
          </div>

          {/* Footer text */}
          <div className="pt-8">
            <p className="text-sm text-gray-600 dark:text-gray-500">
              {t("codesphere.finalCta.signature")} <span className="text-blue-600 dark:text-[#5AB1FF]">Daniel Levy</span> — {t("codesphere.finalCta.tech")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

