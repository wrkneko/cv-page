import { profile, stack } from "@/content/cv";

/**
 * Schema.org для поисковиков. Раньше этот JSON лежал в HTML отдельным блоком
 * и обновлялся вручную; теперь он собран из `content/cv.ts` — телефон и место
 * работы в разметке не могут разойтись с тем, что видит человек.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phoneHref,
  image: profile.photo,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.city,
    addressCountry: profile.countryCode,
  },
  worksFor: { "@type": "Organization", name: profile.employer.name },
  sameAs: [profile.linkedin.url],
  knowsAbout: stack.flatMap((area) => area.tools),
};
