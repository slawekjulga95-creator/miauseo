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

export default function Amp() {
  return (
    <div className="prose-blog">

      <h2>Czym jest AMP (Accelerated Mobile Pages)?</h2>
      <p>
        <strong>AMP</strong> (Accelerated Mobile Pages) to open-source framework stworzony przez Google
        w 2015 roku, którego celem było dramatyczne przyspieszenie ładowania stron mobilnych.
        Opierał się na trzech filarach: uproszczonym HTML (podzbiór standardowego HTML z ograniczeniami),
        asynchronicznym JavaScript (własna biblioteka AMP JS zamiast dowolnego kodu JS) oraz buforowaniu
        przez Google AMP Cache — globalną sieć CDN, która przechowuje i serwuje strony AMP bezpośrednio z serwerów Google.
      </p>
      <p>
        W szczytowym momencie popularności (2018–2020) AMP był wymagany do pojawienia się w mobilnym karuzelu
        Top Stories w Google News. Wydawcy i agencje SEO masowo wdrażali AMP, bo inaczej tracili dostęp
        do jednego z najważniejszych kanałów ruchu dla portali informacyjnych.
      </p>

      <h2>Jak działała technologia AMP?</h2>
      <p>
        Mechanizm AMP opierał się na kilku ograniczeniach i optymalizacjach jednocześnie:
      </p>
      <ul>
        <li><strong>AMP HTML</strong> — tylko dozwolone tagi i atrybuty; niedozwolone elementy (jak dowolny `&lt;script&gt;`) zastępowały komponenty AMP (np. `&lt;amp-img&gt;`, `&lt;amp-video&gt;`)</li>
        <li><strong>AMP JS</strong> — biblioteka zarządzająca renderowaniem i zasobami; gwarantowała asynchroniczne ładowanie i priorytetyzację widocznych elementów</li>
        <li><strong>Google AMP Cache</strong> — prerendering stron przed kliknięciem użytkownika; gdy przeglądałeś wyniki w Google, strony AMP były już załadowane w tle</li>
        <li><strong>Lazy loading</strong> — obrazy i inne zasoby poza widocznym ekranem ładowały się dopiero gdy były potrzebne</li>
      </ul>

      <InfoBox>
        <strong>Efekt szybkości był realny:</strong> W testach z 2018 roku strony AMP ładowały się średnio w 0,5–1 sekundy, podczas gdy ich odpowiedniki mobilne — w 3–7 sekund. Ta różnica miała bezpośredni wpływ na <Link href="/bounce-rate">wskaźnik odrzuceń</Link> i konwersje dla wydawców mobilnych.
      </InfoBox>

      <h2>Stan AMP w 2025–2026 — co się zmieniło?</h2>
      <p>
        Sytuacja AMP zmieniła się fundamentalnie. W 2021 roku Google ogłosiło, że <strong>AMP nie jest już
        wymagane do pojawienia się w Top Stories</strong>. Zamiast tego, do karuzelowego wyniku wystarczy
        spełnić standardy <Link href="/core-web-vitals">Core Web Vitals</Link> (LCP, INP, CLS).
        To de facto wyrok śmierci na AMP jako obligatoryjny standard — bo jego jedyną prawdziwą „nagrodą"
        był dostęp do Top Stories.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">AMP (2015–2020)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Core Web Vitals (2021+)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-medium text-ink">Wymagania wdrożenia</td>
              <td className="p-4 text-zinc-600">Osobna wersja strony w AMP HTML</td>
              <td className="p-4 text-zinc-600">Optymalizacja istniejącej strony</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Swoboda projektowania</td>
              <td className="p-4 text-zinc-600">Silnie ograniczona (własne tagi AMP)</td>
              <td className="p-4 text-zinc-600">Pełna swoboda</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Kontrola URL</td>
              <td className="p-4 text-zinc-600">URL serwowany z domeny Google (cdn.ampproject.org)</td>
              <td className="p-4 text-zinc-600">Własna domena i URL</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Dostęp do Top Stories</td>
              <td className="p-4 text-zinc-600">Wymagany (do 2021)</td>
              <td className="p-4 text-zinc-600">Wystarczy dobry LCP, INP, CLS</td>
            </tr>
            <tr>
              <td className="p-4 font-medium text-ink">Analityka i personalizacja</td>
              <td className="p-4 text-zinc-600">Ograniczona (amp-analytics)</td>
              <td className="p-4 text-zinc-600">Pełna (GTM, GA4, dowolne skrypty)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Problemy i ograniczenia AMP, które przyspieszyły jego upadek</h2>
      <p>
        Krytycy AMP — w tym twórcy stron, agencje SEO i deweloperzy — wskazywali na szereg poważnych problemów:
      </p>
      <ul>
        <li><strong>Utrata kontroli nad URL</strong> — strony AMP były serwowane spod domeny Google, co komplikowało analitykę, brand building i bezpieczeństwo</li>
        <li><strong>Ograniczone możliwości monetyzacji</strong> — część sieci reklamowych nie działała z AMP; reklamy programatyczne wymagały osobnych rozwiązań</li>
        <li><strong>Podwójne utrzymanie treści</strong> — wydawcy musieli utrzymywać dwie wersje każdej strony: standardową i AMP</li>
        <li><strong>Zablokowany JavaScript</strong> — niemożność użycia pełnych możliwości frameworków JS ograniczała interaktywność i personalizację</li>
        <li><strong>Zarzuty antykonkurencyjne</strong> — DOJ i Komisja Europejska badały, czy AMP był narzędziem umacniania monopolu Google na rynku reklamy</li>
      </ul>

      <h2>Kiedy AMP wciąż może mieć sens?</h2>
      <p>
        Mimo wycofania się z mainstreamu, AMP ma niszowe zastosowania w 2025/2026:
      </p>
      <ul>
        <li><strong>Portale newsowe o bardzo dużym ruchu mobilnym</strong> — jeśli Core Web Vitals nie dają się poprawić na standardowej platformie, AMP może być tymczasowym wyjściem</li>
        <li><strong>Emails AMP (AMP for Email)</strong> — oddzielna specyfikacja AMP dla interaktywnych emaili w Gmail, wciąż aktywnie rozwijana przez Google</li>
        <li><strong>Środowiska z ekstremalnie słabym łączem</strong> — rynki rozwijające się, gdzie prerendering na serwerach Google robi realną różnicę</li>
      </ul>

      <InfoBox>
        <strong>Rekomendacja dla nowych projektów:</strong> Nie wdrażaj AMP w 2025/2026 jako podstawowej strategii optymalizacji mobile. Zamiast tego skup się na prawdziwej optymalizacji <Link href="/page-speed">szybkości strony</Link> i <Link href="/core-web-vitals">Core Web Vitals</Link> — efekty są trwalsze, a swoboda projektowania nieporównywalnie większa.
      </InfoBox>

      <h2>FAQ — AMP</h2>

      <h3>Czy AMP wpływa na ranking w Google?</h3>
      <p>
        Bezpośrednio — nie. Google nigdy nie przyznało AMP statusu oficjalnego czynnika rankingowego dla wyników
        organicznych. Pośrednio — tak, bo szybsze strony mają lepsze Core Web Vitals, które <em>są</em>
        czynnikiem rankingowym. Ale tę samą szybkość można osiągnąć bez AMP.
      </p>

      <h3>Czy powinienem usunąć AMP ze swojej strony?</h3>
      <p>
        To zależy. Jeśli AMP generuje ruch i nie sprawia problemów — możesz go zostawić.
        Jeśli powoduje problemy z analityką, monetyzacją lub wymaga dużego nakładu utrzymania —
        migracja do zoptymalizowanej standardowej strony jest sensowna. Przy migracji pamiętaj o
        przekierowaniach 301 ze starych URL AMP na nowe.
      </p>

      <h3>Czym jest AMP for Email i czy ma przyszłość?</h3>
      <p>
        AMP for Email to osobna specyfikacja pozwalająca tworzyć interaktywne emaile — z formularzami,
        karuzelami, dynamicznymi treściami — bezpośrednio w skrzynce Gmail. W przeciwieństwie do AMP
        dla stron mobilnych, AMP for Email jest aktywnie rozwijany i ma realne zastosowania w email marketingu.
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
                "name": "Czy AMP wpływa na ranking w Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bezpośrednio nie. AMP nigdy nie był oficjalnym czynnikiem rankingowym. Pośrednio tak — bo szybsze strony mają lepsze Core Web Vitals, które są sygnałem rankingowym. Tę szybkość można jednak osiągnąć bez AMP."
                }
              },
              {
                "@type": "Question",
                "name": "Czy powinienem usunąć AMP ze swojej strony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To zależy od sytuacji. Jeśli AMP generuje ruch bez problemów, możesz go zostawić. Jeśli powoduje kłopoty z analityką lub wymaga dużo utrzymania, migracja do zoptymalizowanej standardowej strony jest sensowna — z przekierowaniami 301 ze starych URL AMP."
                }
              },
              {
                "@type": "Question",
                "name": "Co zastąpiło AMP jako standard szybkości mobilnej?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Core Web Vitals (LCP, INP, CLS) — zestaw wskaźników Google mierzących UX strony. Od 2021 roku spełnienie progów Core Web Vitals wystarczy do pojawienia się w Top Stories Google News, bez konieczności wdrożenia AMP."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
