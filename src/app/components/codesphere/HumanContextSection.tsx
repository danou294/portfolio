"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

export function HumanContextSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-2xl lg:text-3xl text-heading font-medium leading-relaxed">
            {t("codesphere.humanContext.text")}{" "}
            <span className="gradient-text font-bold">{t("codesphere.humanContext.highlight")}</span>
          </p>

          <div className="p-8 rounded-2xl bg-background border border-border max-w-2xl mx-auto">
            <p className="text-xl text-body italic mb-3">
              {t("codesphere.humanContext.quote")}
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              {t("codesphere.humanContext.author")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
