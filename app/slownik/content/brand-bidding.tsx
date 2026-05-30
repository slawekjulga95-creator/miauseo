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

export default function BrandBidding() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Brand Bidding?</h2>
      <p>
        <strong>Brand bidding</strong> (licytowanie na markę) to strategia w kampaniach
        <Link href="/google-ads"> Google Ads</Link>, w której reklamodawca ustawia jako słowa kluczowe
        nazwy marek — własnej lub cudzej. Gdy użytkownik wpisuje w Google nazwę konkretnej firmy lub produktu,
        reklama pojawia się nad lub obok wyników organicznych. To jeden z najgorętszych tematów spornych
        w marketingu cyfrowym — bo dotyka zarówno relacji z własną marką, jak i etyki rywalizacji z konkurentami.
      </p>

      <h2>Brand bidding na własną markę</h2>
      <p>
        Licytowanie na własną markę to strategia defensywna, która na pierwszy rzut oka może wydawać się
        bez sensu — po co płacić za kliknięcia użytkowników, którzy i tak szukają Ciebie?
        W praktyce jest kilka poważnych powodów, dla których wiele firm to robi.
      </p>
      <p>
        <strong>Ochrona przestrzeni reklamowej przed konkurencją</strong> — jeśli Ty nie licytujesz na swoją markę,
        zrobi to ktoś inny. Konkurent może wykupić Twoją nazwę i przechwycić użytkowników, którzy świadomie
        Cię szukali. Własna reklama brandowa wypycha ich oferty z widocznych pozycji.
      </p>
      <p>
        <strong>Pełna kontrola nad przekazem</strong> — wynik organiczny na nazwę marki jest względnie stały,
        ale reklama brandowa pozwala dynamicznie kontrolować nagłówek, opis i stronę docelową.
        Możesz promować aktualną ofertę, wyprzedaż czy nowy produkt bezpośrednio w momencie wyszukiwania.
      </p>
      <p>
        <strong>Bardzo wysokie <Link href="/quality-score">Quality Score</Link> i niski <Link href="/cpc">CPC</Link></strong>
        — kampanie brandowe mają zazwyczaj QS 9–10/10, bo reklama, landing page i słowo kluczowe są maksymalnie
        spójne. Oznacza to, że koszt kliknięcia na własną markę jest często kilkakrotnie niższy niż
        w kampaniach niemarkowych. Efektywność kosztowa jest więc często znacznie lepsza niż się wydaje.
      </p>
      <p>
        <strong>Dodatkowe miejsce w SERP</strong> — gdy pojawia się zarówno reklama brandowa,
        jak i wynik organiczny na pierwszej pozycji, Twoja marka zajmuje dwa z trzech widocznych
        bez scrollowania miejsc na stronie wyników. To sygnał dominacji i wiarygodności.
      </p>

      <h2>Brand bidding na markę konkurencji</h2>
      <p>
        Licytowanie na nazwę konkurenta to strategia ofensywna i znacznie bardziej kontrowersyjna.
        Gdy ktoś szuka „Serwis XYZ", Twoja reklama pojawia się nad lub obok wyników dla tej firmy.
        Google pozwala na licytowanie na cudze marki jako słowa kluczowe — ale z ważnym ograniczeniem:
        <strong>nie możesz użyć chronionego znaku towarowego w treści samej reklamy</strong>
        (w nagłówku, opisie, URL). Możesz licytować na słowo, ale nie możesz pisać „Lepsza alternatywa dla XYZ"
        w reklamie, jeśli XYZ jest znakiem towarowym. Naruszenie tych zasad prowadzi do odrzucenia reklamy
        przez Google lub roszczeń prawnych ze strony właściciela marki.
      </p>
      <p>
        W praktyce efektywność brand biddingu na konkurencję jest znacznie niższa niż kampanii brandowej
        na własną markę. <Link href="/ctr">CTR</Link> jest zazwyczaj niski — użytkownik szuka konkretnej firmy
        i widząc obcą reklamę, często ją ignoruje. <Link href="/quality-score">Quality Score</Link> jest niski,
        bo trafność reklamy dla zapytania o konkretną markę jest ograniczona. Efekt: wysoki koszt kliknięcia
        i słaba konwersja. Mimo to, dla firm w mocno konkurencyjnych branżach, brand bidding na rywali
        bywa elementem szerszej strategii — szczególnie gdy konkurent nie chroni własnej przestrzeni brandowej reklamą.
      </p>

      <InfoBox>
        <strong>Legalne, ale ryzykowne:</strong> Brand bidding na cudze marki jest w Polsce legalny, dopóki nie naruszasz znaku towarowego w treści reklamy. Jednak właściciel marki może zgłosić naruszenie do Google, a jeśli marka jest zarejestrowana — skierować sprawę do sądu. Przed wdrożeniem strategii ofensywnego brand biddingu warto skonsultować się z prawnikiem IP.
      </InfoBox>

      <h2>Kiedy brand bidding ma sens — analiza przypadków</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Scenariusz</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Strategia</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rekomendacja</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Konkurent licytuje na Twoją markę</td>
              <td className="p-4 text-zinc-600">Własny brand bidding defensywny</td>
              <td className="p-4 text-green-600 font-semibold">Tak — obowiązkowo</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Chcesz promować nową ofertę dla istniejących klientów</td>
              <td className="p-4 text-zinc-600">Własny brand bidding z dostosowaną reklamą</td>
              <td className="p-4 text-green-600 font-semibold">Tak — efektywne kosztowo</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Twoja marka ma silną pozycję organiczną bez reklam</td>
              <td className="p-4 text-zinc-600">Własny brand bidding opcjonalny</td>
              <td className="p-4 text-zinc-600 font-medium">Zależy od CPC i CR</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Chcesz przechwycić klientów konkurenta</td>
              <td className="p-4 text-zinc-600">Ofensywny brand bidding na konkurencję</td>
              <td className="p-4 text-yellow-600 font-medium">Ostrożnie — sprawdź ROI i aspekty prawne</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Mała firma w branży z dominującym graczem</td>
              <td className="p-4 text-zinc-600">Brand bidding na lidera jako alternatywa</td>
              <td className="p-4 text-zinc-600 font-medium">Możliwe, ale ROI często niezadowalający</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak mierzyć skuteczność brand biddingu?</h2>
      <p>
        Kluczowym wyzwaniem jest problem <em>atrybucji incremental</em>: czy użytkownicy, którzy kliknęli reklamę
        brandową, zrobiliby to samo przez wynik organiczny? Standardowe raporty Google Ads nie odpowiadają
        na to pytanie. Żeby to zmierzyć, warto przeprowadzić test geo: przez 2–4 tygodnie wyłącz kampanię brandową
        w wybranych regionach i porównaj konwersje oraz kliknięcia organiczne między regionami testowym i kontrolnym.
      </p>
      <p>
        Wskaźniki do śledzenia w kampanii brandowej to przede wszystkim <Link href="/cpc">CPC</Link>
        (powinien być znacznie niższy niż w kampaniach generycznych — często 0,10–0,50 zł),
        <Link href="/conversion-rate"> współczynnik konwersji</Link> (zazwyczaj wyższy niż w kampaniach niemarkowych —
        bo użytkownik już zna markę) oraz <strong>udział w wyświetleniach brandowych</strong>
        — ile procent wyszukiwań na Twoją nazwę kończy się kliknięciem w Twoją reklamę lub wynik organiczny.
      </p>

      <h2>FAQ — Brand Bidding</h2>

      <h3>Czy brand bidding na konkurencję jest legalny w Polsce?</h3>
      <p>
        Tak, pod warunkiem że nie używasz chronionego znaku towarowego w treści reklamy.
        Licytowanie na markę jako słowo kluczowe jest dozwolone przez Google i polskie prawo,
        ale użycie nazwy w nagłówku lub opisie reklamy może naruszać prawa do znaku towarowego
        i skutkować roszczeniami cywilnymi. W razie wątpliwości skonsultuj z prawnikiem IP.
      </p>

      <h3>Czy muszę licytować na własną markę, skoro jestem na pierwszym miejscu organicznie?</h3>
      <p>
        Nie musisz, ale warto rozważyć. Jeśli konkurenci licytują na Twoją markę, ich reklamy pojawią się
        nad Twoim wynikiem organicznym. Własna reklama brandowa blokuje tę przestrzeń i zazwyczaj kosztuje
        bardzo mało ze względu na wysoki Quality Score. Przetestuj wyłączając kampanię i obserwując,
        czy konkurenci przejmują widoczność.
      </p>

      <h3>Jaki powinien być budżet na kampanię brandową?</h3>
      <p>
        Kampanie brandowe mają zazwyczaj bardzo niski CPC i wysoki CTR — budżet jest więc niski
        w stosunku do efektów. Zacznij od kwoty pozwalającej na 100% udziału w wyświetleniach
        (Impression Share) dla Twojej marki — Google Ads pokaże szacowany budżet w plannerze.
        Dla większości MŚP to kilkaset złotych miesięcznie.
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
                "name": "Czy brand bidding na konkurencję jest legalny w Polsce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak, licytowanie na markę jako słowo kluczowe jest dozwolone. Nielegalne jest użycie chronionego znaku towarowego w treści reklamy (nagłówek, opis). W razie wątpliwości skonsultuj z prawnikiem IP."
                }
              },
              {
                "@type": "Question",
                "name": "Czy warto licytować na własną markę, skoro jestem na 1. miejscu organicznie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Warto rozważyć, szczególnie jeśli konkurenci licytują na Twoją markę. Własna reklama brandowa ma zazwyczaj wysoki Quality Score i niski CPC, więc koszty są niskie. Blokuje też przestrzeń reklamową konkurentom."
                }
              },
              {
                "@type": "Question",
                "name": "Jak zmierzyć efektywność kampanii brandowej?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Przeprowadź test geo: wyłącz kampanię w wybranych regionach i porównaj konwersje między regionami testowym i kontrolnym. Monitoruj CPC, współczynnik konwersji i udział w wyświetleniach brandowych."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
