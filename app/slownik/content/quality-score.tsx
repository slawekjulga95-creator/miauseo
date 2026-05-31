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

export default function QualityScore() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Quality Score?</h2>
      <p>
        <strong>Quality Score</strong> (Wynik Jakości) to ocena przyznawana przez Google Ads
        każdemu słowu kluczowemu w kampanii — w skali od 1 do 10. Mierzy, jak trafna
        i przydatna jest Twoja reklama oraz strona docelowa w odniesieniu do intencji
        użytkownika, który wpisał dane zapytanie. Im wyższy Quality Score,
        tym niższy <Link href="/cpc">CPC</Link> i lepsza pozycja reklamy —
        co czyni go jednym z najważniejszych parametrów efektywności kampanii <Link href="/ppc">PPC</Link>.
      </p>
      <p>
        Quality Score nie jest wskaźnikiem historycznym ani stałym — jest obliczany
        przy każdej aukcji reklamowej w czasie rzeczywistym. Widoczna wartość 1–10
        w interfejsie Google Ads to agregacja pomocnicza, a nie dokładna wartość
        używana w aukcji.
      </p>

      <h2>Trzy składniki Quality Score</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Składnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co ocenia</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Waga</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Oczekiwany CTR</td><td className="p-4 text-zinc-600">Prawdopodobieństwo kliknięcia reklamy przez użytkownika</td><td className="p-4 text-zinc-600">Najwyższa</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Trafność reklamy</td><td className="p-4 text-zinc-600">Jak dobrze tekst reklamy odpowiada intencji zapytania</td><td className="p-4 text-zinc-600">Średnia</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Jakość strony docelowej</td><td className="p-4 text-zinc-600">Trafność i użyteczność <Link href="/landing-page">landing page</Link> dla użytkownika</td><td className="p-4 text-zinc-600">Średnia</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak Quality Score wpływa na koszty?</h2>
      <p>
        Quality Score jest kluczowym składnikiem <Link href="/adrank">Ad Rank</Link> —
        algorytmu decydującego o pozycji reklamy i faktycznym koszcie kliknięcia.
        Wzór jest uproszczony, ale intuicyjny: wyższy Quality Score obniża faktyczny CPC
        przy tej samej pozycji reklamy. Reklamodawca z QS 8 płaci mniej za tę samą
        pozycję niż konkurent z QS 4 i identyczną stawką.
      </p>
      <p>
        Różnica może być znacząca — Quality Score 10 vs 1 potrafi oznaczać 50–80% różnicy
        w efektywnym CPC. To sprawia, że optymalizacja Quality Score jest często bardziej
        opłacalna niż zwiększanie budżetu.
      </p>

      <h2>Jak poprawić Quality Score?</h2>
      <p>
        <strong>Poprawa oczekiwanego CTR</strong> — pisz teksty reklam z nagłówkami
        ściśle powiązanymi z intencją zapytania, używaj rozszerzeń reklam (sitelinks,
        callouts, structured snippets), testuj A/B wariantów nagłówków i opisów.
      </p>
      <p>
        <strong>Poprawa trafności reklamy</strong> — grupuj słowa kluczowe w tematycznie
        spójne grupy reklam (SKAG — Single Keyword Ad Groups lub STAG — Single Theme Ad Groups),
        żeby tekst reklamy dokładnie odpowiadał intencji każdej grupy fraz.
      </p>
      <p>
        <strong>Poprawa jakości strony docelowej</strong> — landing page musi odpowiadać
        obietnicy reklamy (message match), ładować się szybko (Core Web Vitals)
        i zawierać treść trafną dla użytkownika. Strona główna jako landing dla wszystkich
        reklam to najczęstszy błąd obniżający QS.
      </p>

      <InfoBox>
        <strong>Quality Score to diagnoza, nie cel sam w sobie:</strong> Wysoki Quality Score
        jest efektem ubocznym dobrze skonfigurowanej kampanii — nie powinieneś optymalizować
        wyłącznie pod wskaźnik QS. Kampania z QS 7 i niskim CPA jest lepsza niż kampania
        z QS 9 i wysokim CPA. Mierz efekty przez <Link href="/cpa">CPA</Link> i ROAS,
        a Quality Score traktuj jako wskazówkę diagnostyczną.
      </InfoBox>

      <h2>FAQ — Quality Score</h2>

      <h3>Jak sprawdzić Quality Score moich słów kluczowych?</h3>
      <p>
        W Google Ads przejdź do: Kampanie → Słowa kluczowe w sieci wyszukiwania →
        dodaj kolumnę „Wynik jakości". Zobaczysz wartości 1–10 dla każdego słowa kluczowego
        oraz rozbudowane kolumny dla poszczególnych składników (Oczekiwany CTR,
        Trafność reklamy, Jakość strony docelowej) z oceną „Poniżej średniej",
        „Średnia" lub „Powyżej średniej".
      </p>

      <h3>Czy Quality Score wpływa na kampanie Display i Performance Max?</h3>
      <p>
        Quality Score w tradycyjnej postaci (1–10) dotyczy wyłącznie kampanii
        w sieci wyszukiwania. W kampaniach Display i{" "}
        <Link href="/performance-max">Performance Max</Link> Google używa analogicznych
        sygnałów jakości, ale nie prezentuje ich jako jednolitego wskaźnika QS.
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
                "name": "Czym jest Quality Score w Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality Score (Wynik Jakości) to ocena 1–10 przyznawana słowom kluczowym w Google Ads na podstawie oczekiwanego CTR, trafności reklamy i jakości strony docelowej. Wyższy QS oznacza niższy CPC i lepszą pozycję reklamy."
                }
              },
              {
                "@type": "Question",
                "name": "Jak poprawić Quality Score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Popraw oczekiwany CTR przez trafniejsze nagłówki i rozszerzenia reklam. Zwiększ trafność reklamy przez tematyczne grupy słów kluczowych. Popraw landing page — musi odpowiadać intencji reklamy i ładować się szybko."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
