"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-theme transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-theme">
        <a href="#home" className="font-bold tracking-wide text-theme hover:text-primary transition-colors duration-300">DL.</a>
        
        {/* Menu burger pour mobile */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="/docs/cv-daniel-levy.pdf" 
            download="CV-Daniel-Levy.pdf"
            className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            aria-label="Télécharger le CV"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          <ThemeToggle />
          <button 
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-theme transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-theme transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-theme transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Navigation desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-primary hover:scale-105 transition-all duration-300 relative group" href="#about">
              À propos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="hover:text-primary hover:scale-105 transition-all duration-300 relative group" href="#skills">
              Compétences
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="hover:text-primary hover:scale-105 transition-all duration-300 relative group" href="#projects">
              Projets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            <a className="hover:text-primary hover:scale-105 transition-all duration-300 relative group" href="#contact">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          <a 
            href="/docs/cv-daniel-levy.pdf" 
            download="CV-Daniel-Levy.pdf"
            className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors duration-300"
            aria-label="Télécharger le CV"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </div>

      {/* Menu mobile overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur border-b border-theme transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4 space-y-2">
          <a 
            className="px-6 py-3 text-theme hover:text-primary hover:bg-secondary transition-all duration-300"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
          <a 
            className="px-6 py-3 text-theme hover:text-primary hover:bg-secondary transition-all duration-300"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Compétences
          </a>
          <a 
            className="px-6 py-3 text-theme hover:text-primary hover:bg-secondary transition-all duration-300"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </a>
          <a 
            className="px-6 py-3 text-theme hover:text-primary hover:bg-secondary transition-all duration-300"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
