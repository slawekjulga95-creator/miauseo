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

export default function VoiceSearch() {
  return (
    <div className="prose-blog">
      <h2>Czym jest voice search?</h2>
      <p>
        <strong>Voice search</strong> (wyszukiwanie głosowe) to forma wyszukiwania
        w internecie za pomocą asystentów głosowych i mikrofonu — Google Assistant,
        Siri, Alexa, Cortana. Użytkownik zamiast wpisywać frazę, wypowiada pytanie
        lub polecenie, które asystent przetwarza i zwraca odpowiedź — często jako
        pojedynczą odpowiedź głosową, nie listę wyników.
      </p>
      <p>
        Dla SEO voice search ma dwie kluczowe implikacje. Pierwsza: zapytania głosowe
        są naturalniejsze i dłuższe niż tekstowe — zamiast „restauracja Kraków" użytkownik
        pyta „jakie restauracje są otwarte teraz blisko mnie?". Druga: asystent głosowy
        zazwyczaj czyta jedną odpowiedź, nie listę — to oznacza, że pozycja 1
        lub <Link href="/featured-snippet">Featured Snippet</Link> ma nieproporcjonalnie
        dużą wartość dla voice search.
      </p>

      <h2>Jak optymalizować pod voice search?</h2>
      <p>
        <strong>Frazy konwersacyjne i pytania</strong> — treść powinna odpowiadać
        na pytania formułowane naturalnym językiem. Sekcje FAQ, nagłówki H2/H3
        jako pytania (np. „Jak długo trwa pozycjonowanie?"), odpowiedzi pisane
        językiem mówionym, nie korporacyjnym.
      </p>
      <p>
        <strong>Frazy <Link href="/long-tail-keyword">long-tail</Link> i lokalne</strong> —
        wyszukiwania głosowe są naturalnie bardziej szczegółowe. Optymalizacja pod
        „pozycjonowanie lokalne dla małych firm w Krakowie" odpowiada naturalnym
        pytaniom głosowym.
      </p>
      <p>
        <strong>Optymalizacja pod Featured Snippet</strong> — asystenci często odczytują
        <Link href="/featured-snippet"> featured snippet</Link> jako odpowiedź.
        Krótkie, precyzyjne odpowiedzi (40–50 słów) na pytania „co to jest", „jak", „dlaczego"
        mają największą szansę na pozycję 0.
      </p>
      <p>
        <strong><Link href="/local-seo">Local SEO</Link> i Google Business Profile</strong> —
        znaczna część voice search to zapytania lokalne („restauracja blisko mnie",
        „godziny otwarcia"). Silny profil GBP i spójne{" "}
        <Link href="/nap">dane NAP</Link> są fundamentem widoczności w tym segmencie.
      </p>

      <InfoBox>
        <strong>Voice search w Polsce vs. USA:</strong> W Polsce wyszukiwanie głosowe
        jest mniej rozpowszechnione niż w USA — polszczyzna jest trudniejsza dla
        asystentów głosowych i mniej użytkowników korzysta z Google Home/Alexa.
        Jednak trendy są jasne: użytkownicy mobilni coraz częściej używają głosu
        szczególnie dla zapytań lokalnych i nawigacyjnych. Optymalizacja pod voice search
        w Polsce oznacza przede wszystkim jakość odpowiedzi na pytania i local SEO.
      </InfoBox>

      <h2>FAQ — Voice Search</h2>

      <h3>Czy voice search jest ważny dla B2B?</h3>
      <p>
        Mniej niż dla B2C i local SEO. Zapytania głosowe dominują w kontekście codziennych,
        szybkich potrzeb — informacje lokalne, przepisy, pogoda, nawigacja.
        Złożone zapytania B2B (wybór oprogramowania, porównanie dostawców, ocena ofert)
        są zazwyczaj realizowane przez wyszukiwanie tekstowe na desktopie.
        Dla serwisów B2B optymalizacja pod voice search jest mniej priorytetowa niż
        jakość treści eksperckich i featured snippets dla fraz informacyjnych.
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
                "name": "Czym jest voice search?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Voice search to wyszukiwanie głosowe przez asystentów (Google, Siri). Zapytania głosowe są naturalniejsze i dłuższe niż tekstowe. Optymalizacja wymaga fraz konwersacyjnych, FAQ, treści pod featured snippet i silnego local SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
