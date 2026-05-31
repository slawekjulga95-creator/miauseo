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
export default function GoogleSearchConsole() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Search Console?</h2>
      <p>
        <strong>Google Search Console</strong> (GSC, dawniej Google Webmaster Tools) to bezpłatne narzędzie
        Google umożliwiające monitorowanie i zarządzanie obecnością witryny w wyszukiwarce.
        O ile <Link href="/google-analytics">Google Analytics</Link> mierzy <em>zachowanie użytkowników</em>
        na stronie po kliknięciu, GSC mierzy <em>widoczność strony w wynikach wyszukiwania</em> —
        na jakie frazy się pojawia, na jakich pozycjach, ile razy jest klikana, czy Googlebot może ją crawlować i indeksować.
        To okno do komunikacji z Google jako wyszukiwarką.
      </p>

      <h2>Kluczowe funkcje Google Search Console</h2>
      <p>
        <strong>Raport wydajności (Performance)</strong> — wyświetlenia, kliknięcia, <Link href="/ctr">CTR</Link>
        i średnia pozycja dla każdej frazy, strony, kraju i urządzenia. To najcenniejszy raport GSC:
        frazy z dużą liczbą wyświetleń i niskim CTR to sygnał do optymalizacji meta title i description.
        Frazy ze słabą pozycją, ale wysokim wolumenem — priorytet do wzmocnienia treści.
      </p>
      <p>
        <strong>Indeksowanie / Strony</strong> — które strony Google zindeksował, które pominął i dlaczego.
        Kategorie: zindeksowane, błędy (404, 5xx, redirect error), ostrzeżenia (noindex, soft 404),
        wykluczone przez canonical lub robots.txt. To tu diagnozujesz problemy z <Link href="/indeksowanie">indeksowaniem</Link>.
      </p>
      <p>
        <strong><Link href="/core-web-vitals">Core Web Vitals</Link></strong> — raport oceniający LCP, INP i CLS
        dla wersji mobilnej i desktopowej. Dane z rzeczywistego doświadczenia użytkowników Chrome (CrUX).
      </p>
      <p>
        <strong>Sitemap</strong> — przesyłanie i monitorowanie pliku <Link href="/sitemap-xml">sitemap XML</Link>.
        GSC pokazuje liczbę URL w sitemapie i liczbę faktycznie zindeksowanych.
      </p>
      <p>
        <strong>Linki</strong> — zewnętrzne backlinki (które strony linkują do Twojej witryny)
        i linki wewnętrzne (najczęściej linkowane podstrony). Podstawowe dane do audytu profilu linków.
      </p>
      <p>
        <strong>Działania manualne</strong> — jeśli Google nałożył na Twoją stronę karę manualną,
        pojawia się tutaj z opisem i instrukcją naprawy.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Raport GSC</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Jak używać</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Wydajność</td><td className="p-4 text-zinc-600">Frazy, kliknięcia, CTR, pozycje</td><td className="p-4 text-zinc-600">Identyfikuj frazy do optymalizacji CTR i treści</td></tr>
            <tr><td className="p-4 font-medium text-ink">Indeksowanie → Strony</td><td className="p-4 text-zinc-600">Stan indeksowania każdego URL</td><td className="p-4 text-zinc-600">Diagnozuj problemy z crawlowaniem</td></tr>
            <tr><td className="p-4 font-medium text-ink">Core Web Vitals</td><td className="p-4 text-zinc-600">LCP, INP, CLS z danych polowych</td><td className="p-4 text-zinc-600">Priorytetyzuj naprawy UX technicznego</td></tr>
            <tr><td className="p-4 font-medium text-ink">Linki zewnętrzne</td><td className="p-4 text-zinc-600">Domeny linkujące, top linked pages</td><td className="p-4 text-zinc-600">Audyt profilu backlinków</td></tr>
            <tr><td className="p-4 font-medium text-ink">Działania manualne</td><td className="p-4 text-zinc-600">Kary manualne nałożone przez Google</td><td className="p-4 text-zinc-600">Natychmiast napraw i złóż reconsideration</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>GSC a GA4 — uzupełnienie, nie duplikacja:</strong> GSC pokazuje co dzieje się w Google przed kliknięciem (frazy, pozycje, CTR). GA4 pokazuje co dzieje się po kliknięciu (zachowanie na stronie, konwersje). Oba narzędzia należy analizować razem: fraza o wysokim CTR w GSC i niskiej konwersji w GA4 sygnalizuje problem z landing page. Integracja GSC z GA4 pozwala łączyć te dane w jednym interfejsie.
      </InfoBox>

      <h2>FAQ — Google Search Console</h2>
      <h3>Jak dodać stronę do Google Search Console?</h3>
      <p>
        Wejdź na search.google.com/search-console → „Dodaj właściwość" → wybierz domenę
        (wymaga weryfikacji przez DNS — polecane) lub URL prefix (weryfikacja przez plik HTML,
        meta tag lub Google Analytics). Weryfikacja przez domenę daje dostęp do wszystkich URL
        (http, https, www, non-www). Po weryfikacji GSC zaczyna zbierać dane — pierwsze wyniki
        pojawiają się po 48–72 godzinach.
      </p>
      <h3>Dlaczego moje strony nie są zindeksowane mimo dobrej treści?</h3>
      <p>
        Sprawdź w GSC → Indeksowanie → Strony → odpowiednią kategorię błędu lub wykluczenia.
        Najczęstsze przyczyny: tag noindex, blokada przez robots.txt, błędy serwera (5xx),
        treść niedostępna dla Googlebota (JavaScript wymagający renderowania), canonical wskazujący na inną stronę,
        lub po prostu opóźnienie indeksowania dla nowych stron (normalnie do kilku tygodni).
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Search Console?", "acceptedAnswer": { "@type": "Answer", "text": "Google Search Console to bezpłatne narzędzie Google do monitorowania widoczności strony w wyszukiwarce: frazy, pozycje, CTR, błędy indeksowania, Core Web Vitals, backlinki i kary manualne." } }] }) }} />
    </div>
  );
}
