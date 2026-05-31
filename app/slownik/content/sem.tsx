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

export default function Sem() {
  return (
    <div className="prose-blog">
      <h2>Czym jest SEM?</h2>
      <p>
        <strong>SEM</strong> (Search Engine Marketing — marketing w wyszukiwarkach) to szerokie
        pojęcie obejmujące wszystkie działania marketingowe zmierzające do zwiększenia
        widoczności witryny w wynikach wyszukiwania — zarówno organicznych (bezpłatnych),
        jak i płatnych. W praktyce SEM jest parasolem obejmującym dwa filary:
        <Link href="/pozycjonowanie"> SEO</Link> (Search Engine Optimization)
        i <Link href="/ppc">PPC</Link> (Pay Per Click, w tym <Link href="/google-ads">Google Ads</Link>).
      </p>
      <p>
        Uwaga terminologiczna: w Polsce i w branży digital marketingu słowo „SEM"
        bywa używane zamiennie wyłącznie z płatnymi reklamami (Google Ads),
        z pominięciem SEO. To uproszczenie — oryginalnie SEM obejmuje obie dyscypliny.
        Kiedy słyszysz „kampania SEM", zazwyczaj chodzi o <Link href="/google-ads">Google Ads</Link>.
      </p>

      <h2>SEO vs PPC w ramach SEM</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Filar</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">PPC (Google Ads)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Płatność</td><td className="p-4 text-zinc-600">Brak per kliknięcie</td><td className="p-4 text-zinc-600">Za każde kliknięcie (<Link href="/cpc">CPC</Link>)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Czas</td><td className="p-4 text-zinc-600">3–12 miesięcy do efektów</td><td className="p-4 text-zinc-600">Natychmiastowy start</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Widoczność</td><td className="p-4 text-zinc-600">Wyniki organiczne</td><td className="p-4 text-zinc-600">Wyniki płatne (oznaczone „Reklama")</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Trwałość</td><td className="p-4 text-zinc-600">Kumuluje się z czasem</td><td className="p-4 text-zinc-600">Ustaje po wstrzymaniu budżetu</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Synergia SEO i PPC</h2>
      <p>
        Największą wartość SEM oferuje, gdy SEO i PPC działają razem:
        dane o konwersjach z kampanii Google Ads wskazują frazy warte inwestycji w SEO;
        organiczne pozycje obniżają koszt <Link href="/adrank">Ad Rank</Link>
        przez efekt rozpoznawalności marki; reklamy PPC zapewniają natychmiastową
        widoczność dla fraz, na które SEO jeszcze nie rankuje; testy tekstów reklamowych
        w PPC walidują nagłówki dla treści organicznych.
      </p>

      <InfoBox>
        <strong>SEM nie obejmuje Display ani social media:</strong> Kampanie banerowe
        w sieci Display Google, reklamy na YouTube, Facebook Ads czy LinkedIn Ads
        to osobna kategoria — paid media lub digital advertising —
        nie SEM w ścisłym sensie. SEM dotyczy wyłącznie wyników wyszukiwania.
        Kampanie Display w Google Ads technicznie wychodzą poza definicję SEM,
        choć zarządza się nimi przez tę samą platformę.
      </InfoBox>

      <h2>FAQ — SEM</h2>

      <h3>Czy warto inwestować w SEM, jeśli mam dobre organiczne pozycje?</h3>
      <p>
        Tak — frazy z dobrą pozycją organiczną warto wspierać też reklamami PPC.
        Podwójna widoczność (organiczna + płatna) dla tej samej frazy zwiększa
        łączny CTR i dominuje więcej przestrzeni w SERP. Badania pokazują,
        że obecność zarówno w organic jak i paid dla branded queries zwiększa
        klikalność o 15–50% względem samego organic.
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
                "name": "Czym jest SEM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEM (Search Engine Marketing) to marketing w wyszukiwarkach obejmujący SEO (wyniki organiczne) i PPC (płatne reklamy Google Ads). W praktyce branżowej SEM bywa używany wyłącznie dla płatnych kampanii. Największą wartość daje synergia obu kanałów."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
