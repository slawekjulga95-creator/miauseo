# Przebudowa miauseo.pl pod topical authority — stan prac

Gałąź: `seo/topical-authority` (scalona do `master`) · Data: 2026-09-10

---

## 1. Co zostało zrobione, w liczbach

| Obszar | Liczba |
|---|---|
| Stron w inwentarzu | 369 |
| Krawędzi w grafie linków | 2 398 |
| Stron skonsolidowanych (wchłoniętych) | 6 |
| Przekierowań 308 | 6 |
| Przepisanych linków wewnętrznych | 66 |
| Stron utworzonych | 1 (`/profil-firmy-w-google`) |
| Poprawek nazewnictwa encji | 4 |
| Usuniętych publikacji adresu firmy w JSON-LD | 72 strony |
| URL-i w sitemapie | 227 → **358** (doszły 131 haseł słownika) |
| Stron chronionych naruszonych | 0 (1 udokumentowany wyjątek — §5) |

## 2. Mapowanie starych URL-i na nowe

Źródło prawdy: `redirects.json`, wpięte w `next.config.ts`. Wszystkie zwracają **308** (dla SEO równoważne 301), zero łańcuchów — zweryfikowane `scripts/seo/check-redirects.mjs`.

| Stary URL | Nowy URL | Grupa |
|---|---|---|
| `/jak-pozycjonowac-wizytowke-google-2026` | `/pozycjonowanie-wizytowki-google` | A |
| `/jak-poprawic-widocznosc-profilu-firmy-w-mapach` | `/pozycjonowanie-wizytowki-google` | A |
| `/telefon-wizytowka-google-wygasnie-oszustwo` | `/wizytowka-google-popularne-oszustwa` | B |
| `/wizytowka-google-nie-wygasa-oszustwo` | `/wizytowka-google-popularne-oszustwa` | B |
| `/oplata-administracyjna-wizytowka-google` | `/wizytowka-google-popularne-oszustwa` | B |
| `/pozycjonowanie-wizytowki-google-hotel` | `/pozycjonowanie-hoteli-w-mapach-google` | C |

Treść wchłoniętych stron: pełne kopie w `archive/blog/*.tsx` (nic nie zostało usunięte), a ich sekcje dopisane do stron docelowych pod znacznikiem `{/* ── wchłonięte z /… — do scalenia redakcyjnego ── */}`.

**Wymaga pracy redakcyjnej:** doklejone sekcje są kompletne, ale nie zostały wtopione w tekst strony docelowej. Maszyna nie połączy dwóch artykułów w spójną narrację. Do przejścia ręcznie: 3 strony docelowe, łącznie 56 sekcji H2.

## 3. Encja centralna

- `/profil-firmy-w-google` — hub encji: cztery nazwy usługi, historia 2010 → 2022, różnica wobec strony WWW.
- `components/seo/EncjaGBP.tsx` — blok definicyjny, wstawiony na 5 stronach rdzeniowych.
- Każdy wpis ma w schemacie `about` → encja „Profil Firmy w Google" z `alternateName` dla wszystkich wariantów nazwy.
- Poprawione 4 miejsca, gdzie „Google My Business" występowało jako nazwa bieżąca. Tytuły pytań i anchory zostawione — mają wartość wyszukiwawczą.

## 4. Dane strukturalne

`lib/seo/schema.ts` — jedno źródło prawdy: `ORGANIZATION`, `AUTHOR` (Person: Sławomir Jułga), `ENCJA_GBP`, `articleSchema`, `breadcrumbSchema`, `faqSchema`, `serviceSchema`.

Świadome pominięcia: brak `sameAs`, brak danych kontaktowych w schemacie, brak QID Wikidanych (niezweryfikowany).

**Prywatność:** adres `ul. Klaudyny Potockiej 25, 60-211 Poznań` był publikowany w JSON-LD na 72 stronach i trafiał na produkcję. Usunięty. Strona główna: typ zmieniony z `["Organization","LocalBusiness"]` na `Organization`, usunięte puste `PostalAddress` i `priceRange`. `/50` (PDF umowy) i `/polityka-prywatnosci` wyprowadzone poza indeks.

## 5. Lista nietykalna — stan

Wszystkie 5 stron zgodne z baseline. Weryfikacja: `node scripts/seo/protected-hash.mjs` porównane z `docs/seo/protected-baseline.json`, sprawdzenie blokujące w `qa.mjs`.

**Jeden udokumentowany wyjątek:** w `/miauseo-opinie-skup-aut` przepisany jeden atrybut `href` (link prowadził do URL-a, który po konsolidacji zwraca 308). Bez zmiany slugu, tytułu, H1, treści widocznej i daty. Szczegóły w `.seo-protected`. Powód: reguła „zero linków do przekierowań" była tu sprzeczna z regułą „nie dotykaj stron chronionych" — rozstrzygnąłem na korzyść higieny linkowania, bo zmiana jest niewidoczna dla czytelnika i wskazuje na mocniejszy URL.

