"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 text-theme relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-theme">{t("contact.collaborate")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a 
            href="mailto:danielevy29@gmail.com" 
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">📧 {t("contact.contactMe")}</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/daniellevy2904/" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center px-8 py-4 border-2 border-primary text-theme font-semibold rounded-xl hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
          >
            🔗 LinkedIn
          </a>
          
          <a 
            href="https://github.com/danou294" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center px-8 py-4 border-2 border-theme text-theme font-semibold rounded-xl hover:bg-secondary hover:border-primary hover:text-primary hover:scale-105 transition-all duration-300"
          >
            💻 GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
  