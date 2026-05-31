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

export default function OnPageSeo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest on-page SEO?</h2>
      <p>
        <strong>On-page SEO</strong> (SEO on-site) to wszystkie działania optymalizacyjne
        wykonywane bezpośrednio na stronie internetowej — w treści, kodzie i strukturze —
        które mają na celu poprawę widoczności w organicznych wynikach wyszukiwania.
        W przeciwieństwie do <Link href="/off-page-seo">off-page SEO</Link>, które zależy
        od działań zewnętrznych, on-page SEO jest w pełni pod kontrolą właściciela strony.
      </p>
      <p>
        On-page SEO to fundament, od którego należy zaczynać optymalizację —
        nawet najsilniejszy profil backlinków nie zastąpi dobrze napisanej, poprawnie
        ustrukturyzowanej treści odpowiadającej na intencję użytkownika.
      </p>

      <h2>Kluczowe elementy on-page SEO</h2>
      <p>
        <strong><Link href="/meta-title">Meta title</Link></strong> — tytuł strony widoczny
        w wynikach wyszukiwania. Jeden z najsilniejszych sygnałów on-page; zawiera główną
        frazę kluczową i mieści się w 50–60 znakach.
      </p>
      <p>
        <strong><Link href="/meta-description">Meta description</Link></strong> — opis strony
        pod tytułem w SERP. Nie wpływa bezpośrednio na ranking, ale poprawia CTR.
      </p>
      <p>
        <strong><Link href="/heading-tags">Nagłówki H1–H6</Link></strong> — hierarchia nagłówków
        sygnalizuje Google strukturę treści. H1 to główny temat strony (jeden na stronie),
        H2–H3 to podtematy i sekcje.
      </p>
      <p>
        <strong>Treść — jakość i pokrycie tematu</strong> — treść musi odpowiadać na intencję
        wyszukiwania, być ekspercka (E-E-A-T), wyczerpująca i bogata semantycznie.
        Nowoczesne SEO ocenia pokrycie tematu, a nie gęstość słów kluczowych.
      </p>
      <p>
        <strong>URL</strong> — krótki, opisowy permalink z główną frazą kluczową.
        Bez parametrów, bez stopwords, bez spacji (zamieniane na myślniki).
      </p>
      <p>
        <strong><Link href="/internal-linking">Internal linking</Link></strong> — linki
        wewnętrzne przekazują autorytet między stronami i ułatwiają crawlowanie.
        Logiczna architektura serwisu to podstawa efektywnego on-page SEO.
      </p>
      <p>
        <strong>Szybkość i Core Web Vitals</strong> — czas ładowania,{" "}
        <Link href="/core-web-vitals">LCP, FID/INP i CLS</Link> są bezpośrednimi czynnikami
        rankingowymi. Mobile-first indexing wymaga, żeby wersja mobilna była równie szybka.
      </p>
      <p>
        <strong>Dane strukturalne (Schema.org)</strong> — JSON-LD z odpowiednim typem danych
        umożliwia rich snippets w SERP (oceny, FAQ, przepisy, produkty), co zwiększa CTR
        bez zmiany pozycji.
      </p>

      <h2>On-page SEO — lista kontrolna</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Element</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Status — co sprawdzić</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Meta title</td><td className="p-4 text-zinc-600">Unikalny, 50–60 zn., fraza kluczowa na początku</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Meta description</td><td className="p-4 text-zinc-600">Unikalny, do 155 zn., z CTA i frazą kluczową</td></tr>
            <tr><td className="p-4 font-semibold text-ink">H1</td><td className="p-4 text-zinc-600">Jeden na stronę, zawiera główną frazę</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Treść</td><td className="p-4 text-zinc-600">Min. 300 słów, odpowiada na intencję, nie ma duplicate content</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Obrazy</td><td className="p-4 text-zinc-600">Alt text z opisem i frazą, skompresowane, w nowoczesnym formacie (WebP)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">URL</td><td className="p-4 text-zinc-600">Krótki, z frazą, bez parametrów, bez polskich znaków</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Core Web Vitals</td><td className="p-4 text-zinc-600">LCP &lt; 2,5s, INP &lt; 200ms, CLS &lt; 0,1</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>On-page SEO zaczyna się od intencji, nie od frazy:</strong> Zanim zaczniesz
        optymalizować, odpowiedz na pytanie: czego naprawdę szuka użytkownik wpisując
        to zapytanie? Informacji? Produktu? Porównania? Narzędzia? Format i głębokość treści
        musi odpowiadać <Link href="/intencja-wyszukiwania">intencji wyszukiwania</Link> —
        bo nawet technicznie idealna strona nie będzie rankować, jeśli format odpowiedzi
        nie pasuje do tego, czego szuka Google dla tej frazy.
      </InfoBox>

      <h2>FAQ — On-Page SEO</h2>

      <h3>Ile razy słowo kluczowe powinno pojawić się w treści?</h3>
      <p>
        Nie ma optymalnej liczby. Pojęcie „gęstości słów kluczowych" pochodzi z przestarzałego
        modelu SEO sprzed algorytmów BERT. Nowoczesny Google ocenia pokrycie tematu,
        nie częstotliwość pojedynczej frazy. Pisz naturalnie, ekspercko, wyczerpująco —
        fraza pojawi się tyle razy, ile wynika z logiki tekstu.
      </p>

      <h3>Jak długa powinna być treść?</h3>
      <p>
        Tak długa, jak wymaga temat — nie dłuższa. Artykuł poradnikowy dla long-tail queries
        może mieć 500 słów i rankować świetnie. Kompleksowy przewodnik po strategii SEO
        potrzebuje 3000–5000 słów. Długość powinna być podyktowana kompletnością odpowiedzi,
        nie celowym „upchaniem" treści dla liczby.
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
                "name": "Czym jest on-page SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On-page SEO to optymalizacja elementów na stronie — treści, nagłówków, meta tagów, URL, internal linkingu i szybkości. Jest w pełni pod kontrolą właściciela strony i stanowi fundament każdej strategii SEO."
                }
              },
              {
                "@type": "Question",
                "name": "Ile razy słowo kluczowe powinno pojawić się w treści?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie ma optymalnej liczby. Nowoczesny Google ocenia pokrycie tematu, nie gęstość fraz. Pisz naturalnie i wyczerpująco — fraza pojawi się tyle razy, ile wynika z logiki tekstu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
