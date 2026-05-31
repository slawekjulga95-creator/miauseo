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

export default function RobotsTxt() {
  return (
    <div className="prose-blog">
      <h2>Czym jest robots.txt?</h2>
      <p>
        <strong>Robots.txt</strong> to plik tekstowy umieszczony w katalogu głównym witryny
        (pod adresem <code>https://example.com/robots.txt</code>), który instruuje roboty
        wyszukiwarek — w tym <Link href="/googlebot">Googlebot</Link> —
        które obszary serwisu mogą, a których nie powinny <Link href="/crawlowanie">crawlować</Link>.
        Działa na podstawie protokołu REP (Robots Exclusion Protocol) ustanowionego w 1994 roku.
      </p>
      <p>
        Robots.txt to <strong>wskazówka, nie bariera</strong> — szanujące protokół roboty
        przestrzegają dyrektyw, ale złośliwe boty czy skrobacze często je ignorują.
        Plik nie zapewnia bezpieczeństwa ani prywatności — służy wyłącznie do zarządzania
        crawlem i crawl budgetem.
      </p>

      <h2>Podstawowa składnia robots.txt</h2>
      <p>
        Plik składa się z bloków — każdy blok dotyczy jednego lub grupy robotów.
        Kluczowe dyrektywy:
        <strong>User-agent</strong> — określa, którego robota dotyczą zasady
        (<code>*</code> oznacza wszystkich).
        <strong>Disallow</strong> — ścieżki, których robot nie powinien crawlować
        (<code>Disallow: /admin/</code>).
        <strong>Allow</strong> — wyjątki od Disallow
        (<code>Allow: /admin/publiczny/</code>).
        <strong>Sitemap</strong> — wskazanie lokalizacji sitemapy XML
        (<code>Sitemap: https://example.com/sitemap.xml</code>).
        <strong>Crawl-delay</strong> — opóźnienie między żądaniami (Google ignoruje tę dyrektywę).
      </p>

      <h2>Co blokować przez robots.txt?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Blokować</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Nie blokować</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 text-zinc-600">/admin/, /wp-admin/ — panele administracyjne</td><td className="p-4 text-zinc-600">Strony ofertowe, produktowe, blogowe</td></tr>
            <tr><td className="p-4 text-zinc-600">/checkout/, /koszyk/ — ścieżka zakupowa</td><td className="p-4 text-zinc-600">CSS i JavaScript potrzebne do renderowania</td></tr>
            <tr><td className="p-4 text-zinc-600">/search?q= — wyniki wewnętrznej wyszukiwarki</td><td className="p-4 text-zinc-600">Pliki graficzne używane przez strony publiczne</td></tr>
            <tr><td className="p-4 text-zinc-600">/staging/ — środowisko testowe (jeśli na tej samej domenie)</td><td className="p-4 text-zinc-600">Sitemap XML — wręcz wskaż go w robots.txt</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Robots.txt kontra noindex — kluczowa różnica:</strong> Zablokowanie strony
        przez robots.txt (<code>Disallow</code>) uniemożliwia crawlowanie, ale nie indeksowanie —
        jeśli inne strony linkują do zablokowanego URL, Google wie, że istnieje,
        i może go pokazać w wynikach bez wiedzy o treści. Jeśli chcesz, żeby strona
        <em>nie pojawiała się</em> w wynikach, użyj <Link href="/noindex">dyrektywy noindex</Link>,
        nie robots.txt. Obie dyrektywy mogą działać razem.
      </InfoBox>

      <h2>FAQ — Robots.txt</h2>

      <h3>Jak sprawdzić, czy robots.txt blokuje ważne strony?</h3>
      <p>
        <Link href="/google-search-console">Google Search Console</Link> → Ustawienia →
        Tester robots.txt pozwala wprowadzić URL i sprawdzić, czy Googlebot ma do niego dostęp.
        Screaming Frog podczas crawlu flaguje zablokowane przez robots.txt URL w kolumnie
        „Indexability". Warto też sprawdzić raport Pokrycie indeksu w GSC —
        strony zablokowane robots.txt pojawiają się tam z odpowiednią adnotacją.
      </p>

      <h3>Czy Google respektuje robots.txt w 100%?</h3>
      <p>
        Tak — <Link href="/googlebot">Googlebot</Link> szanuje dyrektywy robots.txt.
        Jednak od 2019 roku Google przestał obsługiwać nieoficjalne dyrektywy
        jak <code>Noindex</code> w robots.txt (była obsługiwana wcześniej przez Google,
        nigdy oficjalnie). Jedyna obsługiwana przez Google dyrektywa metarobotów
        to ta umieszczona w tagu HTML <code>&lt;meta name="robots"&gt;</code>
        lub nagłówku HTTP <code>X-Robots-Tag</code>.
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
                "name": "Czym jest plik robots.txt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Robots.txt to plik tekstowy w katalogu głównym witryny instruujący roboty, które obszary mogą lub nie mogą crawlować. To wskazówka, nie bariera — służy do zarządzania crawl budgetem, nie do ochrony prywatności. Nie zastępuje dyrektywy noindex."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
