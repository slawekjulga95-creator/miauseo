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

export default function DeepLinking() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Deep Linking?</h2>
      <p>
        <strong>Deep linking</strong> (głębokie linkowanie) to praktyka kierowania hiperłączy bezpośrednio
        do konkretnych podstron witryny — artykułów, stron produktowych, kategorii, poradników —
        zamiast wyłącznie do strony głównej. Termin „głębokie" odnosi się do głębokości w hierarchii serwisu:
        link prowadzący do <em>sklep.pl/kategoria/podkategoria/produkt</em> jest głębszy niż link do <em>sklep.pl</em>.
      </p>
      <p>
        W kontekście <Link href="/seo">SEO</Link> deep linking jest strategicznym elementem zarówno
        <Link href="/link-building"> link buildingu</Link> zewnętrznego, jak i
        <Link href="/internal-linking"> linkowania wewnętrznego</Link>. Serwis, do którego wszystkie linki
        zewnętrzne prowadzą tylko do strony głównej, ma problem z dystrybucją autorytetu — cały
        <Link href="/link-juice">link juice</Link> kumuluje się w jednym miejscu, a podstrony
        nie otrzymują wsparcia z zewnątrz.
      </p>

      <h2>Dlaczego Google nagradza głębokie linkowanie?</h2>
      <p>
        Naturalny profil linków prowadzących do witryny zawiera różnorodne docelowe URL.
        Gdy portal branżowy cytuje konkretny artykuł, link prowadzi do tego artykułu — nie do strony głównej redakcji.
        Gdy użytkownik udostępnia produkt, linkuje bezpośrednio do produktu. To jest naturalne zachowanie.
        Profil złożony wyłącznie z linków do strony głównej sygnalizuje Googlebotowi jedną z dwóch rzeczy:
        albo witryna ma bardzo płytką strukturę, albo ktoś sztucznie buduje linki i nie zadał sobie trudu
        zróżnicowania docelowych URL.
      </p>
      <p>
        Głębokie linki zewnętrzne wzmacniają autorytet konkretnych podstron, co bezpośrednio przekłada się
        na ich widoczność organiczną. Strona produktowa z 5 wartościowymi <Link href="/backlink">backlinkami</Link>
        zewnętrznymi rankuje znacznie lepiej niż identyczna strona bez wsparcia linkowego —
        nawet jeśli obie mają taką samą treść.
      </p>

      <h2>Deep linking wewnętrzny — dystrybucja autorytetu</h2>
      <p>
        W <Link href="/internal-linking">linkowaniu wewnętrznym</Link> deep linking polega na budowaniu
        sieci linków między podstronami z uwzględnieniem ich znaczenia strategicznego.
        Strona główna naturalnie zbiera autorytet z linków zewnętrznych — zadaniem deep linkingu wewnętrznego
        jest przepompowanie go do głębszych, kluczowych podstron przez przemyślane wewnętrzne linki.
      </p>
      <p>
        Klasyczny błąd wielu serwisów to nawigacja linkująca wyłącznie do głównych kategorii
        (poziom 2 hierarchii), podczas gdy strony produktowe i artykuły (poziom 3 i 4) pozostają
        „zakopane" bez wsparcia wewnętrznego. Google może mieć trudności z oceną ich znaczenia
        i przypisaniem odpowiedniego autorytetu, co ogranicza ich widoczność organiczną.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Strategia linkowania</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Efekt SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Tylko do strony głównej</td>
              <td className="p-4 text-zinc-600">Autorytet kumuluje się na home — podstrony słabe</td>
              <td className="p-4 text-zinc-600">Nieefektywne dla dużych serwisów</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Deep linking zewnętrzny (do podstron)</td>
              <td className="p-4 text-zinc-600">Autorytet trafia bezpośrednio do kluczowych URL</td>
              <td className="p-4 text-zinc-600">Link building, PR, artykuły eksperckie</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Deep linking wewnętrzny (silo)</td>
              <td className="p-4 text-zinc-600">Spójna dystrybucja autorytetu przez hierarchię</td>
              <td className="p-4 text-zinc-600">Architektura informacji, klastry tematyczne</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Mix home + deep</td>
              <td className="p-4 text-zinc-600">Naturalny profil — najlepszy sygnał dla Google</td>
              <td className="p-4 text-zinc-600">Organiczne pozyskiwanie linków</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Deep linking a crawlowanie i indeksowanie</h2>
      <p>
        <Link href="/googlebot">Googlebot</Link> odkrywa strony podążając za linkami.
        Głębokie linkowanie — zarówno zewnętrzne jak i wewnętrzne — tworzy ścieżki odkrywania
        dla robotów Google prowadzące do stron głęboko schowanych w hierarchii serwisu.
        Bez tych ścieżek podstrony mogą stać się <strong>orphan pages</strong> — stronami, do których
        nie prowadzi żaden link, praktycznie niewidocznymi dla
        <Link href="/crawlowanie"> Googlebota</Link> i niemożliwymi do
        <Link href="/indeksowanie">zindeksowania</Link>.
      </p>

      <InfoBox>
        <strong>Deep linking a sitemap XML:</strong> <Link href="/sitemap-xml">Sitemap XML</Link> to uzupełnienie, nie substytut deep linkingu. Sitemap informuje Google o istnieniu URL, ale nie przekazuje sygnałów autorytetu. Linki przekazują autorytet — sitemap jedynie wskazuje drogę. Obie metody razem dają najlepszy efekt dla indeksowania rozbudowanych serwisów.
      </InfoBox>

      <h2>Jak wdrożyć deep linking w praktyce?</h2>
      <p>
        <strong>Audyt obecnego profilu linków</strong> — sprawdź w Ahrefs lub Semrush, do jakich URL
        prowadzą linki zewnętrzne. Jeśli ponad 80% linków trafia do strony głównej, masz potencjał
        do rozbudowy deep linkingu przez PR, guest posting i linkable assets tworzone z myślą
        o konkretnych podstronach (artykułach eksperckich, narzędziach, kalkulatorach).
      </p>
      <p>
        <strong>Budowanie wewnętrznej sieci linków</strong> — w artykułach blogowych naturalnie linkuj
        do powiązanych podstron i produktów. W sekcjach „powiązane artykuły" i „podobne produkty"
        używaj deep linków zamiast ogólnych odsyłaczy do kategorii. Każdy nowo opublikowany artykuł
        powinien otrzymać co najmniej 2–3 linki wewnętrzne ze starszych, autorytatywnych stron.
      </p>
      <p>
        <strong>Linkowanie w zewnętrznych publikacjach</strong> — przy guest postingu i artykułach eksperckich
        wskazuj konkretne zasoby swojej witryny (poradniki, badania, narzędzia) jako naturalne odniesienia
        w treści, zamiast ogólnie linkować do strony głównej lub strony usługowej.
      </p>

      <h2>FAQ — Deep Linking</h2>

      <h3>Czy deep linking ma znaczenie dla małych stron?</h3>
      <p>
        Dla bardzo małych serwisów (5–10 stron) deep linking ma mniejsze znaczenie, bo hierarchia jest płaska
        i Googlebot bez problemu dociera do wszystkich stron. Znaczenie rośnie proporcjonalnie do rozbudowania
        serwisu — dla blogów z setkami artykułów i sklepów z tysiącami produktów jest to kwestia krytyczna.
      </p>

      <h3>Ile deep linków zewnętrznych potrzebuje kluczowa podstrona?</h3>
      <p>
        Nie ma jednej liczby — zależy od konkurencyjności frazy i autorytetu konkurentów.
        Sprawdź w Ahrefs, ile linków zewnętrznych mają strony z top 3 dla Twojej frazy docelowej.
        To jest benchmark, do którego powinieneś dążyć dla danej podstrony. Jedna bardzo silna
        zewnętrzna strona może być warta więcej niż dziesiątki słabych.
      </p>

      <h3>Czym deep linking różni się od link juice?</h3>
      <p>
        Deep linking to strategia — decyzja, do jakiego URL kierować linki.
        <Link href="/link-juice">Link juice</Link> to wartość i autorytet przekazywane przez link
        z jednej strony do drugiej. Deep linking jest sposobem na efektywne dystrybuowanie link juice
        do podstron, które potrzebują wsparcia rankingowego.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest deep linking w SEO?",
            "acceptedAnswer": { "@type": "Answer", "text": "Deep linking to praktyka kierowania linków zewnętrznych i wewnętrznych bezpośrednio do konkretnych podstron witryny (artykułów, produktów, kategorii), zamiast wyłącznie do strony głównej. Poprawia dystrybucję autorytetu i indeksowanie." } },
          { "@type": "Question", "name": "Dlaczego deep linking jest ważny?",
            "acceptedAnswer": { "@type": "Answer", "text": "Bez deep linkingu cały autorytet z linków zewnętrznych kumuluje się na stronie głównej, podczas gdy kluczowe podstrony nie otrzymują wsparcia rankingowego. Głębokie linki wzmacniają konkretne URL i ułatwiają Googlebotowi crawlowanie całej struktury serwisu." } }
        ]
      }) }} />
    </div>
  );
}
