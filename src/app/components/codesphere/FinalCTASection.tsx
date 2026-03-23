"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export function FinalCTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3E2] via-[#FDDEB5]/30 to-[#FEF3E2] dark:from-[#1C1917] dark:via-[#1E1D1B] dark:to-[#1C1917]" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-2">
            {t("codesphere.finalCta.title")}{" "}
            <span className="gradient-text">{t("codesphere.finalCta.subtitle")}</span>
          </h2>
          <p className="text-body text-lg mb-2">{t("codesphere.finalCta.suffix")}</p>
          <p className="text-body max-w-xl mx-auto mb-10">
            {t("codesphere.finalCta.description")}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground"
        >
          {t("codesphere.finalCta.signature")}{" "}
          <span className="text-[#F59E0B] font-semibold">Daniel Levy</span> — {t("codesphere.finalCta.tech")}
        </motion.p>
      </div>
    </section>
  );
}
