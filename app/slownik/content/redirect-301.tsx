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

export default function Redirect301() {
  return (
    <div className="prose-blog">
      <h2>Czym jest redirect 301?</h2>
      <p>
        <strong>Redirect 301</strong> (przekierowanie trwałe) to odpowiedź HTTP o kodzie 301
        informująca przeglądarkę i roboty wyszukiwarek, że zasób pod danym adresem URL
        został przeniesiony na stałe pod nowy adres. Kod 301 oznacza „Moved Permanently" —
        i to słowo „permanently" jest kluczowe zarówno dla użytkownika, jak i dla
        <Link href="/googlebot"> Googlebota</Link>.
      </p>
      <p>
        W kontekście SEO przekierowanie 301 to najważniejszy rodzaj przekierowania —
        przekazuje zdecydowaną większość <Link href="/link-juice">link juice</Link>
        i autorytetu rankingowego ze starego URL do nowego. Google oficjalnie informuje,
        że 301 przekazuje „niemal cały" PageRank, choć historycznie wspominano
        o minimalnej utracie wartości przy każdym skoku.
      </p>

      <h2>Kiedy stosować redirect 301?</h2>
      <p>
        <strong>Zmiana adresu URL strony</strong> — gdy zmieniasz <Link href="/permalink">permalink</Link>
        artykułu lub podstrony z jakiegokolwiek powodu. Bez 301 stary URL zwraca błąd 404,
        a wszystkie backlinki do niego przestają przekazywać wartość.
      </p>
      <p>
        <strong>Migracja domeny</strong> — przeniesienie całego serwisu na nową domenę
        wymaga 301 dla każdego URL. Mapowanie 1:1 (stary URL → nowy URL odpowiadający
        tej samej treści) zachowuje autorytet zbudowany przez lata.
      </p>
      <p>
        <strong>HTTP → HTTPS</strong> — wszystkie żądania HTTP powinny być przekierowywane
        przez 301 do wersji HTTPS. To standard bezpieczeństwa i sygnał rankingowy.
      </p>
      <p>
        <strong>www → non-www (lub odwrotnie)</strong> — serwis powinien być dostępny
        pod jednym wariantem; drugi powinien 301-ować do kanonicznej wersji.
      </p>
      <p>
        <strong>Usuwanie strony z wartościowymi backlinkami</strong> — zamiast zostawiać 404,
        przekieruj na tematycznie najbliższą aktywną stronę.
      </p>

      <h2>301 vs inne kody przekierowań</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kod</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Znaczenie</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Link juice</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Kiedy stosować</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">301</td><td className="p-4 text-zinc-600">Moved Permanently</td><td className="p-4 text-green-600 font-medium">~99%</td><td className="p-4 text-zinc-600">Stała zmiana URL, migracja domeny</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/redirect-302">302</Link></td><td className="p-4 text-zinc-600">Found (tymczasowy)</td><td className="p-4 text-zinc-600 font-medium">Minimalna</td><td className="p-4 text-zinc-600">Tymczasowe testy, A/B landing</td></tr>
            <tr><td className="p-4 font-semibold text-ink">307</td><td className="p-4 text-zinc-600">Temporary Redirect</td><td className="p-4 text-zinc-600 font-medium">Minimalna</td><td className="p-4 text-zinc-600">Jak 302, ale ściśle dla HTTP/1.1</td></tr>
            <tr><td className="p-4 font-semibold text-ink">308</td><td className="p-4 text-zinc-600">Permanent Redirect</td><td className="p-4 text-green-600 font-medium">~99%</td><td className="p-4 text-zinc-600">Jak 301, zachowuje metodę HTTP</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Łańcuchy przekierowań szkodzą:</strong> Jeśli A → B → C (dwa skoki), Google
        przechodzi przez oba, ale część wartości jest tracona przy każdym skoku,
        a czas crawlowania rośnie. Najlepsza praktyka to łańcuchy maksymalnie
        jednoelementowe: A → C bezpośrednio. Przy migracjach i redesignach
        regularnie audytuj przekierowania pod kątem zbędnych łańcuchów.
      </InfoBox>

      <h2>FAQ — Redirect 301</h2>

      <h3>Jak długo Google potrzebuje, żeby uznać 301?</h3>
      <p>
        Googlebot zazwyczaj odkrywa i przetwarza przekierowanie 301 w ciągu kilku dni
        do kilku tygodni, w zależności od częstotliwości crawlowania domeny.
        Po zaktualizowaniu indeksu stary URL jest zastępowany nowym w wynikach wyszukiwania.
        Rankingi mogą tymczasowo wahać się podczas migracji — to normalne.
      </p>

      <h3>Czy mogę usunąć 301 po roku?</h3>
      <p>
        Google generalnie zaleca utrzymywanie 301 tak długo, jak istnieją zewnętrzne linki
        do starego URL — czyli w praktyce przez lata lub na stałe. Usunięcie 301
        przed upłynięciem co najmniej 1 roku może spowodować powrót ruchu na stary URL
        kończący się 404, szczególnie dla linków w mediach społecznościowych, emailach
        i treściach poza zasięgiem Twojej kontroli.
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
                "name": "Czym jest przekierowanie 301?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Redirect 301 (Moved Permanently) to trwałe przekierowanie HTTP informujące Google, że strona przeniesiona jest na stałe pod nowy adres. Przekazuje ~99% link juice i autorytetu rankingowego. Stosuje się przy zmianie URL, migracji domeny, HTTP→HTTPS i usuwaniu stron z backlinkami."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
