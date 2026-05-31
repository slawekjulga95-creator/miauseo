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

export default function PageSpeed() {
  return (
    <div className="prose-blog">
      <h2>Czym jest page speed?</h2>
      <p>
        <strong>Page speed</strong> (szybkość strony) to czas potrzebny na załadowanie
        strony internetowej w przeglądarce użytkownika — od wysłania żądania HTTP do momentu,
        gdy strona jest w pełni interaktywna. Jest bezpośrednim czynnikiem rankingowym Google
        od 2010 roku dla desktopu i od 2018 roku dla mobile (Speed Update).
      </p>
      <p>
        Szybkość strony to nie tylko SEO — to jeden z kluczowych determinantów UX i konwersji.
        Google i Amazon opublikowały badania wskazujące, że każda sekunda opóźnienia ładowania
        zmniejsza konwersje o 7%, a 53% użytkowników mobilnych porzuca stronę,
        jeśli ładuje się dłużej niż 3 sekundy.
      </p>

      <h2>Metryki page speed — Core Web Vitals</h2>
      <p>
        Współczesna ocena szybkości strony opiera się na{" "}
        <Link href="/core-web-vitals">Core Web Vitals</Link> — zestawie metryk
        mierzonych przez Google na podstawie realnych danych użytkowników (CrUX):
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Metryka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dobry wynik</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">LCP (Largest Contentful Paint)</td><td className="p-4 text-zinc-600">Czas renderowania największego elementu strony (obraz, blok tekstu)</td><td className="p-4 text-green-600 font-medium">&lt; 2,5s</td></tr>
            <tr><td className="p-4 font-semibold text-ink">INP (Interaction to Next Paint)</td><td className="p-4 text-zinc-600">Czas odpowiedzi strony na interakcję użytkownika</td><td className="p-4 text-green-600 font-medium">&lt; 200ms</td></tr>
            <tr><td className="p-4 font-semibold text-ink">CLS (Cumulative Layout Shift)</td><td className="p-4 text-zinc-600">Stabilność wizualna — mierzy nieoczekiwane przesunięcia elementów</td><td className="p-4 text-green-600 font-medium">&lt; 0,1</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Najczęstsze przyczyny wolnej strony</h2>
      <p>
        <strong>Niezoptymalizowane obrazy</strong> — pliki JPEG w oryginalnym rozmiarze
        bez kompresji to najczęstszy powód wysokiego LCP. Rozwiązanie: format WebP lub AVIF,
        lazy loading, rozmiar dopasowany do kontenera, CDN.
      </p>
      <p>
        <strong>Blokujący rendering JavaScript i CSS</strong> — skrypty ładowane synchronicznie
        w <code>&lt;head&gt;</code> opóźniają renderowanie strony. Rozwiązanie: atrybuty
        <code>defer</code> i <code>async</code>, critical CSS inline, lazy loading JS.
      </p>
      <p>
        <strong>Brak CDN</strong> — serwer w jednej lokalizacji obsługuje użytkowników
        z całego świata z wysokim TTFB (Time to First Byte). CDN dystrybuuje zasoby
        do węzłów bliskich użytkownikowi.
      </p>
      <p>
        <strong>Wolny TTFB (Time to First Byte)</strong> — czas odpowiedzi serwera.
        Przyczyny: przepełniony hosting, brak cachowania, wolne zapytania do bazy danych.
      </p>

      <InfoBox>
        <strong>PageSpeed Insights vs realne dane:</strong> Wynik z narzędzia Google PageSpeed
        Insights (0–100) to ocena laboratoryjna — mierzona w kontrolowanych warunkach.
        Google do oceny rankingowej używa danych CrUX (Chrome User Experience Report) —
        realnych danych od prawdziwych użytkowników Chrome. Niska ocena w PSI nie musi
        oznaczać złych wyników CrUX, choć są silnie skorelowane. Sprawdź zakładkę
        „Field Data" w PSI lub raport Core Web Vitals w GSC dla realnych danych.
      </InfoBox>

      <h2>FAQ — Page Speed</h2>

      <h3>Jak poprawić szybkość strony najszybciej?</h3>
      <p>
        Największy efekt w najkrótszym czasie: kompresja i konwersja obrazów do WebP,
        włączenie cachowania HTTP (Cache-Control headers), przeniesienie na lepszy hosting
        z SSD lub włączenie CDN, minifikacja CSS/JS. Punkt startowy: wyniki z PSI lub
        Lighthouse wskazują konkretne problemy z największym potencjalnym zyskiem.
      </p>

      <h3>Czy page speed wpływa na konwersje?</h3>
      <p>
        Zdecydowanie tak. Każda sekunda powyżej 3s ładowania statystycznie podwaja
        bounce rate. Badania Deloitte pokazują, że 0,1s poprawy czasu ładowania
        zwiększa konwersje o 8% na stronach e-commerce. Inwestycja w szybkość
        zwraca się zarówno przez SEO, jak i bezpośrednio przez lepszy UX i sprzedaż.
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
                "name": "Czym jest page speed?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Page speed to czas ładowania strony internetowej. Jest bezpośrednim czynnikiem rankingowym Google mierzonym przez Core Web Vitals (LCP, INP, CLS). Każda sekunda opóźnienia obniża konwersje i zwiększa bounce rate."
                }
              },
              {
                "@type": "Question",
                "name": "Jak poprawić szybkość strony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Najskuteczniejsze działania: kompresja obrazów i konwersja do WebP, włączenie CDN, cachowanie HTTP, minifikacja CSS/JS, użycie atrybutów defer/async dla skryptów. Diagnozę zacznij od Google PageSpeed Insights lub raportu Core Web Vitals w Search Console."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
