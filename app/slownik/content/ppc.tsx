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

export default function Ppc() {
  return (
    <div className="prose-blog">
      <h2>Czym jest PPC?</h2>
      <p>
        <strong>PPC</strong> (Pay Per Click — płatność za kliknięcie) to model reklamy
        internetowej, w którym reklamodawca płaci wyłącznie wtedy, gdy użytkownik kliknie
        w reklamę — nie za samo wyświetlenie. Jest podstawowym modelem rozliczeniowym
        w <Link href="/google-ads">Google Ads</Link>, Meta Ads, LinkedIn Ads, Bing Ads
        i większości platform reklamowych.
      </p>
      <p>
        W odróżnieniu od CPM (Cost Per Mille — płatność za 1000 wyświetleń),
        PPC bezpośrednio łączy koszt z działaniem użytkownika — kliknięciem.
        Sprawia to, że jest szczególnie atrakcyjny dla reklamodawców zorientowanych
        na ruch na stronie i konwersje, ponieważ płacą tylko za użytkowników,
        którzy faktycznie odwiedzili ich stronę.
      </p>

      <h2>Jak działa PPC w Google Ads?</h2>
      <p>
        Google Ads stosuje system aukcyjny — reklamy nie są wyświetlane w kolejności
        najwyższego biddu, lecz na podstawie <Link href="/adrank">Ad Rank</Link>.
        Ad Rank to wynik obliczany ze stawki (bid), wyniku jakości (Quality Score)
        i kontekstu zapytania. Quality Score zależy od:<strong> trafności reklamy</strong>
        do zapytania użytkownika, <strong>oczekiwanego CTR</strong> (<Link href="/ctr">Click-Through Rate</Link>)
        i <strong>jakości strony docelowej</strong> — jak dobrze odpowiada intencji użytkownika.
      </p>
      <p>
        Oznacza to, że reklamodawca z niższą stawką, ale wyższym Quality Score,
        może wyświetlać się wyżej i płacić mniej za kliknięcie niż konkurent z większym budżetem.
        To kluczowa różnica względem modeli czysto aukcyjnych.
      </p>

      <h2>PPC vs SEO — kiedy co stosować?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">PPC</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Czas do efektu</td><td className="p-4 text-zinc-600">Natychmiastowy po aktywacji</td><td className="p-4 text-zinc-600">3–12 miesięcy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Koszt per kliknięcie</td><td className="p-4 text-zinc-600"><Link href="/cpc">CPC</Link> — płacisz za każde</td><td className="p-4 text-zinc-600">Brak per kliknięcie</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Trwałość</td><td className="p-4 text-zinc-600">Ruch ustaje po zatrzymaniu kampanii</td><td className="p-4 text-zinc-600">Pozycje utrzymują się długoterminowo</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Kontrola</td><td className="p-4 text-zinc-600">Pełna kontrola nad wyświetleniami i targetowaniem</td><td className="p-4 text-zinc-600">Pośrednia — przez optymalizację</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Najlepsze zastosowanie</td><td className="p-4 text-zinc-600">Szybkie wyniki, produkty sezonowe, testowanie fraz</td><td className="p-4 text-zinc-600">Budowanie widoczności długoterminowej</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Kluczowe metryki PPC</h2>
      <p>
        <strong><Link href="/cpc">CPC (Cost Per Click)</Link></strong> — średni koszt jednego
        kliknięcia. Benchmark różni się dramatycznie w zależności od branży:
        od kilkudziesięciu groszy w niszowych branżach, do kilkudziesięciu złotych
        w prawniczym lub ubezpieczeniowym.
        <strong><Link href="/ctr">CTR (Click-Through Rate)</Link></strong> — procent
        użytkowników klikających w reklamę względem liczby wyświetleń.
        <strong><Link href="/cpa">CPA (Cost Per Acquisition)</Link></strong> — koszt
        pozyskania jednej konwersji (zakupu, leadu). Kluczowa metryka ROI kampanii.
        <strong>ROAS (Return on Ad Spend)</strong> — przychód z kampanii podzielony przez koszt.
        Miernik efektywności całościowej inwestycji.
      </p>

      <InfoBox>
        <strong>PPC i SEO wzmacniają się wzajemnie:</strong> Dane z kampanii PPC (które frazy
        konwertują, jakie teksty reklam mają wysoki CTR) są bezcennym zasileniem
        strategii <Link href="/pozycjonowanie">pozycjonowania</Link>. Z kolei wysoka pozycja organiczna
        obniża koszty PPC — użytkownicy widzący tę samą markę w wynikach organicznych
        i płatnych klikają reklamy chętniej (efekt podwójnego wyświetlenia).
        Najskuteczniejsze kampanie digital marketingowe łączą obie formy.
      </InfoBox>

      <h2>FAQ — PPC</h2>

      <h3>Ile potrzebuję budżetu na kampanię PPC?</h3>
      <p>
        Nie ma dolnej granicy — Google Ads nie wymaga minimalnego budżetu.
        Praktyczne minimum to 50–100 zł dziennie, żeby algorytm zebrał wystarczające dane
        do optymalizacji. Dla kampanii opartych o machine learning (Smart Bidding, Performance Max)
        zalecane jest minimum 30–50 konwersji miesięcznie — poniżej tej granicy algorytm
        nie działa efektywnie.
      </p>

      <h3>Dlaczego mój CPC jest wysoki?</h3>
      <p>
        Wysoki CPC wynika zazwyczaj z połączenia: <strong>niskiego Quality Score</strong>
        (reklama lub strona docelowa słabo odpowiadają na zapytanie), <strong>wysokiej konkurencji</strong>
        na daną frazę (duże branże: ubezpieczenia, prawo, finanse) lub <strong>zbyt szerokiego
        dopasowania fraz</strong> (Broad Match przy włączonym Smart Bidding). Optymalizacja
        Quality Score — lepsza trafność reklamy i poprawa <Link href="/landing-page">landing page</Link> —
        jest najskuteczniejszym sposobem na obniżenie CPC.
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
                "name": "Czym jest PPC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC (Pay Per Click) to model reklamy internetowej, w którym płacisz wyłącznie za kliknięcia w reklamę. Jest podstawowym modelem Google Ads i Meta Ads. Kluczowe metryki to CPC, CTR, CPA i ROAS."
                }
              },
              {
                "@type": "Question",
                "name": "Czym różni się PPC od SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PPC daje natychmiastowy ruch, ale płacisz za każde kliknięcie i ruch ustaje po zatrzymaniu kampanii. SEO buduje trwałą widoczność organiczną bez kosztu per kliknięcie, ale wymaga 3–12 miesięcy do efektów. Oba kanały wzmacniają się wzajemnie."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
