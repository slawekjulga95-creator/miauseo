import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function FeaturedSnippet() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Featured Snippet?</h2>
      <p>
        <strong>Featured Snippet</strong> (wyróżniony fragment, pozycja zero) to specjalny blok informacyjny
        wyświetlany na samej górze <Link href="/serp">wyników wyszukiwania Google</Link> — ponad płatnymi
        reklamami i organicznymi wynikami. Google wyodrębnia fragment treści z jednej ze stron rankujących
        i wyświetla bezpośrednio w SERP, odpowiadając na pytanie użytkownika bez konieczności klikania.
        Do snippet dołączony jest link i tytuł strony, z której pochodzi wyróżniony fragment.
      </p>
      <p>
        Termin „pozycja zero" pochodzi stąd, że snippet wyświetla się <em>przed</em> pierwszym wynikiem
        organicznym — ale nie jest to pozycja płatna. Google wybiera go algorytmicznie na podstawie
        trafności treści do konkretnego zapytania. Nie można kupić Featured Snippet — można go tylko zasłużyć.
      </p>

      <h2>Rodzaje Featured Snippetów</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wygląd</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typowe zapytania</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Paragraf</td>
              <td className="p-4 text-zinc-600">Blok tekstu 40–60 słów z odpowiedzią na pytanie</td>
              <td className="p-4 text-zinc-600">„Czym jest X?", „Jak działa X?", „Co to X?"</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Lista numerowana</td>
              <td className="p-4 text-zinc-600">Ponumerowane kroki lub pozycje (rozwijane do ~5)</td>
              <td className="p-4 text-zinc-600">„Jak zrobić X?", „Kroki do X", „Sposoby na X"</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Lista punktowana</td>
              <td className="p-4 text-zinc-600">Nieuporządkowana lista elementów</td>
              <td className="p-4 text-zinc-600">„Rodzaje X", „Przykłady X", „Zalety X"</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Tabela</td>
              <td className="p-4 text-zinc-600">Dane w formacie tabelarycznym bezpośrednio w SERP</td>
              <td className="p-4 text-zinc-600">„Porównanie X vs Y", ceny, harmonogramy</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Wideo</td>
              <td className="p-4 text-zinc-600">Klip YouTube z timestampem do kluczowego momentu</td>
              <td className="p-4 text-zinc-600">Instrukcje, poradniki krok po kroku</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Featured Snippet a CTR — paradoks pozycji zero</h2>
      <p>
        Featured Snippet ma paradoksalną naturę — nie zawsze przekłada się na wyższy
        <Link href="/ctr"> CTR</Link>. Wszystko zależy od rodzaju zapytania i kompletności odpowiedzi w snippecie.
      </p>
      <p>
        Dla prostych zapytań informacyjnych (definicje, przeliczniki, daty, szybkie fakty)
        snippet może <strong>obniżyć CTR</strong> — użytkownik dostaje odpowiedź bez klikania
        (tzw. zero-click search). Badania Semrush i SparkToro pokazują, że dla takich zapytań
        snippet może odbierać 20–30% kliknięć z organiki.
        Dla złożonych pytań (jak coś zrobić krok po kroku, jak wybrać produkt, co oznacza X w kontekście Y)
        snippet <strong>zwiększa CTR</strong> — bo odpowiedź w SERP jest wystarczająco satysfakcjonująca
        żeby zainteresować, ale nie wystarczająca żeby zamknąć temat. Użytkownik klika po więcej.
      </p>

      <InfoBox>
        <strong>Bycie w snippecie vs poza nim:</strong> W 2020 roku Google zmieniło zasadę — strona ze snippetem nie pojawia się dodatkowo na normalnej pozycji organicznej (de-duplikacja). Jeśli strona wyświetla się jako snippet, zajmuje tylko tę jedną pozycję. Dlatego warto rozważyć, czy dany snippet jest korzystny dla Twojego modelu biznesowego — jeśli zapytanie generuje zero-click searche, można użyć tagu nosnippet żeby wymusić normalne wyświetlenie na pozycji organicznej.
      </InfoBox>

      <h2>Jak zdobyć Featured Snippet?</h2>
      <p>
        <strong>Odpowiadaj bezpośrednio i zwięźle zaraz po nagłówku</strong> — Google najczęściej
        wybiera fragmenty, które bezpośrednio odpowiadają na pytanie zawarte w zapytaniu.
        Jeśli H2 to „Czym jest Conversion Rate?", następny akapit powinien zaczynać się od zwięzłej,
        kompletnej definicji — nie od ogólnego wprowadzenia. Długość optymalną dla snippetu paragrafowego
        to 40–60 słów.
      </p>
      <p>
        <strong>Używaj formatów pasujących do zapytania</strong> — pytania „jak zrobić" wymagają
        struktury krokowej (nagłówki H3 z numerami lub lista uporządkowana).
        Pytania „rodzaje" wymagają list. Pytania „co jest lepsze" mogą przyciągać snippety tabelaryczne.
        Struktura Twojej treści powinna odzwierciedlać oczekiwany format snippetu.
      </p>
      <p>
        <strong>Targetuj frazy, na które już rankujesz w top 10</strong> — Google wybiera snippety
        ze stron, które już się wyświetlają dla danej frazy. Frazy, na których ranking masz,
        ale nie masz snippetu, to priorytet do optymalizacji. Sprawdź w
        <Link href="/google-search-console"> Google Search Console</Link>, dla jakich zapytań
        jesteś w top 10 bez snippetu — i zoptymalizuj treść pod snippet.
      </p>
      <p>
        <strong>Wdróż dane strukturalne</strong> — <Link href="/schema-markup">Schema Markup</Link>
        (szczególnie FAQ Schema, HowTo Schema, Article Schema) dostarcza Google dodatkowego kontekstu
        i zwiększa szansę na wyróżnienie treści. FAQ Schema generuje People Also Ask boxy,
        które są bliskim kuzynem Featured Snippetów.
      </p>

      <h2>FAQ — Featured Snippet</h2>

      <h3>Czy mogę poprosić Google o Featured Snippet?</h3>
      <p>
        Nie — Google nie przyjmuje zgłoszeń ani próśb o snippet. Algorytm wybiera fragmenty automatycznie
        na podstawie trafności i struktury treści. Możesz tylko optymalizować treść tak, żeby Google
        uznał ją za najlepszą odpowiedź na dane zapytanie.
      </p>

      <h3>Czy Featured Snippet poprawia ranking strony?</h3>
      <p>
        Nie bezpośrednio — snippet jest efektem rankowania, a nie jego przyczyną.
        Strona musi już być w top 10 (najczęściej top 5) dla danego zapytania, żeby Google
        rozważył ją jako kandydata do snippetu. Snippet nie winduje strony w rankingu —
        jest nagrodą za trafność i strukturę treści już rankującej wysoko.
      </p>

      <h3>Jak usunąć Featured Snippet ze swojej strony?</h3>
      <p>
        Możesz zrezygnować ze snippetu dodając meta tag <code>&lt;meta name="googlebot" content="nosnippet"&gt;</code>
        lub bardziej precyzyjne <code>data-nosnippet</code> na konkretnym elemencie.
        Google nie będzie wtedy wyświetlał Twojej treści jako snippetu — ale strona nadal może
        rankować organicznie pod snippetem innej strony.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest Featured Snippet?",
            "acceptedAnswer": { "@type": "Answer", "text": "Featured Snippet to blok informacyjny na górze wyników Google (pozycja zero) wyświetlający fragment treści ze strony bezpośrednio w SERP. Odpowiada na pytanie użytkownika bez konieczności klikania. Google wybiera go algorytmicznie — nie można go kupić." } },
          { "@type": "Question", "name": "Jak zdobyć Featured Snippet?",
            "acceptedAnswer": { "@type": "Answer", "text": "Odpowiadaj bezpośrednio i zwięźle (40–60 słów) zaraz po nagłówku pytającym. Używaj formatów pasujących do zapytania (lista dla 'jak', tabela dla porównań). Targetuj frazy, na które jesteś już w top 10." } },
          { "@type": "Question", "name": "Czy Featured Snippet zawsze zwiększa CTR?",
            "acceptedAnswer": { "@type": "Answer", "text": "Nie — dla prostych zapytań (definicje, daty, przeliczniki) snippet może obniżyć CTR bo użytkownik dostaje odpowiedź bez klikania (zero-click). Dla złożonych pytań snippet zwiększa CTR bo budzi zainteresowanie głębszą treścią." } }
        ]
      }) }} />
    </div>
  );
}
