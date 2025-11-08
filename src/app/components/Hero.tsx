"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../context/LanguageContext";

const technologies = [
  'React', 'Node.js', 'Flutter', 'MongoDB', 'Docker', 'AWS', 'Next.js', 'Firestore'
];

const projectCards = [
  { name: 'CodeSphere', color: 'from-blue-500 to-cyan-500', image: '/images/codesphere.png' },
  { name: 'Butter', color: 'from-violet-500 to-purple-500', image: '/images/butter.png' }
];

export default function Hero() {
  const { t } = useLanguage();

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
          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {projectCards.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                }}
                transition={{ 
                  delay: 0.4 + index * 0.2,
                  duration: 0.8
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="absolute"
                style={{
                  top: `${index * 120}px`,
                  left: `${index * 60}px`,
                  zIndex: projectCards.length - index
                }}
              >
                <div className={`w-72 h-48 rounded-2xl bg-gradient-to-br ${project.color} p-6 shadow-2xl`}>
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center p-2">
                        <Image 
                          src={project.image}
                          alt={project.name} 
                          width={32} 
                          height={32} 
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                      <span className="text-white font-semibold">{project.name}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-white/20 rounded-full" />
                      <div className="h-2 bg-white/20 rounded-full w-3/4" />
                      <div className="h-2 bg-white/20 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Mobile Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {projectCards.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
                className={`h-40 rounded-2xl bg-gradient-to-br ${project.color} p-6 shadow-xl`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center p-2">
                      <Image 
                        src={project.image}
                        alt={project.name} 
                        width={28} 
                        height={28} 
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-white font-semibold">{project.name}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-white/20 rounded-full" />
                    <div className="h-1.5 bg-white/20 rounded-full w-3/4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
