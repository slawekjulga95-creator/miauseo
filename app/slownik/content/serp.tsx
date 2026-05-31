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

export default function Serp() {
  return (
    <div className="prose-blog">
      <h2>Czym jest SERP?</h2>
      <p>
        <strong>SERP</strong> (Search Engine Results Page — strona wyników wyszukiwania)
        to strona wyświetlana przez Google po wpisaniu zapytania. Zawiera różnorodne
        formaty wyników — nie tylko klasyczną listę niebieskich linków — ułożone dynamicznie
        w zależności od intencji zapytania, historii użytkownika i lokalizacji.
        Zrozumienie struktury SERP jest fundamentem skutecznej strategii SEO i PPC.
      </p>

      <h2>Elementy współczesnego SERP</h2>
      <p>
        <strong>Płatne reklamy (Google Ads)</strong> — wyniki z etykietą „Reklama"
        pojawiające się na górze i/lub dole strony wyników. Zależne od budżetu,
        <Link href="/quality-score"> Quality Score</Link> i <Link href="/adrank">Ad Rank</Link>.
      </p>
      <p>
        <strong>Organiczne wyniki wyszukiwania</strong> — bezpłatne wyniki rankingowane
        przez algorytm Google na podstawie trafności, autorytetu i sygnałów UX.
        Każdy wynik zawiera <Link href="/meta-title">tytuł</Link>,
        URL i <Link href="/meta-description">opis</Link>.
      </p>
      <p>
        <strong><Link href="/featured-snippet">Featured Snippet</Link> (pozycja 0)</strong> —
        wyróżniony blok odpowiedzi na pytanie wyświetlany ponad standardowymi wynikami.
        Zawiera fragment tekstu, tabelę lub listę z Twojej strony.
      </p>
      <p>
        <strong><Link href="/local-pack">Local Pack</Link></strong> — mapa z top 3 firmami
        lokalnymi dla zapytań z intencją lokalną.
      </p>
      <p>
        <strong>Knowledge Panel</strong> — panel po prawej stronie z informacjami o marce,
        firmie, osobie lub miejscu z Google Knowledge Graph.
      </p>
      <p>
        <strong>People Also Ask (PAA)</strong> — rozwijane pytania powiązane semantycznie
        z zapytaniem. Kliknięcie pytania rozwija odpowiedź ze strony zewnętrznej.
      </p>
      <p>
        <strong><Link href="/ai-overviews">AI Overviews</Link></strong> — generowane przez
        AI podsumowanie odpowiedzi na pytanie, pojawiające się nad wynikami organicznymi.
        Wpływ na CTR stron organicznych jest przedmiotem badań i dyskusji.
      </p>
      <p>
        <strong><Link href="/rich-snippet">Rich Snippety</Link></strong> — wzbogacone wyniki
        z danymi strukturalnymi: gwiazdki, ceny, przepisy, FAQ, daty wydarzeń.
      </p>

      <h2>Jak zmienia się SERP w czasie?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Element SERP</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wpływ na SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Featured Snippet</td><td className="p-4 text-zinc-600">Może „ukraść" ruch nawet z pozycji 2–3; warto optymalizować strony na pozycjach 1–5</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Local Pack (3 wyniki)</td><td className="p-4 text-zinc-600">Popycha organiczne wyniki niżej — kluczowy dla firm lokalnych</td></tr>
            <tr><td className="p-4 font-semibold text-ink">AI Overviews</td><td className="p-4 text-zinc-600">Może zmniejszać CTR organicznych wyników przez odpowiadanie bez kliknięcia</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Rich Snippety</td><td className="p-4 text-zinc-600">Zwiększają CTR bez zmiany pozycji — opcja dla każdej strony</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>SERP różni się dla różnych użytkowników:</strong> Google personalizuje wyniki
        na podstawie historii wyszukiwań, lokalizacji, urządzenia i języka przeglądarki.
        Pozycja, którą widzisz, może różnić się od tej, którą widzi potencjalny klient.
        Do mierzenia rzeczywistych pozycji używaj narzędzi jak Ahrefs, Semrush lub Senuto,
        które pobierają dane bez personalizacji.
      </InfoBox>

      <h2>FAQ — SERP</h2>

      <h3>Ile wyników organicznych jest na pierwszej stronie Google?</h3>
      <p>
        Liczba zmienia się w zależności od zapytania — między 7 a 10 wyników organicznych,
        ale przestrzeń zajmowana przez reklamy, Local Pack, Featured Snippet i inne elementy
        SERP może znacznie skrócić listę widoczną bez scrollowania (above the fold).
        Dla niektórych zapytań lokalnych lub informacyjnych widocznych organicznie może być
        tylko 3–5 wyników przed fold.
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
                "name": "Czym jest SERP?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SERP (Search Engine Results Page) to strona wyników wyszukiwania Google. Zawiera reklamy, wyniki organiczne, Featured Snippet, Local Pack, Knowledge Panel, People Also Ask i rich snippety. Struktura SERP różni się w zależności od intencji zapytania."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
