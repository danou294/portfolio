"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import HomeLanguageToggle from "./HomeLanguageToggle";

export default function Header({
  labels,
  currentLanguage,
}: {
  labels: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    contactMe: string;
    downloadCV: string;
  };
  currentLanguage: "fr" | "en";
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: labels.about },
    { href: "#skills", label: labels.skills },
    { href: "#projects", label: labels.projects },
    { href: "#contact", label: labels.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg text-heading"
        >
          daniel<span className="text-[#F59E0B]">.</span>levy
        </a>

        {/* Navigation desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <HomeLanguageToggle currentLanguage={currentLanguage} />
          <ThemeToggle />
          <a
            href="/docs/cv-daniel-levy.pdf"
            download
            className="inline-flex items-center px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            {labels.downloadCV}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {labels.contactMe}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="lg:hidden flex items-center gap-2">
          <HomeLanguageToggle currentLanguage={currentLanguage} />
          <ThemeToggle />
          <button
            className="flex flex-col justify-center items-center w-10 h-10 gap-1 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 glass border-b border-border/50 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <nav className="flex flex-col py-4 px-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mx-4 mt-2 py-3 text-center rounded-lg bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] font-medium"
          >
            {labels.contactMe}
          </a>
          <a
            href="/docs/cv-daniel-levy.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="mx-4 py-3 text-center rounded-lg border border-border text-foreground font-medium"
          >
            {labels.downloadCV}
          </a>
        </nav>
      </div>
    </header>
  );
}
