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

export default function WidocznoscOrganiczna() {
  return (
    <div className="prose-blog">
      <h2>Czym jest widoczność organiczna?</h2>
      <p>
        <strong>Widoczność organiczna</strong> to odsetek potencjalnych użytkowników,
        którzy mogą zobaczyć Twoją witrynę w bezpłatnych wynikach wyszukiwania Google
        dla monitorowanego zbioru słów kluczowych. Jest to syntetyczny wskaźnik
        używany przez narzędzia SEO (Senuto, Semrush, Sistrix, Ahrefs) do oceny
        ogólnego stanu <Link href="/pozycjonowanie">pozycjonowania</Link> domeny —
        zamiast patrzeć na setki poszczególnych pozycji, jeden wskaźnik podsumowuje trend.
      </p>
      <p>
        Widoczność organiczna jest pojęciem zbieżnym z{" "}
        <Link href="/visibility-score">Visibility Score</Link> — to polskie tłumaczenie
        tej samej metryki. W praktyce to samo mierzą narzędzia SEO
        pod różnymi nazwami w różnych językach interfejsu.
      </p>

      <h2>Jak interpretować widoczność organiczną?</h2>
      <p>
        Widoczność 5% oznacza, że dla monitorowanych fraz Twoja witryna pojawia się
        w miejscach, które łącznie docierają do 5% potencjalnych kliknięć ze wszystkich
        wyszukiwań. Im wyższy wskaźnik, tym więcej użytkowników potencjalnie widzi
        Twoją markę w wynikach.
      </p>
      <p>
        Kluczowe: widoczność organiczna nie mówi nic o jakości ruchu ani o konwersjach.
        Wysoka widoczność na frazy informacyjne bez wartości biznesowej może być mniej
        istotna niż niższa widoczność na frazy transakcyjne generujące sprzedaż.
      </p>

      <h2>Co wpływa na widoczność organiczną?</h2>
      <p>
        <strong>Liczba rankujących fraz</strong> — im więcej słów kluczowych w top 10,
        tym wyższa widoczność. Tworzenie nowych treści na nowe tematy rozszerza
        liczbę rankujących fraz.
        <strong>Średnia pozycja dla fraz</strong> — awans z pozycji 7 na 3
        dla frazy o dużym wolumenie dramatycznie podnosi widoczność, bo CTR
        rośnie nieliniowo z pozycją.
        <strong>Wolumen i wartość fraz</strong> — ranking na frazy z dużym wolumenem
        wyszukiwań ma większy wpływ na wskaźnik niż ten sam ranking na frazy niszowe.
      </p>

      <InfoBox>
        <strong>Widoczność organiczna jako KPI SEO:</strong> Jest dobrym wskaźnikiem
        do raportowania postępów SEO w czasie — szczególnie dla klientów nieznających
        się na detalach pozycjonowania. Zamiast prezentować tabele pozycji dla 200 fraz,
        jeden rosnący wykres widoczności organicznej przekazuje ten sam komunikat.
        Uzupełniaj go zawsze o realne metryki biznesowe: ruch organiczny i konwersje.
      </InfoBox>

      <h2>FAQ — Widoczność Organiczna</h2>

      <h3>Jak poprawić widoczność organiczną?</h3>
      <p>
        Przez systematyczne działania SEO: rozbudowę treści na nowe tematy i frazy,
        poprawę pozycji istniejących stron przez optymalizację on-page i link building,
        eliminację problemów technicznych blokujących indeksowanie.
        Monitoruj widoczność w narzędziach jak Senuto lub Semrush — trend tygodniowy
        pokazuje kierunek działań i wpływ poszczególnych wdrożeń.
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
                "name": "Czym jest widoczność organiczna?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Widoczność organiczna to odsetek potencjalnych użytkowników mogących zobaczyć witrynę w wynikach Google dla monitorowanych fraz. Syntetyczny wskaźnik SEO stosowany w narzędziach jak Senuto, Semrush i Sistrix do śledzenia trendu pozycjonowania."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
