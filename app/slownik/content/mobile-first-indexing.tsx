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

export default function MobileFirstIndexing() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Mobile-First Indexing?</h2>
      <p>
        <strong>Mobile-First Indexing</strong> to podejście Google, w którym mobilna wersja strony
        jest podstawą do <Link href="/indeksowanie">indeksowania</Link> i rankingowania —
        a nie wersja desktopowa. Od marca 2021 roku Google stosuje Mobile-First Indexing
        dla wszystkich nowych stron, a od końca 2023 roku w pełni ukończył migrację dla stron istniejących.
        Oznacza to, że <Link href="/googlebot">Googlebot</Link> odwiedza Twoją stronę przede wszystkim
        jako symulowany użytkownik mobilny.
      </p>
      <p>
        Zmiana ta odzwierciedla realia rynkowe — ponad 60% wyszukiwań w Google pochodzi z urządzeń
        mobilnych. Google przeszedł z modelu „desktop primary, mobile secondary" na odwrotny,
        ponieważ dla większości użytkowników telefon jest głównym urządzeniem dostępu do internetu.
      </p>

      <h2>Co Mobile-First Indexing oznacza w praktyce?</h2>
      <p>
        <strong>Treść strony mobilnej = treść indeksowana.</strong> Jeśli strona mobilna ma mniej treści
        niż desktopowa (skrócone opisy, ukryte sekcje, inny content), Google zaindeksuje i oceni
        wyłącznie to, co jest widoczne na mobile. Treść tylko na wersji desktopowej jest niewidoczna
        dla indeksera.
      </p>
      <p>
        <strong>Szybkość na mobile jest priorytetem.</strong> <Link href="/core-web-vitals">Core Web Vitals</Link>{" "}
        mierzone są na urządzeniach mobilnych. Wolno ładująca się strona mobilna bezpośrednio wpływa
        na LCP (Largest Contentful Paint), FID/INP i CLS — a tym samym na ranking.
      </p>
      <p>
        <strong>Responsive design to standard, nie opcja.</strong> Strony responsywne (RWD),
        które serwują tę samą treść na mobile i desktop z tym samym URL, są najłatwiejsze
        w utrzymaniu i optymalnie kompatybilne z Mobile-First Indexing.
      </p>

      <h2>Najczęstsze problemy z Mobile-First Indexing</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Problem</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Skutek SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Mniej treści na mobile niż na desktop</td><td className="p-4 text-zinc-600">Utrata słów kluczowych i kontekstu semantycznego w indeksie</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Zablokowanie Googlebota mobile przez robots.txt</td><td className="p-4 text-zinc-600">Strona nieindeksowana lub rzadko crawlowana</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Interstitials i popupy zakrywające treść</td><td className="p-4 text-zinc-600">Penalizacja za intrusive interstitials (od 2017)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Wolne ładowanie na mobile</td><td className="p-4 text-zinc-600">Słabe Core Web Vitals — bezpośredni wpływ na ranking</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Różne meta tagi na mobile i desktop</td><td className="p-4 text-zinc-600">Google indeksuje mobilne — jeśli są słabsze, ranking spada</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Jak sprawdzić, czy Twoja strona jest gotowa na mobile-first?</strong> Użyj testu
        Google „Przyjazność dla urządzeń mobilnych" (search.google.com/test/mobile-friendly)
        lub raportu „Użyteczność na urządzeniach mobilnych" w{" "}
        <Link href="/google-search-console">Google Search Console</Link>. Raport pokaże strony
        z problemami z responsywnością, małym fontem lub elementami zbyt blisko siebie.
      </InfoBox>

      <h2>FAQ — Mobile-First Indexing</h2>

      <h3>Czy muszę mieć osobną wersję mobilną strony?</h3>
      <p>
        Nie — responsywny design (ta sama strona, różne style CSS dla różnych ekranów) jest
        zalecanym podejściem Google i nie wymaga oddzielnych URL ani zarządzania dwiema wersjami treści.
        Oddzielne subdomeny mobilne (m.example.com) są obsługiwane, ale wymagają prawidłowej
        konfiguracji tagów canonical i Vary HTTP, co zwiększa ryzyko błędów.
      </p>

      <h3>Czy desktop SEO nadal ma znaczenie?</h3>
      <p>
        Tak — mimo Mobile-First Indexing, optymalizacja dla desktopu nadal ma znaczenie dla UX,
        konwersji i ruchu z komputerów. Ale punkt wyjścia do oceny SEO to zawsze teraz wersja mobilna.
        Zadbaj, żeby obie wersje były równoważne pod kątem treści i szybkości.
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
                "name": "Czym jest Mobile-First Indexing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mobile-First Indexing to podejście Google, w którym mobilna wersja strony jest podstawą do indeksowania i rankingowania. Od 2021 roku obowiązuje dla wszystkich nowych stron. Treść dostępna tylko na desktopie jest niewidoczna dla indeksera."
                }
              },
              {
                "@type": "Question",
                "name": "Czy muszę mieć osobną wersję mobilną strony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — responsywny design (RWD) jest zalecanym podejściem Google. Ta sama strona z różnymi stylami CSS dla różnych ekranów jest optymalna. Oddzielne subdomeny mobilne działają, ale wymagają starannej konfiguracji."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
