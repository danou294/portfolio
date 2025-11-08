"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Monaco Editor", color: "#5AB1FF" },
  { name: "Django REST", color: "#092E20" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
  { name: "OpenAI API", color: "#10A37F" },
  { name: "Stripe", color: "#635BFF" }
];

export function TechStackSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0E]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Tech grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-12" style={{ fontWeight: 700 }}>
              Stack{" "}
              <span style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Technique
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                      style={{ 
                        backgroundColor: `${tech.color}20`,
                        boxShadow: `0 0 20px ${tech.color}30`
                      }}
                    >
                      <div 
                        className="w-6 h-6 rounded"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                    </div>
                    <p className="text-sm text-white/80">{tech.name}</p>
                    
                    {/* Glow effect on hover */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}10, transparent 70%)`
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                CodeSphere combine <span className="text-[#61DAFB]">React</span>/<span className="text-[#3178C6]">TypeScript</span> pour l&apos;interface, <span className="text-white">Django REST API</span> pour le backend, <span className="text-[#4169E1]">PostgreSQL</span> pour les données, et <span className="text-[#2496ED]">Docker</span> pour le déploiement.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                L&apos;intégration <span className="text-[#10A37F]">OpenAI</span> ajoute une aide contextuelle pour accélérer le développement.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0E] bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF]"
                  ></div>
                ))}
              </div>
              <span>8+ technologies modernes intégrées</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

