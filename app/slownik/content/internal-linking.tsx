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
export default function InternalLinking() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Internal Linking?</h2>
      <p>
        <strong>Internal linking</strong> (linkowanie wewnętrzne) to sieć hiperłączy łączących podstrony
        tej samej witryny. Gdy artykuł na blogu linkuje do strony usługowej, a strona usługowa linkuje
        do case study — to właśnie internal linking. W odróżnieniu od <Link href="/backlink">backlinków</Link>
        zewnętrznych, linki wewnętrzne są w 100% pod kontrolą właściciela witryny i mogą być optymalizowane
        w dowolnym momencie bez konieczności budowania relacji z zewnętrznymi wydawcami.
      </p>
      <p>
        Internal linking pełni trzy kluczowe funkcje jednocześnie: ułatwia <Link href="/crawlowanie">crawlowanie</Link>
        i <Link href="/indeksowanie">indeksowanie</Link> przez <Link href="/googlebot">Googlebota</Link>
        (robot podąża za linkami wewnętrznymi odkrywając kolejne strony), dystrybuuje <Link href="/link-juice">link juice</Link>
        i autorytet między podstronami witryny, oraz poprawia nawigację i UX — użytkownik może swobodnie
        poruszać się między powiązanymi treściami.
      </p>

      <h2>Jak internal linking wpływa na autorytet podstron?</h2>
      <p>
        Każdy link wewnętrzny przekazuje część autorytetu ze strony źródłowej do strony docelowej —
        mechanizm analogiczny do <Link href="/pagerank">PageRank</Link>. Strona główna zazwyczaj
        ma najwyższy autorytet wewnętrzny, bo do niej prowadzi wiele linków z całej witryny
        (nawigacja, stopka) i backlinki zewnętrzne. Internal linking to narzędzie do przepompowania
        tego autorytetu w dół hierarchii — do artykułów, stron produktowych i kategorii,
        które potrzebują wsparcia rankingowego.
      </p>

      <h2>Strategie linkowania wewnętrznego</h2>
      <p>
        <strong>Klaster tematyczny (topic cluster)</strong> — strona filarowa (pillar page) pokrywająca
        szeroki temat linkuje do szczegółowych artykułów satelitarnych, które z kolei linkują z powrotem
        do filaru. Ta sieć powiązań sygnalizuje Google ekspertyzę tematyczną i jest jedną z najbardziej
        efektywnych strategii content SEO. Przykład: pillar „Lokalne SEO" → artykuły satelitarne
        o Google Business Profile, Local Pack, NAP, cytowaniach lokalnych.
      </p>
      <p>
        <strong>Linkowanie do stron o wysokiej wartości biznesowej</strong> — strony usługowe, strony produktowe
        i landing pages konwersji powinny otrzymywać linki wewnętrzne z jak największej liczby trafnych artykułów.
        To przekazuje im autorytet z contentu i poprawia ich pozycje dla fraz transakcyjnych.
      </p>
      <p>
        <strong>Naprawianie orphan pages</strong> — strony bez żadnych linków wewnętrznych są trudne
        do odkrycia przez <Link href="/googlebot">Googlebota</Link> i nie zbierają autorytetu.
        Każda ważna strona powinna mieć co najmniej 2–3 linki wewnętrzne z trafnych, zindeksowanych podstron.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zasada</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dlaczego ważna</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Opisowy anchor text (nie „kliknij tutaj")</td><td className="p-4 text-zinc-600">Informuje Google o tematyce strony docelowej</td></tr>
            <tr><td className="p-4 font-medium text-ink">Linki kontekstualne w treści</td><td className="p-4 text-zinc-600">Cenniejsze niż linki w nawigacji lub stopce</td></tr>
            <tr><td className="p-4 font-medium text-ink">Nie więcej niż 100 linków na stronie</td><td className="p-4 text-zinc-600">Zbyt wiele linków rozmywa autorytet i dezorientuje</td></tr>
            <tr><td className="p-4 font-medium text-ink">Linkuj do stron o wysokiej wartości biznesowej</td><td className="p-4 text-zinc-600">Kieruj autorytet tam gdzie przekłada się na konwersje</td></tr>
            <tr><td className="p-4 font-medium text-ink">Unikaj circular linking (A→B→A)</td><td className="p-4 text-zinc-600">Nie tworzy wartości SEO — pętle autorytetu</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Audit linków wewnętrznych:</strong> Screaming Frog SEO Spider crawluje witrynę i tworzy mapę wszystkich linków wewnętrznych — możesz zidentyfikować orphan pages, strony z nadmiarem linków, błędne anchor texty i broken links. Warto przeprowadzać taki audyt co 3–6 miesięcy, szczególnie przy aktywnym blogu gdzie nowe artykuły mogą linkować do przestarzałych podstron.
      </InfoBox>

      <h2>FAQ — Internal Linking</h2>
      <h3>Ile linków wewnętrznych powinien mieć artykuł?</h3>
      <p>
        Nie ma jednej liczby — zależy od długości artykułu i liczby trafnych powiązanych stron.
        Orientacyjnie: artykuł 1000–2000 słów powinien mieć 3–8 linków wewnętrznych.
        Każdy powinien być kontekstowy i trafny. Unikaj wstawiania linków na siłę — jeśli nie ma
        naturalnego miejsca na link, lepiej go pominąć niż wymusić.
      </p>
      <h3>Czy linki w nawigacji (menu) mają znaczenie dla SEO?</h3>
      <p>
        Tak, ale mniej niż linki kontekstualne w treści. Linki w nawigacji powtarzają się na każdej stronie —
        ich autorytet jest rozcieńczony przez dużą liczbę źródeł. Linki w treści konkretnego artykułu
        są unikatowe i kontekstualne — Google przypisuje im większą wagę.
        Oba rodzaje są ważne: nawigacja zapewnia fundamentalną architekturę, treść dostarcza specyficzne sygnały.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest internal linking?", "acceptedAnswer": { "@type": "Answer", "text": "Internal linking to sieć hiperłączy łączących podstrony tej samej witryny. Ułatwia crawlowanie przez Googlebota, dystrybuuje autorytet między podstronami i poprawia nawigację dla użytkowników." } }] }) }} />
    </div>
  );
}
