"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FEF3E2] via-[#FDDEB5]/30 to-[#FEF3E2] dark:from-[#1C1917] dark:via-[#1E1D1B] dark:to-[#1C1917]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("contact.collaborate")}
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-12 text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="mailto:danielevy29@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
          >
            <Mail className="mr-2 w-5 h-5" />
            {t("contact.contactMe")}
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-music-levy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
          >
            <Linkedin className="mr-2 w-5 h-5" />
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm"
        >
          {t("contact.responseTime")}
        </motion.p>
      </div>
    </section>
  );
}
