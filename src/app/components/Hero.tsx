"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 text-theme min-h-screen flex items-center transition-colors duration-300"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ y, opacity }}
      >
        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-theme text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              {t("hero.available")}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-theme">
              {t("hero.title").split(" ")[0]}{" "}
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                {t("hero.title").split(" ")[1]}
              </motion.span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t("hero.subtitle").split("React")[0]}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{t("hero.technologies.react")}</span>
              {t("hero.subtitle").split("React")[1].split("Node.js")[0]}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{t("hero.technologies.nodejs")}</span>
              {t("hero.subtitle").split("Node.js")[1].split("Flutter")[0]}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{t("hero.technologies.flutter")}</span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[t("hero.technologies.react"), t("hero.technologies.nodejs"), t("hero.technologies.flutter"), t("hero.technologies.mongodb"), t("hero.technologies.firestore"), t("hero.technologies.docker"), t("hero.technologies.aws")].map(
              (tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-card border border-theme text-sm text-card-foreground backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">{t("hero.cta")}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-theme font-semibold rounded-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
            >
              Me contacter
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/daniellevy2904/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/danou294"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Colonne droite - Cards projets */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative grid grid-cols-2 gap-6">
            <motion.div
              className="group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-theme/50 p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/images/codesphere.svg"
                    alt="CodeSphere"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground text-center mb-2">{t("hero.projects.codesphere.title")}</h3>
                <p className="text-center text-sm text-muted-foreground">{t("hero.projects.codesphere.tech")}</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-2xl bg-card/50 backdrop-blur-sm border border-theme/50 p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Image
                    src="/images/butter.png"
                    alt="Butter"
                    width={64}
                    height={64}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground text-center mb-2">{t("hero.projects.butter.title")}</h3>
                <p className="text-center text-sm text-muted-foreground">{t("hero.projects.butter.tech")}</p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-2 rounded-xl border border-theme/50 bg-card/30 backdrop-blur-sm px-6 py-4 text-center text-sm text-card-foreground hover:bg-card/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <span className="text-primary font-medium">+</span> Automatisation data & modèles NoSQL optimisés
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}