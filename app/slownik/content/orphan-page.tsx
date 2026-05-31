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

export default function OrphanPage() {
  return (
    <div className="prose-blog">
      <h2>Czym jest orphan page?</h2>
      <p>
        <strong>Orphan page</strong> (strona sierota) to podstrona serwisu, do której
        <strong> nie prowadzą żadne linki wewnętrzne</strong> z innych stron w tej samej domenie.
        Strona istnieje pod konkretnym URL, ale jest odizolowana od struktury nawigacyjnej witryny —
        niedostępna dla <Link href="/googlebot">Googlebota</Link> i niewidoczna dla użytkowników
        przeglądających serwis przez menu czy linkowanie.
      </p>
      <p>
        Strony sieroty to powszechny problem — szczególnie w dużych serwisach z dynamicznie
        rosnącą liczbą podstron, po migracjach, redesignach lub przy chaotycznej architekturze treści.
        Mogą mieć wartościową treść, ale pozostają nieodkryte i nie rankują.
      </p>

      <h2>Dlaczego orphan pages są problemem SEO?</h2>
      <p>
        <strong>Trudność z odkryciem przez Google</strong> — <Link href="/crawlowanie">Googlebot</Link>{" "}
        eksploruje serwis, podążając za linkami. Strona bez linków wewnętrznych może być odkryta
        jedynie przez sitemap XML lub przez backlink zewnętrzny. Jeśli strona nie jest w sitemapie —
        może nigdy nie zostać zaindeksowana.
      </p>
      <p>
        <strong>Brak przekazywanego <Link href="/link-juice">link juice</Link></strong> —
        strony sieroty nie otrzymują autorytetu z innych stron domeny. Nawet jeśli mają backlinki,
        ich pozycje są słabsze niż gdyby były właściwie zintegrowane w strukturze serwisu.
      </p>
      <p>
        <strong>Marnotrawstwo crawl budżetu</strong> — jeśli Googlebot strona sierotę znajdzie
        przez sitemap, odwiedza ją kosztem crawl budżetu, nie przekazując wartości innym stronom.
      </p>

      <h2>Jak znajdować orphan pages?</h2>
      <p>
        <strong>Porównanie sitemap z crawlem</strong> — podstawowa metoda: skrawluj serwis
        narzędziem (Screaming Frog, Sitebulb, Ahrefs), wyeksportuj wszystkie URL odkryte przez
        crawl i porównaj z URL z sitemap XML. Strony w sitemapie, do których nie prowadzą
        żadne linki odkryte przez crawl — to kandydatki na sieroty.
      </p>
      <p>
        <strong>Google Analytics + crawl</strong> — skrawluj serwis i porównaj znalezione URL
        ze wszystkimi URL, które kiedykolwiek miały wizytę w GA. Strony z ruchem niewidoczne
        w crawlu to orphan pages z zewnętrznym ruchem — szczególnie warte naprawienia.
      </p>
      <p>
        <strong>Screaming Frog</strong> — raport „Orphan Pages" (File → Sitemap → Compare Crawl
        to XML Sitemap) automatycznie identyfikuje strony z sitemapy bez linków wewnętrznych.
      </p>

      <InfoBox>
        <strong>Strona sierota ≠ strona bez wartości:</strong> Orphan pages często zawierają
        cenne treści — artykuły blogowe zapomniane po redesignie, landing pages po zakończonej
        kampanii, strony produktów wycofanych bez przekierowania. Zanim zdecydujesz o noindex
        lub usunięciu, sprawdź, czy strona ma ruch organiczny lub backlinki —
        mogą być warte reaktywowania i linkowania wewnętrznego.
      </InfoBox>

      <h2>FAQ — Orphan Page</h2>

      <h3>Jak naprawić strony sieroty?</h3>
      <p>
        Rozwiązanie zależy od wartości strony.
        <strong>Wartościowa treść</strong> — dodaj linki wewnętrzne z tematycznie powiązanych stron,
        dodaj do menu lub breadcrumbs, umieść w sitemapie.
        <strong>Treść bez wartości</strong> — redirect 301 do tematycznie bliskiej strony lub
        dyrektywa noindex, jeśli strona ma jakiś powód istnienia (np. techniczny).
        <strong>Przestarzałe landing pages</strong> — redirect do aktualnej oferty lub noindex.
      </p>

      <h3>Czy strona w sitemapie XML to nie to samo co mieć linki wewnętrzne?</h3>
      <p>
        Nie — sitemap XML to lista adresów dla Googlebota, ale nie zastępuje{" "}
        <Link href="/internal-linking">linkowania wewnętrznego</Link>.
        Strona w sitemapie bez linków wewnętrznych jest co prawda indeksowana,
        ale nie otrzymuje link juice od innych stron domeny i jest trudniej odkrywalna
        dla użytkowników. Optymalna sytuacja to obecność zarówno w sitemapie, jak i siatce
        linków wewnętrznych.
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
                "name": "Czym jest orphan page?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Orphan page (strona sierota) to podstrona bez żadnych linków wewnętrznych prowadzących do niej. Googlebot trudno ją odkryć, nie otrzymuje link juice i rzadko rankuje — nawet jeśli ma wartościową treść."
                }
              },
              {
                "@type": "Question",
                "name": "Jak naprawić orphan pages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dla wartościowych stron: dodaj linki wewnętrzne z powiązanych stron i umieść w sitemapie. Dla stron bez wartości: redirect 301 do tematycznie bliskiej strony. Dla przestarzałych: redirect lub noindex."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
