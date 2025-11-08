"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Briefcase, Rocket, Code2, CheckCircle } from "lucide-react";

const useCases = [
  {
    id: "students",
    icon: GraduationCap,
    title: "Étudiants & Apprenants",
    subtitle: "Apprends à coder sans les complications",
    color: "#5AB1FF",
    scenario: {
      user: "Marie, 22 ans, en formation développement web",
      problem: "Perd 2h à installer Node.js, VS Code, et configurer son environnement avant de pouvoir coder",
      solution: "Avec CodeSphere, elle ouvre son navigateur et commence à coder immédiatement. L'IA l'aide à comprendre les erreurs.",
      results: [
        "0 installation requise",
        "Aide IA contextuelle pour apprendre",
        "Partage de projets avec les profs en un clic"
      ]
    }
  },
  {
    id: "freelance",
    icon: Briefcase,
    title: "Freelances & Consultants",
    subtitle: "Prototypes rapides pour convaincre",
    color: "#7B9FFF",
    scenario: {
      user: "Thomas, freelance React, 5 ans d'expérience",
      problem: "Doit créer des POC rapides pour valider des idées clients, mais le setup prend trop de temps",
      solution: "CodeSphere lui permet de créer et déployer un prototype fonctionnel en 30 minutes, démo live incluse.",
      results: [
        "Prototypes en 30min au lieu de 2 jours",
        "URL de démo partageable instantanément",
        "Pas de gestion d'infrastructure"
      ]
    }
  },
  {
    id: "startup",
    icon: Rocket,
    title: "Fondateurs de Startups",
    subtitle: "MVP en production ultra-rapide",
    color: "#B77BFF",
    scenario: {
      user: "Alex, founder d'une startup SaaS",
      problem: "Besoin de valider rapidement une idée avec un MVP, mais n'a pas le temps de setup toute l'infra",
      solution: "CodeSphere lui donne un environnement full-stack complet. Il code, teste et déploie son MVP en une journée.",
      results: [
        "MVP en production en 1 jour au lieu d'1 semaine",
        "Tests A/B avec déploiements multiples",
        "Scalable sans configuration"
      ]
    }
  }
];

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(useCases[0]);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0E]">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#B77BFF]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5AB1FF]/30 bg-[#5AB1FF]/10 backdrop-blur-sm mb-6">
            <Code2 className="w-4 h-4 text-[#5AB1FF]" />
            <span className="text-sm text-[#5AB1FF]">Cas d&apos;Usage Produit</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 700 }}>
            Conçu pour{" "}
            <span style={{
              background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              différents profils utilisateurs
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            CodeSphere résout des problèmes concrets pour des utilisateurs réels
          </p>
        </motion.div>
        {/* Use case selector */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {useCases.map((useCase) => (
            <motion.button
              key={useCase.id}
              onClick={() => setActiveCase(useCase)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                activeCase.id === useCase.id
                  ? 'border-white/20 bg-gradient-to-br from-white/10 to-transparent'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: `${useCase.color}20`,
                    boxShadow: activeCase.id === useCase.id ? `0 0 20px ${useCase.color}40` : 'none'
                  }}
                >
                  <useCase.icon 
                    className="w-6 h-6" 
                    style={{ color: useCase.color }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg text-white mb-1" style={{ fontWeight: 700 }}>
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-400">{useCase.subtitle}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        {/* Scenario details */}
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: User story */}
            <div className="space-y-8">
              {/* User profile */}
              <div className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: activeCase.color }}
                  ></div>
                  <span className="text-sm text-gray-400">Profil utilisateur</span>
                </div>
                <p className="text-lg text-white">{activeCase.scenario.user}</p>
              </div>
              {/* Problem */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <span className="text-red-400">✗</span>
                  </div>
                  <h4 className="text-xl text-white" style={{ fontWeight: 700 }}>
                    Le problème
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed pl-10">
                  {activeCase.scenario.problem}
                </p>
              </div>
              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-xl text-white" style={{ fontWeight: 700 }}>
                    La solution CodeSphere
                  </h4>
                </div>
                <p className="text-gray-400 leading-relaxed pl-10 mb-6">
                  {activeCase.scenario.solution}
                </p>
                {/* Results */}
                <div className="pl-10 space-y-3">
                  {activeCase.scenario.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${activeCase.color}20` }}
                      >
                        <CheckCircle 
                          className="w-3 h-3" 
                          style={{ color: activeCase.color }}
                        />
                      </div>
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Visual mockup */}
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{ backgroundColor: `${activeCase.color}20` }}
              ></div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <activeCase.icon 
                      className="w-4 h-4" 
                      style={{ color: activeCase.color }}
                    />
                    <span className="text-sm text-gray-300">Workflow simplifié</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  {/* Timeline */}
                  <div className="space-y-4">
                    {[
                      { time: "0:00", action: "Ouvre CodeSphere", status: "done" },
                      { time: "0:10", action: "Sélectionne le template", status: "done" },
                      { time: "0:30", action: "Commence à coder", status: "done" },
                      { time: "5:00", action: "Application déployée ✓", status: "done" }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${activeCase.color}10` }}
                        >
                          <span 
                            className="text-sm"
                            style={{ 
                              color: activeCase.color,
                              fontWeight: 700 
                            }}
                          >
                            {step.time}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white">{step.action}</p>
                        </div>
                        <CheckCircle 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: activeCase.color }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  {/* Impact metric */}
                  <div 
                    className="p-6 rounded-xl border"
                    style={{ 
                      borderColor: `${activeCase.color}30`,
                      backgroundColor: `${activeCase.color}10`
                    }}
                  >
                    <div className="text-center">
                      <div 
                        className="text-4xl mb-2"
                        style={{ 
                          color: activeCase.color,
                          fontWeight: 700 
                        }}
                      >
                        10x
                      </div>
                      <p className="text-sm text-gray-400">plus rapide qu&apos;une configuration classique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

