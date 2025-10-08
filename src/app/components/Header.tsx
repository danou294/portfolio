"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="group flex items-center space-x-2 font-bold text-xl tracking-wide text-foreground hover:text-primary transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform duration-300">
            DL
          </div>
          <span className="hidden sm:block">Daniel Levy</span>
        </a>
        
        {/* Navigation desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a 
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group" 
            href="#about"
          >
            {t("nav.about")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group" 
            href="#skills"
          >
            {t("nav.skills")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group" 
            href="#projects"
          >
            {t("nav.projects")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group" 
            href="#contact"
          >
            {t("nav.contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center space-x-3">
          <a 
            href="/docs/cv-daniel-levy.pdf" 
            download="CV-Daniel-Levy.pdf"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-300"
            aria-label={t("nav.downloadCV")}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            CV
          </a>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Actions mobile */}
        <div className="lg:hidden flex items-center space-x-3">
          <a 
            href="/docs/cv-daniel-levy.pdf" 
            download="CV-Daniel-Levy.pdf"
            className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            aria-label={t("nav.downloadCV")}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <button 
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded-lg hover:bg-secondary transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Menu mobile overlay */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-6 space-y-1 px-4">
          <a 
            className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300 font-medium"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.about")}
          </a>
          <a 
            className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300 font-medium"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.skills")}
          </a>
          <a 
            className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300 font-medium"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.projects")}
          </a>
          <a 
            className="px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300 font-medium"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("nav.contact")}
          </a>
        </nav>
      </div>
    </header>
  );
}
