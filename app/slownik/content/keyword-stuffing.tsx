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
export default function KeywordStuffing() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Keyword Stuffing?</h2>
      <p>
        <strong>Keyword stuffing</strong> (upychanie słów kluczowych) to <Link href="/black-hat-seo">black hat</Link> technika
        polegająca na nadmiernym, nienaturalnym umieszczaniu słów kluczowych w treści strony,
        meta tagach, atrybutach alt obrazów lub ukrytym tekście — w celu manipulacji rankingiem w Google.
        Zamiast pisać dla człowieka, tekst pisany jest dla algorytmu: fraza kluczowa pojawia się
        tak często i w tak nienaturalny sposób, że czytelność tekstu jest dramatycznie obniżona.
      </p>
      <p>
        Keyword stuffing był powszechną praktyką w erze pierwszych wyszukiwarek (lata 90. i wczesne 2000.),
        gdy algorytmy opierały się silnie na gęstości fraz kluczowych. Google zwalczył tę praktykę
        skutecznie algorytmem <Link href="/panda">Panda</Link> (2011), który bezpośrednio penalizuje
        niskiej jakości treści — w tym te naszpikowane mechanicznie powtarzanymi frazami.
      </p>

      <h2>Przykłady Keyword Stuffing — jak to wygląda?</h2>
      <p>
        <strong>Stuffing w treści tekstowej</strong> — fragment tekstu, który brzmi jak: „Jeśli szukasz
        pozycjonowania Kraków, pozycjonowania stron Kraków, pozycjonowania taniego Kraków lub najlepszego
        pozycjonowania w Krakowie — nasza firma pozycjonowania Kraków jest dla Ciebie."
        Żaden człowiek tak nie pisze — to sygnał alertowy dla Google.
      </p>
      <p>
        <strong>Stuffing w meta tagach</strong> — dawniej popularne upychanie dziesiątek słów kluczowych
        w meta keywords (tagu, który Google ignoruje od 2009 roku) lub w meta title.
        Przykład: <em>title="SEO, pozycjonowanie, optymalizacja, marketing, Google, Kraków, Warszawa, Polska"</em>.
      </p>
      <p>
        <strong>Ukryty tekst</strong> — biały tekst na białym tle, tekst za obrazem, tekst z rozmiarem 0px.
        Czytelnik nie widzi, bot widzi. Klasyczny cloaking połączony ze keyword stuffing.
        Google identyfikuje to jako celowe naruszenie i może nałożyć manualną karę.
      </p>
      <p>
        <strong>Stuffing w alt tekstach</strong> — atrybuty alt wszystkich obrazów wypełnione słowami kluczowymi
        niezwiązanymi z zawartością zdjęcia. Prawidłowy alt opisuje obraz — nie jest listą fraz.
      </p>

      <h2>Konsekwencje Keyword Stuffing</h2>
      <p>
        Algorytm <Link href="/panda">Panda</Link> ocenia jakość treści na poziomie całej domeny.
        Gdy strona ma wzorzec niskiej jakości (nadmierne powtórzenia fraz, cienka treść, słabe UX) —
        filtrem objęta może być cała domena, a nie tylko konkretna podstrona.
        Efekt: dramatyczny, globalny spadek widoczności dla wszystkich fraz.
        W przypadku celowego, masowego keyword stuffing z ukrytym tekstem — możliwa jest manualna kara
        widoczna w sekcji „Działania manualne" w <Link href="/google-search-console">Google Search Console</Link>.
      </p>

      <InfoBox>
        <strong>Test naturalności:</strong> Najprostszy test na keyword stuffing — przeczytaj swój tekst na głos. Jeśli brzmisz jak robot wymieniający frazy zamiast ekspert tłumaczący temat, masz problem. Google coraz lepiej odróżnia treści pisane dla ludzi od pisanych dla algorytmów. E-E-A-T premiuje pierwsze, Panda penalizuje drugie.
      </InfoBox>

      <h2>FAQ — Keyword Stuffing</h2>
      <h3>Jaka liczba powtórzeń słowa kluczowego to już keyword stuffing?</h3>
      <p>
        Nie ma jednej liczby ani progu <Link href="/keyword-density">keyword density</Link>, po przekroczeniu
        której zaczyna się stuffing. Google ocenia naturalność i użyteczność tekstu, nie liczby.
        Fraza powtórzona 5 razy w 200-słowowym artykule to potencjalny stuffing.
        Ta sama fraza powtórzona 5 razy w 2000-słowowym, wyczerpującym poradniku — prawdopodobnie naturalna.
        Pytaj siebie: czy tekst brzmi naturalnie dla czytelnika?
      </p>
      <h3>Czy keyword stuffing w meta keywords szkodzi?</h3>
      <p>
        Nie — Google ignoruje meta keywords od 2009 roku. Inne wyszukiwarki (Bing) mogą je uwzględniać,
        ale ich znaczenie jest minimalne. Keyword stuffing w meta keywords nie pomoże rankingowi
        i nie zaszkodzi bezpośrednio — ale jest sygnałem, że strona używa przestarzałych praktyk SEO,
        co może obniżyć ocenę ogólnej jakości w oczach audytorów.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest keyword stuffing?", "acceptedAnswer": { "@type": "Answer", "text": "Keyword stuffing to nadmierne, nienaturalne upychanie słów kluczowych w treści strony w celu manipulacji rankingiem Google. Penalizowany przez algorytm Panda — może powodować globalny spadek widoczności całej domeny." } }] }) }} />
    </div>
  );
}
