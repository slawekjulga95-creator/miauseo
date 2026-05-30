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

export default function DomainAuthority() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Domain Authority?</h2>
      <p>
        <strong>Domain Authority</strong> (DA) to metryka opracowana przez firmę Moz, wyrażona na skali
        logarytmicznej od 0 do 100, która prognozuje zdolność domeny do rankowania w organicznych
        wynikach wyszukiwania Google. Im wyższy wynik, tym silniejsza domena — ale skok z DA 10 do 20
        jest wielokrotnie łatwiejszy niż skok z DA 70 do 80, właśnie ze względu na skalę logarytmiczną.
      </p>
      <p>
        Domain Authority jest obliczany przez algorytm Moz przede wszystkim na podstawie profilu linków
        zewnętrznych — liczby i jakości stron linkujących do danej domeny (referring domains),
        siły samych tych stron (ich własne DA), różnorodności domen linkujących i łącznej liczby
        wszystkich backlinków. Moz aktualizuje DA mniej więcej raz w miesiącu.
      </p>

      <InfoBox>
        <strong>DA to nie czynnik rankingowy Google.</strong> Moz Domain Authority jest metryką prywatnej firmy — Google nie używa jej w algorytmie rankingowym. DA koreluje z dobrymi pozycjami, bo jest oparta na sygnałach podobnych do tych, które Google faktycznie bierze pod uwagę (profil linków), ale korelacja to nie przyczynowość. Wysoki DA nie gwarantuje wysokich pozycji.
      </InfoBox>

      <h2>Do czego praktycznie używa się DA?</h2>
      <p>
        <strong>Ocena potencjalnych partnerów linkowych</strong> — przed wysłaniem prośby o link gościnny
        sprawdzasz DA domeny. Strona z DA poniżej 20 i Spam Score powyżej 30% to słaby partner.
        Strona z DA 40+ i niskim Spam Score to dobry cel dla <Link href="/link-building">link buildingu</Link>.
        DA to szybki filtr — nie jedyny wskaźnik, ale przydatny przy ocenie setek domen jednocześnie.
      </p>
      <p>
        <strong>Benchmarking konkurencji</strong> — sprawdzasz DA swoich głównych konkurentów
        i porównujesz z własną domeną. Dystans 20–30 punktów DA oznacza poważną pracę do nadrobienia
        w obszarze <Link href="/off-page-seo">off-page SEO</Link>. To realistyczna ocena skali wysiłku
        potrzebnego do wyrównania pozycji.
      </p>
      <p>
        <strong>Szacowanie trudności rankingowej</strong> — narzędzia SEO (Moz, Semrush, Ahrefs) używają DA
        lub własnych odpowiedników do obliczania Keyword Difficulty (KD) — wskaźnika, jak trudno jest
        wejść do top 10 dla danej frazy. Fraza zdominowana przez domeny z DA 70–90 jest praktycznie
        niedostępna dla domeny z DA 25 bez wieloletniego link buildingu.
      </p>

      <h2>Jak zwiększyć Domain Authority?</h2>
      <p>
        DA rośnie gdy rośnie jakość i liczba linków zewnętrznych prowadzących do Twojej domeny.
        Nie ma skrótów — algorytm Moz jest zaprojektowany żeby trudno go oszukać.
      </p>
      <p>
        <strong>Tworzenie treści wartych linkowania</strong> — oryginalne badania, narzędzia, wyczerpujące
        poradniki, infografiki z unikalnymi danymi. Treści, które dostarczają wartości niedostępnej
        gdzie indziej, przyciągają <Link href="/backlink">backlinki</Link> organicznie
        — bez aktywnego outreachu. To najtrwalsze źródło wzrostu DA.
      </p>
      <p>
        <strong>Digital PR i wzmianki w mediach</strong> — linki z portali newsowych, magazynów branżowych
        i autorytatywnych blogów mają największy wpływ na DA, bo same mają wysokie DA.
        Jedno badanie lub raport z ciekawymi danymi branżowymi może przyciągnąć dziesiątki linków
        z mediów w ciągu kilku tygodni.
      </p>
      <p>
        <strong>Eliminacja toksycznych linków</strong> — DA może rosnąć nie tylko przez dodawanie
        nowych linków, ale też przez oczyszczanie profilu ze spamowych. Użyj narzędzia
        <Link href="/disavow"> Disavow</Link> dla najbardziej szkodliwych domen.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zakres DA</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Charakterystyka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typowe strony</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">0–20</td>
              <td className="p-4 text-zinc-600">Nowe lub słabo linkowane domeny</td>
              <td className="p-4 text-zinc-600">Nowe firmy, blogi bez historii</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">20–40</td>
              <td className="p-4 text-zinc-600">Umiarkowany profil linków</td>
              <td className="p-4 text-zinc-600">MŚP z aktywnością SEO, lokalne firmy</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">40–60</td>
              <td className="p-4 text-zinc-600">Solidny autorytet, widoczność w niszy</td>
              <td className="p-4 text-zinc-600">Portale branżowe, agencje, średnie e-commerce</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">60–80</td>
              <td className="p-4 text-zinc-600">Wysoki autorytet, duże portale</td>
              <td className="p-4 text-zinc-600">Nationale media, duże sklepy, portale informacyjne</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">80–100</td>
              <td className="p-4 text-zinc-600">Najwyższy autorytet globalny</td>
              <td className="p-4 text-zinc-600">Wikipedia, YouTube, rządowe i akademickie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>FAQ — Domain Authority</h2>

      <h3>Czy DA jest ważniejsze niż DR (Domain Rating Ahrefs)?</h3>
      <p>
        Ani jedno, ani drugie nie jest „ważniejsze" — to dwie metryki różnych firm z różnymi metodologiami.
        DA (Moz) i <Link href="/domain-rating">DR (Ahrefs)</Link> korelują, ale nie są tożsame —
        ta sama domena może mieć DA 45 i DR 62. Branża bardziej ufa DR ze względu na lepszy i
        aktualniejszy indeks backlinków Ahrefs. W praktyce warto znać obie, bo różne narzędzia podają różne metryki.
      </p>

      <h3>Dlaczego moje DA spadło mimo braku zmian?</h3>
      <p>
        DA to metryka relatywna — ocenia Twoją domenę na tle całej sieci. Gdy inne domeny budują
        linki szybciej niż Ty, Twoje DA może spaść mimo braku negatywnych zmian po Twojej stronie.
        Moz regularnie aktualizuje swój indeks i algorytm — co czasem powoduje globalne zmiany DA
        bez związku z aktywnością konkretnych domen.
      </p>

      <h3>Jak szybko rośnie Domain Authority?</h3>
      <p>
        To maraton. Przy aktywnym link buildingu realistyczny wzrost to 2–5 punktów DA na kwartał
        dla domen poniżej DA 30. Powyżej DA 50 przyrosty są znacznie wolniejsze. Prawdziwy wzrost DA
        wymaga miesięcy konsekwentnej pracy nad pozyskiwaniem wartościowych backlinków — nie istnieje
        szybka droga, a próby jej skrócenia przez kupowanie linków grożą penalizacją.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest Domain Authority (DA)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Domain Authority to metryka Moz (0–100) prognozująca zdolność domeny do rankowania w wynikach Google. Oparta głównie na profilu linków zewnętrznych. Nie jest czynnikiem rankingowym Google — to metryka Moz, nie Google." } },
          { "@type": "Question", "name": "Jak zwiększyć Domain Authority?",
            "acceptedAnswer": { "@type": "Answer", "text": "DA rośnie przez pozyskiwanie wartościowych linków zewnętrznych (backlinków) z autorytatywnych, tematycznie powiązanych domen. Kluczowe metody: tworzenie linkable assets, digital PR, guest posting i budowanie wzmianek w mediach branżowych." } }
        ]
      }) }} />
    </div>
  );
}
