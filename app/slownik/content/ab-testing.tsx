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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span className="text-[15px] text-zinc-600 leading-relaxed">{children}</span>
    </li>
  );
}

export default function AbTesting() {
  return (
    <div className="prose-blog">

      <h2>Problem, który rozwiązuje A/B testing</h2>
      <p>
        Wyobraź sobie, że właśnie uruchomiłeś nową <Link href="/landing-page">stronę docelową</Link> kampanii Google Ads.
        Grafik wybrał fioletowy przycisk CTA, copywriter napisał nagłówek „Twoja firma na szczycie Google" — i wszyscy są przekonani, że wersja jest dobra.
        Ale czy naprawdę? Na podstawie czego to wiecie? Intuicja i estetyczne preferencje to za mało, by podejmować decyzje biznesowe.
        A/B testing zastępuje przypuszczenia danymi.
      </p>
      <p>
        W marketingu cyfrowym <strong>niemal każda zmiana na stronie ma mierzalny wpływ na konwersje</strong> — pozytywny lub negatywny.
        Kolor przycisku, długość formularza, nagłówek, zdjęcie w tle, układ elementów — każdy z tych czynników wpływa na to,
        czy użytkownik zostaje i wykonuje akcję, czy odbija się od strony, zwiększając <Link href="/bounce-rate">wskaźnik odrzuceń</Link>.
      </p>

      <h2>Czym jest A/B testing?</h2>
      <p>
        <strong>A/B testing</strong> (testy A/B, split testing) to metoda optymalizacji, w której jednocześnie porównujesz
        dwie wersje tego samego elementu — strony, reklamy, emaila, przycisku — żeby sprawdzić, która generuje lepsze wyniki.
        Wersja A to wariant kontrolny (istniejący lub bazowy), wersja B to wariant testowy ze wprowadzoną zmianą.
        Ruch dzielony jest losowo między obie wersje, a wyniki mierzone są statystycznie.
      </p>
      <p>
        Metoda wywodzi się z badań klinicznych i rolniczych z początku XX wieku (Ronald Fisher, 1926).
        Do marketingu cyfrowego weszła na początku lat 2000-ych wraz z rozkwitem e-commerce. Dziś jest standardem
        zarówno w optymalizacji <Link href="/conversion-rate">współczynnika konwersji</Link> (CRO), jak i w kampaniach
        <Link href="/google-ads"> Google Ads</Link>.
      </p>

      <h2>Jak działa test A/B — mechanizm krok po kroku</h2>
      <p>
        Prawidłowo przeprowadzony test A/B nie jest losowym eksperymentem — to ustrukturyzowany proces oparty na hipotezie,
        który prowadzi do mierzalnych, powtarzalnych wniosków.
      </p>

      <h3>1. Zidentyfikuj problem i postaw hipotezę</h3>
      <p>
        Zanim zaczniesz cokolwiek testować, musisz wiedzieć <em>co</em> i <em>dlaczego</em>.
        Dobrą hipotezę formułujesz tak: „Jeśli zmienimy [element] z [wersja A] na [wersja B],
        to [wskaźnik] wzrośnie o [szacunek], ponieważ [uzasadnienie oparte na danych]."
        Przykład: „Jeśli zmienimy tekst CTA z »Dowiedz się więcej« na »Zarezerwuj bezpłatną konsultację«,
        to <Link href="/ctr">CTR</Link> formularza wzrośnie o co najmniej 20%, ponieważ konkretna obietnica wartości
        redukuje barierę wejścia."
      </p>

      <h3>2. Testuj tylko jedną zmienną naraz</h3>
      <p>
        Jeśli jednocześnie zmieniasz nagłówek, kolor przycisku i układ sekcji — nie będziesz wiedzieć, która zmiana
        spowodowała wzrost lub spadek konwersji. Jeden test = jedna zmienna. To żelazna zasada.
      </p>

      <h3>3. Podziel ruch 50/50 (lub inaczej, świadomie)</h3>
      <p>
        Standardowy podział to 50% użytkowników widzi wersję A, 50% wersję B. W przypadku testowania ryzykownych zmian
        możesz zacząć od podziału 90/10 — większość ruchu na bezpiecznej wersji kontrolnej. Pamiętaj, że im mniejszy
        udział wersji testowej, tym dłużej trwa osiągnięcie istotności statystycznej.
      </p>

      <h3>4. Zbieraj dane aż do istotności statystycznej</h3>
      <p>
        Nie kończ testu po 3 dniach tylko dlatego, że „wygląda obiecująco". Istotność statystyczna (zazwyczaj <strong>p &lt; 0,05</strong>,
        czyli 95% pewności) oznacza, że obserwowana różnica nie jest dziełem przypadku.
        Minimum to <strong>100 konwersji na każdą wersję</strong> i <strong>co najmniej 2 pełne tygodnie</strong> (by uchwycić różnice między dniami tygodnia).
      </p>

      <InfoBox>
        <strong>Błąd „zatrzymaj gdy widzę wynik":</strong> Zatrzymanie testu w momencie, gdy jedna wersja prowadzi,
        to jeden z najczęstszych błędów w A/B testingu. Powoduje fałszywie pozytywne wyniki — efekt nazywany
        „peeking problem". Ustal wielkość próby z góry i trzymaj się planu.
      </InfoBox>

      <h2>Case study: 62% wzrost konwersji przez zmianę jednego zdania</h2>
      <p>
        Agencja SEO testowała <Link href="/landing-page">landing page</Link> usługi pozycjonowania lokalnego.
        Wersja A zawierała nagłówek: <em>„Pozycjonowanie lokalne dla Twojej firmy"</em> i przycisk CTA
        <em>„Skontaktuj się"</em>. Wersja B miała nagłówek: <em>„Twoja firma w top 3 Google Maps w 90 dni"</em>
        i przycisk <em>„Sprawdź, czy kwalifikujesz się"</em>.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wskaźnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wersja A (kontrolna)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wersja B (testowa)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zmiana</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">CTR z reklamy</td>
              <td className="p-4 text-zinc-600">3,2%</td>
              <td className="p-4 text-zinc-600">4,8%</td>
              <td className="p-4 text-green-600 font-semibold">+50%</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Czas na stronie</td>
              <td className="p-4 text-zinc-600">1:12 min</td>
              <td className="p-4 text-zinc-600">2:05 min</td>
              <td className="p-4 text-green-600 font-semibold">+73%</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Współczynnik konwersji</td>
              <td className="p-4 text-zinc-600">2,1%</td>
              <td className="p-4 text-zinc-600">3,4%</td>
              <td className="p-4 text-green-600 font-semibold">+62%</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Koszt leada (CPA)</td>
              <td className="p-4 text-zinc-600">187 zł</td>
              <td className="p-4 text-zinc-600">115 zł</td>
              <td className="p-4 text-green-600 font-semibold">−38%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Test trwał 3 tygodnie, próba wynosiła 1 200 odwiedzin na wersję. Istotność statystyczna: 97%.
        Zwycięzca (wersja B) stał się nową wersją kontrolną — i punkt startowy kolejnego testu.
        To jest właśnie kultura CRO: ciągłe, iteracyjne doskonalenie.
      </p>

      <h2>Co można (i warto) testować w SEO i SEM?</h2>
      <p>A/B testing ma zastosowanie na wielu poziomach kampanii i strony:</p>

      <h3>W Google Ads</h3>
      <ul>
        <li>Nagłówki reklam (RSA — testuj do 15 nagłówków, Google sam optymalizuje)</li>
        <li>Opisy reklam i CTA</li>
        <li>Rozszerzenia reklam (sitelinki, wywołania, lokalizacja)</li>
        <li>Strony docelowe (przy tej samej grupie reklam)</li>
        <li>Strategie ustalania stawek (manual CPC vs. docelowy CPA vs. docelowy ROAS)</li>
      </ul>

      <h3>Na stronie (CRO)</h3>
      <ul>
        <li>Nagłówki H1 i lead</li>
        <li>Tekst i kolor przycisku CTA</li>
        <li>Długość i pola formularza</li>
        <li>Układ sekcji (hero, opinie, cennik)</li>
        <li>Zdjęcia i wideo w sekcji hero</li>
        <li>Dowody społeczne (liczba klientów, logotypy, gwiazdki)</li>
      </ul>

      <h2>Checklist dobrego testu A/B</h2>
      <ul className="not-prose space-y-3 my-6">
        <CheckItem>Masz jasną hipotezę opartą na danych (analityka, nagrania sesji, heatmapy)</CheckItem>
        <CheckItem>Testujesz tylko jedną zmienną naraz</CheckItem>
        <CheckItem>Obliczasz wymaganą wielkość próby przed uruchomieniem (kalkulator np. Evan Miller)</CheckItem>
        <CheckItem>Test działa przez co najmniej 2 pełne tygodnie</CheckItem>
        <CheckItem>Masz minimum 100 konwersji na każdą wersję przed oceną wyników</CheckItem>
        <CheckItem>Sprawdzasz istotność statystyczną (min. 95%) przed podjęciem decyzji</CheckItem>
        <CheckItem>Monitorujesz mikrokonwersje, nie tylko główny cel (by nie przeoczyć efektów ubocznych)</CheckItem>
        <CheckItem>Wyciągasz wnioski i dokumentujesz — każdy test to wiedza na przyszłość</CheckItem>
      </ul>

      <h2>Narzędzia do A/B testingu</h2>
      <ul>
        <li><strong>Google Optimize Successor (VWO, Optimizely, AB Tasty)</strong> — platformy CRO dla stron</li>
        <li><strong>Google Ads Experiments</strong> — testy A/B kampanii i grup reklam bezpośrednio w panelu</li>
        <li><strong>Google Analytics 4</strong> — analiza segmentów i ścieżek konwersji, integracja z testami</li>
        <li><strong>Hotjar / Microsoft Clarity</strong> — nagrania sesji i heatmapy do generowania hipotez</li>
        <li><strong>Unbounce / Instapage</strong> — landing page buildery ze wbudowanym A/B testingiem</li>
      </ul>

      <InfoBox>
        <strong>A/B testing w kontekście <Link href="/quality-score">Quality Score</Link>:</strong> Testowanie różnych wersji strony docelowej bezpośrednio wpływa na ocenę jakości reklamy Google Ads.
        Strona z lepszym UX, szybciej ładująca się i trafniej odpowiadająca intencji zapytania — to wyższy Quality Score,
        niższy CPC i lepsza pozycja reklamy.
      </InfoBox>

      <h2>FAQ — A/B Testing</h2>

      <h3>Ile czasu powinien trwać test A/B?</h3>
      <p>
        Minimum 2 tygodnie (żeby uchwycić różnice między dniami tygodnia i zachowaniami użytkowników w różnych kontekstach).
        Maksymalny czas to taki, po którym Twój ruch już nie rośnie i próba jest wystarczająca — zazwyczaj 4–8 tygodni.
        Nie przerywaj testu tylko dlatego, że jedna wersja prowadzi — czekaj na istotność statystyczną.
      </p>

      <h3>Czy A/B testing może zaszkodzić SEO?</h3>
      <p>
        Nie, jeśli jest prawidłowo wdrożony. Google oficjalnie potwierdza, że A/B testing jest zgodny z ich wytycznymi.
        Kluczowe: nie używaj cloakingu (inna treść dla Googlebota i użytkownika), używaj tagów canonical lub hreflang
        jeśli testujesz na osobnych URL, i nie pozostawiaj testów włączonych zbyt długo po wyłonieniu zwycięzcy.
      </p>

      <h3>Ile wariantów testować jednocześnie?</h3>
      <p>
        Klasyczny A/B test to 2 warianty. Testy z 3–4 wariantami (A/B/C/D) są możliwe, ale wymagają proporcjonalnie
        większego ruchu do osiągnięcia istotności statystycznej. Jeśli ruch jest ograniczony, trzymaj się 2 wariantów.
      </p>

      <h3>Czym różni się A/B testing od testów wielowymiarowych (MVT)?</h3>
      <p>
        Test A/B zmienia jeden element i porównuje 2 wersje. Test wielowymiarowy (Multivariate Testing, MVT) testuje
        jednocześnie wiele kombinacji różnych elementów (np. 3 nagłówki × 2 obrazy = 6 kombinacji). MVT wymaga
        znacznie więcej ruchu i jest lepszy do zrozumienia interakcji między elementami.
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
                "name": "Ile czasu powinien trwać test A/B?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Minimum 2 tygodnie, żeby uchwycić różnice między dniami tygodnia. Nie przerywaj testu bez osiągnięcia istotności statystycznej (min. 95%) i co najmniej 100 konwersji na każdą wersję."
                }
              },
              {
                "@type": "Question",
                "name": "Czy A/B testing może zaszkodzić SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie, jeśli jest prawidłowo wdrożony. Google oficjalnie zatwierdza A/B testing jako zgodny z wytycznymi, pod warunkiem że nie stosujesz cloakingu i nie pozostawiasz testów włączonych bezterminowo."
                }
              },
              {
                "@type": "Question",
                "name": "Czym różni się A/B testing od testów wielowymiarowych?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Test A/B zmienia jeden element i porównuje 2 wersje. Test wielowymiarowy (MVT) testuje jednocześnie wiele kombinacji różnych elementów i wymaga znacznie większego ruchu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
