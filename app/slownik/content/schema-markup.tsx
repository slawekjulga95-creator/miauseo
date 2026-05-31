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

export default function SchemaMarkup() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Schema Markup?</h2>
      <p>
        <strong>Schema Markup</strong> (dane strukturalne Schema.org) to kod dodawany
        do strony internetowej, który opisuje jej zawartość w sposób zrozumiały dla robotów
        wyszukiwarek — nie tylko dla ludzi. Schema.org to współdzielony słownik typów
        danych opracowany przez Google, Microsoft, Yahoo i Yandex w 2011 roku.
        Pozwala precyzyjnie poinformować algorytm: „to jest recenzja produktu",
        „to jest przepis kulinarny", „to jest oferta pracy" — zamiast zostawiać Google
        domysłom na podstawie samej treści tekstowej.
      </p>
      <p>
        Implementacja Schema Markup umożliwia wyświetlanie{" "}
        <Link href="/rich-snippet">rich snippetów</Link> w wynikach wyszukiwania —
        wzbogaconych wyników z gwiazdkami, cenami, FAQ, datami i innymi elementami,
        które poprawiają <Link href="/ctr">CTR</Link> bez zmiany pozycji.
      </p>

      <h2>Formaty implementacji</h2>
      <p>
        Google obsługuje trzy formaty danych strukturalnych: <strong>JSON-LD</strong>
        (rekomendowany) — blok kodu JavaScript umieszczany w tagu{" "}
        <code>&lt;script type="application/ld+json"&gt;</code>, niezwiązany z HTML treści strony;
        <strong>Microdata</strong> — atrybuty HTML wbudowane bezpośrednio w znaczniki treści;
        <strong>RDFa</strong> — podobny do Microdata, oparty na atrybutach HTML.
      </p>
      <p>
        <Link href="/json-ld">JSON-LD</Link> jest rekomendowanym formatem przez Google —
        jest łatwy w utrzymaniu, nie wymaga modyfikacji HTML treści i można go
        dynamicznie generować po stronie serwera.
      </p>

      <h2>Najważniejsze typy Schema dla SEO</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ Schema</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rich snippet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">FAQPage</td><td className="p-4 text-zinc-600">Strony z sekcją pytań i odpowiedzi</td><td className="p-4 text-green-600 font-medium">Rozwijane FAQ pod wynikiem</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Product + AggregateRating</td><td className="p-4 text-zinc-600">Strony produktów e-commerce</td><td className="p-4 text-green-600 font-medium">Gwiazdki, cena, dostępność</td></tr>
            <tr><td className="p-4 font-semibold text-ink">LocalBusiness</td><td className="p-4 text-zinc-600">Strony firm lokalnych</td><td className="p-4 text-green-600 font-medium">Adres, godziny, telefon w Knowledge Panel</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Article / NewsArticle</td><td className="p-4 text-zinc-600">Artykuły blogowe i prasowe</td><td className="p-4 text-zinc-600">Data, autor, zdjęcie</td></tr>
            <tr><td className="p-4 font-semibold text-ink">BreadcrumbList</td><td className="p-4 text-zinc-600">Struktura nawigacji okruszkowej</td><td className="p-4 text-green-600 font-medium">Ścieżka nawigacji w URL wyniku</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Schema Markup a E-E-A-T:</strong> Dane strukturalne Author, Organization
        i WebSite pomagają Google lepiej ocenić{" "}
        <Link href="/e-e-a-t">E-E-A-T</Link> strony — przez precyzyjne informacje
        o autorze artykułu, organizacji stojącej za treścią i powiązaniach
        z innymi zweryfikowanymi profilami (sameAs: profil LinkedIn, Wikipedia).
        To szczególnie ważne dla stron YMYL (Your Money, Your Life).
      </InfoBox>

      <h2>FAQ — Schema Markup</h2>

      <h3>Jak testować poprawność Schema Markup?</h3>
      <p>
        Google Rich Results Test (search.google.com/test/rich-results) — sprawdza,
        czy strona kwalifikuje się do rich snippetów i wyświetla błędy i ostrzeżenia.
        Schema Markup Validator (validator.schema.org) — waliduje składnię bez kontekstu
        Google. Google Search Console → Ulepszenia — pokazuje zindeksowane typy danych
        i błędy na wszystkich stronach domeny.
      </p>

      <h3>Czy Schema Markup jest wymagane dla SEO?</h3>
      <p>
        Nie jest wymagane do rankowania — strona może być na pozycji 1 bez żadnych
        danych strukturalnych. Jednak dla witryn z produktami, recenzjami, FAQ
        i lokalnym biznesem brak Schema Markup to realna utrata CTR w SERP.
        Implementacja JSON-LD dla kluczowych typów to jeden z najbardziej
        opłacalnych działań on-page SEO z perspektywy wysiłek / efekt.
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
                "name": "Czym jest Schema Markup?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Schema Markup to dane strukturalne Schema.org dodawane do strony, które pomagają Google zrozumieć jej zawartość. Umożliwia wyświetlanie rich snippetów w wynikach wyszukiwania — gwiazdek, cen, FAQ. Rekomendowany format implementacji to JSON-LD."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
