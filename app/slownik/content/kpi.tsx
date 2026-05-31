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
export default function Kpi() {
  return (
    <div className="prose-blog">
      <h2>Czym jest KPI?</h2>
      <p>
        <strong>KPI</strong> (Key Performance Indicator, Kluczowy Wskaźnik Efektywności) to mierzalna wartość
        pokazująca, w jakim stopniu firma lub kampania realizuje swoje kluczowe cele biznesowe.
        Słowo „kluczowy" jest tu istotne — KPI to nie każda metryka, którą można zmierzyć,
        ale te wskaźniki, które bezpośrednio odzwierciedlają realizację strategicznych celów.
        Liczba obserwujących na Instagramie może być metryką — ale KPI jest tylko wtedy,
        gdy wzrost obserwujących ma bezpośrednie przełożenie na cel biznesowy (np. sprzedaż).
      </p>
      <p>
        W marketingu cyfrowym KPI używane są do oceny skuteczności kampanii SEO, SEM, content marketingu
        i działań w mediach społecznościowych. Bez KPI trudno ocenić czy inwestycje w marketing
        przynoszą oczekiwane rezultaty — i trudno podjąć racjonalne decyzje o alokacji budżetu.
      </p>

      <h2>Kluczowe KPI w SEO i SEM</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">KPI</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kanał</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink"><Link href="/organic-traffic">Ruch organiczny</Link></td><td className="p-4 text-zinc-600">Sesje z wyników organicznych Google</td><td className="p-4 text-zinc-600">GA4, GSC</td><td className="p-4 text-zinc-600">SEO</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Pozycje kluczowych fraz</td><td className="p-4 text-zinc-600">Miejsce w SERP dla priorytetowych słów kluczowych</td><td className="p-4 text-zinc-600">GSC, Ahrefs, Semrush</td><td className="p-4 text-zinc-600">SEO</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/conversion-rate">Współczynnik konwersji</Link></td><td className="p-4 text-zinc-600">% sesji kończących się pożądaną akcją</td><td className="p-4 text-zinc-600">GA4</td><td className="p-4 text-zinc-600">SEO / SEM</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/cpa">CPA</Link></td><td className="p-4 text-zinc-600">Koszt jednej konwersji</td><td className="p-4 text-zinc-600">Google Ads, GA4</td><td className="p-4 text-zinc-600">SEM</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/roas">ROAS</Link></td><td className="p-4 text-zinc-600">Przychód na każdą złotówkę wydaną na reklamy</td><td className="p-4 text-zinc-600">Google Ads</td><td className="p-4 text-zinc-600">SEM</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/ctr">CTR organiczny</Link></td><td className="p-4 text-zinc-600">% wyświetleń kończących się kliknięciem</td><td className="p-4 text-zinc-600">GSC</td><td className="p-4 text-zinc-600">SEO</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/autorytet-domeny">Domain Authority / DR</Link></td><td className="p-4 text-zinc-600">Siła profilu linków domeny</td><td className="p-4 text-zinc-600">Moz, Ahrefs</td><td className="p-4 text-zinc-600">SEO</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak wybrać właściwe KPI?</h2>
      <p>
        Dobry KPI spełnia kryteria <strong>SMART</strong>: jest <em>Specific</em> (konkretny — nie „więcej ruchu",
        ale „wzrost ruchu organicznego o 30% w ciągu 6 miesięcy"), <em>Measurable</em> (mierzalny — masz narzędzie
        do pomiaru), <em>Achievable</em> (osiągalny — ambitny ale realistyczny), <em>Relevant</em>
        (powiązany z celem biznesowym) i <em>Time-bound</em> (określony w czasie).
      </p>
      <p>
        Błąd, który popełniają zarówno agencje jak i działy marketingu: skupianie się na <strong>vanity metrics</strong>
        — wskaźnikach wyglądających imponująco, ale nierobiących różnicy dla biznesu.
        Duża liczba wyświetleń strony bez konwersji, tysiące obserwujących bez zaangażowania,
        wysoka pozycja dla fraz bez intencji zakupowej — to przykłady vanity metrics.
        KPI powinny łączyć się bezpośrednio z przychodem, leadami lub inną mierzalną wartością biznesową.
      </p>

      <InfoBox>
        <strong>Lagging vs. Leading KPI:</strong> Lagging indicators mierzą wyniki po fakcie — przychód, liczba klientów, ROAS. Leading indicators przewidują przyszłe wyniki — liczba nowych backlinków, publikowanych artykułów, wzrost DR. Dobry dashboard KPI zawiera obie grupy: leading wskaźniki mówią gdzie jesteś w drodze, lagging wskaźniki czy dotarłeś.
      </InfoBox>

      <h2>FAQ — KPI</h2>
      <h3>Ile KPI powinno mieć kampania SEO?</h3>
      <p>
        Zbyt wiele KPI dekoncentruje — śledzenie 20 wskaźników jednocześnie sprawia, że żaden
        nie jest naprawdę priorytetem. Rekomendowana liczba dla kampanii SEO to 3–5 głównych KPI
        plus kilka wskaźników wspierających. Typowy zestaw: ruch organiczny, pozycje dla top fraz,
        współczynnik konwersji organicznej, liczba nowych referring domains i CPA z organic.
      </p>
      <h3>Jak często raportować KPI?</h3>
      <p>
        Zależy od wskaźnika. SEO to strategia długoterminowa — miesięczne raporty są wystarczające
        dla większości wskaźników organicznych (pozycje zmieniają się powoli). Kampanie PPC wymagają
        raportowania tygodniowego lub nawet dziennego — tam zmiany budżetu i stawek mają natychmiastowy efekt.
        Dane real-time (np. z GA4) sprawdzasz przy testowaniu nowych treści lub po wdrożeniu zmian technicznych.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest KPI?", "acceptedAnswer": { "@type": "Answer", "text": "KPI (Key Performance Indicator) to mierzalna wartość oceniająca realizację kluczowych celów biznesowych. W SEO/SEM typowe KPI to ruch organiczny, pozycje fraz, współczynnik konwersji, CPA i ROAS." } }] }) }} />
    </div>
  );
}
