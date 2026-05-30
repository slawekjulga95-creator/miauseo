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

export default function Dofollow() {
  return (
    <div className="prose-blog">

      <h2>Czym jest link Dofollow?</h2>
      <p>
        <strong>Dofollow</strong> to standardowy typ hiperłącza HTML, który nie posiada żadnych restrykcyjnych
        atrybutów — linki są domyślnie „dofollow" od momentu powstania sieci WWW.
        Termin jest nieco mylący: w HTML nie istnieje atrybut <code>rel="dofollow"</code> —
        link jest dofollow przez brak atrybutu <code>rel="nofollow"</code>, <code>rel="ugc"</code>
        lub <code>rel="sponsored"</code>.
        Wyszukiwarki śledzą (ang. <em>follow</em>) takie linki i biorą je pod uwagę przy ocenie
        autorytetu i rankingu linkowanej strony.
      </p>
      <p>
        Gdy strona A linkuje dofollow do strony B, przekazuje jej część swojego
        <Link href="/link-juice"> link juice</Link> — autorytetu rankingowego, który Google oblicza
        na podstawie jakości i ilości linków przychodzących. To fundament algorytmu
        <Link href="/pagerank">PageRank</Link> i do dziś jeden z najsilniejszych sygnałów rankingowych
        w wyszukiwarkach.
      </p>

      <h2>Dofollow vs Nofollow — kluczowe różnice</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cecha</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dofollow</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400"><Link href="/nofollow">Nofollow</Link></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Kod HTML</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">&lt;a href="url"&gt;</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">&lt;a href="url" rel="nofollow"&gt;</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Przekazuje link juice</td>
              <td className="p-4 text-green-600 font-semibold">Tak</td>
              <td className="p-4 text-zinc-600">Nie (oficjalnie — wskazówka)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wpływ na ranking</td>
              <td className="p-4 text-zinc-600">Bezpośredni</td>
              <td className="p-4 text-zinc-600">Pośredni / żaden</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Typowe źródła</td>
              <td className="p-4 text-zinc-600">Artykuły redakcyjne, poradniki, wzmianki w mediach</td>
              <td className="p-4 text-zinc-600">Komentarze, Wikipedia, reklamy, UGC</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wartość dla link buildingu</td>
              <td className="p-4 text-green-600 font-semibold">Podstawowa</td>
              <td className="p-4 text-zinc-600">Uzupełniająca (naturalny profil)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak działa przekazywanie link juice przez linki dofollow?</h2>
      <p>
        Każda strona ma pewną ilość autorytetu rankingowego wynikającą z linków, które do niej prowadzą.
        Ten autorytet jest dzielony między wszystkie linki dofollow wychodzące z danej strony.
        Jeśli strona A ma 100 jednostek autorytetu i linkuje dofollow do 10 stron,
        każda z nich otrzymuje orientacyjnie po 10 jednostek (pomijając utratę wynikającą z procesu — tzw. evaporation).
      </p>
      <p>
        Stąd wywodzi się praktyczna wskazówka: linki dofollow w treści artykułu są cenniejsze
        niż te w stopce lub sidebarze. Stopka i sidebar powtarzają się na setkach stron serwisu —
        autorytet każdej z nich rozkłada się między te same kilkanaście linków wychodzących.
        Link w treści unikalnego artykułu na silnej stronie jest znacznie skoncentrowaną jednostką autorytetu.
      </p>

      <InfoBox>
        <strong>Nofollow to wskazówka, nie nakaz:</strong> Od 2019 roku Google traktuje atrybut nofollow jako <em>hint</em> (wskazówkę), a nie dyrektywę. W niektórych przypadkach Google może zdecydować się podążyć za linkiem nofollow i przekazać przez niego autorytet — szczególnie jeśli kontekst linku sygnalizuje wartość redakcyjną. Nie oznacza to, że nofollow i dofollow są równoważne — dofollow pozostaje znacznie cenniejszy dla SEO.
      </InfoBox>

      <h2>Jak sprawdzić, czy link jest dofollow?</h2>
      <p>
        Najprościej: kliknij prawym przyciskiem na link → „Zbadaj element" (lub Ctrl+Shift+I w Chrome)
        i sprawdź kod HTML. Brak atrybutu <code>rel="nofollow"</code> = link dofollow.
        Przy audycie większej liczby linków używasz narzędzi jak Ahrefs (ikona „DF" i „NF" w raporcie backlinków),
        Semrush lub Screaming Frog, które automatycznie klasyfikują każdy link.
      </p>

      <h2>Dofollow w strategii link buildingu</h2>
      <p>
        Celem każdej kampanii <Link href="/link-building">link buildingu</Link> jest pozyskiwanie
        przede wszystkim linków dofollow — bo to one mają bezpośredni wpływ na autorytet domeny
        i pozycje organiczne. Metody pozyskiwania naturalnych linków dofollow to m.in. tworzenie
        wartościowych treści (linkable assets), digital PR, gościnne artykuły na branżowych portalach
        i cytowania w mediach branżowych.
      </p>
      <p>
        Naturalny profil linków zawiera jednak pewien odsetek linków nofollow — Twoja Wikipedia,
        profile w mediach społecznościowych, wzmianki na forach. Profil złożony w 100% z linków dofollow
        jest tak samo podejrzany jak profil z 100% linków z jedną domeną źródłową.
        Zdrowy mix to zazwyczaj 60–80% dofollow w naturalnym profilu zbudowanego serwisu.
      </p>

      <h2>FAQ — Dofollow</h2>

      <h3>Czy muszę specjalnie zaznaczać linki jako dofollow?</h3>
      <p>
        Nie — każdy link jest domyślnie dofollow. Nie ma atrybutu <code>rel="dofollow"</code> w standardzie HTML.
        Dofollow to stan domyślny; nofollow, ugc i sponsored to atrybuty dodawane świadomie, żeby ograniczyć
        przekazywanie autorytetu.
      </p>

      <h3>Ile linków dofollow potrzebuję żeby poprawić ranking?</h3>
      <p>
        Nie ma jednej liczby — zależy od konkurencyjności niszy, aktualnego profilu linków Twojej domeny
        i profilu linków konkurentów w top 3. Sprawdź w Ahrefs liczbę referring domains do stron,
        które chcesz pobić. To jest cel. Jakość każdego pozyskanego linku (DR domeny linkującej,
        trafność tematyczna, umiejscowienie w treści) ma większe znaczenie niż sama liczba.
      </p>

      <h3>Czy link dofollow z niskiej jakości strony może zaszkodzić?</h3>
      <p>
        Pojedynczy słaby link zazwyczaj nie szkodzi — Google jest zaprojektowane żeby ignorować
        nienaturalne linki, a nie karać ich odbiorcę. Problem pojawia się przy masowej liczbie
        toksycznych linków (setki lub tysiące) z wyraźnie spamowych źródeł — szczególnie z podejrzanymi
        anchor textami. W takim przypadku warto rozważyć narzędzie <Link href="/disavow">Disavow</Link>.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest link dofollow?",
            "acceptedAnswer": { "@type": "Answer", "text": "Link dofollow to standardowy link HTML bez atrybutu rel='nofollow'. Wyszukiwarki śledzą takie linki i biorą je pod uwagę przy ocenie autorytetu rankingowego. Przekazuje link juice z jednej strony do drugiej." } },
          { "@type": "Question", "name": "Jaka jest różnica między dofollow a nofollow?",
            "acceptedAnswer": { "@type": "Answer", "text": "Link dofollow przekazuje autorytet (link juice) do linkowanej strony i ma bezpośredni wpływ na ranking. Link nofollow sygnalizuje Google żeby nie podążał za tym linkiem — od 2019 roku Google traktuje go jako wskazówkę, nie absolutną regułę." } }
        ]
      }) }} />
    </div>
  );
}
