/**
 * Jedno źródło prawdy dla danych strukturalnych miauseo.pl.
 *
 * Świadome pominięcia (decyzja właściciela, nie przeoczenie):
 *  - brak `sameAs` — dopóki nie ma zweryfikowanych URL-i, pole nie istnieje;
 *    pusta tablica byłaby gorsza niż jej brak,
 *  - brak telefonu, e-maila i NIP-u w `Organization` — do schematu trafiają
 *    wyłącznie nazwa, adres strony i logo,
 *  - brak `sameAs` przy encji GBP w polu `about` — QID w Wikidanych nie został
 *    zweryfikowany, więc zgodnie z zasadą „nie zgaduj" pole zostaje pominięte.
 */
const SITE = "https://miauseo.pl";

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "MiauSEO",
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/logo.png`,
    width: 224,
    height: 64,
  },
} as const;

export const AUTHOR = {
  "@type": "Person",
  "@id": `${SITE}/#slawomir-julga`,
  name: "Sławomir Jułga",
  jobTitle: "Specjalista local SEO",
  worksFor: { "@id": `${SITE}/#organization` },
} as const;

/** Encja centralna serwisu — spina wszystkie warianty nazwy w jeden byt. */
export const ENCJA_GBP = {
  "@type": "Thing",
  name: "Profil Firmy w Google",
  alternateName: [
    "wizytówka Google",
    "Google Business Profile",
    "GBP",
    "Google Moja Firma",
  ],
  url: `${SITE}/profil-firmy-w-google`,
} as const;

export function articleSchema(o: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${o.url}#article`,
    mainEntityOfPage: o.url,
    url: o.url,
    headline: o.headline.slice(0, 110), // limit Google dla headline
    description: o.description,
    inLanguage: "pl-PL",
    datePublished: o.datePublished,
    dateModified: o.dateModified ?? o.datePublished,
    author: AUTHOR,
    publisher: ORGANIZATION,
    ...(o.image ? { image: o.image } : {}),
    about: ENCJA_GBP,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(qa: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function serviceSchema(o: {
  url: string;
  name: string;
  description: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${o.url}#service`,
    name: o.name,
    description: o.description,
    provider: ORGANIZATION,
    serviceType: "Pozycjonowanie wizytówki Google",
    ...(o.areaServed ? { areaServed: { "@type": "City", name: o.areaServed } } : {}),
  };
}
