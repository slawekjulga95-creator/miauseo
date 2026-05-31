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
export default function Indeksowanie() {
  return (
    <div className="prose-blog">
      <h2>Czym jest indeksowanie?</h2>
      <p>
        <strong>Indeksowanie</strong> (indexing) to proces analizowania, przetwarzania i zapisywania
        przez Google treści stron odwiedzonych przez <Link href="/googlebot">Googlebota</Link>
        do gigantycznej bazy danych — indeksu Google. Tylko strony zindeksowane mogą pojawiać się
        w wynikach wyszukiwania (<Link href="/serp">SERP</Link>). Strona może być perfekcyjnie
        zoptymalizowana, mieć doskonałą treść i mnóstwo backlinków — jeśli nie jest zindeksowana,
        nie istnieje dla użytkowników Google.
      </p>
      <p>
        Indeksowanie jest trzecim etapem procesu: <Link href="/crawlowanie">crawlowanie</Link>
        (odkrycie i pobranie strony) → indeksowanie (analiza i zapis) → rankingowanie
        (przypisanie pozycji dla konkretnych zapytań). Każdy etap może być punktem awarii —
        problem z jednym z nich wyklucza stronę z wyników.
      </p>

      <h2>Co Google robi podczas indeksowania?</h2>
      <p>
        Google podczas indeksowania analizuje wiele elementów strony jednocześnie: treść tekstową
        i jej strukturę semantyczną, nagłówki (<Link href="/heading-tags">H1–H6</Link>),
        <Link href="/meta-title"> meta title</Link> i <Link href="/meta-description">meta description</Link>,
        dane strukturalne (<Link href="/schema-markup">Schema Markup</Link>),
        <Link href="/atrybut-alt">atrybut alt</Link> obrazów, linki wewnętrzne i zewnętrzne,
        oraz sygnały techniczne takie jak czas ładowania i responsywność.
        Na podstawie tej analizy Google przypisuje stronie sygnały trafności dla konkretnych zapytań
        i umieszcza ją w indeksie gotową do rankingowania.
      </p>

      <h2>Jak sprawdzić czy strona jest zindeksowana?</h2>
      <p>
        <strong>Operator site: w Google</strong> — wpisz <em>site:twojastrona.pl/podstrona</em> bezpośrednio
        w wyszukiwarce. Jeśli wynik pojawia się — strona jest zindeksowana. Brak wyniku nie zawsze oznacza
        brak indeksowania (Google może filtrować wyniki), ale jest pierwszym sygnałem.
        <strong><Link href="/google-search-console">Google Search Console</Link></strong> → narzędzie
        „Sprawdź URL" (URL Inspection) — wpisujesz konkretny adres i GSC pokazuje jego aktualny
        stan indeksowania, ostatnią datę crawlowania i wersję strony widzianą przez Google.
        <strong>Raport Indeksowanie → Strony</strong> — zbiorczy widok wszystkich URL podzielony na:
        zindeksowane, błędy, ostrzeżenia i wykluczone z powodów (noindex, canonical, soft 404 itd.).
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Problem z indeksowaniem</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przyczyna</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Rozwiązanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Tag noindex</td><td className="p-4 text-zinc-600">Meta robots lub X-Robots-Tag blokuje indeksowanie</td><td className="p-4 text-zinc-600">Usuń noindex z ważnych stron</td></tr>
            <tr><td className="p-4 font-medium text-ink">Blokada robots.txt</td><td className="p-4 text-zinc-600">Disallow blokuje crawlowanie (więc i indeksowanie)</td><td className="p-4 text-zinc-600">Popraw lub usuń blokadę w robots.txt</td></tr>
            <tr><td className="p-4 font-medium text-ink">Canonical na inny URL</td><td className="p-4 text-zinc-600">Google traktuje stronę jako duplikat innej</td><td className="p-4 text-zinc-600">Popraw canonical lub unikalnij treść</td></tr>
            <tr><td className="p-4 font-medium text-ink">Soft 404</td><td className="p-4 text-zinc-600">Strona zwraca 200 ale treść sygnalizuje brak zawartości</td><td className="p-4 text-zinc-600">Popraw treść lub ustaw właściwy kod odpowiedzi</td></tr>
            <tr><td className="p-4 font-medium text-ink">Błąd serwera 5xx</td><td className="p-4 text-zinc-600">Googlebot nie może pobrać strony</td><td className="p-4 text-zinc-600">Napraw błąd serwera, sprawdź hosting</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Indeksowanie ≠ dobre rankingi:</strong> Bycie zindeksowanym to minimalny próg widoczności — nie gwarancja dobrej pozycji. Strona może być zindeksowana i rankować na pozycji 87. Indeksowanie mówi „istnieje w Google". Ranking mówi „jest dobrze widoczna dla konkretnych fraz". Optymalizacja treści, <Link href="/link-building">link building</Link> i technical SEO decydują o tym, na jakich pozycjach strona się pojawi.
      </InfoBox>

      <h2>FAQ — Indeksowanie</h2>
      <h3>Jak długo trwa indeksowanie nowej strony?</h3>
      <p>
        Od kilku godzin do kilku tygodni — zależy od autorytetu domeny i częstości crawlowania.
        Silne domeny z aktywnymi sitemapami mają nowe strony indeksowane w ciągu godzin.
        Nowe lub słabe domeny mogą czekać 2–6 tygodni. Przyspieszasz indeksowanie przez:
        przesłanie sitemap do GSC, wewnętrzne linki do nowej strony z już zindeksowanych podstron,
        poproszenie o indeksowanie przez narzędzie „Sprawdź URL" w GSC.
      </p>
      <h3>Czy zindeksowana strona może zniknąć z indeksu?</h3>
      <p>
        Tak — strony mogą być usunięte z indeksu jeśli Google uzna je za niskiej jakości,
        nakłada na nie noindex, lub serwer zwraca błędy przez dłuższy czas. Monitoring
        w Google Search Console (raport Strony) pozwala wykryć i zareagować na takie sytuacje.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest indeksowanie?", "acceptedAnswer": { "@type": "Answer", "text": "Indeksowanie to proces zapisywania przez Google przeskanowanych stron do indeksu wyszukiwarki. Tylko zindeksowane strony mogą pojawiać się w wynikach wyszukiwania. Poprzedzone jest crawlowaniem przez Googlebota." } }] }) }} />
    </div>
  );
}
