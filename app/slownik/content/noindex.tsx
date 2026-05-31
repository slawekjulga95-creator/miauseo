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

export default function Noindex() {
  return (
    <div className="prose-blog">
      <h2>Czym jest noindex?</h2>
      <p>
        <strong>Noindex</strong> to dyrektywa przekazywana robotom wyszukiwarek, informująca że
        dana strona <strong>nie powinna być indeksowana</strong> — czyli nie powinna pojawiać się
        w wynikach wyszukiwania Google ani innych silników. Można ją przekazać na dwa sposoby:
        przez meta tag w sekcji <code>&lt;head&gt;</code> strony
        (<code>&lt;meta name="robots" content="noindex"&gt;</code>)
        lub przez nagłówek HTTP (<code>X-Robots-Tag: noindex</code>).
      </p>
      <p>
        Noindex jest celowym narzędziem — nie błędem. Poprawne stosowanie dyrektywy noindex
        to element zaawansowanej strategii SEO, pozwalający zarządzać tym, co Google widzi
        i indeksuje z Twojej witryny.
      </p>

      <h2>Kiedy stosować noindex?</h2>
      <p>
        <strong>Strony z parametrami URL</strong> — filtrowane wersje kategorii sklepowych
        (np. <code>/produkty?kolor=czerwony&rozmiar=M</code>) generują dziesiątki lub setki
        duplikatów. Noindex lub{" "}
        <Link href="/canonical-url">canonical</Link> chroni przed rozmyciem indeksu.
      </p>
      <p>
        <strong>Strony techniczne i administracyjne</strong> — strony logowania, koszyk, podziękowanie
        po zakupie, panel klienta, wyniki wewnętrznej wyszukiwarki. Nie mają wartości dla użytkowników
        przychodzących z Google.
      </p>
      <p>
        <strong>Treści tymczasowe lub robocze</strong> — strony w przygotowaniu, landing pages
        do testów A/B, wersje stagingowe. Noindex chroni przed przypadkowym zaindeksowaniem.
      </p>
      <p>
        <strong>Strony z thin content</strong> — strony z minimalną treścią (tagi, archiwa datowe,
        paginacja w blogach), które nie wnoszą wartości dla użytkownika, a rozmywają crawl budget
        i jakość indeksu. Noindex + zachowanie linkowania wewnętrznego to optymalne podejście.
      </p>

      <h2>Noindex vs robots.txt — kluczowa różnica</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Mechanizm</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co robi</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kiedy używać</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Noindex</td><td className="p-4 text-zinc-600">Pozwala crawlować, ale nie indeksować — strona jest odwiedzana, ale nie pojawia się w wynikach</td><td className="p-4 text-zinc-600">Strony techniczne, duplikaty, thin content</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Disallow w robots.txt</td><td className="p-4 text-zinc-600">Blokuje crawlowanie — Googlebot nie odwiedza strony wcale</td><td className="p-4 text-zinc-600">Zasoby prywatne, pliki systemowe, obszary admina</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Ważna pułapka:</strong> Strona zablokowana przez robots.txt (Disallow) <em>może</em>{" "}
        nadal pojawić się w wynikach Google, jeśli inne strony do niej linkują.
        Google wie, że istnieje — widzi ją przez linki — ale nie zna jej treści.
        Jeśli chcesz mieć pewność, że strona nie pojawi się w wynikach,
        użyj noindex (nie robots.txt). Obie dyrektywy mogą działać razem.
      </InfoBox>

      <h2>FAQ — Noindex</h2>

      <h3>Jak sprawdzić, czy strona ma noindex?</h3>
      <p>
        Narzędzia: <Link href="/google-search-console">Google Search Console</Link> — raport
        „Pokrycie indeksu" pokazuje strony z dyrektywą noindex. Screaming Frog crawluje stronę
        i wyświetla wszystkie dyrektywy robots w kolumnie „Indexability".
        Możesz też sprawdzić ręcznie: wejdź na stronę, otwórz źródło HTML (Ctrl+U)
        i szukaj <code>&lt;meta name="robots"&gt;</code>.
      </p>

      <h3>Co się stanie, jeśli strona ma noindex, ale inne linkują do niej dofollow?</h3>
      <p>
        Strona nie będzie indeksowana w Google. Linki wchodzące do strony z noindex
        są „wchłaniane" — Google odwiedza stronę, widzi dyrektywę noindex i nie indeksuje jej,
        ale nadal może przekazywać autorytet dalej, jeśli strona zawiera linki wychodzące
        do innych stron. To zachowanie jest przedmiotem dyskusji w środowisku SEO —
        oficjalne stanowisko Google jest, że noindex strona nie przetwarza swojego link juice.
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
                "name": "Czym jest dyrektywa noindex?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Noindex to dyrektywa w meta tagu lub nagłówku HTTP nakazująca Google nie indeksować danej strony. Strona jest crawlowana, ale nie pojawia się w wynikach wyszukiwania. Stosuje się ją dla stron technicznych, duplikatów i thin content."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest różnica między noindex a robots.txt disallow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Noindex pozwala crawlować stronę, ale nie dodaje jej do indeksu. Robots.txt Disallow całkowicie blokuje crawlowanie. Jeśli chcesz mieć pewność, że strona nie pojawi się w wynikach, użyj noindex — strona zablokowana przez robots.txt może nadal pojawić się w SERP przez linki zewnętrzne."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
