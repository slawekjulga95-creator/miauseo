/**
 * Inwentaryzacja treści miauseo.pl (Etap 1).
 *
 * Wejście: app/blog/posts.ts, app/blog/content.tsx, app/slownik/terms.ts,
 *          app/slownik/content/*.tsx, app/pytania/content/*.tsx, statyczne page.tsx
 * Wyjście: docs/seo/inventory.csv, docs/seo/link-graph.json
 *
 * Zasada: glowny_temat wyznaczamy z TREŚCI, nie z tytułu. Przy stronach miast
 * tytuł kłamie — dlatego temat liczymy leksykonem po tekście i nagłówkach.
 *
 * Uruchomienie: node scripts/seo/inventory.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { SLUGS as PROTECTED_SLUGS } from "./protected-hash.mjs";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "docs/seo");

/* ─────────────────────────── narzędzia tekstowe ─────────────────────────── */

/** Usuwa bloki <pre>…</pre> — to przykłady kodu, nie treść redakcyjna. */
const stripPre = (s) => s.replace(/<pre[\s\S]*?<\/pre>/g, " ");

/**
 * Wycina sekcje szablonowe, powtarzalne na wielu stronach. Bez tego temat
 * strony miasta zawsze wychodzi „schema" — bo każda z 101 stron ma blok
 * „Local Schema dla firmy z {miasto}" z kodem i słownictwem schematów.
 * Wycinamy od nagłówka szablonowego do następnego <h2>.
 */
const SEKCJE_SZABLONOWE = /(Local Schema dla firmy|Najczęstsze pytania|Podsumowanie|Spis treści)/i;

function stripBoilerplate(jsx) {
  const parts = jsx.split(/(?=<h2)/);
  return parts.filter((p) => !SEKCJE_SZABLONOWE.test(p.slice(0, 200))).join(" ");
}

