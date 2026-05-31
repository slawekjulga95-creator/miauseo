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

export default function StructuredData() {
  return (
    <div className="prose-blog">
      <h2>Czym są structured data?</h2>
      <p>
        <strong>Structured data</strong> (dane ustrukturyzowane, dane strukturalne)
        to kod opisujący zawartość strony w standaryzowanym formacie zrozumiałym
        dla robotów wyszukiwarek. Zamiast zostawiać Google samodzielne interpretowanie
        tekstu i HTML, structured data precyzyjnie definiuje: „to jest cena produktu",
        „to jest ocena 4,5 na 5", „to jest data wydarzeń" — używając wspólnego słownika
        <Link href="/schema-markup"> Schema.org</Link>.
      </p>
      <p>
        Structured data to szersze pojęcie niż Schema Markup — obejmuje wszelkie
        ustrukturyzowane informacje przekazywane robotom, w tym Open Graph (Facebook),
        Twitter Cards i JSON-LD. W praktyce SEO terminy „structured data",
        „Schema Markup" i „dane strukturalne" są używane wymiennie.
      </p>

      <h2>Formaty structured data</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Format</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Opis</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rekomendacja</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink"><Link href="/json-ld">JSON-LD</Link></td><td className="p-4 text-zinc-600">JavaScript w bloku &lt;script&gt;, oddzielony od HTML treści</td><td className="p-4 text-green-600 font-medium">Rekomendowany przez Google</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Microdata</td><td className="p-4 text-zinc-600">Atrybuty HTML wbudowane w znaczniki treści (itemscope, itemprop)</td><td className="p-4 text-zinc-600">Obsługiwane, trudniejsze w utrzymaniu</td></tr>
            <tr><td className="p-4 font-semibold text-ink">RDFa</td><td className="p-4 text-zinc-600">Atrybuty HTML oparte na Resource Description Framework</td><td className="p-4 text-zinc-600">Obsługiwane, rzadziej używane</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak structured data wpływa na SEO?</h2>
      <p>
        Structured data nie jest bezpośrednim czynnikiem rankingowym — nie przesuwa
        strony wyżej w wynikach. Jednak pośrednio ma duże znaczenie przez:
        umożliwienie <Link href="/rich-snippet">rich snippetów</Link> (gwiazdki, ceny, FAQ)
        zwiększających <Link href="/ctr">CTR</Link> o 20–30%; lepsze rozumienie treści przez
        Google w kontekście <Link href="/e-e-a-t">E-E-A-T</Link> (Author, Organization schema);
        widoczność w Knowledge Panel i Google Knowledge Graph dla firm i osób;
        kwalifikację do specjalnych formatów SERP (kalkulator, przepis, produkt, FAQ).
      </p>

      <InfoBox>
        <strong>Structured data a AI:</strong> W erze Google AI Overviews i Gemini,
        structured data zyskuje dodatkowe znaczenie — pomaga modelom AI zrozumieć
        kontekst i fakty ze strony, co może wpływać na cytowanie witryny
        w odpowiedziach generowanych przez AI. Strony z precyzyjnymi danymi strukturalnymi
        są lepiej identyfikowane jako autorytarne źródła.
      </InfoBox>

      <h2>FAQ — Structured Data</h2>

      <h3>Czy structured data jest trudna do wdrożenia?</h3>
      <p>
        JSON-LD jest najprostszym formatem — blok kodu JSON można wygenerować przez
        dedykowane narzędzia (Merkle Schema Markup Generator, Yoast SEO, RankMath)
        bez znajomości programowania. Dla zaawansowanych typów (Product, LocalBusiness
        z pełnymi danymi) pomocna jest konsultacja z developerem lub specjalistą SEO.
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
                "name": "Czym są structured data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Structured data (dane strukturalne) to kod opisujący zawartość strony w standaryzowanym formacie Schema.org zrozumiałym dla robotów. Umożliwia rich snippety w SERP i pomaga Google lepiej rozumieć E-E-A-T. Rekomendowany format to JSON-LD."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
