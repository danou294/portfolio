"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getArticles } from "../../lib/articles-new";
import { useLanguage } from "../../context/LanguageContext";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { language, t } = useLanguage();
  const resolvedParams = React.use(params);
  const articles = getArticles(language);
  const article = articles.find(a => a.id === resolvedParams.id);

  if (!article) {
    return (
      <div className="min-h-screen bg-theme text-theme flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('🚀') || line.startsWith('💡') || line.startsWith('⚙️') || 
          line.startsWith('🧠') || line.startsWith('💻') || line.startsWith('🔩') || 
          line.startsWith('💬') || line.startsWith('🎯') || line.startsWith('🍽️')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-black dark:text-primary mt-8 mb-4">
            {line}
          </h2>
        );
      } else if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-6 mb-2 text-secondary-foreground">
            {line.substring(1).trim()}
          </li>
        );
      } else if (line.trim() === '⸻') {
        return <hr key={index} className="my-6 border-theme/20" />;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else if (line.startsWith('"') && line.endsWith('"')) {
        return (
          <blockquote key={index} className="italic text-primary/80 border-l-4 border-primary/30 pl-6 my-6 text-lg">
            {line}
          </blockquote>
        );
      } else {
        return (
          <p key={index} className="text-secondary-foreground leading-relaxed mb-4 text-lg">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Apple-style */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-foreground">
          {/* Back button */}
          <Link href="/#projects" className="font-medium tracking-wide text-theme hover:text-primary transition-colors duration-300 flex items-center gap-2 min-w-0 flex-shrink">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">{t("article.backToProjects")}</span>
            <span className="sm:hidden">Retour</span>
          </Link>
          
          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageToggle />
            <ThemeToggle />
            {article.githubLink && (
              <a
                href={article.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Voir le code sur GitHub"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {article.liveLink && (
              <a
                href={article.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Télécharger sur l'App Store"
              >
                <img 
                  src="/images/appstore.svg"
                  alt="App Store"
                  className="w-4 h-4 [filter:brightness(0)] dark:[filter:brightness(0)_invert(1)]"
                />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section Apple-style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* App Icon */}
            <motion.div
              className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-theme/20 flex items-center justify-center shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={article.image} alt={article.title} className="w-24 h-24 object-contain" />
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-theme tracking-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-2xl text-secondary-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {article.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-card/50 border border-theme/20 text-sm text-secondary-foreground backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {article.githubLink && (
                <a
                  href={article.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {t("article.viewCode")}
                </a>
              )}
              {article.liveLink && (
                <a
                  href={article.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 py-4 border-2 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${
                    article.id === 'butter' 
                      ? 'border-primary text-cyan-500 dark:text-cyan-400 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/25' 
                      : 'border-primary text-cyan-500 dark:text-cyan-400 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/25'
                  }`}
                >
                  {article.id === 'butter' ? (
                    <>
                      <img 
                        src="/images/appstore.svg"
                        alt="Download on the App Store"
                        className="w-6 h-6 [filter:brightness(0)] dark:[filter:brightness(0)_invert(1)]"
                      />
                      {t("article.tryNow")}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {t("article.tryNow")}
                    </>
                  )}
                </a>
              )}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {formatContent(article.content)}
        </motion.article>

        {/* Social Links Section */}
        {article.socialLinks && (
          <motion.div
            className="mt-16 pt-12 border-t border-theme/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-theme mb-8 text-center">{t("article.followProject")}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {article.id === 'butter' && article.liveLink && (
                <a
                  href={article.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-white dark:bg-white border-2 border-gray-900 dark:border-gray-300 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-gray-900/25"
                  aria-label="Télécharger sur l'App Store"
                >
                  <img 
                    src="/images/appstore.svg"
                    alt="App Store"
                    className="w-8 h-8 [filter:brightness(0)] dark:[filter:brightness(0)_invert(1)]"
                  />
                </a>
              )}
              {article.socialLinks.linkedin && (
                <a
                  href={article.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-600/25"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {article.socialLinks.instagram && (
                <a
                  href={article.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {article.socialLinks.tiktok && (
                <a
                  href={article.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-black/25"
                  aria-label="TikTok"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
