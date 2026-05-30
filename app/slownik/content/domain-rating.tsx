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

export default function DomainRating() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Domain Rating?</h2>
      <p>
        <strong>Domain Rating</strong> (DR) to metryka stworzona przez Ahrefs, wyrażona w skali
        logarytmicznej od 0 do 100, mierząca siłę profilu linków zewnętrznych domeny
        w porównaniu do wszystkich innych domen w indeksie Ahrefs.
        Im wyższy DR, tym silniejszy profil backlinków — i tym trudniej jest dorównać danej domenie
        w wynikach organicznych dla konkurencyjnych fraz.
      </p>
      <p>
        DR obliczany jest na podstawie dwóch głównych czynników: liczby unikalnych domen
        linkujących do danej witryny (referring domains) z linkami <Link href="/dofollow">dofollow</Link>
        oraz siły samych tych domen (ich własny DR). W odróżnieniu od
        <Link href="/domain-authority"> Domain Authority Moz</Link>, Ahrefs aktualizuje DR
        praktycznie w trybie ciągłym — zmiany w profilu linków są widoczne szybciej.
      </p>

      <h2>Jak Ahrefs oblicza Domain Rating?</h2>
      <p>
        Mechanizm jest podobny do <Link href="/pagerank">PageRank</Link> Google, ale uproszczony i publiczny.
        Każda domena startuje z pewną pulą DR wynikającą z linków do niej prowadzących.
        Ta pula jest rozdzielana proporcjonalnie między wszystkie domeny, do których linkuje (dofollow).
        Domeny linkujące do wielu innych przekazują mniej siły każdej z nich.
        Domena, do której linkuje 10 autorytatywnych domen bez rozpraszania linków na tysiące innych,
        osiągnie wyższy DR niż domena z 100 linkami od słabych źródeł.
      </p>
      <p>
        Kluczowa różnica między DR a liczbą backlinków: liczy się jakość i unikalność referring domains,
        nie surowa liczba linków. 1000 linków z jednej domeny ma taką samą wartość DR jak jeden link
        z tej domeny — Ahrefs liczy domeny, nie linki. To zbliża DR do tego, jak faktycznie
        działa algorytm Google przy ocenie profilu linków.
      </p>

      <h2>DR vs DA — praktyczne porównanie</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Cecha</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Domain Rating (Ahrefs)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Domain Authority (Moz)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Narzędzie</td>
              <td className="p-4 text-zinc-600">Ahrefs</td>
              <td className="p-4 text-zinc-600">Moz</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Główny składnik</td>
              <td className="p-4 text-zinc-600">Liczba i jakość referring domains (dofollow)</td>
              <td className="p-4 text-zinc-600">Profil linków + liczba linków + MozRank stron</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Częstość aktualizacji</td>
              <td className="p-4 text-zinc-600">Ciągłe (prawie real-time)</td>
              <td className="p-4 text-zinc-600">Co miesiąc</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Indeks backlinków</td>
              <td className="p-4 text-zinc-600">Jeden z największych na rynku</td>
              <td className="p-4 text-zinc-600">Mniejszy niż Ahrefs</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Popularność w branży SEO</td>
              <td className="p-4 text-zinc-600">Bardzo wysoka — standard w rozmowach o sile domeny</td>
              <td className="p-4 text-zinc-600">Wysoka — popularna wśród nieużytkowników Ahrefs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>DR to nie to samo co ranking Google.</strong> Wysoki DR koreluje z dobrymi pozycjami, bo odzwierciedla silny profil backlinków — ale korelacja nie jest idealna. Domena z DR 80 może przegrywać z DR 40 w wynikach dla konkretnej frazy, jeśli ta druga ma lepiej dopasowaną treść i silniejszy profil linków do konkretnej podstrony (URL Rating, UR).
      </InfoBox>

      <h2>URL Rating — siostrzana metryka Ahrefs</h2>
      <p>
        Obok DR, Ahrefs oferuje <strong>URL Rating (UR)</strong> — metrykę oceniającą siłę profilu linków
        konkretnej strony (podstrony), nie całej domeny. UR jest dla poszczególnych URL tym,
        czym DR jest dla domeny. W praktyce UR konkretnego artykułu czy strony produktowej
        jest często bardziej predykcyjny dla rankingu tej strony niż ogólny DR domeny.
        Strona z DR 30 może mieć artykuł z UR 45 dzięki silnym deep linkom — i ten artykuł
        może rankować lepiej niż konkurent z wyższym DR, ale słabym UR konkretnej podstrony.
      </p>

      <h2>Jak monitorować i rozwijać DR?</h2>
      <p>
        DR sprawdzasz bezpośrednio w Ahrefs — po wpisaniu domeny w Site Explorer widoczny jest aktualny DR
        wraz z historią zmian w czasie i szczegółowym raportem referring domains.
        Warto śledzić nie tylko własny DR, ale też DR konkurentów i stron, od których chcesz pozyskać linki.
      </p>
      <p>
        Wzrost DR osiągasz przez konsekwentne pozyskiwanie linków dofollow z nowych, unikalnych domen.
        Kolejne linki z tej samej domeny nie zwiększają DR — każda nowa referring domain ma znaczenie.
        Strategie budowania profilu linków to m.in. <Link href="/link-building">link building</Link>
        przez wartościowe treści, digital PR, gościnne artykuły i cytowania eksperckie.
        Eliminacja toksycznych linków przez <Link href="/disavow">Disavow</Link> może też pośrednio
        wspierać wzrost DR przez oczyszczenie profilu.
      </p>

      <h2>FAQ — Domain Rating</h2>

      <h3>Jaki DR jest dobry dla polskiego rynku?</h3>
      <p>
        Dla małych firm lokalnych i niszowych blogów: DR 20–35 pozwala rankować dla długoogonowych
        i lokalnych fraz. Dla serwisów konkurujących o frazy ogólnopolskie: DR 40–60 to minimum
        do walki z liderami w większości branż. Powyżej DR 60 to silne portale i duże marki.
        Benchmarkuj się zawsze względem konkurentów dla Twoich konkretnych fraz docelowych —
        nie względem abstrakcyjnych progów.
      </p>

      <h3>Czy nowa domena może szybko osiągnąć wysoki DR?</h3>
      <p>
        Szybki wzrost DR jest możliwy przez agresywny link building, ale wymaga budżetu i czasu.
        Realistycznie: osiągnięcie DR 30 od zera zajmuje 12–24 miesiące przy aktywnej pracy.
        DR 50+ to cel na 3–5 lat dla większości serwisów bez ogromnych zasobów.
        Skróty przez masowe kupowanie linków grożą penalizacją, która eliminuje cały dotychczasowy postęp.
      </p>

      <h3>Czy można zwiększyć DR bez kupowania linków?</h3>
      <p>
        Tak — i to jest właśnie cel white hat link buildingu. Tworzenie treści, do których inni naturalnie linkują
        (badania, narzędzia, wyczerpujące poradniki), digital PR, budowanie relacji z dziennikarzami
        i portalami branżowymi, wypowiedzi eksperckie — to wszystko metody pozyskiwania linków
        bez naruszania wytycznych Google.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest Domain Rating (DR)?",
            "acceptedAnswer": { "@type": "Answer", "text": "Domain Rating to metryka Ahrefs (0–100) mierząca siłę profilu linków zewnętrznych domeny. Oparta na liczbie i jakości unikalnych referring domains z linkami dofollow. Aktualizowana praktycznie w trybie ciągłym." } },
          { "@type": "Question", "name": "Jaka jest różnica między DR a DA?",
            "acceptedAnswer": { "@type": "Answer", "text": "DR (Ahrefs) skupia się na referring domains i jest aktualizowany niemal real-time. DA (Moz) uwzględnia szerszy zestaw czynników i aktualizowany jest co miesiąc. Ahrefs ma większy i aktualniejszy indeks backlinków, przez co DR jest często traktowane jako bardziej wiarygodne." } }
        ]
      }) }} />
    </div>
  );
}
