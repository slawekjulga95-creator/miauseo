import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function AiOverviews() {
  return (
    <div className="prose-blog">

      <h2>Kontekst historyczny: jak Google doszło do AI Overviews</h2>
      <p>
        Przez ponad dwie dekady wyniki wyszukiwania Google miały praktycznie niezmienny kształt: niebieskie linki,
        snippety z opisem i — od 2013 roku — <Link href="/featured-snippet">featured snippety</Link> w pozycji zero.
        Punktem zwrotnym był maj 2023 roku, gdy Google ogłosiło Search Generative Experience (SGE) w fazie beta.
        W maju 2024 roku, na konferencji Google I/O, SGE oficjalnie zmieniło nazwę na <strong>AI Overviews</strong>
        i zostało wdrożone dla wszystkich użytkowników w USA. Do końca 2024 roku trafiło do kolejnych rynków,
        a w 2025 roku — do Polski i większości Europy.
      </p>
      <p>
        To największa zmiana w anatomii <Link href="/serp">strony wyników wyszukiwania</Link> od czasów wprowadzenia
        Local Packa (2015) i Featured Snippetów (2014). AI Overviews nie są wynikiem ewolucji — to rewolucja w modelu
        dystrybucji informacji, która wymaga gruntownego przemyślenia strategii <Link href="/seo">SEO</Link>.
      </p>

      <h2>Czym są AI Overviews?</h2>
      <p>
        <strong>AI Overviews</strong> to bloki generatywnych odpowiedzi wyświetlane na samej górze wyników Google —
        powyżej reklam, featured snippetów i organicznych wyników wyszukiwania. Są tworzone w czasie rzeczywistym
        przez model językowy Gemini, który syntezuje informacje z wielu stron internetowych i formułuje odpowiedź
        bezpośrednio w interfejsie wyszukiwarki.
      </p>
      <p>
        Kluczowa różnica w stosunku do <Link href="/featured-snippet">featured snippetów</Link>: snippet dosłownie
        cytuje fragment konkretnej strony. AI Overview generuje nową treść na podstawie wielu źródeł — podobnie
        jak odpowiedź eksperta, który przeczytał kilka artykułów i podsumowuje je własnymi słowami.
        Każde stwierdzenie jest podparte linkiem do źródła, który wyświetla się jako cytowalny minikafelek.
      </p>

      <h2>Jak działają AI Overviews — mechanizm pod maską</h2>
      <p>
        Google nie ujawniło pełnych technicznych szczegółów, ale na podstawie dokumentacji i badań zewnętrznych
        wiemy, że system przechodzi przez kilka etapów:
      </p>
      <ul>
        <li><strong>Ocena zapytania</strong> — AI decyduje, czy zapytanie nadaje się do wygenerowania AI Overview. Zapytania nawigacyjne (np. „Facebook logowanie"), lokalne (np. „pizzeria Gdańsk") i transakcyjne o niskiej złożoności zwykle nie generują AI Overview.</li>
        <li><strong>Wybór źródeł</strong> — system pobiera treści z wielu stron, ocenia ich wiarygodność i trafność. Faworyzowane są strony z wysokim <Link href="/e-e-a-t">E-E-A-T</Link>, autorytatywne w swojej niszy.</li>
        <li><strong>Synteza i formatowanie</strong> — Gemini generuje odpowiedź, często w formie listy punktowanej, kroków lub porównania. Tekst nie jest kopiowaniem — to interpretacja i kompresja wiedzy.</li>
        <li><strong>Cytowanie</strong> — każde stwierdzenie jest powiązane z co najmniej jednym źródłem. Źródła wyświetlają się jako klikalne karty z favicon, tytułem i fragmentem.</li>
      </ul>

      <InfoBox>
        <strong>Czy AI Overview może „skraść" ruch?</strong> Badania z 2024 roku (BrightEdge, Semrush) pokazują, że dla zapytań z AI Overview organiczne CTR spada średnio o 25–34%. Ale strony cytowane <em>wewnątrz</em> AI Overview odnotowują wzrost CTR o 5–12% — bo pojawienie się jako źródło to silny sygnał autorytetu.
      </InfoBox>

      <h2>Jak pozycjonować się w AI Overviews — praktyczne wskazówki</h2>
      <p>
        Nie istnieje jeden „tag AI Overview" ani specjalna teczka do złożenia. Pozycjonowanie w AI Overviews
        to wypadkowa ogólnej jakości SEO i kilku specyficznych czynników:
      </p>

      <h3>1. Buduj E-E-A-T bez kompromisów</h3>
      <p>
        <Link href="/e-e-a-t">E-E-A-T</Link> (Experience, Expertise, Authoritativeness, Trustworthiness) to fundament,
        na którym Google opiera wybór źródeł do AI Overview. Praktycznie: podpisuj treści imiennie, buduj profile
        autorów z doświadczeniem, linkuj do potwierdzonych źródeł, dbaj o aktualność informacji.
      </p>

      <h3>2. Używaj danych strukturalnych</h3>
      <p>
        <Link href="/schema-markup">Schema Markup</Link> i <Link href="/structured-data">dane strukturalne</Link> pomagają
        Gemini zrozumieć kontekst treści — kto jest autorem, kiedy artykuł był aktualizowany, co jest definicją,
        a co jest przykładem. FAQ Schema, HowTo Schema, Article Schema — to wszystko sygnały przydatne systemowi AI.
      </p>

      <h3>3. Odpowiadaj bezpośrednio na pytania</h3>
      <p>
        AI Overviews często pojawiają się dla zapytań pytajnych (jak, co, dlaczego, kiedy). Twoja treść powinna
        zawierać bezpośrednią, zwięzłą odpowiedź w pierwszych 2–3 zdaniach po każdym nagłówku. Unikaj stylu,
        w którym czytelnik musi przeczytać 3 akapity, żeby dotrzeć do sedna.
      </p>

      <h3>4. Pisz treści wyczerpujące temat (topical authority)</h3>
      <p>
        Strony o szerokim pokryciu tematycznym — które odpowiadają na główne pytanie i na pytania pokrewne —
        są preferowanymi źródłami dla AI. Jeśli piszesz o anchor texcie, powinieneś mieć też treści o
        <Link href="/link-building"> link buildingu</Link>, <Link href="/backlink">backlinkach</Link> i
        <Link href="/internal-linking"> internal linkingu</Link>. Topical authority buduje się latami.
      </p>

      <h3>5. Zadbaj o techniczną dostępność</h3>
      <p>
        Googlebot musi móc bez przeszkód <Link href="/crawlowanie">crawlować</Link> i zindeksować Twoje treści.
        Jeśli strona ma problemy z renderowaniem JavaScript, restrykcyjnym robots.txt lub błędami Core Web Vitals —
        szanse na pojawienie się w AI Overview dramatycznie maleją, nawet jeśli treść jest znakomita.
      </p>

      <h2>Trendy 2025–2026: co się zmienia w erze AI Overviews?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co się zmienia</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Stare SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">SEO w erze AI</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Cel treści</td>
              <td className="p-4 text-zinc-600">Rank na pozycji 1–3</td>
              <td className="p-4 text-zinc-600">Być cytowanym źródłem w AI Overview</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Format odpowiedzi</td>
              <td className="p-4 text-zinc-600">Długi artykuł z dużą gęstością słów kluczowych</td>
              <td className="p-4 text-zinc-600">Zwięzłe, bezpośrednie odpowiedzi z poparciem faktami</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Metryki sukcesu</td>
              <td className="p-4 text-zinc-600">Pozycja w SERP, organiczny CTR</td>
              <td className="p-4 text-zinc-600">Udział w AI Overview, ruch brandowy, konwersje</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Autorytet</td>
              <td className="p-4 text-zinc-600">Backlinki z autorytatywnych domen</td>
              <td className="p-4 text-zinc-600">E-E-A-T, wzmianki o autorze, cytowania w mediach</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Jedno jest pewne: <strong>SEO nie umarło</strong>. AI Overviews potrzebują źródeł — a Twoja strona może być
        jednym z nich. Zmienia się nie cel, ale droga do niego. Wygrywa autorytet, wiarygodność i trafność —
        a nie manipulacja gęstością słów kluczowych.
      </p>

      <h2>Następne kroki — co zrobić dziś?</h2>
      <ul>
        <li>Sprawdź w Google Search Console, które frazy z Twojej niszy generują AI Overviews (zrób ręczne przeszukiwania)</li>
        <li>Zrób audyt <Link href="/e-e-a-t">E-E-A-T</Link> — czy każdy artykuł ma autora, datę i źródła?</li>
        <li>Wdróż <Link href="/schema-markup">Schema Markup</Link> — FAQ, Article, HowTo dla odpowiednich stron</li>
        <li>Przejrzyj strukturę treści: czy pierwsze zdanie po każdym H2 odpowiada bezpośrednio na pytanie zawarte w nagłówku?</li>
        <li>Monitoruj udział w wyświetleniach i CTR dla fraz z AI Overview — to Twój nowy benchmark</li>
      </ul>

      <h2>FAQ — AI Overviews</h2>

      <h3>Czy AI Overviews zastąpią tradycyjne wyniki organiczne?</h3>
      <p>
        Nie całkowicie. AI Overviews pojawiają się głównie dla zapytań informacyjnych i złożonych pytań.
        Zapytania nawigacyjne, lokalne, transakcyjne i brandowe nadal kierują do tradycyjnych wyników.
        Google wyraźnie zaznacza, że celem jest uzupełnienie wyników, nie ich zastąpienie.
      </p>

      <h3>Jak sprawdzić, czy moja strona pojawia się w AI Overviews?</h3>
      <p>
        Bezpośrednio w Google Search Console nie ma jeszcze dedykowanego raportu dla AI Overviews (stan: 2026).
        Możesz sprawdzać ręcznie — wyszukaj frazy z Twojej niszy i obserwuj, czy Twoja strona jest cytowana.
        Narzędzia zewnętrzne (Semrush, BrightEdge, Mangools) zaczynają oferować monitoring AI Overview.
      </p>

      <h3>Czy powinienem blokować Googlebotowi dostęp do swoich treści?</h3>
      <p>
        Nie. Blokowanie Googlebota poprzez robots.txt lub noindex wyklucza Cię zarówno z tradycyjnych wyników,
        jak i z AI Overviews. Jeśli chcesz być cytowany, musisz być dostępny dla robotów Google.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czy AI Overviews zastąpią tradycyjne wyniki organiczne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie całkowicie. AI Overviews pojawiają się głównie dla zapytań informacyjnych. Zapytania nawigacyjne, lokalne i transakcyjne nadal kierują do tradycyjnych wyników organicznych."
                }
              },
              {
                "@type": "Question",
                "name": "Jak pozycjonować się w AI Overviews?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Buduj E-E-A-T (doświadczenie, ekspertyza, autorytet, wiarygodność), używaj Schema Markup, pisz zwięzłe bezpośrednie odpowiedzi na pytania użytkowników i dbaj o topical authority w swojej niszy."
                }
              },
              {
                "@type": "Question",
                "name": "Czym AI Overviews różnią się od Featured Snippetów?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Featured Snippet cytuje dosłownie fragment jednej konkretnej strony. AI Overview generuje nową treść syntetyzując informacje z wielu źródeł, podając każde stwierdzenie z linkiem do źródła."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
