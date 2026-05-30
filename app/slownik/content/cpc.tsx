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

export default function Cpc() {
  return (
    <div className="prose-blog">

      <h2>Czym jest CPC?</h2>
      <p>
        <strong>CPC</strong> (Cost Per Click, koszt za kliknięcie) to model rozliczeń w reklamie internetowej,
        w którym reklamodawca płaci wyłącznie wtedy, gdy użytkownik kliknie w reklamę — nie za jej wyświetlenie.
        CPC jest podstawowym modelem rozliczeń w <Link href="/google-ads">Google Ads</Link>
        (kampanie w wyszukiwarce, część kampanii display) i Meta Ads.
        W kontekście analizy kampanii CPC oznacza też wskaźnik — rzeczywisty koszt jednego kliknięcia,
        obliczany jako: CPC = całkowity koszt / liczba kliknięć.
      </p>
      <p>
        Jeśli kampania kosztuje 2 000 zł i generuje 500 kliknięć, średni CPC wynosi 4 zł.
        Ale CPC nie jest stałą wartością — zmienia się przy każdej aukcji, w zależności od konkurencji,
        <Link href="/quality-score"> Quality Score</Link> i kontekstu zapytania.
      </p>

      <h2>Jak działa aukcja CPC w Google Ads?</h2>
      <p>
        Powszechne przekonanie jest takie, że w Google Ads wygrywa ten, kto zapłaci najwięcej.
        Rzeczywistość jest bardziej subtelna. Każda aukcja opiera się na <Link href="/adrank">AdRank</Link> —
        wartości uwzględniającej zarówno stawkę (maksymalny CPC, który jesteś gotowy zapłacić),
        jak i <Link href="/quality-score">Quality Score</Link> (ocenę jakości reklamy, trafności
        i strony docelowej) oraz spodziewany efekt rozszerzeń reklamy.
      </p>
      <p>
        Rzeczywisty CPC który płacisz to nie Twoja stawka maksymalna, ale minimalna kwota potrzebna
        do zachowania pozycji — czyli AdRank następnego reklamodawcy podzielony przez Twój Quality Score,
        plus 0,01 zł. W praktyce oznacza to, że reklamodawca z wyższym QS płaci mniej za tę samą
        lub wyższą pozycję niż konkurent z niskim QS i wyższą stawką.
      </p>

      <h2>Czynniki wpływające na wysokość CPC</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czynnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wpływ na CPC</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czy możesz wpłynąć?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Konkurencja na słowo kluczowe</td>
              <td className="p-4 text-zinc-600">Im więcej reklamodawców, tym wyższy CPC</td>
              <td className="p-4 text-zinc-600">Częściowo — wybór słów kluczowych</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Quality Score</td>
              <td className="p-4 text-zinc-600">Wyższy QS → niższy rzeczywisty CPC</td>
              <td className="p-4 text-zinc-600">Tak — poprawa reklam i landing page</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Branża i wartość konwersji</td>
              <td className="p-4 text-zinc-600">Usługi prawne, finanse — CPC często 30–200 zł</td>
              <td className="p-4 text-zinc-600">Nie — cecha rynku</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Typ dopasowania słowa kluczowego</td>
              <td className="p-4 text-zinc-600">Exact match zazwyczaj droższy niż broad</td>
              <td className="p-4 text-zinc-600">Tak — strategia dopasowania</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Pora dnia i urządzenie</td>
              <td className="p-4 text-zinc-600">Szczyty ruchu = wyższa konkurencja = wyższy CPC</td>
              <td className="p-4 text-zinc-600">Tak — harmonogram i modyfikatory urządzeń</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Lokalizacja</td>
              <td className="p-4 text-zinc-600">Duże miasta zazwyczaj droższe</td>
              <td className="p-4 text-zinc-600">Tak — targetowanie geo i modyfikatory</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>CPC a <Link href="/cpa">CPA</Link> — kluczowe powiązanie:</strong> CPA = CPC / CR (Conversion Rate). Obniżenie CPC o 20% lub podniesienie CR o 25% daje taki sam efekt na CPA. Dlatego optymalizacja kampanii powinna iść dwutorowo: praca nad jakością reklam (CPC↓) i praca nad stroną docelową (CR↑).
      </InfoBox>

      <h2>Jak obniżyć CPC nie tracąc efektywności?</h2>
      <p>
        <strong>Popraw Quality Score</strong> — to najskuteczniejsza metoda. QS 8/10 vs QS 4/10
        przy tej samej stawce daje podwójną siłę przetargową. Pracuj nad trafnością reklam
        (nagłówki zawierające słowo kluczowe), oczekiwanym CTR (atrakcyjny przekaz, konkretna obietnica)
        i jakością <Link href="/landing-page">landing page</Link> (szybkość, trafność treści, UX).
      </p>
      <p>
        <strong>Wybierz mniej konkurencyjne frazy</strong> — długoogonowe słowa kluczowe
        (<Link href="/long-tail-keyword">long-tail keywords</Link>) mają niższe CPC i często
        wyższy <Link href="/conversion-rate">współczynnik konwersji</Link> ze względu na precyzyjną intencję.
        Fraza „adwokat Kraków od spraw spadkowych" jest tańsza i bardziej trafna niż „adwokat Kraków".
      </p>
      <p>
        <strong>Segmentuj kampanie</strong> — zamiast jednej kampanii z szeroką grupą słów kluczowych,
        rozbij ją na wąskie grupy tematyczne z dedykowanymi reklamami. Wyższa trafność = wyższy QS
        = niższy CPC. To podstawa struktury konta dającej efektywność kosztową.
      </p>
      <p>
        <strong>Używaj wykluczających słów kluczowych</strong> — <Link href="/negative-keyword">negative keywords</Link>
        eliminują nieistotne zapytania, które obniżają CTR i QS. Regularne przeglądanie raportu
        wyszukiwanych haseł i budowanie listy wykluczeń to jeden z najważniejszych nawyków optymalizacyjnych.
      </p>
      <p>
        <strong>Testuj harmonogram i geotargetowanie</strong> — wyłącz lub obniż stawki w godzinach
        i lokalizacjach, gdzie historyczne dane pokazują wysoki CPC przy niskiej konwersji.
        Dane demograficzne i urządzenia również warto przeanalizować pod tym kątem.
      </p>

      <h2>CPC a <Link href="/cpm">CPM</Link> i <Link href="/cpa">CPA</Link> — kiedy co wybrać?</h2>
      <p>
        Model CPC ma sens w kampaniach nastawionych na ruch i konwersje — płacisz tylko gdy ktoś wyraził
        zainteresowanie kliknięciem. CPM sprawdza się w kampaniach zasięgowych i brand awareness —
        płacisz za wyświetlenia bez względu na kliknięcia. CPA jako model rozliczeń (nie strategia stawek)
        jest stosowany w programach afiliacyjnych — płacisz prowizję dopiero po faktycznej konwersji.
        W Google Ads rozróżnienie jest nieco inne: CPC i CPM to typy stawek, docelowy CPA to strategia
        automatycznego ustalania stawek.
      </p>

      <h2>FAQ — CPC</h2>

      <h3>Ile wynosi średni CPC w Google Ads w Polsce?</h3>
      <p>
        Ogromny rozrzut — od 0,20 zł za niszowe frazy informacyjne do 200 zł i więcej za frazy
        z sektora finansowego, prawnego czy medycznego. Branżowe średnie dla popularnych sektorów:
        e-commerce 0,50–3 zł, usługi lokalne (hydraulik, elektryk) 1–8 zł, usługi prawne 15–80 zł,
        finanse i kredyty 10–150 zł. Sprawdź realistyczne CPC dla swoich fraz przez Planer słów kluczowych Google Ads.
      </p>

      <h3>Jaka jest różnica między maksymalnym CPC a rzeczywistym CPC?</h3>
      <p>
        Maksymalny CPC to kwota, którą deklarujesz jako górną granicę płatności za kliknięcie.
        Rzeczywisty CPC to kwota, którą faktycznie zapłaciłeś — zazwyczaj niższa od maksymalnego,
        bo Google nalicza tylko minimalną kwotę potrzebną do wygrania aukcji.
        Różnica między nimi to oszczędność wynikająca z mechanizmu aukcji Vickrey-Clarke-Groves.
      </p>

      <h3>Czy mogę ustawić CPC na poziomie 0 zł?</h3>
      <p>
        Nie — Google Ads ma minimalne stawki CPC, zależne od jakości konta i słowa kluczowego
        (zazwyczaj od 0,01 do 0,05 USD). Przy strategiach Smart Bidding nie ustawiasz CPC bezpośrednio
        — algorytm sam ustala stawki na poziomie każdej aukcji w celu realizacji wyznaczonego celu.
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
                "name": "Jak obliczyć CPC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPC = całkowity koszt kampanii / liczba kliknięć. Przykład: 2000 zł wydane, 500 kliknięć = CPC 4 zł. Rzeczywisty CPC naliczany przez Google jest zazwyczaj niższy od zadeklarowanego maksimum."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest Quality Score i jak wpływa na CPC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quality Score (1–10) ocenia trafność reklamy, oczekiwany CTR i jakość strony docelowej. Wyższy QS daje wyższy AdRank przy niższej stawce — reklamodawca z QS 8 płaci mniej za tę samą pozycję niż konkurent z QS 4 i wyższą stawką."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest różnica między CPC a CPM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPC — płacisz za kliknięcie (ruch, zainteresowanie). CPM — płacisz za 1000 wyświetleń (zasięg, widoczność). CPC sprawdza się w kampaniach performance, CPM w kampaniach brand awareness i zasięgowych."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
