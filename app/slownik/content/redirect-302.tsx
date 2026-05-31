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

export default function Redirect302() {
  return (
    <div className="prose-blog">
      <h2>Czym jest redirect 302?</h2>
      <p>
        <strong>Redirect 302</strong> (przekierowanie tymczasowe, „Found") to odpowiedź HTTP
        informująca przeglądarkę i roboty wyszukiwarek, że zasób pod danym adresem URL
        jest <em>tymczasowo</em> dostępny pod innym adresem, ale oryginalny URL
        powinien zostać zachowany w indeksie. W odróżnieniu od{" "}
        <Link href="/redirect-301">przekierowania 301</Link> — które sygnalizuje
        permanentną zmianę — 302 mówi Google: „tutaj nic się na stałe nie zmieniło,
        wróć do oryginału kiedy indziej".
      </p>
      <p>
        Praktyczne znaczenie dla SEO: przekierowanie 302 <strong>nie przekazuje</strong>{" "}
        <Link href="/link-juice">link juice</Link> i autorytetu rankingowego do nowego URL.
        Jeśli przez długi czas używasz 302 tam, gdzie powinieneś użyć 301,
        budujesz autorytet pod adresem, który Google traktuje jako tymczasowy —
        a nie pod docelowym URL.
      </p>

      <h2>Kiedy 302 jest właściwym wyborem?</h2>
      <p>
        <strong>Testy A/B landing pages</strong> — jeśli testujesz wariant B strony
        przez tydzień, 302 jest właściwy. Strona A zostaje w indeksie, B jest sprawdzana.
        Po zakończeniu testu przenosisz ruch z powrotem na A bez konsekwencji SEO.
      </p>
      <p>
        <strong>Tymczasowe przeniesienie podczas prac technicznych</strong> — jeśli
        strona jest na chwilę niedostępna i przekierowujesz na stronę zastępczą,
        302 sygnalizuje Google, że zmiana jest krótkotrwała.
      </p>
      <p>
        <strong>Geotargeting oparty na lokalizacji</strong> — przekierowanie użytkownika
        z różnych krajów na odpowiednie wersje językowe bez permanentnej zmiany URL.
      </p>

      <h2>Typowe błędy z 302</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Błąd</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Konsekwencja SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">302 zamiast 301 przy zmianie domeny</td><td className="p-4 text-zinc-600">Autorytet nie przenosi się na nową domenę; stara domena jest indeksowana zamiast nowej</td></tr>
            <tr><td className="p-4 font-semibold text-ink">302 przy migracji HTTP → HTTPS</td><td className="p-4 text-zinc-600">Google może indeksować stary HTTP URL zamiast bezpiecznej wersji HTTPS</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Długotrwałe 302 (miesiące)</td><td className="p-4 text-zinc-600">Google może zignorować dyrektywę i potraktować jako 301 — lub nie, co prowadzi do niespójności</td></tr>
            <tr><td className="p-4 font-semibold text-ink">302 dla usuniętych stron</td><td className="p-4 text-zinc-600">Brak przekazania autorytetu backlinków; 301 byłoby właściwsze</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Google może zignorować Twój 302:</strong> Jeśli 302 jest aktywne przez
        długi czas i Google oceni, że zmiana jest de facto permanentna, może potraktować
        je jak 301 i przenieść autorytet na nowy URL. To zachowanie nie jest gwarantowane
        ani przewidywalne. Jeśli masz wątpliwości — użyj 301. Konsekwencje błędu
        przy 302 (brak transferu autorytetu) są gorsze niż przy błędnym użyciu 301.
      </InfoBox>

      <h2>FAQ — Redirect 302</h2>

      <h3>Jak sprawdzić, jaki kod odpowiedzi zwraca moja strona?</h3>
      <p>
        Narzędzia: Screaming Frog (crawl → kolumna „Status Code"), cURL z flagą -I
        (<code>curl -I https://example.com/stara-strona</code>), rozszerzenia przeglądarki
        jak Redirect Path (Chrome) lub narzędzie „Sprawdź przekierowania" w Ahrefs.
        Google Search Console → Pokrycie indeksu pokazuje strony z problemami przekierowań.
      </p>

      <h3>Czym różni się 302 od 307?</h3>
      <p>
        Oba są tymczasowymi przekierowaniami, ale różnią się zachowaniem metody HTTP.
        302 może zmienić metodę żądania z POST na GET przy przekierowaniu
        (niezgodnie z pierwotną specyfikacją, ale tak działają przeglądarki).
        307 (Temporary Redirect) ściśle zachowuje metodę HTTP — POST pozostaje POST.
        Dla SEO różnica jest minimalna; oba traktowane są jak tymczasowe przekierowania.
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
                "name": "Czym jest przekierowanie 302?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Redirect 302 to tymczasowe przekierowanie HTTP. Google zachowuje oryginalny URL w indeksie i nie przekazuje link juice do nowego adresu. Stosuje się przy testach A/B i tymczasowych zmianach. Długotrwałe używanie 302 zamiast 301 to częsty błąd SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
