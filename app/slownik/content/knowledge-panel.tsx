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
export default function KnowledgePanel() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Knowledge Panel?</h2>
      <p>
        <strong>Knowledge Panel</strong> (Panel Wiedzy) to karta informacyjna wyświetlana po prawej stronie
        wyników Google (na desktop) lub na górze wyników (na mobile) gdy wyszukujesz markę, osobę,
        organizację, miejsce lub pojęcie rozpoznawane przez <Link href="/knowledge-graph">Knowledge Graph</Link>.
        Zawiera kluczowe fakty, zdjęcia, linki do oficjalnych stron i mediów społecznościowych —
        kompilowane przez Google ze źródeł publicznych i danych strukturalnych.
      </p>
      <p>
        Knowledge Panel pojawia się automatycznie, gdy Google ma wystarczającą pewność co do tożsamości
        wyszukiwanej encji. Dla dużych marek i osób publicznych — pojawia się niemal zawsze.
        Dla małych firm i mniej znanych podmiotów — dopiero gdy Google zebrało wystarczająco wiele
        spójnych sygnałów potwierdzających ich istnienie i tożsamość.
      </p>

      <h2>Co zawiera Knowledge Panel?</h2>
      <p>
        Zawartość panelu zależy od typu encji, ale standardowe elementy to: nazwa i zdjęcie profilowe,
        krótki opis (zazwyczaj z Wikipedii lub Wikidata), linki do oficjalnej strony i mediów społecznościowych,
        dane kontaktowe (dla firm — adres, telefon, godziny otwarcia z <Link href="/google-business-profile">Google Business Profile</Link>),
        ocena i liczba opinii, powiązane encje (np. założyciel firmy, podobne organizacje),
        a dla marek — produkty, filmy, muzyka lub inne treści powiązane z marką.
      </p>

      <h2>Jak uzyskać lub poprawić Knowledge Panel?</h2>
      <p>
        Nie ma bezpośredniego formularza żądania Knowledge Panel — Google tworzy go autonomicznie.
        Ale można zwiększyć szansę i poprawić jakość przez kilka działań.
      </p>
      <p>
        <strong>Wikipedia i Wikidata</strong> — artykuł na Wikipedii to najsilniejszy sygnał dla Knowledge Panel.
        Wymaga spełnienia kryterium wyróżnialności (notability) — istnienie weryfikowalnych,
        niezależnych źródeł potwierdzających znaczenie danego podmiotu.
      </p>
      <p>
        <strong>Schema Markup na stronie</strong> — wdróż <Link href="/schema-markup">dane strukturalne</Link>
        Organization, Person lub LocalBusiness z pełnymi atrybutami: nazwa, URL, logo, dane kontaktowe,
        media społecznościowe. Google używa tych danych jako wiarygodnego źródła faktów o Twojej encji.
      </p>
      <p>
        <strong>Spójność danych NAP</strong> — <Link href="/nap">Name, Address, Phone</Link> identyczne
        we wszystkich miejscach w sieci. Rozbieżności w danych obniżają zaufanie Google do poprawności informacji.
      </p>
      <p>
        <strong>Roszczenie do panelu</strong> — jeśli Knowledge Panel już istnieje, możesz go zweryfikować
        jako właściciel przez Google. Kliknij „Roszczenie do panelu wiedzy" (jeśli opcja jest dostępna)
        i zweryfikuj tożsamość. Po weryfikacji możesz proponować korekty informacji.
      </p>

      <InfoBox>
        <strong>Knowledge Panel a brand SEO:</strong> Obecność Knowledge Panel przy wyszukiwaniu nazwy marki to silny sygnał autorytetu i profesjonalizmu. Użytkownicy szukający Twojej marki widzą zorganizowaną, bogatą kartę informacyjną zamiast gołych wyników. To element budowania zaufania — szczególnie przy pierwszym kontakcie potencjalnego klienta z marką przez wyszukiwarkę.
      </InfoBox>

      <h2>FAQ — Knowledge Panel</h2>
      <h3>Czy mogę usunąć błędne informacje z Knowledge Panel?</h3>
      <p>
        Jeśli masz zweryfikowany Knowledge Panel (jako właściciel encji) — możesz zgłaszać korekty.
        Dla niezweryfikowanych paneli: skorzystaj z opcji „Prześlij opinię" / „Zaproponuj zmianę"
        widocznej w panelu. Google rozpatruje zgłoszenia, ale nie gwarantuje wprowadzenia zmian —
        szczególnie gdy dane są spójne z Wikipedia lub Wikidata.
      </p>
      <h3>Jak długo trwa pojawienie się Knowledge Panel dla nowej marki?</h3>
      <p>
        Nie ma stałego harmonogramu. Dla małych marek bez artykułu na Wikipedii proces może trwać
        miesiące lub lata — zależy od liczby i jakości sygnałów zebranych przez Google.
        Przyspieszasz przez: aktywny GBP z opiniami, obecność w mediach branżowych, dane strukturalne
        na stronie i spójne NAP w katalogach.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Knowledge Panel?", "acceptedAnswer": { "@type": "Answer", "text": "Knowledge Panel to karta informacyjna po prawej stronie wyników Google zawierająca fakty o marce, osobie lub miejscu. Zasila go Knowledge Graph Google — tworzony automatycznie ze źródeł publicznych i danych strukturalnych." } }] }) }} />
    </div>
  );
}
