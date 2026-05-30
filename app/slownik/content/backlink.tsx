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

export default function Backlink() {
  return (
    <div className="prose-blog">

      <h2>Skąd wziął się fenomen backlinków?</h2>
      <p>
        W 1996 roku Larry Page i Sergey Brin pracowali nad algorytmem, który miał odmienić wyszukiwanie.
        Ich kluczowa obserwacja była prosta: jeśli akademicki artykuł cytowany jest przez wiele innych prac,
        to znak, że ma znaczenie. Przenieśli tę logikę na sieć — tak powstał <Link href="/pagerank">PageRank</Link>,
        a wraz z nim idea, że link z jednej strony do drugiej to głos zaufania.
        Backlink stał się walutą internetowego autorytetu i do dziś pozostaje jednym z najsilniejszych sygnałów rankingowych Google.
      </p>
      <p>
        Przez lata webmasterzy starali się manipulować tym systemem — kupując linki, zakładając farmy linkowe,
        upychając podpisy forów. Google odpowiedział algorytmem <Link href="/penguin">Penguin</Link> (2012),
        który nauczył się odróżniać naturalne linki od sztucznych. Dzisiejsze backlinki muszą być trafne,
        kontekstowe i pochodzić z wiarygodnych źródeł — inaczej nie tylko nie pomagają, ale mogą zaszkodzić.
      </p>

      <h2>Czym jest backlink?</h2>
      <p>
        <strong>Backlink</strong> (link przychodzący, inbound link) to hiperłącze umieszczone na zewnętrznej stronie,
        które prowadzi do Twojej witryny. Gdy portal branżowy cytuje Twój artykuł i podlinkuje do niego,
        dostajesz backlink. Gdy klient pisze recenzję i linkuje do Twojej strony — to backlink.
        Gdy dziennikarz powołuje się na Twoje dane — backlink.
      </p>
      <p>
        W odróżnieniu od <Link href="/internal-linking">linkowania wewnętrznego</Link> — które odbywa się w obrębie
        jednej domeny — backlink zawsze pochodzi z innej domeny. To właśnie ta zewnętrzność nadaje mu wartość:
        Google traktuje każdy backlink jako rekomendację od kogoś spoza Twojej organizacji.
      </p>

      <h2>Rodzaje backlinków — co decyduje o ich wartości?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co przekazuje</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wartość SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/dofollow">Dofollow</Link></td>
              <td className="p-4 text-zinc-600">Autorytet (link juice)</td>
              <td className="p-4 text-green-600 font-medium">Wysoka</td>
              <td className="p-4 text-zinc-600">Standardowy link w artykule blogowym</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink"><Link href="/nofollow">Nofollow</Link></td>
              <td className="p-4 text-zinc-600">Brak bezpośredniego link juice</td>
              <td className="p-4 text-zinc-600 font-medium">Pośrednia</td>
              <td className="p-4 text-zinc-600">Linki w komentarzach, Wikipedii</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Sponsored</td>
              <td className="p-4 text-zinc-600">Oznaczenie linku płatnego</td>
              <td className="p-4 text-zinc-600 font-medium">Niska / neutralna</td>
              <td className="p-4 text-zinc-600">Artykuły sponsorowane</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">UGC</td>
              <td className="p-4 text-zinc-600">Treść generowana przez użytkownika</td>
              <td className="p-4 text-zinc-600 font-medium">Niska</td>
              <td className="p-4 text-zinc-600">Fora, recenzje, Q&A</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Oprócz atrybutu (dofollow/nofollow), wartość backlinku zależy od kilku czynników jednocześnie.
        <strong>Autorytet domeny linkującej</strong> — link z portalu o wysokim <Link href="/domain-rating">Domain Rating</Link>
        jest wart więcej niż dziesiątki linków z anonimowych blogów.
        <strong>Trafność tematyczna</strong> — link z branżowego portalu SEO do strony o pozycjonowaniu
        jest silniejszy niż link z portalu kulinarnego do tej samej strony.
        <strong>Umiejscowienie w treści</strong> — link w środku artykułu przekazuje więcej autorytetu niż link
        w stopce lub sidebarze; Google rozumie, że redakcyjny wybór kotwicy świadczy o świadomej rekomendacji.
        <strong>Anchor text</strong> — <Link href="/anchor-text">tekst kotwicy</Link> informuje Google o tematyce
        linkowanej strony; naturalny, zróżnicowany profil anchors to znak zdrowego profilu linków.
      </p>

      <h2>Jak budować backlinki — skuteczne metody</h2>
      <p>
        <strong>Tworzenie treści wartych linkowania (linkable assets)</strong> — raporty z własnymi danymi,
        narzędzia online, rozbudowane poradniki, infografiki z unikalnymi statystykami.
        Treści, które odpowiadają na pytania, których nikt inny nie zadał, lub prezentują dane niedostępne
        gdzie indziej — przyciągają linki organicznie, bez aktywnego outreachu.
      </p>
      <p>
        <strong>Digital PR i media relations</strong> — dostarczanie dziennikarzom gotowych do cytowania
        danych i ekspertyz (HARO — Help a Reporter Out, Connectively). Jeden artykuł w poważnym medium
        może przynieść więcej autorytetu niż miesięczna kampania link buildingowa.
      </p>
      <p>
        <strong>Gościnne artykuły (guest posting)</strong> — pisanie wartościowych artykułów dla branżowych
        portali w zamian za link do własnej domeny. Kluczowe: domena linkująca musi mieć sens tematyczny,
        a sam artykuł musi wnosić realną wartość dla czytelników — nie być tylko pretekstem dla linka.
      </p>
      <p>
        <strong>Broken link building</strong> — znajdowanie stron linkujących do niedziałających adresów
        i proponowanie własnej treści jako zamiennika. Właściciel strony zyskuje poprawioną jakość UX,
        Ty zyskujesz backlink z kontekstualnie trafnej strony.
      </p>
      <p>
        <strong>Cytowania lokalne i katalogi branżowe</strong> — dla firm lokalnych,
        spójne wpisy NAP (name, address, phone) w wiarygodnych katalogach to fundament
        <Link href="/local-seo"> local SEO</Link> i dodatkowe sygnały dla Google.
      </p>

      <InfoBox>
        <strong>Jakość ponad ilość — zawsze.</strong> 5 linków z portali o DR 50+ w Twojej branży jest warte więcej niż 500 linków z anonimowych blogów. Rozbudowany profil niskiej jakości może wręcz zaszkodzić — algorytm <Link href="/penguin">Penguin</Link> aktywnie penalizuje nienaturalne wzorce linkowania.
      </InfoBox>

      <h2>Jak monitorować backlinki?</h2>
      <p>
        <strong>Google Search Console</strong> — zakładka „Linki" pokazuje domeny linkujące i najpopularniejsze
        strony docelowe. Bezpłatne, ale niekompletne — GSC nie indeksuje wszystkich backlinków.
        <strong>Ahrefs</strong> — najdokładniejszy indeks backlinków na rynku; pokazuje DR, anchor text,
        status dofollow/nofollow i historię każdego linku.
        <strong>Semrush / Moz</strong> — alternatywy z własnym indeksem i narzędziami do analizy profilu.
      </p>

      <h2>Najczęstsze błędy przy budowaniu backlinków</h2>
      <p>
        <strong>Kupowanie linków</strong> — bezpośrednio narusza wytyczne Google i jest celem algorytmu Penguin.
        Google coraz skuteczniej identyfikuje płatne linki, szczególnie gdy pojawiają się masowo w krótkim czasie.
        <strong>Ignorowanie trafności tematycznej</strong> — link z niezwiązanej tematycznie domeny przekazuje
        mało wartości i może sygnalizować nienaturalność.
        <strong>Nadmierna optymalizacja anchor textu</strong> — profil złożony głównie z exact-match anchors
        to czerwona flaga dla algorytmu; naturalne linki mają zróżnicowane kotwice.
        <strong>Porzucenie profilu linków</strong> — utrata istniejących backlinków (np. gdy partner usuwa artykuł)
        obniża autorytet domeny; warto regularnie monitorować profil i reagować na znikające linki.
      </p>

      <h2>FAQ — Backlink</h2>

      <h3>Ile backlinków potrzebuję żeby rankować?</h3>
      <p>
        Nie ma jednej liczby — zależy od konkurencyjności frazy, autorytetu konkurencji i jakości Twoich linków.
        Narzędzia jak Ahrefs Keyword Explorer pokazują szacunkową liczbę backlinków potrzebnych do top 10
        dla konkretnej frazy. Dla lokalnych, niszowych zapytań wystarczy czasem kilkanaście dobrych linków;
        dla konkurencyjnych fraz ogólnopolskich potrzeba setek z autorytatywnych źródeł.
      </p>

      <h3>Czy linki nofollow mają jakąkolwiek wartość?</h3>
      <p>
        Tak, pośrednią. Google traktuje nofollow jako wskazówkę, nie absolutny zakaz przekazywania wartości.
        Linki nofollow pomagają budować naturalny, zróżnicowany profil — czysto dofollow profile wyglądają
        nienaturalnie. Ponadto linki nofollow z dużych portali (Wikipedia, Reddit) generują ruch i zwiększają
        rozpoznawalność marki, co pośrednio przekłada się na organiczne dofollow linki.
      </p>

      <h3>Jak usunąć toksyczne backlinki?</h3>
      <p>
        Pierwszym krokiem jest próba kontaktu z właścicielem strony linkującej i prośba o usunięcie linku.
        Jeśli to niemożliwe, Google oferuje narzędzie <Link href="/disavow">Disavow</Link> w Search Console —
        pozwala przesłać listę domen lub URL, których Google ma nie brać pod uwagę przy ocenie profilu linków.
        Używaj go ostrożnie — błędne odrzucenie wartościowych linków może zaszkodzić rankingowi.
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
                "name": "Ile backlinków potrzebuję żeby rankować?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie ma jednej liczby — zależy od konkurencyjności frazy i autorytetu konkurencji. Narzędzia jak Ahrefs Keyword Explorer szacują potrzebną liczbę backlinków dla konkretnej frazy. Liczy się jakość, nie ilość."
                }
              },
              {
                "@type": "Question",
                "name": "Czy linki nofollow mają wartość SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pośrednią. Google traktuje nofollow jako wskazówkę, nie absolutną regułę. Linki nofollow budują naturalny profil, generują ruch i rozpoznawalność marki — co pośrednio przekłada się na organiczne dofollow linki."
                }
              },
              {
                "@type": "Question",
                "name": "Czym różni się backlink od internal linka?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Backlink pochodzi z zewnętrznej domeny i jest traktowany przez Google jako rekomendacja od kogoś spoza Twojej organizacji. Internal link łączy strony w obrębie tej samej domeny i dystrybuuje autorytet wewnętrznie."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
