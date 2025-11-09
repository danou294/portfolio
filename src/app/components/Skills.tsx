"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Database, Code, Server, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const skills = [
  'Node.js',
  'React',
  'Next.js',
  'Flutter',
  'MongoDB',
  'Firestore',
  'Docker',
  'AWS',
  'REST API',
  'TypeScript',
  'Tailwind CSS',
  'CI/CD'
];

const domains = [
  {
    icon: <Database className="w-6 h-6" />,
    titleKey: "skills.sections.architecture.title",
    descriptionKey: "skills.sections.architecture.description",
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <Code className="w-6 h-6" />,
    titleKey: "skills.sections.apis.title",
    descriptionKey: "skills.sections.apis.description",
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: <Server className="w-6 h-6" />,
    titleKey: "skills.sections.devops.title",
    descriptionKey: "skills.sections.devops.description",
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    titleKey: "skills.sections.ui.title",
    descriptionKey: "skills.sections.ui.description",
    color: 'from-cyan-500 to-teal-500'
  }
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-violet-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <Badge 
                className="px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all cursor-pointer shadow-sm"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-16 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {t("skills.expertiseLevel")}
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent font-bold">
              85%
            </span>
          </div>
          <Progress value={85} className="h-3" />
        </motion.div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {domain.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900 dark:text-white mb-2 font-semibold text-lg">
                    {t(domain.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t(domain.descriptionKey)}
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
