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

export default function VisibilityScore() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Visibility Score?</h2>
      <p>
        <strong>Visibility Score</strong> (wskaźnik widoczności organicznej) to zagregowana
        metryka stosowana przez narzędzia SEO — Semrush, Sistrix, Senuto, Ahrefs —
        do pomiaru ogólnej widoczności domeny w wynikach wyszukiwania.
        Obliczany jest jako odsetek potencjalnych kliknięć organicznych, jakie domena
        mogłaby uzyskać ze swojego zbioru monitorowanych słów kluczowych, biorąc pod uwagę
        aktualne pozycje i szacowane <Link href="/ctr">CTR</Link> dla każdej pozycji.
      </p>
      <p>
        Visibility Score jest wygodnym wskaźnikiem do śledzenia trendów widoczności
        w czasie i porównywania z konkurencją — zamiast analizować setki pozycji
        dla poszczególnych fraz, jeden wskaźnik pokazuje kierunek: rośnie czy spada.
      </p>

      <h2>Jak obliczany jest Visibility Score?</h2>
      <p>
        Każde narzędzie używa własnej formuły, ale logika jest podobna:
        dla każdej frazy w zestawie sprawdzana jest pozycja domeny,
        do pozycji przypisywany jest historyczny CTR (np. pozycja 1 = 28%,
        pozycja 5 = 6%, pozycja 10 = 2%), a wyniki są agregowane jako ważona suma.
        Frazy z wyższym wolumenem mają większy wpływ na końcowy wskaźnik.
      </p>
      <p>
        Dlatego ten sam wskaźnik Visibility Score może się różnić między narzędziami —
        Semrush, Sistrix i Senuto monitorują różne zestawy fraz, używają różnych
        modeli CTR i mają różne bazy danych.
      </p>

      <h2>Visibility Score vs inne metryki</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Metryka</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Co mierzy</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Visibility Score</td><td className="p-4 text-zinc-600">Potencjalne kliknięcia ze zbioru fraz</td><td className="p-4 text-zinc-600">Trend ogólny, porównanie z konkurencją</td></tr>
            <tr><td className="p-4 font-semibold text-ink"><Link href="/organic-traffic">Organic Traffic</Link></td><td className="p-4 text-zinc-600">Faktyczne wejścia z wyszukiwarek</td><td className="p-4 text-zinc-600">Rzeczywisty efekt SEO w GA4/GSC</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Pozycje dla fraz</td><td className="p-4 text-zinc-600">Miejsce w SERP dla konkretnych zapytań</td><td className="p-4 text-zinc-600">Monitoring szczegółowy fraz priorytetowych</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Share of Voice</td><td className="p-4 text-zinc-600">Udział w kliknięciach dla rynku</td><td className="p-4 text-zinc-600">Pozycja vs. konkurencja w kategorii</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Visibility Score to wskaźnik pośredni:</strong> Wysoka widoczność organiczna
        nie przekłada się automatycznie na przychód. Strona może mieć wysoki Visibility Score
        na frazy informacyjne bez intencji zakupowej, a niski ruch konwertujący.
        Zawsze koreluj Visibility Score z faktycznym ruchem organicznym (GSC, GA4)
        i konwersjami — to jedyne mierniki realnego wpływu SEO na biznes.
      </InfoBox>

      <h2>FAQ — Visibility Score</h2>

      <h3>Jaka jest dobra wartość Visibility Score?</h3>
      <p>
        Nie ma absolutnej dobrej wartości — wskaźnik jest relatywny wobec konkurencji
        i rynku. Ważniejszy jest trend: Visibility Score rosnący rok do roku,
        szczególnie dla fraz komercyjnych, to pozytywny sygnał efektów SEO.
        Porównuj z bezpośrednimi konkurentami w tej samej niszy — to da rzeczywisty
        benchmark, nie wartość abstrakcyjna.
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
                "name": "Czym jest Visibility Score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visibility Score to zagregowany wskaźnik widoczności organicznej domeny w narzędziach SEO (Semrush, Sistrix, Senuto). Obliczany jako odsetek potencjalnych kliknięć ze zbioru monitorowanych fraz. Przydatny do śledzenia trendów i porównywania z konkurencją."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
