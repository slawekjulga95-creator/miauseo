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

export default function ThinContent() {
  return (
    <div className="prose-blog">
      <h2>Czym jest thin content?</h2>
      <p>
        <strong>Thin content</strong> (cienka treść) to strona z minimalną ilością
        wartościowego tekstu, niska jakością lub treścią zduplikowaną — która nie dostarcza
        użytkownikowi realnej wartości i nie odpowiada wyczerpująco na intencję zapytania.
        Termin pochodzi od Google, który po raz pierwszy użył go przy opisie algorytmu
        <Link href="/panda"> Panda</Link> w 2011 roku. Strony z thin content są penalizowane
        obniżeniem pozycji lub wykluczeniem z indeksu.
      </p>
      <p>
        Thin content to jeden z najczęstszych powodów słabej widoczności organicznej —
        szczególnie w e-commerce (tysiące kart produktów z identycznym lub skopiowanym
        opisem producenta) i serwisach blogowych (krótkie posty bez merytorycznej wartości).
      </p>

      <h2>Typy thin content</h2>
      <p>
        <strong>Automatycznie generowane treści</strong> — strony tworzone masowo przez algorytmy
        lub szablony bez redakcji i unikalności. W erze AI: nieweryfikowane treści LLM
        bez autorskiego wkładu eksperckiego.
      </p>
      <p>
        <strong>Strony z zerową lub minimalną treścią</strong> — puste strony kategorii,
        strony tagów bez opisów, archiwa datowe, strony wyników wyszukiwania wewnętrznego
        indeksowane przez Google.
      </p>
      <p>
        <strong>Duplicate content</strong> — treść skopiowana z innej strony bez dodatkowej wartości.
        W e-commerce: identyczny opis producenta na 50 kartach produktów różniących się kolorem.
      </p>
      <p>
        <strong>Treści doorway (bramkowe)</strong> — strony tworzone wyłącznie pod specyficzne frazy,
        bez wartości dla użytkownika, służące jako „brama" do przekierowania na inną stronę.
      </p>
      <p>
        <strong>Treści afiliacyjne bez wartości dodanej</strong> — strony porównujące produkty,
        które są jedynie skopiowanymi specyfikacjami producenta z linkami afiliacyjnymi,
        bez własnego testu, recenzji ani doświadczenia.
      </p>

      <h2>Jak naprawiać thin content?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ thin content</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Karty produktów z opisem producenta</td><td className="p-4 text-zinc-600">Unikalne opisy pisane od zera lub noindex + canonical do nadrzędnej kategorii</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Puste strony kategorii</td><td className="p-4 text-zinc-600">Dodaj unikalne intro (min. 200–300 słów) lub noindex</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Strony tagów i archiwa</td><td className="p-4 text-zinc-600">Noindex lub połącz tematyczne tagi w jedną bogatą stronę</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Krótkie artykuły blogowe</td><td className="p-4 text-zinc-600">Rozbuduj i wzbogać lub połącz z podobnymi artykułami (content merge)</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Thin content ≠ krótka treść:</strong> Krótka strona może być wartościowa,
        jeśli precyzyjnie odpowiada na intencję zapytania. 200-słowna definicja terminu SEO
        może rankować lepiej niż 2000-słowny artykuł wypełniony paddingiem.
        Miara thin content to nie liczba słów, lecz wartość dostarczona użytkownikowi
        w stosunku do jego oczekiwań i intencji.
      </InfoBox>

      <h2>FAQ — Thin Content</h2>

      <h3>Ile słów powinna mieć strona, żeby nie była thin content?</h3>
      <p>
        Nie ma minimalnej liczby słów — to mit SEO. Google nie ma progu słów,
        poniżej którego strona jest automatycznie thin content. Liczy się czy treść
        wyczerpująco odpowiada na intencję zapytania. Strona produktu może mieć 150 słów
        i być wartościowa. Artykuł „co to jest" może potrzebować 500–800 słów.
        Kompleksowy przewodnik może mieć 3000 słów i nadal być thin, jeśli jest
        wypełniony powtarzającymi się informacjami bez substancji.
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
                "name": "Czym jest thin content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Thin content to strony z minimalną wartościową treścią, zduplikowane lub automatycznie generowane, penalizowane przez algorytm Panda. Naprawia się je przez unikalizację treści, noindex dla stron bez wartości lub scalanie podobnych artykułów."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
