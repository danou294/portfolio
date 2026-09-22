'use client';

import { useOptionalLanguage } from "../contexts/LanguageContext";
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle({ currentLanguage }: { currentLanguage?: "fr" | "en" }) {
  const languageContext = useOptionalLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const activeLanguage = currentLanguage ?? languageContext?.language ?? "fr";

  const toggleLanguage = () => {
    const newLanguage = activeLanguage === 'fr' ? 'en' : 'fr';
    languageContext?.setLanguage(newLanguage);
    if (!languageContext && typeof window !== "undefined") {
      localStorage.setItem("language", newLanguage);
    }
    
    // Rediriger vers la bonne page selon le projet
    if (pathname === '/' || pathname === '/en') {
      router.push(newLanguage === 'fr' ? '/' : '/en');
    } else if (pathname.includes('/projects/butter-')) {
      router.push(`/projects/butter-${newLanguage}`);
    } else if (pathname.includes('/projects/staymakom-')) {
      router.push(`/projects/staymakom-${newLanguage}`);
    } else if (pathname.includes('/projects/sairen-')) {
      router.push(`/projects/sairen-${newLanguage}`);
    } else if (pathname.includes('/projects/codesphere-')) {
      router.push(`/projects/codesphere-${newLanguage}`);
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/30 hover:border-border/60 transition-all duration-300"
      aria-label="Toggle language"
    >
      <div
        key={activeLanguage}
        className="text-sm font-semibold"
      >
        {activeLanguage.toUpperCase()}
      </div>
    </button>
  );
}
