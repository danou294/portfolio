"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
      description: "Application mobile pour découvrir et gérer des restaurants avec géolocalisation et recommandations personnalisées.",
      image: "/images/butter.png",
      link: "https://github.com/danou294/butter2",
      tags: ["Flutter", "Firestore", "Google Places", "Node.js"],
      color: "#FF6B35"
    },
    {
      title: "Syg CRM",
      description: "CRM BTP complet pour la gestion de clients, sites de construction et opérations quotidiennes.",
      image: "/images/syg.png",
      link: "https://github.com/danou294/syg-crm",
      tags: ["Next.js", "Node.js", "MongoDB", "Docker", "AWS"],
      color: "#4ECDC4"
    },
    {
      title: "Portfolio",
      description: "Mon portfolio personnel développé avec Next.js, TypeScript et des animations fluides.",
      image: "/images/portfolio.png",
      link: "https://github.com/danou294/daniel-portfolio",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "#8B5CF6"
    },
  ];

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    return (
      <motion.a
        key={project.title}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-3xl bg-card/40 backdrop-blur-sm border border-theme/30 p-8 cursor-pointer overflow-hidden hover:bg-card/60 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          ease: "easeOut",
        }}
        onHoverStart={() => setHoveredProject(project.title)}
        onHoverEnd={() => setHoveredProject(null)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Gradient overlay au hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Contenu de la carte */}
        <div className="relative z-10 space-y-6">
          <motion.div 
            className="w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300"
          >
            <Image 
              src={project.image} 
              alt={project.title} 
              width={64}
              height={64}
              className="object-contain w-full h-full" 
            />
          </motion.div>

          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-secondary-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary/50 border border-theme/30 text-xs text-secondary-foreground backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1 + tagIndex * 0.05, 
                  duration: 0.3 
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="text-center pt-2">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105">
              Voir le projet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
        </div>
      </motion.a>
    );
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background text-secondary-foreground relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/8 to-primary/8 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-theme">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-secondary-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes réalisations, allant des applications mobiles aux plateformes web complexes.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-card/40 border border-theme/30 p-8 h-80 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        )}

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-2xl text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Discutons de votre projet !</span>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <svg className="ml-3 w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}