"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ProductHeroSection } from "../../components/codesphere/ProductHeroSection";
import { ProductUserJourneySection } from "../../components/codesphere/ProductUserJourneySection";
import { UniqueFeaturesSection } from "../../components/codesphere/UniqueFeaturesSection";
import { HumanContextSection } from "../../components/codesphere/HumanContextSection";
import { FutureFeaturesSection } from "../../components/codesphere/FutureFeaturesSection";
import { JoinAdventureSection } from "../../components/codesphere/JoinAdventureSection";
import { FinalCTASection } from "../../components/codesphere/FinalCTASection";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";

export default function CodeSpherePageClient({ lang }: { lang: "fr" | "en" }) {
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    setLanguage(lang);
  }, [setLanguage, lang]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="font-medium text-foreground hover:text-[#F59E0B] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t("article.backToProjects")}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <ProductHeroSection />
      <ProductUserJourneySection />
      <UniqueFeaturesSection />
      <HumanContextSection />
      <FutureFeaturesSection />
      <JoinAdventureSection />
      <FinalCTASection />

      <footer className="border-t border-border py-12 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
              <span className="text-muted-foreground">CodeSphere &copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="https://github.com/danou294/codesphere-public" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            {t("codesphere.finalCta.signature")} <span className="text-[#F59E0B]">Daniel Levy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
