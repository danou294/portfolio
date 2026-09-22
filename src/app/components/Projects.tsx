"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Bot, ExternalLink, Plane, Smartphone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const caseStudies = [
  {
    id: "butter",
    image: "/images/butter.png",
    href: { fr: "/projects/butter-fr", en: "/projects/butter-en" },
    icon: Smartphone,
    gradient: "from-amber-400 to-orange-500",
    tags: ["iOS", "RevenueCat", "Amplitude", "App Store"],
  },
  {
    id: "staymakom",
    image: "/images/staymakom.jpeg",
    href: { fr: "/projects/staymakom-fr", en: "/projects/staymakom-en" },
    icon: Plane,
    gradient: "from-sky-500 to-cyan-600",
    tags: ["Booking", "Revolut", "PMS", "Admin"],
  },
  {
    id: "sairen",
    image: "/images/sairen-logo.jpeg",
    href: { fr: "/projects/sairen-fr", en: "/projects/sairen-en" },
    icon: Bot,
    gradient: "from-emerald-500 to-teal-600",
    tags: ["IA", "Stripe", "Supabase", "Meta"],
  },
];

export default function Projects() {
  const { t, language } = useLanguage();

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const href = typeof study.href === "string" ? study.href : study.href[language];
            const isExternal = href.startsWith("http");

            return (
              <motion.a
                key={study.id}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-xl"
              >
                <div className={`relative flex min-h-44 items-center justify-center bg-gradient-to-br ${study.gradient} p-8`}>
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-white/90 p-4 shadow-lg">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={t(`projects.caseStudies.${study.id}.title`)}
                        width={64}
                        height={64}
                        className="h-16 w-16 object-contain"
                        unoptimized
                      />
                    ) : (
                      <Icon className="h-10 w-10 text-[#111113]" />
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5">
                    <div className="mb-3 flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">
                          {t(`projects.caseStudies.${study.id}.type`)}
                        </p>
                        <h3 className="text-2xl font-bold text-heading">
                          {t(`projects.caseStudies.${study.id}.title`)}
                        </h3>
                      </div>
                      <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-body">
                      {t(`projects.caseStudies.${study.id}.description`)}
                    </p>

                    <p className="rounded-lg bg-secondary px-4 py-3 text-sm font-medium leading-relaxed text-heading">
                      {t(`projects.caseStudies.${study.id}.result`)}
                    </p>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-5 mt-auto grid grid-cols-1 gap-2">
                    {["users", "premium", "rating", "languages", "automations", "pages", "channels", "billing", "ai"].map((statKey) => {
                      const value = t(`projects.caseStudies.${study.id}.stats.${statKey}`);
                      if (value === `projects.caseStudies.${study.id}.stats.${statKey}`) return null;

                      return (
                        <div
                          key={statKey}
                          className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-semibold text-heading"
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>

                  <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                    {t(`projects.caseStudies.${study.id}.role`)}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#B45309] transition-all group-hover:gap-3 dark:text-[#FCD34D]">
                    {isExternal ? t("projects.visit") : t("projects.discover")}
                    {isExternal ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
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
