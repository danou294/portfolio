import type { Metadata } from "next";
import CaseStudyPage from "../../components/CaseStudyPage";

export const metadata: Metadata = {
  title: "StayMakom — Hospitality booking platform",
  description:
    "StayMakom case study: booking platform with payment, automated emails, customer area, back-office, partners and PMS connectivity.",
  openGraph: {
    title: "StayMakom — Hospitality booking platform | Daniel Levy",
    description:
      "Turning a complex service business into a bookable, manageable and multilingual platform.",
    url: "https://www.levy-daniel.fr/projects/staymakom-en",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.levy-daniel.fr/projects/staymakom-en",
  },
};

export default function StayMakomEnPage() {
  return <CaseStudyPage slug="staymakom" lang="en" />;
}
