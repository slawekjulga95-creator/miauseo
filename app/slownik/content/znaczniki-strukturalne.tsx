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

export default function ZnacznikStrukturalne() {
  return (
    <div className="prose-blog">
      <h2>Czym są znaczniki strukturalne?</h2>
      <p>
        <strong>Znaczniki strukturalne</strong> (dane strukturalne, structured data markup)
        to kod wbudowany w stronę internetową, który opisuje jej zawartość w ustrukturyzowanym
        formacie zrozumiałym dla robotów wyszukiwarek. Są polskim synonimem terminu
        <Link href="/structured-data"> structured data</Link> i<Link href="/schema-markup"> Schema Markup</Link> —
        opisują ten sam mechanizm, używając różnych nazw.
      </p>
      <p>
        Znaczniki strukturalne pozwalają precyzyjnie poinformować Google o rodzaju treści
        na stronie: czy to przepis kulinarny, produkt z ceną, recenzja z oceną gwiazdkową,
        wydarzenie z datą czy firma lokalna z adresem. Bez nich Google musi domyślać się
        znaczenia treści na podstawie samego tekstu HTML — co jest mniej precyzyjne.
      </p>

      <h2>Jak działają znaczniki strukturalne?</h2>
      <p>
        Znaczniki nie zmieniają wyglądu strony dla użytkownika — są niewidoczne
        w przeglądarce. Działają w tle jako metadane dla robotów.
        Rekomendowanym formatem implementacji jest <Link href="/json-ld">JSON-LD</Link>
        — blok kodu JavaScript w tagu <code>&lt;script type="application/ld+json"&gt;</code>,
        który można umieścić w <code>&lt;head&gt;</code> lub <code>&lt;body&gt;</code>
        bez modyfikowania struktury HTML treści strony.
      </p>

      <h2>Zastosowania znaczników strukturalnych</h2>
      <p>
        <strong>Firma lokalna (LocalBusiness)</strong> — adres, telefon, godziny otwarcia,
        geolokalizacja. Zasila Knowledge Panel i{" "}
        <Link href="/local-pack">Local Pack</Link> Google.
        <strong>Produkty i oferty (Product, Offer)</strong> — cena, dostępność, ocena.
        Generuje <Link href="/rich-snippet">rich snippet</Link> z gwiazdkami i ceną w SERP.
        <strong>FAQ (FAQPage)</strong> — rozwijane pytania pod wynikiem wyszukiwania.
        Zwiększa zajmowaną przestrzeń w SERP i <Link href="/ctr">CTR</Link>.
        <strong>Artykuł (Article)</strong> — autor, data publikacji, zdjęcie.
        <strong>Dane osoby (Person)</strong> — dla profili autorów wzmacnia
        <Link href="/e-e-a-t"> E-E-A-T</Link>.
        <strong>Serwis (WebSite)</strong> — umożliwia wyświetlanie paska wyszukiwania
        sitelinks w Knowledge Panel.
      </p>

      <InfoBox>
        <strong>Walidacja przed wdrożeniem:</strong> Błędnie zaimplementowane znaczniki
        strukturalne nie tylko nie przynoszą efektu, ale mogą generować ostrzeżenia
        w <Link href="/google-search-console">Google Search Console</Link>.
        Przed wdrożeniem zawsze testuj przez Google Rich Results Test
        (search.google.com/test/rich-results). Po wdrożeniu monitoruj
        raport „Ulepszenia" w GSC — pokazuje zaindeksowane typy danych i błędy.
      </InfoBox>

      <h2>FAQ — Znaczniki Strukturalne</h2>

      <h3>Czy znaczniki strukturalne poprawiają pozycje?</h3>
      <p>
        Nie bezpośrednio. Znaczniki strukturalne nie są oficjalnym czynnikiem rankingowym Google.
        Jednak pośrednio wpływają na SEO przez zwiększenie CTR — rich snippety
        (gwiazdki, ceny, FAQ) przyciągają więcej kliknięć bez zmiany pozycji,
        a wyższy CTR może być interpretowany przez Google jako sygnał trafności.
      </p>

      <h3>Czy każda strona potrzebuje znaczników strukturalnych?</h3>
      <p>
        Nie każda — ale strony produktów, lokalne firmy, artykuły eksperckie i strony FAQ
        mają wyraźne korzyści z implementacji. Dla prostych stron korporacyjnych
        bez konkretnych typów treści (przepisy, produkty, recenzje) wpływ jest mniejszy.
        Priorytetuj implementację tam, gdzie Google oferuje konkretne formaty rich snippetów.
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
                "name": "Czym są znaczniki strukturalne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Znaczniki strukturalne (dane strukturalne) to kod Schema.org opisujący zawartość strony dla robotów Google. Umożliwiają rich snippety w wynikach wyszukiwania — gwiazdki, ceny, FAQ, daty. Rekomendowany format implementacji to JSON-LD."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
