"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getArticles, Article } from "../lib/articles-new";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  
  // Obtenir les articles traduits
  const articles = getArticles(language);
  
  // Simuler un chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const ProjectCard = ({ article, index }: { article: Article; index: number }) => {
    return (
      <motion.a
        key={article.id}
        href={`/projects/${article.id}`}
        className="group relative rounded-3xl bg-card/40 backdrop-blur-sm border border-theme/30 p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:bg-card/60 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.15,
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
      >
        {/* Gradient overlay au hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Contenu de la carte */}
        <div className="relative z-10 space-y-6">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 transition-transform duration-300 group-hover:scale-105">
            <img 
              src={article.image} 
              alt={article.title} 
              className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110" 
            />
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary">
              {article.title}
            </h3>
            
            <p className="text-secondary-foreground text-sm leading-relaxed">
              {article.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary/50 border border-theme/30 text-xs text-secondary-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:bg-secondary/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-center pt-2">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-theme font-semibold transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
              {t("projects.discover")}
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
          </div>
        </div>
      </motion.a>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background text-secondary-foreground relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/8 to-primary/8 blur-3xl"
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-theme">
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-card/40 border border-theme/30 p-8 h-80 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <ProjectCard key={article.id} article={article} index={index} />
            ))}
          </div>
        )}

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
        
        </motion.div>
      </div>
    </section>
  );
}