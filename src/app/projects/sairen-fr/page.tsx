import type { Metadata } from "next";
import { CaseStudyJsonLd } from "../../components/CaseStudyJsonLd";
import CaseStudyPage from "../../components/CaseStudyPage";

export const metadata: Metadata = {
  title: "Sairen — Mission SaaS IA générative",
  description:
    "Case study Sairen : produit SaaS IA avec agents, conversations, appels, crédits, facturation, monitoring, contrôle humain et intégrations.",
  openGraph: {
    title: "Sairen — Mission SaaS IA générative | Daniel Levy",
    description:
      "Passage d’une idée d’agent IA à un produit SaaS pilotable, facturable et exploitable en conditions réelles.",
    url: "https://www.levy-daniel.fr/projects/sairen-fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/sairen-fr",
    languages: {
      fr: "https://www.levy-daniel.fr/projects/sairen-fr",
      en: "https://www.levy-daniel.fr/projects/sairen-en",
      "x-default": "https://www.levy-daniel.fr/projects/sairen-fr",
    },
  },
};

export default function SairenFrPage() {
  return (
    <>
      <CaseStudyJsonLd slug="sairen" lang="fr" />
      <CaseStudyPage slug="sairen" lang="fr" />
    </>
  );
}
