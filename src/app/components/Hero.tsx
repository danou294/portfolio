"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react";
import Link from "next/link";
import frTranslations from "../lib/translations/fr.json";
import enTranslations from "../lib/translations/en.json";

const technologies = [
  'React', 'Node.js', 'Flutter', 'MongoDB', 'Docker', 'AWS', 'Next.js', 'Firestore'
];

// Structure des projets (sans contenu, car on utilise les traductions)
const projectCards = [
  { 
    id: 'codesphere',
    name: 'CodeSphere', 
    color: 'from-blue-500 to-cyan-500', 
    image: '/images/codesphere.png',
  },
  { 
    id: 'butter',
    name: 'Butter', 
    color: 'from-violet-500 to-purple-500', 
    image: '/images/butter.png',
  }
];

// Composant pour chaque carte du carousel 3D
function ProjectCard3D({ 
  project, 
  index, 
  currentIndex, 
  onCardClick,
  getProjectUrl,
  language
}: { 
  project: typeof projectCards[0];
  index: number;
  currentIndex: number;
  onCardClick: () => void;
  getProjectUrl: (name: string) => string;
  language: 'fr' | 'en';
}) {
  const translations = language === 'fr' ? frTranslations : enTranslations;
  const projectData = translations.hero.projects[project.id as keyof typeof translations.hero.projects];
  const offset = index - currentIndex;
  const rotation = offset * 60;
  const z = -Math.abs(offset) * 100;
  const opacity = Math.abs(offset) === 0 ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.4);
  const scale = Math.abs(offset) === 0 ? 1 : Math.max(0.7, 1 - Math.abs(offset) * 0.15);
  const isActive = index === currentIndex;

  const zValue = useMotionValue(z);
  const translateZ = useTransform(zValue, (val) => `translateZ(${val}px)`);

  useEffect(() => {
    zValue.set(z);
  }, [z, zValue]);

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -90 }}
      animate={{ 
        opacity,
        rotateY: rotation,
        scale: scale,
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }}
      whileHover={isActive ? {
        scale: 1.05,
        transition: { duration: 0.3 }
      } : {}}
      className="absolute left-1/2 top-1/2"
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        width: '360px',
        height: '480px',
        marginLeft: '-180px',
        marginTop: '-240px',
        cursor: isActive ? 'pointer' : 'default',
        zIndex: projectCards.length - Math.abs(offset),
        transform: translateZ,
      }}
      onClick={() => isActive && onCardClick()}
    >
      <Link href={getProjectUrl(project.id)} className="block w-full h-full">
        <motion.div
          className={`w-full h-full rounded-3xl bg-gradient-to-br ${project.color} p-8 shadow-2xl border-2 ${
            isActive 
              ? 'border-white/30 shadow-blue-500/50 dark:shadow-blue-500/50' 
              : 'border-white/10'
          }`}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
          }}
        >
          <div className="flex flex-col h-full justify-between">
            {/* Logo et titre */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center p-3 shadow-lg">
                  <Image 
                    src={project.image}
                    alt={project.name} 
                    width={40} 
                    height={40} 
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{projectData.title}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{projectData.tech}</p>
                </div>
              </div>
              
              {/* Tagline marketing */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-white leading-tight">
                  {projectData.tagline}
                </p>
                <p className="text-xs text-white/80 leading-relaxed">
                  {projectData.description}
                </p>
              </div>
            </div>

            {/* Stats et bénéfices */}
            <div className="space-y-4 mt-4">
              {/* Stats */}
              <div className="flex gap-4">
                {Object.values(projectData.stats).map((stat: { value: string; label: string }, idx: number) => (
                  <div key={idx} className="flex-1 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Bénéfices */}
              <div className="grid grid-cols-2 gap-2">
                {projectData.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-white/90">
                    <Sparkles className="w-3 h-3 text-white/80" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow effect pour la carte active */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation du carousel
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);


  const getProjectUrl = (projectId: string) => {
    if (projectId === 'butter') {
      return language === 'fr' ? '/projects/butter-fr' : '/projects/butter-en';
    } else if (projectId === 'codesphere') {
      return language === 'fr' ? '/projects/codesphere-fr' : '/projects/codesphere-en';
    }
    return `#projects`;
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-violet-500/5 to-transparent dark:from-blue-500/20 dark:via-violet-500/10 dark:to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  <span className="inline-block mr-3">👋</span>
                  {t("hero.title").split(" ")[0]}{" "}
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                    {t("hero.title").split(" ")[1]}
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white shadow-lg shadow-blue-500/25 dark:shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/60 transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-500/5 dark:hover:bg-blue-500/10 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 w-4 h-4" />
                {t("contact.contactMe")}
              </Button>
            </motion.div>
            {/* Technologies Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Badge variant="secondary" className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* Right Content - 3D Carousel */}
          <div 
            className="relative h-[600px] hidden lg:flex items-center justify-center overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Container 3D avec perspective */}
            <div 
              className="relative w-full h-full overflow-visible"
              style={{
                perspective: '1200px',
                perspectiveOrigin: '50% 50%'
              }}
            >
              {projectCards.map((project, index) => (
                <ProjectCard3D
                  key={project.id}
                  project={project}
                  index={index}
                  currentIndex={currentIndex}
                  onCardClick={() => setCurrentIndex(index)}
                  getProjectUrl={getProjectUrl}
                  language={language}
                />
              ))}
            </div>

            {/* Flèches de navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev - 1 + projectCards.length) % projectCards.length);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-2 border-white/30 dark:border-white/20 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-7 h-7 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev + 1) % projectCards.length);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-2 border-white/30 dark:border-white/20 hover:bg-white dark:hover:bg-gray-800 hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-7 h-7 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {projectCards.map((project, index) => {
                const translations = language === 'fr' ? frTranslations : enTranslations;
                const projectData = translations.hero.projects[project.id as keyof typeof translations.hero.projects];
                return (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`${language === 'fr' ? 'Aller à' : 'Go to'} ${projectData.title}`}
                  />
                );
              })}
            </div>
          </div>
          {/* Mobile Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {projectCards.map((project, index) => {
              const translations = language === 'fr' ? frTranslations : enTranslations;
              const projectData = translations.hero.projects[project.id as keyof typeof translations.hero.projects];
              return (
                <Link key={project.id} href={getProjectUrl(project.id)}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`rounded-2xl bg-gradient-to-br ${project.color} p-6 shadow-xl cursor-pointer`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center p-2">
                          <Image 
                            src={project.image}
                            alt={projectData.title} 
                            width={32} 
                            height={32} 
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg">{projectData.title}</h3>
                          <p className="text-white/70 text-xs">{projectData.tech}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <p className="text-white font-semibold text-sm leading-tight">
                          {projectData.tagline}
                        </p>
                        <p className="text-white/80 text-xs leading-relaxed line-clamp-2">
                          {projectData.description}
                        </p>
                      </div>

                      <div className="flex gap-2 pt-2">
                        {Object.values(projectData.stats).map((stat: { value: string; label: string }, idx: number) => (
                          <div key={idx} className="flex-1 bg-white/10 rounded-lg p-2 backdrop-blur-sm">
                            <div className="text-sm font-bold text-white">{stat.value}</div>
                            <div className="text-xs text-white/70">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
