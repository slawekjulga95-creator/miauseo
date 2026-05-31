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

export default function UserSignals() {
  return (
    <div className="prose-blog">
      <h2>Czym są user signals?</h2>
      <p>
        <strong>User signals</strong> (sygnały użytkownika) to dane o zachowaniach
        użytkowników w wynikach wyszukiwania i na stronach, które Google może
        wykorzystywać jako pośredni wskaźnik jakości i trafności treści.
        Obejmują: <Link href="/ctr">CTR</Link> (Click-Through Rate) wyników w SERP,
        czas spędzony na stronie po kliknięciu, <Link href="/bounce-rate">bounce rate</Link>,
        pogo-sticking (szybki powrót do wyników po wejściu na stronę), scroll depth
        i wzorce nawigacji.
      </p>
      <p>
        Google oficjalnie nie potwierdza, że wszystkie te sygnały są bezpośrednimi
        czynnikami rankingowymi. Jednak logika algorytmiczna jest przejrzysta:
        strona, do której użytkownicy wracają zadowoleni (długi czas, brak szybkiego powrotu
        do SERP), lepiej odpowiada na zapytanie niż ta, z której uciekają po kilku sekundach.
      </p>

      <h2>Kluczowe typy user signals</h2>
      <p>
        <strong>CTR w SERP</strong> — procent użytkowników klikających wynik po zobaczeniu
        go w wynikach wyszukiwania. Google może testować korelację między CTR a pozycją —
        wyniki z wyższym CTR dla danego zapytania mogą z czasem awansować.
        Optymalizacja <Link href="/meta-title">meta title</Link> i{" "}
        <Link href="/meta-description">opisu</Link> bezpośrednio wpływa na CTR.
      </p>
      <p>
        <strong>Pogo-sticking</strong> — zjawisko szybkiego powrotu do wyników SERP
        po kliknięciu wyniku. Jest silnym negatywnym sygnałem: użytkownik nie znalazł
        odpowiedzi i wrócił szukać dalej. Wysoki pogo-sticking sygnalizuje niedopasowanie
        treści do <Link href="/search-intent">intencji wyszukiwania</Link>.
      </p>
      <p>
        <strong>Dwell time</strong> — czas między kliknięciem wyniku a powrotem do SERP.
        Długi dwell time = użytkownik zaangażował się z treścią. Krótki = nie znalazł
        czego szukał. Google Discover i YouTube algorytmy jawnie używają czasu obejrzenia
        jako sygnału jakości.
      </p>
      <p>
        <strong>Scroll depth i engagement</strong> — jak daleko użytkownicy scrollują
        stronę i czy wykonują interakcje (kliknięcia, formularze). Mierzone przez GA4
        i narzędzia heatmapowe.
      </p>

      <InfoBox>
        <strong>Nie optymalizuj metryk — optymalizuj doświadczenie:</strong> Próba
        sztucznego poprawienia user signals (np. przez clickbait w meta title)
        może chwilowo podnieść CTR, ale zwiększy pogo-sticking gdy użytkownik
        nie znajdzie obiecanego. Google rozumie wzorce — spójność między obietnicą
        a treścią jest ważniejsza niż optymalizacja pojedynczych wskaźników.
      </InfoBox>

      <h2>FAQ — User Signals</h2>

      <h3>Jak poprawić user signals?</h3>
      <p>
        Przez poprawę doświadczenia użytkownika na każdym etapie:
        <strong>W SERP</strong> — atrakcyjny, trafny <Link href="/meta-title">meta title</Link>
        i <Link href="/meta-description">opis</Link>, rich snippety dla kwalifikujących się treści.
        <strong>Na stronie</strong> — szybkość (<Link href="/core-web-vitals">Core Web Vitals</Link>),
        dopasowanie treści do intencji, czytelny układ, jasna nawigacja.
        Pozytywne user signals są efektem ubocznym dobrego UX i trafnej treści —
        nie da się ich podrobić bez naprawienia fundamentów.
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
                "name": "Czym są user signals w SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "User signals to dane o zachowaniach użytkowników w SERP i na stronach — CTR, pogo-sticking, dwell time, bounce rate, scroll depth. Pośrednio wpływają na rankingi przez sygnalizowanie Google, jak dobrze strona odpowiada na intencję użytkownika."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
