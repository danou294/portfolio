import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import messages from "../lib/translations/en.json";

export const metadata: Metadata = {
  title: "Daniel Levy — Freelance web and mobile developer",
  description:
    "Freelance web and mobile developer. I build SaaS products, apps and MVPs from idea to production: scoping, architecture, development, tracking, payments and AI.",
  alternates: {
    canonical: "https://www.levy-daniel.fr/en",
    languages: {
      fr: "https://www.levy-daniel.fr",
      en: "https://www.levy-daniel.fr/en",
      "x-default": "https://www.levy-daniel.fr",
    },
  },
  openGraph: {
    title: "Daniel Levy — Freelance web and mobile developer",
    description:
      "I build SaaS products, apps and MVPs from idea to production: scoping, architecture, development, tracking, payments and AI.",
    url: "https://www.levy-daniel.fr/en",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EnglishHome() {
  return (
    <main className="bg-theme transition-colors duration-300">
      <a href="#hero" className="skip-link">Skip to main content</a>
      <Header
        currentLanguage="en"
        labels={{
          about: messages.nav.about,
          skills: messages.nav.skills,
          projects: messages.nav.projects,
          contact: messages.nav.contact,
          contactMe: messages.contact.contactMe,
          downloadCV: messages.nav.downloadCV,
        }}
      />
      <Hero messages={messages} lang="en" />
      <About messages={messages} />
      <Skills messages={messages} />
      <Projects messages={messages} lang="en" />
      <Contact messages={messages} />
      <Footer />
    </main>
  );
}
