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

export default function BounceRate() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Bounce Rate?</h2>
      <p>
        <strong>Bounce Rate</strong> (wskaźnik odrzuceń) to procent sesji, w których użytkownik opuścił stronę
        bez wykonania żadnej interakcji — bez kliknięcia w link, bez przewinięcia, bez wypełnienia formularza.
        Wszedł i wyszedł, odwiedzając tylko jedną podstronę. Oblicza się go prosto:
        liczba sesji jednostronicowych podzielona przez całkowitą liczbę sesji, pomnożona przez 100.
      </p>
      <p>
        Warto od razu zaznaczyć ważną zmianę definicyjną: w <strong>Google Analytics 4</strong>
        wskaźnik odrzuceń stracił swoje centralne miejsce na rzecz <em>Engagement Rate</em>
        (wskaźnika zaangażowania). Sesja jest teraz uznana za zaangażowaną, jeśli trwała ponad 10 sekund,
        zawierała zdarzenie konwersji lub obejmowała co najmniej dwie odsłony. Bounce Rate w GA4 to po prostu
        odwrotność Engagement Rate — i jest liczony inaczej niż w poprzednim Universal Analytics.
        Jeśli porównujesz dane historyczne między UA i GA4, różnice w bounce rate mogą być znaczące.
      </p>

      <h2>Co mówi nam wysoki Bounce Rate?</h2>
      <p>
        Sama liczba bez kontekstu niewiele znaczy. Bounce Rate 80% może oznaczać katastrofę lub sukces —
        zależy od rodzaju strony i intencji użytkownika.
      </p>
      <p>
        Użytkownik szukający godzin otwarcia restauracji wchodzi na stronę, sprawdza informację i wychodzi.
        Technicznie to odbicie — ale potrzeba została zaspokojona w 100%. Bloger, który przeczytał artykuł
        do końca i wyszedł zadowolony — też zostanie zliczony jako odbicie, jeśli nie kliknął żadnego linku.
        Z kolei użytkownik, który trafił na <Link href="/landing-page">landing page</Link> kampanii reklamowej,
        nie znalazł tego, czego szukał i wyszedł po 3 sekundach — to odrzucenie sygnalizujące problem.
      </p>
      <p>
        Dlatego kluczowe jest zawsze zestawienie bounce rate z innymi metrykami: <strong>czasem na stronie</strong>
        (długi czas + wysokie odbicie = treść przeczytana, cel zrealizowany),
        <strong>źródłem ruchu</strong> (ruch z reklam display ma zazwyczaj wyższe odbicia niż ruch organiczny),
        <strong>typem strony</strong> (strona kontaktowa z telefonem — wysoki bounce jest naturalny).
      </p>

      <h2>Benchmark — co to jest „dobry" Bounce Rate?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ strony</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typowy Bounce Rate</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ocena</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">E-commerce (kategorie, produkty)</td>
              <td className="p-4 text-zinc-600">20–45%</td>
              <td className="p-4 text-zinc-600">Poniżej 30% — doskonały; 45%+ — warto zbadać</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Blog / artykuły</td>
              <td className="p-4 text-zinc-600">65–90%</td>
              <td className="p-4 text-zinc-600">Wysoki bounce naturalny — sprawdź czas na stronie</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Landing page kampanii</td>
              <td className="p-4 text-zinc-600">60–90%</td>
              <td className="p-4 text-zinc-600">Zależy od celu — CR jest ważniejszy niż bounce</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Strona główna firmy usługowej</td>
              <td className="p-4 text-zinc-600">40–60%</td>
              <td className="p-4 text-zinc-600">Powyżej 70% — zbadaj UX i dopasowanie treści</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Strona kontaktowa</td>
              <td className="p-4 text-zinc-600">70–90%</td>
              <td className="p-4 text-zinc-600">Wysoki bounce naturalny — użytkownik znalazł dane</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Niski Bounce Rate nie zawsze jest dobry.</strong> Bounce Rate bliski 0% może oznaczać błąd konfiguracji analityki — np. zduplikowany kod Google Analytics powodujący zliczanie każdej odsłony jako nową sesję. Zanim ucieszysz się z wyniku 5%, sprawdź czy śledzenie jest poprawnie wdrożone.
      </InfoBox>

      <h2>Jak analizować Bounce Rate — 4 pytania diagnostyczne</h2>
      <p>
        <strong>Skąd pochodzi ruch?</strong> — ruch z mediów społecznościowych i display reklamowego ma naturalnie
        wyższe odbicia niż ruch organiczny czy direct. Jeśli bounce jest wysoki tylko w jednym kanale,
        problem może leżeć w targetowaniu, nie w stronie.
      </p>
      <p>
        <strong>Na którą stronę wchodzą?</strong> — sprawdź bounce rate na poziomie landing page.
        Strona, która ma 85% odrzuceń, a jej bounce był przez rok na poziomie 45% — to alerty o zmianie na stronie
        lub zmianie charakteru ruchu. Kumulatywny raport dla całej domeny maskuje te wzorce.
      </p>
      <p>
        <strong>Jaki jest czas sesji?</strong> — jeśli bounce rate wynosi 80% ale średni czas na stronie to 3 minuty,
        użytkownicy czytają i wychodzą zadowoleni. Jeśli 80% odrzuceń z czasem 8 sekund — masz problem
        z dopasowaniem treści do intencji wyszukiwania.
      </p>
      <p>
        <strong>Jaka jest <Link href="/intencja-wyszukiwania">intencja wyszukiwania</Link>?</strong> —
        strony odpowiadające na zapytania informacyjne mają naturalnie wyższe odbicia. Strony pod frazy
        transakcyjne lub nawigacyjne powinny mieć niższe bounce rate, bo użytkownik oczekuje dalszej interakcji.
      </p>

      <h2>Jak obniżyć Bounce Rate — praktyczne działania</h2>
      <p>
        <strong>Dopasuj treść do intencji zapytania</strong> — jeśli użytkownik wpisał „jak wybrać adwokata",
        a ląduje na stronie z samą listą usług i cenami, nie znajdzie tego, czego szukał.
        Treść musi odpowiadać wprost na zapytanie prowadzące do strony.
      </p>
      <p>
        <strong>Popraw prędkość ładowania</strong> — każda dodatkowa sekunda ładowania zwiększa bounce rate
        o 20–32% (dane Google). Sprawdź <Link href="/core-web-vitals">Core Web Vitals</Link>
        i zoptymalizuj LCP (Largest Contentful Paint). Strona, która ładuje się ponad 3 sekundy na mobile,
        traci znaczącą część odwiedzających zanim zdąży się wyświetlić.
      </p>
      <p>
        <strong>Zadbaj o pierwsze 5 sekund</strong> — sekcja hero musi komunikować wartość i trafność natychmiastowo.
        Użytkownik podejmuje decyzję o pozostaniu lub odbiciu w ciągu kilku sekund. Niespójność między obietnicą
        reklamy a treścią strony docelowej to najczęstszy powód wysokich odrzuceń w kampaniach
        <Link href="/google-ads"> Google Ads</Link>.
      </p>
      <p>
        <strong>Linkowanie wewnętrzne i rekomendacje treści</strong> — dobrze rozmieszczone
        <Link href="/internal-linking"> linki wewnętrzne</Link>, sekcje „powiązane artykuły" i widżety
        rekomendacji utrzymują użytkownika dłużej na stronie. To szczególnie skuteczne w przypadku blogów,
        gdzie bounce jest naturalnie wysoki.
      </p>
      <p>
        <strong>Usuń rozpraszacze i skróć ładowanie</strong> — pop-upy pojawiające się po 2 sekundach,
        agresywne banery, autoplay wideo z dźwiękiem — to czynniki, które błyskawicznie zwiększają bounce rate.
        Dobry <Link href="/user-experience">UX</Link> to minimalizm i brak barier między użytkownikiem a treścią.
      </p>

      <h2>FAQ — Bounce Rate</h2>

      <h3>Czy Bounce Rate wpływa na ranking Google?</h3>
      <p>
        Google oficjalnie twierdzi, że nie używa bezpośrednio Bounce Rate z Google Analytics jako czynnika rankingowego.
        Jednak zachowanie użytkownika (tzw. user signals) — w tym powrót do SERP po krótkim czasie na stronie,
        zwany pogo-stickingiem — może być brane pod uwagę pośrednio. Ujawnione w 2024 roku wewnętrzne dokumenty
        Google sugerują, że sygnały użytkownika mają większe znaczenie niż oficjalnie przyznawano.
      </p>

      <h3>Jak Bounce Rate zmienił się w GA4?</h3>
      <p>
        W Google Analytics 4 sesja bez zaangażowania (odpowiednik dawnego odbicia) to sesja trwająca poniżej 10 sekund,
        bez konwersji i bez więcej niż jednej odsłony. GA4 domyślnie wyświetla Engagement Rate, a Bounce Rate
        to jego odwrotność. Jeśli Engagement Rate wynosi 65%, Bounce Rate w GA4 wynosi 35% —
        co przy tej samej stronie może być numerycznie zupełnie inne niż wyniki z Universal Analytics.
      </p>

      <h3>Mój Bounce Rate wzrósł po zmianie strony — co sprawdzić?</h3>
      <p>
        Najpierw wyklucz błąd analityki — czy kod GA jest wdrożony tylko raz na stronie, czy zdarzenia śledzenia
        działają poprawnie. Następnie sprawdź zmiany na stronie: czy nowy design ukrywa kluczowe CTA,
        czy prędkość strony się pogorszyła, czy treść na kluczowych landing pages nie zmieniła się w sposób
        rozbijający spójność z reklamami lub wynikami organicznymi.
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
                "name": "Czy Bounce Rate wpływa na ranking Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google oficjalnie nie potwierdza Bounce Rate z GA jako czynnika rankingowego, ale sygnały zachowania użytkownika (pogo-sticking, czas na stronie) mogą mieć pośredni wpływ. Wewnętrzne dokumenty Google ujawnione w 2024 roku sugerują większą rolę user signals niż oficjalnie przyznawano."
                }
              },
              {
                "@type": "Question",
                "name": "Jak Bounce Rate zmienił się w Google Analytics 4?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W GA4 Bounce Rate to odwrotność Engagement Rate. Sesja zaangażowana trwa ponad 10 sekund lub zawiera konwersję / więcej niż jedną odsłonę. Wartości liczbowe mogą się znacznie różnić od wyników z Universal Analytics."
                }
              },
              {
                "@type": "Question",
                "name": "Jaki Bounce Rate jest dobry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zależy od typu strony. E-commerce: 20–45% to dobry wynik. Blog: 65–90% jest normalne. Landing page: bounce jest mniej ważny niż współczynnik konwersji. Zawsze analizuj bounce razem z czasem na stronie i źródłem ruchu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