/** JSX → goły tekst: precz tagi, encje, wyrażenia klas. */
function toText(jsx) {
  return stripPre(jsx)
    .replace(/<[^>]+>/g, " ")
    .replace(/\{["'`][^}]*["'`]\}/g, " ")
    .replace(/&nbsp;|&aacute;|&[a-z]+;/gi, " ")
    .replace(/[{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const words = (t) => (t.match(/[\p{L}\p{N}][\p{L}\p{N}-]*/gu) || []).length;

function headings(jsx) {
  const out = [];
  for (const m of stripBoilerplate(stripPre(jsx)).matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/g)) {
    const t = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (t) out.push(t);
  }
  return out;
}

/** Linki wewnętrzne: <Link href="/x"> i <a href="/x">, bez kotwic i zewnętrznych. */
function internalLinks(jsx) {
  const out = new Set();
  for (const m of stripPre(jsx).matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1].replace(/\/$/, "");
    if (href === "") href = "/";
    out.add(href);
  }
  return [...out];
}

/** Czy blok ma prawdziwą schemę (a nie przykład kodu w <pre>)? */
const hasSchema = (jsx) => /type="application\/ld\+json"/.test(stripPre(jsx));

/* ─────────────────────────── leksykon tematów ───────────────────────────── */
/* Każdy temat: etykieta, klaster docelowy, słowa-klucze (lowercase, bez odmian
   końcówek — dopasowanie po rdzeniu). Wynik = suma trafień, nagłówki ×3.     */

const TEMATY = [
  ["godziny otwarcia i praca zmianowa", "konfiguracja", ["godzin otwarci", "godziny pracy", "praca zmianow", "godziny specjaln", "otwarte teraz", "zamkniete", "dyzur"]],
  ["zawieszenie profilu i odwołanie", "problemy", ["zawieszon", "zawieszeni", "odwolani", "przywrocenie profilu", "reinstate", "zablokowan", "blokada profilu"]],
  ["duplikaty profilu i scalanie", "problemy", ["duplikat", "zdublowan", "scalani", "scalic", "dwie wizytowki", "dwa profile"]],
  ["nieautoryzowane zmiany w profilu", "problemy", ["nieautoryzowan", "sugerowana zmiana", "sugestii", "sugestie uzytkownik", "zmiany od uzytkownikow", "ktos zmienil", "zmian ktorych nie wprowadza", "zamkniete na stale", "edycja przez uzytkownik"]],
  ["fraza w nazwie firmy", "problemy", ["fraza w nazwie", "keyword stuffing", "zgloszenie nazwy", "redressal", "dopisywanie miasta", "dopisac miasto", "zglosic konkurenta", "nazwa zgodna z szyldem", "przekroczenie granicy"]],
  ["oszustwa i podszywanie się", "problemy", ["oszust", "wyludz", "naciagac", "falszyw", "wygasnie", "oplata administracyjn", "podszywa"]],
  ["spadek pozycji i utrata top 3", "problemy", ["spadek pozycji", "wypadl z", "utrata pozycji", "spadlo", "zniknela wizytowka", "przestala byc widoczna"]],
  ["weryfikacja profilu", "weryfikacja-i-dostepy", ["weryfikacj", "pocztowk", "kod weryfikacyjn", "weryfikacja wideo", "nagranie weryfikacyjn"]],
  ["dostępy i prawa menedżerskie", "weryfikacja-i-dostepy", ["wlascicie", "menedzer", "prawa dostepu", "przekazanie dostepu", "odzyskanie dostepu", "stary profil"]],
  ["zmiana adresu i przeniesienie firmy", "weryfikacja-i-dostepy", ["zmiana adresu", "przeniesienie firmy", "przeprowadzk", "nowy adres", "sprzedaz firmy"]],
  ["kategorie profilu", "konfiguracja", ["kategori glown", "kategoria dodatkow", "wybor kategorii", "kategorie wizytowki", "kategorii w profilu"]],
  ["atrybuty, usługi i produkty", "konfiguracja", ["atrybut", "sekcja uslugi", "lista uslug", "produkty w profilu", "cennik w profilu"]],
  ["opis firmy", "konfiguracja", ["opis firmy", "750 znak", "sekcja o firmie", "napisac opis"]],
  ["zdjęcia w profilu", "konfiguracja", ["zdjeci", "fotograf", "logo i zdjecie w tle", "geotag"]],
  ["posty i aktualności", "konfiguracja", ["post w wizytowce", "posty google", "postow", "posty naprawde", "aktualnosci w profilu", "wpisy w profilu", "publikowac posty", "formaty postow"]],
  ["sekcja Informacje i pytania", "konfiguracja", ["sekcja informacje", "pytania i odpowiedzi", "q&a", "pytania w wizytowce"]],
  ["opinie: zbieranie", "opinie", ["zbieranie opinii", "prosic o opinie", "jak zdobywac opinie", "link do opinii", "wiecej opinii"]],
  ["opinie: odpowiadanie", "opinie", ["odpowiadac na opinie", "odpowiedz na opinie", "reakcja na opinie"]],
  ["opinie: usuwanie i negatywne", "opinie", ["usuniecie opinii", "negatywn opini", "falszywa opinia", "zglaszanie opinii", "hejt"]],
  ["opinie: zasady i ryzyko", "opinie", ["kupowanie opinii", "zasady opinii", "polityka opinii", "wymiana opinii"]],
  ["NAP i cytowania", "local-seo", ["nap", "spojnosc danych", "cytowani", "katalogi firm", "wizytowki w katalogach"]],
  ["dane strukturalne i schema", "local-seo", ["schema", "json-ld", "localbusiness", "dane strukturaln", "znaczniki"]],
  ["obszar działania i zasięg", "local-seo", ["obszar dzialani", "promien", "zasieg dzialania", "service area", "bez adresu"]],
  ["pomiar: geogrid i pozycje", "local-seo/pomiar", ["geogrid", "siatka punkt", "siatk", "mapa pozycji", "pomiar pozycji", "local falcon", "punkty pomiarow"]],
  ["zapytania brandowe i panel wiedzy", "konfiguracja", ["zapytania brandow", "panel wiedzy", "knowledge panel", "wpisuje nazwe", "nazwe twojej firmy", "z polecenia", "podpowiedzi przy nazwie"]],
  ["pomiar: statystyki i UTM", "local-seo/pomiar", ["statystyki profilu", "utm", "performance", "raport z wizytowki", "kliknieci w telefon"]],
  ["AI: encje i modele", "local-seo/ai", ["encj", "knowledge graph", "mid", "sameas", "ai overview", "ai mode", "model jezykow", "chatgpt", "perplexity"]],
  ["pozycjonowanie profilu: całość", "pillar", ["pozycjonowanie wizytowki", "jak pozycjonowac", "widocznosc profilu", "local pack", "wyzej w mapach"]],
  ["czynniki rankingowe", "pillar", ["czynnik rankingow", "co wplywa na pozycj", "algorytm map", "bliskosc trafnosc"]],
  ["koszty i decyzje zakupowe", "poradniki/decyzje", ["ile kosztuje", "cennik", "cena uslugi", "czy warto", "samodzielnie czy agencja", "budzet"]],
  ["strona WWW i WordPress", "poradniki/strona-firmowa", ["wordpress", "wtyczk", "hosting", "motyw", "strona internetowa firmy", "elementor", "woocommerce"]],
  ["Google Ads", "off-topic", ["google ads", "kampani reklamow", "cpc", "reklama w google"]],
  ["narzędzia AI i automatyzacja", "off-topic", ["claude code", "asystent ai", "automatyzacj", "prompt", "llm w pracy"]],
];

const norm = (s) =>
  s.toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e").replace(/ł/g, "l")
    .replace(/ń/g, "n").replace(/ó/g, "o").replace(/ś/g, "s").replace(/[żź]/g, "z");

/** Zliczenie trafień frazy w tekście (tekst już znormalizowany). */
const tf = (hay, needle) => hay.split(needle).length - 1;

/**
 * Scoring z wagą IDF. Fraza obecna niemal wszędzie (np. „schema" w bloku
 * szablonowym) nie może decydować o temacie — dostaje wagę bliską zeru.
 * df liczymy raz, po zebraniu wszystkich dokumentów.
 */
function zbudujScorer(dokumenty) {
  const N = dokumenty.length;
  const df = new Map();
  for (const [, , keys] of TEMATY) {
    for (const k of keys) {
      const kk = norm(k);
      if (df.has(kk)) continue;
      df.set(kk, dokumenty.reduce((a, d) => a + (d.includes(kk) ? 1 : 0), 0));
    }
  }
  const idf = (kk) => Math.max(0.05, Math.log(N / (1 + (df.get(kk) ?? 0))));

  return function glownyTemat(text, hs) {
    const body = norm(text);
    const head = norm(hs.join(" | "));
    let best = null;
    for (const [label, klaster, keys] of TEMATY) {
      let score = 0;
      for (const k of keys) {
        const kk = norm(k);
        score += (tf(body, kk) + tf(head, kk) * 3) * idf(kk);
      }
      score = Math.round(score * 10) / 10;
      if (!best || score > best.score) best = { label, klaster, score };
    }
    return best && best.score >= 2 ? best : { label: "nieokreslony", klaster: "?", score: best?.score ?? 0 };
  };
}

/* ────────────────────────── encja główna strony ─────────────────────────── */

const ENCJE = [
  ["Profil Firmy w Google", ["wizytowk", "profil firmy w google", "google business profile", "google moja firma", "gbp"]],
  ["opinie Google", ["opini"]],
  ["Mapy Google", ["mapy google", "local pack", "google maps"]],
  ["strona internetowa firmy", ["wordpress", "strona www", "strona internetowa"]],
  ["Google Ads", ["google ads", "reklama"]],
  ["narzędzia AI", ["claude", "chatgpt", "model jezykow", "llm"]],
];

function encjaGlowna(text) {
  const b = norm(text);
  let best = ["nieokreslona", 0];
  for (const [name, keys] of ENCJE) {
    const s = keys.reduce((a, k) => a + (b.split(norm(k)).length - 1), 0);
    if (s > best[1]) best = [name, s];
  }
  return best[0];
}

/* ────────────────────── lokalność strony miasta ─────────────────────────── */
/**
 * Rozstrzyga, czy strona miasta ma realną treść lokalną, czy jest generycznym
 * tematem pod nazwą miasta. To decyduje o ścieżce w Etapie 5:
 *   lokalna          → zostaje jako strona ofertowa miasta,
 *   temat-generyczny → temat wychodzi na własny URL w klastrze.
 */
function lokalnosc(slug, text, hs) {
  const miasto = slug.replace(/^pozycjonowanie-wizytowki-google-/, "");
  const rdzen = norm(miasto).split("-")[0].slice(0, Math.max(4, miasto.length - 2));
  const b = norm(text);
  const h = norm(hs.join(" "));
  const nazwa = tf(b, rdzen) + tf(h, rdzen) * 2;
  const geo = ["dzielnic", "osiedl", "powiat", "okolic", "gmin", "ulic", "centrum miasta", "sasiedni"]
    .reduce((a, k) => a + tf(b, norm(k)) * 2 + tf(h, norm(k)) * 4, 0);
  const pkt = nazwa + geo;
  // Trzy kubełki, nie werdykt zero-jedynkowy — granice do potwierdzenia ręcznie
  // przy tabeli mapowania w Etapie 5.
  const wariant = pkt >= 35 ? "lokalna" : pkt >= 15 ? "mieszana" : "temat-generyczny";
  return { pkt, wariant };
}

/* ──────────────────────────── typ strony ────────────────────────────────── */

const BRANZE = ["protetyk", "klimatyzac", "pomoc-drogow", "warsztat", "hotel", "kancelari", "salon", "wulkanizac", "fryzjer", "dentyst", "mechanik", "weterynar", "stomatolog", "restauracj", "silown", "kosmetyczk"];

function typStrony({ slug, url, temat, protectedFlag, kind }) {
  if (protectedFlag) return "case-study";
  if (kind === "slownik") return "slownik";
  if (kind === "pytanie") return "pytanie";
  if (kind === "static") return url.startsWith("/uslugi") ? "oferta" : "narzedzie";
  if (/^pozycjonowanie-wizytowki-google-[a-z-]+$/.test(slug)) return "miasto";
  if (BRANZE.some((b) => slug.includes(b))) return "branza";
  if (temat.klaster === "problemy") return "troubleshooting";
  if (temat.klaster === "pillar") return "pillar";
  if (temat.klaster === "off-topic") return "off-topic";
  return "poradnik";
}

/* ─────────────────────────── wczytanie źródeł ───────────────────────────── */

function parsePosts() {
  const src = fs.readFileSync(path.join(ROOT, "app/blog/posts.ts"), "utf8");
  const start = src.indexOf("export const posts");
  const body = src.slice(start);
  const out = [];
  for (const chunk of body.split(/\n  \{\n/).slice(1)) {
    const pick = (re) => (chunk.match(re)?.[1] ?? "").trim();
    const slug = pick(/slug: "([^"]+)"/);
    if (!slug) continue;
    out.push({
      slug,
      title: pick(/title:\s*"((?:[^"\\]|\\.)*)"/),
      excerpt: pick(/excerpt:\s*\n?\s*"((?:[^"\\]|\\.)*)"/),
      category: pick(/category: "([^"]+)"/),
      date: pick(/date: "([^"]+)"/),
      published: /published: true/.test(chunk),
    });
  }
  return out;
}

