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

export default function AutorytetDomeny() {
  return (
    <div className="prose-blog">

      <h2>Kontekst: od PageRank do autorytetu domeny</h2>
      <p>
        Historia metryki autorytetu domeny zaczyna się w 1996 roku, gdy Larry Page i Sergey Brin opracowali
        <Link href="/pagerank"> PageRank</Link> — algorytm oceniający znaczenie strony na podstawie liczby
        i jakości prowadzących do niej linków. PageRank był rewolucją: po raz pierwszy kryterium oceny strony
        stało się nie tylko jej zawartość, ale to, co inne strony o niej „mówią" przez linkowanie.
      </p>
      <p>
        Google przestało publicznie ujawniać wartości PageRank w 2016 roku. Wypełniły tę lukę narzędzia SEO —
        przede wszystkim <strong>Moz</strong> z metryką <strong>Domain Authority (DA)</strong> i <strong>Ahrefs</strong>
        z <strong>Domain Rating (DR)</strong>. Dziś to te właśnie metryki są walutą w rozmowach o sile domeny,
        choć żadna z nich nie jest używana przez Google do rankingowania stron.
      </p>

      <h2>Czym jest Autorytet Domeny (Domain Authority)?</h2>
      <p>
        <strong>Domain Authority (DA)</strong> to metryka opracowana przez Moz, wyrażona na skali <strong>0–100</strong>,
        która prognozuje, jak dobrze dana domena będzie rankować w organicznych wynikach wyszukiwania.
        Jest oparta przede wszystkim na profilu linków zewnętrznych (<Link href="/backlink">backlinków</Link>),
        ale uwzględnia też takie czynniki jak liczba linkujących domen (root domains), jakość tych domen i
        siłę poszczególnych stron.
      </p>
      <p>
        Skala logarytmiczna oznacza, że wzrost DA z 10 do 20 jest znacznie łatwiejszy niż z 70 do 80.
        Nowa domena zaczyna z DA=1. Domeny takie jak Wikipedia, YouTube czy Apple.com mają DA powyżej 90.
        Typowy lokalny biznes z historią kilku lat i podstawowym link buildingiem osiąga DA 20–40.
      </p>

      <InfoBox>
        <strong>Ważne zastrzeżenie:</strong> DA/DR to metryki narzędzi trzecich — Moz i Ahrefs. Google nie używa tych metryk do rankingowania. Wewnętrzna miara autorytetu Google to oryginalny PageRank (nieujawniony publicznie). DA i DR są użyteczne jako <em>przybliżenie</em> siły domeny i narzędzie porównawcze — nie traktuj ich jako absolutną prawdę.
      </InfoBox>

      <h2>DA vs. DR vs. TrustRank — jak się różnią?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Metryka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Narzędzie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Skala</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Częstość aktualizacji</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Domain Authority (DA)</td>
              <td className="p-4 text-zinc-600">Moz</td>
              <td className="p-4 text-zinc-600">0–100</td>
              <td className="p-4 text-zinc-600">Profil linków, liczba root domains, siła stron</td>
              <td className="p-4 text-zinc-600">Co miesiąc</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/domain-rating">Domain Rating (DR)</Link></td>
              <td className="p-4 text-zinc-600">Ahrefs</td>
              <td className="p-4 text-zinc-600">0–100</td>
              <td className="p-4 text-zinc-600">Siła profilu backlinków (liczba i jakość linkujących domen)</td>
              <td className="p-4 text-zinc-600">Ciągłe (real-time)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Authority Score</td>
              <td className="p-4 text-zinc-600">Semrush</td>
              <td className="p-4 text-zinc-600">0–100</td>
              <td className="p-4 text-zinc-600">Backlinki + ruch organiczny + zachowanie użytkowników</td>
              <td className="p-4 text-zinc-600">Co tydzień</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/trustrank">TrustRank</Link></td>
              <td className="p-4 text-zinc-600">Moz (Trust Flow) / Majestic</td>
              <td className="p-4 text-zinc-600">0–100</td>
              <td className="p-4 text-zinc-600">Dystans od zaufanych źródeł (edu, gov, media)</td>
              <td className="p-4 text-zinc-600">Regularne</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Spam Score</td>
              <td className="p-4 text-zinc-600">Moz</td>
              <td className="p-4 text-zinc-600">0–17</td>
              <td className="p-4 text-zinc-600">Ryzyko uznania domeny za spam</td>
              <td className="p-4 text-zinc-600">Co miesiąc</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak DA/DR wpływa na SEO w praktyce?</h2>
      <p>
        Choć Google nie używa DA bezpośrednio, siła profilu linków — którą DA stara się mierzyć — jak najbardziej ma znaczenie.
        Oto praktyczne implikacje:
      </p>
      <ul>
        <li>
          <strong>Ocena trudności rankingowej (Keyword Difficulty)</strong> — frazy zdominowane przez domeny z DA 70+ są niemal nieosiągalne dla nowej domeny z DA 15. Narzędzia SEO używają DA/DR do szacowania KD.
        </li>
        <li>
          <strong>Wycena linków i ocena partnerów</strong> — przy <Link href="/link-building">link buildingu</Link> DA/DR jest pierwszym filtrem: warto starać się o link z domeny DR 40+ i niskim Spam Score.
        </li>
        <li>
          <strong>Audyt profilu linków</strong> — nagły spadek DA może sygnalizować utratę wartościowych backlinków lub rosnącą liczbę toksycznych linków wymagających <Link href="/disavow">disavow</Link>.
        </li>
        <li>
          <strong>Benchmarking konkurencji</strong> — porównanie DA/DR z bezpośrednimi konkurentami daje szybki obraz dystansu do nadrobienia w <Link href="/off-page-seo">off-page SEO</Link>.
        </li>
      </ul>

      <h2>Jak budować autorytet domeny — strategie i taktyki</h2>

      <h3>1. Twórz treści warte linkowania (linkable assets)</h3>
      <p>
        Najskuteczniejsza długoterminowa strategia to tworzenie treści, do których inni naturalnie linkują:
        badania własne, raporty branżowe, narzędzia online, obszerne poradniki, infografiki z danymi, kalkulatory.
        Treść, która dostarcza unikalnych danych lub rozwiązuje realny problem, przyciąga linki bez aktywnego outreachu.
      </p>

      <h3>2. Digital PR i budowanie wzmianek w mediach</h3>
      <p>
        Linki z portali newsowych, branżowych magazynów i autorytatywnych blogów to najcenniejsze aktywa dla DA.
        Digital PR (HARO — Help a Reporter Out, ekspertyzy dla dziennikarzy, badania z własnym komentem) to
        droga do zdobywania linków z domen, których inaczej nie osiągniesz.
      </p>

      <h3>3. Gościnne artykuły (guest posting) — jakość, nie ilość</h3>
      <p>
        Artykuły gościnne na wartościowych portalach branżowych budują autorytet, pod warunkiem że domena
        linkująca ma sens tematyczny i przyzwoite DR. 3 linki z DR 50+ są warte więcej niż 50 linków z
        blogów o DR 10 stworzonych tylko po to, żeby linkować.
      </p>

      <h3>4. Odbudowa zerwanych linków (broken link building)</h3>
      <p>
        Znajdź strony w swojej branży, które linkują do niedziałających adresów URL — i zaproponuj swoją treść
        jako zamiennik. Narzędzia: Ahrefs → Best By Links + filtr 404. Ta metoda przynosi linki w naturalny
        i etyczny sposób.
      </p>

      <h3>5. Internal linking jako amplifikator</h3>
      <p>
        <Link href="/internal-linking">Linkowanie wewnętrzne</Link> rozkłada autorytet między strony witryny.
        Strona z wysokim <Link href="/pagerank">PageRank</Link> wewnątrz domeny (np. strona główna, bestseller)
        powinna linkować do stron strategicznie ważnych. To tani, dostępny dziś sposób na wzmacnianie siły podstron.
      </p>

      <InfoBox>
        <strong>Autorytet domeny buduje się latami.</strong> Nowa domena z dobrą treścią i aktywnym link buildingiem osiągnie DA 30–40 po 18–36 miesiącach systematycznej pracy. Skróty — zakup starych domen, kupowanie linków masowo — działają krótkoterminowo i kończą się penalizacją przez algorytm <Link href="/penguin">Penguin</Link>.
      </InfoBox>

      <h2>FAQ — Autorytet Domeny</h2>

      <h3>Czy wysoki DA gwarantuje wysokie pozycje?</h3>
      <p>
        Nie. DA to metryka predykcyjna — koreluje z dobrymi pozycjami, ale nie jest ich gwarancją.
        Strona z DA 60 może rankować niżej niż strona z DA 35, jeśli ma gorszą treść, słabszą trafność
        dla konkretnej frazy lub problemy techniczne. DA to jeden z wielu czynników.
      </p>

      <h3>Jak szybko mogę zwiększyć DA swojej strony?</h3>
      <p>
        DA rośnie powoli — to efekt kumulacji wartościowych backlinków w czasie. Przy aktywnym link buildingu
        realistyczny wzrost to 2–5 punktów DA na kwartał dla domen poniżej DA 30. Powyżej DA 50 przyrosty
        są znacznie wolniejsze ze względu na logarytmiczną skalę.
      </p>

      <h3>Mój DA spadł — co to oznacza?</h3>
      <p>
        Moz regularnie aktualizuje swój indeks linków — niektóre linki „wygasają", konkurenci zdobywają nowe,
        a sama skala DA przesuwa się (bo ogólna jakość sieci rośnie). Pojedynczy spadek DA nie jest powodem
        do paniki. Martwić powinieneś się gdy: (a) tracisz cenne backlinki, (b) pojawiły się toksyczne linki,
        lub (c) DA spada konsekwentnie przez kilka miesięcy.
      </p>

      <h3>Czy DA różni się między narzędziami SEO?</h3>
      <p>
        Tak, i to znacząco. Moz DA 45 ≠ Ahrefs DR 45 ≠ Semrush Authority Score 45.
        Każde narzędzie ma własny algorytm i własny indeks crawlowanych linków.
        Porównuj metryki tylko w obrębie jednego narzędzia (np. Twoje DR vs. DR konkurenta w Ahrefs),
        nie między różnymi platformami.
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
                "name": "Czy wysoki Domain Authority gwarantuje wysokie pozycje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. DA koreluje z dobrymi pozycjami, ale ich nie gwarantuje. Strona z niższym DA może rankować wyżej dzięki lepszej treści i wyższej trafności dla konkretnej frazy."
                }
              },
              {
                "@type": "Question",
                "name": "Jak szybko mogę zwiększyć DA swojej strony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Przy aktywnym link buildingu realistyczny wzrost to 2–5 punktów DA na kwartał dla domen poniżej DA 30. Powyżej DA 50 przyrosty są znacznie wolniejsze ze względu na logarytmiczną skalę."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Google używa Domain Authority do rankingowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. DA to metryka narzędzia Moz, nie Google. Google używa swojego wewnętrznego algorytmu (PageRank i inne sygnały), który nie jest publicznie dostępny. DA jest użytecznym przybliżeniem siły domeny, nie oficjalnym wskaźnikiem Google."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
