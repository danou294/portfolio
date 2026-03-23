export function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Levy',
    url: 'https://www.levy-daniel.fr',
    jobTitle: 'Full Stack Developer',
    sameAs: [
      'https://github.com/danielMusic',
      'https://www.linkedin.com/in/daniel-music-levy/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Flutter',
      'Node.js',
      'Firebase',
      'Tailwind CSS',
    ],
    email: 'mailto:danielevy29@gmail.com',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Daniel Levy — Développeur Full Stack',
    url: 'https://www.levy-daniel.fr',
    description:
      'Portfolio de Daniel Levy, développeur full stack spécialisé React, Next.js et Flutter.',
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
