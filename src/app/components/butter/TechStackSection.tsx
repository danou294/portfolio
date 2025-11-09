"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Map, Cloud, Apple as AppleIcon, Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const technologies = [
    { icon: Code2, name: "Flutter", color: "from-blue-400 to-cyan-400" },
    { icon: Database, name: "Firebase", color: "from-orange-400 to-yellow-400" },
    { icon: Map, name: "Google Maps SDK", color: "from-green-400 to-emerald-400" },
    { icon: Cloud, name: "Firestore", color: "from-purple-400 to-pink-400" },
    { icon: AppleIcon, name: "Apple Developer", color: "from-gray-300 to-gray-400" },
    { icon: Github, name: "GitHub", color: "from-indigo-400 to-purple-400" }
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-white dark:bg-[#0A0A0E]">
      {/* Background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0A0A0E]" />
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 dark:bg-white/5 backdrop-blur-sm border border-blue-200 dark:border-white/10 rounded-full mb-6">
            <span className="text-sm text-blue-600 dark:text-[#5AB1FF] font-semibold">{t("butter.techStack.badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900 dark:text-white/90 font-bold">
            {t("butter.techStack.title")}
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Tech icons grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 aspect-square flex flex-col items-center justify-center gap-3">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-900 dark:text-white/80 text-center font-medium">
                    {tech.name}
                  </span>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="p-10 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl space-y-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] rounded-2xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-xl text-gray-700 dark:text-white/80 leading-relaxed">
                {t("butter.techStack.description1")} <span className="text-blue-600 dark:text-[#5AB1FF] font-semibold">Flutter</span> {t("butter.techStack.description2")} <span className="text-blue-600 dark:text-[#5AB1FF] font-semibold">Firebase</span> {t("butter.techStack.description3")} <span className="text-blue-600 dark:text-[#5AB1FF] font-semibold">Google Maps SDK</span> {t("butter.techStack.description4")}
              </p>
              <p className="text-xl text-gray-700 dark:text-white/80 leading-relaxed">
                {t("butter.techStack.description5")} <span className="text-blue-600 dark:text-[#5AB1FF] font-semibold">Apple</span> {t("butter.techStack.description6")}
              </p>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 dark:from-[#5AB1FF]/10 to-purple-500/10 dark:to-[#B77BFF]/10 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

