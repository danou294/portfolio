import type { Metadata } from "next";
import ButterPageClient from "../butter-fr/ButterPageClient";

export const metadata: Metadata = {
  title: "Butter — iOS food app & monetization",
  description:
    "Butter is an iOS restaurant discovery app taken over, shipped and optimized: 14k+ users, 4.9/5 on the App Store and 20% premium conversion.",
  openGraph: {
    title: "Butter — iOS food app & monetization | Daniel Levy",
    description:
      "iOS food discovery app: 14k+ users, 4.9/5 App Store and 20% premium conversion.",
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
