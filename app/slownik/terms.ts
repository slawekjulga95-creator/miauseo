export type Term = {
  slug: string;
  term: string;
  shortDesc: string;
  letter: string;
};

export const terms: Term[] = [
  // A
  { slug: "ab-testing", term: "A/B Testing", shortDesc: "Metoda testowania dwóch wersji strony, reklamy lub elementu, by sprawdzić która lepiej konwertuje użytkowników.", letter: "A" },
  { slug: "adrank", term: "AdRank", shortDesc: "Wskaźnik Google Ads określający pozycję reklamy w wynikach płatnych, oparty na stawce CPC i wyniku jakości.", letter: "A" },
  { slug: "ai-overviews", term: "AI Overviews", shortDesc: "Generowane przez AI odpowiedzi wyświetlane na górze wyników Google, które syntetyzują informacje z wielu stron.", letter: "A" },
  { slug: "algorytm-google", term: "Algorytm Google", shortDesc: "Zbiór reguł i czynników, według których Google ocenia i rankinguje strony internetowe w wynikach wyszukiwania.", letter: "A" },
  { slug: "amp", term: "AMP (Accelerated Mobile Pages)", shortDesc: "Technologia Google przyspieszająca ładowanie stron mobilnych poprzez uproszczony kod HTML i buforowanie przez CDN.", letter: "A" },
  { slug: "anchor-text", term: "Anchor Text", shortDesc: "Widoczny, klikalny tekst hiperłącza. Anchor text informuje wyszukiwarki o tematyce strony, do której prowadzi link.", letter: "A" },
  { slug: "atrybut-alt", term: "Atrybut Alt", shortDesc: "Opis tekstowy obrazu w kodzie HTML. Pomaga wyszukiwarkom zrozumieć zawartość zdjęcia i poprawia dostępność strony.", letter: "A" },
  { slug: "autorytet-domeny", term: "Autorytet Domeny (DA)", shortDesc: "Metryka Moz (0–100) przewidująca siłę domeny w wynikach wyszukiwania, oparta głównie na profilu linków zewnętrznych.", letter: "A" },

  // B
  { slug: "backlink", term: "Backlink", shortDesc: "Link z zewnętrznej strony prowadzący do Twojej witryny. Backlinki z autorytatywnych źródeł są jednym z kluczowych czynników rankingowych.", letter: "B" },
  { slug: "black-hat-seo", term: "Black Hat SEO", shortDesc: "Nieetyczne techniki pozycjonowania naruszające wytyczne Google, np. cloaking, kupowanie linków, keyword stuffing. Grożą penalizacją.", letter: "B" },
  { slug: "bounce-rate", term: "Bounce Rate", shortDesc: "Procent sesji, w których użytkownik opuścił stronę bez wykonania żadnej akcji. Wysoki wskaźnik może sygnalizować nieodpowiednią treść.", letter: "B" },
  { slug: "brand-bidding", term: "Brand Bidding", shortDesc: "Licytowanie na słowa kluczowe będące nazwą marki — własnej lub konkurencji — w kampaniach Google Ads.", letter: "B" },
  { slug: "breadcrumbs", term: "Breadcrumbs", shortDesc: "Nawigacja okruszkowa pokazująca ścieżkę do bieżącej strony. Poprawia UX i pomaga wyszukiwarkom zrozumieć strukturę witryny.", letter: "B" },
  { slug: "broad-match", term: "Broad Match", shortDesc: "Typ dopasowania słów kluczowych w Google Ads, który wyświetla reklamy dla szerokiego zakresu powiązanych zapytań.", letter: "B" },

  // C
  { slug: "canonical-url", term: "Canonical URL", shortDesc: "Tag informujący wyszukiwarki, która wersja adresu URL jest preferowaną, eliminując problemy z duplikacją treści.", letter: "C" },
  { slug: "cloaking", term: "Cloaking", shortDesc: "Black hat SEO polegający na pokazywaniu innej treści robotom wyszukiwarek niż użytkownikom. Narusza wytyczne Google i grozi banem.", letter: "C" },
  { slug: "content-marketing", term: "Content Marketing", shortDesc: "Strategia marketingowa oparta na tworzeniu i dystrybucji wartościowych treści, która przyciąga i angażuje docelową grupę odbiorców.", letter: "C" },
  { slug: "conversion-rate", term: "Conversion Rate", shortDesc: "Procent użytkowników, którzy wykonali pożądaną akcję (zakup, formularz, zapis). CR = konwersje / sesje × 100%.", letter: "C" },
  { slug: "core-web-vitals", term: "Core Web Vitals", shortDesc: "Zestaw wskaźników Google mierzących UX: LCP (ładowanie), INP (interaktywność) i CLS (stabilność layoutu). Wpływają na ranking.", letter: "C" },
  { slug: "cpa", term: "CPA (Cost Per Action)", shortDesc: "Koszt uzyskania jednej konwersji w kampanii reklamowej. CPA = całkowity koszt kampanii / liczba konwersji.", letter: "C" },
  { slug: "cpc", term: "CPC (Cost Per Click)", shortDesc: "Koszt jednego kliknięcia w reklamę. Model rozliczeń PPC, w którym płacisz tylko za faktyczne wejścia na stronę.", letter: "C" },
  { slug: "cpm", term: "CPM (Cost Per Mille)", shortDesc: "Koszt tysiąca wyświetleń reklamy. Model rozliczeń stosowany głównie w kampaniach zasięgowych i display.", letter: "C" },
  { slug: "crawlowanie", term: "Crawlowanie", shortDesc: "Proces automatycznego przeglądania stron przez roboty wyszukiwarek (Googlebot). Crawlowanie poprzedza indeksowanie.", letter: "C" },
  { slug: "ctr", term: "CTR (Click-Through Rate)", shortDesc: "Wskaźnik klikalności: stosunek kliknięć do wyświetleń. Wysoki CTR w SERP sygnalizuje Google relevantność strony.", letter: "C" },

  // D
  { slug: "deep-linking", term: "Deep Linking", shortDesc: "Linkowanie do konkretnych podstron serwisu (nie tylko strony głównej), poprawiające dystrybucję link juice i indeksowanie.", letter: "D" },
  { slug: "disavow", term: "Disavow", shortDesc: "Narzędzie Google Search Console pozwalające odrzucić toksyczne linki przychodzące, które mogą szkodzić rankingowi.", letter: "D" },
  { slug: "display-ads", term: "Display Ads", shortDesc: "Reklamy graficzne (banery, wideo) wyświetlane w sieci reklamowej Google na milionach stron partnerskich.", letter: "D" },
  { slug: "dofollow", term: "Dofollow", shortDesc: "Standardowy typ linku, który przekazuje autorytet (link juice) do linkowanej strony i jest brany pod uwagę przez Google.", letter: "D" },
  { slug: "domain-authority", term: "Domain Authority", shortDesc: "Metryka (Moz, 0–100) przewidująca, jak silna jest domena w wynikach organicznych. Im wyższy DA, tym silniejszy profil linków.", letter: "D" },
  { slug: "domain-rating", term: "Domain Rating", shortDesc: "Metryka Ahrefs (0–100) oceniająca siłę profilu linków zewnętrznych domeny w porównaniu do innych witryn.", letter: "D" },
  { slug: "duplicate-content", term: "Duplicate Content", shortDesc: "Identyczna lub bardzo podobna treść występująca na wielu adresach URL. Może rozmywać sygnały rankingowe i powodować problemy z indeksowaniem.", letter: "D" },

  // E
  { slug: "e-e-a-t", term: "E-E-A-T", shortDesc: "Skrót od Experience, Expertise, Authoritativeness, Trustworthiness — kryteria oceny jakości treści przez Google Quality Raters.", letter: "E" },
  { slug: "engagement-rate", term: "Engagement Rate", shortDesc: "Wskaźnik zaangażowania mierzący, jak aktywnie użytkownicy wchodzą w interakcję z treścią — komentarze, udostępnienia, czas na stronie.", letter: "E" },
  { slug: "exact-match", term: "Exact Match", shortDesc: "Dopasowanie ścisłe w Google Ads — reklama wyświetla się tylko przy zapytaniach identycznych lub bardzo zbliżonych do słowa kluczowego.", letter: "E" },
  { slug: "external-link", term: "External Link", shortDesc: "Hiperłącze prowadzące z Twojej strony do zewnętrznej domeny. Linki do autorytatywnych źródeł mogą pozytywnie wpływać na E-E-A-T.", letter: "E" },

  // F
  { slug: "featured-snippet", term: "Featured Snippet", shortDesc: "Wyróżniony fragment odpowiedzi wyświetlany w pozycji zero w SERP, bezpośrednio pod paskiem wyszukiwania Google.", letter: "F" },
  { slug: "frequency", term: "Frequency (częstotliwość)", shortDesc: "Średnia liczba wyświetleń reklamy dla jednego użytkownika w danym czasie. Ważny wskaźnik w kampaniach zasięgowych.", letter: "F" },
  { slug: "funnel", term: "Funnel (Lejek sprzedażowy)", shortDesc: "Model opisujący drogę klienta od pierwszego kontaktu z marką do konwersji: świadomość → zainteresowanie → decyzja → zakup.", letter: "F" },

  // G
  { slug: "geotargeting", term: "Geotargeting", shortDesc: "Targetowanie reklam lub treści do użytkowników w określonej lokalizacji geograficznej — kraju, mieście, promieniu od punktu.", letter: "G" },
  { slug: "google-ads", term: "Google Ads", shortDesc: "Platforma reklamowa Google umożliwiająca wyświetlanie reklam w wyszukiwarce, YouTube, sieci Display i innych usługach Google.", letter: "G" },
  { slug: "google-analytics", term: "Google Analytics", shortDesc: "Bezpłatne narzędzie Google do analizy ruchu na stronie: źródła odwiedzin, zachowanie użytkowników, konwersje i ścieżki.", letter: "G" },
  { slug: "google-business-profile", term: "Google Business Profile", shortDesc: "Bezpłatny profil firmowy w Google (dawniej Google Moja Firma). Podstawa lokalnego SEO i widoczności w Google Maps.", letter: "G" },
  { slug: "google-discover", term: "Google Discover", shortDesc: "Feed treści w aplikacji Google na mobile, który personalizuje artykuły na podstawie historii wyszukiwań i zainteresowań użytkownika.", letter: "G" },
  { slug: "google-search-console", term: "Google Search Console", shortDesc: "Bezpłatne narzędzie Google do monitorowania obecności witryny w wyszukiwarce: pozycje, indeksowanie, błędy crawlowania.", letter: "G" },
  { slug: "google-tag-manager", term: "Google Tag Manager", shortDesc: "System zarządzania tagami pozwalający dodawać i aktualizować skrypty analityczne i marketingowe bez edycji kodu strony.", letter: "G" },
  { slug: "googlebot", term: "Googlebot", shortDesc: "Robot indeksujący Google, który skanuje strony internetowe, zbiera informacje i przekazuje je do indeksu wyszukiwarki.", letter: "G" },
  { slug: "gray-hat-seo", term: "Gray Hat SEO", shortDesc: "Techniki SEO balansujące na granicy wytycznych Google — ryzykowne, ale nieklasyfikowane jednoznacznie jako black hat.", letter: "G" },

  // H
  { slug: "heading-tags", term: "Heading Tags (H1–H6)", shortDesc: "Tagi nagłówków HTML określające hierarchię treści. H1 to główny tytuł strony, H2–H6 to nagłówki podrzędne.", letter: "H" },
  { slug: "hreflang", term: "Hreflang", shortDesc: "Atrybut HTML informujący Google o języku i regionie docelowym strony, kluczowy dla witryn wielojęzycznych.", letter: "H" },
  { slug: "https", term: "HTTPS / SSL", shortDesc: "Protokół szyfrowanej komunikacji między przeglądarką a serwerem. Posiadanie certyfikatu SSL jest czynnikiem rankingowym Google.", letter: "H" },
  { slug: "hyperlink", term: "Hiperłącze", shortDesc: "Klikalny element nawigacyjny prowadzący do innego zasobu w sieci. Fundamentalny element architektury informacji i link buildingu.", letter: "H" },

  // I
  { slug: "impressions", term: "Impressions (Wyświetlenia)", shortDesc: "Liczba wyświetleń strony lub reklamy w wynikach wyszukiwania. Jeden z podstawowych wskaźników widoczności w GSC i Google Ads.", letter: "I" },
  { slug: "inbound-link", term: "Inbound Link", shortDesc: "Link przychodzący z zewnętrznej strony do Twojej witryny. Synonim backlinku — jeden z najważniejszych czynników off-page SEO.", letter: "I" },
  { slug: "indeksowanie", term: "Indeksowanie", shortDesc: "Proces zapisywania przeskanowanych przez Googlebot stron do indeksu Google. Tylko zindeksowane strony mogą pojawiać się w SERP.", letter: "I" },
  { slug: "intencja-wyszukiwania", term: "Intencja Wyszukiwania", shortDesc: "Cel, który użytkownik chce osiągnąć wpisując frazę w wyszukiwarkę: informacyjna, nawigacyjna, transakcyjna lub komercyjna.", letter: "I" },
  { slug: "internal-linking", term: "Internal Linking", shortDesc: "Sieć wewnętrznych hiperłączy między podstronami witryny. Poprawia indeksowanie, dystrybuuje autorytet i ułatwia nawigację.", letter: "I" },

  // J
  { slug: "javascript-seo", term: "JavaScript SEO", shortDesc: "Optymalizacja stron opartych na JS (React, Vue, Angular), tak by roboty Google mogły poprawnie renderować i indeksować ich treść.", letter: "J" },
  { slug: "json-ld", term: "JSON-LD", shortDesc: "Format danych strukturalnych rekomendowany przez Google, wstawiany w znaczniku <script> — opisuje zawartość strony dla robotów.", letter: "J" },

  // K
  { slug: "keyword", term: "Keyword (Słowo kluczowe)", shortDesc: "Fraza lub wyrażenie wpisywane przez użytkownika w wyszukiwarkę. Dobór słów kluczowych to fundament każdej strategii SEO.", letter: "K" },
  { slug: "keyword-density", term: "Keyword Density", shortDesc: "Zagęszczenie słowa kluczowego w tekście. Zbyt wysokie (keyword stuffing) jest penalizowane przez Google.", letter: "K" },
  { slug: "keyword-research", term: "Keyword Research", shortDesc: "Analiza i dobór fraz kluczowych do strategii SEO — ocena wolumenu, trudności i intencji wyszukiwania.", letter: "K" },
  { slug: "keyword-stuffing", term: "Keyword Stuffing", shortDesc: "Nieetyczna praktyka nadmiernego upychania słów kluczowych w treści. Penalizowana przez algorytm Panda.", letter: "K" },
  { slug: "knowledge-graph", term: "Knowledge Graph", shortDesc: "Baza wiedzy Google łącząca encje (osoby, miejsca, marki) i ich relacje, zasilająca Knowledge Panel i odpowiedzi bezpośrednie.", letter: "K" },
  { slug: "knowledge-panel", term: "Knowledge Panel", shortDesc: "Karta informacyjna po prawej stronie SERP z danymi o marce, osobie lub miejscu, pobierana z Knowledge Graph Google.", letter: "K" },
  { slug: "kpi", term: "KPI (Key Performance Indicator)", shortDesc: "Kluczowy wskaźnik efektywności — mierzalna wartość służąca do oceny postępów w realizacji celów kampanii SEO/SEM.", letter: "K" },

  // L
  { slug: "landing-page", term: "Landing Page", shortDesc: "Dedykowana strona docelowa zoptymalizowana pod konkretną akcję użytkownika — zazwyczaj formularz, zakup lub pobranie.", letter: "L" },
  { slug: "link-building", term: "Link Building", shortDesc: "Działania mające na celu pozyskiwanie wartościowych linków zewnętrznych do witryny, wzmacniające autorytet domeny.", letter: "L" },
  { slug: "link-juice", term: "Link Juice", shortDesc: "Autorytet i wartość rankingowa przekazywana przez hyperłącze z jednej strony do drugiej.", letter: "L" },
  { slug: "local-pack", term: "Local Pack", shortDesc: "Wyróżniony blok z mapą i 3 firmami lokalnymi w wynikach Google — tzw. top 3. Kluczowy cel pozycjonowania lokalnego.", letter: "L" },
  { slug: "local-seo", term: "Local SEO", shortDesc: "Pozycjonowanie lokalne — zestaw działań zwiększających widoczność firmy w wynikach wyszukiwania dla zapytań z lokalizacją.", letter: "L" },
  { slug: "long-tail-keyword", term: "Long-tail Keyword", shortDesc: "Długa, szczegółowa fraza kluczowa (3+ słów) o niższym wolumenie, ale wyższej intencji zakupowej i mniejszej konkurencji.", letter: "L" },
  { slug: "lsi", term: "LSI (Latent Semantic Indexing)", shortDesc: "Technika identyfikowania powiązanych semantycznie słów. Treści bogate w słowa LSI lepiej odpowiadają na intencję wyszukiwania.", letter: "L" },

  // M
  { slug: "meta-description", term: "Meta Description", shortDesc: "Krótki opis strony (do 160 znaków) wyświetlany pod tytułem w SERP. Nie wpływa bezpośrednio na ranking, ale poprawia CTR.", letter: "M" },
  { slug: "meta-title", term: "Meta Title", shortDesc: "Tytuł strony wyświetlany w zakładce przeglądarki i w SERP. Jeden z najsilniejszych on-page czynników rankingowych.", letter: "M" },
  { slug: "mobile-first-indexing", term: "Mobile-First Indexing", shortDesc: "Podejście Google, w którym mobilna wersja strony jest podstawą do indeksowania i rankingowania, a nie wersja desktopowa.", letter: "M" },

  // N
  { slug: "nap", term: "NAP (Name, Address, Phone)", shortDesc: "Nazwa firmy, adres i telefon — trzy dane, które muszą być spójne wszędzie w sieci. Fundament lokalnego SEO.", letter: "N" },
  { slug: "natural-link", term: "Natural Link", shortDesc: "Link pozyskany organicznie, bez działań link buildingowych — bo inna strona uznała Twoją treść za wartościową.", letter: "N" },
  { slug: "negative-keyword", term: "Negative Keyword", shortDesc: "Wykluczające słowo kluczowe w Google Ads — zapobiega wyświetlaniu reklamy przy zapytaniach niezwiązanych z ofertą.", letter: "N" },
  { slug: "nofollow", term: "Nofollow", shortDesc: "Atrybut linku informujący roboty, że nie powinny przekazywać autorytetu do linkowanej strony.", letter: "N" },
  { slug: "noindex", term: "Noindex", shortDesc: "Dyrektywa w meta tagach lub nagłówku HTTP mówiąca Googlebotowi, by nie indeksował danej strony.", letter: "N" },

  // O
  { slug: "off-page-seo", term: "Off-Page SEO", shortDesc: "Działania SEO poza własną stroną — link building, cytowania, social signals, wzmianki o marce. Buduje autorytet domeny.", letter: "O" },
  { slug: "on-page-seo", term: "On-Page SEO", shortDesc: "Optymalizacja elementów na stronie — treści, nagłówków, meta tagów, struktury URL, szybkości i internal linkingu.", letter: "O" },
  { slug: "organic-traffic", term: "Organic Traffic", shortDesc: "Ruch na stronie pochodzący z bezpłatnych wyników wyszukiwania — bez płatnych reklam. Główny cel działań SEO.", letter: "O" },
  { slug: "orphan-page", term: "Orphan Page", shortDesc: "Strona, do której nie prowadzą żadne linki wewnętrzne. Trudna do odkrycia przez Googlebot i użytkowników.", letter: "O" },
  { slug: "outbound-link", term: "Outbound Link", shortDesc: "Link prowadzący z Twojej strony do zewnętrznej witryny. Linki do wiarygodnych źródeł mogą pozytywnie wpływać na E-E-A-T.", letter: "O" },

  // P
  { slug: "pagerank", term: "PageRank", shortDesc: "Oryginalny algorytm Google oceniający autorytet strony na podstawie liczby i jakości prowadzących do niej linków.", letter: "P" },
  { slug: "page-speed", term: "Page Speed", shortDesc: "Szybkość ładowania strony — jeden z czynników rankingowych Google. Mierzona m.in. przez Core Web Vitals.", letter: "P" },
  { slug: "panda", term: "Panda (Algorytm)", shortDesc: "Aktualizacja Google penalizująca niskiej jakości, cienkie treści, duplicate content i keyword stuffing.", letter: "P" },
  { slug: "penguin", term: "Penguin (Algorytm)", shortDesc: "Aktualizacja Google penalizująca nienaturalne profile linków — kupowane, spamowe i manipulacyjne backlinki.", letter: "P" },
  { slug: "performance-max", term: "Performance Max", shortDesc: "Typ kampanii Google Ads automatycznie wyświetlający reklamy we wszystkich kanałach Google przy pomocy machine learning.", letter: "P" },
  { slug: "permalink", term: "Permalink", shortDesc: "Stały adres URL strony lub wpisu. Dobry permalink jest krótki, opisowy i zawiera słowo kluczowe.", letter: "P" },
  { slug: "pozycjonowanie", term: "Pozycjonowanie (SEO)", shortDesc: "Działania mające na celu poprawę pozycji strony w organicznych wynikach wyszukiwania Google i innych wyszukiwarek.", letter: "P" },
  { slug: "ppc", term: "PPC (Pay Per Click)", shortDesc: "Model reklamy internetowej, w którym płacisz wyłącznie za kliknięcia. Stosowany w Google Ads, Meta Ads, Bing Ads.", letter: "P" },

  // Q
  { slug: "quality-score", term: "Quality Score", shortDesc: "Ocena jakości (1–10) w Google Ads na podstawie CTR, trafności reklamy i jakości strony docelowej. Wpływa na CPC i pozycję.", letter: "Q" },
  { slug: "query", term: "Query (Zapytanie)", shortDesc: "Fraza wpisana przez użytkownika w pole wyszukiwania. Analiza zapytań w GSC to podstawa optymalizacji treści pod SEO.", letter: "Q" },
  { slug: "quick-win", term: "Quick Win", shortDesc: "Działanie SEO przynoszące szybkie, mierzalne efekty przy stosunkowo niskim nakładzie pracy.", letter: "Q" },

  // R
  { slug: "redirect-301", term: "Redirect 301", shortDesc: "Trwałe przekierowanie URL informujące Googlebot, że strona przeniesiona jest na stałe. Przekazuje ~99% link juice.", letter: "R" },
  { slug: "redirect-302", term: "Redirect 302", shortDesc: "Tymczasowe przekierowanie URL. Przekazuje mniej link juice niż 301 i może dezorientować Googlebot przy długim stosowaniu.", letter: "R" },
  { slug: "remarketing", term: "Remarketing", shortDesc: "Technika reklamowa polegająca na ponownym dotarciu do użytkowników, którzy wcześniej odwiedzili Twoją stronę lub aplikację.", letter: "R" },
  { slug: "rich-snippet", term: "Rich Snippet", shortDesc: "Rozszerzony wynik w SERP ze szczegółowymi danymi (gwiazdki, ceny, daty) generowanymi przez dane strukturalne Schema.", letter: "R" },
  { slug: "robots-txt", term: "Robots.txt", shortDesc: "Plik tekstowy w katalogu głównym witryny, który instruuje roboty wyszukiwarek, które strony mogą lub nie mogą crawlować.", letter: "R" },
  { slug: "roas", term: "ROAS (Return on Ad Spend)", shortDesc: "Zwrot z wydatków reklamowych. ROAS = przychód z reklam / koszt reklam × 100%. Kluczowy wskaźnik efektywności kampanii.", letter: "R" },
  { slug: "roi", term: "ROI (Return on Investment)", shortDesc: "Zwrot z inwestycji. ROI = (zysk – koszt) / koszt × 100%. Mierzy ogólną opłacalność działań marketingowych.", letter: "R" },

  // S
  { slug: "schema-markup", term: "Schema Markup", shortDesc: "Kod danych strukturalnych dodawany do strony, pomagający Google zrozumieć jej zawartość i wyświetlać rich snippety.", letter: "S" },
  { slug: "search-intent", term: "Search Intent", shortDesc: "Intencja wyszukiwania — cel, który użytkownik chce osiągnąć. Typy: informacyjna, nawigacyjna, transakcyjna, komercyjna.", letter: "S" },
  { slug: "sem", term: "SEM (Search Engine Marketing)", shortDesc: "Marketing w wyszukiwarkach obejmujący zarówno działania SEO (organiczne), jak i PPC (płatne kampanie Google Ads).", letter: "S" },
  { slug: "seo", term: "SEO (Search Engine Optimization)", shortDesc: "Optymalizacja pod kątem wyszukiwarek — zestaw działań zwiększających widoczność strony w organicznych wynikach Google.", letter: "S" },
  { slug: "serp", term: "SERP (Search Engine Results Page)", shortDesc: "Strona wyników wyszukiwania Google zawierająca wyniki organiczne, płatne reklamy, mapy, featured snippety i inne formaty.", letter: "S" },
  { slug: "sitemap-xml", term: "Sitemap XML", shortDesc: "Plik XML zawierający listę wszystkich ważnych URL witryny, ułatwiający Googlebotowi odkrywanie i indeksowanie stron.", letter: "S" },
  { slug: "sitelinks", term: "Sitelinks", shortDesc: "Dodatkowe linki do podstron wyświetlane pod głównym wynikiem wyszukiwania dla nazwy marki. Wyświetlane automatycznie przez Google.", letter: "S" },
  { slug: "slug", term: "Slug", shortDesc: "Końcowa część adresu URL identyfikująca konkretną stronę (np. /pozycjonowanie-wizytowki-google). Powinien być krótki i opisowy.", letter: "S" },
  { slug: "social-signals", term: "Social Signals", shortDesc: "Aktywność na mediach społecznościowych (udostępnienia, polubienia) pośrednio wpływająca na widoczność w wyszukiwarkach.", letter: "S" },
  { slug: "spam-score", term: "Spam Score", shortDesc: "Metryka Moz (0–17) oceniająca ryzyko, że strona zostanie uznana za spam przez Google. Im niższy, tym bezpieczniej.", letter: "S" },
  { slug: "structured-data", term: "Structured Data", shortDesc: "Ustrukturyzowane dane opisujące treść strony w formacie zrozumiałym dla robotów — JSON-LD, Microdata lub RDFa.", letter: "S" },

  // T
  { slug: "technical-seo", term: "Technical SEO", shortDesc: "Techniczne aspekty optymalizacji strony: szybkość, crawlowanie, indeksowanie, HTTPS, dane strukturalne, Core Web Vitals.", letter: "T" },
  { slug: "thin-content", term: "Thin Content", shortDesc: "Cienka treść — strony z małą ilością wartościowego tekstu, penalizowane przez algorytm Panda za niską jakość.", letter: "T" },
  { slug: "title-tag", term: "Title Tag", shortDesc: "Meta tytuł strony widoczny w wynikach wyszukiwania i zakładce przeglądarki. Najważniejszy on-page czynnik rankingowy.", letter: "T" },
  { slug: "trustrank", term: "TrustRank", shortDesc: "Algorytm oceniający wiarygodność strony na podstawie dystansu od zaufanych źródeł (np. rządowych, akademickich).", letter: "T" },

  // U
  { slug: "unique-content", term: "Unique Content", shortDesc: "Treść oryginalna, niepowielana z innych źródeł. Kluczowy wymóg Google — duplikat treści szkodzi widoczności.", letter: "U" },
  { slug: "url", term: "URL (Uniform Resource Locator)", shortDesc: "Adres internetowy identyfikujący zasoby w sieci. SEO-friendly URL jest krótki, zawiera słowa kluczowe i unika zbędnych parametrów.", letter: "U" },
  { slug: "user-experience", term: "UX (User Experience)", shortDesc: "Doświadczenie użytkownika podczas korzystania z witryny. Dobry UX redukuje bounce rate i pozytywnie wpływa na ranking.", letter: "U" },
  { slug: "user-signals", term: "User Signals", shortDesc: "Sygnały zachowania użytkowników (CTR, czas na stronie, scroll depth) pośrednio wpływające na pozycję w wynikach Google.", letter: "U" },

  // V
  { slug: "visibility-score", term: "Visibility Score", shortDesc: "Wskaźnik widoczności organicznej domeny w narzędziach SEO (Semrush, Sistrix) — odsetek potencjalnych kliknięć z top pozycji.", letter: "V" },
  { slug: "voice-search", term: "Voice Search", shortDesc: "Wyszukiwanie głosowe przez asystentów (Google, Siri). Wymaga optymalizacji pod frazy konwersacyjne i długoogonowe.", letter: "V" },

  // W
  { slug: "white-hat-seo", term: "White Hat SEO", shortDesc: "Etyczne techniki SEO zgodne z wytycznymi Google, oparte na wartościowych treściach i naturalnym link buildingu.", letter: "W" },
  { slug: "widocznosc-organiczna", term: "Widoczność Organiczna", shortDesc: "Odsetek użytkowników, którzy potencjalnie mogą kliknąć w wyniki organiczne witryny dla monitorowanych słów kluczowych.", letter: "W" },
  { slug: "wskaznik-odrzucen", term: "Wskaźnik Odrzuceń", shortDesc: "Procent sesji jednosstronicowych — użytkownik wchodzi i wychodzi bez interakcji. Wysoki wskaźnik może sygnalizować problemy z UX.", letter: "W" },

  // Z
  { slug: "zasieg-organiczny", term: "Zasięg Organiczny", shortDesc: "Liczba unikalnych użytkowników, do których dociera treść bez płatnej promocji — przez SEO, social media lub direct.", letter: "Z" },
  { slug: "zaufanie-domeny", term: "Zaufanie Domeny", shortDesc: "Ocena wiarygodności i autorytetu domeny w oczach wyszukiwarek, budowana latami przez wartościowy content i linki.", letter: "Z" },
  { slug: "znaczniki-strukturalne", term: "Znaczniki Strukturalne", shortDesc: "Dane strukturalne (Schema.org) wbudowane w kod strony, pomagające Google wyświetlać rich snippety w wynikach wyszukiwania.", letter: "Z" },
];

export const LETTERS = [...new Set(terms.map(t => t.letter))].sort();

export function getTermBySlug(slug: string): Term | undefined {
  return terms.find(t => t.slug === slug);
}

export function getTermsByLetter(letter: string): Term[] {
  return terms.filter(t => t.letter === letter);
}
