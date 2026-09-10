/**
 * Konsolidacja kanibalizacji (Etap 3).
 *
 * Dla każdej pary „wchłaniana → docelowa":
 *   1. treść wchłanianej trafia do archive/ (nic nie jest usuwane),
 *   2. jej sekcje są dopisywane do strony docelowej pod znacznikiem
 *      do scalenia redakcyjnego,
 *   3. rekord znika z posts.ts (strona przestaje się generować),
 *   4. wszystkie linki wewnętrzne są przepisywane na URL docelowy,
 *   5. wpis trafia do redirects.json.
 *
 * Strony z listy nietykalnej nie mogą wystąpić po żadnej stronie mapowania —
 * skrypt przerywa pracę, jeśli się tam pojawią.
 */
import fs from "node:fs";
import path from "node:path";
import { SLUGS as PROTECTED_SLUGS } from "./protected-hash.mjs";

const ROOT = process.cwd();

/** wchłaniana → docelowa */
export const MAPOWANIE = {
  // Grupa A — jedna intencja „jak pozycjonować wizytówkę"
  "jak-pozycjonowac-wizytowke-google-2026": "pozycjonowanie-wizytowki-google",
  "jak-poprawic-widocznosc-profilu-firmy-w-mapach": "pozycjonowanie-wizytowki-google",
  // Grupa B — oszustwa wokół wizytówki
  "telefon-wizytowka-google-wygasnie-oszustwo": "wizytowka-google-popularne-oszustwa",
  "wizytowka-google-nie-wygasa-oszustwo": "wizytowka-google-popularne-oszustwa",
  "oplata-administracyjna-wizytowka-google": "wizytowka-google-popularne-oszustwa",
  // Grupa C — hotele
  "pozycjonowanie-wizytowki-google-hotel": "pozycjonowanie-hoteli-w-mapach-google",
};

/* ── zabezpieczenie ── */
for (const [a, b] of Object.entries(MAPOWANIE)) {
  if (PROTECTED_SLUGS.includes(a) || PROTECTED_SLUGS.includes(b) || a.startsWith("miauseo")) {
    console.error(`PRZERWANO: ${a} → ${b} dotyka strony chronionej.`);
    process.exit(1);
  }
}

const P_CONTENT = path.join(ROOT, "app/blog/content.tsx");
const P_POSTS = path.join(ROOT, "app/blog/posts.ts");

const czytaj = (p) => fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const zapisz = (p, s) => fs.writeFileSync(p, s.replace(/\r\n/g, "\n"), "utf8");

