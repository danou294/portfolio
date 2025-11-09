"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { HeroSection } from "../../components/butter/HeroSection";
import { ProblemSection } from "../../components/butter/ProblemSection";
import { VisionSection } from "../../components/butter/VisionSection";
import { TechStackSection } from "../../components/butter/TechStackSection";
import { FeaturesSection } from "../../components/butter/FeaturesSection";
import { UserExperienceSection } from "../../components/butter/UserExperienceSection";
import { CTASection } from "../../components/butter/CTASection";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";

export default function ButterFrPage() {
  const { setLanguage, t } = useLanguage();
  
  useEffect(() => {
    setLanguage('fr');
  }, [setLanguage]);
  return (
    <div className="bg-white dark:bg-[#0A0A0E] min-h-screen text-gray-900 dark:text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0A0A0E]/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
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

      <HeroSection />
      <ProblemSection />
      <VisionSection />
      <TechStackSection />
      <FeaturesSection />
      <UserExperienceSection />
      <CTASection />
    </div>
  );
}
