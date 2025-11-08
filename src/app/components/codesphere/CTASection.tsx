"use client";

import { motion } from "framer-motion";
import { Sparkles, Github } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#16161C]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#5AB1FF]/20 via-[#7B9FFF]/20 to-[#B77BFF]/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main title */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl text-white leading-tight" style={{ fontWeight: 700 }}>
              CodeSphere,{" "}
              <span style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                l&apos;IDE qu&apos;on ouvre en premier,
              </span>
              <br />
              pas le dernier.
            </h2>
          </div>

          {/* Quote */}
          <div className="relative max-w-3xl mx-auto p-8 rounded-2xl border border-[#5AB1FF]/30 bg-gradient-to-br from-[#5AB1FF]/10 to-[#B77BFF]/10 backdrop-blur-sm">
            <p className="text-xl text-white/90 italic leading-relaxed">
              &quot;Je sais construire des produits SaaS complets, de la conception au déploiement.&quot;
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5AB1FF] to-[#B77BFF]"></div>
              <div className="text-left">
                <div className="text-white">Daniel Levy</div>
                <div className="text-sm text-gray-400">Fullstack Developer & Product Builder</div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://codesphere.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-10 py-6 text-lg inline-flex items-center justify-center rounded-lg font-medium transition-colors text-white"
              style={{
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                boxShadow: '0 0 40px rgba(90, 177, 255, 0.4)'
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Essayer maintenant
            </a>
            <a
              href="https://github.com/danou294/codesphere"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-6 text-lg border-2 border-white/20 bg-transparent hover:bg-white/5 text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              Voir le code
            </a>
          </div>

          {/* Tech stack footer */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 mb-4">Développé avec</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#61DAFB]"></div>
                React
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3178C6]"></div>
                TypeScript
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                Django
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2496ED]"></div>
                Docker
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10A37F]"></div>
                OpenAI API
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

