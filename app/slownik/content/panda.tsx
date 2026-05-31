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

export default function Panda() {
  return (
    <div className="prose-blog">
      <h2>Czym jest algorytm Panda?</h2>
      <p>
        <strong>Panda</strong> to aktualizacja algorytmu Google wprowadzona w lutym 2011 roku,
        zaprojektowana w celu penalizowania stron o niskiej jakości treści i nagradzania
        tych z wartościowymi, unikalnymi materiałami. Była odpowiedzią na explozję farm
        treści — serwisów masowo publikujących tanie, generyczne artykuły wyłącznie
        dla generowania ruchu reklamowego, bez realnej wartości dla użytkowników.
      </p>
      <p>
        W momencie premiery Panda dotknęła ok. 12% anglojęzycznych zapytań —
        to jeden z największych jednorazowych skoków w historii algorytmu Google.
        Setki serwisów z farmy treści straciły 40–90% ruchu organicznego z dnia na dzień.
        Od 2016 roku Panda jest wbudowana w główny algorytm Google i działa w trybie ciągłym.
      </p>

      <h2>Co penalizuje Panda?</h2>
      <p>
        <strong><Link href="/duplicate-content">Duplicate content</Link></strong> — zduplikowane
        treści między podstronami serwisu lub skopiowane z innych źródeł.
        Panda ocenia unikalność na poziomie całej domeny, nie pojedynczej strony.
      </p>
      <p>
        <strong>Thin content</strong> — strony z minimalną treścią (kilka zdań, puste kategorie,
        strony tagów bez opisu), które nie wnoszą wartości dla użytkownika.
        Serwis e-commerce z tysiącami kart produktów z identycznym opisem producenta
        to klasyczny przykład thin content na skalę.
      </p>
      <p>
        <strong><Link href="/keyword-stuffing">Keyword stuffing</Link></strong> — nienaturalne
        upychanie słów kluczowych, obniżające jakość i czytelność tekstu.
      </p>
      <p>
        <strong>Treści generowane automatycznie</strong> — masowo produkowane teksty bez
        redakcji, wartości merytorycznej i unikalności. W erze AI to szczególnie istotne —
        nieweryfikowane treści generowane przez LLM bez redakcji wpadają w zakres Pandy.
      </p>
      <p>
        <strong>Wysoki bounce rate i słaby UX</strong> — choć pośrednie, sygnały zaangażowania
        (użytkownik wraca do wyników zaraz po wejściu) były brane pod uwagę przy ocenie jakości.
      </p>

      <h2>Jak uniknąć i naprawić penalizację Panda?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Problem</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Thin content na stronach produktów</td><td className="p-4 text-zinc-600">Unikalne opisy dla każdego produktu; minimalne 200–300 słów wartościowej treści</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Duplikat treści z innego serwisu</td><td className="p-4 text-zinc-600">Przepisz lub usuń; tag canonical jeśli musisz zachować obie wersje</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Strony tagów i archiwa bez treści</td><td className="p-4 text-zinc-600">Noindex lub wzbogacenie opisem kategorii / tagu</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Zbyt dużo reklam nad treścią</td><td className="p-4 text-zinc-600">Zredukuj reklamy above the fold; treść musi być dostępna bez scrollowania</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Panda działa na poziomie całej domeny:</strong> Jeśli duża część serwisu ma niską
        jakość treści, algorytm może obniżyć rankingi wszystkich stron w domenie — nie tylko
        tych bezpośrednio zidentyfikowanych jako problematyczne. Dlatego w dużych serwisach
        warto regularnie audytować jakość treści i stosować noindex dla stron bez wartości,
        zamiast pozostawiać je indeksowanymi.
      </InfoBox>

      <h2>FAQ — Panda</h2>

      <h3>Czy Panda nadal jest aktywna?</h3>
      <p>
        Tak — od 2016 roku jest wbudowana w główny algorytm i działa w trybie ciągłym,
        zamiast jak wcześniej jako cykliczne aktualizacje. Nie ma osobnych „aktualizacji Pandy" —
        algorytm ocenia jakość treści przy każdym crawlu i aktualizacji indeksu.
      </p>

      <h3>Jak sprawdzić, czy moja strona jest penalizowana przez Pandę?</h3>
      <p>
        Sprawdź historię ruchu organicznego w Google Analytics i skoreluj spadki z datami
        znanych aktualizacji algorytmu (MozCast, Semrush Sensor, Google Search Status Dashboard).
        Nagły, trwały spadek zbieżny z aktualizacją Google — bez zmian technicznych na stronie —
        wskazuje na penalizację algorytmiczną. Panda często objawia się globalnym spadkiem
        wszystkich stron domeny, nie tylko wybranych.
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
                "name": "Czym jest algorytm Panda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Panda to aktualizacja Google z 2011 roku penalizująca niskiej jakości treści — duplicate content, thin content, keyword stuffing i masowo generowane artykuły. Od 2016 roku jest wbudowana w główny algorytm i działa w trybie ciągłym."
                }
              },
              {
                "@type": "Question",
                "name": "Jak naprawić penalizację Panda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kluczowe działania: usunięcie lub unikalizacja thin content, eliminacja duplicate content, noindex dla stron bez wartości (tagi, archiwa), poprawa UX i zmniejszenie liczby reklam. Panda działa na poziomie całej domeny — trzeba poprawić ogólną jakość serwisu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
