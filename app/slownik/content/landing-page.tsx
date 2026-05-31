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

export default function LandingPage() {
  return (
    <div className="prose-blog">
      <h2>Czym jest landing page?</h2>
      <p>
        <strong>Landing page</strong> (strona docelowa, strona lądowania) to dedykowana podstrona zaprojektowana
        pod jedną, konkretną akcję użytkownika. W odróżnieniu od strony głównej czy kategorii produktowych,
        landing page ma jeden cel — skłonić odwiedzającego do wypełnienia formularza, zakupu, zapisu na newsletter
        lub pobrania materiału. Wszystkie elementy strony — nagłówek, treść, grafika, CTA — podporządkowane są
        tej jednej akcji.
      </p>
      <p>
        Landingi są kluczowym elementem kampanii <Link href="/ppc">PPC</Link>, email marketingu i kampanii
        w social mediach. Użytkownik klikający reklamę trafia na stronę, która dokładnie odpowiada obiettnicy
        reklamy — to spójność przekazu między reklamą a landingiem decyduje o wysokości{" "}
        <Link href="/conversion-rate">współczynnika konwersji</Link>.
      </p>

      <h2>Landing page vs strona główna — kluczowa różnica</h2>
      <p>
        Strona główna serwuje wiele ścieżek naraz — informuje o firmie, produktach, historii, blogu, kontakcie.
        Landing page robi odwrotnie: eliminuje każdą ścieżkę poza jedną. Brak nawigacji, brak linków do innych
        sekcji, brak rozpraszaczy. Badania A/B konsekwentnie pokazują, że usunięcie menu nawigacyjnego
        z landingu podnosi konwersję o 10–30%.
      </p>

      <h2>Elementy skutecznego landing page</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Element</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rola</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Częsty błąd</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Nagłówek (H1)</td><td className="p-4 text-zinc-600">Komunikuje główną obietnicę w 5–10 słowach</td><td className="p-4 text-zinc-600">Niejasny, ogólny, nie nawiązuje do reklamy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Podnagłówek</td><td className="p-4 text-zinc-600">Rozbudowuje obietnicę, adresuje główny ból klienta</td><td className="p-4 text-zinc-600">Powtarza nagłówek zamiast go uzupełniać</td></tr>
            <tr><td className="p-4 font-semibold text-ink">CTA (call to action)</td><td className="p-4 text-zinc-600">Jeden, wyraźny przycisk z akcją w trybie rozkazującym</td><td className="p-4 text-zinc-600">Wiele CTA, ogólny tekst „Kliknij tutaj"</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Social proof</td><td className="p-4 text-zinc-600">Opinie, liczby, logotypy klientów — redukują ryzyko</td><td className="p-4 text-zinc-600">Brak dowodów lub fałszywe, generyczne opinie</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Formularz</td><td className="p-4 text-zinc-600">Zbiera tylko dane niezbędne do celu</td><td className="p-4 text-zinc-600">Zbyt wiele pól — każde dodatkowe pole obniża konwersję</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Landing page a SEO</h2>
      <p>
        Landingi pod kampanie płatne często nie są zoptymalizowane pod organiczne pozycjonowanie — i to bywa błędem.
        Landing page może rankować na frazy komercyjne, jeśli zawiera wystarczającą ilość wartościowej treści
        i spełnia <Link href="/intencja-wyszukiwania">intencję wyszukiwania</Link>. Optymalne podejście to
        budowanie landingów, które działają zarówno jako konwertujące strony reklamowe, jak i strony organiczne —
        poprzez dodanie sekcji FAQ, rozbudowanego opisu usługi i wewnętrznych linków.
      </p>

      <InfoBox>
        <strong>Message match — najważniejsza zasada landingu:</strong> Nagłówek landing page musi
        odzwierciedlać tekst reklamy lub link, który użytkownika tu sprowadził. Użytkownik,
        który kliknął „Bezpłatna wycena SEO", oczekuje formularza wyceny — nie strony głównej agencji.
        Niedopasowanie przekazu to najczęstszy powód wysokiego <Link href="/bounce-rate">bounce rate</Link> landingów.
      </InfoBox>

      <h2>FAQ — Landing Page</h2>

      <h3>Ile powinien ważyć landing page?</h3>
      <p>
        Jak najmniej — szybkość ładowania bezpośrednio wpływa na konwersję i <Link href="/adrank">Ad Rank</Link>{" "}
        w Google Ads. Dobrze zoptymalizowany landing powinien ładować się poniżej 2,5 sekundy
        (LCP według <Link href="/core-web-vitals">Core Web Vitals</Link>). Kompresja obrazów, minifikacja JS/CSS
        i użycie CDN to standardowe minimum.
      </p>

      <h3>Czy landing page potrzebuje nawigacji?</h3>
      <p>
        W przypadku landing pages pod kampanie płatne — zazwyczaj nie. Nawigacja tworzy dodatkowe ścieżki
        wyjścia i odciąga uwagę od celu. Wyjątkiem są rozbudowane landingi informacyjne lub strony,
        które mają also rankować organicznie — tam nawigacja wspiera UX i internal linking.
      </p>

      <h3>Jak mierzyć skuteczność landing page?</h3>
      <p>
        Główna metryka to <Link href="/conversion-rate">conversion rate</Link> — procent odwiedzających,
        którzy wykonali pożądaną akcję. Uzupełniające wskaźniki to bounce rate, czas na stronie,
        scroll depth i heatmapy (Hotjar, Microsoft Clarity). Testy A/B nagłówków, CTA i layoutu
        są standardem przy optymalizacji landingów.
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
                "name": "Czym jest landing page?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Landing page to dedykowana strona docelowa zaprojektowana pod jedną konkretną akcję użytkownika — formularz, zakup lub pobranie. W odróżnieniu od strony głównej eliminuje wszystkie ścieżki poza jedną, co zwiększa współczynnik konwersji."
                }
              },
              {
                "@type": "Question",
                "name": "Jak mierzyć skuteczność landing page?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Główna metryka to conversion rate — procent odwiedzających, którzy wykonali pożądaną akcję. Uzupełniają go bounce rate, scroll depth i heatmapy. Optymalizację prowadzi się przez testy A/B nagłówków, CTA i layoutu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
