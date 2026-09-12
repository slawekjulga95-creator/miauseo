import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/blog/posts";
import { terms } from "@/app/slownik/terms";
import fs from "fs";
import path from "path";

const BASE_URL = "https://miauseo.pl";

/**
 * Sitemap: jeden plik obejmujacy wszystkie klastry.
 *
 * Podzial przez generateSitemaps() zostal sprawdzony i odrzucony — w Next 16.2.6
 * pliki /sitemap/<id>.xml powstaja w buildzie, ale runtime zwraca na nie 404
 * (sprawdzone na next start). Wracamy do jednego pliku do czasu wyjasnienia.
 *
 * Zasada: zero URL-i przekierowanych, zero noindex, zero 404.
 * /polityka-prywatnosci jest noindex, wiec nie wystepuje tutaj wcale.
 */
type Wpis = { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const USLUGI: Wpis[] = [
  { url: "/",                            priority: 1.0, changeFrequency: "weekly" },
  { url: "/uslugi",                      priority: 0.9, changeFrequency: "monthly" },
  { url: "/pozycjonowanie-wizytowki-google",     priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/pozycjonowanie-strony",priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/google-ads",           priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/meta-ads",             priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/tiktok-ads",           priority: 0.9, changeFrequency: "monthly" },
  { url: "/strony-internetowe",          priority: 0.8, changeFrequency: "monthly" },
  { url: "/referencje",                  priority: 0.7, changeFrequency: "monthly" },
  { url: "/opinie",                      priority: 0.7, changeFrequency: "monthly" },
  { url: "/o-nas",                       priority: 0.7, changeFrequency: "monthly" },
  { url: "/kontakt",                     priority: 0.7, changeFrequency: "monthly" },
  { url: "/checklista-wizytowki-google", priority: 0.6, changeFrequency: "monthly" },
  { url: "/gbp-score",                   priority: 0.6, changeFrequency: "monthly" },
];

const PORADNIKI: Wpis[] = [
  { url: "/profil-firmy-w-google", priority: 0.9, changeFrequency: "monthly" },
  { url: "/blog",                  priority: 0.8, changeFrequency: "weekly" },
  { url: "/pytania",               priority: 0.8, changeFrequency: "weekly" },
  { url: "/slownik",               priority: 0.7, changeFrequency: "monthly" },
];

const jestMiastem = (slug: string) => /^pozycjonowanie-wizytowki-google-[a-z-]+$/.test(slug);

function slugiPytan(): string[] {
  const dir = path.join(process.cwd(), "app/pytania/content");
  return fs.readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => f.replace(".tsx", ""));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const stat = (lista: Wpis[]) =>
    lista.map(({ url, priority, changeFrequency }) => ({
      url: `${BASE_URL}${url}`,
      lastModified: now,
      changeFrequency,
      priority,
    }));

  const posts = getPublishedPosts();

  return [
    ...stat(USLUGI),
    ...stat(PORADNIKI),
    // poradniki i wpisy rdzeniowe
    ...posts.filter((p) => !jestMiastem(p.slug)).map((p) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // seria miast
    ...posts.filter((p) => jestMiastem(p.slug)).map((p) => ({
      url: `${BASE_URL}/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // slownik — 131 hasel, wczesniej w ogole nieobecnych w sitemapie
    ...terms.map((t) => ({
      url: `${BASE_URL}/${t.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
    // pytania
    ...slugiPytan().map((slug) => ({
      url: `${BASE_URL}/pytania/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
