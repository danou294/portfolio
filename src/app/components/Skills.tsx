"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    "Node.js", "TypeScript", "React / Next.js", "Flutter", "MongoDB",
    "Firestore", "Docker", "AWS", "REST API", "Automatisation data"
  ];

  // Positions fixes pour éviter les erreurs d'hydratation
  const particlePositions = [
    { left: "5%", top: "20%" },
    { left: "25%", top: "40%" },
    { left: "45%", top: "15%" },
    { left: "65%", top: "60%" },
    { left: "85%", top: "30%" },
    { left: "15%", top: "80%" },
    { left: "35%", top: "70%" },
    { left: "55%", top: "85%" },
    { left: "75%", top: "10%" },
    { left: "95%", top: "50%" },
    { left: "10%", top: "90%" },
    { left: "30%", top: "25%" },
    { left: "50%", top: "55%" },
    { left: "70%", top: "45%" },
    { left: "90%", top: "75%" }
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    hover: { 
      scale: 1.15, 
      y: -5, 
      rotateZ: 2
    }
  };

  return (
    <section id="skills" className="bg-theme text-theme border-t border-theme relative overflow-hidden transition-colors duration-300">
      {/* Particules de fond animées */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-theme text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          🚀 Compétences
        </motion.h2>
        
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={skillVariants}
              transition={{ 
                delay: i * 0.08, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.span
                className="inline-block rounded-full bg-secondary border border-theme px-4 py-2 text-sm cursor-pointer relative overflow-hidden transition-colors duration-300"
              >
                <span className="relative z-10 text-secondary-foreground">
                  {skill}
                </span>
                
                {/* Effet de brillance au survol - UNIQUEMENT sur le tag ovale */}
                {hoveredSkill === skill && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.span>
              
              {/* Particules qui apparaissent au survol */}
              {hoveredSkill === skill && (
                <>
                  {[...Array(6)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      initial={{ 
                        x: 0, 
                        y: 0, 
                        opacity: 1, 
                        scale: 0 
                      }}
                      animate={{ 
                        x: (j - 2.5) * 20, 
                        y: (j - 2.5) * 20, 
                        opacity: 0, 
                        scale: 1 
                      }}
                      transition={{ 
                        duration: 1, 
                        delay: j * 0.1 
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Barre de progression animée */}
        <motion.div 
          className="mt-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="text-center mb-4">
            <span className="text-sm text-muted-foreground">Niveau d&apos;expertise global</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  