function parseContentBlocks() {
  const src = fs.readFileSync(path.join(ROOT, "app/blog/content.tsx"), "utf8");
  const lines = src.split("\n");
  const starts = [];
  lines.forEach((l, i) => {
    const m = l.match(/^ {2}"([a-z0-9-]+)": \(/);
    if (m) starts.push({ slug: m[1], line: i });
  });
  const map = new Map();
  starts.forEach((s, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].line : lines.length;
    map.set(s.slug, lines.slice(s.line, end).join("\n"));
  });
  return map;
}

function parseTerms() {
  const src = fs.readFileSync(path.join(ROOT, "app/slownik/terms.ts"), "utf8");
  const out = [];
  for (const m of src.matchAll(/slug:\s*"([^"]+)"[\s\S]{0,400}?term:\s*"((?:[^"\\]|\\.)*)"[\s\S]{0,600}?shortDesc:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)) {
    out.push({ slug: m[1], term: m[2], shortDesc: m[3] });
  }
  if (out.length === 0) {
    for (const m of src.matchAll(/slug:\s*"([^"]+)"/g)) out.push({ slug: m[1], term: m[1], shortDesc: "" });
  }
  return out;
}

function readDirFiles(rel) {
  const dir = path.join(ROOT, rel);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"))
    .map((f) => ({ slug: f.replace(/\.tsx$/, ""), file: path.join(rel, f), src: fs.readFileSync(path.join(dir, f), "utf8") }));
}

function staticPages() {
  const routes = [];
  const walk = (dir, url) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name.startsWith("[") || e.name === "api" || e.name === "content") continue;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p, `${url}/${e.name}`);
      else if (e.name === "page.tsx") routes.push({ url: url || "/", file: path.relative(ROOT, p), src: fs.readFileSync(p, "utf8") });
    }
  };
  walk(path.join(ROOT, "app"), "");
  return routes;
}

