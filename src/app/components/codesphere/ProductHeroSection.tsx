"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function ProductHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-[#EC4899]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {(t("codesphere.hero.tags") as unknown as string[])?.map?.((tag: string) => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-heading">
            {t("codesphere.hero.title")}{" "}
            <span className="gradient-text">{t("codesphere.hero.subtitle")}</span>
          </h1>

          <p className="text-xl text-body max-w-2xl mx-auto">
            {t("codesphere.hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://codesphere.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-5 h-5" />
              {t("article.tryNow")}
            </a>
            <a
              href="https://github.com/danielMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-border rounded-xl font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Github className="w-5 h-5" />
              {t("article.viewCode")}
            </a>
          </div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 mx-auto max-w-4xl"
          >
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground">codesphere.fr</span>
              </div>
              <div className="relative h-[300px] sm:h-[400px] bg-gradient-to-br from-[#FEF3E2] to-[#FDDEB5] dark:from-[#1C1917] dark:to-[#1E1D1B] flex items-center justify-center">
                <Image
                  src="/images/codesphere.png"
                  alt="CodeSphere"
                  width={120}
                  height={120}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
