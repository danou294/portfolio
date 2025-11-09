'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    
    // Rediriger vers la bonne page selon le projet
    if (pathname.includes('/projects/butter-')) {
      router.push(`/projects/butter-${newLanguage}`);
    } else if (pathname.includes('/projects/codesphere-')) {
      router.push(`/projects/codesphere-${newLanguage}`);
    }
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-secondary/30 hover:bg-secondary/60 text-foreground border border-border/30 hover:border-border/60 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <motion.div
        key={language}
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.3 }}
        className="text-sm font-semibold"
      >
        {language.toUpperCase()}
      </motion.div>
    </motion.button>
  );
}
