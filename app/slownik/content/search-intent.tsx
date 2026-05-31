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

export default function SearchIntent() {
  return (
    <div className="prose-blog">
      <h2>Czym jest search intent?</h2>
      <p>
        <strong>Search intent</strong> (<Link href="/intencja-wyszukiwania">intencja wyszukiwania</Link>)
        to cel, który użytkownik chce osiągnąć wpisując dane zapytanie w wyszukiwarkę.
        Google coraz skuteczniej identyfikuje intencję stojącą za zapytaniem
        — i nagradza treści, które ją precyzyjnie spełniają, niezależnie od tego,
        czy dosłownie zawierają wpisaną frazę.
      </p>
      <p>
        Dopasowanie search intent to jeden z najważniejszych czynników on-page SEO.
        Strona z idealnym technicznym SEO i silnymi backlinkami nie będzie rankować,
        jeśli format i treść nie odpowiadają temu, czego szuka Google dla danego zapytania.
      </p>

      <h2>Cztery typy search intent</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cel użytkownika</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład zapytania</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Odpowiedni format treści</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Informacyjna</td><td className="p-4 text-zinc-600">Zdobycie wiedzy</td><td className="p-4 text-zinc-600">„co to jest backlink"</td><td className="p-4 text-zinc-600">Artykuł ekspercki, przewodnik, definicja</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Nawigacyjna</td><td className="p-4 text-zinc-600">Znalezienie konkretnej strony</td><td className="p-4 text-zinc-600">„Google Analytics logowanie"</td><td className="p-4 text-zinc-600">Strona główna lub login danej marki</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Transakcyjna</td><td className="p-4 text-zinc-600">Zakup lub wykonanie akcji</td><td className="p-4 text-zinc-600">„kup buty biegowe"</td><td className="p-4 text-zinc-600">Strona produktu, koszyk, landing page</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Komercyjna (investigational)</td><td className="p-4 text-zinc-600">Porównanie przed zakupem</td><td className="p-4 text-zinc-600">„Ahrefs vs Semrush"</td><td className="p-4 text-zinc-600">Artykuł porównawczy, ranking, recenzja</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak identyfikować search intent?</h2>
      <p>
        Najszybsza metoda to analiza top 10 wyników Google dla docelowej frazy.
        Format i typ stron na pierwszej stronie wyników jest najlepszym wskaźnikiem,
        jaką intencję Google przypisuje zapytaniu. Jeśli top 10 to artykuły poradnikowe
        — pisz poradnik, nie stronę produktową. Jeśli to strony produktów e-commerce
        — landing page z produktami, nie bloga.
      </p>

      <InfoBox>
        <strong>Intent zmienia się w czasie:</strong> Intencja dla tej samej frazy może się
        zmieniać sezonowo lub po zmianie zachowań rynku. „Zegarki" przed świętami mogą
        mieć więcej intencji transakcyjnej niż po nich. Monitoruj, jak Google zmienia SERP
        dla Twoich kluczowych fraz — to sygnał zmieniającej się intencji.
      </InfoBox>

      <h2>FAQ — Search Intent</h2>

      <h3>Co się stanie, jeśli moja treść nie pasuje do intencji?</h3>
      <p>
        Google nie wyświetli jej wysoko dla danego zapytania, nawet jeśli zawiera
        frazę kluczową i ma silne backlinki. Algorytm (przez BERT i analizę CTR/bounce rate)
        rozumie, że treść nie spełnia oczekiwań użytkownika. Dopasowanie intencji
        jest warunkiem wstępnym skutecznego pozycjonowania.
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
                "name": "Czym jest search intent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Search intent (intencja wyszukiwania) to cel użytkownika stojący za zapytaniem. Cztery typy: informacyjna, nawigacyjna, transakcyjna, komercyjna. Dopasowanie formatu treści do intencji to jeden z najważniejszych czynników rankingowych."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
