/**
 * Wykrywanie kanibalizacji (Etap 3).
 * TF-IDF + podobieństwo kosinusowe na tytule i pierwszych 500 słowach.
 * Strony z listy nietykalnej są wykluczone z analizy.
 *
 * Wyjście: docs/seo/cannibalization.csv (url_a, url_b, podobienstwo, rekomendacja)
 */
import fs from "node:fs";
import path from "node:path";
import { SLUGS as PROTECTED_SLUGS } from "./protected-hash.mjs";

const ROOT = process.cwd();
const PROG = 0.75;

const norm = (s) =>
  s.toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l")
    .replace(/ń/g, "n").replace(/ó/g, "o").replace(/ś/g, "s").replace(/[żź]/g, "z");

const STOP = new Set(("i oraz a w we z ze na do od po za o u to nie tak jest sa byc ma masz mozna " +
  "ktore ktory ktora ze bo bez dla przez przy pod nad ale lub czy jak co gdy juz tylko tez " +
  "sie sobie swoje twoja twoj twoje jego ich nam ci go mu tym ten ta te tego tej tych " +
  "google profil firmy wizytowka wizytowki").split(" "));

function tokens(text) {
  return norm(text)
    .match(/[a-z0-9][a-z0-9-]{2,}/g)
    ?.filter((w) => !STOP.has(w))
    .map((w) => w.slice(0, 8)) ?? []; // prymitywny stemming: obcięcie końcówek fleksyjnych
}

const stripPre = (s) => s.replace(/<pre[\s\S]*?<\/pre>/g, " ");
const toText = (jsx) =>
  stripPre(jsx).replace(/<[^>]+>/g, " ").replace(/[{}]/g, " ").replace(/\s+/g, " ").trim();

/* ── wczytanie dokumentów ── */
function parsePosts() {
  const src = fs.readFileSync(path.join(ROOT, "app/blog/posts.ts"), "utf8");
  const out = [];
  for (const chunk of src.slice(src.indexOf("export const posts")).split(/\n  \{\n/).slice(1)) {
    const slug = chunk.match(/slug: "([^"]+)"/)?.[1];
    if (!slug) continue;
    out.push({ slug, title: chunk.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? "" });
  }
  return out;
}

function contentBlocks() {
  const lines = fs.readFileSync(path.join(ROOT, "app/blog/content.tsx"), "utf8").split("\n");
  const st = [];
  lines.forEach((l, i) => {
    const m = l.match(/^ {2}"([a-z0-9-]+)": \(/);
    if (m) st.push({ slug: m[1], i });
  });
  const map = new Map();
  st.forEach((s, k) => {
    const end = k + 1 < st.length ? st[k + 1].i : lines.length;
    map.set(s.slug, lines.slice(s.i, end).join("\n"));
  });
  return map;
}

const posts = parsePosts();
const blocks = contentBlocks();

const docs = posts
  .filter((p) => !PROTECTED_SLUGS.includes(p.slug))
  .map((p) => {
    const tekst = toText(blocks.get(p.slug) ?? "").split(" ").slice(0, 500).join(" ");
    return { slug: p.slug, title: p.title, tokens: tokens(`${p.title} ${p.title} ${tekst}`) };
  });

/* ── TF-IDF ── */
const df = new Map();
for (const d of docs) for (const t of new Set(d.tokens)) df.set(t, (df.get(t) ?? 0) + 1);
const N = docs.length;

for (const d of docs) {
  const tf = new Map();
  for (const t of d.tokens) tf.set(t, (tf.get(t) ?? 0) + 1);
  const vec = new Map();
  let norma = 0;
  for (const [t, n] of tf) {
    const w = (1 + Math.log(n)) * Math.log(N / (df.get(t) ?? 1));
    if (w <= 0) continue;
    vec.set(t, w);
    norma += w * w;
  }
  d.vec = vec;
  d.norma = Math.sqrt(norma) || 1;
}

function cos(a, b) {
  const [maly, duzy] = a.vec.size < b.vec.size ? [a, b] : [b, a];
  let dot = 0;
  for (const [t, w] of maly.vec) {
    const w2 = duzy.vec.get(t);
    if (w2) dot += w * w2;
  }
  return dot / (a.norma * b.norma);
}

/* ── pary ── */
const pary = [];
for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const s = cos(docs[i], docs[j]);
    if (s >= 0.15) pary.push({ a: docs[i], b: docs[j], s });
  }
}
pary.sort((x, y) => y.s - x.s);

const rekomendacja = (p) => {
  const miasta = ["pozycjonowanie-wizytowki-google-"];
  const aMiasto = miasta.some((m) => p.a.slug.startsWith(m));
  const bMiasto = miasta.some((m) => p.b.slug.startsWith(m));
  if (aMiasto && bMiasto) return "seria miast — rozdzielic tematy (Etap 5), nie konsolidowac";
  if (p.s >= PROG) return "konsolidacja: wchlonac slabsza w mocniejsza + 301";
  return "do przegladu redakcyjnego — rozdzielic intencje";
};

const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = [
  "url_a,url_b,podobienstwo,rekomendacja",
  ...pary.map((p) =>
    [`/${p.a.slug}`, `/${p.b.slug}`, p.s.toFixed(3), rekomendacja(p)].map(esc).join(","),
  ),
].join("\n");

fs.mkdirSync(path.join(ROOT, "docs/seo"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "docs/seo/cannibalization.csv"), "﻿" + csv, "utf8");

const powyzejProgu = pary.filter((p) => p.s >= PROG);
const bezMiast = powyzejProgu.filter(
  (p) => !(p.a.slug.startsWith("pozycjonowanie-wizytowki-google-") && p.b.slug.startsWith("pozycjonowanie-wizytowki-google-")),
);
console.log(`Dokumentów w analizie: ${N} (wykluczono chronione: ${PROTECTED_SLUGS.length})`);
console.log(`Par o podobieństwie >= 0.15: ${pary.length}`);
console.log(`Par o podobieństwie >= ${PROG}: ${powyzejProgu.length}, w tym spoza serii miast: ${bezMiast.length}`);
console.log("\nNajsilniejsze pary spoza serii miast:");
bezMiast.slice(0, 12).forEach((p) => console.log(`  ${p.s.toFixed(3)}  /${p.a.slug}  ⟷  /${p.b.slug}`));
console.log("\nZapisano docs/seo/cannibalization.csv");
