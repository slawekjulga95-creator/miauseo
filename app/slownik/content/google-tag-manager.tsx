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
export default function GoogleTagManager() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Tag Manager?</h2>
      <p>
        <strong>Google Tag Manager</strong> (GTM) to bezpłatny system zarządzania tagami (Tag Management System),
        który pozwala dodawać, edytować i zarządzać skryptami analitycznymi i marketingowymi na stronie
        internetowej — bez konieczności modyfikowania kodu źródłowego przy każdej zmianie.
        Zamiast prosić programistę o wgranie kolejnego skryptu śledzenia, marketer konfiguruje tag w GTM
        i publikuje go samodzielnie w ciągu minut.
      </p>
      <p>
        GTM działa jako pośrednik: na stronę wgrywany jest tylko jeden kontener GTM
        (<em>container snippet</em>), a wszystkie tagi (Google Analytics, Google Ads, Facebook Pixel,
        Hotjar, Clarity i setki innych) są zarządzane w panelu GTM, bez ingerencji w kod strony.
      </p>

      <h2>Jak działa GTM — kontenery, tagi, triggery i zmienne</h2>
      <p>
        <strong>Tag</strong> to kawałek kodu (skrypt) który ma zostać uruchomiony — np. kod <Link href="/google-analytics">GA4</Link>,
        pixel konwersji Google Ads, kod śledzenia Meta.
        <strong>Trigger</strong> (wyzwalacz) to warunek określający <em>kiedy</em> tag ma się uruchomić —
        np. przy każdym załadowaniu strony, przy kliknięciu przycisku, przy przewinięciu 50% strony,
        lub przy wysłaniu formularza.
        <strong>Zmienna</strong> to wartość dynamiczna używana w tagach i triggerach —
        np. URL bieżącej strony, wartość koszyka, nazwa produktu, ID transakcji.
        <strong>Kontener</strong> to zbiór wszystkich tagów, triggerów i zmiennych dla jednej właściwości.
      </p>

      <h2>GTM vs bezpośredni kod na stronie</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Bezpośredni kod</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Google Tag Manager</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Wdrożenie zmian</td><td className="p-4 text-zinc-600">Wymaga programisty + deploy</td><td className="p-4 text-zinc-600">Marketer samodzielnie, bez deploymentu</td></tr>
            <tr><td className="p-4 font-medium text-ink">Czas wdrożenia</td><td className="p-4 text-zinc-600">Godziny lub dni</td><td className="p-4 text-zinc-600">Minuty</td></tr>
            <tr><td className="p-4 font-medium text-ink">Kontrola wersji</td><td className="p-4 text-zinc-600">Ręczna (git)</td><td className="p-4 text-zinc-600">Wbudowana historia wersji + rollback</td></tr>
            <tr><td className="p-4 font-medium text-ink">Testowanie</td><td className="p-4 text-zinc-600">Na środowisku testowym</td><td className="p-4 text-zinc-600">Tryb podglądu w przeglądarce (Preview Mode)</td></tr>
            <tr><td className="p-4 font-medium text-ink">Wpływ na wydajność</td><td className="p-4 text-zinc-600">Brak overhead GTM</td><td className="p-4 text-zinc-600">Minimalny overhead kontenera GTM</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>GTM i wydajność strony:</strong> Każdy tag dodany przez GTM to dodatkowy skrypt ładowany na stronie. Przy zbyt wielu tagach (analityka, remarketing, czaty, heat mapy, media społecznościowe) GTM może negatywnie wpływać na <Link href="/core-web-vitals">Core Web Vitals</Link> — szczególnie INP. Regularnie audytuj tagi: usuwaj te nieużywane, odrocz ładowanie (defer) tych, które nie są krytyczne dla pierwszej interakcji.
      </InfoBox>

      <h2>FAQ — Google Tag Manager</h2>
      <h3>Czy GTM zastępuje Google Analytics?</h3>
      <p>
        Nie — GTM i GA4 pełnią różne funkcje. GTM to system wdrożenia i zarządzania tagami.
        GA4 to narzędzie analityczne zbierające i analizujące dane. GTM może wdrożyć kod GA4 na stronie
        (i jest rekomendowaną metodą instalacji GA4), ale sam nie zbiera ani nie analizuje danych.
      </p>
      <h3>Jak przetestować tagi w GTM przed publikacją?</h3>
      <p>
        W GTM → kliknij „Preview" → wejdź na stronę — otworzy się panel debugowania pokazujący,
        które tagi uruchamiają się na każdej stronie i przy każdym zdarzeniu. Tryb podglądu pozwala
        testować wszystkie tagi bez publikowania zmian dla użytkowników.
        Dodatkowe sprawdzenie: wtyczka Chrome „Tag Assistant" od Google weryfikuje poprawność tagów.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Tag Manager?", "acceptedAnswer": { "@type": "Answer", "text": "GTM to system zarządzania tagami pozwalający dodawać skrypty analityczne i marketingowe na stronie bez edycji kodu. Jeden kontener na stronie — wszystkie tagi zarządzane w panelu GTM." } }] }) }} />
    </div>
  );
}
