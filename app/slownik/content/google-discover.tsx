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
export default function GoogleDiscover() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Discover?</h2>
      <p>
        <strong>Google Discover</strong> (wcześniej Google Feed) to spersonalizowany feed treści
        wyświetlany w aplikacji Google na smartfonach (iOS i Android) oraz na stronie głównej Google.com
        na urządzeniach mobilnych. Discover nie jest wynikiem wyszukiwania — działa bez zapytania,
        proaktywnie proponując artykuły, wideo i treści dopasowane do zainteresowań konkretnego użytkownika
        na podstawie jego historii wyszukiwań, lokalizacji, aktywności w YouTube i innych sygnałów Google.
      </p>
      <p>
        Google Discover osiągnął ponad 800 milionów aktywnych użytkowników miesięcznie (dane Google, 2021).
        Dla wydawców treści jest to ogromny kanał ruchu — artykuł trafiony przez Discover może wygenerować
        dziesiątki tysięcy odwiedzin w ciągu kilku godzin, bez aktywnego wyszukiwania.
      </p>

      <h2>Jak Google Discover wybiera treści?</h2>
      <p>
        Google nie ujawnił pełnego algorytmu Discover, ale na podstawie dokumentacji i badań wiemy,
        że główne czynniki to: trafność tematu dla zainteresowań użytkownika (na podstawie historii),
        świeżość treści — nowe artykuły mają przewagę, choć starsze evergreen content też się pojawia,
        jakość strony — <Link href="/core-web-vitals">Core Web Vitals</Link> i ogólna jakość wydawcy,
        przyciągające zdjęcia — Discover wyświetla duże obrazy (min. 1200 px szerokości) jako główny element karty,
        sygnały <Link href="/e-e-a-t">E-E-A-T</Link> — autorytet wydawcy w danym temacie,
        oraz angażowanie użytkowników z poprzednich artykułów — jeśli czytelnik regularnie czyta Twoje treści,
        algorytm proponuje kolejne.
      </p>

      <h2>Jak optymalizować treści pod Google Discover?</h2>
      <p>
        <strong>Wielkie, wysokiej jakości zdjęcia</strong> — to najważniejszy element karty w Discover.
        Użyj zdjęcia minimum 1200 px szerokości i dodaj <code>max-image-preview:large</code>
        w meta tagach (lub przez robots.txt), żeby pozwolić Google na wyświetlenie dużego podglądu.
        Małe lub niskiej jakości zdjęcia drastycznie obniżają CTR w Discover.
      </p>
      <p>
        <strong>Tytuły wzbudzające ciekawość</strong> — nagłówki w Discover są krótsze niż w SERP
        i muszą natychmiast przyciągać uwagę. Ale uwaga: Google aktywnie walczy z clickbait —
        tytuł musi odzwierciedlać treść, inaczej algorytm karze wydawcę obniżeniem widoczności.
      </p>
      <p>
        <strong>Aktualne i trendy tematy</strong> — Discover premiuje treści związane z bieżącymi
        wydarzeniami i trendami. Ale evergreen content też się pojawia — jeśli temat nabrał nowego znaczenia
        lub użytkownik wyraził zainteresowanie daną dziedziną.
      </p>

      <InfoBox>
        <strong>Discover nie jest przewidywalny:</strong> W odróżnieniu od SEO, gdzie optymalizacja daje mierzalne, powtarzalne wyniki — Discover jest z natury nieprzewidywalny. Artykuł może zdobyć 100 000 odwiedzin z Discover przez tydzień, a następnie zniknąć. Strategia oparta wyłącznie na Discover jest ryzykowna. Traktuj go jako bonus do solidnej strategii <Link href="/seo">SEO</Link> i <Link href="/content-marketing">content marketingowej</Link>.
      </InfoBox>

      <h2>FAQ — Google Discover</h2>
      <h3>Jak sprawdzić ruch z Google Discover?</h3>
      <p>
        W <Link href="/google-search-console">Google Search Console</Link> → Wyniki wyszukiwania →
        zmień zakładkę z „Wyszukiwanie" na „Discover". Zobaczysz kliknięcia, wyświetlenia i CTR
        dla treści pojawiających się w Discover. Dane są dostępne dopiero gdy strona uzyska
        wystarczającą liczbę wyświetleń w Discover — przy małym ruchu zakładka może być pusta.
      </p>
      <h3>Czy można wymusić pojawienie się w Google Discover?</h3>
      <p>
        Nie — nie istnieje bezpośredni sposób „zgłoszenia" treści do Discover.
        Discover sam decyduje o wyborze. Możesz zwiększyć szansę przez: duże zdjęcia, aktualne tematy,
        dobre Core Web Vitals, silny E-E-A-T i regularne publikowanie treści budujących zainteresowanie czytelników.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Discover?", "acceptedAnswer": { "@type": "Answer", "text": "Google Discover to spersonalizowany feed treści w aplikacji Google na mobile, wyświetlający artykuły bez aktywnego wyszukiwania. Treści są dobierane na podstawie historii użytkownika, zainteresowań i zaangażowania." } }] }) }} />
    </div>
  );
}
