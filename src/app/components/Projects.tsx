"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Smartphone, Code } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getArticles } from "../lib/articles-new";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    id: "butter",
    image: "/images/butter.png",
    gradient: "from-amber-400 to-orange-500",
    type: "mobile",
    stats: [
      { valueKey: "15K+", labelKey: "users" },
      { valueKey: "800+", labelKey: "restos" },
      { valueKey: "3", labelKey: "villes" },
    ],
  },
  {
    id: "codesphere",
    image: "/images/codesphere.png",
    gradient: "from-violet-500 to-purple-600",
    type: "web",
    stats: [
      { valueKey: "5K+", labelKey: "devs" },
      { valueKey: "50K+", labelKey: "deploys" },
      { valueKey: "99.9%", labelKey: "uptime" },
    ],
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const hasPlus = target.includes("+");
  const hasPercent = target.includes("%");

  useEffect(() => {
    if (!isInView || isNaN(numericTarget)) return;

    const duration = 1500;
    const steps = 40;
    const increment = numericTarget / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numericTarget]);

  const formatNumber = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
    return n.toString();
  };

  if (isNaN(numericTarget)) {
    return <span ref={ref}>{target}</span>;
  }

  return (
    <span ref={ref}>
      {numericTarget >= 1000 ? formatNumber(count) : count}
      {hasPercent ? "%" : ""}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const articles = getArticles(language);

  return (
    <section id="projects" className="relative py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-body max-w-3xl mx-auto text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Project showcase cards — alternating layout */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const article = articles.find((a) => a.id === project.id);
            if (!article) return null;

            const projectUrl =
              project.id === "butter"
                ? language === "fr" ? "/projects/butter-fr" : "/projects/butter-en"
                : language === "fr" ? "/projects/codesphere-fr" : "/projects/codesphere-en";

            const isReversed = index % 2 === 1;

            return (
              <motion.a
                key={project.id}
                href={projectUrl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="group block"
              >
                <div className={`relative flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} overflow-hidden rounded-3xl bg-card border border-border hover:shadow-xl transition-all`}>
                  {/* Gradient accent + mockup side */}
                  <div className={`relative flex-shrink-0 w-full lg:w-2/5 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center min-h-[240px]`}>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center p-4 shadow-lg">
                      <Image
                        src={project.image}
                        alt={article.title}
                        width={60}
                        height={60}
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-heading">
                          {article.title}
                        </h3>
                        {project.type === "mobile" ? (
                          <Smartphone className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Code className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-body mb-6">{article.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Animated stats */}
                    <div className="flex gap-4 mb-6">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="flex-1 text-center p-3 rounded-xl bg-secondary">
                          <div className="text-xl font-bold text-heading">
                            <AnimatedCounter target={stat.valueKey} />
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{stat.labelKey}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-[#F59E0B] group-hover:gap-3 transition-all">
                      {t("projects.discover")}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
