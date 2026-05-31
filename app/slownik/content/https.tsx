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
export default function Https() {
  return (
    <div className="prose-blog">
      <h2>Czym jest HTTPS i SSL?</h2>
      <p>
        <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) to szyfrowana wersja protokołu HTTP,
        używanego do przesyłania danych między przeglądarką użytkownika a serwerem.
        Szyfrowanie realizowane jest przez protokół <strong>TLS</strong> (Transport Layer Security,
        wcześniej SSL — Secure Sockets Layer, stąd powszechna nazwa „certyfikat SSL").
        Strony z HTTPS wyświetlają ikonę kłódki w przeglądarce i mają adres zaczynający się od <em>https://</em>.
        Strony HTTP — bez szyfrowania — Chrome oznacza od 2018 roku jako „Niezabezpieczone".
      </p>
      <p>
        Szyfrowanie TLS oznacza, że dane przesyłane między użytkownikiem a serwerem — hasła,
        dane kart kredytowych, dane osobowe, treści formularzy — są zaszyfrowane i niemożliwe
        do odczytania przez osoby trzecie nawet przy przechwyceniu transmisji (Man in the Middle Attack).
        To nie jest opcja dla stron zbierających jakiekolwiek dane od użytkownika — to standard.
      </p>

      <h2>HTTPS jako czynnik rankingowy Google</h2>
      <p>
        Google oficjalnie potwierdziło HTTPS jako czynnik rankingowy w sierpniu 2014 roku.
        W Google I/O 2014 John Mueller i Gary Illyes ogłosili, że HTTPS będzie dawać lekką przewagę
        w rankingu jako tiebreaker między stronami o zbliżonej jakości. Od tego czasu waga tego sygnału
        stopniowo rosła. Dziś HTTPS to de facto wymóg — strona HTTP w 2025/2026 nie tylko jest
        penalizowana rankingowo, ale aktywnie odstraszana przez przeglądarki i wywołuje ostrzeżenia
        bezpieczeństwa powodujące masową utratę ruchu.
      </p>
      <p>
        Bezpieczna strona to też sygnał <Link href="/e-e-a-t">Trustworthiness</Link> w ramach E-E-A-T.
        Brak HTTPS bezpośrednio obniża ocenę wiarygodności witryny przez Google Quality Raters —
        szczególnie dla stron z kategorii YMYL (finanse, zdrowie, prawo).
      </p>

      <h2>Jak wdrożyć certyfikat SSL?</h2>
      <p>
        <strong>Bezpłatny certyfikat Let's Encrypt</strong> — dostępny przez większość nowoczesnych
        hostingów z instalacją w jednym kliknięciu. Wymaga odnawiania co 90 dni (automatyzowane przez Certbot).
        Wystarczający dla zdecydowanej większości stron.
        <strong>Płatne certyfikaty (DigiCert, Comodo, GlobalSign)</strong> — Organization Validated (OV)
        i Extended Validation (EV) oferują wyższy poziom weryfikacji tożsamości firmy.
        Wymagane przez banki, instytucje finansowe i duże e-commerce dla zwiększonego zaufania.
        <strong>Wildcard SSL</strong> — jeden certyfikat chroniący główną domenę i wszystkie subdomeny
        (<em>*.domena.pl</em>). Przydatny przy rozbudowanej strukturze subdomen.
      </p>

      <h2>Migracja z HTTP na HTTPS — co zrobić żeby nie stracić ruchu?</h2>
      <p>
        Migracja na HTTPS to jedna z najważniejszych zmian technicznych SEO — przeprowadzona błędnie
        może spowodować poważne straty w rankingach. Kluczowe kroki to: instalacja certyfikatu SSL,
        przekierowanie wszystkich HTTP URL na HTTPS przez <Link href="/redirect-301">301</Link>
        (całej domeny, wszystkich podstron — włącznie z http://www, http://non-www i http://www w różnych kombinacjach),
        aktualizacja wewnętrznych linków na HTTPS, aktualizacja <Link href="/sitemap-xml">sitemap XML</Link>
        i pliku robots.txt na nowe adresy HTTPS, dodanie nowej właściwości HTTPS w
        <Link href="/google-search-console"> Google Search Console</Link> i przeniesienie do niej danych,
        oraz aktualizacja <Link href="/canonical-url">tagów canonical</Link> na adresy HTTPS.
      </p>

      <InfoBox>
        <strong>HTTP Strict Transport Security (HSTS):</strong> Po wdrożeniu HTTPS warto włączyć HSTS — nagłówek HTTP nakazujący przeglądarkom zawsze używać HTTPS dla danej domeny przez określony czas. Chroni przed atakami downgrade i przyspiesza ładowanie przez eliminację przekierowań. Konfiguracja po stronie serwera — Apache lub Nginx.
      </InfoBox>

      <h2>FAQ — HTTPS / SSL</h2>
      <h3>Czy HTTP (bez S) może rankować w Google?</h3>
      <p>
        Technicznie tak — brak HTTPS nie jest powodem do wykluczenia z indeksu.
        Ale strony HTTP mają niekorzyść rankingową względem odpowiedników HTTPS,
        przeglądarka Chrome wyświetla ostrzeżenie „Niezabezpieczone" odstraszające użytkowników,
        i każda forma zbierania danych (formularz, logowanie) jest narażona na przechwycenie.
        W praktyce: żadna poważna strona nie powinna działać na HTTP w 2025/2026.
      </p>
      <h3>Czy SSL i HTTPS to to samo?</h3>
      <p>
        Potocznie tak — oba terminy używane są zamiennie. Technicznie SSL (Secure Sockets Layer)
        to starszy protokół, zastąpiony przez TLS (Transport Layer Security). Certyfikat nadal nazywany
        jest „SSL" choć faktycznie używa protokołu TLS 1.2 lub 1.3. HTTPS to protokół HTTP używający
        szyfrowania TLS/SSL — adres URL z HTTPS oznacza szyfrowane połączenie.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czy HTTPS wpływa na ranking Google?", "acceptedAnswer": { "@type": "Answer", "text": "Tak — Google oficjalnie potwierdziło HTTPS jako czynnik rankingowy od 2014 roku. Strony bez certyfikatu SSL mają niekorzyść rankingową i wyświetlają ostrzeżenie w Chrome odstraszające użytkowników." } }] }) }} />
    </div>
  );
}