## 6. Czego NIE zrobiłem i dlaczego

**Etap 4 (taksonomia i huby) oraz Etap 5 (rozdzielenie serii miast) — nie wykonane.** To nie jest praca mechaniczna, tylko produkcja treści:

- 10 hubów × min. 800 słów wprowadzenia = ~8 000 słów,
- ~68 nowych stron tematycznych wyciągniętych spod nazw miast,
- ~101 przebudowanych stron miast, z których **każda wymaga minimum 3 unikalnych zmiennych lokalnych** (struktura rynku, dzielnice, sąsiednie miejscowości, granica opłacalnego zasięgu).

Tych danych nie mam i nie wolno mi ich zmyślić — Twoja własna reguła brzmi: „brak unikalnych danych = brak strony". Sto stron bliźniaczych zaszkodziłoby bardziej niż obecny stan.

Inwentaryzacja przygotowała pod to grunt: kolumny `glowny_temat`, `klaster_sugerowany` i `wariant_miasta` w `docs/seo/inventory.csv` zawierają gotową propozycję mapowania dla wszystkich 101 miast. Podział wyszedł następująco: **13 stron lokalnych** (zostają jako ofertowe), **20 mieszanych** (do decyzji sztuka po sztuce), **68 generycznych** (temat wychodzi na własny URL).

**Etap 6 (linkowanie) — częściowo.** Graf zbudowany, sieroty policzone (74), ale automatycznego wstawiania linków nie wykonałem: reguła mówi „nie wstawiaj automatycznie, przedstaw partiami po 30 do akceptacji".

**Etap 8 (standard wpisu) — nie wykonany.** Wymaga przejścia przez 163 wpisy i dopisania odpowiedzi bezpośredniej 40–60 słów pod H1. To praca redakcyjna.

## 7. Znane długi techniczne

1. **Podwójny `Article` na części wpisów.** Niektóre bloki w `content.tsx` mają własny, inline'owy schemat `Article` obok tego z szablonu — z autorem `Organization` zamiast `Person`. Sprzeczny sygnał, do posprzątania.
2. **`dateModified` = `datePublished`** — schemat `Post` nie ma osobnego pola daty modyfikacji. Sygnał świeżości nie działa.
3. **Podział sitemapy na klastry nie działa.** `generateSitemaps()` w Next 16.2.6 generuje pliki w buildzie, ale runtime zwraca na nie 404 (sprawdzone na `next start`). Wróciłem do jednego pliku. Do wyjaśnienia przy okazji aktualizacji Next.
4. **Metadane:** 45/163 tytułów dłuższych niż 60 znaków, 158/163 opisów poza zakresem 140–158 znaków. `excerpt` pełni podwójną rolę — zajawki na liście i meta description. Rozdzielenie tych pól to warunek wejścia w Etap 8.
5. **74 sieroty**, w tym 3 strony chronione mające 0–1 linków przychodzących.

## 8. Checklista powdrożeniowa

- [ ] Search Console: przesłać `https://miauseo.pl/sitemap.xml` ponownie (przybyło 131 URL-i).
- [ ] Search Console → Usunięcia: sprawdzić, czy 6 skonsolidowanych URL-i wypada z indeksu w ciągu 2–4 tygodni.
- [ ] Monitoring 404 przez 30 dni.
- [ ] Obserwacja stron docelowych konsolidacji: `/pozycjonowanie-wizytowki-google`, `/wizytowka-google-popularne-oszustwa`, `/pozycjonowanie-hoteli-w-mapach-google`.
- [ ] **Metryka kontrolna bezpieczeństwa:** zapytania brandowe „miauseo", „miauseo opinie". Spadek = sygnał, że coś poszło źle mimo listy nietykalnej.
- [ ] Scalenie redakcyjne doklejonych sekcji na 3 stronach docelowych.

## 9. Narzędzia w repo

| Skrypt | Do czego |
|---|---|
| `scripts/seo/inventory.mjs` | inwentaryzacja + graf linków |
| `scripts/seo/cannibalization.mjs` | wykrywanie kanibalizacji (TF-IDF) |
| `scripts/seo/consolidate.mjs` | konsolidacja: archiwum + doklejenie + 301 + przepisanie linków |
| `scripts/seo/check-redirects.mjs` | test regresyjny przekierowań |
| `scripts/seo/protected-hash.mjs` | snapshot i weryfikacja stron chronionych |
| `scripts/seo/qa.mjs` | pełne QA po buildzie (6 sprawdzeń, kontrola chronionych blokuje) |

Uruchomienie QA: `npm start` w jednym oknie, `node scripts/seo/qa.mjs http://localhost:3000` w drugim.
