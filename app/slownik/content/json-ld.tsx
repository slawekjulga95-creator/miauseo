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
export default function JsonLd() {
  return (
    <div className="prose-blog">
      <h2>Czym jest JSON-LD?</h2>
      <p>
        <strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data) to format zapisu
        <Link href="/structured-data"> danych strukturalnych</Link> rekomendowany przez Google,
        osadzany w kodzie strony przez znacznik <code>&lt;script type="application/ld+json"&gt;</code>.
        Opisuje zawartość strony w ustrukturyzowanym formacie zrozumiałym dla robotów wyszukiwarek —
        bez ingerencji w widoczny HTML strony. Google używa tych danych do generowania
        <Link href="/rich-snippet"> rich snippetów</Link> w wynikach wyszukiwania:
        gwiazdek opinii, cen produktów, karuzel wydarzeń, FAQ, breadcrumbów i wielu innych formatów.
      </p>

      <h2>Dlaczego Google rekomenduje JSON-LD zamiast Microdata?</h2>
      <p>
        Istnieją trzy metody implementacji <Link href="/schema-markup">Schema Markup</Link>:
        JSON-LD, Microdata i RDFa. Google oficjalnie rekomenduje JSON-LD z kilku powodów.
        <strong>Separacja od HTML</strong> — JSON-LD jest osobnym blokiem kodu, niezwiązanym z wizualną strukturą strony.
        Zmiana danych strukturalnych nie wymaga modyfikacji layoutu. <strong>Łatwość implementacji</strong>
        — jeden blok JSON w head lub body, zamiast rozsiewania atrybutów po całym HTML.
        <strong>Elastyczność</strong> — można umieszczać JSON-LD dynamicznie przez JavaScript
        (np. przez Google Tag Manager), co ułatwia zarządzanie bez edycji kodu szablonu.
      </p>

      <h2>Przykład implementacji JSON-LD dla artykułu</h2>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Czym jest SEO i jak działa?",
  "author": {
    "@type": "Person",
    "name": "Jan Kowalski",
    "url": "https://example.com/autor/jan-kowalski"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-05-01",
  "image": "https://example.com/seo-article.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "MiauSEO",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  }
}
</script>`}
      </pre>

      <h2>Najpopularniejsze typy Schema dla SEO</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ Schema</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rich snippet efekt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">FAQPage</td><td className="p-4 text-zinc-600">Strony z sekcją pytań i odpowiedzi</td><td className="p-4 text-zinc-600">Rozwijane Q&A w SERP</td></tr>
            <tr><td className="p-4 font-medium text-ink">Product + Review</td><td className="p-4 text-zinc-600">Strony produktowe e-commerce</td><td className="p-4 text-zinc-600">Gwiazdki, cena, dostępność</td></tr>
            <tr><td className="p-4 font-medium text-ink">LocalBusiness</td><td className="p-4 text-zinc-600">Firmy lokalne</td><td className="p-4 text-zinc-600">Dane kontaktowe, godziny, mapa</td></tr>
            <tr><td className="p-4 font-medium text-ink">BreadcrumbList</td><td className="p-4 text-zinc-600">Hierarchia nawigacyjna</td><td className="p-4 text-zinc-600">Breadcrumby zamiast URL w SERP</td></tr>
            <tr><td className="p-4 font-medium text-ink">Article / BlogPosting</td><td className="p-4 text-zinc-600">Artykuły i wpisy blogowe</td><td className="p-4 text-zinc-600">Data, autor, Google Discover</td></tr>
            <tr><td className="p-4 font-medium text-ink">HowTo</td><td className="p-4 text-zinc-600">Instrukcje krok po kroku</td><td className="p-4 text-zinc-600">Kroki widoczne bezpośrednio w SERP</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Walidacja JSON-LD:</strong> Zanim opublikujesz JSON-LD, sprawdź poprawność przez: Rich Results Test (search.google.com/test/rich-results) — sprawdza czy Google może przetworzyć dane i wygenerować rich result, Schema.org Validator — weryfikuje poprawność składniową, oraz zakładkę „Rich results" w raporcie GSC → Ulepszone po wdrożeniu — pokazuje błędy i ostrzeżenia dla wdrożonych schematów.
      </InfoBox>

      <h2>FAQ — JSON-LD</h2>
      <h3>Czy JSON-LD gwarantuje rich snippety?</h3>
      <p>
        Nie — JSON-LD to warunek konieczny, ale niewystarczający. Google decyduje samodzielnie,
        czy wyświetlić rich snippet — bierze pod uwagę jakość strony, trafność danych i kontekst zapytania.
        Poprawnie zaimplementowane dane strukturalne znacząco zwiększają szansę na rich snippety,
        ale nie gwarantują ich pojawienia się.
      </p>
      <h3>Czy mogę umieścić JSON-LD w body zamiast head?</h3>
      <p>
        Tak — Google akceptuje JSON-LD zarówno w <code>&lt;head&gt;</code> jak i w <code>&lt;body&gt;</code>.
        Wiele CMS i frameworków dynamicznie wstrzykuje JSON-LD do body — to jest w pełni prawidłowe.
        Ważne żeby dane były dostępne po renderowaniu strony.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest JSON-LD?", "acceptedAnswer": { "@type": "Answer", "text": "JSON-LD to format danych strukturalnych rekomendowany przez Google, osadzany przez <script type='application/ld+json'>. Opisuje zawartość strony dla robotów i umożliwia wyświetlanie rich snippetów w wynikach Google." } }] }) }} />
    </div>
  );
}
