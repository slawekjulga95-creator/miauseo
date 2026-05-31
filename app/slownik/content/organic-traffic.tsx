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

export default function OrganicTraffic() {
  return (
    <div className="prose-blog">
      <h2>Czym jest organic traffic?</h2>
      <p>
        <strong>Organic traffic</strong> (ruch organiczny) to ruch na stronie internetowej
        pochodzący z bezpłatnych wyników wyszukiwania — kliknięć w linki organiczne
        w Google, Bing lub innych wyszukiwarkach, bez udziału płatnych reklam.
        Jest to główny cel działań <Link href="/pozycjonowanie">SEO</Link> i jeden
        z najbardziej wartościowych kanałów pozyskiwania użytkowników.
      </p>
      <p>
        Kluczowa cecha ruchu organicznego: jest bezpłatny per kliknięcie.
        Raz osiągnięta wysoka pozycja generuje ruch bez ciągłego płacenia za każdego odwiedzającego —
        w odróżnieniu od kampanii <Link href="/ppc">PPC</Link>, gdzie ruch ustaje
        w momencie wstrzymania budżetu.
      </p>

      <h2>Organic traffic vs inne źródła ruchu</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Źródło</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Koszt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Trwałość</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czas do efektu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Organic (SEO)</td><td className="p-4 text-zinc-600">Brak per kliknięcie</td><td className="p-4 text-zinc-600">Trwały (wymaga utrzymania)</td><td className="p-4 text-zinc-600">3–12 miesięcy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Paid (PPC)</td><td className="p-4 text-zinc-600"><Link href="/cpc">CPC</Link> za każde kliknięcie</td><td className="p-4 text-zinc-600">Ustaje po zatrzymaniu budżetu</td><td className="p-4 text-zinc-600">Natychmiastowy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Direct</td><td className="p-4 text-zinc-600">Brak</td><td className="p-4 text-zinc-600">Zależny od rozpoznawalności marki</td><td className="p-4 text-zinc-600">Długoterminowy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Referral</td><td className="p-4 text-zinc-600">Brak per kliknięcie</td><td className="p-4 text-zinc-600">Zależny od trwałości backlinków</td><td className="p-4 text-zinc-600">Zależny od link buildingu</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Czynniki wpływające na organic traffic</h2>
      <p>
        <strong>Pozycja w wynikach wyszukiwania</strong> — CTR dramatycznie spada wraz z pozycją.
        Pierwsza pozycja w Google generuje ok. 27–30% kliknięć, pozycja 3 ok. 10%,
        pozycja 10 poniżej 3%. Ruch organiczny jest więc nieliniowo zależny od rankingu.
      </p>
      <p>
        <strong>Wolumen słów kluczowych</strong> — liczba miesięcznych wyszukiwań dla fraz,
        na które strona rankuje. Dobór fraz o odpowiednim wolumenie i intencji to zadanie{" "}
        <Link href="/keyword-research">keyword research</Link>.
      </p>
      <p>
        <strong><Link href="/ctr">CTR</Link> (Click-Through Rate)</strong> — procent użytkowników,
        którzy klikają wynik. Na CTR wpływają: <Link href="/meta-title">meta title</Link>,{" "}
        <Link href="/meta-description">meta description</Link>, rich snippets (oceny, FAQ)
        i URL.
      </p>

      <InfoBox>
        <strong>Organic traffic ≠ organic sessions:</strong> Google Analytics rozróżnia sesje
        organiczne i strony wejścia. Jeden użytkownik może wejść na stronę organicznie,
        potem wrócić bezpośrednio — to dwie różne sesje z różnych kanałów. Dodatkowa komplikacja:
        część ruchu organicznego jest kategoryzowana jako „(not provided)" ze względu na HTTPS
        i prywatność wyszukiwań — pełny obraz daje GSC, nie sam GA.
      </InfoBox>

      <h2>FAQ — Organic Traffic</h2>

      <h3>Jak mierzyć organic traffic?</h3>
      <p>
        <strong>Google Analytics (GA4)</strong> — raport Acquisition → Traffic acquisition → Organic Search
        pokazuje sesje, użytkowników i konwersje z organicznego ruchu.
        <strong><Link href="/google-search-console">Google Search Console</Link></strong> — Wyniki
        wyszukiwania → Kliknięcia i Wyświetlenia pokazują dokładne frazy, pozycje i CTR.
        Dla pełnego obrazu warto łączyć oba narzędzia.
      </p>

      <h3>Dlaczego mój organic traffic spadł?</h3>
      <p>
        Najczęstsze przyczyny: aktualizacja algorytmu Google (sprawdź daty w MozCast lub SERP volatility tools),
        utrata backlinków, pojawienie się silniejszego konkurenta, zmiany techniczne na stronie
        (np. przypadkowe noindex), sezonowość tematu lub kanibalizacja słów kluczowych.
        Diagnozę zaczynaj od GSC — porównaj pozycje i impressions przed i po spadku.
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
                "name": "Czym jest organic traffic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Organic traffic to ruch na stronie z bezpłatnych wyników wyszukiwania Google i innych wyszukiwarek. Jest głównym celem SEO — raz osiągnięta pozycja generuje ruch bez płacenia za każde kliknięcie, w odróżnieniu od PPC."
                }
              },
              {
                "@type": "Question",
                "name": "Jak mierzyć organic traffic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Analytics 4 (raport Acquisition → Organic Search) oraz Google Search Console (Wyniki wyszukiwania → Kliknięcia). Oba narzędzia uzupełniają się — GA4 pokazuje zachowanie użytkowników po wejściu, GSC pokazuje frazy i pozycje."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
