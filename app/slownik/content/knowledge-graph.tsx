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
export default function KnowledgeGraph() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Knowledge Graph?</h2>
      <p>
        <strong>Knowledge Graph</strong> (Graf Wiedzy) to ogromna baza wiedzy Google, zbudowana
        z encji (entities) — osób, miejsc, organizacji, produktów, pojęć — i relacji między nimi.
        Zamiast traktować zapytanie jako ciąg słów, Knowledge Graph pozwala Google rozumieć
        <em>co</em> i <em>kogo</em> szuka użytkownik. Wpisując „Einstein", Google wie że to człowiek,
        fizyk, urodzony w Ulm, autor teorii względności, laureat Nobla — i może odpowiedzieć na pytanie
        semantycznie, a nie tylko tekstowo.
      </p>
      <p>
        Google ogłosiło Knowledge Graph w maju 2012 roku, z bazą około 500 milionów obiektów
        i 3,5 miliarda faktów. Dziś skala jest wielokrotnie większa. Knowledge Graph zasila
        wiele widocznych elementów <Link href="/serp">SERP</Link>: <Link href="/knowledge-panel">Knowledge Panels</Link>
        (karty po prawej stronie), odpowiedzi bezpośrednie w <Link href="/featured-snippet">Featured Snippets</Link>,
        sekcje „Ludzie pytają też" (People Also Ask), oraz karuzele encji.
      </p>

      <h2>Jak Google buduje Knowledge Graph?</h2>
      <p>
        Knowledge Graph budowany jest z wielu źródeł jednocześnie. <strong>Wikipedia i Wikidata</strong> —
        podstawowe źródło faktów o osobach, miejscach i pojęciach. <strong>Dane strukturalne (Schema.org)</strong>
        — webmasterzy dodający <Link href="/schema-markup">Schema Markup</Link> do swoich stron
        informują Google o encjach i ich atrybutach. <strong>Crawlowanie sieci</strong> — Google wyciąga
        relacje między encjami z miliardów stron, identyfikując wzorce (np. „X pracuje w Y").
        <strong>Google Business Profile</strong> — dane firm zasilają Knowledge Graph dla encji lokalnych.
        <strong>Bazy danych partnerów</strong> — IMDb dla filmów, Freebase (przed zamknięciem), dane rządowe.
      </p>

      <h2>Jak Knowledge Graph wpływa na wyszukiwanie?</h2>
      <p>
        <strong>Odpowiedzi bezpośrednie</strong> — zamiast listy linków, Google wyświetla odpowiedź
        bezpośrednio w SERP. „Ile lat ma Obama?" → odpowiedź bez klikania. To tzw. zero-click search —
        użytkownik dostaje informację nie odwiedzając żadnej strony.
        <strong>Rozumienie kontekstu</strong> — Google rozumie, że „Apple" może oznaczać firmę, owoc
        lub wytwórnię muzyczną — i na podstawie kontekstu zapytania i historii użytkownika wybiera
        właściwą interpretację. Knowledge Graph to fundament tego rozumowania.
        <strong>Powiązane wyszukiwania</strong> — „Filmy z Leonardo DiCaprio" generuje karuzelę filmów
        powiązaną z encją aktora w Knowledge Graph, nie zwykłe wyniki tekstowe.
      </p>

      <InfoBox>
        <strong>Jak trafić do Knowledge Graph?</strong> Dla marek i osób publicznych: utwórz stronę na Wikipedii (wymaga weryfikowalnych źródeł), wdróż <Link href="/schema-markup">Schema Markup</Link> Organization lub Person na swojej stronie, zadbaj o spójne informacje w Wikidata, oficjalnych katalogach i mediach. Dla lokalnych firm: kompletny i zweryfikowany <Link href="/google-business-profile">Google Business Profile</Link> to droga do encji lokalnej w Knowledge Graph.
      </InfoBox>

      <h2>FAQ — Knowledge Graph</h2>
      <h3>Czy muszę być na Wikipedii żeby trafić do Knowledge Graph?</h3>
      <p>
        Wikipedia jest najsilniejszym sygnałem, ale nie jedynym. Google buduje Knowledge Graph
        ze wszystkich dostępnych źródeł — dane strukturalne na stronie, Profile GBP, cytowania w mediach,
        Wikidata, LinkedIn. Marka bez Wikipedii może trafić do Knowledge Graph jeśli ma wystarczająco
        wiele spójnych sygnałów z wiarygodnych źródeł.
      </p>
      <h3>Jak Knowledge Graph różni się od Featured Snippet?</h3>
      <p>
        Knowledge Graph to baza danych encji i faktów — zasób wewnętrzny Google.
        <Link href="/featured-snippet"> Featured Snippet</Link> to fragment treści wyciągnięty z konkretnej
        strony zewnętrznej i wyświetlony w SERP. Knowledge Panel (widoczny element na stronie wyników)
        jest zasilany przez Knowledge Graph. Featured Snippet jest zasilany przez treść zewnętrznych stron.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Knowledge Graph?", "acceptedAnswer": { "@type": "Answer", "text": "Knowledge Graph to baza wiedzy Google zawierająca encje (osoby, miejsca, marki) i ich relacje. Zasila Knowledge Panels, odpowiedzi bezpośrednie i karuzele w SERP. Pozwala Google rozumieć semantykę zapytań." } }] }) }} />
    </div>
  );
}
