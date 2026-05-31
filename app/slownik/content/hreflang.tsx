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
export default function Hreflang() {
  return (
    <div className="prose-blog">
      <h2>Problem: ta sama treść w wielu językach lub regionach</h2>
      <p>
        Firma działająca na kilku rynkach ma stronę po polsku, angielsku i niemiecku.
        Użytkownik z Niemiec wpisuje zapytanie po niemiecku — Google musi zdecydować,
        którą wersję językową pokazać. Bez wskazówki od webmastera może wybrać błędnie —
        np. pokazać angielską wersję Niemcowi szukającemu po niemiecku. Efekt: słaby UX,
        niższy CTR, stracony potencjalny klient.
      </p>
      <p>
        <strong>Hreflang</strong> to atrybut HTML rozwiązujący ten problem —
        informuje Google o istnieniu różnych wersji językowych lub regionalnych strony
        i wskazuje, którą wersję wyświetlić użytkownikom w danym języku lub lokalizacji.
      </p>

      <h2>Czym jest atrybut Hreflang?</h2>
      <p>
        Hreflang to atrybut znacznika <code>&lt;link&gt;</code> umieszczanego w sekcji <code>&lt;head&gt;</code>
        każdej wersji językowej strony. Wartość atrybutu to kod języka (ISO 639-1, np. <em>pl</em>, <em>en</em>, <em>de</em>)
        opcjonalnie uzupełniony o kod regionu (ISO 3166-1 Alpha-2, np. <em>en-GB</em> dla angielskiego z UK,
        <em>en-US</em> dla angielskiego z USA).
      </p>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
{`<!-- Na każdej wersji językowej dodaj kompletny zestaw hreflang: -->
<link rel="alternate" hreflang="pl" href="https://example.com/pl/" />
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="de" href="https://example.com/de/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/" />`}
      </pre>
      <p>
        Kluczowa zasada: hreflang musi być <strong>symetryczny</strong> — każda wersja językowa
        musi zawierać linki hreflang do <em>wszystkich</em> innych wersji, włącznie z samą sobą
        (self-referencing hreflang). Jeśli wersja polska linkuje do angielskiej, angielska musi linkować
        z powrotem do polskiej. Asymetryczna implementacja jest jednym z najczęstszych błędów.
      </p>

      <h2>Hreflang x-default — co oznacza?</h2>
      <p>
        Wartość <code>hreflang="x-default"</code> wskazuje wersję domyślną — tę, którą Google powinno wyświetlić
        gdy żadna inna wersja językowa nie pasuje do języka lub lokalizacji użytkownika.
        Zazwyczaj jest to strona główna lub wersja angielska jako lingua franca.
        x-default jest opcjonalny, ale rekomendowany przy wielojęzycznych serwisach.
      </p>

      <h2>Najczęstsze błędy implementacji hreflang</h2>
      <p>
        <strong>Brak symetrii</strong> — strona A linkuje do B przez hreflang, ale B nie linkuje do A.
        Google ignoruje niesymetryczne hreflang i samodzielnie wybiera wersję.
        <strong>Hreflang wskazuje na stronę z noindex lub redirect</strong> — hreflang powinien wskazywać
        na strony zwracające HTTP 200, nie na przekierowania lub strony zablokowane przez noindex.
        <strong>Mieszanie języka i regionu bez sensu</strong> — np. <em>pl-EN</em> (polski dla użytkowników angielskich)
        jest błędem logicznym i jest ignorowany.
        <strong>Niekompletna lista wersji</strong> — jeśli masz 5 wersji językowych,
        każda z nich musi zawierać hreflang wskazujący na wszystkie 5 (w tym siebie).
      </p>

      <InfoBox>
        <strong>Hreflang vs. Canonical:</strong> Hreflang i <Link href="/canonical-url">canonical</Link> rozwiązują różne problemy. Canonical wskazuje preferowaną wersję zduplikowanych URL w obrębie jednego języka. Hreflang rozróżnia między wersjami językowymi — każda wersja językowa jest kanoniczna dla swojego języka. Nie używaj canonical do wskazywania między różnymi językami.
      </InfoBox>

      <h2>FAQ — Hreflang</h2>
      <h3>Czy hreflang wpływa na ranking?</h3>
      <p>
        Hreflang nie jest bezpośrednim czynnikiem rankingowym. Pomaga Google wyświetlić właściwą wersję
        językową właściwemu użytkownikowi — co poprawia UX, CTR i zaangażowanie, co pośrednio
        może wpływać pozytywnie na ranking. Błędna implementacja hreflang może powodować wyświetlanie
        złej wersji językowej — co obniża CTR i zaangażowanie.
      </p>
      <h3>Czy hreflang działa dla bing.com?</h3>
      <p>
        Nie bezpośrednio. Bing ma własne mechanizmy obsługi wielojęzycznych stron (głównie przez geo-targeting
        i strukturę URL). Hreflang jest specyficzny dla Google. Dla Bing stosuje się inne podejście —
        lokalizację przez strukturę URL i meta-geotargeting w Bing Webmaster Tools.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest hreflang?", "acceptedAnswer": { "@type": "Answer", "text": "Hreflang to atrybut HTML informujący Google o języku i regionie docelowym strony. Stosowany przy wielojęzycznych witrynach — wskazuje Google którą wersję językową wyświetlić użytkownikom z różnych krajów i w różnych językach." } }] }) }} />
    </div>
  );
}
