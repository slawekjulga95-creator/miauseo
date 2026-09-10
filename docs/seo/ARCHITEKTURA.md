# Architektura repozytorium miauseo.pl — rozpoznanie (Etap 0)

Data: 2026-09-10 · Gałąź robocza: `seo/topical-authority` (utworzona z `master`)

> Dokument opisuje **stan zastany**, bez żadnych zmian w treści i strukturze.
> Wszystkie ustalenia zweryfikowane w kodzie, nie założone.

---

## 1. Stack i router

| Element | Wartość |
|---|---|
| Next.js | **16.2.6** |
| React | 19.2.4 |
| Router | **App Router** (`app/`), brak `pages/` |
| Język | TypeScript, ścieżki `@/*` |
| Style | Tailwind CSS 4 (`@tailwindcss/postcss`) |
| Bundler | Turbopack (`turbopack.root` ustawiony w `next.config.ts`) |
| Backend | Supabase (`lib/supabase`), Resend (maile), reCAPTCHA v3 |
| Deploy | Vercel, `vercel.json` z `buildCommand`/`installCommand` |

Uwaga z `AGENTS.md`: to Next.js z breaking changes względem wiedzy modelu — dokumentacja offline w `node_modules/next/dist/docs/`, do czytania przed pisaniem kodu.

---

## 2. Skąd bierze się treść — kluczowe ustalenie

**Nie ma MDX, plików Markdown ani CMS-a.** Treść bloga to dwa pliki TypeScript:

| Plik | Rola | Rozmiar |
|---|---|---|
| `app/blog/posts.ts` | metadane wpisów — tablica `posts: Post[]` | 2 257 linii, **169 wpisów** |
| `app/blog/content.tsx` | treść artykułów — `articleContent: Record<string, React.ReactNode>` (klucz = slug) | **29 558 linii** JSX |

Schemat rekordu (`app/blog/posts.ts`):

```ts
type Post = {
  slug: string;
  title: string;
  excerpt: string;        // pełni rolę meta description
  category: Category;     // "SEO" | "Opinie" | "Poradnik" | "Wizytówka" | "WordPress" | "Sztuczna Inteligencja"
  date: string;           // ISO, jedyna data — brak osobnej daty modyfikacji
  readTime: number;
  coverColor: string;
  coverImage?: string;
  published: boolean;
  hideFromBlog?: boolean; // dostępny pod URL-em, niewidoczny na /blog
  pinBottom?: boolean;    // zawsze na końcu listy (seria miast)
  popular?: boolean;
  caseRating?: { businessName: string; value: number; count: number };
};
```

**Konsekwencja dla całej przebudowy:** strona ≠ plik. Operacje „przenieś plik", „odfiltruj po ścieżce", „porównaj hash pliku" **nie mają tu zastosowania**. Każda operacja masowa musi działać na blokach rekordów wewnątrz dwóch wielkich plików. Dotyczy to również ochrony stron brandowych — patrz §9.

Pozostałe typy treści:

| Typ | Dane | Treść | Liczba |
|---|---|---|---|
| Słownik SEO/SEM | `app/slownik/terms.ts` | `app/slownik/content/*.tsx` | 131 plików treści |
| Pytania (FAQ/PAA) | pliki w katalogu | `app/pytania/content/*.tsx` | 51 plików |
| Strony usług i statyczne | JSX bezpośrednio w `page.tsx` | — | ~20 tras |

---

## 3. Generowanie ścieżek

| Trasa | Plik | Mechanizm |
|---|---|---|
| `/{slug}` — **wpisy blogowe i hasła słownika w roocie** | `app/[slug]/page.tsx` (489 linii) | `generateStaticParams()` = `getPublishedPosts()` + `terms` |
| `/blog/{slug}` | `app/blog/[slug]/page.tsx` | tylko `redirect('/{slug}')` w runtime — historyczne adresy |
| `/slownik/{slug}` | `app/slownik/[slug]/page.tsx` | osobna trasa |
| `/pytania/{slug}` | `app/pytania/[slug]/page.tsx` | czytane z katalogu `content/` |

`app/[slug]/page.tsx` obsługuje **dwa typy treści w jednym pliku**: najpierw sprawdza słownik (`getTermBySlug`), potem wpis blogowy (`getPostBySlug`). Wszystkie 169 wpisów leży płasko w roocie — potwierdza to diagnozę o braku hierarchii.

Brak `dynamicParams = false` — nieznany slug trafia do `notFound()`.

---

## 4. Metadane

