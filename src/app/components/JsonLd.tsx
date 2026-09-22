export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Levy',
    url: 'https://www.levy-daniel.fr',
    jobTitle: 'Développeur web et mobile freelance',
    sameAs: [
      'https://github.com/danou294',
      'https://www.linkedin.com/in/daniellevy2904/',
    ],
    knowsAbout: [
      'MVP',
      'SaaS',
      'Product engineering',
      'AI integrations',
      'React',
      'Next.js',
      'TypeScript',
      'Swift',
      'Node.js',
      'Firebase',
      'Supabase',
      'Stripe',
      'RevenueCat',
      'Amplitude',
    ],
    email: 'mailto:danielevy29@gmail.com',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daniel Levy — Développeur web et mobile freelance',
    url: 'https://www.levy-daniel.fr',
    description:
      'Portfolio de Daniel Levy, développeur web et mobile freelance qui construit des SaaS, apps et MVP de l’idée à la production.',
    author: {
      '@type': 'Person',
      name: 'Daniel Levy',
    },
    inLanguage: ['fr', 'en'],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Développement web et mobile freelance',
    serviceType: [
      'Développement web',
      'Développement mobile',
      'MVP',
      'SaaS',
      'Intégration IA',
    ],
    provider: {
      '@type': 'Person',
      name: 'Daniel Levy',
      url: 'https://www.levy-daniel.fr',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'France',
      },
      {
        '@type': 'Place',
        name: 'Remote',
      },
    ],
    url: 'https://www.levy-daniel.fr',
    description:
      'Cadrage, architecture, développement et mise en production de produits web et mobile : MVP, SaaS, apps, outils métier et intégrations IA.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: 'https://www.levy-daniel.fr/#contact',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
