import type { Metadata } from "next";
import ButterPageClient from "../butter-fr/ButterPageClient";

export const metadata: Metadata = {
  title: "Butter — Social Restaurant Guide",
  description:
    "Butter is a Flutter mobile app that curates the best restaurants. 15K+ users, 800+ restaurants, 3 cities. Human curation, modern UI, zero disappointment.",
  openGraph: {
    title: "Butter — Social Restaurant Guide | Daniel Levy",
    description:
      "Flutter mobile app to discover the best restaurants. 15K+ users, 800+ restaurants, 3 cities.",
    url: "https://www.levy-daniel.fr/projects/butter-en",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/butter-en",
  },
};

export default function ButterEnPage() {
  return <ButterPageClient lang="en" />;
}
