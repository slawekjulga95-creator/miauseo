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
export default function GoogleAnalytics() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Analytics?</h2>
      <p>
        <strong>Google Analytics</strong> to bezpłatna platforma analityczna Google pozwalająca mierzyć
        ruch na stronie internetowej, zachowanie użytkowników, efektywność kanałów marketingowych i konwersje.
        Od 1 lipca 2023 roku jedyną aktywnie wspieraną wersją jest <strong>Google Analytics 4 (GA4)</strong> —
        poprzednik, Universal Analytics (UA), przestał zbierać dane i został wycofany.
        GA4 różni się od UA fundamentalnie: opiera się na modelu zdarzeniowym (events), a nie sesjowym,
        co zmienia sposób zbierania i interpretacji danych.
      </p>

      <h2>GA4 vs Universal Analytics — kluczowe różnice</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Universal Analytics (wycofany)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Google Analytics 4</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Model danych</td><td className="p-4 text-zinc-600">Oparty na sesjach i odsłonach</td><td className="p-4 text-zinc-600">Oparty na zdarzeniach (events)</td></tr>
            <tr><td className="p-4 font-medium text-ink">Metryka jakości</td><td className="p-4 text-zinc-600">Bounce Rate (wskaźnik odrzuceń)</td><td className="p-4 text-zinc-600"><Link href="/engagement-rate">Engagement Rate</Link></td></tr>
            <tr><td className="p-4 font-medium text-ink">Cross-device tracking</td><td className="p-4 text-zinc-600">Ograniczony</td><td className="p-4 text-zinc-600">Lepszy — spójne User ID</td></tr>
            <tr><td className="p-4 font-medium text-ink">Prywatność / cookies</td><td className="p-4 text-zinc-600">Zależny od cookies third-party</td><td className="p-4 text-zinc-600">Modelowanie danych bez cookies</td></tr>
            <tr><td className="p-4 font-medium text-ink">Integracja z Google Ads</td><td className="p-4 text-zinc-600">Przez oddzielne połączenie</td><td className="p-4 text-zinc-600">Natywna, głęboka integracja</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Kluczowe raporty i funkcje GA4</h2>
      <p>
        <strong>Raport w czasie rzeczywistym</strong> — podgląd aktywnych użytkowników na stronie
        w danej chwili, przydatny przy testowaniu tagów i nowych treści.
        <strong>Raporty pozyskiwania</strong> — skąd pochodzi ruch: bezpośredni, organiczny, płatny,
        z mediów społecznościowych. Kluczowe dla oceny efektywności poszczególnych kanałów.
        <strong>Raporty zaangażowania</strong> — które strony i treści angażują użytkowników,
        czas trwania sesji, <Link href="/engagement-rate">Engagement Rate</Link> i zdarzenia.
        <strong>Eksplorator ścieżek</strong> — jak użytkownicy nawigują przez stronę,
        gdzie rezygnują w <Link href="/funnel">lejku konwersji</Link>.
        <strong>Modelowanie predykcyjne</strong> — GA4 przewiduje prawdopodobieństwo konwersji
        i odpływu użytkownika (churn probability) przez machine learning.
      </p>

      <h2>Jak skonfigurować GA4?</h2>
      <p>
        Instalacja GA4 odbywa się przez wgranie kodu śledzenia (<em>gtag.js</em>) bezpośrednio w sekcji
        <code>&lt;head&gt;</code> każdej strony, lub przez <Link href="/google-tag-manager">Google Tag Manager</Link>
        (rekomendowane — centralne zarządzanie tagami bez edycji kodu przy każdej zmianie).
        Po instalacji konieczna jest konfiguracja zdarzeń konwersji (purchase, generate_lead, form_submit)
        i połączenie z Google Ads dla pełnej atrybucji kampanii.
      </p>

      <InfoBox>
        <strong>GA4 a prywatność:</strong> GA4 jest zaprojektowany pod kątem przyszłości bez third-party cookies. Używa modelowania danych do uzupełnienia luk spowodowanych blokadami. Mimo to wymaga prawidłowej Polityki Prywatności i banera cookie (szczególnie w UE — RODO). Dane GA4 nie mogą być traktowane jako absolutna prawda — to statystyczne przybliżenie rzeczywistości, szczególnie dla ruchu z przeglądarek blokujących tracking.
      </InfoBox>

      <h2>FAQ — Google Analytics</h2>
      <h3>Czy Google Analytics 4 jest naprawdę bezpłatny?</h3>
      <p>
        Standard GA4 jest bezpłatny bez limitów liczby stron. Istnieje płatna wersja
        Google Analytics 360 dla enterprise — z wyższymi limitami zdarzeń, gwarantowanym SLA i zaawansowaną integracją z BigQuery. Dla 99% firm wersja bezpłatna jest w pełni wystarczająca.
      </p>
      <h3>Jak GA4 mierzy konwersje?</h3>
      <p>
        W GA4 konwersje to zdarzenia oznaczone jako „kluczowe". Standardowe zdarzenia jak <em>purchase</em>
        i <em>generate_lead</em> można oznaczyć kliknięciem w interfejsie. Niestandardowe zdarzenia
        (np. wysłanie formularza, kliknięcie telefonu) wymagają konfiguracji przez GTM lub bezpośredniego kodu.
        Ścieżki konwersji analizujesz w raporcie Atrybucja — GA4 domyślnie używa modelu data-driven.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Analytics 4?", "acceptedAnswer": { "@type": "Answer", "text": "Google Analytics 4 to bezpłatna platforma analityczna Google oparta na modelu zdarzeniowym (events). Mierzy ruch na stronie, zachowanie użytkowników i konwersje. Od 2023 zastąpiła Universal Analytics." } }] }) }} />
    </div>
  );
}
