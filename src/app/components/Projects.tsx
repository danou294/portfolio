"use client";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  color: string;
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simuler un chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects: Project[] = [
    {
      title: "Butter",
      description: "Application mobile pour découvrir et gérer des restaurants.",
      image: "/images/butter.png",
      link: "https://github.com/danou294/butter2",
      tags: ["Flutter", "Firestore (NoSQL)", "Google Places", "Node.js (scripts)"],
      color: "#FF6B35"
    },
    {
      title: "Syg CRM",
      description: "CRM BTP : gestion clients, sites et opérations.",
      image: "/images/syg.webp",
      link: "#",
      tags: ["Next.js", "Node.js", "MongoDB", "Docker", "AWS"],
      color: "#4ECDC4"
    },
  ];

  // Positions fixes pour éviter les erreurs d'hydratation
  const particlePositions = [
    { left: "10%", top: "20%" },
    { left: "30%", top: "40%" },
    { left: "50%", top: "15%" },
    { left: "70%", top: "60%" },
    { left: "90%", top: "30%" },
    { left: "20%", top: "80%" },
    { left: "40%", top: "70%" },
    { left: "60%", top: "85%" },
    { left: "80%", top: "10%" },
    { left: "15%", top: "90%" },
    { left: "35%", top: "25%" },
    { left: "55%", top: "55%" },
    { left: "75%", top: "45%" },
    { left: "95%", top: "75%" },
    { left: "25%", top: "5%" },
    { left: "45%", top: "95%" },
    { left: "65%", top: "35%" },
    { left: "85%", top: "65%" },
    { left: "5%", top: "50%" },
    { left: "25%", top: "75%" },
    { left: "45%", top: "5%" },
    { left: "65%", top: "25%" },
    { left: "85%", top: "55%" },
    { left: "15%", top: "35%" },
    { left: "35%", top: "85%" },
    { left: "55%", top: "15%" }
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.a
        key={project.title}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl bg-[#312E81]/70 border border-[#3730A3] p-6 cursor-pointer relative overflow-hidden h-64 flex flex-col justify-start hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all duration-300"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          delay: index * 0.05, 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }}
      >
        {/* Effet de brillance au survol - SUPPRIMÉ */}
        {/* Bordure colorée animée - SUPPRIMÉE */}

        {/* Contenu de la carte */}
        <div className="relative z-10">
          <motion.div 
            className="w-24 h-24 mx-auto mb-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              width={80}
              height={80}
              className="object-contain w-full h-full" 
            />
          </motion.div>

          <h3 className="text-xl font-semibold text-center text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-[#E2E8F0] text-sm text-center leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="rounded-full bg-[#1E1B4B]/80 border border-[#3730A3] px-3 py-1 text-xs text-[#E2E8F0]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.08 + tagIndex * 0.05, 
                  duration: 0.2 
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="text-center">
            <span 
              className="inline-block border border-[#8B5CF6] text-[#8B5CF6] px-4 py-2 rounded-md transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:scale-105"
            >
              Voir le projet
            </span>
          </div>
        </div>

        {/* Particules flottantes - SUPPRIMÉES */}
      </motion.a>
    );
  };

  return (
    <section id="projects" className="py-20 bg-[#1E1B4B] text-white border-t border-[#3730A3] relative overflow-hidden">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#8B5CF6]/30 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + (i * 0.1),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🚀 Mes Projets
          </motion.h2>
          <motion.p 
            className="text-lg text-[#E2E8F0] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Découvrez mes réalisations en développement web et mobile
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            // Skeleton cards for loading state
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="bg-[#312E81]/70 border border-[#3730A3] p-6 rounded-2xl animate-pulse">
                  <div className="h-4 bg-[#1E1B4B] rounded w-3/4 mb-4"></div>
                  <div className="h-3 bg-[#1E1B4B] rounded w-1/2 mb-4"></div>
                  <div className="h-3 bg-[#1E1B4B] rounded w-2/3 mb-4"></div>
                  <div className="h-3 bg-[#1E1B4B] rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))
          )}
        </div>

        {/* Call-to-action animé */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white font-semibold rounded-lg text-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(245, 101, 101, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
