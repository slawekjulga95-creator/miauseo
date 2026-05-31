import Link from "next/link";

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-5">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center mt-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function QuickWin() {
  return (
    <div className="prose-blog">
      <h2>Czym jest quick win w SEO?</h2>
      <p>
        <strong>Quick win</strong> (szybka wygrana) to działanie SEO przynoszące mierzalne efekty
        w krótkim czasie — zazwyczaj w ciągu dni lub kilku tygodni — przy relatywnie niskim
        nakładzie pracy i zasobów. Quick winy są szczególnie ważne na początku współpracy
        z klientem lub projektu SEO, kiedy trzeba pokazać namacalne efekty zanim
        długoterminowe działania (link building, rozbudowa treści) zaczną przynosić owoce.
      </p>
      <p>
        W odróżnieniu od strategicznych inicjatyw SEO, które mogą trwać miesiące,
        quick winy koncentrują się na obszarach, gdzie potencjał jest gotowy do wykorzystania
        bez budowania od zera — istniejące rankingi, indeksowane strony, zainstalowane narzędzia.
      </p>

      <h2>Najskuteczniejsze quick winy SEO</h2>
      <p>
        <strong>Optymalizacja meta titleów i opisów dla stron na pozycjach 6–20</strong> —
        strony bliskie pierwszej stronie wyników Google to „low hanging fruit". Poprawa
        <Link href="/meta-title"> meta title</Link> i <Link href="/meta-description">opisu</Link>{" "}
        może przesunąć je do top 5 w ciągu kilku tygodni bez budowania nowych linków.
        Dane z GSC (zapytania z niskim CTR przy wysokich wyświetleniach) wskazują kandydatów.
      </p>
      <p>
        <strong>Naprawienie broken links i błędów 404</strong> — martwe linki wewnętrzne
        tracą link juice i pogarszają UX. Szybki crawl (Screaming Frog) i dodanie
        przekierowań 301 lub naprawienie linków to praca na godziny, nie tygodnie.
      </p>
      <p>
        <strong>Dodanie internal linków do stron priorytetowych</strong> — audyt
        <Link href="/internal-linking"> linkowania wewnętrznego</Link> często ujawnia
        ważne strony z minimalną liczbą linków wewnętrznych. Dodanie 5–10 linków
        z popularnych artykułów bloga do strony ofertowej może znacząco poprawić jej rankingi.
      </p>
      <p>
        <strong>Kompresja i optymalizacja obrazów</strong> — niezoptymalizowane obrazy
        to często najszybsza wygrana w poprawie <Link href="/core-web-vitals">Core Web Vitals</Link>.
        Konwersja do WebP i dodanie lazy loadingu to działania techniczne o natychmiastowym
        efekcie na LCP i czas ładowania.
      </p>
      <p>
        <strong>Uzupełnienie brakujących meta tagów</strong> — strony bez meta title
        lub z duplikatami. Narzędzia audytowe (Screaming Frog, Ahrefs) w minuty
        generują listę stron do naprawy.
      </p>

      <InfoBox>
        <strong>Quick winy nie zastępują strategii:</strong> Szybkie wygrane są wartościowe
        jako punkt startowy i dowód efektywności, ale SEO to maraton, nie sprint.
        Po wdrożeniu quick winów niezbędna jest strategia długoterminowa —
        systematyczny link building, rozbudowa treści i monitorowanie trendów.
        Serwis żyjący wyłącznie z quick winów szybko osiąga sufit bez fundamentów.
      </InfoBox>

      <h2>FAQ — Quick Win</h2>

      <h3>Jak szybko widać efekty quick winów?</h3>
      <p>
        Zależy od typu działania. Poprawki techniczne (meta tagi, przekierowania, szybkość)
        są widoczne w danych GSC po 1–4 tygodniach — tyle zajmuje Google ponowne
        zaindeksowanie zmienionych stron. Poprawa <Link href="/ctr">CTR</Link> przez
        lepsze meta tittle jest mierzalna natychmiast po recrawlu.
        Efekty poprawy wewnętrznego linkowania bywają widoczne szybciej niż link building —
        Google jest w stanie odkryć zmianę przy następnym crawlu domeny.
      </p>

      <h3>Jakie narzędzia pomagają znajdować quick winy?</h3>
      <p>
        <Link href="/google-search-console">Google Search Console</Link> — zapytania
        z wysokimi wyświetleniami i niskim CTR (okazje do meta tagów) oraz strony
        na pozycjach 6–20 (okazje do optymalizacji on-page). Screaming Frog —
        broken links, brakujące meta tagi, slow pages. Ahrefs / Semrush Site Audit —
        kompleksowe listy problemów posortowane według wpływu.
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
                "name": "Czym jest quick win w SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Quick win to działanie SEO przynoszące szybkie, mierzalne efekty przy niskim nakładzie pracy. Typowe quick winy to: optymalizacja meta tagów dla stron na pozycjach 6–20, naprawa broken linków, dodanie internal linków do stron priorytetowych i kompresja obrazów."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
