import type { Metadata } from "next";
import ButterPageClient from "./ButterPageClient";

export const metadata: Metadata = {
  title: "Butter — App iOS food & monétisation",
  description:
    "Butter est une app iOS de découverte de restaurants reprise, publiée et optimisée : 14k+ utilisateurs, 4,9/5 sur l'App Store et 20% de conversion premium.",
  openGraph: {
    title: "Butter — App iOS food & monétisation | Daniel Levy",
    description:
      "App iOS de découverte food : 14k+ utilisateurs, 4,9/5 App Store et 20% de conversion premium.",
    url: "https://www.levy-daniel.fr/projects/butter-fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/butter-fr",
  },
};

export default function ButterFrPage() {
  return <ButterPageClient lang="fr" />;
}
