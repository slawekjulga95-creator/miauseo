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
export default function Impressions() {
  return (
    <div className="prose-blog">
      <h2>Czym są Impressions (Wyświetlenia)?</h2>
      <p>
        <strong>Impressions</strong> (wyświetlenia) to liczba razy, kiedy strona lub reklama pojawiła się
        w wynikach wyszukiwania lub w innym miejscu widocznym dla użytkownika. Każde pojawienie się
        w SERP — nawet jeśli użytkownik nie przewinął do tego wyniku i nie kliknął — liczy się jako jedno wyświetlenie.
        Impressions to miara widoczności, nie zaangażowania — wysoka liczba wyświetleń przy niskim
        <Link href="/ctr"> CTR</Link> sygnalizuje, że strona jest widoczna, ale nie przyciąga kliknięć.
      </p>

      <h2>Impressions w Google Search Console vs Google Ads</h2>
      <p>
        Definicja impression różni się między kontekstami — co jest ważne przy interpretacji danych.
      </p>
      <p>
        <strong>W <Link href="/google-search-console">Google Search Console</Link></strong> — wyświetlenie
        organiczne liczone jest gdy URL pojawił się w wynikach wyszukiwania dla zapytania użytkownika,
        niezależnie od tego czy użytkownik go widział (np. wynik jest poniżej linii przewijania ekranu).
        Wyjątek: wyniki obrazkowe, wideo i inne formaty mają specyficzne reguły zliczania.
        GSC pokazuje wyświetlenia per fraza kluczowa, per strona, per kraj i per urządzenie —
        to podstawowe dane do analizy widoczności organicznej.
      </p>
      <p>
        <strong>W <Link href="/google-ads">Google Ads</Link></strong> — wyświetlenie liczone jest gdy reklama
        pojawiła się na ekranie. W sieci wyszukiwania: każde pojawienie się reklamy to jedno wyświetlenie.
        W sieci <Link href="/display-ads">Display</Link>: dostępna jest metryka <em>viewable impressions</em>
        (reklama widoczna w co najmniej 50% przez min. 1 sekundę) — bardziej miarodajna niż zwykłe wyświetlenia.
      </p>

      <h2>Jak analizować Impressions w GSC?</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wzorzec</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Diagnoza</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Działanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Wysokie wyświetlenia + niski CTR</td><td className="p-4 text-zinc-600">Strona widoczna, ale nieprzyciągająca kliknięć</td><td className="p-4 text-zinc-600">Zoptymalizuj meta title i description</td></tr>
            <tr><td className="p-4 font-medium text-ink">Wysokie wyświetlenia + pozycja 4–10</td><td className="p-4 text-zinc-600">Bliski top 3 — potencjał do awansu</td><td className="p-4 text-zinc-600">Wzmocnij treść, zdobądź linki do tej strony</td></tr>
            <tr><td className="p-4 font-medium text-ink">Niskie wyświetlenia dla ważnej strony</td><td className="p-4 text-zinc-600">Słaba widoczność — ranking za niski lub strona nieindeksowana</td><td className="p-4 text-zinc-600">Sprawdź indeksowanie w GSC, popraw treść</td></tr>
            <tr><td className="p-4 font-medium text-ink">Spadek wyświetleń po aktualizacji</td><td className="p-4 text-zinc-600">Możliwa algorytmiczna degradacja</td><td className="p-4 text-zinc-600">Audyt treści i profilu linków</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Wyświetlenia a sezonowość:</strong> Liczba wyświetleń jest mocno skorelowana z sezonowym wolumenem wyszukiwań. Sklep ze sprzętem narciarckim zobaczy dramatyczny wzrost wyświetleń w listopadzie–lutym i minimum w lipcu. Interpretuj zmiany wyświetleń zawsze w kontekście sezonowości branży — i porównuj rok do roku, nie miesiąc do miesiąca.
      </InfoBox>

      <h2>FAQ — Impressions</h2>
      <h3>Czy wyświetlenia w GSC oznaczają że użytkownik widział moją stronę?</h3>
      <p>
        Niekoniecznie. GSC liczy wyświetlenie gdy URL pojawił się w wynikach — niezależnie od tego,
        czy użytkownik przewinął stronę do tego miejsca. Wynik na pozycji 8 jest liczony jako wyświetlenie,
        nawet jeśli użytkownik zatrzymał się na pierwszych 3 wynikach i nie scrollował.
      </p>
      <h3>Jak zwiększyć liczbę wyświetleń organicznych?</h3>
      <p>
        Wyświetlenia rosną przez poprawę rankingów (wyższe pozycje = więcej wyświetleń dla wyszukiwań z daną frazą),
        targetowanie nowych fraz kluczowych, rozszerzanie zakresu treści na stronie i poprawę indeksowania.
        Rich snippets i odpowiedzi w AI Overviews również zwiększają wyświetlenia przez zajmowanie
        większej przestrzeni w SERP.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym są impressions w Google Search Console?", "acceptedAnswer": { "@type": "Answer", "text": "Impressions (wyświetlenia) w GSC to liczba pojawień URL w wynikach wyszukiwania. Każde pojawienie się w SERP — niezależnie od kliknięcia — to jedno wyświetlenie. Podstawowa miara widoczności organicznej." } }] }) }} />
    </div>
  );
}
