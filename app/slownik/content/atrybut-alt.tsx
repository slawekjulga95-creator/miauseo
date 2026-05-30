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

export default function AtrybytAlt() {
  return (
    <div className="prose-blog">

      <h2>Problem: wyszukiwarki i czytniki ekranu nie „widzą" obrazów</h2>
      <p>
        Dla człowieka obraz mówi sam za siebie — zdjęcie śrubokręta natychmiast komunikuje narzędzie.
        Ale <Link href="/crawlowanie">Googlebot</Link> nie analizuje pikseli tak jak ludzki mózg (przynajmniej nie w 100%).
        Podobnie czytnik ekranu używany przez osoby niewidome lub słabowidzące nie „widzi" obrazu —
        odczytuje tylko tekst. Jeśli obraz nie ma opisu, czytnik pomija go lub mówi tylko „obraz".
      </p>
      <p>
        Atrybut <strong>alt</strong> (alternative text, tekst alternatywny) rozwiązuje ten problem:
        dostarcza tekstowy opis zawartości obrazu, który może być odczytany zarówno przez algorytmy Google,
        jak i przez technologie asystujące. To jeden z tych elementów <Link href="/on-page-seo">on-page SEO</Link>,
        który jednocześnie poprawia widoczność w wyszukiwarkach i dostępność strony (accessibility).
      </p>

      <h2>Czym dokładnie jest atrybut alt?</h2>
      <p>
        Atrybut <strong>alt</strong> to atrybut HTML znacznika <code>&lt;img&gt;</code>.
        W kodzie wygląda tak:
      </p>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
        {`<img src="pozycjonowanie-lokalne.jpg" alt="Mapa Google z wyróżnionym Local Pack dla frazy mechanik Kraków" />`}
      </pre>
      <p>
        Tekst w atrybucie alt pełni cztery funkcje jednocześnie:
      </p>
      <ul>
        <li><strong>Opis dla Googlebota</strong> — pomaga robotowi zrozumieć, co przedstawia obraz i jaki ma kontekst na stronie</li>
        <li><strong>Tekst dla czytników ekranu</strong> — osoby korzystające z technologii asystujących słyszą ten tekst</li>
        <li><strong>Tekst zastępczy</strong> — wyświetla się w przeglądarce, gdy obraz nie może się załadować (np. zerwane połączenie)</li>
        <li><strong>Kontekst dla Google Images</strong> — strony z dobrze opisanymi obrazami pojawiają się w graficznych wynikach wyszukiwania</li>
      </ul>

      <h2>Jak pisać dobry atrybut alt? Zasady i przykłady</h2>
      <p>
        Dobry alt text to zdanie (lub zwięzłe wyrażenie), które opisuje <em>co jest na obrazie</em>
        i — jeśli to naturalne — zawiera powiązane słowo kluczowe. Kilka zasad:
      </p>

      <h3>Zasada 1: Opisuj zawartość, nie interpretację</h3>
      <p>
        Alt text powinien opisywać to, co widać — nie co autor chce, żeby obraz komunikował.
        Zdjęcie kobiety przy laptopie to „Kobieta pracująca przy laptopie z otwartym panelem Google Search Console"
        — nie „sukces w SEO" czy „marketing internetowy".
      </p>

      <h3>Zasada 2: Naturalnie wpleć słowo kluczowe (bez keyword stuffing)</h3>
      <p>
        Jeśli artykuł dotyczy pozycjonowania lokalnego, alt text zdjęcia wyników Google Maps może brzmieć:
        „Wyniki Google Maps z Local Pack dla zapytania »hydraulik Warszawa«".
        Słowo kluczowe jest obecne, ale nie na siłę — opisuje dosłownie to, co pokazuje obraz.
        Nie rób: „pozycjonowanie lokalne SEO Google Maps Warszawa hydraulik optymalizacja" — to keyword stuffing.
      </p>

      <h3>Zasada 3: Odpowiednia długość</h3>
      <p>
        Większość specjalistów SEO rekomenduje alt text krótszy niż 125 znaków.
        To nie jest techniczne ograniczenie HTML — to praktyczna sugestia wynikająca z możliwości czytników ekranu.
        Dłuższe opisy można umieścić w atrybucie <code>longdesc</code> lub w otaczającym tekście / <code>figcaption</code>.
      </p>

      <h3>Zasada 4: Nie zaczynaj od „Zdjęcie/Obraz..."</h3>
      <p>
        Czytniki ekranu automatycznie informują użytkownika, że odczytują obraz. Prefix „Zdjęcie prezentujące..."
        jest więc redundantny — zacznij od razu od opisu: „Mechanik naprawiający silnik..."
      </p>

      <h2>Różne typy obrazów — jak pisać alt text?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ obrazu</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Dobry alt text</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zły alt text</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Zdjęcie produktowe</td>
              <td className="p-4 text-zinc-600">„Wiertarka Bosch GSB 18V-55 z akumulatorem 4Ah"</td>
              <td className="p-4 text-zinc-600">„wiertarka", „image.jpg"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Infografika</td>
              <td className="p-4 text-zinc-600">„Infografika: 5 kroków audytu SEO — schemat blokowy"</td>
              <td className="p-4 text-zinc-600">„SEO infografika steps optimize"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Screenshot narzędzia</td>
              <td className="p-4 text-zinc-600">„Google Search Console – raport wydajności z wykresem kliknięć"</td>
              <td className="p-4 text-zinc-600">„screenshot", „narzędzie Google"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Dekoracyjny / ikona</td>
              <td className="p-4 text-zinc-600"><code>alt=""</code> (pusty! celowo puste)</td>
              <td className="p-4 text-zinc-600">„strzałka wskazująca w prawo"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Logo firmy</td>
              <td className="p-4 text-zinc-600">„Logo MiauSEO – agencja pozycjonowania"</td>
              <td className="p-4 text-zinc-600">„logo", „logo1.png"</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Zdjęcie zespołu</td>
              <td className="p-4 text-zinc-600">„Zespół agencji MiauSEO podczas spotkania warsztatowego"</td>
              <td className="p-4 text-zinc-600">„team", „people smiling"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Obrazy dekoracyjne mają pusty alt:</strong> Jeśli obraz jest czysto dekoracyjny (np. tło sekcji, separator graficzny), użyj <code>alt=""</code>. Czytniki ekranu pomijają takie elementy — co jest prawidłowe. Nigdy nie pomijaj atrybutu alt całkowicie — brak atrybutu to błąd, pusty alt to świadoma decyzja.
      </InfoBox>

      <h2>Atrybut alt a pozycjonowanie — jak pomaga SEO?</h2>
      <p>
        Google stale ulepsza rozumienie obrazów przez AI (Google Lens, modele wizji komputerowej),
        ale alt text i kontekst otaczającego tekstu wciąż mają znaczenie dla:
      </p>
      <ul>
        <li>
          <strong>Rankingu w Google Images</strong> — strony z dobrze opisanymi obrazami pojawiają się w
          graficznych wynikach dla powiązanych fraz. Dla branż wizualnych (e-commerce, wnętrza, jedzenie)
          ruch z Google Images może być znaczący.
        </li>
        <li>
          <strong>Wzmacniania sygnałów on-page</strong> — alt text z trafną frazą kluczową to dodatkowy sygnał
          na poziomie strony. Nie zastąpi dobrego H1 ani treści, ale uzupełnia obraz semantyczny strony.
        </li>
        <li>
          <strong>Dostępności i E-E-A-T</strong> — strony niedostępne (brak alt textów) mogą być niżej oceniane
          w kontekście <Link href="/e-e-a-t">E-E-A-T</Link>, zwłaszcza w sektorach zdrowia, finansów i prawa
          (Your Money Your Life — YMYL).
        </li>
        <li>
          <strong>Core Web Vitals</strong> — obrazy bez zdefiniowanych wymiarów (width/height) powodują
          Layout Shift (CLS). Choć to oddzielny atrybut, alt text jest często poprawiany razem z wymiarami
          podczas audytu <Link href="/technical-seo">technical SEO</Link>.
        </li>
      </ul>

      <h2>Jak sprawdzić alt texty na swojej stronie?</h2>
      <ul>
        <li><strong>Google Search Console</strong> → Enhancements → sprawdź błędy strukturalne</li>
        <li><strong>Narzędzia deweloperskie Chrome</strong> → Accessibility → Images (sprawdza alt dla dostępności)</li>
        <li><strong>Screaming Frog SEO Spider</strong> → Images → filtr „Missing Alt Text" lub „Alt Text Over X Chars"</li>
        <li><strong>Ahrefs Site Audit / Semrush</strong> → On-Page → Images Issues</li>
        <li><strong>WAVE (WebAIM)</strong> — bezpłatne narzędzie online sprawdzające dostępność strony</li>
      </ul>

      <h2>FAQ — Atrybut Alt</h2>

      <h3>Czy brak atrybutu alt to błąd SEO?</h3>
      <p>
        Tak — i to w podwójnym sensie. Po pierwsze, Google nie może zrozumieć zawartości obrazu bez alt text.
        Po drugie, brak atrybutu alt (nie mylić z pustym alt!) to błąd walidacji HTML i problem z dostępnością
        (WCAG 2.1, kryterium 1.1.1). Narzędzia audytowe jak Screaming Frog flagują go jako błąd krytyczny.
      </p>

      <h3>Ile słów kluczowych mogę wstawić do alt textu?</h3>
      <p>
        Tyle, ile naturalnie pasuje do opisu obrazu — czyli zazwyczaj zero lub jedno.
        Alt text to opis obrazu, nie pole na słowa kluczowe. Upychanie fraz w alt textach
        (keyword stuffing) jest wykrywane przez algorytm Google i może zaszkodzić rankingowi.
      </p>

      <h3>Czy alt text wpływa na szybkość strony?</h3>
      <p>
        Bezpośrednio nie — to tylko tekst w kodzie HTML. Ale audyt alt textów często idzie w parze
        z optymalizacją obrazów (kompresja, format WebP/AVIF, lazy loading) — a to ma realny wpływ
        na <Link href="/page-speed">szybkość strony</Link> i <Link href="/core-web-vitals">Core Web Vitals</Link>.
      </p>

      <h3>Jak pisać alt text dla obrazów w galeriach e-commerce?</h3>
      <p>
        Każde zdjęcie produktu powinno mieć unikalny alt text zawierający: nazwę produktu, wariant (kolor/rozmiar
        jeśli istotny), ewentualnie markę. Na przykład: „Buty Nike Air Max 90 kolor biały rozmiar 42 — widok z boku".
        Unikaj powielania identycznego alt textu dla wielu zdjęć tego samego produktu.
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
                "name": "Czy brak atrybutu alt to błąd SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak. Brak atrybutu alt uniemożliwia Google zrozumienie zawartości obrazu i jest błędem HTML powodującym problemy z dostępnością (WCAG 2.1). Pusty alt (alt='') jest prawidłowy dla obrazów dekoracyjnych."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długi powinien być alt text?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rekomenduje się poniżej 125 znaków. To wynika z możliwości czytników ekranu, nie z technicznego limitu HTML. Dłuższe opisy możesz umieścić w figcaption lub w otaczającym tekście."
                }
              },
              {
                "@type": "Question",
                "name": "Czy obrazy dekoracyjne potrzebują alt textu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Obrazy czysto dekoracyjne powinny mieć pusty alt (alt=''), dzięki czemu czytniki ekranu je pomijają. Nigdy nie pomijaj całkowicie atrybutu alt — to błąd HTML."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
