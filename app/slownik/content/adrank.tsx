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

export default function Adrank() {
  return (
    <div className="prose-blog">

      <h2>Czym jest AdRank?</h2>
      <p>
        <strong>AdRank</strong> to wartość liczbowa obliczana przez Google dla każdej reklamy biorącej udział w aukcji.
        Decyduje o tym, czy reklama w ogóle się wyświetli oraz na której pozycji w wynikach wyszukiwania.
        Wyższy AdRank = lepsza pozycja i potencjalnie niższy <Link href="/cpc">koszt kliknięcia (CPC)</Link>.
        Wartość ta jest obliczana przy <em>każdej</em> aukcji — czyli za każdym razem, gdy ktoś wpisuje zapytanie
        powiązane z Twoimi słowami kluczowymi.
      </p>
      <p>
        Kluczowa zasada systemu AdRank jest kontrointuicyjna dla wielu reklamodawców: <strong>nie wygrasz aukcji
        wyłącznie wyższą stawką</strong>. Reklamodawca z niższym budżetem, ale bardziej trafną i jakościową kampanią,
        może zajmować wyższą pozycję i płacić mniej za kliknięcie niż konkurent z wysokim budżetem,
        ale słabą jakością reklam.
      </p>

      <h2>Dlaczego AdRank ma kluczowe znaczenie dla efektywności kampanii?</h2>
      <p>
        AdRank wpływa bezpośrednio na trzy rzeczy:
      </p>
      <ul>
        <li><strong>Pozycję reklamy</strong> w <Link href="/serp">stronie wyników wyszukiwania (SERP)</Link> — im wyższy AdRank, tym wyższa pozycja</li>
        <li><strong>Rzeczywisty koszt kliknięcia</strong> — CPC który płacisz to nie Twoja maksymalna stawka, ale AdRank konkurenta poniżej Ciebie podzielony przez Twój <Link href="/quality-score">Quality Score</Link>, plus 0,01 zł</li>
        <li><strong>Kwalifikację do rozszerzeń reklam</strong> — sitelinki, lokalizacje, wywołania wyświetlają się tylko przy wystarczającym AdRanku</li>
      </ul>
      <p>
        W praktyce oznacza to, że poprawa jakości kampanii — zamiast zwykłego podnoszenia stawek — jest
        często bardziej opłacalną drogą do lepszych wyników w <Link href="/google-ads">Google Ads</Link>.
      </p>

      <h2>Składniki AdRank — co Google bierze pod uwagę?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czynnik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co oznacza</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Jak poprawić</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Stawka (bid)</td>
              <td className="p-4 text-zinc-600">Maksymalna kwota, którą chcesz zapłacić za kliknięcie</td>
              <td className="p-4 text-zinc-600">Używaj inteligentnych strategii stawek (docelowy CPA/ROAS)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/quality-score">Quality Score</Link></td>
              <td className="p-4 text-zinc-600">Ocena 1–10: trafność reklamy, oczekiwany CTR, jakość landing page</td>
              <td className="p-4 text-zinc-600">Lepsza trafność słów kluczowych, reklam i strony docelowej</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Oczekiwany wpływ zasobów</td>
              <td className="p-4 text-zinc-600">Szacowany efekt rozszerzeń reklam (sitelinki, ceny, lokalizacja)</td>
              <td className="p-4 text-zinc-600">Dodaj wszystkie trafne rozszerzenia i zasoby reklamy</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Kontekst aukcji</td>
              <td className="p-4 text-zinc-600">Urządzenie, lokalizacja, pora dnia, zapytanie użytkownika</td>
              <td className="p-4 text-zinc-600">Segmentuj kampanie i używaj modyfikatorów stawek</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Progi AdRank</td>
              <td className="p-4 text-zinc-600">Minimalne wartości AdRank wymagane do wyświetlenia reklamy</td>
              <td className="p-4 text-zinc-600">Popraw Quality Score lub zwiększ stawkę jeśli reklama nie wyświetla się</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Quality Score — serce AdRank</h2>
      <p>
        <Link href="/quality-score">Quality Score</Link> to metryka w skali 1–10, którą Google przypisuje każdemu słowu kluczowemu.
        Składa się z trzech elementów:
      </p>
      <ul>
        <li><strong>Oczekiwany CTR</strong> — jak często użytkownicy klikają Twoją reklamę w porównaniu do konkurencji przy tym samym słowie kluczowym. Historyczny <Link href="/ctr">Click-Through Rate</Link> ma tu największe znaczenie.</li>
        <li><strong>Trafność reklamy</strong> — jak dobrze treść reklamy odpowiada intencji zapytania użytkownika i słowa kluczowego.</li>
        <li><strong>Jakość strony docelowej</strong> — jak szybko ładuje się <Link href="/landing-page">landing page</Link>, jak trafna jest jego treść i jak dobry UX oferuje użytkownikowi po kliknięciu.</li>
      </ul>

      <InfoBox>
        <strong>Matematyka AdRank w uproszczeniu:</strong> Jeśli Twój QS to 8/10 a stawka to 2 zł, a konkurent ma QS 4/10 i stawkę 3 zł — Twój AdRank (2 × 8 = 16) bije jego (3 × 4 = 12). Zajmujesz wyższą pozycję i płacisz mniej za kliknięcie. To dlatego inwestycja w jakość kampanii zwraca się wielokrotnie.
      </InfoBox>

      <h2>Jak krok po kroku poprawić AdRank bez zwiększania budżetu?</h2>

      <h3>Krok 1: Napraw strukturę konta</h3>
      <p>
        Grupy reklam powinny być wąsko tematyczne — jedna grupa = jedna intencja. Reklamy w grupie „Mechanik Warszawa"
        nie powinny zawierać słów kluczowych o wulkanizacji ani klimatyzacji. Im węższe grupy, tym łatwiej pisać
        trafne reklamy i dobierać idealne strony docelowe.
      </p>

      <h3>Krok 2: Pisz reklamy odpowiadające dosłownie na zapytanie</h3>
      <p>
        Nagłówek reklamy powinien zawierać słowo kluczowe lub jego bliski synonim. Użytkownik wpisuje
        „hydraulik Kraków dostępny od zaraz" — Twoja reklama powinna odpowiadać językiem i obietnicą,
        która pasuje do tego zapytania. Oczekiwany CTR rośnie, gdy reklama wygląda jak dokładna odpowiedź.
      </p>

      <h3>Krok 3: Zadbaj o stronę docelową</h3>
      <p>
        Strona docelowa powinna kontynuować przekaz reklamy — jeśli reklama mówi „bezpłatna wycena w 24h",
        na stronie powinno być widać ten formularz lub numer telefonu w sekcji hero. Google ocenia trafność,
        szybkość ładowania i użyteczność strony. To są bezpośrednie wejścia do Quality Score.
      </p>

      <h3>Krok 4: Dodaj wszystkie trafne zasoby reklamy</h3>
      <p>
        Sitelinki, rozszerzenia z objaśnieniami, lokalizacja, ceny, formularze kontaktowe — każde trafne rozszerzenie
        podnosi oczekiwany wpływ zasobów i poprawia AdRank. Google szacuje, że reklamy z rozszerzeniami
        mają <Link href="/ctr">CTR</Link> wyższy średnio o 10–15%.
      </p>

      <h3>Krok 5: Wyklucz niechciane zapytania</h3>
      <p>
        Słabe dopasowania słów kluczowych powodują wyświetlanie reklam przy irrelewantnych zapytaniach.
        Niskie CTR z takich wyświetleń obniża Quality Score i pogarsza AdRank. Regularne przeglądanie raportu
        wyszukiwanych haseł i dodawanie wykluczających słów kluczowych to rutyna każdej dobrze zarządzanej kampanii <Link href="/ppc">PPC</Link>.
      </p>

      <h2>Wskaźniki do monitorowania</h2>
      <ul>
        <li><strong>Quality Score</strong> — sprawdzaj na poziomie słowa kluczowego w Google Ads (kolumna „Wynik jakości")</li>
        <li><strong>Pozycja średnia / udział w wyświetleniach na górze strony</strong> — mierzy efekty AdRank na widoczność</li>
        <li><strong>Utracony udział w wyświetleniach z powodu rangi</strong> — ile reklam nie wyświetliło się z powodu zbyt niskiego AdRank</li>
        <li><strong>Rzeczywisty CPC</strong> — spada gdy Twój AdRank rośnie szybciej niż stawki konkurentów</li>
      </ul>

      <h2>FAQ — AdRank</h2>

      <h3>Czy AdRank to to samo, co Quality Score?</h3>
      <p>
        Nie. Quality Score to jeden ze składników AdRank (obok stawki, wpływu zasobów i kontekstu aukcji).
        Quality Score jest wyświetlany w interfejsie Google Ads jako liczba 1–10. AdRank to wewnętrzna wartość
        Google, której dokładna liczba nie jest publicznie dostępna.
      </p>

      <h3>Czy mogę wygrać aukcję z niższą stawką niż konkurent?</h3>
      <p>
        Tak — i to jest jeden z fundamentów systemu. Jeśli Twój Quality Score jest wystarczająco wyższy,
        Twój AdRank może być większy przy niższej stawce. To Google nagradza za jakość i trafność,
        nie tylko za budżet reklamowy.
      </p>

      <h3>Jak często Google przelicza AdRank?</h3>
      <p>
        AdRank jest obliczany przy każdej aukcji — każdym wyszukiwaniu użytkownika powiązanym z Twoim słowem kluczowym.
        Nie jest to stała wartość — zmienia się w zależności od kontekstu zapytania, urządzenia, pory dnia i aktualnej konkurencji.
      </p>

      <h3>Co zrobić gdy reklama nie wyświetla się mimo aktywnej kampanii?</h3>
      <p>
        Sprawdź raport „Utracony udział w wyświetleniach" — jeśli przyczyną jest „Ranga" (a nie budżet),
        problem leży w zbyt niskim AdRank. Popraw Quality Score (trafność reklam, landing page) lub zwiększ stawkę.
        Sprawdź też, czy nie masz zbyt restrykcyjnego targetowania geograficznego lub demograficznego.
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
                "name": "Czy AdRank to to samo, co Quality Score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. Quality Score (1–10) to jeden ze składników AdRank. AdRank to wewnętrzna wartość Google uwzględniająca również stawkę, wpływ zasobów reklamy i kontekst aukcji."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę wygrać aukcję z niższą stawką niż konkurent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak. Jeśli Twój Quality Score jest wystarczająco wyższy, Twój AdRank może przewyższyć AdRank konkurenta z wyższą stawką. Google premiuje jakość i trafność reklam."
                }
              },
              {
                "@type": "Question",
                "name": "Jak często Google przelicza AdRank?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AdRank jest obliczany przy każdej aukcji — dla każdego wyszukiwania użytkownika. To wartość dynamiczna, zmieniająca się w zależności od urządzenia, lokalizacji, pory dnia i aktualnej konkurencji."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
