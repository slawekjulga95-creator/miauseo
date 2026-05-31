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

export default function TitleTag() {
  return (
    <div className="prose-blog">
      <h2>Czym jest title tag?</h2>
      <p>
        <strong>Title tag</strong> (tag tytułu, <Link href="/meta-title">meta title</Link>)
        to element HTML <code>&lt;title&gt;</code> definiujący tytuł strony.
        Wyświetla się jako klikalny niebieski link w wynikach wyszukiwania Google (<Link href="/serp">SERP</Link>),
        jako nazwa zakładki przeglądarki i jako domyślny tytuł przy udostępnianiu strony
        w mediach społecznościowych.
      </p>
      <p>
        Title tag jest <strong>najważniejszym on-page czynnikiem rankingowym</strong> —
        bezpośrednio informuje algorytm Google, o czym jest strona, zanim ten zaindeksuje
        jej treść. Jest jednocześnie pierwszym tekstem widocznym dla użytkownika
        w wynikach, co czyni go głównym determinantą <Link href="/ctr">CTR</Link>.
      </p>

      <h2>Jak pisać efektywny title tag?</h2>
      <p>
        <strong>Optymalna długość: 50–60 znaków</strong> — Google obcina tytuły
        dłuższe niż ok. 600 px (mniej więcej 55–60 znaków). Obcięty tytuł
        z wielokropkiem wygląda nieprofesjonalnie i traci siłę przekazu.
      </p>
      <p>
        <strong>Fraza kluczowa na początku</strong> — słowa na początku tytułu
        mają większą wagę SEO. „Pozycjonowanie lokalne Kraków | MiauSEO" jest
        lepsze niż „MiauSEO | Kraków pozycjonowanie lokalne".
      </p>
      <p>
        <strong>Unikalny dla każdej strony</strong> — zduplikowane title tagi
        utrudniają Google rozróżnienie między stronami i osłabiają sygnały rankingowe.
      </p>
      <p>
        <strong>Marka na końcu</strong> — konwencja „[Fraza] | [Marka]" jest standardem
        branżowym. Marka na początku ma sens tylko dla stron brandowych.
      </p>

      <InfoBox>
        <strong>Od 2021 roku Google może nadpisać Twój title:</strong> Google Search Generated Titles
        mogą zastąpić Twój tag w SERP, jeśli uzna go za nieodpowiedni — zbyt długi,
        keyword-stuffed, niezgodny z treścią lub identyczny z <Link href="/heading-tags">H1</Link>.
        Dobrze napisany, trafny title tag rzadko jest nadpisywany. Monitoruj
        w <Link href="/google-search-console">Google Search Console</Link> → Strony
        → kliknij URL → sprawdź faktyczne wyświetlane tytuły.
      </InfoBox>

      <h2>FAQ — Title Tag</h2>

      <h3>Czy title tag i H1 powinny być identyczne?</h3>
      <p>
        Nie muszą i często nie powinny. Title tag optymalizuje się pod SEO i CTR
        w wynikach wyszukiwania. H1 optymalizuje się pod użytkownika na stronie.
        Mogą być podobne, ale różnić się formą — title jest bardziej zwięzły,
        H1 może być bardziej konwersacyjny. Identyczność jest akceptowalna;
        różnorodność pozwala optymalizować każdy element pod swój kontekst.
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
                "name": "Czym jest title tag?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Title tag to element HTML <title> wyświetlany jako klikalny link w wynikach Google. Najważniejszy on-page czynnik rankingowy. Optymalna długość: 50–60 znaków, fraza kluczowa na początku, nazwa marki na końcu, unikalny dla każdej strony."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
