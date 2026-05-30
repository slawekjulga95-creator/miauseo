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

export default function Breadcrumbs() {
  return (
    <div className="prose-blog">

      <h2>Czym są Breadcrumbs?</h2>
      <p>
        <strong>Breadcrumbs</strong> (nawigacja okruszkowa, ścieżka nawigacyjna) to element interfejsu strony,
        który wizualizuje hierarchię struktury witryny i pokazuje użytkownikowi, gdzie w tej strukturze aktualnie
        się znajduje. Nazwa pochodzi od bajki o Jasiu i Małgosi, którzy zostawiali okruszki chleba
        żeby znaleźć drogę do domu — breadcrumbs na stronie pełnią analogiczną funkcję.
      </p>
      <p>
        Typowy breadcrumb wygląda tak: <strong>Strona główna → Kategoria → Podkategoria → Artykuł</strong>.
        Każdy element poza ostatnim (bieżącą stroną) jest klikalnym linkiem.
        Użytkownik jednym kliknięciem może cofnąć się do dowolnego punktu hierarchii,
        nie używając przycisku „wstecz" ani głównej nawigacji.
      </p>

      <h2>Rodzaje breadcrumbów</h2>
      <p>
        W praktyce wyróżnia się trzy główne typy nawigacji okruszkowej, dobierane zależnie od architektury witryny.
      </p>
      <p>
        <strong>Breadcrumbs hierarchiczne (lokalizacyjne)</strong> — najpopularniejszy typ, pokazujący miejsce
        bieżącej strony w stałej hierarchii kategorii. Sprawdzają się w e-commerce, blogach i serwisach
        informacyjnych z głęboką strukturą katalogową. Przykład: Sklep → Elektronika → Laptopy → Lenovo ThinkPad.
      </p>
      <p>
        <strong>Breadcrumbs atrybutowe</strong> — zamiast hierarchii kategorii pokazują zestaw filtrów lub cech
        wybranych przez użytkownika. Używane w serwisach z faceted navigation (sklepy z filtrami),
        gdzie ta sama strona może być dostępna przez wiele ścieżek. Przykład: Laptopy → Marka: Lenovo → RAM: 16GB.
      </p>
      <p>
        <strong>Breadcrumbs historyczne (ścieżki nawigacji)</strong> — odzwierciedlają faktyczną trasę kliknięć
        użytkownika, nie strukturę witryny. Rzadko stosowane, bo dezorientują bardziej niż pomagają —
        każdy użytkownik widzi inny breadcrumb. Niemal nigdy nie jest to właściwy wybór.
      </p>

      <h2>Dlaczego breadcrumbs mają znaczenie dla SEO?</h2>
      <p>
        Z perspektywy <Link href="/on-page-seo">on-page SEO</Link>, breadcrumbs przynoszą kilka konkretnych korzyści.
      </p>
      <p>
        <strong>Ułatwiają crawlowanie i indeksowanie</strong> — każdy breadcrumb to sieć wewnętrznych linków
        prowadzących do wyższych poziomów hierarchii. <Link href="/googlebot">Googlebot</Link> łatwiej odkrywa
        i indeksuje strony, do których prowadzą kontekstualne, hierarchiczne linki.
        W głębokich strukturach e-commerce (kategoria → podkategoria → produkty) breadcrumby są często jedyną
        ścieżką, którą robot może podążyć od produktu do strony głównej.
      </p>
      <p>
        <strong>Dystrybucja autorytetu</strong> — linki w breadcumbach przekazują <Link href="/link-juice">link juice</Link>
        w górę hierarchii. Strona produktowa linkuje do podkategorii, podkategoria do kategorii,
        kategoria do strony głównej. To naturalny flow autorytetu od stron liściowych do węzłowych.
      </p>
      <p>
        <strong>Breadcrumby w SERP jako Rich Snippet</strong> — Google często wyświetla ścieżkę breadcrumb
        zamiast pełnego URL pod tytułem wyniku wyszukiwania. Zamiast nieczytelnego adresu jak
        <em>sklep.pl/kategoria/id=1234</em> użytkownik widzi <em>Sklep → Elektronika → Laptopy</em>.
        Czytelniejszy snippet poprawia <Link href="/ctr">CTR</Link> w wynikach organicznych.
      </p>
      <p>
        <strong>UX i redukcja bounce rate</strong> — użytkownicy trafiający na stronę produktu lub artykułu
        bezpośrednio z wyszukiwarki (bez przechodzenia przez stronę główną) mają kontekst: wiedzą gdzie są
        i jak wrócić do szerszej kategorii. To redukuje frustrację i zmniejsza
        <Link href="/bounce-rate"> wskaźnik odrzuceń</Link>.
      </p>

      <h2>Jak wdrożyć breadcrumby z danymi strukturalnymi</h2>
      <p>
        Sama wizualna nawigacja okruszkowa to dobry start, ale żeby Google mogło wyświetlać breadcrumby
        w wynikach wyszukiwania, potrzebne są <Link href="/schema-markup">dane strukturalne (Schema Markup)</Link>
        w formacie <Link href="/json-ld">JSON-LD</Link>.
      </p>
      <pre className="not-prose bg-zinc-900 text-zinc-100 rounded-xl p-4 text-sm font-mono overflow-x-auto my-6">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna",
      "item": "https://example.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Elektronika",
      "item": "https://example.com/elektronika/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Laptopy",
      "item": "https://example.com/elektronika/laptopy/"
    }
  ]
}
</script>`}
      </pre>

      <InfoBox>
        <strong>CMS i frameworki mają wtyczki:</strong> WordPress z Yoast SEO lub Rank Math generuje breadcrumb schema automatycznie. Next.js, Nuxt i inne frameworki mają biblioteki do generowania JSON-LD (np. <code>schema-dts</code>). Ręczne kodowanie jest konieczne tylko w przypadku niestandardowych implementacji.
      </InfoBox>

      <h2>Najczęstsze błędy przy wdrożeniu breadcrumbów</h2>
      <p>
        <strong>Brak linku do bieżącej strony</strong> — ostatni element breadcrumbu (bieżąca strona) nie powinien
        być linkiem — to właśnie element, na którym aktualnie jesteś. Klikalne linki prowadzą do elementów wyżej w hierarchii.
      </p>
      <p>
        <strong>Niezgodność między HTML a JSON-LD</strong> — widoczny breadcrumb i dane strukturalne muszą
        być spójne. Google może zignorować schema, jeśli znacząco różni się od tego, co widzi użytkownik.
        Waliduj schema regularnie w Google Rich Results Test.
      </p>
      <p>
        <strong>Zbyt głęboka lub błędna hierarchia</strong> — breadcrumb powinien odzwierciedlać faktyczną
        strukturę URL i kategorii, nie być generowany dynamicznie na podstawie historii kliknięć użytkownika.
        Dla stron dostępnych przez wiele ścieżek (faceted navigation) wybierz jedną kanoniczną ścieżkę
        i użyj <Link href="/canonical-url">canonical URL</Link>.
      </p>

      <h2>FAQ — Breadcrumbs</h2>

      <h3>Czy breadcrumby są obowiązkowe dla SEO?</h3>
      <p>
        Nie są obowiązkowe technicznie, ale są silnie rekomendowane dla stron z głęboką strukturą.
        Dla prostych witryn z płaską hierarchią (strona główna + kilka podstron) breadcrumby mogą być zbędne.
        Dla e-commerce, portali z artykułami i rozbudowanych serwisów — to praktycznie standard.
      </p>

      <h3>Czy breadcrumby zawsze pojawiają się w wynikach Google?</h3>
      <p>
        Nie — Google decyduje samodzielnie, kiedy wyświetlić breadcrumb zamiast URL.
        Dane strukturalne BreadcrumbList zwiększają szansę na wyświetlenie, ale nie gwarantują tego.
        Google może też wyświetlić własną interpretację struktury URL, jeśli uzna ją za bardziej trafną.
      </p>

      <h3>Jak breadcrumby wpływają na mobile SEO?</h3>
      <p>
        Na urządzeniach mobilnych breadcrumby mają szczególne znaczenie: ekran jest mały,
        a użytkownicy często trafiają bezpośrednio na stronę produktu czy artykułu z wyszukiwarki.
        Bez breadcrumbu nie wiedzą, jak nawigować głębiej. <Link href="/mobile-first-indexing">Mobile-first indexing</Link>
        oznacza, że Google ocenia stronę przez pryzmat wersji mobilnej — breadcrumby muszą być
        poprawnie wyświetlane i funkcjonalne na małych ekranach.
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
                "name": "Czy breadcrumby są obowiązkowe dla SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie są obowiązkowe, ale są silnie rekomendowane dla stron z głęboką strukturą: e-commerce, portale z artykułami, rozbudowane serwisy. Dla prostych witryn z płaską hierarchią mogą być zbędne."
                }
              },
              {
                "@type": "Question",
                "name": "Czy breadcrumby zawsze pojawiają się w wynikach Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — Google decyduje samodzielnie kiedy wyświetlić breadcrumb. Dane strukturalne BreadcrumbList zwiększają szansę, ale jej nie gwarantują. Google może też wyświetlić własną interpretację struktury URL."
                }
              },
              {
                "@type": "Question",
                "name": "Jak wdrożyć breadcrumby w WordPress?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wtyczki Yoast SEO i Rank Math generują breadcrumb schema automatycznie po włączeniu funkcji breadcrumb w ustawieniach. Wystarczy umieścić funkcję breadcrumb w szablonie motywu lub użyć shortcodu."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
