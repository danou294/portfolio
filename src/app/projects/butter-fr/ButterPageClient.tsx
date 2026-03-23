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
import { useLanguage } from "../../contexts/LanguageContext";

export default function ButterPageClient({ lang }: { lang: "fr" | "en" }) {
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    setLanguage(lang);
  }, [setLanguage, lang]);

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
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
