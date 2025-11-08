"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Terminal, Sparkles, ExternalLink, Github } from "lucide-react";

const features = [
  {
    title: "Éditeur complet et intuitif",
    description: "Monaco Editor avec coloration syntaxique et autocomplétion intelligente."
  },
  {
    title: "Terminal intégré & déploiement Docker",
    description: "Exécute des commandes et déploie en production sans quitter l'IDE."
  },
  {
    title: "Assistance IA avec OpenAI",
    description: "Suggestions contextuelles et aide au code pour accélérer le développement."
  }
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Django", color: "#092E20" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "OpenAI", color: "#10A37F" }
];

export function PortfolioSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0E] via-[#0D0D14] to-[#0A0A0E]">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#5AB1FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#B77BFF]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5AB1FF]/30 bg-[#5AB1FF]/10 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#5AB1FF]" />
              <span className="text-sm text-[#5AB1FF]">Projet Phare</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-white" style={{ fontWeight: 700 }}>
              🚀 CodeSphere —{" "}
              <span style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                L&apos;IDE web nouvelle génération
              </span>
            </h2>
            
            <p className="text-xl text-gray-400">
              Développement fullstack React / Django / Docker / PostgreSQL
            </p>
          </div>
          {/* Main mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#5AB1FF]/20 to-[#B77BFF]/20 rounded-3xl blur-3xl transform translate-y-8"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
              <Image
                src="/images/codesphere.png"
                alt="CodeSphere Interface"
                width={1200}
                height={675}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-1/4 hidden lg:block"
            >
              <div className="w-40 h-28 rounded-lg overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl">
                <div className="p-2 border-b border-white/10 bg-white/5 flex items-center gap-2">
                  <Terminal className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-gray-400">Terminal</span>
                </div>
                <div className="p-2 font-mono text-xs text-green-400">
                  <div>$ npm start</div>
                  <div className="text-gray-500 mt-1">✓ Ready</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 bottom-1/4 hidden lg:block"
            >
              <div className="w-44 h-32 rounded-lg overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl">
                <div className="p-2 border-b border-white/10 bg-white/5 flex items-center gap-2">
                  <Code2 className="w-3 h-3 text-[#5AB1FF]" />
                  <span className="text-xs text-gray-400">IntelliSense</span>
                </div>
                <div className="p-2 font-mono text-xs space-y-1">
                  <div className="text-purple-300">function</div>
                  <div className="text-yellow-300">useState</div>
                  <div className="text-blue-300">useEffect</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <h3 className="text-lg text-white mb-2" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          {/* Tech stack */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">Technologies utilisées</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                  <span className="text-sm text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://codesphere.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-6 inline-flex items-center justify-center rounded-lg font-medium transition-colors text-white"
              style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                boxShadow: '0 0 40px rgba(90, 177, 255, 0.3)'
              }}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Essayer maintenant
            </a>
            <a
              href="https://github.com/danou294/codesphere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-6 border-2 border-white/20 bg-transparent hover:bg-white/5 text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Voir le code
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

