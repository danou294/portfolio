"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";
import { CaseStudyLanguage, CaseStudySlug, getCaseStudy } from "../lib/case-studies";

export default function CaseStudyPage({
  slug,
  lang,
}: {
  slug: CaseStudySlug;
  lang: CaseStudyLanguage;
}) {
  const { setLanguage, t } = useLanguage();
  const caseStudy = getCaseStudy(slug, lang);

  useEffect(() => {
    setLanguage(lang);
  }, [setLanguage, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-medium text-foreground transition-colors hover:text-[#F59E0B]"
          >
            <ChevronLeft className="h-4 w-4" />
            {t("article.backToProjects")}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br ${caseStudy.gradient} opacity-15 blur-3xl`} />
          </div>

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
                  {caseStudy.eyebrow}
                </div>

                <div className="space-y-5">
                  <h1 className="text-5xl font-extrabold text-heading lg:text-7xl">
                    {caseStudy.title}
                  </h1>
                  <p className="max-w-2xl text-xl leading-relaxed text-body">
                    {caseStudy.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {caseStudy.stats.map((stat) => (
                    <div key={`${stat.value}-${stat.label}`} className="rounded-lg border border-border bg-card p-4">
                      <div className="text-2xl font-bold text-heading">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
                >
                  {caseStudy.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className={`flex min-h-[340px] items-center justify-center rounded-lg bg-gradient-to-br ${caseStudy.gradient} p-10`}
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-lg bg-white/95 p-6 shadow-2xl">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={104}
                    height={104}
                    className="h-24 w-24 object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="space-y-6">
            {caseStudy.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-border bg-card p-7"
              >
                <h2 className="mb-3 text-2xl font-bold text-heading">{section.title}</h2>
                <p className="text-base leading-relaxed text-body">{section.body}</p>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              {caseStudy.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
