"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";
import frTranslations from "../lib/translations/fr.json";
import enTranslations from "../lib/translations/en.json";

const projectCards = [
  {
    id: "butter",
    name: "Butter",
    image: "/images/butter.png",
    gradient: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
  },
  {
    id: "codesphere",
    name: "CodeSphere",
    image: "/images/codesphere.png",
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/20",
  },
];

export default function Hero() {
  const { t, language } = useLanguage();
  const translations = language === "fr" ? frTranslations : enTranslations;

  const getProjectUrl = (id: string) => {
    const lang = language === "fr" ? "fr" : "en";
    return `/projects/${id}-${lang}`;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Subtle warm blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#F59E0B]/10 dark:bg-[#F59E0B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#EC4899]/10 dark:bg-[#EC4899]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {t("hero.available")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", letterSpacing: "-0.03em" }}
          >
            <span className="text-heading">{t("hero.title").split(" ")[0]} </span>
            <span className="gradient-text">{t("hero.title").split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              {t("contact.contactMe")}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-4 mb-16"
          >
            <a
              href="https://github.com/danielMusic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-music-levy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Floating project cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {projectCards.map((project) => {
              const projectData = translations.hero.projects[project.id as keyof typeof translations.hero.projects];
              return (
                <Link key={project.id} href={getProjectUrl(project.id)}>
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)" }}
                    transition={{ duration: 0.2 }}
                    className={`relative overflow-hidden rounded-2xl bg-card border border-border p-6 cursor-pointer ${project.shadow}`}
                  >
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center p-2.5 shadow-md`}>
                        <Image
                          src={project.image}
                          alt={projectData.title}
                          width={28}
                          height={28}
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-heading text-lg">{projectData.title}</h3>
                        <p className="text-xs text-muted-foreground">{projectData.tech}</p>
                      </div>
                    </div>

                    <p className="text-sm font-medium text-heading mb-2">{projectData.tagline}</p>
                    <p className="text-sm text-body line-clamp-2 mb-4">{projectData.description}</p>

                    {/* Stats */}
                    <div className="flex gap-3">
                      {Object.values(projectData.stats).map((stat: { value: string; label: string }, idx: number) => (
                        <div key={idx} className="flex-1 bg-secondary rounded-lg px-3 py-2 text-center">
                          <div className="text-sm font-bold text-heading">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
