"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Code, Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import frTranslations from "../../lib/translations/fr.json";
import enTranslations from "../../lib/translations/en.json";

export function ProductHeroSection() {
  const { t, language } = useLanguage();
  
  // Récupérer les tags directement depuis les traductions (car c'est un tableau)
  const tags = (language === 'fr' ? frTranslations : enTranslations).codesphere?.hero?.tags || [];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0B0B0E]">
      {/* Background with subtle blue glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-[#0B0B0E] via-gray-100 dark:via-[#0D0D14] to-gray-50 dark:to-[#0B0B0E]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-[#5AB1FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 dark:bg-[#B77BFF]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight" style={{ fontWeight: 700 }}>
                {t("codesphere.hero.title")}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
                  {t("codesphere.hero.subtitle")}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t("codesphere.hero.description")}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {Array.isArray(tags) && tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://codesphere.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden px-8 py-6 inline-flex items-center justify-center rounded-lg font-medium transition-all text-white bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {t("article.tryNow")}
              </a>
              <a
                href="https://github.com/danou294/codesphere"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-6 border-2 border-gray-300 dark:border-white/20 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 text-gray-900 dark:text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                {t("article.viewCode")}
              </a>
            </div>
          </motion.div>

          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-violet-400/20 dark:from-[#5AB1FF]/20 dark:to-[#B77BFF]/20 rounded-2xl blur-3xl transform translate-y-8"></div>
            
            {/* Main mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-black/40 backdrop-blur-xl shadow-2xl">
              <div className="aspect-video">
                <Image
                  src="/images/codesphere.png"
                  alt="CodeSphere Dashboard"
                  width={800}
                  height={450}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