/* ──────────────────────────────── główny bieg ───────────────────────────── */

const posts = parsePosts();
const contentBlocks = parseContentBlocks();
const terms = parseTerms();
const termFiles = new Map(readDirFiles("app/slownik/content").map((f) => [f.slug, f]));
const pytania = readDirFiles("app/pytania/content");
const statics = staticPages();

const rows = [];

/* Pre-pass: korpus do policzenia IDF. Bez niego frazy szablonowe wygrywają. */
const korpus = [
  ...posts.map((p) => norm(toText(stripBoilerplate(contentBlocks.get(p.slug) ?? "")))),
  ...terms.map((t) => norm(toText(termFiles.get(t.slug)?.src ?? "") || t.shortDesc)),
  ...pytania.map((q) => norm(toText(q.src))),
  ...statics.map((s) => norm(toText(s.src))),
];
const glownyTemat = zbudujScorer(korpus);

// 1. Wpisy blogowe (rooted: /{slug})
for (const p of posts) {
  const jsx = contentBlocks.get(p.slug) ?? "";
  const text = toText(jsx);
  const tematText = toText(stripBoilerplate(jsx));
  const hs = headings(jsx);
  const temat = glownyTemat(`${tematText} ${p.excerpt}`, hs);
  const isProtected = PROTECTED_SLUGS.includes(p.slug);
  rows.push({
    slug: p.slug,
    url: `/${p.slug}`,
    title: p.title,
    h1: p.title, // szablon renderuje <h1>{post.title}</h1>
    meta_description: p.excerpt,
    kategoria: p.category,
    data_publikacji: p.date,
    data_modyfikacji: p.date, // brak osobnego pola w schemacie Post
    liczba_slow: words(text),
    glowny_temat: temat.label,
    klaster_sugerowany: temat.klaster,
    trafnosc_tematu: temat.score,
    encja_glowna: encjaGlowna(text),
    typ_strony: typStrony({ slug: p.slug, url: `/${p.slug}`, temat, protectedFlag: isProtected, kind: "post" }),
    lokalnosc_pkt: /^pozycjonowanie-wizytowki-google-/.test(p.slug) ? lokalnosc(p.slug, tematText, hs).pkt : "",
    wariant_miasta: /^pozycjonowanie-wizytowki-google-/.test(p.slug) ? lokalnosc(p.slug, tematText, hs).wariant : "",
    protected: isProtected,
    ma_schema: hasSchema(jsx),
    sciezka_pliku: "app/blog/content.tsx + app/blog/posts.ts",
    _links: internalLinks(jsx),
  });
}

