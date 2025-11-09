"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Code, Smartphone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { getArticles } from "../lib/articles-new";

const projects = [
  {
    id: 'codesphere',
    image: '/images/codesphere.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
    color: 'from-blue-500 to-cyan-500',
    type: 'web'
  },
  {
    id: 'butter',
    image: '/images/butter.png',
    tags: ['Flutter', 'Firebase', 'Firestore', 'Node.js'],
    color: 'from-violet-500 to-purple-500',
    type: 'mobile'
  }
];

export default function Projects() {
  const { t, language } = useLanguage();
  const articles = getArticles(language);

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      {/* Diagonal Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-violet-500/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const article = articles.find(a => a.id === project.id);
            if (!article) return null;

            const projectUrl = project.id === 'butter' 
              ? (language === 'fr' ? '/projects/butter-fr' : '/projects/butter-en')
              : project.id === 'codesphere'
              ? (language === 'fr' ? '/projects/codesphere-fr' : '/projects/codesphere-en')
              : `/projects/${project.id}`;

    return (
      <motion.a
                key={project.id}
                href={projectUrl}
        initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group block"
              >
                <div className="h-full p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform p-3`}>
            <Image 
              src={project.image} 
                        alt={article.title} 
                        width={40} 
                        height={40} 
                        className="object-contain"
                        unoptimized
            />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-xl font-bold">
                        {article.title}
                        {project.type === 'mobile' ? (
                          <Smartphone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <Code className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        )}
            </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {article.description}
            </p>
          </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map(tag => (
                      <Badge
                key={tag}
                        variant="secondary"
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tag}
                      </Badge>
            ))}
          </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 group-hover:translate-x-1 transition-all"
                  >
                    {t("projects.discover")}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
        </div>
      </motion.a>
    );
          })}
        </div>

        {/* Butter App Showcase - iPhone Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="p-12 rounded-3xl bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-blue-500/10 dark:from-violet-500/20 dark:via-purple-500/20 dark:to-blue-500/20 border border-violet-500/20 dark:border-violet-500/30 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/30 rounded-full blur-3xl" />
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl" />
            </div>
            <div className="relative text-center mb-8">
              <Badge className="mb-4 bg-violet-500/20 dark:bg-violet-500/30 text-violet-700 dark:text-violet-300 border-violet-500/30 dark:border-violet-500/40">
                {t("projects.butterShowcase.badge")}
              </Badge>
              <h3 className="text-gray-900 dark:text-white mb-3 text-2xl font-bold">
                {t("projects.butterShowcase.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t("projects.butterShowcase.description")}
              </p>
            </div>
            {/* iPhone Mockups Pyramid */}
            <div className="relative flex items-end justify-center gap-4 h-96">
              {[
                { mockup: "6.png", height: "h-80", zIndex: 2 },
                { mockup: "5.png", height: "h-96", zIndex: 3 },
                { mockup: "3.png", height: "h-80", zIndex: 2 }
              ].map((item, index) => (
                <motion.div
                  key={item.mockup}
                  initial={{ opacity: 0, y: 50, rotateY: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
          transition={{
                    duration: 0.8, 
                    delay: 0.6 + index * 0.15,
                    type: "spring"
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative"
                  style={{
                    zIndex: item.zIndex
                  }}
                >
                  <div className={`w-48 ${item.height} relative`}>
                    <Image
                      src={`/Assets/Mockups/${item.mockup}`}
                      alt={`Butter App Mockup ${index + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
        />
      </div>
        </motion.div>
            ))}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