- Globalne: `app/layout.tsx` — `metadata` (title, description, openGraph, twitter).
- Wpisy i hasła: `generateMetadata()` w `app/[slug]/page.tsx`.
  - `title` = `${post.title} – MiauSEO`
  - `description` = `post.excerpt` (**brak osobnego pola meta description** — do rozstrzygnięcia w Etapie 8)
  - `alternates.canonical` = `https://miauseo.pl/${slug}` — self-referencing, absolutny ✔
  - `openGraph.images` z `coverImage` lub fallback `/logo.png`
- Brak `metadataBase` w layoucie (ścieżki OG budowane ręcznie jako absolutne).

---

## 5. Sitemap i robots

- `app/sitemap.ts` — generowany dynamicznie, **jeden plik** `/sitemap.xml`:
  - 17 tras statycznych z ręcznej listy,
  - wszystkie opublikowane wpisy (`/{slug}`),
  - `/pytania/{slug}` czytane z systemu plików.
- `app/robots.ts` — `allow: /`, wskazuje `https://miauseo.pl/sitemap.xml`.

**Luki wykryte w sitemapie** (do naprawy w Etapie 9, nie teraz):
`/slownik` i wszystkie 131 haseł słownika, `/prezent`, `/regulamin`, `/dziekujemy`, `/uslugi/*` częściowo (brak np. `/opinie` ma, ale hasła nie). Sitemap nie zna też podziału na klastry — wymagany podział z Etapu 9.

---

## 6. Dane strukturalne (stan obecny)

JSON-LD jest wstrzykiwany **inline** przez `<script type="application/ld+json" dangerouslySetInnerHTML>`, nie ma komponentu ani biblioteki schematów.

| Miejsce | Typy | Uwagi |
|---|---|---|
| `app/[slug]/page.tsx` (wpis) | `Article` + `BreadcrumbList` (+ `LocalBusiness` z `aggregateRating`, gdy `caseRating`) | `author` = **Organization**, nie `Person` — brak encji autora; `dateModified` = `datePublished`; brak `about`/`sameAs` encji GBP |
| `app/[slug]/page.tsx` (słownik) | `DefinedTerm` | — |
| `app/blog/content.tsx` | ~15 bloków `<script type="application/ld+json">` **wewnątrz treści artykułów** oraz ~dziesiątki bloków `<pre>` z przykładami kodu JSON-LD | te w `<pre>` to materiał dydaktyczny, nie schema strony — skrypt inwentaryzacyjny musi je odróżniać |
| `app/layout.tsx` | **brak** | `Organization` nie jest zadeklarowana globalnie — do dodania w Etapie 7 |

---

## 7. Linkowanie wewnętrzne

Trzy niezależne mechanizmy:

1. **Ręczne linki w treści** — `<Link href="/…">` w `app/blog/content.tsx`: **1 042 wystąpienia**. To jest właściwy graf tematyczny. Najczęstsze cele:
   `/jak-dodac-local-schema-do-strony` (85), `/blog` (60), `/nap-wizytowka-google-co-to-jest` (45), `/opinie-google-jak-zdobywac-skutecznie` (44), `/opis-firmy-google-business-profile-jak-napisac` (38), `/uslugi-wizytowka-google-business` (37), `/kategorie-wizytowka-google` (36), `/jak-pozycjonowac-wizytowke-google-2026` (36).
2. **„Podobne wpisy"** — automat w `app/[slug]/page.tsx`: 3 wpisy z **tej samej kategorii**, fallback do 3 dowolnych. Przy kategorii „SEO" liczącej 117 wpisów ten mechanizm jest praktycznie losowy i nie buduje klastrów.
3. **Sidebar / CTA / stopka** — linki nawigacyjne, nie tematyczne.

Brak komponentu linkowania klastrowego, brak breadcrumbów opartych na taksonomii (breadcrumb jest sztywny: Strona główna / Blog / tytuł).

---

## 8. Kategorie

Kategorie to **union type w kodzie**, nie encja z własną stroną:

```ts
type Category = "SEO" | "Opinie" | "Poradnik" | "Wizytówka" | "WordPress" | "Sztuczna Inteligencja";
```

Rozkład (169 wpisów, wszystkie `published: true`):

| Kategoria | Wpisów |
|---|---|
| SEO | **117** |
| Poradnik | 19 |
| Wizytówka | 12 |
| WordPress | 10 |
| Opinie | 7 |
| Sztuczna Inteligencja | 4 |

