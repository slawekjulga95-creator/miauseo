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

export default function DuplicateContent() {
  return (
    <div className="prose-blog">

      <h2>Czym jest Duplicate Content?</h2>
      <p>
        <strong>Duplicate content</strong> (duplikacja treści) to sytuacja, w której identyczna lub
        bardzo podobna treść pojawia się pod więcej niż jednym adresem URL — w obrębie tej samej domeny
        (duplikat wewnętrzny) lub na wielu różnych domenach (duplikat zewnętrzny).
        Google nie penalizuje automatycznie za samo istnienie duplikatów — co jest ważnym niuansem
        często pomijanym w dyskusjach SEO. Problem polega na tym, że Google musi zdecydować,
        którą wersję wyświetlić w wynikach wyszukiwania, co prowadzi do <strong>rozmycia sygnałów rankingowych</strong>
        między kilka URL zamiast ich kumulacji na jednej stronie.
      </p>
      <p>
        Według szacunków Google, duplikaty stanowią około 25–30% całego indeksowanego contentu w sieci.
        Zdecydowana większość duplikatów jest przypadkowa i techniczna — wynika z architektury CMS,
        parametrów URL, paginacji czy wielu wersji domeny — a nie z celowego działania.
      </p>

      <h2>Rodzaje duplikacji treści</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Parametry URL</td>
              <td className="p-4 text-zinc-600">/buty/ vs /buty/?sort=cena vs /buty/?kolor=czarny</td>
              <td className="p-4 text-zinc-600"><Link href="/canonical-url">Canonical URL</Link> lub blokada w GSC</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">HTTP vs HTTPS / www vs non-www</td>
              <td className="p-4 text-zinc-600">4 wersje tej samej domeny dostępne jednocześnie</td>
              <td className="p-4 text-zinc-600"><Link href="/redirect-301">Redirect 301</Link> + canonical</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Paginacja kategorii</td>
              <td className="p-4 text-zinc-600">/kategoria/, /kategoria/strona/2/, /kategoria/strona/3/</td>
              <td className="p-4 text-zinc-600">Self-referencing canonical na każdej stronie</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Wersje produktu w e-commerce</td>
              <td className="p-4 text-zinc-600">Ten sam produkt w kilku kolorach pod różnymi URL</td>
              <td className="p-4 text-zinc-600">Canonical do wersji głównej lub unikalna treść na każdej</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Syndykacja treści</td>
              <td className="p-4 text-zinc-600">Ten sam artykuł opublikowany na 3 portalach</td>
              <td className="p-4 text-zinc-600">Canonical do oryginału na syndykowanych kopiach</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Scraping (kradzież treści)</td>
              <td className="p-4 text-zinc-600">Twoja treść skopiowana przez inny serwis</td>
              <td className="p-4 text-zinc-600">Self-referencing canonical, szybsza publikacja, DMCA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Dlaczego duplikaty szkodzą SEO?</h2>
      <p>
        Google stając przed kilkoma wersjami tej samej treści musi podjąć trzy decyzje:
        którą wersję wyświetlić w wynikach (wybór wersji kanonicznej), jak rozdzielić autorytet z linków
        między zduplikowane URL i jak alokować budżet crawlowania
        (<Link href="/crawlowanie">crawl budget</Link>) — czy crawlować duplikaty kosztem cenniejszych stron.
      </p>
      <p>
        Efektem jest rozproszenie sygnałów. Jeśli do Twojego artykułu prowadzi 10 linków zewnętrznych,
        ale 5 z nich wskazuje na <em>artykul.html</em>, 3 na <em>artykul/</em> i 2 na
        <em>www.artykul.html</em> — autorytet rozkłada się na trzy wersje zamiast kumulować się
        na jednej. Ta jedna wersja, gdyby zebrała wszystkie sygnały, mogłaby rankować znacznie wyżej.
      </p>

      <InfoBox>
        <strong>Google nie penalizuje za przypadkowe duplikaty.</strong> Dokumentacja Google wyraźnie stwierdza, że duplikaty nie są same w sobie powodem do kary. Penalizacja grozi za celowe kopiowanie treści z innych domen w celu manipulacji rankingiem — co klasyfikuje się jako <Link href="/black-hat-seo">black hat SEO</Link>. Techniczna duplikacja wynikająca z architektury CMS jest normalnym zjawiskiem do zarządzania, nie problemem wymagającym paniki.
      </InfoBox>

      <h2>Jak wykryć duplikaty treści na swojej stronie?</h2>
      <p>
        <strong>Google Search Console</strong> — zakładka „Strony" → filtr „Treści zduplikowane" i
        „Strony z duplikatem bez wybranego kanonu". To najdostępniejszy punkt startowy,
        pokazujący jak Google widzi problem.
        <strong>Screaming Frog SEO Spider</strong> — crawluje witrynę i identyfikuje identyczne
        lub prawie identyczne treści przez porównanie hash treści każdej strony.
        <strong>Ahrefs Site Audit</strong> i <strong>Semrush</strong> — raporty duplikatów w pełnych
        audytach technicznych, ze wskaźnikiem podobieństwa i rekomendacjami naprawczymi.
        <strong>Copyscape</strong> — narzędzie do wykrywania zewnętrznych duplikatów (scraping)
        i sprawdzania, czy Twoja treść nie jest kopiowana przez inne serwisy.
      </p>

      <h2>Najskuteczniejsze metody naprawy duplikacji</h2>
      <p>
        <strong>Tag canonical</strong> — wskaż Google preferowaną wersję URL. Implementuj go na wszystkich
        zduplikowanych wersjach wskazując na „master" URL. To najczęstsze i najskuteczniejsze rozwiązanie
        dla parametrów URL, paginacji i wariantów produktów.
      </p>
      <p>
        <strong>Redirect 301</strong> — dla trwale zmienionych lub usuniętych wersji URL.
        Jeśli nie ma powodu żeby stara wersja URL była dostępna, przekieruj ją przez 301 na kanoniczną.
        Redirect przenosi cały autorytet i eliminuje problem duplikatu definitywnie.
      </p>
      <p>
        <strong>Blokada przez robots.txt lub noindex</strong> — dla stron, które muszą technicznie istnieć
        (np. strony wydruku, wersje dla drukarki), ale nie mają wartości dla SEO.
        Robots.txt blokuje crawlowanie, noindex blokuje indeksowanie. Obie metody mają swoje przypadki użycia.
      </p>
      <p>
        <strong>Unikalna treść na każdej wersji</strong> — dla wariantów produktów w e-commerce
        (np. ten sam laptop w różnych kolorach), najtrwalszym rozwiązaniem jest stworzenie
        unikalnych opisów dla każdego wariantu. Wymaga więcej pracy, ale eliminuje problem
        i daje każdej stronie własną wartość SEO.
      </p>

      <h2>FAQ — Duplicate Content</h2>

      <h3>Czy skopiowanie cudzej treści jest penalizowane przez Google?</h3>
      <p>
        Tak — celowe kopiowanie treści z innych serwisów w celu manipulacji rankingiem jest traktowane
        jako spam i może skutkować manualną karą. Przypadkowe duplikaty wewnętrzne wynikające z architektury
        CMS nie są penalizowane, choć powinny być naprawiane z powodów technicznych SEO.
        Właściciel oryginalnej treści może też złożyć zgłoszenie DMCA do Google, co może prowadzić
        do usunięcia kopiującej strony z indeksu.
      </p>

      <h3>Czy paginacja to problem z duplikacją treści?</h3>
      <p>
        Paginacja (strona 2, 3, 4 kategorii) może generować podobne treści na początku każdej strony,
        ale zazwyczaj nie jest poważnym problemem duplikacji — każda strona paginacji zawiera
        inne produkty lub artykuły. Właściwą praktyką jest dodanie self-referencing canonical
        na każdej stronie paginacji i upewnienie się, że Googlebot może bez problemu dotrzeć
        do wszystkich produktów przez linki wewnętrzne.
      </p>

      <h3>Czy meta description i title mogą być powodem duplikacji?</h3>
      <p>
        Powielone meta title i meta description to odrębny problem od duplicate content treści —
        nie powodują filtra duplikatu dla rankingu, ale sygnalizują Google brak optymalizacji
        i obniżają CTR w SERP (użytkownicy widzą identyczne snippety dla różnych stron).
        Google Search Console flaguje zduplikowane tagi w zakładce „Strony" jako oddzielny problem.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Czym jest duplicate content?",
            "acceptedAnswer": { "@type": "Answer", "text": "Duplicate content to identyczna lub bardzo podobna treść pojawiająca się pod więcej niż jednym URL. Google nie penalizuje automatycznie za techniczne duplikaty, ale rozmywają one sygnały rankingowe i utrudniają efektywne indeksowanie." } },
          { "@type": "Question", "name": "Jak naprawić duplikację treści?",
            "acceptedAnswer": { "@type": "Answer", "text": "Główne metody: tag canonical wskazujący na preferowaną wersję URL, redirect 301 dla trwale zmienionych adresów, noindex dla stron bez wartości SEO, lub tworzenie unikalnej treści dla każdej wersji. Wybór zależy od przyczyny duplikacji." } },
          { "@type": "Question", "name": "Czy Google penalizuje za duplicate content?",
            "acceptedAnswer": { "@type": "Answer", "text": "Techniczne duplikaty (wynikające z architektury CMS, parametrów URL) nie są penalizowane. Celowe kopiowanie cudzej treści w celu manipulacji rankingiem jest traktowane jako spam i może skutkować manualną karą lub zgłoszeniem DMCA." } }
        ]
      }) }} />
    </div>
  );
}
