"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const techStack = [
  { name: "Flutter", icon: "📱", color: "from-cyan-400 to-blue-500" },
  { name: "Firebase", icon: "🔥", color: "from-amber-400 to-orange-500" },
  { name: "Google Maps", icon: "🗺️", color: "from-green-400 to-emerald-500" },
  { name: "Firestore", icon: "💾", color: "from-yellow-400 to-amber-500" },
  { name: "Apple Dev", icon: "🍎", color: "from-gray-600 to-gray-800" },
  { name: "GitHub", icon: "🐙", color: "from-violet-400 to-purple-500" },
];

export function TechStackSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-sm font-medium text-[#B45309] dark:text-[#FCD34D] mb-4">
            {t("butter.techStack.badge")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-heading">
            {t("butter.techStack.title")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex flex-col items-center p-5 rounded-2xl bg-background border border-border hover:shadow-md transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl mb-3 shadow-md`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-heading">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-background border border-border"
          >
            <p className="text-body leading-relaxed">
              {t("butter.techStack.description1")} <span className="font-semibold text-heading">Flutter</span>, {t("butter.techStack.description2")} <span className="font-semibold text-heading">Firebase</span> {t("butter.techStack.description3")} <span className="font-semibold text-heading">Google Maps</span> {t("butter.techStack.description4")}
            </p>
            <p className="text-body leading-relaxed mt-4">
              {t("butter.techStack.description5")} <span className="font-semibold text-heading">Apple</span>, {t("butter.techStack.description6")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
