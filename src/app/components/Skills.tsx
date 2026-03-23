"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Flutter", color: "#02569B" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "REST API", color: "#F59E0B" },
  { name: "CI/CD", color: "#EC4899" },
];

const services = [
  {
    titleKey: "skills.sections.architecture.title",
    descriptionKey: "skills.sections.architecture.description",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    titleKey: "skills.sections.apis.title",
    descriptionKey: "skills.sections.apis.description",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    titleKey: "skills.sections.devops.title",
    descriptionKey: "skills.sections.devops.description",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    titleKey: "skills.sections.ui.title",
    descriptionKey: "skills.sections.ui.description",
    gradient: "from-cyan-400 to-teal-500",
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-body max-w-2xl mx-auto text-lg">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Skills pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background border border-border text-sm font-medium text-heading cursor-default hover:border-[#F59E0B]/50 hover:shadow-sm transition-all"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: skill.color }}
              />
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Services grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-background border border-border hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                  <ServiceIcon index={index} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-heading text-lg mb-2">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-body text-sm">
                    {t(service.descriptionKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const icons = [
    // Database
    <svg key="db" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>,
    // Code
    <svg key="code" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>,
    // Cloud
    <svg key="cloud" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>,
    // Smartphone
    <svg key="phone" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>,
  ];
  return icons[index] || null;
}
