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

export default function RichSnippet() {
  return (
    <div className="prose-blog">
      <h2>Czym jest rich snippet?</h2>
      <p>
        <strong>Rich snippet</strong> (rozszerzony wynik wyszukiwania) to wzbogacony wynik
        w <Link href="/serp">SERP</Link> zawierający dodatkowe informacje poza
        standardowym tytułem, URL i opisem — gwiazdki ocen, cenę produktu, czas trwania
        przepisu, daty wydarzeń, odpowiedzi FAQ. Dane te są generowane na podstawie
        <Link href="/structured-data"> danych strukturalnych</Link> (Schema.org)
        zakodowanych w HTML strony.
      </p>
      <p>
        Rich snippety nie poprawiają bezpośrednio pozycji w wynikach wyszukiwania,
        ale znacząco zwiększają <Link href="/ctr">CTR</Link> — wynik z gwiazdkami
        i ceną jest bardziej atrakcyjny wizualnie i dostarcza informacji,
        które skłaniają do kliknięcia. Badania pokazują, że rich snippety
        mogą podnosić CTR o 20–30% względem zwykłych wyników.
      </p>

      <h2>Typy rich snippetów obsługiwanych przez Google</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co wyświetla</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Schema.org typ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Oceny (Reviews)</td><td className="p-4 text-zinc-600">Gwiazdki 1–5, liczba opinii</td><td className="p-4 text-zinc-600">AggregateRating, Review</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Produkt</td><td className="p-4 text-zinc-600">Cena, dostępność, oceny</td><td className="p-4 text-zinc-600">Product, Offer</td></tr>
            <tr><td className="p-4 font-semibold text-ink">FAQ</td><td className="p-4 text-zinc-600">Rozwijane pytania i odpowiedzi pod wynikiem</td><td className="p-4 text-zinc-600">FAQPage, Question, Answer</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Przepis</td><td className="p-4 text-zinc-600">Czas przygotowania, kalorie, oceny</td><td className="p-4 text-zinc-600">Recipe</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Artykuł</td><td className="p-4 text-zinc-600">Autor, data publikacji</td><td className="p-4 text-zinc-600">Article, NewsArticle</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Wydarzenie</td><td className="p-4 text-zinc-600">Data, miejsce, cena biletów</td><td className="p-4 text-zinc-600">Event</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Firma lokalna</td><td className="p-4 text-zinc-600">Adres, godziny, oceny</td><td className="p-4 text-zinc-600">LocalBusiness</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak wdrożyć rich snippety?</h2>
      <p>
        Dane strukturalne implementuje się w formacie <Link href="/json-ld">JSON-LD</Link>
        umieszczanym w tagu <code>&lt;script type="application/ld+json"&gt;</code>
        w sekcji <code>&lt;head&gt;</code> lub <code>&lt;body&gt;</code> strony.
        JSON-LD jest formatem rekomendowanym przez Google — nie ingeruje w HTML
        i jest łatwy do zarządzania.
      </p>
      <p>
        Po wdrożeniu testuj poprawność narzędziem Google Rich Results Test
        (search.google.com/test/rich-results) lub Structured Data Testing Tool.
        Błędy w składni lub brakujące wymagane pola powodują, że Google nie wyświetla
        rozszerzonego snippetu.
      </p>

      <InfoBox>
        <strong>Dane strukturalne ≠ gwarancja rich snippetu:</strong> Poprawna implementacja
        Schema.org jest warunkiem koniecznym, ale nie wystarczającym. Google decyduje,
        czy wyświetlić rich snippet, na podstawie trafności danych dla zapytania,
        wiarygodności strony i aktualności informacji. Rich snippet może pojawić się
        dla jednych zapytań i nie dla innych na tej samej stronie.
      </InfoBox>

      <h2>FAQ — Rich Snippet</h2>

      <h3>Jak długo czeka się na pojawienie się rich snippetu?</h3>
      <p>
        Po poprawnym wdrożeniu i zaindeksowaniu przez Googlebot rich snippet pojawia się
        zazwyczaj w ciągu kilku dni do kilku tygodni. Czas zależy od częstotliwości
        crawlowania Twojej domeny. Monitoruj status w Google Search Console
        → Ulepszenia → dany typ (np. FAQ, Produkty) — zobaczysz liczbę
        poprawnie zaindeksowanych elementów.
      </p>

      <h3>Czy rich snippety ze spamowymi ocenami są karane?</h3>
      <p>
        Tak — Google ma wytyczne dotyczące recenzji i ocen. Fałszywe gwiazdki,
        samodzielnie wystawione oceny, opinie napisane przez właściciela lub
        opinie niezwiązane z faktyczną weryfikacją zakupu naruszają politykę.
        Google może usunąć rich snippet ze strony lub nałożyć ręczną akcję
        za niezgodne z wytycznymi oznaczenia.
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
                "name": "Czym jest rich snippet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rich snippet to wzbogacony wynik wyszukiwania ze szczegółowymi danymi (gwiazdki, ceny, FAQ, daty) generowanymi przez dane strukturalne Schema.org. Nie wpływa bezpośrednio na ranking, ale zwiększa CTR o 20–30%."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
