export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Levy',
    url: 'https://www.levy-daniel.fr',
    jobTitle: 'Développeur freelance web, mobile & IA',
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
    name: 'Daniel Levy — Développeur freelance web, mobile & IA',
    url: 'https://www.levy-daniel.fr',
    description:
      'Portfolio de Daniel Levy, développeur freelance qui construit des SaaS, apps et MVP de l’idée à la production.',
    author: {
      '@type': 'Person',
      name: 'Daniel Levy',
    },
    inLanguage: ['fr', 'en'],
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
    </>
  );
}