function granice(lines) {
  const st = [];
  lines.forEach((l, i) => {
    const m = l.match(/^ {2}"([a-z0-9-]+)": \(/);
    if (m) st.push({ slug: m[1], i });
  });
  return st.map((s, k) => ({ ...s, end: k + 1 < st.length ? st[k + 1].i : lines.length }));
}

/* ── 1–3. treść: archiwum + doklejenie do celu + wycięcie ── */
let lines = czytaj(P_CONTENT).split("\n");
fs.mkdirSync(path.join(ROOT, "archive/blog"), { recursive: true });

const raport = [];
for (const [zrodlo, cel] of Object.entries(MAPOWANIE)) {
  const g = granice(lines);
  const bz = g.find((x) => x.slug === zrodlo);
  const bc = g.find((x) => x.slug === cel);
  if (!bz || !bc) {
    console.error(`Brak bloku: ${zrodlo} lub ${cel}`);
    process.exit(1);
  }

  const blok = lines.slice(bz.i, bz.end);
  const wnetrze = blok.slice(1, -1).join("\n").replace(/^\s*<>\s*$/m, "").replace(/^\s*<\/>,?\s*$/m, "");
  const naglowki = (wnetrze.match(/<h2[^>]*>([\s\S]*?)<\/h2>/g) ?? [])
    .map((h) => h.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());

  // archiwum — pełna, nietknięta kopia
  fs.writeFileSync(
    path.join(ROOT, `archive/blog/${zrodlo}.tsx`),
    `/* Zarchiwizowano ${new Date().toISOString().slice(0, 10)} przy konsolidacji.\n` +
      `   Treść wchłonięta przez /${cel}. URL /${zrodlo} przekierowany 301. */\n\n` +
      blok.join("\n") + "\n",
    "utf8",
  );

  // doklejenie do celu, przed zamknięciem bloku docelowego
  const gg = granice(lines);
  const cel2 = gg.find((x) => x.slug === cel);
  let koniec = cel2.end - 1;
  while (koniec > cel2.i && !/^\s*\),\s*$/.test(lines[koniec])) koniec--;
  const wstawka = [
    "",
    `      {/* ── wchłonięte z /${zrodlo} (konsolidacja kanibalizacji) — do scalenia redakcyjnego ── */}`,
    ...wnetrze.split("\n").filter((l) => l.trim() !== ""),
    "",
  ];
  lines.splice(koniec - 1, 0, ...wstawka);

  // wycięcie bloku źródłowego (po ponownym wyznaczeniu granic)
  const g3 = granice(lines);
  const bz3 = g3.find((x) => x.slug === zrodlo);
  lines.splice(bz3.i, bz3.end - bz3.i);

  raport.push({ zrodlo, cel, linie: blok.length, sekcje: naglowki.length });
}
zapisz(P_CONTENT, lines.join("\n"));

/* ── 3b. usunięcie rekordów z posts.ts ── */
let posts = czytaj(P_POSTS);
for (const zrodlo of Object.keys(MAPOWANIE)) {
  const re = new RegExp(`\\n  \\{\\n(?:(?!\\n  \\{\\n)[\\s\\S])*?slug: "${zrodlo}",[\\s\\S]*?\\n  \\},`, "m");
  if (!re.test(posts)) {
    console.error(`Nie znaleziono rekordu w posts.ts: ${zrodlo}`);
    process.exit(1);
  }
  posts = posts.replace(re, "");
}
zapisz(P_POSTS, posts);

/* ── 4. przepisanie linków wewnętrznych ── */
const pliki = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "archive"].includes(e.name)) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|ts)$/.test(e.name)) pliki.push(p);
  }
};
walk(path.join(ROOT, "app"));
walk(path.join(ROOT, "components"));

let przepisane = 0;
const dotkniete = new Set();
for (const p of pliki) {
  let s = czytaj(p);
  const przed = s;
  for (const [zrodlo, cel] of Object.entries(MAPOWANIE)) {
    const re = new RegExp(`(href=")/${zrodlo}(")`, "g");
    s = s.replace(re, (m, a, b) => {
      przepisane++;
      return `${a}/${cel}${b}`;
    });
  }
  if (s !== przed) {
    zapisz(p, s);
    dotkniete.add(path.relative(ROOT, p));
  }
}

/* ── 5. redirects.json ── */
const redirects = Object.entries(MAPOWANIE).map(([from, to]) => ({ from: `/${from}`, to: `/${to}` }));
fs.writeFileSync(path.join(ROOT, "redirects.json"), JSON.stringify(redirects, null, 2) + "\n", "utf8");

/* ── raport ── */
console.log("KONSOLIDACJA\n");
raport.forEach((r) =>
  console.log(`  /${r.zrodlo}\n     → /${r.cel}   (${r.linie} linii, ${r.sekcje} sekcji H2, archiwum: archive/blog/${r.zrodlo}.tsx)`),
);
console.log(`\nPrzepisanych linków wewnętrznych: ${przepisane}`);
console.log(`Plików dotkniętych: ${dotkniete.size}`);
[...dotkniete].forEach((f) => console.log(`  ${f}`));
console.log(`\nredirects.json: ${redirects.length} przekierowań`);
console.log(`Stron chronionych w mapowaniu: 0 (weryfikacja przed startem)`);
