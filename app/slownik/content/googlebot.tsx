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
export default function Googlebot() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Googlebot?</h2>
      <p>
        <strong>Googlebot</strong> to zbiorcza nazwa robotów indeksujących (crawlerów) Google,
        które systematycznie skanują strony internetowe, pobierają ich zawartość i przekazują
        dane do systemu indeksowania Google. Bez Googlebota żadna strona nie mogłaby pojawić
        się w wynikach wyszukiwania — <Link href="/crawlowanie">crawlowanie</Link> przez Googlebota
        poprzedza <Link href="/indeksowanie">indeksowanie</Link>, a indeksowanie poprzedza rankingowanie.
      </p>
      <p>
        Googlebot identyfikuje się przez nagłówek User-Agent zawierający ciąg
        <em> „Googlebot"</em>. Google udostępnia listę adresów IP swoich botów,
        dzięki czemu można weryfikować, czy odwiedzina pochodzi od prawdziwego Googlebota
        (a nie od bota podszywającego się pod niego). Weryfikacja: reverse DNS lookup dla adresu IP
        powinna zwrócić domenę <em>googlebot.com</em> lub <em>google.com</em>.
      </p>

      <h2>Typy Googlebota</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Bot</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Funkcja</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">User-Agent (fragment)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Googlebot Smartphone</td><td className="p-4 text-zinc-600">Główny bot — crawluje jako urządzenie mobile (mobile-first indexing)</td><td className="p-4 text-zinc-600 font-mono text-xs">Googlebot/2.1; +http://www.google.com/bot.html</td></tr>
            <tr><td className="p-4 font-medium text-ink">Googlebot Desktop</td><td className="p-4 text-zinc-600">Uzupełnia indeksowanie na desktop dla wybranych stron</td><td className="p-4 text-zinc-600 font-mono text-xs">Googlebot/2.1</td></tr>
            <tr><td className="p-4 font-medium text-ink">Googlebot Image</td><td className="p-4 text-zinc-600">Crawluje obrazy do Google Images</td><td className="p-4 text-zinc-600 font-mono text-xs">Googlebot-Image/1.0</td></tr>
            <tr><td className="p-4 font-medium text-ink">Googlebot Video</td><td className="p-4 text-zinc-600">Crawluje wideo do Google Video</td><td className="p-4 text-zinc-600 font-mono text-xs">Googlebot-Video/1.0</td></tr>
            <tr><td className="p-4 font-medium text-ink">Google-InspectionTool</td><td className="p-4 text-zinc-600">Używany przez GSC przy „Testuj URL"</td><td className="p-4 text-zinc-600 font-mono text-xs">Google-InspectionTool/1.0</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Jak Googlebot renderuje JavaScript?</h2>
      <p>
        Googlebot potrafi renderować JavaScript — ale proces jest dwuetapowy i opóźniony.
        Pierwsze przejście: Googlebot pobiera HTML i szybko przetwarza treść dostępną bez JS.
        Drugie przejście: strona jest umieszczana w kolejce renderowania (Rendering Queue),
        gdzie Googlebot uruchamia JavaScript i przetwarza wygenerowaną treść dynamicznie.
        Opóźnienie między crawlowaniem a renderowaniem może wynosić kilka sekund do kilku dni.
        Dla stron zbudowanych wyłącznie w React, Vue lub Angular bez SSR (Server-Side Rendering)
        oznacza to, że treść może być niewidoczna dla Googlebota przez długi czas — co szkodzi <Link href="/javascript-seo">JavaScript SEO</Link>.
      </p>

      <InfoBox>
        <strong>Googlebot crawluje jako mobile:</strong> Od 2021 roku Googlebot Smartphone jest podstawowym botem do indeksowania (<Link href="/mobile-first-indexing">mobile-first indexing</Link>). Twoja strona powinna dobrze działać i prezentować pełną treść na urządzeniach mobilnych — bo to właśnie tę wersję Google ocenia jako główną. Strona, która ukrywa treść na mobile (np. przez media queries), może stracić tę treść z indeksu.
      </InfoBox>

      <h2>Jak kontrolować Googlebota?</h2>
      <p>
        <strong><Link href="/robots-txt">Robots.txt</Link></strong> — plik w katalogu głównym witryny
        z dyrektywami Disallow blokującymi crawlowanie wybranych ścieżek.
        Robots.txt blokuje crawlowanie, ale nie indeksowanie — jeśli zablokowana strona ma linki z zewnątrz,
        Google może ją zindeksować jako URL bez treści.
        <strong>Meta tag robots</strong> — <code>&lt;meta name="robots" content="noindex"&gt;</code>
        blokuje indeksowanie konkretnej strony (ale nie blokuje crawlowania).
        <strong>Nagłówek HTTP X-Robots-Tag</strong> — odpowiednik meta tagu dla plików nieposiadających HTML,
        jak pliki PDF. Przydatny przy blokowaniu indeksowania całych katalogów przez konfigurację serwera.
      </p>

      <h2>FAQ — Googlebot</h2>
      <h3>Jak często Googlebot odwiedza moją stronę?</h3>
      <p>
        Częstotliwość crawlowania zależy od autorytetu domeny i częstości aktualizacji treści.
        Portale newsowe odwiedzane są wielokrotnie dziennie. Statyczne strony małych firm — co kilka tygodni.
        Możesz sprawdzić historię crawlowania w logach serwera lub w GSC → Ustawienia → Statystyki crawlowania.
      </p>
      <h3>Co jeśli Googlebot nie może wczytać mojej strony?</h3>
      <p>
        Jeśli serwer zwraca błąd 5xx lub timeout, Googlebot odnotowuje problem i wraca później.
        Przy powtarzających się błędach Google może zmniejszyć częstotliwość crawlowania
        lub usunąć strony z indeksu. Sprawdź raport crawlowania w GSC → Ustawienia → Statystyki crawlowania
        i logach serwera. Wysoki wskaźnik błędów 5xx to priorytet do naprawy.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Googlebot?", "acceptedAnswer": { "@type": "Answer", "text": "Googlebot to roboty indeksujące Google crawlujące strony internetowe, pobierające ich zawartość i przekazujące dane do indeksu wyszukiwarki. Bez crawlowania przez Googlebota strona nie może pojawić się w wynikach Google." } }] }) }} />
    </div>
  );
}
