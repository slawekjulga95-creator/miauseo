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

export default function Pagerank() {
  return (
    <div className="prose-blog">
      <h2>Czym jest PageRank?</h2>
      <p>
        <strong>PageRank</strong> to oryginalny algorytm Google — nazwany od Larry'ego Page'a —
        oceniający autorytet strony internetowej na podstawie liczby i jakości hiperłączy
        prowadzących do tej strony. Idea wywodzi się z akademickiego systemu cytowań:
        artykuł naukowy cytowany przez wiele innych jest traktowany jako ważniejszy.
        PageRank przeniósł tę logikę na sieć — każdy <Link href="/backlink">backlink</Link>
        to głos zaufania, a głosy od stron o wyższym autorytecie mają większą wagę.
      </p>
      <p>
        Algorytm PageRank jest fundamentem, na którym zbudowano Google. Mimo że współczesny
        algorytm rankingowy składa się z setek sygnałów, PageRank — lub jego ewoluowana forma —
        pozostaje jednym z kluczowych czynników oceny autorytetu domeny i strony.
        Google wewnętrznie nadal go oblicza, choć przestał udostępniać publiczny wskaźnik PR
        w skali 0–10 w 2016 roku.
      </p>

      <h2>Jak działa PageRank?</h2>
      <p>
        Matematycznie PageRank to iteracyjny algorytm, który symuluje zachowanie „losowego
        surfera" poruszającego się po sieci przez klikanie linków. Prawdopodobieństwo,
        że surfer trafi na daną stronę, jest miarą jej autorytetu.
        Im więcej stron do niej linkuje i im wyższy autorytet tych stron,
        tym wyższy PageRank docelowej strony.
      </p>
      <p>
        Każda strona dysponuje określoną pulą PageRank i rozdziela ją równo między wszystkie
        linki wychodzące — to pojęcie znane jako <Link href="/link-juice">link juice</Link>.
        Strona z 100 linkami wychodzącymi przekazuje każdemu 1/100 swojej wartości.
        Strona z 5 linkami przekazuje 1/5. Dlatego link z mało linkującej, wysoce autorytatywnej
        strony może być cenniejszy niż 10 linków ze stron o słabym profilu.
      </p>

      <h2>PageRank dziś — ewolucja algorytmu</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Etap</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co się zmieniło</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">1998–2000</td><td className="p-4 text-zinc-600">Oryginalny PageRank — rewolucja w jakości wyników wyszukiwania</td></tr>
            <tr><td className="p-4 font-semibold text-ink">2000–2013</td><td className="p-4 text-zinc-600">Publiczny wskaźnik PR (0–10) w Google Toolbar — intensywnie monitorowany przez SEO</td></tr>
            <tr><td className="p-4 font-semibold text-ink">2014–2016</td><td className="p-4 text-zinc-600">Google przestało aktualizować publiczny wskaźnik, aż do usunięcia go w 2016</td></tr>
            <tr><td className="p-4 font-semibold text-ink">2016–dziś</td><td className="p-4 text-zinc-600">Wewnętrzny PageRank nadal istnieje — branżowe metryki DR, DA, AS to jego przybliżenia</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>PageRank vs Domain Rating vs Domain Authority:</strong> Google nie udostępnia
        aktualnego wskaźnika PageRank. Branżowe metryki — <Link href="/domain-rating">Domain Rating</Link>{" "}
        (Ahrefs), Domain Authority (Moz), Authority Score (Semrush) — to próby przybliżenia
        rzeczywistego autorytetu domeny na podstawie profilu backlinków. Są użyteczne do porównań
        względnych (np. oceny potencjalnych partnerów link buildingowych), ale nie są równoważne
        wewnętrznemu PageRank Google.
      </InfoBox>

      <h2>FAQ — PageRank</h2>

      <h3>Czy PageRank nadal wpływa na ranking?</h3>
      <p>
        Tak. Google wielokrotnie potwierdzał, że linki i autorytet strony są nadal kluczowymi
        sygnałami rankingowymi. Choć algorytm ewoluował daleko poza oryginalne równanie PageRank
        i dziś łączy go z setkami innych sygnałów (treść, UX, E-E-A-T, Core Web Vitals),
        struktura linków i autorytet domeny pozostają fundamentalne.
      </p>

      <h3>Jak zwiększyć PageRank swojej strony?</h3>
      <p>
        Przez konsekwentne budowanie jakościowego profilu backlinków —
        <Link href="/link-building"> link building</Link> z autorytatywnych, tematycznie
        powiązanych źródeł. Wewnętrznie — przez optymalizację{" "}
        <Link href="/internal-linking">struktury linkowania wewnętrznego</Link>,
        żeby autorytet strony głównej i popularnych podstron sprawnie przepływał
        do stron priorytetowych.
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
                "name": "Czym jest PageRank?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PageRank to oryginalny algorytm Google oceniający autorytet strony na podstawie liczby i jakości prowadzących do niej linków. Wywodzi się z akademickiego systemu cytowań. Google nadal go oblicza wewnętrznie, choć publiczny wskaźnik został usunięty w 2016 roku."
                }
              },
              {
                "@type": "Question",
                "name": "Czy PageRank nadal wpływa na ranking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak. Linki i autorytet strony są nadal kluczowymi sygnałami rankingowymi Google. Branżowe metryki jak Domain Rating (Ahrefs) czy Domain Authority (Moz) to przybliżenia wewnętrznego PageRank."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
