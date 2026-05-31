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

export default function Roi() {
  return (
    <div className="prose-blog">
      <h2>Czym jest ROI?</h2>
      <p>
        <strong>ROI</strong> (Return on Investment — zwrot z inwestycji) to fundamentalny
        wskaźnik finansowy mierzący ogólną opłacalność inwestycji lub działania marketingowego.
        Wzór: <strong>ROI = (Zysk – Koszt inwestycji) ÷ Koszt inwestycji × 100%</strong>.
        ROI 200% oznacza, że każda zainwestowana złotówka zwróciła się trzykrotnie
        (1 zł kosztów + 2 zł zysku). ROI poniżej 0% oznacza stratę.
      </p>
      <p>
        W marketingu cyfrowym ROI jest nadrzędnym wskaźnikiem efektywności —
        pozwala porównywać opłacalność różnych kanałów (SEO, <Link href="/ppc">PPC</Link>,
        email, content) i uzasadniać inwestycje. W odróżnieniu od{" "}
        <Link href="/roas">ROAS</Link> — który skupia się wyłącznie na przychodzie
        vs. koszcie reklamy — ROI uwzględnia pełny obraz: marżę, koszty operacyjne,
        koszt pozyskania klienta i wartość życiową klienta (LTV).
      </p>

      <h2>ROI w SEO — jak liczyć?</h2>
      <p>
        Obliczenie ROI z SEO jest trudniejsze niż z PPC, bo efekty są rozciągnięte
        w czasie i trudniejsze do bezpośredniego przypisania. Uproszczony model:
      </p>
      <p>
        <strong>Koszty SEO</strong> — miesięczna opłata za agencję lub specjalistę,
        narzędzia (Ahrefs, Semrush), koszt produkcji treści, koszt technicznych wdrożeń.
        <strong>Przychód z organicznego ruchu</strong> — z GA4: raport Monetyzacja →
        Przychód e-commerce przypisany do kanału Organic Search. Lub: liczba organicznych
        leadów × wartość leadu (ze śledzenia konwersji).
        <strong>ROI SEO</strong> = (Przychód organiczny – Koszty SEO) ÷ Koszty SEO × 100%.
      </p>

      <h2>ROI różnych kanałów marketingowych</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kanał</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Czas do efektu</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Trwałość</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kumulacja wartości</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">SEO</td><td className="p-4 text-zinc-600">3–12 miesięcy</td><td className="p-4 text-zinc-600">Wysoka</td><td className="p-4 text-zinc-600">Rośnie z czasem</td></tr>
            <tr><td className="p-4 font-semibold text-ink">PPC</td><td className="p-4 text-zinc-600">Natychmiastowy</td><td className="p-4 text-zinc-600">Zero bez budżetu</td><td className="p-4 text-zinc-600">Brak kumulacji</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Email marketing</td><td className="p-4 text-zinc-600">Szybki (przy liście)</td><td className="p-4 text-zinc-600">Zależna od listy</td><td className="p-4 text-zinc-600">Rośnie wraz z listą</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Content marketing</td><td className="p-4 text-zinc-600">3–18 miesięcy</td><td className="p-4 text-zinc-600">Bardzo wysoka</td><td className="p-4 text-zinc-600">Rośnie z czasem</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>ROI SEO jest niedoszacowane bez modelu atrybucji:</strong> GA4 domyślnie
        stosuje model atrybucji last-click — ostatni touchpoint przed konwersją dostaje
        całą zasługę. Użytkownik, który trafił organicznie, wrócił przez email i kupił
        przez remarketing, w last-click daje ROI remarketingowi, nie SEO.
        Dla pełnego obrazu stosuj modele atrybucji wielodotykowej lub Data-Driven Attribution
        dostępny w GA4.
      </InfoBox>

      <h2>FAQ — ROI</h2>

      <h3>Jaki ROI z SEO jest dobry?</h3>
      <p>
        Benchmarki branżowe mówią o średnim ROI z SEO na poziomie 200–500% dla dojrzałych kampanii.
        Jednak w pierwszym roku (zanim efekty SEO się skumulują) ROI może być ujemny —
        inwestujesz, ale efekty dopiero nadchodzą. SEO to inwestycja, nie koszt bieżący —
        oceniaj ROI w perspektywie 2–3 lat, nie kwartału.
      </p>

      <h3>Jak poprawić ROI działań marketingowych?</h3>
      <p>
        <strong>Optymalizacja kosztów</strong> — eliminacja kanałów z ujemnym ROI,
        priorytety dla high-ROI kanałów. <strong>Poprawa konwersji</strong> —
        ten sam ruch może generować dwa razy więcej przychodu przy wyższym{" "}
        <Link href="/conversion-rate">conversion rate</Link>.
        <strong>Wzrost LTV klienta</strong> — retencja i upsell podnoszą wartość
        każdego pozyskanego klienta, co automatycznie poprawia ROI.
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
                "name": "Czym jest ROI w marketingu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ROI (Return on Investment) to wskaźnik opłacalności inwestycji. Wzór: (Zysk – Koszt) / Koszt × 100%. W odróżnieniu od ROAS uwzględnia pełny obraz kosztów łącznie z marżą. W SEO oblicza się jako (Przychód organiczny – Koszty SEO) / Koszty SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
