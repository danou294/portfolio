"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#1E1B4B] text-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">À propos</h2>
          <p className="mt-4 text-[#E2E8F0] leading-relaxed">
            Développeur Fullstack & Mobile. J&apos;aime concevoir des produits de bout en bout :
            modélisation <strong>NoSQL</strong>, intégration d&apos;API, interfaces modernes, et mise en production
            (Docker, AWS). Objectif : livrer vite, propre, et scalable.
          </p>
          <ul className="mt-6 space-y-2 text-[#E2E8F0]/90">
            <li>• Web : Node.js, React / Next.js (TypeScript)</li>
            <li>• Mobile : Flutter (Dart)</li>
            <li>• Data : Firestore, MongoDB, ETL & automatisations</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-xl border border-[#3730A3] bg-[#312E81]/60 p-6" >
          <h3 className="font-semibold text-white">Ce que je peux apporter</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
            {[ "Architecture & modèles NoSQL", "APIs & intégrations propres", "CI/CD, Docker, déploiements", "UI réactive & performante", ].map((item) => ( <li key={item} className="rounded-lg border border-[#3730A3] bg-[#312E81]/50 px-3 py-2"> {item} </li> ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
  