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

export default function TechnicalSeo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest technical SEO?</h2>
      <p>
        <strong>Technical SEO</strong> (SEO techniczne) to obszar optymalizacji
        skupiony na technicznych aspektach witryny, które wpływają na zdolność
        <Link href="/googlebot"> Googlebota</Link> do crawlowania, rozumienia
        i <Link href="/indeksowanie">indeksowania</Link> stron. W odróżnieniu od
        <Link href="/on-page-seo"> on-page SEO</Link> (treść i nagłówki) czy
        <Link href="/off-page-seo"> off-page SEO</Link> (linki), technical SEO
        zajmuje się fundamentem — infrastrukturą, bez której inne działania nie przynoszą efektów.
      </p>
      <p>
        Technical SEO jest szczególnie istotne dla dużych serwisów (e-commerce, portale),
        po migracjach i redesignach, przy uruchamianiu nowych witryn. Problemy techniczne
        mogą całkowicie blokować indeksowanie stron, eliminując efekty nawet najlepszej
        treści i link buildingu.
      </p>

      <h2>Kluczowe obszary technical SEO</h2>
      <p>
        <strong>Crawlowanie i indeksowanie</strong> — poprawność{" "}
        <Link href="/robots-txt">robots.txt</Link>, dyrektywy{" "}
        <Link href="/noindex">noindex</Link>, <Link href="/sitemap-xml">sitemap XML</Link>,
        crawl budget management dla dużych serwisów. Googlebot musi być w stanie dotrzeć
        do wszystkich ważnych stron i je zaindeksować.
      </p>
      <p>
        <strong>Szybkość strony i Core Web Vitals</strong> — <Link href="/page-speed">page speed</Link>
        i <Link href="/core-web-vitals">Core Web Vitals</Link> (LCP, INP, CLS) są bezpośrednimi
        czynnikami rankingowymi. Optymalizacja obejmuje obrazy, JavaScript, CSS, serwer i CDN.
      </p>
      <p>
        <strong>Mobile-First Indexing</strong> — zgodność z{" "}
        <Link href="/mobile-first-indexing">podejściem mobile-first</Link> Google;
        responsywny design i parytety treści między wersjami mobilną i desktopową.
      </p>
      <p>
        <strong>HTTPS i bezpieczeństwo</strong> — certyfikat SSL, poprawne{" "}
        <Link href="/redirect-301">przekierowania HTTP→HTTPS</Link>,
        brak mixed content (HTTP w obrębie HTTPS strony).
      </p>
      <p>
        <strong>Architektura URL i przekierowania</strong> — spójny schemat URL,
        brak duplikatów (www vs non-www, trailing slash), poprawne{" "}
        <Link href="/canonical-url">tagi canonical</Link>, łańcuchy przekierowań.
      </p>
      <p>
        <strong>Dane strukturalne</strong> — implementacja{" "}
        <Link href="/structured-data">Schema.org</Link> dla kwalifikujących się typów treści.
      </p>

      <h2>Narzędzia do technical SEO</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink"><Link href="/google-search-console">Google Search Console</Link></td><td className="p-4 text-zinc-600">Pokrycie indeksu, Core Web Vitals, błędy crawlowania, sitemap</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Screaming Frog</td><td className="p-4 text-zinc-600">Audyt techniczny crawlem: meta tagi, przekierowania, broken links, duplicate content</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Google PageSpeed Insights</td><td className="p-4 text-zinc-600">Core Web Vitals i optymalizacja szybkości (laboratoryjne + field data)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Ahrefs / Semrush Site Audit</td><td className="p-4 text-zinc-600">Kompleksowy audyt techniczny z priorytetyzacją problemów</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Technical SEO to fundament — nie opcja:</strong> Nawet najlepsza treść
        i profile linków nie pomogą, jeśli Googlebot nie może zaindeksować stron
        z powodu błędnej konfiguracji robots.txt, brakującej sitemapy lub powolnego
        serwera. Technical SEO audit to obowiązkowy punkt startowy każdego projektu SEO.
      </InfoBox>

      <h2>FAQ — Technical SEO</h2>

      <h3>Jak często przeprowadzać audyt techniczny SEO?</h3>
      <p>
        Dla aktywnych serwisów: pełny audyt raz na kwartał, monitoring ciągły
        przez narzędzia alertujące (GSC, Ahrefs). Po każdej migracji, redesignie
        lub znaczącej aktualizacji CMS — audyt obowiązkowy niezależnie od harmonogramu.
        Małe serwisy z rzadkimi zmianami mogą przeprowadzać audyt co pół roku.
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
                "name": "Czym jest technical SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Technical SEO to obszar optymalizacji skupiony na technicznych aspektach witryny: crawlowanie, indeksowanie, szybkość (Core Web Vitals), Mobile-First Indexing, HTTPS, architektura URL i dane strukturalne. Fundament, bez którego on-page i off-page SEO tracą efektywność."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
