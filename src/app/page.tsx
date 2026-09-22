import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import messages from "./lib/translations/fr.json";

export default function Home() {
  return (
    <main className="bg-theme transition-colors duration-300">
      <a href="#hero" className="skip-link">Aller au contenu principal</a>
      <Header
        currentLanguage="fr"
        labels={{
          about: messages.nav.about,
          skills: messages.nav.skills,
          projects: messages.nav.projects,
          contact: messages.nav.contact,
          contactMe: messages.contact.contactMe,
          downloadCV: messages.nav.downloadCV,
        }}
      />
      <Hero messages={messages} lang="fr" />
      <About messages={messages} />
      <Skills messages={messages} />
      <Projects messages={messages} lang="fr" />
      <Contact messages={messages} />
      <Footer />
    </main>
  );
}
