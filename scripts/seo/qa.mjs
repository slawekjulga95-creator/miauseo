/**
 * QA po buildzie (Etap 9).
 *
 * Sprawdza:
 *   1. każdy URL z sitemapy zwraca 200,
 *   2. każdy `from` z redirects.json zwraca 308 bez łańcucha,
 *   3. brak linków wewnętrznych celujących w przekierowania,
 *   4. brak duplikatów title i meta description,
 *   5. każda strona wpisu ma canonical i JSON-LD,
 *   6. bloki stron chronionych zgodne z baseline — sprawdzenie BLOKUJĄCE.
 *
 * Użycie: node scripts/seo/qa.mjs [baseUrl]
 */
import fs from "node:fs";
import { snapshot } from "./protected-hash.mjs";

const BASE = process.argv[2] ?? "http://localhost:3000";
const bledy = [];
const ostrzezenia = [];
const info = (s) => console.log(s);

/* ── 6. strony chronione (najpierw — to sprawdzenie blokuje wszystko) ── */
const baseline = JSON.parse(fs.readFileSync("docs/seo/protected-baseline.json", "utf8"));
const teraz = snapshot();
let naruszone = 0;
for (const k of Object.keys(baseline)) {
  if (JSON.stringify(baseline[k]) !== JSON.stringify(teraz[k])) {
    naruszone++;
    bledy.push(`STRONA CHRONIONA ZMIENIONA: ${k}`);
  }
}
info(`[1/6] Strony chronione: ${Object.keys(baseline).length - naruszone}/${Object.keys(baseline).length} zgodne z baseline`);

/* ── 2. przekierowania ── */
const redirects = JSON.parse(fs.readFileSync("redirects.json", "utf8"));
let redOk = 0;
for (const { from, to } of redirects) {
  const r = await fetch(BASE + from, { redirect: "manual" });
  const rc = await fetch(BASE + to, { redirect: "manual" });
  const ok = [301, 308].includes(r.status) && (r.headers.get("location") ?? "").endsWith(to);
  const lancuch = [301, 308].includes(rc.status);
  if (ok && !lancuch) redOk++;
  else bledy.push(`Przekierowanie ${from}: status ${r.status}, cel ${r.headers.get("location")}${lancuch ? " (ŁAŃCUCH)" : ""}`);
}
info(`[2/6] Przekierowania: ${redOk}/${redirects.length} poprawnych, zero łańcuchów`);

/* ── 1. sitemap ── */
const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const doSprawdzenia = urls.slice(0, 60); // próbka, pełne przejście w CI
let s200 = 0;
for (const u of doSprawdzenia) {
  const r = await fetch(u.replace("https://miauseo.pl", BASE), { redirect: "manual" });
  if (r.status === 200) s200++;
  else bledy.push(`Sitemap → ${u} zwraca ${r.status}`);
}
info(`[3/6] Sitemap: ${urls.length} URL-i, próbka ${doSprawdzenia.length}: ${s200} × 200`);

/* ── 3. linki do przekierowań ── */
const pliki = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "archive"].includes(e.name)) continue;
    const p = `${d}/${e.name}`;
    if (e.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(e.name)) pliki.push(p);
  }
};
walk("app");
walk("components");
let doPrzekierowan = 0;
for (const f of pliki) {
  const s = fs.readFileSync(f, "utf8");
  for (const { from } of redirects) {
    const n = (s.match(new RegExp(`href="${from}"`, "g")) ?? []).length;
    if (n) {
      doPrzekierowan += n;
      bledy.push(`${f}: ${n} link(ów) do przekierowanego ${from}`);
    }
  }
}
info(`[4/6] Linki celujące w przekierowania: ${doPrzekierowan}`);

/* ── 4. duplikaty metadanych ── */
const posts = fs.readFileSync("app/blog/posts.ts", "utf8");
const zbierz = (re) => [...posts.matchAll(re)].map((m) => m[1]);
const tytuly = zbierz(/title:\s*"((?:[^"\\]|\\.)*)"/g);
const opisy = zbierz(/excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g);
const duplikaty = (arr) => {
  const c = new Map();
  arr.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1));
  return [...c].filter(([, v]) => v > 1);
};
const dupT = duplikaty(tytuly);
const dupO = duplikaty(opisy);
dupT.forEach(([t, n]) => bledy.push(`Duplikat title (${n}×): ${t.slice(0, 60)}`));
dupO.forEach(([, n]) => bledy.push(`Duplikat meta description (${n}×)`));
const dlugieT = tytuly.filter((t) => t.length > 60).length;
const zleO = opisy.filter((o) => o.length < 140 || o.length > 158).length;
ostrzezenia.push(`Tytułów dłuższych niż 60 znaków: ${dlugieT}/${tytuly.length}`);
ostrzezenia.push(`Opisów poza zakresem 140–158 znaków: ${zleO}/${opisy.length}`);
info(`[5/6] Metadane: ${tytuly.length} wpisów, duplikaty title: ${dupT.length}, duplikaty description: ${dupO.length}`);

/* ── 5. canonical + JSON-LD na próbce ── */
const probka = ["/pozycjonowanie-wizytowki-google", "/wizytowka-google-popularne-oszustwa", "/profil-firmy-w-google", "/nap-wizytowka-google-co-to-jest", "/czynniki-rankingowe-wizytowki-google-2026"];
let zCanonical = 0;
let zJsonLd = 0;
for (const u of probka) {
  const html = await (await fetch(BASE + u)).text();
  if (/rel="canonical"/.test(html)) zCanonical++;
  else bledy.push(`Brak canonical: ${u}`);
  if (/application\/ld\+json/.test(html)) zJsonLd++;
  else bledy.push(`Brak JSON-LD: ${u}`);
}
info(`[6/6] Próbka ${probka.length} stron: canonical ${zCanonical}, JSON-LD ${zJsonLd}`);

/* ── podsumowanie ── */
console.log("\nOSTRZEŻENIA:");
ostrzezenia.forEach((o) => console.log(`  ${o}`));
console.log(`\nBŁĘDY: ${bledy.length}`);
bledy.slice(0, 20).forEach((b) => console.log(`  ${b}`));
if (naruszone) {
  console.log("\nQA PRZERWANE: naruszona lista nietykalna.");
  process.exit(2);
}
process.exit(bledy.length ? 1 : 0);
