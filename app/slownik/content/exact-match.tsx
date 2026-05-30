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

export default function ExactMatch() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Exact Match?</h2>
      <p>
        <strong>Exact Match</strong> (dopasowanie ścisłe) to typ dopasowania słów kluczowych w kampaniach
        <Link href="/google-ads"> Google Ads</Link>, który ogranicza wyświetlanie reklamy do zapytań
        identycznych lub bardzo zbliżonych znaczeniowo do dodanego słowa kluczowego.
        W kodzie kampanii słowo w Exact Match zapisuje się w nawiasach kwadratowych: <code>[buty do biegania]</code>.
      </p>
      <p>
        Przed aktualizacjami z 2017 i 2021 roku Exact Match działał dosłownie — reklama wyświetlała się
        wyłącznie dla zapytań idealnie pokrywających się z frazą (z uwzględnieniem przestawień wyrazów
        i błędów ortograficznych). Dziś Google rozszerzyło definicję o zapytania „o tym samym znaczeniu" —
        co daje algorytmowi więcej swobody, ale zachowuje znacznie wyższy poziom kontroli niż
        Phrase Match czy <Link href="/broad-match">Broad Match</Link>.
      </p>

      <h2>Jak Exact Match działa dziś — co triggeruje reklamę?</h2>
      <p>
        Google wyświetla reklamę Exact Match dla zapytań spełniających jednen z poniższych warunków:
        zapytanie identyczne z frazą (np. [pozycjonowanie Kraków] → „pozycjonowanie Kraków"),
        zapytanie z przestawioną kolejnością wyrazów bez zmiany znaczenia
        (np. [pozycjonowanie Kraków] → „Kraków pozycjonowanie"),
        zapytanie ze zmianą funkcyjnych słów bez zmiany intencji
        ([pozycjonowanie stron w Krakowie] → „pozycjonowanie stron Kraków"),
        lub zapytanie będące bliskim wariantem (błędy pisowni, formy gramatyczne, skróty —
        np. [buty Nike Air] → „buty nike air max").
        Reklama <strong>nie wyświetla się</strong> dla rozszerzeń znaczeniowych ani synonimów
        (to jest różnica względem Broad Match).
      </p>

      <h2>Porównanie typów dopasowania</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Operator</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zasięg</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kontrola</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typowy CPC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Exact Match</td>
              <td className="p-4 text-zinc-600 font-mono">[słowo kluczowe]</td>
              <td className="p-4 text-zinc-600">Wąski</td>
              <td className="p-4 text-green-600 font-semibold">Wysoka</td>
              <td className="p-4 text-zinc-600">Najwyższy</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Phrase Match</td>
              <td className="p-4 text-zinc-600 font-mono">"słowo kluczowe"</td>
              <td className="p-4 text-zinc-600">Średni</td>
              <td className="p-4 text-zinc-600">Średnia</td>
              <td className="p-4 text-zinc-600">Średni</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/broad-match">Broad Match</Link></td>
              <td className="p-4 text-zinc-600 font-mono">słowo kluczowe</td>
              <td className="p-4 text-zinc-600">Szeroki</td>
              <td className="p-4 text-zinc-600">Niska</td>
              <td className="p-4 text-zinc-600">Najniższy</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Zalety Exact Match</h2>
      <p>
        <strong>Maksymalna kontrola nad targetowaniem</strong> — wiesz niemal dokładnie, na jakie zapytania
        wyświetla się Twoja reklama. Raport wyszukiwanych haseł przy Exact Match jest znacznie łatwiejszy
        do analizy niż przy Broad Match, gdzie pojawia się setki nieprzewidywalnych zapytań.
      </p>
      <p>
        <strong>Wyższy <Link href="/quality-score">Quality Score</Link></strong> — przy wąskim dopasowaniu
        reklama jest zawsze wysoce trafna dla zapytania, co podnosi oczekiwany
        <Link href="/ctr"> CTR</Link> i QS. Wyższy QS = niższy <Link href="/cpc">CPC</Link>
        w stosunku do pozycji reklamy.
      </p>
      <p>
        <strong>Lepsza predykcja budżetu</strong> — znając wolumen dokładnych fraz,
        można precyzyjniej prognozować koszty kampanii. Broad Match z przypadkowymi triggerami
        potrafi przepalać budżet nieoczekiwanie.
      </p>

      <h2>Wady Exact Match i kiedy nie stosować</h2>
      <p>
        <strong>Ograniczony zasięg</strong> — Exact Match może pominąć wartościowe zapytania zbliżone znaczeniowo.
        Jeśli Twoja fraza to [lakiernik samochodowy Warszawa], reklama nie wyświetli się dla
        „lakierowanie samochodu Warszawa" — co może być intencją tego samego użytkownika.
        Phrase Match obsłużyłby oba przypadki.
      </p>
      <p>
        <strong>Brak odkrywania nowych fraz</strong> — Exact Match nie pozwala odkrywać nowych,
        wartościowych zapytań, których sam byś nie dodał. To rola Broad Match z analizą raportów haseł.
      </p>

      <InfoBox>
        <strong>Strategia na start vs. dojrzała kampania:</strong> Nowe kampanie warto zaczynać od Exact Match i Phrase Match — daje to kontrolę i czyste dane o tym, które frazy faktycznie konwertują. Po zebraniu historii (min. 30–50 konwersji/miesiąc) i zidentyfikowaniu skutecznych fraz, rozszerzaj na Broad Match z Smart Bidding, żeby odkrywać nowe możliwości przy zachowaniu efektywności.
      </InfoBox>

      <h2>FAQ — Exact Match</h2>

      <h3>Czy Exact Match wciąż oznacza dokładnie to słowo kluczowe?</h3>
      <p>
        Nie do końca — od aktualizacji 2021 roku Google może wyświetlać reklamy Exact Match dla bliskich
        wariantów o tym samym znaczeniu: przestawiona kolejność wyrazów, funkcyjne słowa pominięte lub dodane,
        formy gramatyczne. Intencja zapytania stała się ważniejsza niż dosłowne słowa.
        Sprawdzaj raport wyszukiwanych haseł, żeby zobaczyć faktyczne zapytania triggerujące kampanię.
      </p>

      <h3>Czy Exact Match ma wyższy CPC niż Broad Match?</h3>
      <p>
        Zazwyczaj tak — frazy Exact Match są bardziej konkurencyjne, bo wielu reklamodawców licytuje
        na dokładnie te same zapytania. Ale wyższy CPC jest kompensowany przez wyższy
        <Link href="/quality-score">Quality Score</Link> i zazwyczaj wyższy
        <Link href="/conversion-rate">współczynnik konwersji</Link> (bo reklama jest bardzo trafna).
        Koszt konwersji (CPA) przy Exact Match bywa więc porównywalny lub niższy niż przy Broad Match.
      </p>

      <h3>Kiedy warto używać wyłącznie Exact Match?</h3>
      <p>
        Przy bardzo ograniczonym budżecie wymagającym maksymalnej precyzji, kampaniach brandowych
        (własna marka jako słowo kluczowe), lub przy bardzo drogich frazach gdzie jeden przypadkowy
        klik z irrelewantnego zapytania może kosztować kilkadziesiąt złotych.
        W większości kampanii mix Exact Match + Phrase Match daje lepszy balans zasięgu i kontroli.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest Exact Match w Google Ads?",
            "acceptedAnswer": { "@type": "Answer", "text": "Exact Match to typ dopasowania słów kluczowych zapisywany w nawiasach kwadratowych [fraza]. Reklama wyświetla się dla zapytań identycznych lub bardzo bliskich znaczeniowo — z przestawioną kolejnością wyrazów, błędami ortograficznymi lub bliskimi wariantami." } },
          { "@type": "Question", "name": "Jaka jest różnica między Exact Match a Phrase Match?",
            "acceptedAnswer": { "@type": "Answer", "text": "Exact Match ogranicza wyświetlenia do zapytań o identycznym znaczeniu. Phrase Match (cudzysłów) dopuszcza dodatkowe słowa przed i po frazie, zachowując jej podstawowe znaczenie — daje szerszy zasięg przy umiarkowanej kontroli." } },
          { "@type": "Question", "name": "Czy Exact Match zawsze wyświetla reklamę dokładnie na to słowo?",
            "acceptedAnswer": { "@type": "Answer", "text": "Nie do końca — od 2021 roku Google rozszerzyło Exact Match o bliskie warianty o tym samym znaczeniu: przestawiona kolejność wyrazów, pominięte słowa funkcyjne, formy gramatyczne. Sprawdzaj raport wyszukiwanych haseł dla faktycznych trigerów." } }
        ]
      }) }} />
    </div>
  );
}
