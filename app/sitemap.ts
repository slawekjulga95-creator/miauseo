import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/blog/posts";
import fs from "fs";
import path from "path";

const BASE_URL = "https://miauseo.pl";

const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",                              priority: 1.0, changeFrequency: "weekly" },
  { url: "/uslugi",                        priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/wizytowka-google",       priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/pozycjonowanie-strony",  priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/google-ads",             priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/meta-ads",               priority: 0.9, changeFrequency: "monthly" },
  { url: "/uslugi/tiktok-ads",             priority: 0.9, changeFrequency: "monthly" },
  { url: "/blog",                          priority: 0.8, changeFrequency: "weekly" },
  { url: "/pytania",                       priority: 0.8, changeFrequency: "weekly" },
  { url: "/referencje",                    priority: 0.7, changeFrequency: "monthly" },
  { url: "/opinie",                        priority: 0.7, changeFrequency: "monthly" },
  { url: "/o-nas",                         priority: 0.7, changeFrequency: "monthly" },
  { url: "/kontakt",                       priority: 0.7, changeFrequency: "monthly" },
  { url: "/checklista-wizytowki-google",   priority: 0.6, changeFrequency: "monthly" },
  { url: "/gbp-score",                     priority: 0.6, changeFrequency: "monthly" },
  { url: "/polityka-prywatnosci",          priority: 0.3, changeFrequency: "yearly" },
];

function getPytaniaSlugs(): string[] {
  const contentDir = path.join(process.cwd(), "app/pytania/content");
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => f.replace(".tsx", ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics = staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPosts = getPublishedPosts().map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pytania = getPytaniaSlugs().map((slug) => ({
    url: `${BASE_URL}/pytania/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...statics, ...blogPosts, ...pytania];
}
