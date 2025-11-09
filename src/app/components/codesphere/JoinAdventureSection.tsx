"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, ArrowRight, Users, Code } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function JoinAdventureSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#0B0B0E]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#0B0B0E] via-gray-100 dark:via-[#121218] to-gray-50 dark:to-[#0B0B0E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-blue-400/10 dark:from-[#5AB1FF]/10 via-violet-400/10 dark:via-[#B77BFF]/10 to-blue-400/10 dark:to-[#5AB1FF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 dark:bg-[#5AB1FF]/20 rounded-full blur-2xl"></div>
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-[#5AB1FF]/30">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight" style={{ fontWeight: 700 }}>
              {t("codesphere.joinAdventure.title")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
                {t("codesphere.joinAdventure.subtitle")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t("codesphere.joinAdventure.description")}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: Code,
                title: t("codesphere.joinAdventure.benefits.contribute.title"),
                description: t("codesphere.joinAdventure.benefits.contribute.description")
              },
              {
                icon: Users,
                title: t("codesphere.joinAdventure.benefits.community.title"),
                description: t("codesphere.joinAdventure.benefits.community.description")
              },
              {
                icon: Rocket,
                title: t("codesphere.joinAdventure.benefits.impact.title"),
                description: t("codesphere.joinAdventure.benefits.impact.description")
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-gray-900 dark:text-white mb-2" style={{ fontWeight: 700 }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/#contact"
              className="group relative overflow-hidden px-10 py-6 text-lg inline-flex items-center justify-center rounded-lg font-medium transition-all text-white bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t("codesphere.joinAdventure.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-[#7B9FFF] dark:to-[#9B8FFF] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              {t("contact.contactMe")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

