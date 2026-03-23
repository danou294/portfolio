"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../../contexts/LanguageContext";

export function ProblemSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo originale */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/Assets/blog/LN.jpeg"
              alt="Friends at restaurant"
              width={600}
              height={600}
              className="object-cover w-full h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 to-transparent" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D]">
              {t("butter.problem.badge")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-heading leading-tight">
              {t("butter.problem.title")}
            </h2>

            <p className="text-body text-lg leading-relaxed">
              {t("butter.problem.description")}
            </p>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <p className="text-body italic">
                {t("butter.problem.quote")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
