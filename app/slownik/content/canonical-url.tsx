import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function CanonicalUrl() {
  return (
    <div className="prose-blog">

      <h2>Problem: ta sama treść pod wieloma adresami URL</h2>
      <p>
        Wyobraź sobie sklep internetowy z produktem dostępnym pod czterema różnymi adresami URL:
        <em>sklep.pl/buty/nike-air</em>, <em>sklep.pl/buty/nike-air?color=red</em>,
        <em>sklep.pl/wyprzedaz/nike-air</em> i <em>www.sklep.pl/buty/nike-air</em>.
        Dla użytkownika to ten sam produkt. Dla Googlebota — cztery różne strony z identyczną treścią.
        Google musi zdecydować, którą z nich indeksować i której przypisać autorytet z linków zewnętrznych.
        Bez wskazówki od webmastera ta decyzja bywa błędna — autorytet rozkłada się między cztery adresy
        zamiast kumulować się na jednym. To właśnie <Link href="/duplicate-content">duplikacja treści</Link>,
        jeden z najczęstszych problemów <Link href="/technical-seo">technical SEO</Link>.
      </p>

      <h2>Czym jest Canonical URL?</h2>
      <p>
        <strong>Canonical URL</strong> (URL kanoniczny, tag canonical) to element HTML informujący wyszukiwarki,
        która wersja strony jest preferowana i powinna być indeksowana oraz traktowana jako oryginał.
        Wdrażany jest przez umieszczenie tagu <code>&lt;link rel="canonical"&gt;</code> w sekcji
        <code>&lt;head&gt;</code> strony. Strona wskazana jako kanoniczna zbiera cały autorytet z linków
        i to ona pojawia się w wynikach wyszukiwania — pozostałe wersje są traktowane jako duplikaty.
      </p>
      <p>
        Tag canonical nie jest dyrektywą — jest wskazówką (hint). Google może go zignorować,
        jeśli uzna, że wskazana strona nie nadaje się na kanoniczną (np. jest zablokowana przez robots.txt
        lub ma tag noindex). Dlatego canonical musi współgrać z resztą konfiguracji technicznej serwisu.
      </p>

      <h2>Jak wygląda implementacja canonical w kodzie?</h2>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
{`<!-- W sekcji <head> każdej wersji zduplikowanej strony: -->
<link rel="canonical" href="https://sklep.pl/buty/nike-air/" />`}
      </pre>
      <p>
        Ten tag umieszczony na stronie <em>sklep.pl/buty/nike-air?color=red</em> mówi Google:
        „Ta strona jest duplikatem — preferuj <em>sklep.pl/buty/nike-air/</em> jako oryginał."
        Canonical można też zaimplementować przez nagłówek HTTP (<code>Link: &lt;url&gt;; rel="canonical"</code>),
        co przydaje się dla plików PDF i zasobów nieposiadających sekcji HTML.
      </p>

      <h2>Kiedy stosować tag canonical — przegląd scenariuszy</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Scenariusz</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Problem</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Parametry URL (filtrowanie, sortowanie)</td>
              <td className="p-4 text-zinc-600">?sort=price, ?color=red tworzą duplikaty</td>
              <td className="p-4 text-zinc-600">Canonical na czystą wersję URL bez parametrów</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">HTTP vs HTTPS / www vs non-www</td>
              <td className="p-4 text-zinc-600">4 wersje tej samej domeny</td>
              <td className="p-4 text-zinc-600">Canonical + <Link href="/redirect-301">redirect 301</Link> do jednej preferowanej wersji</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Paginacja (strona 1, 2, 3...)</td>
              <td className="p-4 text-zinc-600">Strony kategorii z podobną treścią</td>
              <td className="p-4 text-zinc-600">Canonical self-referencing (każda strona wskazuje na siebie)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Syndykacja treści</td>
              <td className="p-4 text-zinc-600">Ten sam artykuł na kilku portalach</td>
              <td className="p-4 text-zinc-600">Canonical na źródło — syndykowane wersje wskazują oryginał</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wersje mobilna i desktopowa</td>
              <td className="p-4 text-zinc-600">m.domena.pl vs domena.pl</td>
              <td className="p-4 text-zinc-600">Canonical z wersji mobilnej na desktopową lub responsive design</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Self-referencing canonical — dobra praktyka</h2>
      <p>
        Każda strona powinna mieć canonical wskazujący na samą siebie, nawet jeśli nie ma duplikatów.
        To zabezpieczenie na wypadek, gdyby ktoś skopiował Twoją treść i opublikował bez canonical —
        Google na podstawie historii Twojego tagu będzie wiedzieć, kto jest oryginalnym źródłem.
        Self-referencing canonical to standard, który CMS-y takie jak WordPress (z Yoast lub Rank Math)
        wdrażają automatycznie.
      </p>

      <InfoBox>
        <strong>Canonical vs redirect 301 — kiedy co?</strong> Jeśli strona jest trwale przeniesiona i stara wersja nie powinna być dostępna — używaj <Link href="/redirect-301">redirect 301</Link>. Jeśli obie wersje muszą działać (np. parametryzowane URL filtrów) — użyj canonical. Canonical nie przekierowuje użytkownika, tylko informuje roboty o preferowanej wersji.
      </InfoBox>

      <h2>Najczęstsze błędy z tagiem canonical</h2>
      <p>
        <strong>Canonical wskazujący na stronę z noindex</strong> — jeśli preferowana wersja ma tag noindex,
        Google zignoruje canonical i samodzielnie wybierze wersję kanoniczną. Efekt często odwrotny od zamierzonego.
      </p>
      <p>
        <strong>Relative canonical zamiast absolute</strong> — canonical powinien zawsze wskazywać pełny URL
        z protokołem (<em>https://domena.pl/strona/</em>), a nie ścieżkę względną (<em>/strona/</em>).
        Relative canonical może być błędnie interpretowany przy migracji domeny.
      </p>
      <p>
        <strong>Łańcuchy canonical</strong> — strona A wskazuje canonical na stronę B,
        strona B wskazuje canonical na stronę C. Google podąża za łańcuchem, ale może zatrzymać się
        po kilku krokach i wybrać własną wersję kanoniczną. Canonical powinien wskazywać bezpośrednio na finalną stronę.
      </p>
      <p>
        <strong>Brak canonical przy zmianie domeny</strong> — przy migracji domeny,
        stare URL powinny być przekierowane przez 301, a nie jedynie otagowane canonicalem.
        Canonical bez przekierowania pozostawia starą domenę dostępną, co rozmywa sygnały rankingowe.
      </p>

      <h2>FAQ — Canonical URL</h2>

      <h3>Czy Google zawsze respektuje tag canonical?</h3>
      <p>
        Nie — canonical jest wskazówką, nie dyrektywą. Google może wybrać inną wersję kanoniczną,
        jeśli uzna Twój wybór za nielogiczny (np. wskazujesz na wolniejszą wersję, stronę z błędem 404
        lub stronę zablokowaną przez <Link href="/robots-txt">robots.txt</Link>).
        Regularnie sprawdzaj, którą wersję Google wybrał jako kanoniczną — w <Link href="/google-search-console">GSC</Link>
        zakładka Strony → „Wersja kanoniczna wybrana przez Google".
      </p>

      <h3>Czy canonical wpływa na ranking bezpośrednio?</h3>
      <p>
        Nie bezpośrednio — canonical nie jest czynnikiem rankingowym samym w sobie.
        Działa pośrednio przez konsolidację autorytetu linków na jednej preferowanej wersji strony,
        eliminację sygnałów duplikatu i zapobieganie rozmyciu <Link href="/link-juice">link juice</Link>
        między wieloma wariantami URL.
      </p>

      <h3>Co się stanie jeśli nie użyję canonical?</h3>
      <p>
        Google samodzielnie wybierze wersję kanoniczną — i może wybrać błędnie.
        W praktyce, dla stron bez duplikatów nic złego się nie dzieje.
        Problemy pojawiają się przy dynamicznych URL (parametry), wielu wersjach domeny
        lub syndykacji treści — tam brak canonical prowadzi do realnych strat w widoczności.
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
                "name": "Czy Google zawsze respektuje tag canonical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — canonical to wskazówka, nie dyrektywa. Google może wybrać inną wersję kanoniczną jeśli uzna Twój wybór za nielogiczny. Sprawdzaj wybór Google w Google Search Console w zakładce Strony."
                }
              },
              {
                "@type": "Question",
                "name": "Jaka jest różnica między canonical a redirect 301?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Redirect 301 trwale przenosi użytkownika i roboty na nowy URL — stary przestaje działać. Canonical tylko informuje roboty o preferowanej wersji, ale obie wersje URL pozostają dostępne dla użytkowników."
                }
              },
              {
                "@type": "Question",
                "name": "Co to jest self-referencing canonical?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Self-referencing canonical to tag canonical, który wskazuje na tę samą stronę, na której się znajduje. To dobra praktyka zabezpieczająca — informuje Google, że dana strona jest oryginalnym źródłem treści."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
