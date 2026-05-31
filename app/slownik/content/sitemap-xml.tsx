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

export default function SitemapXml() {
  return (
    <div className="prose-blog">
      <h2>Czym jest sitemap XML?</h2>
      <p>
        <strong>Sitemap XML</strong> to plik w formacie XML umieszczony na serwerze,
        zawierający listę wszystkich ważnych URL witryny wraz z opcjonalnymi metadanymi
        (data ostatniej modyfikacji, częstotliwość zmian, priorytet). Jego głównym zadaniem
        jest ułatwienie <Link href="/googlebot">Googlebotowi</Link> odkrywania
        i <Link href="/crawlowanie">crawlowania</Link> stron, które mogłyby być pominięte
        przy przechodzeniu przez linki — szczególnie na dużych serwisach lub stronach
        z ograniczonym <Link href="/internal-linking">linkowaniem wewnętrznym</Link>.
      </p>
      <p>
        Sitemap XML nie jest obowiązkowa dla małych witryn z dobrą strukturą wewnętrznych linków —
        Googlebot i tak je odkryje. Jednak dla serwisów z setkami lub tysiącami podstron,
        stron e-commerce, witryn z dynamicznie generowanymi URL lub po migracjach,
        sitemap jest niezbędnym elementem technicznego SEO.
      </p>

      <h2>Co powinna zawierać sitemap XML?</h2>
      <p>
        <strong>Tylko strony do zaindeksowania</strong> — nie dodawaj URL z dyrektywą
        <Link href="/noindex"> noindex</Link>, stron zablokowanych przez{" "}
        <Link href="/robots-txt">robots.txt</Link>, duplikatów, stron technicznych
        (koszyk, checkout, login) ani URL z parametrami generującymi duplikaty.
        Sitemap powinna być mapą treści wartościowej, nie inwentarzem całego serwera.
      </p>
      <p>
        <strong>Kanoniczne URL</strong> — wyłącznie <Link href="/canonical-url">kanoniczne</Link>
        wersje adresów (preferowane HTTPS, bez parametrów UTM, ze spójnym schematem www/non-www).
      </p>

      <h2>Typy sitemap</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Sitemap XML (ogólna)</td><td className="p-4 text-zinc-600">Standardowe strony, artykuły, kategorie — do 50 000 URL na plik</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Sitemap obrazów</td><td className="p-4 text-zinc-600">Informuje Google o obrazach — ważne dla serwisów photo-heavy i e-commerce</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Sitemap wideo</td><td className="p-4 text-zinc-600">Metadane wideo (tytuł, opis, miniatura) dla lepszego indeksowania treści wideo</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Sitemap news</td><td className="p-4 text-zinc-600">Dla wydawców newsowych — umożliwia pojawienie się w Google News</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Sitemap index</td><td className="p-4 text-zinc-600">Plik nadrzędny wskazujący wiele sitemp — dla dużych serwisów z podziałem na sekcje</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Sitemap nie gwarantuje indeksowania:</strong> Dodanie URL do sitemapy
        informuje Googlebota, że strona istnieje i jest ważna — ale nie zmusza go do jej
        zaindeksowania. Google indeksuje tylko treści spełniające standardy jakości.
        Stare, nieaktualne lub zduplikowane treści nie będą indeksowane nawet z sitemapy.
      </InfoBox>

      <h2>FAQ — Sitemap XML</h2>

      <h3>Jak przesłać sitemap do Google?</h3>
      <p>
        Najwygodniejsza metoda to{" "}
        <Link href="/google-search-console">Google Search Console</Link> →
        Sitemaps → wpisz URL sitemapy i kliknij „Prześlij".
        Alternatywnie wskaż ją w pliku <Link href="/robots-txt">robots.txt</Link>
        (<code>Sitemap: https://example.com/sitemap.xml</code>) — Googlebot
        znajdzie ją automatycznie przy crawlu.
        Większość CMS-ów (WordPress + Yoast/RankMath, Shopify, Webflow) generuje
        sitemapę automatycznie.
      </p>

      <h3>Jak często aktualizować sitemap?</h3>
      <p>
        Sitemap powinna być aktualizowana automatycznie przez CMS przy każdej
        publikacji lub aktualizacji strony. Jeśli Twój CMS nie robi tego automatycznie,
        aktualizacja raz dziennie lub raz w tygodniu (przez cron job lub ręcznie)
        jest wystarczająca dla większości serwisów.
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
                "name": "Czym jest sitemap XML?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sitemap XML to plik zawierający listę ważnych URL witryny, ułatwiający Googlebotowi odkrywanie i crawlowanie stron. Jest szczególnie ważna dla dużych serwisów e-commerce, po migracjach i dla stron z ograniczonym linkowaniem wewnętrznym."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