Filtrowanie: `components/blog/BlogFilter.tsx` (client-side, bez URL-i kategorii). **Kategorie nie mają własnych adresów** — nie ma czego przekierowywać przy zmianie taksonomii, ale też nie ma dziś żadnych hubów.

Flagi: `pinBottom: true` — **100 wpisów** (seria miast), `hideFromBlog: true` — 3, `caseRating` — 2.

---

## 9. Lista nietykalna — zidentyfikowana i zabezpieczona

Utworzono `.seo-protected` oraz `docs/seo/protected-baseline.json` (hashe bazowe) i `scripts/seo/protected-hash.mjs` (snapshot/weryfikacja).

| URL | Gdzie fizycznie leży | Hash bloku (baseline) |
|---|---|---|
| `/miauseo-opinie-skup-aut` | `content.tsx` L19159 (136 linii) + `posts.ts` L452 | `b83daf07…` / `04796e65…` |
| `/miauseo-opinie-mobilny-masaz` | `content.tsx` L19295 (78 linii) + `posts.ts` L475 | `d27a4e76…` / `d62926ce…` |
| `/miauseo-opinie-skup` | `content.tsx` L19373 (132 linie) + `posts.ts` L486 | `f957c26f…` / `717a2fc3…` |
| `/miauseo-opinie-protetyk` | `content.tsx` L19505 (121 linii) + `posts.ts` L497 | `cace6fd1…` / `7bdbda0b…` |
| `/referencje` | `app/referencje/page.tsx` (179 linii) — **osobna trasa** | `07893405…` |

Wzorce `**/miauseo-opinie-*` i `**/miauseo-*`: dziś pasują wyłącznie te 4 slugi. Żadna inna trasa ani rekord nie zaczyna się od `miauseo`.

**Ryzyko do świadomej akceptacji:** cztery strony brandowe siedzą w tych samych plikach, co ~165 stron przeznaczonych do przebudowy. Ochrona musi być realizowana **na poziomie bloku rekordu**, nie pliku — każdy skrypt masowy dostanie twardy filtr po kluczu slug, a `scripts/seo/protected-hash.mjs` porówna hashe przed i po każdej operacji.

---

## 10. Przekierowania — stan obecny

| Gdzie | Co |
|---|---|
| `vercel.json` | `www.miauseo.pl/*` → `https://miauseo.pl/$1`, `permanent: true` |
| `app/blog/[slug]/page.tsx` | runtime `redirect('/{slug}')` — stare adresy `/blog/{slug}` |
| `next.config.ts` | **brak sekcji `redirects()`** |

Nie ma `redirects.json`. Struktura z promptu (jedno źródło prawdy + `next.config` mapujący) jest do utworzenia w Etapie 3 — **żadnych przekierowań jeszcze nie dodano**.

---

## 11. Rozbieżności wobec Twojej diagnozy

| Twoja diagnoza | Stan faktyczny |
|---|---|
| ~166 stron blogowych | **169** wpisów, wszystkie `published: true` |
| ~100 stron miast | **101** slugów `pozycjonowanie-wizytowki-google-*`, z czego 100 ma `pinBottom: true` |
| Kategoria SEO = 117 | **potwierdzone: 117** |
| WordPress 10, AI 4 | **potwierdzone: 10 i 4** |
| Wpisy płasko w roocie | **potwierdzone** — wszystkie pod `/{slug}` |
| Treść w plikach MDX | **nie** — TypeScript: `posts.ts` + `content.tsx` |

Dodatkowo, spoza Twojej listy: **131 haseł słownika** i **51 stron pytań** dzielą przestrzeń URL z wpisami (słownik częściowo w roocie, częściowo pod `/slownik/`). To osobna warstwa treści, którą trzeba objąć inwentaryzacją w Etapie 1, bo bierze udział w kanibalizacji i linkowaniu.

---

## 12. Stan roboczy gałęzi

Na `master` były **niezacommitowane zmiany** w 3 plikach, które przeszły na nową gałąź:

```
 M app/referencje/page.tsx      ← plik z listy nietykalnej
 M components/home/DoradztwoCTA.tsx
 M components/home/HeroLeadForm.tsx
```

`app/referencje/page.tsx` jest na liście nietykalnej, a jego wersja robocza różni się od `master` (hash `master`: `47b4c81f…`, hash roboczy: `07893405…`). **To zmiany sprzed rozpoczęcia tej pracy — nie moje.** Baseline do porównań w Etapie 9 wzięty z **working tree**, nie z `master`, żeby te zmiany nie zostały fałszywie zgłoszone jako naruszenie. Do decyzji: czy zacommitować je na `master` przed dalszą pracą.
