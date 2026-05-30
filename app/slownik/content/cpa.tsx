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

export default function Cpa() {
  return (
    <div className="prose-blog">

      <h2>Czym jest CPA?</h2>
      <p>
        <strong>CPA</strong> (Cost Per Action, Cost Per Acquisition — koszt za działanie lub pozyskanie)
        to wskaźnik efektywności kampanii reklamowej, który mówi ile kosztuje uzyskanie jednej konwersji.
        Konwersją może być zakup, wypełnienie formularza, zapis na newsletter, pobranie aplikacji — cokolwiek
        właściciel kampanii zdefiniuje jako pożądane działanie. Formuła jest prosta:
        CPA = całkowity koszt kampanii / liczba konwersji.
      </p>
      <p>
        Jeśli wydałeś 10 000 zł na kampanię <Link href="/google-ads">Google Ads</Link> i uzyskałeś 80 leadów,
        Twój CPA wynosi 125 zł. To punkt wyjścia do oceny opłacalności — czy pozyskanie klienta za 125 zł
        ma sens, zależy od tego, ile wart jest ten klient dla Twojego biznesu.
      </p>

      <h2>CPA a docelowy CPA (target CPA)</h2>
      <p>
        CPA jako wskaźnik to po prostu obliczenie — ile zapłaciłeś za konwersję.
        Docelowy CPA (tCPA) to <strong>strategia stawek w Google Ads</strong>, w której algorytm
        automatycznie optymalizuje stawki, żeby osiągnąć jak najwięcej konwersji przy zadanym koszcie.
        Ustawiasz cel (np. „chcę płacić maksymalnie 100 zł za lead") i Google automatycznie reguluje stawki
        w każdej aukcji, żeby zmaksymalizować liczbę konwersji w tym limicie.
      </p>
      <p>
        Strategia tCPA działa najlepiej, gdy konto ma historię konwersji — minimum 30–50 konwersji
        w ciągu ostatnich 30 dni. Bez tej historii algorytm nie ma danych do uczenia się i może
        dawać nieprzewidywalne wyniki.
      </p>

      <h2>Modele rozliczeń reklamowych — porównanie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Model</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Płacisz za</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Najlepszy do</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ryzyko</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">CPA</td>
              <td className="p-4 text-zinc-600">Konwersję (zakup, lead)</td>
              <td className="p-4 text-zinc-600">Performance, e-commerce, generowanie leadów</td>
              <td className="p-4 text-zinc-600">Wymaga historii konwersji</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/cpc">CPC</Link></td>
              <td className="p-4 text-zinc-600">Kliknięcie w reklamę</td>
              <td className="p-4 text-zinc-600">Ruch na stronę, testy, nowe kampanie</td>
              <td className="p-4 text-zinc-600">Brak gwarancji konwersji</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/cpm">CPM</Link></td>
              <td className="p-4 text-zinc-600">1000 wyświetleń</td>
              <td className="p-4 text-zinc-600">Zasięg, brand awareness, display</td>
              <td className="p-4 text-zinc-600">Brak gwarancji kliknięć ani konwersji</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/roas">ROAS</Link></td>
              <td className="p-4 text-zinc-600">Jako % przychodu z reklam</td>
              <td className="p-4 text-zinc-600">E-commerce z różnymi wartościami zamówień</td>
              <td className="p-4 text-zinc-600">Wymaga danych o przychodzie w GA4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak wyznaczyć docelowe CPA?</h2>
      <p>
        Właściwe docelowe CPA wyznacza się od strony rentowności, a nie od strony historycznych wyników kampanii.
        Kluczowe pytanie: ile możesz maksymalnie zapłacić za jedną konwersję, żeby kampania była opłacalna?
      </p>
      <p>
        Przykład dla agencji SEO: jeśli średnia wartość kontraktu to 24 000 zł/rok, marża to 40%
        (9 600 zł zysku), a retencja klienta to 18 miesięcy — wartość życiowa klienta (LTV)
        wynosi około 14 400 zł. Przy założeniu, że chcesz, żeby koszty pozyskania klienta
        nie przekraczały 20% LTV, docelowe CPA powinno wynosić maksymalnie 2 880 zł za klienta.
        Teraz możesz porównać ten próg z faktycznym CPA kampanii i ocenić, czy jest rentowna.
      </p>

      <InfoBox>
        <strong>CPA a <Link href="/conversion-rate">Conversion Rate</Link> — nierozerwalne powiązanie:</strong> CPA = CPC / CR. Jeśli Twój koszt kliknięcia to 5 zł, a CR = 2%, CPA wynosi 250 zł. Podnosząc CR do 4% (bez zmiany CPC), CPA spada do 125 zł. Dlatego optymalizacja strony docelowej i <Link href="/ab-testing">A/B testing</Link> są tak samo ważne jak optymalizacja kampanii reklamowej.
      </InfoBox>

      <h2>Jak optymalizować CPA w Google Ads?</h2>
      <p>
        <strong>Poprawa <Link href="/quality-score">Quality Score</Link></strong> — wyższy QS prowadzi do niższego <Link href="/cpc">CPC</Link>,
        co przy stałym CR bezpośrednio obniża CPA. To fundamentalna zależność — inwestycja w trafność
        reklam i landing page procentuje obniżeniem kosztów konwersji.
      </p>
      <p>
        <strong>Optymalizacja <Link href="/landing-page">landing page</Link></strong> — poprawa CR o 50%
        (np. z 2% do 3%) oznacza obniżenie CPA o 33% przy tych samych wydatkach na kliknięcia.
        Szybkie ładowanie, jasny CTA, dopasowanie do intencji zapytania i dowody społeczne
        są często niedocenianą drogą do tańszych konwersji.
      </p>
      <p>
        <strong>Wykluczenie niekonwertujących segmentów</strong> — audyt danych demograficznych, urządzeń,
        godzin i lokalizacji pod kątem CPA. Segmenty z CPA 5× wyższym niż cel powinny być wykluczone
        lub mieć zredukowane stawki. Google Ads pozwala na modyfikatory stawek na poziomie tych wymiarów.
      </p>
      <p>
        <strong>Smart Bidding z docelowym CPA</strong> — jeśli konto ma historię, strategia tCPA
        pozwala algorytmowi Google optymalizować stawki na poziomie każdej aukcji — uwzględniając sygnały,
        do których nie ma dostępu żaden specjalista zarządzający manualnie (kontekst zapytania, urządzenie,
        historia przeglądania, lokalizacja w czasie rzeczywistym).
      </p>

      <h2>FAQ — CPA</h2>

      <h3>Jaka jest różnica między CPA a CPL?</h3>
      <p>
        CPL (Cost Per Lead) to specyficzny rodzaj CPA, gdzie konwersją jest lead — kontakt od potencjalnego klienta
        (formularz, telefon, czat). CPA jest pojęciem szerszym i obejmuje każdą zdefiniowaną akcję.
        W e-commerce CPA często = koszt pozyskania jednego zakupu (czasem określany jako CAC — Customer Acquisition Cost).
      </p>

      <h3>Czy niski CPA zawsze oznacza dobrą kampanię?</h3>
      <p>
        Nie zawsze. Niski CPA przy złej jakości leadów (np. osoby niemające budżetu na Twój produkt)
        jest bezużyteczny. Ważniejszy jest <strong>CPA w stosunku do wartości konwersji</strong> — ile zarabiasz
        na jednej konwersji i czy CPA mieści się w rentownym przedziale.
        To właśnie dlatego ROAS (zwrot z wydatków reklamowych) jest często bardziej użytecznym wskaźnikiem
        niż samo CPA — szczególnie gdy wartość konwersji jest zmienna.
      </p>

      <h3>Kiedy używać strategii docelowego CPA w Google Ads?</h3>
      <p>
        Gdy konto ma co najmniej 30–50 konwersji w ciągu ostatnich 30 dni — algorytm ma wtedy wystarczające
        dane do uczenia się. Poniżej tego progu lepiej zacząć od strategii Maksymalizacja konwersji
        (bez ograniczenia CPA), żeby zebrać dane, a potem przełączyć na docelowy CPA.
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
                "name": "Jak obliczyć CPA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPA = całkowity koszt kampanii / liczba konwersji. Przykład: 10 000 zł wydane na kampanię, 80 konwersji = CPA 125 zł. Konwersją może być zakup, lead, rejestracja — cokolwiek zdefiniujesz jako cel kampanii."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest różnica między CPA a CPL?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "CPL (Cost Per Lead) to specyficzny rodzaj CPA, gdzie konwersją jest lead — kontakt od potencjalnego klienta. CPA jest pojęciem szerszym i obejmuje każdą zdefiniowaną akcję (zakup, rejestracja, pobranie, itp.)."
                }
              },
              {
                "@type": "Question",
                "name": "Kiedy używać strategii docelowego CPA w Google Ads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gdy konto ma co najmniej 30–50 konwersji w ciągu ostatnich 30 dni. Poniżej tego progu zacznij od Maksymalizacji konwersji (bez ograniczenia CPA), żeby zebrać dane do uczenia algorytmu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
