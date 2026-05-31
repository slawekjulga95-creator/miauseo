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
export default function KeywordDensity() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Keyword Density?</h2>
      <p>
        <strong>Keyword Density</strong> (zagęszczenie słów kluczowych) to odsetek, jaki dane słowo kluczowe
        lub fraza stanowi w stosunku do całkowitej liczby słów na stronie.
        Formuła: KD = (liczba wystąpień słowa kluczowego / łączna liczba słów) × 100%.
        Jeśli artykuł ma 1000 słów i fraza „pozycjonowanie" pojawia się 15 razy, keyword density wynosi 1,5%.
      </p>
      <p>
        Pojęcie keyword density wywodzi się z wczesnej ery SEO (lata 90. i 2000.), gdy algorytmy Google
        w dużej mierze opierały się na dosłownym dopasowaniu fraz. Im więcej razy słowo kluczowe
        pojawiło się na stronie, tym wyżej rankować. To doprowadziło do masowego zjawiska
        <Link href="/keyword-stuffing"> keyword stuffing</Link> — nienaturalnego upychania fraz
        w treści. Google odpowiedział algorytmem <Link href="/panda">Panda</Link> (2011),
        który skutecznie zdeprecjonował strony z mechanicznym zagęszczeniem fraz.
      </p>

      <h2>Czy optymalna keyword density istnieje?</h2>
      <p>
        Branżowi eksperci SEO przez lata twierdzili, że optymalne KD to 1–2% lub 1–3%.
        Ta liczba nie ma żadnego empirycznego uzasadnienia — Google nigdy nie potwierdziło istnienia
        „optymalnej" wartości keyword density. John Mueller z Google wielokrotnie mówił wprost:
        Google nie używa keyword density jako czynnika rankingowego. Algorytm ocenia semantykę,
        kontekst i relevantność — nie procenty.
      </p>
      <p>
        W praktyce: zbyt niskie zagęszczenie może oznaczać, że artykuł słabo pokrywa temat —
        co obniża relevantność dla danej frazy. Zbyt wysokie oznacza nienaturalność i ryzyko
        <Link href="/keyword-stuffing"> keyword stuffing</Link>. Złoty środek leży w naturalnym,
        płynnym użyciu języka — pisz dla ludzi, używaj synonimów i fraz powiązanych semantycznie
        (<Link href="/lsi">LSI</Link>), a właściwe KD pojawi się samo.
      </p>

      <h2>Co ważniejsze od keyword density?</h2>
      <p>
        <strong>Pokrycie tematu</strong> — czy artykuł odpowiada wyczerpująco na zapytanie użytkownika?
        Czy zawiera informacje, których szuka osoba wpisująca daną frazę?
        <strong>Semantyczna różnorodność</strong> — użycie synonimów, pokrewnych terminów i fraz LSI
        sygnalizuje Google głębię tematyczną. Artykuł o „pozycjonowaniu" używający też terminów
        „SEO", „optymalizacja", „widoczność organiczna", „ranking" jest semantycznie bogatszy
        niż artykuł mechanicznie powtarzający jedną frazę.
        <strong>Pozycja frazy w kluczowych miejscach</strong> — H1, pierwsze zdanie, przynajmniej jeden H2
        i meta title. To ma znaczenie. Sama liczba powtórzeń w treści — nie.
      </p>

      <InfoBox>
        <strong>Narzędzia do analizy KD:</strong> Narzędzia jak Surfer SEO, Clearscope czy Semrush Content Template analizują top 10 dla danej frazy i sugerują terminy semantyczne do użycia — to znacznie bardziej wartościowe niż śledzenie prostego KD. Twórz treść bogatą semantycznie, nie treść z wymuszoną gęstością jednej frazy.
      </InfoBox>

      <h2>FAQ — Keyword Density</h2>
      <h3>Jaka keyword density jest optymalna?</h3>
      <p>
        Google nie używa keyword density jako czynnika rankingowego i nie istnieje empirycznie udowodniona
        optymalna wartość. Pisz naturalnie, używaj synominów i powiązanych terminów. Jeśli czujesz
        że fraza jest nadużywana — prawdopodobnie jest. Jeśli tekst brzmi naturalnie dla ludzkiego czytelnika —
        keyword density jest prawdopodobnie w porządku.
      </p>
      <h3>Czy narzędzia mierzące KD mają sens?</h3>
      <p>
        Jako punkt odniesienia — tak, jeśli traktujesz je jako wskazówkę, nie wyrocznię.
        Jeśli narzędzie sugeruje, że Twoja fraza pojawia się „za rzadko" w porównaniu do konkurentów,
        może to sygnalizować, że artykuł za słabo pokrywa temat — nie że powinieneś mechanicznie
        dodać więcej powtórzeń tej samej frazy.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest keyword density?", "acceptedAnswer": { "@type": "Answer", "text": "Keyword density to odsetek słowa kluczowego w stosunku do całości tekstu. Google nie używa KD jako czynnika rankingowego. Ważniejsze jest semantyczne pokrycie tematu i naturalność języka niż procent powtórzeń konkretnej frazy." } }] }) }} />
    </div>
  );
}