// 2. Hasła słownika (/{slug} oraz /slownik/{slug})
for (const t of terms) {
  const f = termFiles.get(t.slug);
  const jsx = f?.src ?? "";
  const text = toText(jsx) || t.shortDesc;
  const temat = glownyTemat(`${text} ${t.shortDesc}`, headings(jsx));
  rows.push({
    slug: t.slug,
    url: `/${t.slug}`,
    title: `${t.term} – definicja`,
    h1: t.term,
    meta_description: t.shortDesc,
    kategoria: "Słownik",
    data_publikacji: "",
    data_modyfikacji: "",
    liczba_slow: words(text),
    glowny_temat: temat.label,
    klaster_sugerowany: temat.klaster,
    trafnosc_tematu: temat.score,
    encja_glowna: encjaGlowna(text),
    typ_strony: "slownik",
    protected: false,
    ma_schema: true, // DefinedTerm wstrzykiwany przez app/[slug]/page.tsx
    sciezka_pliku: f?.file ?? "app/slownik/terms.ts",
    _links: internalLinks(jsx),
  });
}

// 3. Pytania (/pytania/{slug})
for (const q of pytania) {
  const text = toText(q.src);
  const temat = glownyTemat(text, headings(q.src));
  rows.push({
    slug: q.slug,
    url: `/pytania/${q.slug}`,
    title: (q.src.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? q.slug),
    h1: (q.src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "").trim(),
    meta_description: (q.src.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? ""),
    kategoria: "Pytania",
    data_publikacji: "",
    data_modyfikacji: "",
    liczba_slow: words(text),
    glowny_temat: temat.label,
    klaster_sugerowany: temat.klaster,
    trafnosc_tematu: temat.score,
    encja_glowna: encjaGlowna(text),
    typ_strony: "pytanie",
    protected: false,
    ma_schema: hasSchema(q.src),
    sciezka_pliku: q.file,
    _links: internalLinks(q.src),
  });
}

