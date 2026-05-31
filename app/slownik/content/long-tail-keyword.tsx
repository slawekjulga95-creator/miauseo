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

export default function LongTailKeyword() {
  return (
    <div className="prose-blog">
      <h2>Czym jest long-tail keyword?</h2>
      <p>
        <strong>Long-tail keyword</strong> (fraza długiego ogona) to szczegółowe, wielosłowne zapytanie
        — zazwyczaj złożone z 3 lub więcej słów — charakteryzujące się niższym wolumenem wyszukiwań,
        ale wyższą intencją zakupową i znacznie mniejszą konkurencją niż ogólne frazy generyczne.
        Nazwa pochodzi od kształtu krzywej popytu: głowa (head terms) to kilka ogólnych fraz
        z ogromnym wolumenem, ogon (long tail) to tysiące lub miliony szczegółowych zapytań,
        które łącznie generują większość wyszukiwań.
      </p>
      <p>
        Statystyki mówią, że ok. 70% wszystkich zapytań w Google to właśnie frazy long-tail.
        Choć każda z nich ma relatywnie niski wolumen, łącznie reprezentują ogromną część ruchu
        organicznego — i to ruchu jakościowego, bo użytkownik, który wpisuje szczegółowe zapytanie,
        wie czego szuka i jest bliżej decyzji zakupowej.
      </p>

      <h2>Long-tail vs head terms — porównanie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cecha</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Head term</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Long-tail keyword</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Przykład</td><td className="p-4 text-zinc-600">„buty biegowe"</td><td className="p-4 text-zinc-600">„buty biegowe dla kobiet do maratonu szerokie"</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Wolumen</td><td className="p-4 text-zinc-600">Wysoki (10 000+/mies.)</td><td className="p-4 text-zinc-600">Niski (10–500/mies.)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Konkurencja</td><td className="p-4 text-zinc-600">Bardzo wysoka</td><td className="p-4 text-zinc-600">Niska do średniej</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Intencja</td><td className="p-4 text-zinc-600">Ogólna, informacyjna</td><td className="p-4 text-zinc-600">Konkretna, transakcyjna</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Konwersja</td><td className="p-4 text-zinc-600">Niska</td><td className="p-4 text-zinc-600">Wysoka</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Dlaczego warto celować w long-tail?</h2>
      <p>
        Nowe domeny z niskim <Link href="/domain-authority">Domain Authority</Link> nie mają szans
        na pierwsze strony Google dla konkurencyjnych head termów. Frazy long-tail pozwalają
        zdobywać ruch organiczny natychmiast — bo przy niskiej konkurencji nawet nowa strona
        może wskoczyć w top 10 przy odpowiedniej jakości treści.
      </p>
      <p>
        Wyższa <Link href="/intencja-wyszukiwania">intencja wyszukiwania</Link> przekłada się
        bezpośrednio na konwersje. Użytkownik szukający „pozycjonowanie lokalne gabinet kosmetyczny Kraków"
        jest znacznie bliżej podjęcia decyzji o zakupie niż ktoś szukający po prostu „SEO".
        Ruch z long-tail konwertuje lepiej — i to na każdym etapie lejka.
      </p>

      <InfoBox>
        <strong>Semantyczne podejście do long-tail:</strong> Nowoczesne SEO nie polega na tworzeniu
        osobnej strony dla każdej frazy long-tail — to prosta droga do thin content.
        Zamiast tego warto tworzyć wyczerpujące, eksperckie treści, które naturalnie pokrywają
        dziesiątki powiązanych fraz long-tail przez semantyczny kontekst (słowa{" "}
        <Link href="/lsi">LSI</Link>). Jeden solidny artykuł rankuje na setki wariantów zapytań.
      </InfoBox>

      <h2>Jak znajdować frazy long-tail?</h2>
      <p>
        <strong>Google Autocomplete i People Also Ask</strong> — wpisz frazę główną i obserwuj
        podpowiedzi Google; sekcja „Ludzie pytają również" to kopalnia long-tailowych pytań.
        <strong>Keyword Planner / Ahrefs / Semrush</strong> — filtruj frazy po niskim KD
        (Keyword Difficulty) i niskim wolumenie z wysoką wartością biznesową.
        <strong>GSC (Search Console)</strong> — raport „Zapytania" pokazuje, na jakie długie frazy
        już rankujesz i które mają potencjał do poprawy.
        <strong>Forums i Reddit / Quora</strong> — pytania zadawane przez prawdziwych użytkowników
        to naturalne źródło autentycznych long-tail queries.
      </p>

      <h2>FAQ — Long-tail Keyword</h2>

      <h3>Ile słów musi mieć fraza long-tail?</h3>
      <p>
        Nie ma sztywnej granicy — zazwyczaj 3+ słowa, choć ważniejsza jest specyficzność niż długość.
        „Pozycjonowanie" to head term. „Pozycjonowanie lokalne" to middle tail.
        „Pozycjonowanie lokalne dla gabinetu stomatologicznego" to long-tail — niezależnie od liczby słów,
        liczy się niski wolumen i wysoka intencja.
      </p>

      <h3>Czy Google Ads korzysta z long-tail keywords?</h3>
      <p>
        Tak — i to bardzo efektywnie. W Google Ads frazy long-tail mają zazwyczaj niższy koszt za kliknięcie
        (<Link href="/cpc">CPC</Link>) przy wyższej konwersji. Strategia bidowania na long-tail jest szczególnie
        skuteczna dla kampanii z ograniczonym budżetem lub w bardzo konkurencyjnych branżach.
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
                "name": "Czym jest long-tail keyword?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Long-tail keyword to szczegółowa fraza kluczowa złożona z 3+ słów, o niskim wolumenie wyszukiwań, małej konkurencji i wysokiej intencji zakupowej. Łącznie frazy long-tail generują ok. 70% wszystkich zapytań w Google."
                }
              },
              {
                "@type": "Question",
                "name": "Dlaczego warto celować w frazy long-tail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Frazy long-tail mają niską konkurencję (łatwiej rankować), wyższą intencję zakupową (lepiej konwertują) i są dostępne dla nowych domen bez silnego autorytetu. Jeden artykuł może naturalnie pokrywać setki long-tail wariantów."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
