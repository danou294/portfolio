"use client";

import React from "react";
import Link from "next/link";
import { HeroSection } from "../../components/codesphere/HeroSection";
import { ProductPhilosophySection } from "../../components/codesphere/ProductPhilosophySection";
import { StorySection } from "../../components/codesphere/StorySection";
import { VisionSection } from "../../components/codesphere/VisionSection";
import { DetailedUserJourneySection } from "../../components/codesphere/DetailedUserJourneySection";
import { UseCasesSection } from "../../components/codesphere/UseCasesSection";
import { ProductMetricsSection } from "../../components/codesphere/ProductMetricsSection";
import { TechStackSection } from "../../components/codesphere/TechStackSection";
import { CTASection } from "../../components/codesphere/CTASection";
import { PortfolioSection } from "../../components/codesphere/PortfolioSection";
import ThemeToggle from "../../components/ThemeToggle";
import LanguageToggle from "../../components/LanguageToggle";

export default function CodeSphereFrPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0E] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A0A0E]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#projects" className="font-medium tracking-wide text-white hover:text-[#5AB1FF] transition-colors duration-300 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Retour aux projets</span>
            <span className="sm:hidden">Retour</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <HeroSection />
      <ProductPhilosophySection />
      <StorySection />
      <VisionSection />
      <DetailedUserJourneySection />
      <UseCasesSection />
      <ProductMetricsSection />
      <TechStackSection />
      <CTASection />
      
      {/* Portfolio Section */}
      <div className="border-t border-white/5 mt-20">
        <PortfolioSection />
      </div>
      
      {/* Footer */}
      <footer className="relative border-t border-white/5 py-12">
        <div className="absolute inset-0 bg-[#0A0A0E]"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF]"></div>
              <span className="text-gray-400">CodeSphere © 2025</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="https://codesphere.fr" target="_blank" rel="noopener noreferrer" className="hover:text-[#5AB1FF] transition-colors">Documentation</a>
              <a href="https://github.com/danou294/codesphere" target="_blank" rel="noopener noreferrer" className="hover:text-[#5AB1FF] transition-colors">GitHub</a>
              <a href="/#contact" className="hover:text-[#5AB1FF] transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            Conçu et développé par <span className="text-[#5AB1FF]">Daniel Levy</span> — Fullstack Developer & Product Builder
          </div>
        </div>
      </footer>
    </div>
  );
}

