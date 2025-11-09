"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Apple, Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0A0A0E]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 dark:from-[#0A0A0E] via-gray-100 dark:via-[#1a1a2e] to-gray-50 dark:to-[#0A0A0E]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-3xl flex items-center justify-center shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 p-4"
            >
              <Image 
                src="/images/butter.png" 
                alt="Butter" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </motion.div>
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl bg-gradient-to-r from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent font-bold">
                {t("butter.hero.title")}
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white/90 font-semibold">
                {t("butter.hero.subtitle")}
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/60">
                {t("butter.hero.description")}
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-full flex items-center justify-center gap-3 shadow-lg shadow-blue-500/30 dark:shadow-blue-500/30 hover:shadow-blue-500/50 dark:hover:shadow-blue-500/50 transition-shadow text-white font-semibold"
              >
                <Apple className="w-5 h-5" />
                {t("article.getOnAppStore")}
              </motion.a>
              
              <motion.a
                href="https://github.com/danou294/Butter-public.git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center gap-3 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-400 dark:hover:border-white/40 transition-colors text-gray-900 dark:text-white font-semibold"
              >
                <Github className="w-5 h-5" />
                {t("article.viewCode")}
              </motion.a>
            </div>
            {/* Stats */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-500 dark:text-white/40"
            >
              {t("butter.hero.stats")}
            </motion.p>
          </motion.div>
          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[700px] flex items-end justify-center overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 dark:from-[#5AB1FF]/20 to-purple-500/20 dark:to-[#B77BFF]/20 blur-[100px] rounded-full" />
            
            <div className="relative flex items-end justify-center gap-6 -mb-32">
              {[
                { mockup: "6.png", height: "h-[600px]", width: "w-80", zIndex: 1, offset: "-mx-6" },
                { mockup: "5.png", height: "h-[700px]", width: "w-96", zIndex: 3, offset: "" },
                { mockup: "3.png", height: "h-[600px]", width: "w-80", zIndex: 1, offset: "-mx-6" }
              ].map((item, index) => (
                <motion.div
                  key={item.mockup}
                  initial={{ opacity: 0, y: 50, rotateY: index === 0 ? -15 : index === 2 ? 15 : 0 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4 + index * 0.15,
                    type: "spring"
                  }}
                  className={`relative ${item.offset}`}
                  style={{
                    zIndex: item.zIndex
                  }}
                >
                  <div className={`${item.width} ${item.height} relative overflow-hidden`}>
                    <Image
                      src={`/Assets/Mockups/${item.mockup}`}
                      alt={`Butter App Mockup ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      unoptimized
                    />
                    {/* Gradient fade at bottom for truncation effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0A0A0E] to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-[#0A0A0E] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

