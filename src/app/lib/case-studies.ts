export type CaseStudySlug = "staymakom" | "sairen";
export type CaseStudyLanguage = "fr" | "en";

export interface CaseStudy {
  slug: CaseStudySlug;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  gradient: string;
  liveUrl: string;
  cta: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  tags: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
}

const caseStudies: Record<CaseStudyLanguage, Record<CaseStudySlug, CaseStudy>> = {
  fr: {
    staymakom: {
      slug: "staymakom",
      title: "StayMakom",
      eyebrow: "Plateforme de réservation hospitality",
      description:
        "Transformer une activité de service avec beaucoup d’échanges humains en plateforme claire, réservable et pilotable.",
      image: "/images/staymakom.jpeg",
      gradient: "from-sky-500 to-cyan-600",
      liveUrl: "https://www.staymakom.com/",
      cta: "Voir le site",
      stats: [
        { value: "3", label: "langues" },
        { value: "34", label: "actions automatisées" },
        { value: "100+", label: "parcours et pages" },
      ],
      tags: ["Réservation", "Paiement", "PMS", "Back-office", "Multilingue"],
      sections: [
        {
          title: "Le point de départ",
          body:
            "L’offre était riche, mais difficile à rendre lisible et scalable : séjours, expériences, activités, cartes cadeaux, demandes corporate, partenaires hôteliers. Chaque demande pouvait déclencher des échanges manuels, des vérifications de disponibilité, un suivi de paiement, puis une confirmation client.",
        },
        {
          title: "Ce qu’il fallait construire",
          body:
            "L’enjeu n’était pas de faire une simple vitrine. Il fallait créer un vrai système de réservation : site public, parcours de sélection, paiement, emails automatiques, espace client, espace administrateur, accès partenaires et gestion de contenus en plusieurs langues.",
        },
        {
          title: "Mon rôle",
          body:
            "J’ai pris en charge la construction produit de bout en bout : clarification des parcours, architecture, développement, logique de réservation, paiements, sécurité des accès, administration interne et intégrations avec l’écosystème hôtelier, notamment via connectivité PMS.",
        },
        {
          title: "Le résultat",
          body:
            "Avant, l’équipe devait vendre et suivre une grande partie de l’expérience à la main. Après, le client peut découvrir, choisir, réserver et payer en ligne, tandis que l’équipe pilote les demandes, contenus, réservations, clients et partenaires depuis un seul outil.",
        },
      ],
    },
    sairen: {
      slug: "sairen",
      title: "Sairen",
      eyebrow: "Mission SaaS IA générative",
      description:
        "Passer d’une idée d’agent IA à un produit SaaS pilotable : canaux, appels, crédits, billing, monitoring et contrôle humain.",
      image: "/images/sairen-logo.jpeg",
      gradient: "from-emerald-500 to-teal-600",
      liveUrl: "https://sairen.io/",
      cta: "Voir le site",
      stats: [
        { value: "IA", label: "agents multicanaux" },
        { value: "Billing", label: "crédits et suivi conso" },
        { value: "Admin", label: "pilotage opérationnel" },
      ],
      tags: ["IA", "SaaS", "Stripe", "Supabase", "Meta", "Voix"],
      sections: [
        {
          title: "Le point de départ",
          body:
            "Les équipes qui gèrent beaucoup d’échanges clients ou patients perdent vite du temps : appels manqués, messages dispersés, relances oubliées, peu de visibilité sur l’usage et des marges difficiles à suivre.",
        },
        {
          title: "Ce qu’il fallait construire",
          body:
            "Le besoin dépassait largement la démo IA. Il fallait un produit exploitable : agents, conversations, appels, intégrations externes, modes de contrôle humain, crédits, facturation, monitoring, permissions, webhooks et suivi de consommation.",
        },
        {
          title: "Mon rôle",
          body:
            "J’ai travaillé sur la conception produit, l’architecture, le front, le back, les intégrations, les tests et la documentation de plusieurs modules. L’objectif était de rendre l’IA opérable dans un vrai contexte SaaS, pas seulement impressionnante en démo.",
        },
        {
          title: "Le résultat",
          body:
            "Le produit permet de centraliser les échanges, suivre les appels et usages, brancher des canaux externes, contrôler les réponses de l’IA et relier l’expérience à un modèle de crédits et de facturation. Sairen reste une mission client, mais elle montre ma capacité à livrer un produit IA complet et exploitable.",
        },
      ],
    },
  },
  en: {
    staymakom: {
      slug: "staymakom",
      title: "StayMakom",
      eyebrow: "Hospitality booking platform",
      description:
        "Turning a service business with many manual touchpoints into a clear, bookable and manageable platform.",
      image: "/images/staymakom.jpeg",
      gradient: "from-sky-500 to-cyan-600",
      liveUrl: "https://www.staymakom.com/",
      cta: "Visit website",
      stats: [
        { value: "3", label: "languages" },
        { value: "34", label: "automated actions" },
        { value: "100+", label: "flows and pages" },
      ],
      tags: ["Booking", "Payment", "PMS", "Back-office", "Multilingual"],
      sections: [
        {
          title: "Starting point",
          body:
            "The offer was rich, but hard to make clear and scalable: stays, experiences, activities, gift cards, corporate requests and hotel partners. Each request could trigger manual conversations, availability checks, payment follow-up and client confirmation.",
        },
        {
          title: "What had to be built",
          body:
            "This was not just a showcase website. The product needed a real booking system: public site, selection flows, payment, automated emails, customer area, admin area, partner access and multilingual content management.",
        },
        {
          title: "My role",
          body:
            "I handled the product build end to end: user flows, architecture, development, booking logic, payments, access control, internal admin and integrations with the hospitality ecosystem, including PMS connectivity.",
        },
        {
          title: "Outcome",
          body:
            "Before, the team had to sell and track much of the experience manually. After, customers can discover, choose, book and pay online, while the team manages requests, content, bookings, clients and partners from one tool.",
        },
      ],
    },
    sairen: {
      slug: "sairen",
      title: "Sairen",
      eyebrow: "Generative AI SaaS mission",
      description:
        "Turning an AI agent idea into an operable SaaS product: channels, calls, credits, billing, monitoring and human control.",
      image: "/images/sairen-logo.jpeg",
      gradient: "from-emerald-500 to-teal-600",
      liveUrl: "https://sairen.io/",
      cta: "Visit website",
      stats: [
        { value: "AI", label: "multichannel agents" },
        { value: "Billing", label: "credits and usage" },
        { value: "Admin", label: "operations dashboard" },
      ],
      tags: ["AI", "SaaS", "Stripe", "Supabase", "Meta", "Voice"],
      sections: [
        {
          title: "Starting point",
          body:
            "Teams handling a high volume of customer or patient conversations lose time fast: missed calls, scattered messages, forgotten follow-ups, limited visibility on usage and margins that are hard to track.",
        },
        {
          title: "What had to be built",
          body:
            "The need went far beyond an AI demo. The product had to be operable: agents, conversations, calls, external integrations, human-control modes, credits, billing, monitoring, permissions, webhooks and usage tracking.",
        },
        {
          title: "My role",
          body:
            "I worked on product design, architecture, frontend, backend, integrations, tests and documentation across several modules. The goal was to make AI operational in a real SaaS context, not just impressive in a demo.",
        },
        {
          title: "Outcome",
          body:
            "The product centralizes conversations, tracks calls and usage, connects external channels, controls AI responses and links the experience to a credit and billing model. Sairen is a client mission, but it shows my ability to ship a complete and usable AI product.",
        },
      ],
    },
  },
};

export function getCaseStudy(slug: CaseStudySlug, language: CaseStudyLanguage) {
  return caseStudies[language][slug];
}
