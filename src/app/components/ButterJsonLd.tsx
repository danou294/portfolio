const siteUrl = "https://www.levy-daniel.fr";
const appStoreUrl = "https://apps.apple.com/fr/app/butter-guide-de-restaurants/id6749227938";

export function ButterJsonLd({ lang }: { lang: "fr" | "en" }) {
  const pageUrl = `${siteUrl}/projects/butter-${lang}`;
  const description =
    lang === "fr"
      ? "App iOS de découverte de restaurants à Paris, reprise, publiée et optimisée autour de la conversion premium."
      : "iOS restaurant discovery app in Paris, taken over, shipped and optimized around premium conversion.";
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
          name: "Butter",
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Butter",
      headline: lang === "fr" ? "App iOS food & monétisation" : "iOS food app & monetization",
      description,
      image: `${siteUrl}/images/butter.png`,
      url: pageUrl,
      inLanguage: lang,
      creator: {
        "@type": "Person",
        name: "Daniel Levy",
        url: siteUrl,
      },
      about: ["iOS", "Swift", "Firebase", "RevenueCat", "Amplitude", "App Store"],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Butter",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description,
      url: pageUrl,
      installUrl: appStoreUrl,
      image: `${siteUrl}/images/butter.png`,
      author: {
        "@type": "Person",
        name: "Daniel Levy",
        url: siteUrl,
      },
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`butter-${lang}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
