import type { Metadata } from "next";
import { CaseStudyJsonLd } from "../../components/CaseStudyJsonLd";
import CaseStudyPage from "../../components/CaseStudyPage";

export const metadata: Metadata = {
  title: "StayMakom — Plateforme de réservation hospitality",
  description:
    "Case study StayMakom : plateforme de réservation avec paiement, emails automatisés, espace client, back-office, partenaires et connectivité PMS.",
  openGraph: {
    title: "StayMakom — Plateforme de réservation hospitality | Daniel Levy",
    description:
      "Transformation d’une activité de service complexe en plateforme réservable, pilotable et multilingue.",
    url: "https://www.levy-daniel.fr/projects/staymakom-fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/staymakom-fr",
    languages: {
      fr: "https://www.levy-daniel.fr/projects/staymakom-fr",
      en: "https://www.levy-daniel.fr/projects/staymakom-en",
      "x-default": "https://www.levy-daniel.fr/projects/staymakom-fr",
    },
  },
};

export default function StayMakomFrPage() {
  return (
    <>
      <CaseStudyJsonLd slug="staymakom" lang="fr" />
      <CaseStudyPage slug="staymakom" lang="fr" />
    </>
  );
}
