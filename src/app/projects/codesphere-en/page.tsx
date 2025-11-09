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
import { useLanguage } from "../../context/LanguageContext";

export default function CodeSphereEnPage() {
  const { setLanguage, t } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0E] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0B0E]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="font-medium tracking-wide text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-[#5AB1FF] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">{t("article.backToProjects")}</span>
            <span className="sm:hidden">{t("article.backToProjects")}</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* 1️⃣ Introduction — Product Presentation */}
      <ProductHeroSection />

      {/* 2️⃣ User Journey — Product Experience */}
      <ProductUserJourneySection />

      {/* 3️⃣ Product Section — What Makes It Unique */}
      <UniqueFeaturesSection />

      {/* 4️⃣ Product Section with Human Context */}
      <HumanContextSection />

      {/* 5️⃣ Evolution Section — Upcoming Features */}
      <FutureFeaturesSection />

      {/* 6️⃣ Join the Adventure */}
      <JoinAdventureSection />

      {/* 7️⃣ Conclusion / Final CTA */}
      <FinalCTASection />
      
      {/* Footer */}
      <footer className="relative border-t border-gray-200 dark:border-white/5 py-12">
        <div className="absolute inset-0 bg-white dark:bg-[#0B0B0E]"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF]"></div>
              <span className="text-gray-600 dark:text-gray-400">CodeSphere © 2025</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
              <a href="https://codesphere.fr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-[#5AB1FF] transition-colors">Documentation</a>
              <a href="https://github.com/danou294/codesphere" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-[#5AB1FF] transition-colors">GitHub</a>
              <Link href="/#contact" className="hover:text-blue-600 dark:hover:text-[#5AB1FF] transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-600">
            Designed and developed by <span className="text-blue-600 dark:text-[#5AB1FF]">Daniel Levy</span> — Fullstack Developer & Product Builder
          </div>
        </div>
      </footer>
    </div>
  );
}

