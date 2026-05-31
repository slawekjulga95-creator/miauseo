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

export default function Url() {
  return (
    <div className="prose-blog">
      <h2>Czym jest URL?</h2>
      <p>
        <strong>URL</strong> (Uniform Resource Locator — jednolity lokalizator zasobu)
        to standardowy adres internetowy identyfikujący konkretny zasób w sieci:
        stronę HTML, obraz, plik PDF, API endpoint. Każdy URL składa się z kilku komponentów:
        protokół (<code>https://</code>), subdomena (<code>www.</code>), domena
        (<code>miauseo.pl</code>), ścieżka (<code>/slownik/</code>),
        <Link href="/slug"> slug</Link> (<code>pozycjonowanie</code>)
        i opcjonalnie parametry zapytania (<code>?param=value</code>) oraz fragment (<code>#sekcja</code>).
      </p>
      <p>
        W kontekście SEO URL ma podwójne znaczenie: techniczne (adres zasobu dla robota
        i przeglądarki) i semantyczne (sygnał dla algorytmu o tematyce strony i dla
        użytkownika o tym, czego się spodziewać po kliknięciu).
      </p>

      <h2>Cechy SEO-friendly URL</h2>
      <p>
        <strong>Czytelny i opisowy</strong> — URL powinien informować użytkownika
        i robota o tematyce strony. <code>/pozycjonowanie-lokalne</code> jest lepsze
        niż <code>/page?id=4281&cat=3</code>.
      </p>
      <p>
        <strong>Krótki</strong> — im krótszy URL, tym lepiej. Długie URL z wieloma
        katalogami są trudne do udostępniania i mogą być obcinane w niektorych
        mediach społecznościowych.
      </p>
      <p>
        <strong>Zawiera słowo kluczowe</strong> — fraza kluczowa w URL jest słabym,
        ale aktywnym sygnałem SEO. Google pogrubia ją w snippecie SERP.
      </p>
      <p>
        <strong>Bez zbędnych parametrów</strong> — parametry UTM, session ID,
        filtry i sortowania generują zduplikowane URL.{" "}
        <Link href="/canonical-url">Tagi canonical</Link> lub konfiguracja
        robots.txt są konieczne, by kontrolować, co Google indeksuje.
      </p>
      <p>
        <strong>Małe litery, myślniki, bez polskich znaków</strong> — standard techniczny
        i SEO. URL jest case-sensitive; <code>/SEO</code> i <code>/seo</code> to dwie
        różne strony. Myślniki (<code>-</code>) dzielą słowa, podkreślniki (<code>_</code>) nie.
      </p>

      <h2>Anatomia URL</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Komponent</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Znaczenie SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Protokół</td><td className="p-4 text-zinc-600">https://</td><td className="p-4 text-zinc-600">HTTPS to czynnik rankingowy; HTTP redirectuje na HTTPS</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Domena</td><td className="p-4 text-zinc-600">miauseo.pl</td><td className="p-4 text-zinc-600">Fundament autorytetu; marka w domenie poprawia CTR branded queries</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Ścieżka / slug</td><td className="p-4 text-zinc-600">/slownik/pozycjonowanie</td><td className="p-4 text-zinc-600">Słowo kluczowe wzmacnia trafność; głębokość max 3 poziomy</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Parametry</td><td className="p-4 text-zinc-600">?sort=cena&kolor=czarny</td><td className="p-4 text-zinc-600">Generują duplikaty; wymagają canonical lub noindex</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Zmieniaj URL tylko z 301:</strong> Każda zmiana adresu URL bez{" "}
        <Link href="/redirect-301">przekierowania 301</Link> niszczy backlinki,
        zakładki i rankingi. Dobrze dobierz URL przy tworzeniu strony —
        to najtańszy i najwygodniejszy moment. Zmiana po roku i setkach backlinków
        to znacznie droższe przedsięwzięcie.
      </InfoBox>

      <h2>FAQ — URL</h2>

      <h3>Czy długość URL wpływa na ranking?</h3>
      <p>
        Google oficjalnie nie podaje długości URL jako czynnika rankingowego.
        Jednak krótkie, opisowe URL mają wyższy CTR (użytkownik widzi je w SERP
        i decyduje się na kliknięcie) i są łatwiejsze w udostępnianiu.
        Bardzo długie URL z wieloma parametrami mogą sygnalizować brak
        dbałości o strukturę techniczną.
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
                "name": "Czym jest SEO-friendly URL?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SEO-friendly URL jest krótki, opisowy, zawiera słowo kluczowe, używa myślników i małych liter, bez polskich znaków i zbędnych parametrów. Zmiana URL po publikacji wymaga przekierowania 301, żeby zachować rankingi i backlinki."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
