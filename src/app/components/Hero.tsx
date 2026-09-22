import Image from "next/image";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

type Messages = typeof import("../lib/translations/fr.json");

const projectCards = [
  {
    id: "butter",
    name: "Butter",
    image: "/images/butter.png",
    gradient: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
    href: "butter",
    statKeys: ["users", "premium"],
  },
  {
    id: "staymakom",
    name: "StayMakom",
    image: "/images/staymakom.jpeg",
    gradient: "from-sky-500 to-cyan-600",
    shadow: "shadow-sky-500/20",
    href: "staymakom",
    statKeys: ["languages", "automations"],
  },
];

export default function Hero({ messages, lang }: { messages: Messages; lang: "fr" | "en" }) {
  const getProjectUrl = (id: string) => {
    return `/projects/${id}-${lang}`;
  };

  const renderProjectCard = (project: typeof projectCards[number]) => {
    const projectData = messages.hero.projects[project.id as keyof typeof messages.hero.projects];
    const stats = projectData.stats as Record<string, { value: string; label: string }>;
    const card = (
      <div
        className={`relative h-full overflow-hidden rounded-2xl bg-card border border-border p-6 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${project.shadow}`}
      >
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center p-2.5 shadow-md`}>
            <Image
              src={project.image}
              alt={projectData.title}
              width={28}
              height={28}
              className="h-7 w-7 object-contain rounded-md"
            />
          </div>
          <div>
            <h3 className="font-bold text-heading text-lg">{projectData.title}</h3>
            <p className="text-xs text-muted-foreground">{projectData.tech}</p>
          </div>
        </div>

        <p className="text-sm font-medium text-heading mb-2">{projectData.tagline}</p>
        <p className="text-sm text-body line-clamp-2 mb-4">{projectData.description}</p>

        <div className="flex gap-3">
          {project.statKeys.map((statKey) => (
            <div key={statKey} className="flex-1 bg-secondary rounded-lg px-3 py-2 text-center">
              <div className="text-sm font-bold text-heading">{stats[statKey].value}</div>
              <div className="text-xs text-muted-foreground">{stats[statKey].label}</div>
            </div>
          ))}
        </div>
      </div>
    );

    if (project.href.startsWith("http")) {
      return (
        <a key={project.id} href={project.href} target="_blank" rel="noopener noreferrer">
          {card}
        </a>
      );
    }

    return (
      <Link key={project.id} href={getProjectUrl(project.href)}>
        {card}
      </Link>
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Subtle warm blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#F59E0B]/10 dark:bg-[#F59E0B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-[#EC4899]/10 dark:bg-[#EC4899]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {messages.hero.available}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-heading">{messages.hero.title.split(" ")[0]} </span>
            <span className="gradient-text">{messages.hero.title.split(" ").slice(1).join(" ")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-body max-w-2xl mx-auto mb-10 leading-relaxed">
            {messages.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center mb-8">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#F0EDE8] text-white dark:text-[#111113] font-semibold text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              {messages.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              {messages.contact.contactMe}
            </a>
            <a
              href="/docs/cv-daniel-levy.pdf"
              download
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors"
            >
              <Download className="mr-2 w-5 h-5" />
              {messages.nav.downloadCV}
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-16">
            <a
              href="https://github.com/danou294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniellevy2904/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Floating project cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projectCards.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
