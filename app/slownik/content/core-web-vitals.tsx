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

export default function CoreWebVitals() {
  return (
    <div className="prose-blog">

      <h2>Kontekst: dlaczego Google zdecydowało się mierzyć UX?</h2>
      <p>
        Przez lata Google rankowało strony przede wszystkim na podstawie relevantności treści i profilu linków.
        Szybkość strony była czynnikiem rankingowym od 2010 roku, ale nie istniała standaryzowana miara
        doświadczenia użytkownika. W maju 2020 roku Google ogłosiło <strong>Core Web Vitals</strong> —
        zestaw trzech konkretnych, mierzalnych wskaźników UX, które miały wejść jako oficjalne sygnały
        rankingowe. Algorytm Page Experience Update, wdrożony w 2021 roku, uczynił to oficjalnym.
      </p>
      <p>
        Decyzja miała jeden cel: skłonić webmasterów do inwestowania w realną jakość użytkowania strony,
        a nie tylko w optymalizację treści pod kątem robotów. Strona, która ładuje się 8 sekund i „skacze"
        podczas renderowania, nie zasługuje na wysoką pozycję — bez względu na jakość treści.
      </p>

      <h2>Trzy metryki Core Web Vitals</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Metryka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dobry wynik</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wymaga poprawy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Słaby</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">LCP — Largest Contentful Paint</td>
              <td className="p-4 text-zinc-600">Czas załadowania największego widocznego elementu (obraz, blok tekstu)</td>
              <td className="p-4 text-green-600 font-semibold">≤ 2,5 s</td>
              <td className="p-4 text-yellow-600 font-semibold">2,5–4,0 s</td>
              <td className="p-4 text-red-500 font-semibold">&gt; 4,0 s</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">INP — Interaction to Next Paint</td>
              <td className="p-4 text-zinc-600">Responsywność na interakcje użytkownika (kliknięcia, tapnięcia)</td>
              <td className="p-4 text-green-600 font-semibold">≤ 200 ms</td>
              <td className="p-4 text-yellow-600 font-semibold">200–500 ms</td>
              <td className="p-4 text-red-500 font-semibold">&gt; 500 ms</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">CLS — Cumulative Layout Shift</td>
              <td className="p-4 text-zinc-600">Stabilność wizualna — czy elementy „skaczą" podczas ładowania</td>
              <td className="p-4 text-green-600 font-semibold">≤ 0,1</td>
              <td className="p-4 text-yellow-600 font-semibold">0,1–0,25</td>
              <td className="p-4 text-red-500 font-semibold">&gt; 0,25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>INP zastąpiło FID w 2024 roku:</strong> First Input Delay (FID) mierzyło czas od pierwszej interakcji do momentu gdy przeglądarka mogła ją obsłużyć. INP (Interaction to Next Paint) mierzy responsywność <em>wszystkich</em> interakcji w trakcie sesji, nie tylko pierwszej. INP jest znacznie trudniejszy do zoptymalizowania — wymaga analizy całego cyklu życia interakcji.
      </InfoBox>

      <h2>LCP w szczegółach — co spowalnia ładowanie głównego elementu?</h2>
      <p>
        LCP mierzy czas do załadowania największego widocznego elementu w viewporcie użytkownika —
        zwykle jest to główne zdjęcie sekcji hero, duży nagłówek lub baner.
        Najczęstsze przyczyny słabego LCP to: niezoptymalizowane obrazy (zbyt duże pliki, brak WebP/AVIF),
        wolny serwer lub hosting (wysokie TTFB — Time to First Byte), JavaScript blokujący renderowanie
        (render-blocking scripts w sekcji head) oraz CSS blokujący renderowanie (duże arkusze stylów bez
        podziału krytycznego CSS). Poprawa LCP często zaczyna się od optymalizacji obrazu hero i wyboru
        lepszego hostingu — dwie zmiany, które mogą przesunąć wskaźnik z czerwonego do zielonego.
      </p>

      <h2>INP — dlaczego jest najtrudniejszy do naprawienia?</h2>
      <p>
        INP mierzy opóźnienie między akcją użytkownika (kliknięcie, tapnięcie, naciśnięcie klawisza)
        a momentem, gdy przeglądarka wyrenderuje odpowiedź wizualną. Główny wróg INP to
        <strong>długie zadania JavaScript</strong> (Long Tasks) — skrypty, które monopolizują wątek główny
        przeglądarki na ponad 50 ms. Efektem jest „zamrożony" interfejs — użytkownik klika, ale nic się nie dzieje.
      </p>
      <p>
        Naprawienie INP wymaga często głębokiej pracy z kodem JS: dzielenia długich zadań na mniejsze
        (chunking), odkładania nieistotnych operacji (deferring), usuwania zbędnych skryptów
        (analityki, widżetów społecznościowych, chatbotów) i optymalizacji event handlerów.
        To praca dla deweloperów, nie wystarczy sama konfiguracja WordPressa czy zmiana motywu.
      </p>

      <h2>CLS — skaczące przyciski i frustracja użytkownika</h2>
      <p>
        CLS mierzy sumę nieoczekiwanych przesunięć layoutu podczas ładowania strony — wyrażoną jako
        bezwymiarowa liczba od 0 (brak przesunięć) do wartości powyżej 1 (ekstremalne skakanie).
        Typowe przyczyny: obrazy bez zdefiniowanych atrybutów <code>width</code> i <code>height</code>
        (przeglądarka nie wie ile miejsca zarezerwować przed załadowaniem), reklamy wstrzykiwane dynamicznie
        bez placeholder o stałym rozmiarze, czcionki webowe powodujące FOUT (Flash of Unstyled Text)
        i elementy wczytywane asynchronicznie bez rezerwacji miejsca.
      </p>

      <h2>Jak mierzyć Core Web Vitals?</h2>
      <p>
        <strong>Google Search Console</strong> — zakładka „Komfort użytkowania strony" (Core Web Vitals)
        pokazuje dane z rzeczywistych odwiedzin użytkowników (CrUX — Chrome User Experience Report).
        To dane polowe (field data) — najważniejsze, bo odzwierciedlają prawdziwe doświadczenie użytkownika.
      </p>
      <p>
        <strong>PageSpeed Insights</strong> (pagespeed.web.dev) — łączy dane polowe CrUX z danymi
        laboratoryjnymi (symulacja), dostarcza konkretnych rekomendacji naprawczych z priorytetem wpływu.
      </p>
      <p>
        <strong>Chrome DevTools</strong> — zakładka Performance i Lighthouse, dane laboratoryjne,
        przydatne do debugowania konkretnych problemów z LCP, INP i CLS.
      </p>
      <p>
        <strong>web-vitals JavaScript library</strong> — możliwość zbierania danych CWV bezpośrednio
        ze swojej strony i wysyłania do <Link href="/google-analytics">Google Analytics</Link> lub innego systemu analitycznego.
      </p>

      <h2>FAQ — Core Web Vitals</h2>

      <h3>Czy Core Web Vitals są czynnikiem rankingowym?</h3>
      <p>
        Tak — oficjalnie od aktualizacji Page Experience w 2021 roku. Google jasno komunikuje,
        że CWV wchodzi do zestawu sygnałów rankingowych jako tiebreaker przy stronach o podobnej
        relevantności. W praktyce: bardzo słabe CWV mogą pogorszyć pozycje, ale same dobre wyniki CWV
        nie wywindują słabej treści na szczyt.
        <Link href="/technical-seo"> Technical SEO</Link> i CWV to fundament — budowanie na nim wymaga dobrej treści i linków.
      </p>

      <h3>Jak szybko po naprawieniu CWV poprawią się pozycje?</h3>
      <p>
        Google zbiera dane CWV z 28-dniowego okna czasowego (Rolling Average). Oznacza to, że nawet po
        natychmiastowej naprawie technicznej, poprawa w raportach Google Search Console pojawi się
        po 28 dniach od wdrożenia zmian. Efekty rankingowe mogą zająć kolejne kilka tygodni.
      </p>

      <h3>Czy CWV jest mierzony dla wersji mobilnej czy desktopowej?</h3>
      <p>
        Dane CWV są zbierane oddzielnie dla mobile i desktop — i Google w rankingach bierze pod uwagę
        wersję mobilną (ze względu na <Link href="/mobile-first-indexing">mobile-first indexing</Link>).
        Jeśli Twoja strona ma dobre CWV na desktop, ale słabe na mobile — to te drugie decydują
        o rankingach. Testuj zawsze obie wersje.
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
                "name": "Czy Core Web Vitals są czynnikiem rankingowym?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak — oficjalnie od 2021 roku (Page Experience Update). CWV działa jako tiebreaker przy stronach o podobnej relevantności. Samo dobre CWV nie wywinduje słabej treści, ale bardzo słabe CWV może pogorszyć pozycje względem konkurencji."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest LCP i jak go poprawić?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LCP (Largest Contentful Paint) mierzy czas załadowania największego widocznego elementu. Dobry wynik to poniżej 2,5 s. Poprawiasz go przez: optymalizację obrazów (WebP, kompresja, preload), poprawę TTFB serwera i eliminację JavaScript blokującego renderowanie."
                }
              },
              {
                "@type": "Question",
                "name": "Czym różni się INP od FID?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FID mierzyło opóźnienie tylko pierwszej interakcji. INP (od marca 2024) mierzy responsywność wszystkich interakcji w trakcie sesji — kliknięć, tapnięć, naciśnięć klawiszy. INP jest dokładniejszą miarą interaktywności przez cały czas trwania wizyty."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
