"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0A0A0E]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5AB1FF]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#B77BFF]/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Logo */}
            <div className="inline-flex items-center gap-2">
              <Code className="w-8 h-8 text-[#5AB1FF]" />
              <span className="text-3xl tracking-tight" style={{ 
                background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}>
                CodeSphere
              </span>
            </div>
            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl" style={{ fontWeight: 700, color: '#FFFFFF' }}>
                🚀 CodeSphere —{" "}
                <span style={{
                  background: 'linear-gradient(135deg, #5AB1FF 0%, #B77BFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  L&apos;IDE web nouvelle génération.
                </span>
              </h1>
              <p className="text-xl text-gray-400">
                Un environnement de développement complet, dans ton navigateur.
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {['SaaS', 'IDE', 'React', 'TypeScript'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://codesphere.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden px-8 py-6 inline-flex items-center justify-center rounded-lg font-medium transition-colors text-white"
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
                className="px-8 py-6 border-2 border-white/20 bg-transparent hover:bg-white/5 text-white rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              >
                <Code className="w-5 h-5 mr-2" />
                Voir le code
              </a>
            </div>
            {/* Developer credit */}
            <p className="text-sm text-gray-500">
              Développé par <span className="text-[#5AB1FF]">Daniel Levy</span> — Fullstack Developer.
            </p>
          </motion.div>
          {/* Right: Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Main laptop mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#5AB1FF]/30 to-[#B77BFF]/30 rounded-2xl blur-3xl transform translate-y-8"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                <div className="aspect-video">
                  <Image
                    src="/images/codesphere.png"
                    alt="CodeSphere IDE Interface"
                    width={800}
                    height={450}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
              {/* Floating windows */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 w-48 h-32 rounded-lg overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl"
              >
                <div className="p-3 border-b border-white/10 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-3 font-mono text-xs text-green-400">
                  <div>$ npm run dev</div>
                  <div className="text-gray-500 mt-1">Server running...</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 bottom-1/4 w-56 h-36 rounded-lg overflow-hidden border border-white/10 bg-black/60 backdrop-blur-xl shadow-xl"
              >
                <div className="p-3 border-b border-white/10 bg-white/5 text-xs text-gray-400">
                  App.tsx
                </div>
                <div className="p-3 font-mono text-xs space-y-1">
                  <div><span className="text-purple-400">import</span> <span className="text-blue-300">React</span></div>
                  <div><span className="text-purple-400">function</span> <span className="text-yellow-300">App</span>()</div>
                  <div className="pl-4 text-gray-400">{'<div>Hello</div>'}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

