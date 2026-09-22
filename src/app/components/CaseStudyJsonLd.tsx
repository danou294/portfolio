import { CaseStudyLanguage, CaseStudySlug, getCaseStudy } from "../lib/case-studies";

const siteUrl = "https://www.levy-daniel.fr";

export function CaseStudyJsonLd({
  slug,
  lang,
}: {
  slug: CaseStudySlug;
  lang: CaseStudyLanguage;
}) {
  const caseStudy = getCaseStudy(slug, lang);
  const pageUrl = `${siteUrl}/projects/${slug}-${lang}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Réalisations",
          item: `${siteUrl}/#projects`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: caseStudy.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: caseStudy.title,
      headline: caseStudy.eyebrow,
      description: caseStudy.description,
      image: `${siteUrl}${caseStudy.image}`,
      url: pageUrl,
      inLanguage: lang,
      creator: {
        "@type": "Person",
        name: "Daniel Levy",
        url: siteUrl,
      },
      about: caseStudy.tags,
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${slug}-${lang}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
