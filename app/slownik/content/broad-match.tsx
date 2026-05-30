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

export default function BroadMatch() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Broad Match?</h2>
      <p>
        <strong>Broad Match</strong> (dopasowanie przybliżone) to typ dopasowania słów kluczowych w kampaniach
        <Link href="/google-ads"> Google Ads</Link>, który pozwala reklamie wyświetlać się dla
        możliwie szerokiego zakresu zapytań — nawet jeśli wpisane przez użytkownika słowa nie pokrywają się
        dokładnie z dodanym słowem kluczowym. Google samodzielnie interpretuje intencję zapytania i decyduje,
        czy wyświetlić reklamę. Broad Match to domyślny typ dopasowania w Google Ads —
        każde nowo dodane słowo kluczowe bez specjalnych operatorów jest traktowane jako broad match.
      </p>
      <p>
        Przykład: jeśli dodasz słowo kluczowe <em>buty do biegania</em> w dopasowaniu przybliżonym,
        Twoja reklama może wyświetlić się dla zapytań takich jak „najlepsze obuwie sportowe",
        „buty Nike do maratonu", „jak wybrać buty trekkingowe" — a nawet „sklep z odzieżą sportową".
        Google kieruje się intencją i kontekstem konta, nie dosłownym brzmieniem frazy.
      </p>

      <h2>Jak Broad Match działa w 2025/2026 — rola Smart Bidding</h2>
      <p>
        Broad Match przeszedł znaczącą ewolucję. W erze przed uczeniem maszynowym był narzędziem
        trudnym do kontrolowania — reklamy wyświetlały się przy zupełnie niezwiązanych zapytaniach,
        przepalając budżety. Google fundamentalnie przebudował Broad Match po 2021 roku,
        integrując go ściśle z <strong>Smart Bidding</strong> (inteligentne strategie stawek).
      </p>
      <p>
        Dziś Broad Match jest zaprojektowany do pracy w parze z automatycznymi strategiami jak docelowy CPA,
        docelowy ROAS lub Maksymalizacja konwersji. System uczy się, które szerokie zapytania konwertują
        dla konkretnego konta, i z czasem coraz precyzyjniej targetuje. Bez Smart Bidding,
        Broad Match jest znacznie mniej przewidywalny i trudniejszy do opłacalnego prowadzenia.
      </p>

      <h2>Porównanie typów dopasowania słów kluczowych</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Operator</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zasięg</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kontrola</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład zapytania triggującego</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Broad Match</td>
              <td className="p-4 text-zinc-600 font-mono">buty do biegania</td>
              <td className="p-4 text-zinc-600">Bardzo szeroki</td>
              <td className="p-4 text-zinc-600">Niska</td>
              <td className="p-4 text-zinc-600">„obuwie sportowe wyprzedaż"</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Phrase Match</td>
              <td className="p-4 text-zinc-600 font-mono">"buty do biegania"</td>
              <td className="p-4 text-zinc-600">Średni</td>
              <td className="p-4 text-zinc-600">Średnia</td>
              <td className="p-4 text-zinc-600">„najlepsze buty do biegania damskie"</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/exact-match">Exact Match</Link></td>
              <td className="p-4 text-zinc-600 font-mono">[buty do biegania]</td>
              <td className="p-4 text-zinc-600">Wąski</td>
              <td className="p-4 text-zinc-600">Wysoka</td>
              <td className="p-4 text-zinc-600">„buty do biegania", „buty biegowe"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Zalety Broad Match — kiedy jest mocną stroną</h2>
      <p>
        <strong>Odkrywanie nowych fraz</strong> — Broad Match to najskuteczniejszy sposób na eksplorację
        zapytań, których sam byś nie wpadł na umieszczenie w kampanii.
        Raport wyszukiwanych haseł w kampanii broad match jest kopalnią pomysłów na nowe słowa kluczowe
        i grupy tematyczne — zarówno do dodania, jak i do wykluczenia
        (<Link href="/negative-keyword">negative keywords</Link>).
      </p>
      <p>
        <strong>Skalowanie zasięgu</strong> — w kampaniach nastawionych na wolumen konwersji przy stałym
        koszcie pozyskania (docelowy CPA), Broad Match pozwala algorytmowi Google eksplorować
        szeroki zestaw zapytań i automatycznie optymalizować stawki pod te, które konwertują.
        To ma sens dla dojrzałych kampanii z historią konwersji.
      </p>
      <p>
        <strong>Niższy próg wejścia do długiego ogona</strong> — zamiast ręcznie budować listę setek
        <Link href="/long-tail-keyword"> long-tail keywords</Link>, Broad Match z dobrym Smart Bidding
        automatycznie odkrywa i targetuje frazy długoogonowe, które konwertują.
      </p>

      <h2>Wady i ryzyka Broad Match</h2>
      <p>
        <strong>Nieistotne wyświetlenia</strong> — bez wykluczających słów kluczowych i bez Smart Bidding,
        Broad Match potrafi wyświetlać reklamy dla zapytań zupełnie niezwiązanych z ofertą.
        Wynik: przepalony budżet, niski <Link href="/quality-score">Quality Score</Link> i frustracja.
      </p>
      <p>
        <strong>Trudna interpretacja danych</strong> — przy Broad Match nie wiesz z góry, jakie zapytania
        triggerują Twoją reklamę. Raport wyszukiwanych haseł trzeba regularnie analizować i czyścić,
        bo bez tego kampania dryfuje w niekontrolowanym kierunku.
      </p>
      <p>
        <strong>Kanibaliza z innymi typami dopasowania</strong> — jeśli masz w kampanii te same słowa kluczowe
        w różnych typach dopasowania, Google musi zdecydować, która wersja wchodzi do aukcji.
        Zasady priorytetyzacji: Exact Match wygrywa dla identycznych zapytań, Phrase Match dla zapytań
        zawierających frazę, Broad Match wchodzi kiedy inne nie pasują — ale w praktyce systemy mogą
        zachowywać się inaczej niż oczekujesz.
      </p>

      <InfoBox>
        <strong>Reguła na start:</strong> Nowe kampanie lepiej zaczynać od Phrase Match lub Exact Match, żeby mieć kontrolę nad wydatkami i zbierać dane konwersyjne. Broad Match wprowadź dopiero gdy kampania ma historię (min. 30–50 konwersji miesięcznie) i działający Smart Bidding — wtedy system ma dane do pracy i broad match staje się pomocnikiem, nie zagrożeniem.
      </InfoBox>

      <h2>Jak bezpiecznie używać Broad Match</h2>
      <p>
        <strong>Rozbudowana lista wykluczeń</strong> — <Link href="/negative-keyword">Negative keywords</Link>
        to niezbędne narzędzie kontroli przy Broad Match. Buduj listę wykluczen na poziomie kampanii i konta:
        frazy niezwiązane z ofertą, nazwy konkurentów (jeśli nie chcesz brand biddingu),
        słowa sugerujące inne intencje (np. „darmowe", „praca", „samodzielny").
      </p>
      <p>
        <strong>Regularne przeglądanie raportu wyszukiwanych haseł</strong> — minimum raz w tygodniu
        sprawdzaj, jakie zapytania faktycznie triggerują reklamy. Dodawaj wartościowe frazy jako oddzielne
        słowa kluczowe i wykluczaj nieistotne. To najważniejsza rutyna przy kampaniach Broad Match.
      </p>
      <p>
        <strong>Smart Bidding jako fundament</strong> — Broad Match i manualne stawki CPC to bardzo ryzykowne
        połączenie. Jeśli używasz Broad Match, powinieneś używać automatycznej strategii stawek
        (docelowy CPA, docelowy ROAS lub Maksymalizacja konwersji) — wtedy system sam naucza się,
        jakie szerokie zapytania konwertują i odpowiednio reguluje stawki.
      </p>

      <h2>FAQ — Broad Match</h2>

      <h3>Czy Broad Match jest domyślnym typem dopasowania w Google Ads?</h3>
      <p>
        Tak. Każde słowo kluczowe dodane bez operatorów (cudzysłów ani nawiasy kwadratowe) jest automatycznie
        traktowane jako Broad Match. To jeden z powodów, dla których kampanie Google Ads bez doświadczonego
        specjalisty często przepalają budżet na nieistotne zapytania.
      </p>

      <h3>Jaka jest różnica między Broad Match a Phrase Match?</h3>
      <p>
        Broad Match wyświetla reklamę dla zapytań powiązanych z intencją słowa kluczowego —
        niekoniecznie zawierających te same słowa. Phrase Match (zapisany w cudzysłowie) wymaga,
        żeby zapytanie zawierało znaczenie frazy, choć nie musi być identyczne.
        Phrase Match jest bardziej przewidywalny i daje wyższą kontrolę niż Broad Match.
      </p>

      <h3>Czy powinienem używać wszystkich trzech typów dopasowania w jednej kampanii?</h3>
      <p>
        Nie jest to konieczne i może komplikować zarządzanie kampanią. Nowsze podejście rekomendowane przez Google
        to skupienie się na Broad Match + Smart Bidding lub Exact/Phrase Match z dokładnym zarządzaniem wykluczeniami.
        Mieszanie typów w jednej grupie reklam utrudnia kontrolę i interpretację danych.
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
                "name": "Czy Broad Match jest domyślnym typem dopasowania w Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak. Każde słowo kluczowe dodane bez operatorów (cudzysłów ani nawiasy) jest automatycznie Broad Match. Dlatego kampanie bez doświadczonego specjalisty często przepalają budżet na nieistotne zapytania."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest różnica między Broad Match a Phrase Match?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Broad Match wyświetla reklamę dla zapytań powiązanych z intencją — niekoniecznie zawierających te same słowa. Phrase Match wymaga, żeby zapytanie zawierało znaczenie frazy. Phrase Match jest bardziej przewidywalny."
                }
              },
              {
                "@type": "Question",
                "name": "Kiedy warto używać Broad Match?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Broad Match sprawdza się najlepiej przy kampaniach z historią konwersji (min. 30–50 miesięcznie) i włączonym Smart Bidding. Na początku lepiej zacząć od Phrase Match lub Exact Match, żeby mieć kontrolę nad wydatkami."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
