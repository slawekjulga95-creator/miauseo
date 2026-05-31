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

export default function TrustRank() {
  return (
    <div className="prose-blog">
      <h2>Czym jest TrustRank?</h2>
      <p>
        <strong>TrustRank</strong> to algorytm oceniający wiarygodność strony internetowej
        na podstawie jej <em>dystansu</em> od stron uznanych za zaufane (seed sites) —
        takich jak strony rządowe, akademickie, duże media i inne autorytatywne zasoby
        o niekwestionowanej reputacji. Strona bezpośrednio linkowana przez zaufane źródło
        ma wysoki TrustRank; strona powiązana jedynie przez kilka pośrednich skoków —
        niższy.
      </p>
      <p>
        TrustRank został opisany w akademickim artykule badaczy z Yahoo i Stanforda w 2004 roku
        (Gyöngyi, Garcia-Molina, Pedersen) jako metoda walki ze spamem SEO.
        Idea: spamowe strony rzadko są linkowane bezpośrednio z wiarygodnych źródeł,
        więc mierzenie „odległości" od zaufanych stron jest lepszym filtrem
        niż sam <Link href="/pagerank">PageRank</Link>.
      </p>

      <h2>TrustRank a E-E-A-T</h2>
      <p>
        Google nie potwierdziło oficjalnie używania algorytmu TrustRank w opisanej formie,
        ale koncepcja wiarygodności i zaufania jest fundamentem współczesnego{" "}
        <Link href="/e-e-a-t">E-E-A-T</Link> (Expertise, Experience, Authoritativeness,
        Trustworthiness). Trustworthiness — zaufanie — to jeden z czterech filarów E-E-A-T
        i jest szczególnie ważny dla stron YMYL (Your Money, Your Life): medycznych,
        finansowych, prawnych i e-commerce.
      </p>

      <h2>Co buduje zaufanie domeny?</h2>
      <p>
        <strong>Linki z autorytatywnych źródeł</strong> — backlinki z wiarygodnych,
        rozpoznawalnych domen (uczelnie, media, instytucje rządowe, branżowi liderzy)
        bezpośrednio przenoszą zaufanie na linkowaną stronę. Jeden link z CNN lub
        Uniwersytetu Jagiellońskiego buduje więcej wiarygodności niż setki linków
        ze stron o nieznanej reputacji.
      </p>
      <p>
        <strong>Przejrzyste informacje o autorach i firmie</strong> — strona About,
        profile autorów z bio i linkami do zweryfikowanych profili (LinkedIn, Twitter/X),
        dane kontaktowe, informacje prawne (regulamin, polityka prywatności, NIP/KRS).
      </p>
      <p>
        <strong>Wzmianki w mediach i cytowania</strong> — obecność w renomowanych
        mediach branżowych, cytowania badań i danych przez inne wiarygodne strony.
      </p>
      <p>
        <strong>Certyfikaty i oznaczenia</strong> — SSL/HTTPS, oznaczenia branżowe,
        certyfikaty jakości widoczne na stronie.
      </p>

      <InfoBox>
        <strong>Zaufanie buduje się latami — nie przez technikalia:</strong> Wysoka
        wiarygodność domeny to wynik konsekwentnych działań: regularnej, eksperckiej treści,
        transparentności autorstwa, obecności w mediach i silnego profilu backlinków
        z wiarygodnych źródeł. Żaden skrót techniczny nie zastąpi rzeczywistej ekspertyzy
        i reputacji budowanej w czasie.
      </InfoBox>

      <h2>FAQ — TrustRank</h2>

      <h3>Jak sprawdzić wiarygodność (TrustRank) swojej domeny?</h3>
      <p>
        Google nie udostępnia bezpośredniego wskaźnika TrustRank. Branżowe przybliżenia:
        Trust Flow w Majestic, Trust Score w Semrush, autorytet domeny w Ahrefs i Moz.
        Pośrednie sygnały: jakość i trafność stron linkujących (duże media, uczelnie,
        instytucje), historia domeny bez kar algorytmicznych, obecność w Knowledge Graph.
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
                "name": "Czym jest TrustRank?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TrustRank to algorytm oceniający wiarygodność strony na podstawie dystansu od zaufanych źródeł (strony rządowe, akademickie, media). Strony bliższe wiarygodnym źródłom mają wyższy TrustRank. Koncepcja jest powiązana z E-E-A-T Google, szczególnie z komponentem Trustworthiness."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
