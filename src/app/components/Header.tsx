"use client";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F0F23]/80 backdrop-blur border-b border-[#3730A3]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between text-[#E2E8F0]">
        <a href="#home" className="font-bold tracking-wide text-white hover:text-[#8B5CF6] transition-colors duration-300">DL.</a>
        
        {/* Menu burger pour mobile */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#E2E8F0] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-[#8B5CF6] hover:scale-105 transition-all duration-300 relative group" href="#about">
            À propos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-[#8B5CF6] hover:scale-105 transition-all duration-300 relative group" href="#skills">
            Compétences
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-[#8B5CF6] hover:scale-105 transition-all duration-300 relative group" href="#projects">
            Projets
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a className="hover:text-[#8B5CF6] hover:scale-105 transition-all duration-300 relative group" href="#contact">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
      </div>

      {/* Menu mobile overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#0F0F23]/95 backdrop-blur border-b border-[#3730A3] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col py-4 space-y-2">
          <a 
            className="px-6 py-3 text-[#E2E8F0] hover:text-[#8B5CF6] hover:bg-[#1E1B4B]/50 transition-all duration-300"
            href="#about"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
          <a 
            className="px-6 py-3 text-[#E2E8F0] hover:text-[#8B5CF6] hover:bg-[#1E1B4B]/50 transition-all duration-300"
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
          >
            Compétences
          </a>
          <a 
            className="px-6 py-3 text-[#E2E8F0] hover:text-[#8B5CF6] hover:bg-[#1E1B4B]/50 transition-all duration-300"
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </a>
          <a 
            className="px-6 py-3 text-[#E2E8F0] hover:text-[#8B5CF6] hover:bg-[#1E1B4B]/50 transition-all duration-300"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
