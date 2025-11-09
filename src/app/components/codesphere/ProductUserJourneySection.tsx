"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MacMockup } from "./MacMockup";
import { useLanguage } from "../../context/LanguageContext";

export function ProductUserJourneySection() {
  const { t } = useLanguage();
  
  const journeySteps = [
    {
      id: "create",
      title: t("codesphere.userJourney.steps.create.title"),
      description: t("codesphere.userJourney.steps.create.description"),
      image: "/Assets/codesphere/2.png",
      color: "#5AB1FF"
    },
    {
      id: "manage",
      title: t("codesphere.userJourney.steps.manage.title"),
      description: t("codesphere.userJourney.steps.manage.description"),
      image: "/Assets/codesphere/3.png",
      color: "#7B9FFF"
    },
    {
      id: "code",
      title: t("codesphere.userJourney.steps.code.title"),
      description: t("codesphere.userJourney.steps.code.description"),
      image: "/Assets/codesphere/4.png",
      color: "#9B8FFF"
    },
    {
      id: "ai",
      title: t("codesphere.userJourney.steps.ai.title"),
      description: t("codesphere.userJourney.steps.ai.description"),
      image: "/Assets/codesphere/5.png",
      color: "#B77BFF"
    }
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToStep = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % journeySteps.length);
    setIsAutoPlaying(false);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-white dark:bg-[#0B0B0E]">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-[#0B0B0E] via-gray-100 dark:via-[#0D0D14] to-gray-50 dark:to-[#0B0B0E]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 dark:bg-[#5AB1FF]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6" style={{ fontWeight: 700 }}>
            {t("codesphere.userJourney.title")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 dark:from-[#5AB1FF] dark:to-[#B77BFF] bg-clip-text text-transparent">
              {t("codesphere.userJourney.subtitle")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("codesphere.userJourney.description")}
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mb-8">
            {journeySteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? 'w-8 bg-blue-600 dark:bg-[#5AB1FF]'
                    : 'bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40'
                }`}
                aria-label={`Aller à l'étape ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {journeySteps.map((step, index) => {
                if (index !== activeStep) return null;
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                  >
                    {/* Left: Image - Mac Mockup */}
                    <div className="relative order-2 lg:order-1">
                      {/* Enhanced Halo effect */}
                      <div
                        className="absolute inset-0 rounded-3xl blur-3xl opacity-60"
                        style={{ backgroundColor: `${step.color}25` }}
                      ></div>
                      <div
                        className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                        style={{ backgroundColor: `${step.color}15` }}
                      ></div>
                      
                      {/* Mac Mockup with hover effect */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative"
                        style={{
                          filter: `drop-shadow(0 0 60px ${step.color}40) drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5))`
                        }}
                      >
                        <MacMockup 
                          image={step.image}
                          alt={step.title}
                          color={step.color}
                        />
                      </motion.div>
                    </div>

                    {/* Right: Text */}
                    <div className="space-y-6 order-1 lg:order-2">
                      <div className="space-y-4">
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm bg-blue-50/50 dark:bg-blue-500/10 border-blue-300/30 dark:border-blue-500/30"
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: step.color }}
                          ></div>
                          <span className="text-sm" style={{ color: step.color }}>
                            Étape {index + 1} / {journeySteps.length}
                          </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl text-gray-900 dark:text-white" style={{ fontWeight: 700 }}>
                          {step.title}
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevStep}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
            <button
              onClick={nextStep}
              className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Étape suivante"
            >
              <ChevronRight className="w-5 h-5 text-gray-900 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

