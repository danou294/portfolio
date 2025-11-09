"use client";
import { Linkedin, Github, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-violet-600" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Daniel Levy
            </p>
            <p className="text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
              {t("footer.madeWith")} <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> {t("footer.with")}
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/daniellevy2904/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:border-blue-500 border border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            
            <a
              href="https://github.com/danou294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-500/10 hover:border-violet-500 border border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
