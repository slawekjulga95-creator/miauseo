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

export default function Pozycjonowanie() {
  return (
    <div className="prose-blog">
      <h2>Czym jest pozycjonowanie?</h2>
      <p>
        <strong>Pozycjonowanie</strong> (SEO — Search Engine Optimization) to kompleks działań
        mających na celu poprawę pozycji strony internetowej w organicznych — bezpłatnych —
        wynikach wyszukiwania Google i innych wyszukiwarek. Celem jest zwiększenie widoczności
        witryny na zapytania związane z działalnością firmy, co przekłada się na wzrost
        <Link href="/organic-traffic"> ruchu organicznego</Link> i pozyskiwanie klientów
        bez płacenia za każde kliknięcie.
      </p>
      <p>
        Pozycjonowanie to nie jednorazowa czynność, lecz ciągły proces — algorytmy Google
        zmieniają się kilkaset razy w roku, konkurencja nie stoi w miejscu, a zachowania
        użytkowników ewoluują. Skuteczne SEO wymaga systematycznych działań na trzech frontach:
        technicznym, treściowym i linkowym.
      </p>

      <h2>Filary pozycjonowania</h2>
      <p>
        <strong><Link href="/on-page-seo">On-page SEO</Link></strong> — optymalizacja elementów
        na stronie: treści, nagłówków, <Link href="/meta-title">meta tagów</Link>,
        struktury URL, <Link href="/internal-linking">linkowania wewnętrznego</Link>
        i szybkości. Fundament, od którego zaczyna się każde pozycjonowanie.
      </p>
      <p>
        <strong><Link href="/off-page-seo">Off-page SEO</Link></strong> — budowanie autorytetu
        domeny przez <Link href="/link-building">link building</Link> — pozyskiwanie wartościowych
        <Link href="/backlink"> backlinków</Link> z zewnętrznych, wiarygodnych źródeł.
        Linki to wciąż jeden z trzech najsilniejszych sygnałów rankingowych Google.
      </p>
      <p>
        <strong>Techniczne SEO</strong> — poprawność indeksowania, architektura serwisu,
        szybkość (<Link href="/core-web-vitals">Core Web Vitals</Link>), HTTPS,
        <Link href="/mobile-first-indexing"> Mobile-First Indexing</Link>, dane strukturalne.
        Techniczne problemy mogą blokować efekty nawet najlepszej treści i linków.
      </p>

      <h2>Jak długo trwa pozycjonowanie?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Etap</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Orientacyjny czas</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co się dzieje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Audyt i fundament</td><td className="p-4 text-zinc-600">Miesiąc 1–2</td><td className="p-4 text-zinc-600">Audyt techniczny, badanie fraz, optymalizacja on-page</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Pierwsze efekty</td><td className="p-4 text-zinc-600">Miesiąc 3–4</td><td className="p-4 text-zinc-600">Wzrost widoczności dla fraz long-tail, więcej zaindeksowanych stron</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Stabilny wzrost</td><td className="p-4 text-zinc-600">Miesiąc 5–12</td><td className="p-4 text-zinc-600">Widoczność dla fraz głównych, wzrost ruchu organicznego</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Utrzymanie i rozwój</td><td className="p-4 text-zinc-600">Stale</td><td className="p-4 text-zinc-600">Monitoring pozycji, nowe treści, link building, reagowanie na zmiany algorytmu</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Pozycjonowanie a reklamy Google (PPC)</h2>
      <p>
        Podstawowa różnica: <Link href="/ppc">PPC</Link> daje natychmiastowy ruch, ale płacisz
        za każde kliknięcie i ruch znika, gdy zatrzymasz kampanię. Pozycjonowanie wymaga czasu,
        ale zbudowana widoczność działa długoterminowo — raz osiągnięta pozycja generuje
        bezpłatny ruch bez ciągłego wydatku per kliknięcie. Optymalna strategia marketingu
        cyfrowego łączy obie metody: PPC zapewnia natychmiastowe wyniki, SEO buduje trwałą
        i niezależną od budżetu reklamowego widoczność.
      </p>

      <InfoBox>
        <strong>Pozycjonowanie nie istnieje bez mierzenia:</strong> Bez systematycznego monitorowania
        pozycji dla docelowych fraz, ruchu organicznego i konwersji nie wiadomo, czy działania
        przynoszą efekty i gdzie są wąskie gardła. Kluczowe narzędzia to{" "}
        <Link href="/google-search-console">Google Search Console</Link>, Google Analytics 4
        i platforma monitorowania pozycji (Ahrefs, Semrush, Senuto). Dane z tych narzędzi
        są podstawą każdej strategii SEO.
      </InfoBox>

      <h2>FAQ — Pozycjonowanie</h2>

      <h3>Ile kosztuje pozycjonowanie?</h3>
      <p>
        Zakres jest szeroki — od kilkuset złotych miesięcznie za podstawowe pakiety lokalne,
        przez kilka tysięcy dla małych firm w średnio konkurencyjnych branżach,
        do dziesiątek tysięcy miesięcznie dla dużych serwisów w bardzo konkurencyjnych niszach.
        Koszt zależy od: konkurencyjności branży, stanu obecnego serwisu, zakresu działań
        (treści, link building, technikalia) i wybranej agencji lub specjalisty.
      </p>

      <h3>Czy mogę pozycjonować stronę samodzielnie?</h3>
      <p>
        Tak — podstawowe on-page SEO (meta tagi, strukturę treści, szybkość)
        można wdrożyć samodzielnie, korzystając z zasobów takich jak Google Search Console,
        Google PageSpeed Insights i dokumentacji Google. Zaawansowane działania — link building,
        audyty techniczne dużych serwisów, strategia contentowa — wymagają doświadczenia
        i narzędzi, które są trudne do zastąpienia bez specjalistycznej wiedzy.
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
                "name": "Czym jest pozycjonowanie (SEO)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pozycjonowanie (SEO) to działania mające na celu poprawę pozycji strony w organicznych wynikach Google. Składa się z trzech filarów: on-page SEO (treść, meta tagi, struktura), off-page SEO (link building) i technicznego SEO (szybkość, indeksowanie, Core Web Vitals)."
                }
              },
              {
                "@type": "Question",
                "name": "Ile trwa pozycjonowanie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pierwsze efekty pojawiają się po 3–4 miesiącach (wzrost widoczności dla long-tail). Stabilny wzrost pozycji dla fraz głównych widoczny jest zwykle po 6–12 miesiącach. Pozycjonowanie to ciągły proces — algorytmy i konkurencja nie stoją w miejscu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
