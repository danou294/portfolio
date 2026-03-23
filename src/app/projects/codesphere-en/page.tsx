import type { Metadata } from "next";
import CodeSpherePageClient from "../codesphere-fr/CodeSpherePageClient";

export const metadata: Metadata = {
  title: "CodeSphere — Next-Gen Web IDE",
  description:
    "CodeSphere is a complete web IDE: code editor, terminal, database and deployment built-in. 5K+ developers, 50K+ deployments, 99.9% uptime.",
  openGraph: {
    title: "CodeSphere — Next-Gen Web IDE | Daniel Levy",
    description:
      "Complete web IDE with editor, terminal and deployment. 5K+ developers, 50K+ deployments.",
    url: "https://www.levy-daniel.fr/projects/codesphere-en",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/codesphere-en",
  },
};

export default function CodeSphereEnPage() {
  return <CodeSpherePageClient lang="en" />;
}