// 4. Strony statyczne (usługi, kontakt, referencje itd.)
for (const s of statics) {
  if (s.url === "/blog") continue;
  const text = toText(s.src);
  const temat = glownyTemat(text, headings(s.src));
  const isProtected = s.url === "/referencje";
  rows.push({
    slug: s.url.replace(/^\//, "") || "home",
    url: s.url,
    title: (s.src.match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? s.url),
    h1: (s.src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
    meta_description: (s.src.match(/description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/)?.[1] ?? ""),
    kategoria: "Strona",
    data_publikacji: "",
    data_modyfikacji: "",
    liczba_slow: words(text),
    glowny_temat: temat.label,
    klaster_sugerowany: temat.klaster,
    trafnosc_tematu: temat.score,
    encja_glowna: encjaGlowna(text),
    typ_strony: typStrony({ slug: s.url, url: s.url, temat, protectedFlag: isProtected, kind: "static" }),
    protected: isProtected,
    ma_schema: hasSchema(s.src),
    sciezka_pliku: s.file,
    _links: internalLinks(s.src),
  });
}

/* ───────────────────────────── graf linków ──────────────────────────────── */

const znane = new Set(rows.map((r) => r.url));
const incoming = new Map(rows.map((r) => [r.url, 0]));
const edges = [];

for (const r of rows) {
  for (const target of r._links) {
    if (target === r.url) continue;
    edges.push({ from: r.url, to: target, wewnetrzny_cel_istnieje: znane.has(target) });
    if (incoming.has(target)) incoming.set(target, incoming.get(target) + 1);
  }
}

for (const r of rows) {
  r.linki_wychodzace_wewnetrzne = r._links.filter((l) => znane.has(l)).length;
  r.linki_przychodzace_wewnetrzne = incoming.get(r.url) ?? 0;
  delete r._links;
}

/* ────────────────────────────── zapis ───────────────────────────────────── */

fs.mkdirSync(OUT_DIR, { recursive: true });

const KOLUMNY = [
  "slug", "url", "title", "h1", "meta_description", "kategoria",
  "data_publikacji", "data_modyfikacji", "liczba_slow", "glowny_temat",
  "klaster_sugerowany", "trafnosc_tematu", "encja_glowna", "typ_strony",
  "lokalnosc_pkt", "wariant_miasta",
  "protected", "linki_wychodzace_wewnetrzne", "linki_przychodzace_wewnetrzne",
  "ma_schema", "sciezka_pliku",
];

const esc = (v) => `"${String(v ?? "").replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
const csv = [KOLUMNY.join(","), ...rows.map((r) => KOLUMNY.map((k) => esc(r[k])).join(","))].join("\n");
fs.writeFileSync(path.join(OUT_DIR, "inventory.csv"), "﻿" + csv, "utf8");

fs.writeFileSync(
  path.join(OUT_DIR, "link-graph.json"),
  JSON.stringify({
    wygenerowano: new Date().toISOString(),
    wezly: rows.map((r) => ({
      url: r.url, typ: r.typ_strony, klaster: r.klaster_sugerowany,
      protected: r.protected, in: r.linki_przychodzace_wewnetrzne, out: r.linki_wychodzace_wewnetrzne,
    })),
    krawedzie: edges,
  }, null, 1),
  "utf8",
);

/* ───────────────────────────── podsumowanie ─────────────────────────────── */

const licz = (fn) => rows.filter(fn).length;
const byType = {};
rows.forEach((r) => (byType[r.typ_strony] = (byType[r.typ_strony] ?? 0) + 1));

console.log(`\nWierszy: ${rows.length}   Krawędzi w grafie: ${edges.length}`);
console.log(`Odfiltrowanych przez listę nietykalną (protected=true): ${licz((r) => r.protected)}`);
console.log("\nTyp strony:");
Object.entries(byType).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k.padEnd(16)} ${v}`));
console.log("\nLinkowanie:");
console.log(`  sieroty (0 linków przychodzących): ${licz((r) => r.linki_przychodzace_wewnetrzne === 0)}`);
console.log(`  poniżej 3 linków przychodzących:   ${licz((r) => r.linki_przychodzace_wewnetrzne < 3)}`);
console.log(`  bez linków wychodzących:           ${licz((r) => r.linki_wychodzace_wewnetrzne === 0)}`);
const martwe = edges.filter((e) => !e.wewnetrzny_cel_istnieje);
console.log(`  krawędzie do nieznanych celów:     ${martwe.length}`);
console.log("\nTemat nieokreślony (leksykon nie trafił):", licz((r) => r.glowny_temat === "nieokreslony"));
console.log("Zapisano: docs/seo/inventory.csv, docs/seo/link-graph.json\n");
