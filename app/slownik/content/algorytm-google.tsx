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

export default function AlgorytmGoogle() {
  return (
    <div className="prose-blog">

      <h2>Niewidoczna maszyna, która decyduje o Twojej widoczności</h2>
      <p>
        Za każdym razem, gdy ktoś wpisuje zapytanie w Google, w ułamku sekundy uruchamia się złożony system
        obliczeniowy, który ocenia setki miliardów stron internetowych i zwraca najbardziej trafne wyniki.
        Ten system to <strong>algorytm Google</strong> — zbiór reguł, modeli uczenia maszynowego i czynników rankingowych,
        który nieustannie ewoluuje. Oficjalnie Google potwierdza ponad <strong>200 czynników rankingowych</strong>,
        choć rzeczywista ich liczba — wliczając sygnały pośrednie — jest prawdopodobnie wielokrotnie wyższa.
      </p>
      <p>
        Dla specjalistów SEO zrozumienie algorytmu Google nie oznacza posiadania jego kodu źródłowego.
        Oznacza rozumienie <em>intencji</em> systemu: nagradzać strony, które najlepiej odpowiadają na potrzeby
        użytkowników. Każda aktualizacja to krok w tym kierunku — eliminacja manipulacji i premiowanie autentycznej jakości.
      </p>

      <h2>Główne składniki algorytmu Google</h2>
      <p>Algorytm Google składa się z kilku wzajemnie powiązanych systemów:</p>
      <ul>
        <li><strong>Crawlowanie</strong> — <Link href="/crawlowanie">Googlebot</Link> systematycznie skanuje sieć, odkrywając nowe i aktualizowane strony</li>
        <li><strong>Indeksowanie</strong> — przeskanowane strony są analizowane, przetwarzane i zapisywane w <Link href="/indeksowanie">indeksie Google</Link></li>
        <li><strong>Ranking</strong> — podczas zapytania system ocenia zindeksowane strony według setek sygnałów i zwraca wyniki w kolejności trafności</li>
        <li><strong>Systemy jakości</strong> — filtry identyfikujące spam, <Link href="/duplicate-content">duplikaty treści</Link> i manipulacje</li>
      </ul>

      <h2>Przełomowe aktualizacje algorytmu — historia i znaczenie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aktualizacja</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rok</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cel</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co penalizuje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/panda">Panda</Link></td>
              <td className="p-4 text-zinc-600">2011</td>
              <td className="p-4 text-zinc-600">Jakość treści</td>
              <td className="p-4 text-zinc-600">Thin content, farmy treści, duplicate content</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/penguin">Penguin</Link></td>
              <td className="p-4 text-zinc-600">2012</td>
              <td className="p-4 text-zinc-600">Jakość linków</td>
              <td className="p-4 text-zinc-600">Kupowane linki, spam linkowy, nienaturalne profile</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Hummingbird</td>
              <td className="p-4 text-zinc-600">2013</td>
              <td className="p-4 text-zinc-600">Rozumienie semantyczne</td>
              <td className="p-4 text-zinc-600">Dosłowne dopasowanie fraz bez rozumienia kontekstu</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">RankBrain</td>
              <td className="p-4 text-zinc-600">2015</td>
              <td className="p-4 text-zinc-600">Machine learning w rankingu</td>
              <td className="p-4 text-zinc-600">Strony ignorujące nowe, nieznane zapytania</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">BERT</td>
              <td className="p-4 text-zinc-600">2019</td>
              <td className="p-4 text-zinc-600">Rozumienie języka naturalnego</td>
              <td className="p-4 text-zinc-600">Treść pisana pod słowa kluczowe, nie pod ludzi</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Helpful Content</td>
              <td className="p-4 text-zinc-600">2022–2024</td>
              <td className="p-4 text-zinc-600">Treść pisana dla ludzi</td>
              <td className="p-4 text-zinc-600">Treść pisana wyłącznie dla wyszukiwarek bez wartości dla czytelnika</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Core Updates</td>
              <td className="p-4 text-zinc-600">Kilka razy w roku</td>
              <td className="p-4 text-zinc-600">Ogólna jakość rankingów</td>
              <td className="p-4 text-zinc-600">Strony niespełniające aktualnych standardów <Link href="/e-e-a-t">E-E-A-T</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Ważne:</strong> Google przeprowadza tysiące mniejszych aktualizacji rocznie. Są też aktualizacje, które Google nigdy oficjalnie nie ogłasza. Regularne monitorowanie pozycji i ruchu organicznego w <Link href="/google-search-console">Google Search Console</Link> jest koniecznością, nie opcją.
      </InfoBox>

      <h2>Jak Google ocenia strony w 2025/2026 — kluczowe obszary</h2>

      <h3>Sygnały trafności (relevance signals)</h3>
      <p>
        Google analizuje, jak dobrze strona odpowiada na <Link href="/intencja-wyszukiwania">intencję wyszukiwania</Link> użytkownika.
        Nie chodzi już tylko o obecność słowa kluczowego — system rozumie synonimy, kontekst i semantyczne powiązania
        między pojęciami (patrz: LSI, BERT). Strona, która kompleksowo odpowiada na temat, ma przewagę nad stroną
        wypełnioną słowem kluczowym bez głębszej treści.
      </p>

      <h3>Sygnały autorytetu (authority signals)</h3>
      <p>
        Autorytet mierzony jest przede wszystkim przez profil linków zewnętrznych. Linki z wiarygodnych, tematycznie
        powiązanych źródeł to najsilniejszy sygnał poza stroną. Ale Google coraz mocniej uwzględnia też
        <Link href="/e-e-a-t"> E-E-A-T</Link> — kto napisał treść, jakie ma doświadczenie, czy jest ekspertem w dziedzinie.
      </p>

      <h3>Sygnały techniczne (technical signals)</h3>
      <p>
        <Link href="/core-web-vitals">Core Web Vitals</Link> (LCP, INP, CLS), szybkość strony, protokół HTTPS,
        poprawna struktura URL, brak błędów crawlowania — to techniczne minimum, które Google weryfikuje
        przed oceną jakości treści. Strona z doskonałą treścią, ale złymi metrykami technicznymi
        traci pozycje na rzecz konkurentów, którzy zadbali o techniczne SEO.
      </p>

      <h3>Sygnały użytkownika (user signals)</h3>
      <p>
        Google nie potwierdza oficjalnie wszystkich sygnałów użytkownika w rankingu, ale wewnętrzne dokumenty
        (ujawnione w 2024 roku) wskazują, że klikanie, czas spędzony na stronie i powrót do SERP
        (tzw. pogo-sticking) mają znaczenie. Strona, z której użytkownicy natychmiast wracają do wyszukiwarki,
        wysyła sygnał, że nie spełniła ich oczekiwań.
      </p>

      <h2>Best practices — jak budować stronę odporną na aktualizacje algorytmu</h2>
      <ul>
        <li>
          <strong>Pisz przede wszystkim dla użytkownika.</strong> Każda aktualizacja Google zmierza do tego samego celu:
          wyróżnić treści naprawdę pomocne, zdeprecjonować treści tworzone wyłącznie pod wyszukiwarki.
          Strony budowane z autentyczną dbałością o czytelnika przeżywają aktualizacje lepiej niż oparte na trikach SEO.
        </li>
        <li>
          <strong>Buduj autorytet tematyczny.</strong> Zamiast pisać o wszystkim, dominuj w jednej, wąskiej niszy.
          Strona, która pokrywa temat wyczerpująco — od podstaw po zaawansowane aspekty — ma znacznie wyższe szanse
          na stałą widoczność po kolejnych Core Updates.
        </li>
        <li>
          <strong>Dbaj o technikalia regularnie.</strong> Sprawdzaj <Link href="/google-search-console">Google Search Console</Link>
          co najmniej raz w tygodniu. Błędy crawlowania, problemy z indeksowaniem i ostrzeżenia Core Web Vitals
          muszą być naprawiane na bieżąco, nie dopiero po spadkach pozycji.
        </li>
        <li>
          <strong>Dywersyfikuj profil linków.</strong> Naturalne linki przychodzą z różnych źródeł — blogi, media,
          katalogi, wzmianki. Profil złożony wyłącznie z linków z artykułów sponsorowanych jest łatwy do wykrycia
          przez algorytm <Link href="/penguin">Penguin</Link>.
        </li>
        <li>
          <strong>Monitoruj, ale nie panikuj.</strong> Wahania pozycji są normalnym zjawiskiem. Gwałtowny spadek
          po Core Update wymaga analizy — który obszar witryny ucierpiał, jaki typ stron stracił widoczność,
          czy pokrywa się to ze wzorcem danej aktualizacji.
        </li>
      </ul>

      <h2>FAQ — Algorytm Google</h2>

      <h3>Ile czynników rankingowych ma Google?</h3>
      <p>
        Google oficjalnie mówi o „ponad 200 czynnikach". Badacze SEO i analizy wewnętrznych dokumentów Google
        sugerują, że rzeczywista liczba sygnałów (wliczając podsygnały i kombinacje) jest znacznie wyższa —
        mówi się nawet o tysiącach. Nie istnieje pełna, publiczna lista wszystkich czynników.
      </p>

      <h3>Jak często Google aktualizuje swój algorytm?</h3>
      <p>
        Google przeprowadza tysiące aktualizacji rocznie — zdecydowaną większość bez ogłoszenia.
        Duże, ogłoszone aktualizacje (Core Updates) pojawiają się kilka razy w roku. Są też aktualizacje
        powiązane z konkretnymi systemami: spam, linki, treści.
      </p>

      <h3>Co to jest Google Dance?</h3>
      <p>
        Google Dance to potoczne określenie na tymczasowe, gwałtowne wahania pozycji stron w wynikach wyszukiwania,
        obserwowane po dużych aktualizacjach algorytmu lub przy odświeżaniu indeksu. Pozycje „tańczą" przez kilka dni
        lub tygodni, zanim ustabilizują się na nowym poziomie.
      </p>

      <h3>Czy mogę zostać ukarany przez algorytm Google?</h3>
      <p>
        Tak. Google stosuje dwa typy negatywnych działań: <strong>algorytmiczne filtry</strong> (automatyczne,
        np. Panda i Penguin) oraz <strong>manualne kary</strong> nakładane przez pracowników Google Quality Raters.
        Obie formy są widoczne w Google Search Console w sekcji „Działania manualne". Algorytmiczne można „odpracować"
        poprawiając jakość witryny — manualne wymagają złożenia reconsideration request.
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
                "name": "Ile czynników rankingowych ma Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google oficjalnie mówi o ponad 200 czynnikach rankingowych. Rzeczywista liczba sygnałów, wliczając podsygnały i kombinacje, jest znacznie wyższa — szacuje się nawet tysiące."
                }
              },
              {
                "@type": "Question",
                "name": "Jak często Google aktualizuje swój algorytm?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google przeprowadza tysiące aktualizacji rocznie, większość bez ogłoszenia. Duże Core Updates pojawiają się kilka razy w roku i są ogłaszane oficjalnie na blogu Google."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest Google Dance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Dance to tymczasowe, gwałtowne wahania pozycji stron po dużych aktualizacjach algorytmu lub odświeżaniu indeksu. Pozycje stabilizują się po kilku dniach lub tygodniach."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
