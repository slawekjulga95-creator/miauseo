import Link from "next/link";
function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" stackLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}
export default function IntencjaWyszukiwania() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Intencja Wyszukiwania?</h2>
      <p>
        <strong>Intencja wyszukiwania</strong> (search intent, user intent) to cel, który użytkownik
        chce osiągnąć wpisując konkretną frazę w wyszukiwarkę. To pytanie: <em>czego tak naprawdę szuka
        ta osoba?</em> Dwie osoby wpisujące tę samą frazę mogą mieć zupełnie różne intencje —
        ktoś wpisujący „kawa" może szukać definicji, przepisu, sklepu z kawą lub historii kawiarni w mieście.
        Google rozumie tę wieloznaczność i stara się wyświetlić wyniki pasujące do najczęstszej intencji dla danej frazy.
      </p>
      <p>
        Zrozumienie intencji wyszukiwania to fundament skutecznego SEO. Strona, która perfekcyjnie odpowiada
        na intencję zapytania, będzie rankować wyżej niż strona z większą liczbą linków,
        ale niedopasowanym formatem treści. Google coraz skuteczniej nagradza trafność kontekstową
        — nie dosłowne dopasowanie słów.
      </p>

      <h2>Cztery typy intencji wyszukiwania</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cel użytkownika</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykłady fraz</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Odpowiedni format treści</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Informacyjna</td><td className="p-4 text-zinc-600">Zdobycie wiedzy, odpowiedź na pytanie</td><td className="p-4 text-zinc-600">„co to jest CTR", „jak działa SEO"</td><td className="p-4 text-zinc-600">Artykuł, poradnik, definicja, FAQ</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Nawigacyjna</td><td className="p-4 text-zinc-600">Dotarcie do konkretnej strony lub marki</td><td className="p-4 text-zinc-600">„Google Analytics logowanie", „MiauSEO"</td><td className="p-4 text-zinc-600">Strona marki, strona logowania</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Transakcyjna</td><td className="p-4 text-zinc-600">Zakup lub inna konwersja teraz</td><td className="p-4 text-zinc-600">„kup iPhone 15", „pozycjonowanie Kraków cennik"</td><td className="p-4 text-zinc-600">Strona produktu, cennik, landing page</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Komercyjna (porównawcza)</td><td className="p-4 text-zinc-600">Porównanie opcji przed decyzją</td><td className="p-4 text-zinc-600">„najlepsze narzędzia SEO", „iPhone vs Samsung"</td><td className="p-4 text-zinc-600">Porównanie, ranking, recenzja</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak Google rozumie intencję?</h2>
      <p>
        Google analizuje intencję przez obserwację tego, co faktycznie klikają i jak długo oglądają
        użytkownicy dla danej frazy (historyczne dane kliknięć), oraz przez modele języka naturalnego
        (BERT, MUM, Gemini) rozumiejące kontekst semantyczny zapytania.
        Praktyczny sposób na sprawdzenie dominującej intencji dla frazy: wpisz ją w Google i przejrzyj
        top 10 wyników. Jeśli większość to artykuły blogowe — intencja jest informacyjna.
        Jeśli to strony produktowe — transakcyjna. Jeśli rankingi i porównania — komercyjna.
        <strong>SERP to lustro intencji</strong> — i jest najlepszym dostępnym darmowym narzędziem
        do jej analizy.
      </p>

      <InfoBox>
        <strong>Intencja a <Link href="/keyword-research">keyword research</Link>:</strong> Duży błąd w badaniu słów kluczowych to skupianie się wyłącznie na wolumenie wyszukiwań bez analizy intencji. Fraza z wolumenem 5000 o intencji informacyjnej nie przyciągnie zakupów. Fraza z wolumenem 50 o intencji transakcyjnej może generować konkretnych klientów. Dobierając frazy do treści, zawsze dopasuj format strony do intencji dominującej w SERP.
      </InfoBox>

      <h2>FAQ — Intencja Wyszukiwania</h2>
      <h3>Jak dopasować treść do intencji wyszukiwania?</h3>
      <p>
        Sprawdź w Google, jaki format treści dominuje w top 10 dla Twojej frazy — to odpowiedź na pytanie
        o intencję. Dla intencji informacyjnej pisz artykuł edukacyjny z kompletną odpowiedzią.
        Dla transakcyjnej twórz stronę produktową lub usługową z jasnym CTA. Dla komercyjnej —
        porównanie opcji z pomocnymi kryteriami wyboru. Nie twórz strony produktowej dla informacyjnej frazy
        i odwrotnie — ryzykujesz niski ranking niezależnie od jakości treści.
      </p>
      <h3>Czy jedna strona może targetować różne intencje?</h3>
      <p>
        Trudne — zazwyczaj strona dobrze odpowiada na jedną dominującą intencję.
        Mieszanie informacyjnego poradnika z agresywnym CTA sprzedażowym dezorientuje zarówno użytkownika,
        jak i algorytm Google. Lepszym podejściem jest tworzenie oddzielnych stron dla różnych intencji
        i łączenie ich przez <Link href="/internal-linking">internal linking</Link> — np. artykuł informacyjny
        linkuje do strony usługowej dla tych gotowych do konwersji.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest intencja wyszukiwania?", "acceptedAnswer": { "@type": "Answer", "text": "Intencja wyszukiwania to cel użytkownika wpisującego frazę w Google. Cztery typy: informacyjna (szuka wiedzy), nawigacyjna (szuka konkretnej strony), transakcyjna (chce kupić/konwertować), komercyjna (porównuje opcje przed decyzją)." } }] }) }} />
    </div>
  );
}
