"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-[#F59E0B]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-[#EC4899]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg p-4"
            >
              <Image src="/images/butter.png" alt="Butter" width={48} height={48} className="object-contain" />
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-heading">
                <span className="gradient-text">{t("butter.hero.title")}</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-heading">
                {t("butter.hero.subtitle")}
              </h2>
              <p className="text-xl text-body">
                {t("butter.hero.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938?utm_source=portfolio&utm_medium=web&utm_campaign=butter_hero"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border border-foreground rounded-full flex items-center justify-center gap-2 font-medium text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {t("article.getOnAppStore")}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="https://github.com/danielMusic"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 border-2 border-border rounded-xl flex items-center justify-center gap-3 text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
                {t("article.viewCode")}
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-muted-foreground"
            >
              {t("butter.hero.stats")}
            </motion.p>
          </motion.div>

          {/* Right - iPhone 3D mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <Image
              src="/Assets/Wireframes/mockup.webp"
              alt="Butter App - Accueil"
              width={500}
              height={600}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
