import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function Slug() {
  return (
    <div className="prose-blog">
      <h2>Czym jest slug?</h2>
      <p>
        <strong>Slug</strong> to końcowa część adresu URL identyfikująca konkretną stronę,
        artykuł lub zasób w obrębie witryny. Jest to czytelna dla człowieka ścieżka
        umieszczona po domenie głównej i ewentualnej strukturze katalogów.
        Dla URL <code>https://miauseo.pl/slownik/pozycjonowanie</code> slugiem jest
        <code>pozycjonowanie</code> (lub pełna ścieżka <code>slownik/pozycjonowanie</code>).
      </p>
      <p>
        Slug jest praktycznie tożsamy z pojęciem <Link href="/permalink">permalinka</Link>
        — oba opisują tę samą część URL, różniąc się niuansem: permalink to pełny
        stały adres, slug to jego identyfikacyjna część. W systemach CMS (WordPress,
        Shopify, Webflow) slug jest konfigurowalnym polem przy każdym wpisie lub stronie.
      </p>

      <h2>Cechy dobrego slug SEO</h2>
      <p>
        <strong>Krótki</strong> — 2–5 słów opisujących temat strony. Slug
        <code>/pozycjonowanie-lokalne</code> jest lepszy niż
        <code>/jak-dziala-i-co-to-jest-pozycjonowanie-lokalne-w-2024-roku</code>.
      </p>
      <p>
        <strong>Opisowy — zawiera słowo kluczowe</strong> — fraza kluczowa w URL
        jest słabym, ale aktywnym sygnałem SEO. Google pogrubia ją w snippecie SERP.
      </p>
      <p>
        <strong>Myślniki jako separatory</strong> — Google traktuje myślnik (<code>-</code>)
        jako separator słów. Podkreślnik (<code>_</code>) jest traktowany jako część słowa —
        <code>pozycjonowanie_lokalne</code> to jedno słowo, nie dwa.
      </p>
      <p>
        <strong>Małe litery, bez polskich znaków</strong> — URL jest case-sensitive;
        ustandaryzuj małe litery. Polskie znaki (ą, ę, ś) są enkodowane jako
        procenty, co wydłuża i brzydko wygląda w adresie.
      </p>
      <p>
        <strong>Bez stopwords</strong> — słowa jak „i", „w", „dla", „jak", „co", „to"
        zazwyczaj nie wnoszą wartości SEO i niepotrzebnie wydłużają slug.
        <code>/pozycjonowanie-lokalne</code> ponad <code>/jak-dziala-pozycjonowanie-dla-lokalne-firmy</code>.
      </p>

      <InfoBox>
        <strong>Nie zmieniaj slugów istniejących stron bez 301:</strong> Slug jest adresem —
        jego zmiana bez <Link href="/redirect-301">przekierowania 301</Link> niszczy
        wszystkie backlinki, zakładki i udostępnienia w mediach społecznościowych
        prowadzące do starego URL. Im starszy artykuł i więcej linków do niego prowadzi,
        tym wyższy koszt nieprzemyślanej zmiany sluga.
      </InfoBox>

      <h2>FAQ — Slug</h2>

      <h3>Czy slug musi zawierać słowo kluczowe?</h3>
      <p>
        Nie musi, ale powinien. Obecność głównej frazy kluczowej w URL jest słabym
        sygnałem rankingowym i jednocześnie poprawia CTR w SERP — Google pogrubia
        pasujące słowa w URL wyświetlanym pod tytułem wyniku. Dla nowych stron
        zawsze warto od razu ustawić descriptowy slug z frazą kluczową.
      </p>

      <h3>Co ze stopwordami w polskich slugach?</h3>
      <p>
        W języku polskim stopwordami w kontekście URL są krótkie słowa nieopisowe:
        i, w, na, dla, jak, co, jest, się, do, z, po. Pomijanie ich skraca slug
        bez utraty opisowości. Jednak w fuzzy keywords, gdzie spójnik jest częścią frazy
        (np. „co to jest SEO"), można go zachować, jeśli fraza jest docelowa
        i zachowanie jej poprawia match z zapytaniami.
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
                "name": "Czym jest slug w SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Slug to końcowa część URL identyfikująca konkretną stronę. Dobry slug jest krótki, opisowy, zawiera słowo kluczowe, używa myślników i małych liter, bez polskich znaków. Zmiana sluga bez przekierowania 301 niszczy backlinki i rankingi."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
