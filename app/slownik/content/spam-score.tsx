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

export default function SpamScore() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Spam Score?</h2>
      <p>
        <strong>Spam Score</strong> to metryka stworzona przez Moz (nie przez Google),
        wyrażona w skali od 0 do 17 (lub 0–100% w nowszych wersjach).
        Ocenia prawdopodobieństwo, że dana domena zostanie uznana przez Google
        za spam lub będzie powiązana ze spamem. Im niższy wynik, tym bezpieczniejsza
        domena. Wysoki Spam Score nie jest oficjalną oceną Google — to predykcja Moz
        na podstawie analizy wzorców charakterystycznych dla stron penalizowanych.
      </p>
      <p>
        Spam Score jest przydatny w <Link href="/link-building">link buildingu</Link>
        jako dodatkowy wskaźnik przy ocenie potencjalnych domen do pozyskiwania linków —
        obok <Link href="/domain-authority">Domain Authority</Link>,{" "}
        <Link href="/domain-rating">Domain Rating</Link> i ruchu organicznego.
        Domena z wysokim Spam Score to sygnał ostrzegawczy, by dokładniej sprawdzić profil.
      </p>

      <h2>Co wpływa na wysoki Spam Score?</h2>
      <p>
        Moz analizuje cechy stron historycznie penalizowanych przez Google i identyfikuje
        wzorce korelujące ze spamem: zbyt wiele linków wychodzących do niezwiązanych domen,
        dopasowanie adresów IP do sieci spamowych, brak unikatowej treści, zduplikowane
        schematy linków, domeny z bardzo krótkimi witrynami bez treści wartościowej,
        litery/wzorce w domenie typowe dla generowanych masowo stron.
      </p>

      <h2>Jak interpretować Spam Score?</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zakres (0–17)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Interpretacja</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Działanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">0–4</td><td className="p-4 text-zinc-600">Niski poziom spamu — domena bezpieczna</td><td className="p-4 text-zinc-600">Brak działań koniecznych</td></tr>
            <tr><td className="p-4 font-semibold text-ink">5–7</td><td className="p-4 text-zinc-600">Umiarkowany — warto sprawdzić dokładniej</td><td className="p-4 text-zinc-600">Przejrzyj profil linków i treść strony</td></tr>
            <tr><td className="p-4 font-semibold text-ink">8–10</td><td className="p-4 text-zinc-600">Podwyższony — wyraźny sygnał ostrzegawczy</td><td className="p-4 text-zinc-600">Zrezygnuj z backlinku lub użyj disavow</td></tr>
            <tr><td className="p-4 font-semibold text-ink">11–17</td><td className="p-4 text-zinc-600">Bardzo wysoki — wysoka szansa na penalizację</td><td className="p-4 text-zinc-600">Unikaj backlinku; rozważ <Link href="/disavow">disavow</Link></td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Spam Score to wskazówka, nie wyrok:</strong> Spam Score 7 nie oznacza
        automatycznie, że domena jest szkodliwa. Wiele legalnych, starszych lub niszowych
        stron ma nieoczekiwanie wysoki Spam Score z powodów niezwiązanych z faktycznym spamem.
        Zawsze weryfikuj podejrzane domeny manualnie: sprawdź treść, profil backlinków,
        ruch organiczny i historię domeny w archiwum internetowym.
      </InfoBox>

      <h2>FAQ — Spam Score</h2>

      <h3>Czy wysoki Spam Score mojej strony szkodzi rankingom?</h3>
      <p>
        Spam Score to metryka Moz, nie Google — sama w sobie nie wpływa na ranking.
        Jednak cechy, które powodują wysoki Spam Score, często korelują z tym,
        co Google ocenia negatywnie. Jeśli Twoja strona ma wysoki wynik, warto sprawdzić,
        czy nie ma realnych problemów: cienka treść, nienaturalny profil linków wychodzących,
        zduplikowane szablony. Diagnozuj przez Google Search Console, nie przez Spam Score.
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
                "name": "Czym jest Spam Score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Spam Score to metryka Moz (0–17) oceniająca ryzyko, że strona jest powiązana ze spamem. Nie jest oficjalną oceną Google. Używa się jej jako pomocniczego wskaźnika przy ocenie domen do link buildingu. Im niższy, tym bezpieczniejsza domena."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
