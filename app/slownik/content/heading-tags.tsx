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
export default function HeadingTags() {
  return (
    <div className="prose-blog">
      <h2>Czym są Heading Tags?</h2>
      <p>
        <strong>Heading Tags</strong> (tagi nagłówków) to elementy HTML od <code>&lt;h1&gt;</code>
        do <code>&lt;h6&gt;</code>, definiujące hierarchię treści na stronie. H1 to główny tytuł —
        najważniejszy nagłówek, opisujący temat całej strony. H2 to nagłówki sekcji głównych,
        H3 to podsekcje H2, H4 to podsekcje H3 i tak dalej. Hierarchia powinna być logiczna i nigdy
        nie pomijać poziomów: po H2 powinno następować H3, nie H4.
      </p>
      <p>
        Dla Google, heading tags to sygnały struktury semantycznej strony — informują algorytm,
        które tematy są główne, które poboczne i jak są ze sobą powiązane. Dla użytkowników nagłówki
        tworzą wizualną mapę treści, ułatwiając skanowanie i znajdowanie interesujących fragmentów.
        Dla technologii asystujących (czytniki ekranu) — umożliwiają nawigację po treści osobom
        niewidomym lub słabowidzącym.
      </p>

      <h2>H1 — najważniejszy nagłówek strony</h2>
      <p>
        Każda strona powinna mieć <strong>dokładnie jeden H1</strong>. To żelazna zasada zarówno SEO,
        jak i dostępności. H1 powinien zawierać główną frazę kluczową strony — w naturalny, czytelny sposób.
        Dla bloga H1 to tytuł artykułu. Dla strony produktowej — nazwa produktu z kategorią.
        Dla strony usługowej — usługa + ewentualna lokalizacja.
        H1 różni się od <Link href="/meta-title">meta title</Link>: meta title to tekst widoczny
        w zakładce przeglądarki i wynikach Google, H1 to nagłówek widoczny na stronie.
        Mogą być (i często powinny być) różne — meta title bywa bardziej rozbudowany marketingowo,
        H1 bardziej bezpośredni.
      </p>

      <h2>H2–H6 — hierarchia sekcji</h2>
      <p>
        H2 to nagłówki głównych sekcji artykułu lub strony. Dobry artykuł SEO ma 3–8 nagłówków H2
        opisujących logicznie powiązane tematy. Każdy H2 powinien być potencjalną odpowiedzią
        na jedno pytanie czytelnika. H3 wchodzi tam, gdzie sekcja H2 wymaga dalszego podziału.
        H4–H6 używane są rzadko — zazwyczaj przy bardzo rozbudowanej dokumentacji technicznej
        lub kompleksowych poradnikach. Unikaj używania H3 tylko dlatego, że chcesz wyróżnić tekst —
        do wyróżnień służy <code>&lt;strong&gt;</code> i klasy CSS, nie hierarchia nagłówków.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Tag</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Liczba na stronie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Waga SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">H1</td><td className="p-4 text-zinc-600">Główny temat strony</td><td className="p-4 text-zinc-600">Dokładnie 1</td><td className="p-4 text-green-600 font-semibold">Bardzo wysoka</td></tr>
            <tr><td className="p-4 font-semibold text-ink">H2</td><td className="p-4 text-zinc-600">Główne sekcje / podtematy</td><td className="p-4 text-zinc-600">2–8</td><td className="p-4 text-zinc-600">Wysoka</td></tr>
            <tr><td className="p-4 font-semibold text-ink">H3</td><td className="p-4 text-zinc-600">Podsekcje H2</td><td className="p-4 text-zinc-600">Zależnie od treści</td><td className="p-4 text-zinc-600">Średnia</td></tr>
            <tr><td className="p-4 font-semibold text-ink">H4–H6</td><td className="p-4 text-zinc-600">Głęboka hierarchia — rzadko potrzebna</td><td className="p-4 text-zinc-600">Okazjonalnie</td><td className="p-4 text-zinc-600">Niska</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Heading tags a <Link href="/featured-snippet">Featured Snippets</Link>:</strong> Google często używa nagłówków H2 i H3 jako wskazówek do budowania featured snippetów i odpowiedzi w AI Overviews. Jeśli Twój H2 to „Jak zrobić X?", a bezpośrednio po nim następuje zwięzła odpowiedź lub lista kroków — znacząco zwiększa to szansę na pojawienie się jako snippet dla odpowiedniego zapytania.
      </InfoBox>

      <h2>FAQ — Heading Tags</h2>
      <h3>Czy pominięcie poziomu nagłówka szkodzi SEO?</h3>
      <p>
        Pomijanie poziomów (np. przeskakiwanie z H2 do H4) nie jest oficjalnym czynnikiem penalizacyjnym,
        ale sygnalizuje słabą strukturę semantyczną i narusza standardy dostępności (WCAG).
        Google preferuje logiczną hierarchię, bo ułatwia rozumienie treści. Praktycznie: buduj hierarchię
        naturalnie — jeśli nie potrzebujesz H3, nie używaj go tylko żeby nie pomijać poziomu.
      </p>
      <h3>Czy mogę stylować H2 tak żeby wyglądało jak H1?</h3>
      <p>
        Tak — wygląd nagłówka jest kwestią CSS i nie ma znaczenia dla SEO. Możesz mieć H2 stylowane
        identycznie jak H1 — to, co ma znaczenie dla wyszukiwarek i dostępności, to hierarchia HTML,
        nie wizualny rozmiar. Oddzielaj semantykę (HTML) od prezentacji (CSS).
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Ile H1 powinno być na stronie?", "acceptedAnswer": { "@type": "Answer", "text": "Dokładnie jeden H1 na stronie — to żelazna zasada SEO i dostępności. H1 opisuje główny temat strony i powinien zawierać główną frazę kluczową w naturalny sposób." } }] }) }} />
    </div>
  );
}
