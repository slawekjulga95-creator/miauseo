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

export default function LinkJuice() {
  return (
    <div className="prose-blog">
      <h2>Czym jest link juice?</h2>
      <p>
        <strong>Link juice</strong> (wartość linkowa, autorytet linka) to nieformalne określenie
        autorytetu i wartości rankingowej przekazywanej przez hiperłącze z jednej strony do drugiej.
        Pojęcie wywodzi się bezpośrednio z koncepcji <Link href="/pagerank">PageRank</Link> —
        oryginalnego algorytmu Google, który oceniał stronę na podstawie liczby i jakości
        prowadzących do niej linków. Gdy strona o wysokim autorytecie linkuje do Twojej witryny,
        przekazuje część swojej wartości — właśnie ten transfer potocznie nazywany jest link juice.
      </p>
      <p>
        Link juice nie jest wartością stałą. Strona dysponuje określoną pulą autorytetu
        i rozdziela go między wszystkie linki wychodzące. Im więcej linków na danej stronie,
        tym mniej wartości przypada na każdy z nich — to tzw. dilution (rozmycie) link juice.
      </p>

      <h2>Co wpływa na ilość przekazywanego link juice?</h2>
      <p>
        <strong>Autorytet domeny linkującej</strong> — link z portalu o wysokim{" "}
        <Link href="/domain-authority">Domain Authority</Link> przekazuje więcej wartości niż link
        z nieznanego bloga. To podstawowa zasada: źródło musi być wiarygodne, by transfer był wartościowy.
      </p>
      <p>
        <strong>Atrybut rel (dofollow vs nofollow)</strong> — linki{" "}
        <Link href="/dofollow">dofollow</Link> przekazują link juice w pełni.
        Linki <Link href="/nofollow">nofollow</Link> formalnie nie przekazują wartości rankingowej,
        choć Google traktuje nofollow jako wskazówkę, a nie absolutną regułę.
      </p>
      <p>
        <strong>Liczba linków na stronie linkującej</strong> — jeśli strona zawiera 100 linków wychodzących,
        link juice jest dzielony na 100 części. Strona z 5 linkami przekaże każdemu znacznie więcej.
      </p>
      <p>
        <strong>Pozycja linka w treści</strong> — link w środku artykułu redakcyjnego (editorial link)
        przekazuje więcej autorytetu niż link w stopce lub sidebarze. Google interpretuje umiejscowienie
        jako sygnał intencji autora.
      </p>
      <p>
        <strong>Trafność tematyczna</strong> — link z tematycznie powiązanej domeny jest silniejszy semantycznie;
        algorytmy rozumieją, że rekomendacja od branżowego eksperta ma więcej wagi niż od niezwiązanej strony.
      </p>

      <h2>Link juice w internal linkingu</h2>
      <p>
        Zarządzanie przepływem link juice przez{" "}
        <Link href="/internal-linking">linkowanie wewnętrzne</Link> to jedna z najskuteczniejszych
        technik on-page SEO. Strony, które zbierają dużo backlinków (np. strona główna, popularny artykuł),
        stają się naturalnym źródłem autorytetu. Linkując z nich do stron priorytetowych — ofertowych,
        kategorialnych, docelowych konwersji — przekazujesz im zgromadzony link juice i podbijasz ich pozycje.
      </p>

      <InfoBox>
        <strong>Nie blokuj przepływu bez powodu:</strong> Używanie <code>nofollow</code> na linkach
        wewnętrznych (dawna technika „PageRank sculpting") nie zwiększa wartości pozostałych stron —
        zablokowany link juice jest po prostu tracony, nie redystrybuowany. Google sam alokuje wartość
        na podstawie architektury strony; lepiej skupić się na budowaniu logicznej struktury
        niż na ręcznym sterowaniu przepływem.
      </InfoBox>

      <h2>FAQ — Link Juice</h2>

      <h3>Czy link juice można stracić?</h3>
      <p>
        Tak. Kiedy strona linkująca do Ciebie znika, zmienia URL bez przekierowania lub usuwa link —
        tracisz przekazywany autorytet. Dlatego regularne monitorowanie profilu backlinków
        (przez <Link href="/google-search-console">Google Search Console</Link> lub Ahrefs)
        pozwala wychwycić utratę wartościowych linków i reagować — np. prośbą o przywrócenie
        lub aktualizację linka.
      </p>

      <h3>Czy link juice przekazywany jest przez przekierowania 301?</h3>
      <p>
        Tak — przekierowanie 301 (permanentne) przekazuje zdecydowaną większość wartości linkowej
        do nowego adresu. Przez lata Google informował, że dochodzi do niewielkiej utraty autorytetu
        przy przekierowaniach, jednak nowsze komunikaty sugerują, że różnica jest minimalna.
        Przekierowania 302 (tymczasowe) formalnie nie przekazują link juice.
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
                "name": "Czym jest link juice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Link juice to autorytet i wartość rankingowa przekazywana przez hiperłącze z jednej strony do drugiej. Wywodzi się z koncepcji PageRank. Na jego ilość wpływa autorytet domeny linkującej, atrybut rel, liczba linków na stronie i pozycja linka w treści."
                }
              },
              {
                "@type": "Question",
                "name": "Czy link juice przekazywany jest przez przekierowania 301?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak — przekierowanie 301 przekazuje zdecydowaną większość wartości linkowej do nowego adresu. Przekierowania 302 (tymczasowe) formalnie nie przekazują link juice."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
