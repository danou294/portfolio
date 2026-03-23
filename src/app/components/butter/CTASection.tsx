"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Warm gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3E2] via-[#FDDEB5]/30 to-[#FEF3E2] dark:from-[#1C1917] dark:via-[#1E1D1B] dark:to-[#1C1917]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F59E0B]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg mx-auto p-4">
            <Image src="/images/butter.png" alt="Butter" width={64} height={64} className="object-contain" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl lg:text-5xl font-bold text-heading"
        >
          {t("butter.cta.title")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938?utm_source=portfolio&utm_medium=web&utm_campaign=case_study"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-foreground rounded-full font-medium text-lg text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            {t("butter.cta.download")}
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/danielMusic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-border rounded-xl font-semibold text-lg text-foreground hover:bg-secondary transition-colors"
          >
            <Github className="w-6 h-6" />
            {t("butter.cta.viewSource")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.butterguide.com?utm_source=portfolio&utm_medium=web&utm_campaign=case_study"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F59E0B] hover:underline font-medium"
          >
            butterguide.com &rarr;
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground"
        >
          {t("butter.cta.signature")} <span className="text-[#F59E0B] font-semibold">Daniel Levy</span> — {t("butter.cta.tech")}
        </motion.p>
      </div>
    </section>
  );
}
