import type { Metadata } from "next";
import ButterPageClient from "./ButterPageClient";

export const metadata: Metadata = {
  title: "Butter — Guide Restaurant Social",
  description:
    "Butter est une application mobile Flutter qui centralise les meilleurs restaurants. 15K+ utilisateurs, 800+ restos, 3 villes. Curation humaine, interface moderne, zero deception.",
  openGraph: {
    title: "Butter — Guide Restaurant Social | Daniel Levy",
    description:
      "Application mobile Flutter pour decouvrir les meilleurs restaurants. 15K+ utilisateurs, 800+ restos, 3 villes.",
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
