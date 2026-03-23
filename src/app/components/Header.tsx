"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-bold text-lg tracking-tight text-heading"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          daniel<span className="text-[#F59E0B]">.</span>levy
        </a>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t("contact.contactMe")}
          </a>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
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
      <div className={`md:hidden absolute top-full left-0 right-0 glass border-b border-border/50 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
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
            {t("contact.contactMe")}
          </a>
        </nav>
      </div>
    </header>
  );
}
