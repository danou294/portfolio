"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-secondary/30 text-secondary-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-theme">{t("about.title")}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            {t("about.subtitle").split("Fullstack & Mobile")[0]}
            <span className="text-gray-900 dark:text-primary font-semibold">Fullstack & Mobile</span>
            {t("about.subtitle").split("Fullstack & Mobile")[1].split("NoSQL")[0]}
            <span className="text-gray-900 dark:text-accent font-semibold">NoSQL</span>
            {t("about.subtitle").split("NoSQL")[1]}
          </p>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            <span className="text-gray-900 dark:text-primary font-semibold">{t("about.objective").split(" : ")[0]}</span> : {t("about.objective").split(" : ")[1]}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-primary font-semibold">{t("about.sections.web.title")}</h3>
              <p className="text-secondary-foreground">{t("about.sections.web.tech")}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-primary font-semibold">{t("about.sections.mobile.title")}</h3>
              <p className="text-secondary-foreground">{t("about.sections.mobile.tech")}</p>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <h3 className="text-gray-900 dark:text-primary font-semibold">{t("about.sections.data.title")}</h3>
              <p className="text-secondary-foreground">{t("about.sections.data.tech")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="space-y-6"
        >
          <div className="rounded-2xl border border-theme/50 bg-card/50 backdrop-blur-sm p-8 transition-colors duration-300 hover:bg-card/70">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Ce que je peux apporter</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Architecture & modèles NoSQL",
                "APIs & intégrations propres", 
                "CI/CD, Docker, déploiements",
                "UI réactive & performante"
              ].map((item) => (
                <div
                  key={item}
                  className="group relative rounded-xl border border-theme/50 bg-secondary/50 px-4 py-3 text-sm text-secondary-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/70 hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-primary mb-3">{t("about.approach.title")}</h4>
            <p className="text-secondary-foreground text-sm leading-relaxed">
              {t("about.approach.text").split("agile")[0]}
              <span className="text-gray-900 dark:text-primary font-semibold">agile</span>
              {t("about.approach.text").split("agile")[1].split("centrée utilisateur")[0]}
              <span className="text-gray-900 dark:text-primary font-semibold">centrée utilisateur</span>
              {t("about.approach.text").split("centrée utilisateur")[1]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  