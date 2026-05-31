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

export default function Ux() {
  return (
    <div className="prose-blog">
      <h2>Czym jest UX?</h2>
      <p>
        <strong>UX</strong> (User Experience — doświadczenie użytkownika) to całość
        wrażeń, emocji i odczuć, jakich doświadcza osoba korzystająca ze strony internetowej
        lub aplikacji — od pierwszego kontaktu przez nawigację, znalezienie informacji,
        wykonanie akcji, aż do opuszczenia serwisu. Dobry UX oznacza, że strona jest
        intuicyjna, szybka, przejrzysta i spełnia cel wizyty użytkownika bez frustracji.
      </p>
      <p>
        UX i SEO są nierozerwalnie połączone. Google interpretuje sygnały zachowań
        użytkowników — <Link href="/bounce-rate">bounce rate</Link>, czas na stronie,
        scroll depth, powrót do wyników — jako pośredni wskaźnik jakości strony.
        Zła doświadczenie użytkownika przekłada się na gorsze sygnały zaangażowania,
        co pośrednio wpływa na rankingi. Dobre UX i SEO wzajemnie się wzmacniają.
      </p>

      <h2>Elementy UX kluczowe dla SEO</h2>
      <p>
        <strong>Szybkość ładowania</strong> — <Link href="/core-web-vitals">Core Web Vitals</Link>
        (LCP, INP, CLS) to bezpośrednie czynniki rankingowe odzwierciedlające
        doświadczenie użytkownika. Strona ładująca się powyżej 3 sekund traci
        53% mobilnych użytkowników przed załadowaniem.
      </p>
      <p>
        <strong>Responsywność i dostępność mobilna</strong> —{" "}
        <Link href="/mobile-first-indexing">Mobile-First Indexing</Link> czyni
        mobilne UX priorytetem zarówno dla użytkowników, jak i algorytmu Google.
      </p>
      <p>
        <strong>Czytelna nawigacja i architektura informacji</strong> — użytkownik
        musi w kilku kliknięciach znaleźć to, czego szuka.{" "}
        <Link href="/internal-linking">Linkowanie wewnętrzne</Link> i menu odzwierciedlają
        hierarchię treści zarówno dla użytkownika, jak i Googlebota.
      </p>
      <p>
        <strong>Czytelność treści</strong> — odpowiedni rozmiar fontu, kontrast,
        długość akapitów, nagłówki strukturyzujące tekst. Trudna w czytaniu strona
        generuje wyższy bounce rate.
      </p>

      <InfoBox>
        <strong>Page Experience Update (2021) = UX jako czynnik rankingowy:</strong>
        Google formalnie włączył sygnały doświadczenia użytkownika do algorytmu rankingowego
        przez Core Web Vitals. HTTPS, brak intrusive interstitials (agresywnych popupów)
        i mobile-friendliness to elementy Page Experience wpływające na pozycje.
        UX przestał być „miłym dodatkiem" — jest mierzalnym czynnikiem SEO.
      </InfoBox>

      <h2>FAQ — UX</h2>

      <h3>Jak mierzyć UX strony?</h3>
      <p>
        <strong>Dane ilościowe</strong> — Google Analytics 4 (bounce rate, czas sesji,
        scroll depth, engagement rate), <Link href="/google-search-console">GSC</Link>
        (Core Web Vitals, Mobile Usability). <strong>Dane jakościowe</strong> —
        heatmapy i nagrania sesji (Hotjar, Microsoft Clarity) pokazują gdzie użytkownicy
        klikają, gdzie scrollują i gdzie rezygnują. <strong>Testy użytkowników</strong>
        — obserwacja rzeczywistych użytkowników wykonujących zadania na stronie.
      </p>

      <h3>Czy UX wpływa bezpośrednio na ranking?</h3>
      <p>
        Częściowo bezpośrednio (Core Web Vitals, HTTPS, mobile-friendliness)
        i częściowo pośrednio (sygnały zaangażowania: bounce rate, czas na stronie,
        powroty do wyników). Google interpretuje zachowania użytkowników jako sygnał
        jakości treści i strony. Dobry UX = niższy bounce rate = silniejszy sygnał,
        że strona spełnia oczekiwania użytkownika.
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
                "name": "Czym jest UX w kontekście SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "UX (User Experience) to doświadczenie użytkownika na stronie. Wpływa na SEO przez sygnały zaangażowania (bounce rate, czas na stronie) i bezpośrednio przez Core Web Vitals. Page Experience Update (2021) formalnie włączył UX do algorytmu rankingowego Google."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
