"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-secondary/30 text-secondary-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-theme">À propos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            Développeur <span className="text-primary font-semibold">Fullstack & Mobile</span>. 
            J'aime concevoir des produits de bout en bout : modélisation{" "}
            <span className="text-accent font-semibold">NoSQL</span>, intégration d'API, 
            interfaces modernes, et mise en production (Docker, AWS).
          </p>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            <span className="text-primary font-semibold">Objectif</span> : livrer vite, propre, et scalable.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <h3 className="text-primary font-semibold">🌐 Web</h3>
              <p className="text-secondary-foreground">Node.js, React / Next.js (TypeScript)</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-primary font-semibold">📱 Mobile</h3>
              <p className="text-secondary-foreground">Flutter (Dart)</p>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <h3 className="text-primary font-semibold">💾 Data</h3>
              <p className="text-secondary-foreground">Firestore, MongoDB, ETL & automatisations</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.3 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="space-y-6"
        >
          <div className="rounded-2xl border border-theme/50 bg-card/50 backdrop-blur-sm p-8 transition-colors duration-300 hover:bg-card/70">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Ce que je peux apporter</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Architecture & modèles NoSQL",
                "APIs & intégrations propres", 
                "CI/CD, Docker, déploiements",
                "UI réactive & performante"
              ].map((item, index) => (
                <motion.div
                  key={item}
                  className="group relative rounded-xl border border-theme/50 bg-secondary/50 px-4 py-3 text-sm text-secondary-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/70"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-6">
            <h4 className="text-lg font-semibold text-primary mb-3">💡 Approche</h4>
            <p className="text-secondary-foreground text-sm leading-relaxed">
              Je privilégie une approche <span className="text-primary font-semibold">agile</span> et 
              <span className="text-primary font-semibold"> centrée utilisateur</span>, avec un focus sur 
              la performance et la maintenabilité du code.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
  