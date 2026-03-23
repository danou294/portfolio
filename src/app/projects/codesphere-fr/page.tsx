import type { Metadata } from "next";
import CodeSpherePageClient from "./CodeSpherePageClient";

export const metadata: Metadata = {
  title: "CodeSphere — IDE Web Nouvelle Generation",
  description:
    "CodeSphere est un IDE web complet : editeur de code, terminal, base de donnees et deploiement integres. 5K+ developpeurs, 50K+ deployments, 99.9% uptime.",
  openGraph: {
    title: "CodeSphere — IDE Web Nouvelle Generation | Daniel Levy",
    description:
      "IDE web complet avec editeur, terminal et deploiement. 5K+ developpeurs, 50K+ deployments.",
    url: "https://www.levy-daniel.fr/projects/codesphere-fr",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/codesphere-fr",
  },
};

export default function CodeSphereFrPage() {
  return <CodeSpherePageClient lang="fr" />;
}
