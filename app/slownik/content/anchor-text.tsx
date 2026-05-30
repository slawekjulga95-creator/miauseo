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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span className="text-[15px] text-zinc-600 leading-relaxed">{children}</span>
    </li>
  );
}

export default function AnchorText() {
  return (
    <div className="prose-blog">

      <h2>Definicja anchor text</h2>
      <p>
        <strong>Anchor text</strong> (tekst kotwicy) to widoczny, klikalny tekst hiperłącza — to, co użytkownik
        widzi i klika zamiast surowego adresu URL. W kodzie HTML wygląda tak:
      </p>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
        {`<a href="/pozycjonowanie">pozycjonowanie lokalne</a>`}
      </pre>
      <p>
        W powyższym przykładzie anchor text to „pozycjonowanie lokalne". Dla wyszukiwarek jest to
        jeden z kluczowych sygnałów informujących o tematyce strony, do której prowadzi link.
        Dla użytkownika to wskazówka, czego może się spodziewać po kliknięciu.
      </p>

      <h2>Rodzaje anchor text — przegląd typów</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Siła SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ryzyko</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-semibold text-ink">Exact match</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„pozycjonowanie Kraków"</td>
              <td className="p-4 text-zinc-600">Bardzo wysoka</td>
              <td className="p-4 text-red-500 font-medium">Wysokie (over-optimization)</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Partial match</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„usługi pozycjonowania lokalnego"</td>
              <td className="p-4 text-zinc-600">Wysoka</td>
              <td className="p-4 text-yellow-600 font-medium">Niskie–średnie</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Branded</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„MiauSEO", „Agencja XYZ"</td>
              <td className="p-4 text-zinc-600">Średnia</td>
              <td className="p-4 text-green-600 font-medium">Brak</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Naked URL</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„miauseo.pl"</td>
              <td className="p-4 text-zinc-600">Niska–średnia</td>
              <td className="p-4 text-green-600 font-medium">Brak</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Generic</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„kliknij tutaj", „więcej info"</td>
              <td className="p-4 text-zinc-600">Minimalna</td>
              <td className="p-4 text-green-600 font-medium">Brak</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">LSI / Semantic</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">„jak poprawić widoczność w Maps"</td>
              <td className="p-4 text-zinc-600">Wysoka, naturalna</td>
              <td className="p-4 text-green-600 font-medium">Brak</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold text-ink">Image alt (anchor)</td>
              <td className="p-4 text-zinc-600 font-mono text-xs">Alt obrazu klikalnego</td>
              <td className="p-4 text-zinc-600">Średnia</td>
              <td className="p-4 text-green-600 font-medium">Brak</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak Google interpretuje anchor text?</h2>
      <p>
        Google używa anchor textu jako sygnału kontekstowego — zarówno do zrozumienia tematyki linkowanej strony,
        jak i do oceny naturalności profilu linków. Algorytm <Link href="/penguin">Penguin</Link> (od 2012 roku,
        działający w czasie rzeczywistym od 2016) aktywnie wykrywa profile linków z nadmierną liczbą exact-match anchors.
      </p>
      <p>
        Upraszczając: jeśli 80% <Link href="/backlink">backlinków</Link> do strony o pozycjonowaniu
        używa anchora „pozycjonowanie stron Warszawa" — to jest to sygnał nienaturalności.
        Naturalne profile linków mają różnorodny mix: anchor brandowy, genericowy, LSI, naked URL.
        Wygląda to jak organiczne, niezainscenizowane linkowanie.
      </p>

      <InfoBox>
        <strong>Reguła różnorodności anchor textu:</strong> Naturalny profil linków dla małego i średniego biznesu wygląda mniej więcej tak: 40–50% anchor brandowy lub naked URL, 20–30% generic (kliknij, czytaj więcej, sprawdź), 20–30% LSI / semantic, 5–10% partial match, maks. 1–3% exact match. To przybliżone proporcje — branża, historia domeny i kraj mają znaczenie.
      </InfoBox>

      <h2>Anchor text w internal linkingu — zasady</h2>
      <p>
        <Link href="/internal-linking">Linkowanie wewnętrzne</Link> to obszar, w którym masz pełną kontrolę
        nad anchor textami. W odróżnieniu od zewnętrznych <Link href="/backlink">backlinków</Link>, możesz
        tu świadomie i precyzyjnie dobierać kotwice. Kilka zasad:
      </p>
      <ul>
        <li><strong>Używaj opisowych anchors</strong> — zamiast „kliknij tutaj" napisz „sprawdź nasz przewodnik po audycie SEO"</li>
        <li><strong>Dopasuj anchor do tematyki linkowanej strony</strong> — link z artykułu o pozycjonowaniu lokalnym do strony o Google Business Profile powinien mieć anchor nawiązujący do GBP</li>
        <li><strong>Nie powtarzaj tego samego anchora do tej samej strony</strong> — różnorodność jest naturalna i pomaga Google lepiej zrozumieć kontekst</li>
        <li><strong>Unikaj nadużywania exact-match</strong> — nawet wewnętrznie, zbyt wiele linków z identycznym anchorem wygląda mechanicznie</li>
      </ul>

      <h2>Najczęstsze błędy w anchor text — lista</h2>
      <ul>
        <li>
          <strong>Over-optimization (nadoptymalizacja)</strong> — zbyt wiele linków zewnętrznych z exact-match anchorem.
          Powoduje sygnał nienaturalności dla algorytmu <Link href="/penguin">Penguin</Link>.
          Rozwiązanie: dywersyfikuj anchor profile i jeśli masz historyczne linki z nadmiernym exact-match,
          rozważ <Link href="/disavow">disavow</Link> toksycznych odniesień.
        </li>
        <li>
          <strong>Generic anchors wszędzie</strong> — „kliknij tutaj" i „więcej informacji" nie przekazują
          żadnej informacji SEO. Lepiej pisać: „dowiedz się jak budować autorytet domeny" — to przenosi kontekst.
        </li>
        <li>
          <strong>Brak spójności anchor text → strona</strong> — anchor sugeruje temat X, ale strona docelowa
          dotyczy tematu Y. Dezorientuje zarówno użytkownika, jak i algorytm.
        </li>
        <li>
          <strong>Linkowanie obrazów bez atrybutu alt</strong> — klikalny obraz bez alttext traktowany jest
          przez Google jak link bez anchora. Traci się potencjalny sygnał SEO.
        </li>
      </ul>

      <h2>Checklist — dobry anchor text</h2>
      <ul className="not-prose space-y-3 my-6">
        <CheckItem>Anchor text opisuje tematykę strony docelowej (użytkownik wie, co kliknie)</CheckItem>
        <CheckItem>Nie używasz exact-match anchora jako jedynego lub dominującego typu w profilu linków</CheckItem>
        <CheckItem>Linki wewnętrzne mają opisowe, zróżnicowane anchory</CheckItem>
        <CheckItem>Klikalny obrazek ma wypełniony atrybut alt (= anchor text dla Google)</CheckItem>
        <CheckItem>Profil linków zewnętrznych ma mix: branded, generic, LSI, partial match, naked URL</CheckItem>
        <CheckItem>Anchor jest naturalnie wkomponowany w treść zdania, nie wyglada jak wstawiony na siłę</CheckItem>
      </ul>

      <h2>FAQ — Anchor Text</h2>

      <h3>Ile exact-match anchors jest bezpieczne?</h3>
      <p>
        Nie ma jednej liczby — zależy od profilu całej domeny, historii, branży i konkurencji.
        Orientacyjnie: dla nowych domen poniżej 5% wszystkich anchors. Dla silnych brandów może być więcej,
        bo Google rozumie, że naturalne linki do popularnej marki często zawierają jej nazwę lub główną frazę.
        Monitoruj profil anchors w Ahrefs lub Semrush.
      </p>

      <h3>Czy anchor text z nofollow linku ma znaczenie SEO?</h3>
      <p>
        Link z atrybutem <Link href="/nofollow">nofollow</Link> nie przekazuje bezpośrednio autorytetu (link juice).
        Ale Google traktuje nofollow jako wskazówkę, nie absolutną regułę — i może uwzględniać kontekst linku
        (w tym anchor text) przy ocenie trafności strony. Dla diversyfikacji profilu linków nofollow anchors
        nadal mają wartość.
      </p>

      <h3>Czym jest anchor text w kontekście internal linkingu a outbound linkingu?</h3>
      <p>
        W <Link href="/internal-linking">internal linkingu</Link> masz pełną kontrolę nad anchorem — możesz
        i powinieneś używać opisowych, trafnych anchors. W <Link href="/link-building">link buildingu</Link>
        zewnętrznym nie zawsze kontrolujesz, co napisze linkujący — dlatego warto prosić o konkretny anchor
        przy gościnnych artykułach, ale akceptować naturalną różnorodność.
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
                "name": "Ile exact-match anchors jest bezpieczne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Orientacyjnie poniżej 5% wszystkich anchors dla nowych domen. Zależy od historii domeny, branży i profilu konkurencji. Monitoruj profil anchors regularnie w Ahrefs lub Semrush."
                }
              },
              {
                "@type": "Question",
                "name": "Czy anchor text z nofollow linku ma znaczenie SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Link nofollow nie przekazuje bezpośrednio autorytetu, ale Google traktuje go jako wskazówkę, nie regułę absolutną. Anchor text z nofollow nadal może mieć kontekstowe znaczenie i pomaga w dywersyfikacji profilu linków."
                }
              },
              {
                "@type": "Question",
                "name": "Jaki anchor text jest najlepszy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Najlepszy anchor text jest opisowy, naturalnie wkomponowany w zdanie i informuje użytkownika o tematyce strony docelowej. Optymalny profil linkowy to mix anchors branded, generic, LSI, partial match i naked URL."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
