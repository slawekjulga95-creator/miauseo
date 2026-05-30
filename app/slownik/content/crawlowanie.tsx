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

export default function Crawlowanie() {
  return (
    <div className="prose-blog">

      <h2>Czym jest crawlowanie?</h2>
      <p>
        <strong>Crawlowanie</strong> (indeksowanie pełzające, skanowanie) to automatyczny proces,
        w którym robot wyszukiwarki — w przypadku Google jest to <Link href="/googlebot">Googlebot</Link> —
        przegląda strony internetowe, pobiera ich zawartość i zbiera dane do przetworzenia.
        Crawlowanie poprzedza <Link href="/indeksowanie">indeksowanie</Link>: dopiero po przeskanowaniu strony
        Google może ją przeanalizować i zdecydować, czy i jak umieścić ją w indeksie wyszukiwarki.
        Strona niezindeksowana nie istnieje w wynikach wyszukiwania — nie pojawia się w <Link href="/serp">SERP</Link>
        niezależnie od jakości swojej treści.
      </p>
      <p>
        Mechanizm crawlowania jest podobny do sieci powiązań: Googlebot zaczyna od znanych URL
        (strona główna, sitemap), pobiera treść i kod strony, a następnie wyciąga z niej wszystkie
        hiperłącza i dodaje je do kolejki do sprawdzenia. W ten sposób odkrywa kolejne strony —
        dosłownie pełzając przez sieć powiązań. Dlatego <Link href="/internal-linking">linkowanie wewnętrzne</Link>
        ma tak duże znaczenie: strona, do której nie prowadzą żadne linki (orphan page),
        może nigdy nie zostać odkryta przez Googlebota.
      </p>

      <h2>Jak Googlebot crawluje — mechanizm krok po kroku</h2>
      <p>
        Całość procesu zaczyna się od <strong>kolejki crawlowania (crawl queue)</strong> — listy URL
        oczekujących na odwiedzenie. Googlebot pobiera strony z serwera, przetwarza HTML
        (i w osobnym procesie renderuje JavaScript), wyciąga linki i dodaje nieodwiedzone do kolejki.
        Następnie przetworzone dane trafiają do systemu indeksowania, który analizuje treść,
        rozpoznaje duplikaty (patrz: <Link href="/canonical-url">canonical URL</Link>),
        przypisuje wartość rankingową i decyduje o miejscu strony w indeksie.
      </p>
      <p>
        Google utrzymuje ogromne centrum przetwarzania danych i setki milionów URL w kolejce.
        Nie crawluje wszystkich stron z tą samą częstotliwością: strony o wysokim autorytecie
        i częstych aktualizacjach (portale newsowe, duże serwisy e-commerce) odwiedzane są wielokrotnie
        dziennie, podczas gdy statyczne strony małych firm mogą być recrawlowane co kilka tygodni.
      </p>

      <h2>Crawl budget — dlaczego ma znaczenie dla dużych serwisów</h2>
      <p>
        <strong>Crawl budget</strong> (budżet crawlowania) to liczba stron, którą Googlebot jest gotowy
        i zdolny przeskanować w danej witrynie w określonym czasie. Składają się na niego dwa elementy:
        <em>crawl rate limit</em> (ograniczenie szybkości crawlowania, żeby nie przeciążyć serwera)
        i <em>crawl demand</em> (popyt na crawlowanie — jak bardzo Google uważa strony za warte odwiedzenia).
      </p>
      <p>
        Dla małych serwisów (do kilku tysięcy stron) crawl budget zazwyczaj nie jest problemem —
        Googlebot przejdzie przez całą witrynę bez trudu. Problem pojawia się przy dużych e-commerce,
        serwisach z milionami URL parametryzowanych, lub witrynach z dużą liczbą stron niskiej jakości.
        Jeśli Googlebot marnuje budżet na nieistotne lub zduplikowane strony, ważne podstrony mogą być
        rzadziej crawlowane — co spowalnia indeksowanie nowej treści i aktualizacji.
      </p>

      <h2>Co blokuje crawlowanie?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przyczyna blokady</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Mechanizm</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Jak naprawić</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink"><Link href="/robots-txt">Robots.txt</Link></td>
              <td className="p-4 text-zinc-600">Dyrektywa Disallow blokuje Googlebota</td>
              <td className="p-4 text-zinc-600">Sprawdź i zaktualizuj robots.txt</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Błędy serwera (5xx)</td>
              <td className="p-4 text-zinc-600">Googlebot nie może pobrać strony</td>
              <td className="p-4 text-zinc-600">Napraw błędy serwera, sprawdź logi</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Zbyt wolny serwer</td>
              <td className="p-4 text-zinc-600">Timeout lub ograniczenie crawl rate</td>
              <td className="p-4 text-zinc-600">Popraw TTFB, wybierz lepszy hosting</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Brak linkowania wewnętrznego</td>
              <td className="p-4 text-zinc-600">Orphan pages nieodkrywalne przez Googlebota</td>
              <td className="p-4 text-zinc-600">Dodaj linki wewnętrzne, zaktualizuj sitemap</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">JavaScript blokujący treść</td>
              <td className="p-4 text-zinc-600">Treść niedostępna bez renderowania JS</td>
              <td className="p-4 text-zinc-600">SSR lub pre-rendering, sprawdź w Search Console</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Uwierzytelnienie / login</td>
              <td className="p-4 text-zinc-600">Googlebot nie ma dostępu do chronionej treści</td>
              <td className="p-4 text-zinc-600">Udostępnij publiczną wersję lub użyj FlexSampling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Crawlowanie ≠ Indeksowanie:</strong> Google może crawlować stronę (odwiedzić i pobrać) bez jej indeksowania. Jeśli strona ma tag <Link href="/noindex">noindex</Link>, Googlebot ją odwiedzi, ale nie umieści w indeksie. Odwrotnie — strona może być zindeksowana, nawet jeśli robots.txt blokuje Googlebota, jeśli istniały do niej linki z zewnątrz (choć bez crawlowania Google zna tylko URL, nie treść).
      </InfoBox>

      <h2>Jak zoptymalizować crawlowanie swojej strony?</h2>
      <p>
        <strong>Zadbaj o <Link href="/sitemap-xml">Sitemap XML</Link></strong> — plik sitemap to mapa drogowa
        dla Googlebota: lista wszystkich ważnych URL witryny z datą ostatniej modyfikacji.
        Wysłany do Google Search Console przyspiesza odkrywanie nowych i zmienionych stron.
        Sitemap nie zastępuje linkowania wewnętrznego, ale skutecznie uzupełnia proces odkrywania.
      </p>
      <p>
        <strong>Zoptymalizuj robots.txt</strong> — sprawdź, czy robots.txt nie blokuje przypadkowo
        ważnych zasobów (CSS, JS, zdjęcia, całe katalogi).
        Typowy błąd przy migracji CMS: nowy system nadpisuje robots.txt z błędną konfiguracją Disallow.
        Testuj robots.txt przez narzędzie testowania w Google Search Console.
      </p>
      <p>
        <strong>Eliminuj strony niskiej jakości</strong> — strony z <Link href="/thin-content">thin content</Link>,
        tysiące parametryzowanych URL filtrów w e-commerce, zduplikowane strony bez canonical —
        wszystkie marnują crawl budget. Blokuj je przez robots.txt lub noindex, żeby Googlebot
        skupił się na wartościowych podstronach.
      </p>
      <p>
        <strong>Popraw czas odpowiedzi serwera (TTFB)</strong> — powolny serwer ogranicza szybkość crawlowania.
        Google zaleca TTFB poniżej 200 ms. Wysoki TTFB obniża crawl rate limit,
        co sprawia, że Googlebot odwiedza Twój serwer rzadziej.
      </p>

      <h2>FAQ — Crawlowanie</h2>

      <h3>Jak sprawdzić czy Googlebot odwiedził moją stronę?</h3>
      <p>
        W <Link href="/google-search-console">Google Search Console</Link> zakładka „Indeksowanie"
        → „Strony" pokaże stan indeksowania poszczególnych URL.
        Zakładka „Ustawienia" → „Crawlowanie" pozwala zobaczyć statystyki crawlowania:
        liczbę żądań, rozkład kodów odpowiedzi i pobrane zasoby. Dokładniejsze dane znajdziesz
        w logach serwera — szukaj wierszy z User-Agent zawierającym „Googlebot".
      </p>

      <h3>Czy mogę kontrolować częstotliwość crawlowania?</h3>
      <p>
        Częściowo. W Google Search Console możesz ustawić ograniczenie szybkości crawlowania
        (Crawl Rate Limit) — jeśli serwer jest przeciążony wizytami Googlebota.
        Nie możesz jednak zmusić Google do częstszego crawlowania niż wynika z popytu
        na Twoją treść — częstotliwość zależy od autorytetu domeny i regularności aktualizacji.
      </p>

      <h3>Co to są crawl errors i jak je naprawić?</h3>
      <p>
        Crawl errors to strony, których Googlebot nie mógł poprawnie pobrać lub przetworzyć.
        Najczęstsze: błędy 404 (strona nie istnieje), błędy 5xx (problem serwera), soft 404
        (strona zwraca 200, ale treść sygnalizuje brak zawartości), oraz problemy z przekierowaniami.
        Naprawiasz je przez: zaktualizowanie wewnętrznych linków prowadzących do nieistniejących URL,
        prawidłową konfigurację przekierowań i usunięcie lub naprawę stron z błędami serwera.
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
                "name": "Czym różni się crawlowanie od indeksowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crawlowanie to odwiedzenie i pobranie strony przez Googlebota. Indeksowanie to zapisanie przetworzonej strony w bazie danych Google. Googlebot może crawlować stronę bez jej indeksowania (np. przy tagu noindex), ale nie może zindeksować strony której nie crawlował."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest crawl budget?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Crawl budget to liczba stron którą Googlebot jest gotowy przeskanować w danej witrynie w określonym czasie. Dla małych serwisów nie jest problemem. Dla dużych e-commerce z milionami URL — optymalizacja crawl budget (usuwanie zbędnych stron, blokowanie parametrów) jest istotna."
                }
              },
              {
                "@type": "Question",
                "name": "Jak sprawdzić błędy crawlowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W Google Search Console → Indeksowanie → Strony. Zakładka 'Ustawienia' → 'Crawlowanie' pokazuje statystyki crawlowania i kody odpowiedzi. Dokładniejsze dane znajdziesz w logach serwera, filtrując wpisy z User-Agent 'Googlebot'."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
