import type { Metadata } from "next";
import CaseStudyPage from "../../components/CaseStudyPage";

export const metadata: Metadata = {
  title: "Sairen — Generative AI SaaS mission",
  description:
    "Sairen case study: AI SaaS product with agents, conversations, calls, credits, billing, monitoring, human control and integrations.",
  openGraph: {
    title: "Sairen — Generative AI SaaS mission | Daniel Levy",
    description:
      "Turning an AI agent idea into an operable, billable SaaS product built for real usage.",
    url: "https://www.levy-daniel.fr/projects/sairen-en",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/sairen-en",
  },
};

export default function SairenEnPage() {
  return <CaseStudyPage slug="sairen" lang="en" />;
}
