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

export default function SocialSignals() {
  return (
    <div className="prose-blog">
      <h2>Czym są social signals?</h2>
      <p>
        <strong>Social signals</strong> (sygnały społecznościowe) to wskaźniki aktywności
        i zaangażowania wokół treści w mediach społecznościowych — udostępnienia,
        polubienia, komentarze, wzmianki, reakcje na Facebooku, Twitterze/X,
        LinkedIn, Instagramie i innych platformach. W kontekście SEO pytanie brzmi:
        czy te sygnały wpływają bezpośrednio na pozycje w wynikach Google?
      </p>
      <p>
        <strong>Bezpośredni wpływ: nie.</strong> Google wielokrotnie potwierdzał,
        że polubienia i udostępnienia w social media nie są bezpośrednim czynnikiem
        rankingowym. Profile na Facebooku są crawlowane, ale algorytm ich sygnałów
        nie traktuje jak backlinków.
        <strong>Pośredni wpływ: tak</strong> — i to znaczący w dłuższej perspektywie.
      </p>

      <h2>Jak social signals pośrednio wpływają na SEO?</h2>
      <p>
        <strong>Amplifikacja zasięgu treści</strong> — viralny artykuł udostępniany tysiąc
        razy dociera do dziennikarzy, blogerów i twórców, którzy mogą go zlinkować
        z własnych stron. Każdy taki link to <Link href="/backlink">backlink</Link>
        bezpośrednio wpływający na SEO.
      </p>
      <p>
        <strong>Wzmianki o marce bez linku</strong> — Google może uwzględniać
        niezakotwiczone wzmianki o marce jako sygnał autorytetu i{" "}
        <Link href="/e-e-a-t">E-E-A-T</Link>, szczególnie gdy marka jest cytowana
        przez media w kontekście branżowym.
      </p>
      <p>
        <strong>Branded searches</strong> — użytkownicy, którzy zobaczą Twoją markę
        w social mediach, wyszukują ją w Google. Wysoki wolumen branded queries
        sygnalizuje Google rozpoznawalność i wiarygodność marki.
      </p>
      <p>
        <strong>Indeksowanie przez crawl linków social</strong> — choć linki z Facebooka
        i Twittera są nofollow, Google je crawluje, co może przyspieszyć odkrycie
        nowej treści przez <Link href="/googlebot">Googlebot</Link>.
      </p>

      <InfoBox>
        <strong>Social media ≠ SEO, ale wspierają SEO:</strong> Traktuj social media
        jako kanał dystrybucji treści, nie jako narzędzie SEO. Świetna treść,
        która zyska zasięg w social mediach, naturalnie przyciągnie backlinki
        i wzmianki o marce — co ma realne przełożenie na rankingi. Nie kupuj
        lajków ani udostępnień — to sztuczne sygnały bez wartości.
      </InfoBox>

      <h2>FAQ — Social Signals</h2>

      <h3>Czy linki z Facebooka lub Twittera przekazują link juice?</h3>
      <p>
        Nie — wszystkie linki z platform społecznościowych mają atrybut nofollow
        (lub ugc), co oznacza, że formalnie nie przekazują{" "}
        <Link href="/link-juice">link juice</Link> do linkowanych stron.
        Google może je crawlować i znać istnienie strony przez te linki,
        ale nie traktuje ich jak edytorialnych backlinków.
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
                "name": "Czy social signals wpływają na SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bezpośrednio — nie. Google nie traktuje polubień i udostępnień jako czynnika rankingowego. Pośrednio — tak. Aktywność w social mediach amplifikuje zasięg treści, co prowadzi do naturalnych backlinków, wzmianek o marce i branded searches — a te mają realne przełożenie na SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
