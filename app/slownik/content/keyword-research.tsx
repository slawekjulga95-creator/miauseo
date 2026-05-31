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
export default function KeywordResearch() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Keyword Research?</h2>
      <p>
        <strong>Keyword research</strong> (badanie słów kluczowych, analiza fraz) to proces identyfikacji
        i oceny fraz, które potencjalni klienci wpisują w Google szukając produktów, usług lub informacji
        związanych z Twoim biznesem. To fundament każdej strategii SEO i SEM — bez solidnego keyword research
        optymalizujesz treści i kampanie w ciemno, bez wiedzy o tym, jak naprawdę szukają Twoi klienci.
      </p>
      <p>
        Dobry keyword research odpowiada na trzy pytania jednocześnie: <em>jakie frazy wpisują potencjalni klienci</em>
        (odkrycie), <em>jak duży mają potencjał</em> (wolumen, trudność, wartość biznesowa) i
        <em>jakiej treści oczekują</em> (<Link href="/intencja-wyszukiwania">intencja wyszukiwania</Link>).
        Odpowiedź na wszystkie trzy to przepis na treść, która rankuje i konwertuje.
      </p>

      <h2>Kluczowe metryki w analizie słów kluczowych</h2>
      <p>
        <strong>Search Volume (wolumen wyszukiwań)</strong> — średnia miesięczna liczba wyszukiwań dla frazy.
        Wolumen jest orientacyjny — Google Keyword Planner podaje go w przedziałach (1–10K, 10K–100K),
        Ahrefs i Semrush podają konkretne liczby z własnych estymacji (nie zawsze zgodne z rzeczywistością).
        Wolumen jest mierzony dla konkretnego kraju lub globalnie.
      </p>
      <p>
        <strong>Keyword Difficulty (KD)</strong> — jak trudno wejść do top 10 dla danej frazy.
        Wyrażony w skali 0–100. KD poniżej 30 — stosunkowo łatwe dla domen z niskim autorytetem.
        KD 30–60 — wymaga solidnego profilu linków. KD powyżej 60 — trudne, wymagające czasu i zasobów.
        Ważne: KD z różnych narzędzi (Ahrefs vs Semrush) nie są bezpośrednio porównywalne.
      </p>
      <p>
        <strong>CPC (w kontekście keyword research)</strong> — średni <Link href="/cpc">koszt kliknięcia</Link>
        dla danej frazy w Google Ads. Wysoki CPC sygnalizuje wysoką intencję komercyjną i wartość ruchu.
        Przydatne przy ocenie wartości biznesowej frazy organicznej.
      </p>
      <p>
        <strong>SERP features</strong> — jakie elementy pojawiają się dla danej frazy w wynikach
        (<Link href="/featured-snippet">featured snippet</Link>, Local Pack, karuzele, People Also Ask).
        Wpływają na faktyczny CTR organiczny nawet przy wysokiej pozycji.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Mocne strony</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Ahrefs Keywords Explorer</td><td className="p-4 text-zinc-600">Dokładność KD, click data, parent topic</td><td className="p-4 text-zinc-600">Od 129$/mies</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Semrush Keyword Magic</td><td className="p-4 text-zinc-600">Ogromna baza, analiza konkurencji</td><td className="p-4 text-zinc-600">Od 129$/mies</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Google Keyword Planner</td><td className="p-4 text-zinc-600">Oficjalne dane Google — bezpłatny</td><td className="p-4 text-zinc-600">Bezpłatny (wymaga konta Ads)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Google Search Console</td><td className="p-4 text-zinc-600">Rzeczywiste frazy Twojej strony</td><td className="p-4 text-zinc-600">Bezpłatny</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Ubersuggest / Mangools</td><td className="p-4 text-zinc-600">Tańsza alternatywa dla MŚP</td><td className="p-4 text-zinc-600">Od 29$/mies</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Keyword research ≠ jednorazowe działanie:</strong> Frazy ewoluują — pojawiają się nowe trendy, zmienia się język branży, algorytmy Google zmieniają sposób rozumienia intencji. Keyword research powinien być powtarzany co 6–12 miesięcy oraz przy każdej nowej kampanii lub kategorii treści. <Link href="/google-search-console">GSC</Link> daje bieżące dane o frazach, które już generują wyświetlenia — to cenny punkt wyjścia do odkrywania nowych możliwości.
      </InfoBox>

      <h2>FAQ — Keyword Research</h2>
      <h3>Od czego zacząć keyword research dla nowej strony?</h3>
      <p>
        Zacznij od analizy swojej oferty i problemów klientów — lista tematów, nie fraz.
        Następnie sprawdź frazy konkurentów rankujących w top 10 (Ahrefs: Site Explorer → Organic Keywords).
        Uzupełnij przez Google autocomplete (wpisz frazę bazową i sprawdź podpowiedzi), People Also Ask
        i powiązane wyszukiwania na dole SERP. Wreszcie oceń każdą frazę przez KD, wolumen i intencję.
      </p>
      <h3>Czy skupiać się na frazach z dużym wolumenem czy małym?</h3>
      <p>
        Dla nowych domen lub stron z małym autorytetem: frazy <Link href="/long-tail-keyword">long-tail</Link>
        z małym wolumenem (KD poniżej 30) przyniosą pierwsze rankingi i konwersje szybciej niż walka
        z liderami na dużych frazach. Buduj autorytet na długim ogonie, a z czasem zacznij targetować
        szersze frazy head. To klasyczna strategia od bottom-up.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest keyword research?", "acceptedAnswer": { "@type": "Answer", "text": "Keyword research to identyfikacja i ocena fraz wpisywanych przez potencjalnych klientów w Google. Analizuje wolumen wyszukiwań, trudność rankingową (KD) i intencję wyszukiwania. Fundament każdej strategii SEO." } }] }) }} />
    </div>
  );
}
