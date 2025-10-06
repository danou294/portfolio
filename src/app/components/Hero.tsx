"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#0F0F23] via-[#1E1B4B] to-[#312E81] text-[#E2E8F0] min-h-screen flex items-center"
      id="home"
    >
      {/* Particules animées en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particules supprimées pour éviter les conflits */}
      </div>

      {/* Arrière-plan subtil inspiré de l'image */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#8B5CF6] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#0EA5E9] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F97316] rounded-full blur-2xl"></div>
      </div>

      {/* Grille de points animée */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.10) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <motion.div 
        className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        style={{ y, opacity }}
      >
        {/* Colonne gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm uppercase tracking-widest text-[#8B5CF6]/90 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Daniel Levy — Full-Stack & Mobile Engineer
          </motion.p>

          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Conception,{" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9]"
            >
              développement,
            </motion.span>{" "}
            Déploiement
          </motion.h1>

          <motion.p 
            className="mt-5 text-lg text-zinc-300 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Fullstack & Mobile — Node.js, React&nbsp;(Next.js), Flutter, modèles
            <span className="whitespace-nowrap"> NoSQL</span> et automatisation de données.
          </motion.p>

          <motion.div 
            className="mt-6 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {["Node.js", "React / Next.js", "Flutter", "MongoDB", "Firestore", "Docker", "AWS"].map(
              (tag, index) => (
                <motion.span 
                  key={tag} 
                  className="rounded-full bg-[#1E1B4B]/60 border border-[#3730A3] px-3 py-1 text-sm text-[#E2E8F0]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                >
                  {tag}
                </motion.span>
              )
            )}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="inline-flex items-center rounded-lg bg-[#8B5CF6] px-5 py-3 font-medium hover:bg-[#7C3AED] transition-colors"
            >
              Voir mes projets
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center border border-[#8B5CF6] px-5 py-3 font-medium text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-colors"
            >
              Me contacter
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-6 flex items-center gap-4 text-sm text-zinc-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/daniellevy2904/" 
              className="underline underline-offset-4" 
              target="_blank" 
              rel="noreferrer"
            >
              🔗 LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/danou294" 
              className="underline underline-offset-4" 
              target="_blank" 
              rel="noreferrer"
            >
              💻 GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Colonne droite (cartes projets) */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl"
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-orange-400/10 blur-3xl"
          />

          <div className="relative grid grid-cols-2 gap-6 items-start">
            <motion.div 
              className="rounded-2xl bg-[#1E1B4B]/70 border border-[#3730A3] p-5 shadow-xl backdrop-blur h-48 flex flex-col justify-start hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/syg.webp" 
                  alt="Syg CRM" 
                  width={80}
                  height={80}
                  className="object-contain w-full h-full" 
                  priority 
                />
              </div>
              <h3 className="text-base font-semibold text-white text-center mb-2">Syg CRM</h3>
              <p className="text-center text-xs text-zinc-400">Next.js • Node.js • MongoDB</p>
            </motion.div>

                         <motion.div 
               className="rounded-2xl bg-[#1E1B4B]/70 border border-[#3730A3] p-5 shadow-xl backdrop-blur h-48 flex flex-col justify-start hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all duration-300"
             >
              <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/images/butter.png" 
                  alt="Butter" 
                  width={80}
                  height={80}
                  className="object-contain w-full h-full" 
                />
              </div>
              <h3 className="text-base font-semibold text-white text-center mb-2">Butter</h3>
              <p className="text-center text-xs text-zinc-400">Flutter • Firestore • Google&nbsp;Places</p>
            </motion.div>

            <motion.div 
              className="col-span-2 rounded-xl border border-[#3730A3] bg-[#1E1B4B]/70 px-4 py-3 text-center text-sm text-[#E2E8F0]"
            >
              + Automatisation data (scripts Node.js) &amp; modèles NoSQL optimisés
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
