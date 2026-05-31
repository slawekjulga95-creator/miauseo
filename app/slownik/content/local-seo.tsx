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

export default function LocalSeo() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Local SEO?</h2>
      <p>
        <strong>Local SEO</strong> (pozycjonowanie lokalne) to zestaw działań zwiększających widoczność
        firmy w wynikach wyszukiwania Google dla zapytań zawierających lokalizację lub mających lokalną
        intencję. Dotyczy zarówno wyników w <Link href="/local-pack">Local Pack</Link> (mapa + top 3),
        jak i klasycznych wyników organicznych z frazami typu „fryzjer Kraków" czy
        „hydraulik blisko mnie".
      </p>
      <p>
        Local SEO jest kluczowe dla firm, które obsługują klientów w określonym obszarze geograficznym —
        restauracji, gabinetów, warsztatów, prawników, agencji nieruchomości, salonów i każdego biznesu,
        gdzie lokalizacja ma znaczenie dla wyboru klienta.
      </p>

      <h2>Filary local SEO</h2>
      <p>
        <strong>Google Business Profile</strong> — profil firmy w Google to fundament lokalnego SEO.
        Zweryfikowany, uzupełniony i aktywny profil <Link href="/google-business-profile">GBP</Link>{" "}
        decyduje o widoczności w Local Pack. Nazwa, kategoria, opis, godziny otwarcia, zdjęcia,
        posty i odpowiedzi na recenzje — każdy element buduje siłę profilu.
      </p>
      <p>
        <strong>Spójność NAP</strong> — dane firmy (<Link href="/nap">Name, Address, Phone</Link>)
        muszą być identyczne w każdym miejscu w sieci: na stronie www, w GBP, katalogach,
        mediach społecznościowych i wzmiankach. Rozbieżności są sygnałem niezaufania dla algorytmu.
      </p>
      <p>
        <strong>Recenzje Google</strong> — liczba, ocena i świeżość recenzji to jedne z najsilniejszych
        sygnałów rankingowych dla lokalnych wyników. Regularne pozyskiwanie recenzji od zadowolonych
        klientów i odpowiadanie na nie (w tym na negatywne) buduje prominence w oczach Google.
      </p>
      <p>
        <strong>Cytowania lokalne</strong> — wpisy w katalogach branżowych i lokalnych (Panorama Firm,
        Yelp, TripAdvisor, branżowe portale) ze spójnymi danymi NAP wzmacniają wiarygodność domeny
        w danym obszarze geograficznym.
      </p>
      <p>
        <strong>Lokalne treści i <Link href="/geotargeting">geotargeting</Link> na stronie</strong> —
        dedykowane podstrony dla obsługiwanych miast lub dzielnic, lokalne słowa kluczowe w nagłówkach
        i treściach, schema.org LocalBusiness — to elementy on-page, które sygnalizują Google
        lokalny charakter działalności.
      </p>

      <h2>Różnica między local SEO a klasycznym SEO</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Aspekt</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Local SEO</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Klasyczne SEO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Cel</td><td className="p-4 text-zinc-600">Widoczność w danym mieście / regionie</td><td className="p-4 text-zinc-600">Widoczność ogólnopolska lub globalna</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Algorytm</td><td className="p-4 text-zinc-600">Local Pack (trafność, odległość, prominence)</td><td className="p-4 text-zinc-600">Organiczny (treść, linki, technikalia)</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Kluczowe narzędzie</td><td className="p-4 text-zinc-600">Google Business Profile</td><td className="p-4 text-zinc-600">Strona www + backlinki</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Recenzje</td><td className="p-4 text-zinc-600">Bezpośredni sygnał rankingowy</td><td className="p-4 text-zinc-600">Pośredni (E-E-A-T, CTR)</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Wyszukiwanie „blisko mnie" eksplodowało:</strong> Zapytania z frazą „near me" lub
        „blisko mnie" rosną wykładniczo — i w 80% przypadków kończą się wizytą w sklepie lub
        telefonem do firmy w ciągu 24 godzin. Dla biznesów lokalnych Local SEO to często
        najwyższy ROI ze wszystkich kanałów marketingowych.
      </InfoBox>

      <h2>FAQ — Local SEO</h2>

      <h3>Czy local SEO działa bez strony internetowej?</h3>
      <p>
        Częściowo — zweryfikowany profil Google Business Profile pozwala pojawiać się w Local Pack
        nawet bez własnej strony. Jednak strona www wzmacnia wiarygodność, umożliwia zbieranie
        organicznego ruchu na frazy lokalne i daje przestrzeń na treści lokalne.
        Brak strony to wyraźna przewaga dla konkurentów, którzy ją mają.
      </p>

      <h3>Jak długo trwa efekt local SEO?</h3>
      <p>
        Pierwsze efekty (poprawa widoczności w GBP, wzrost liczby recenzji) są widoczne w ciągu
        4–8 tygodni od wdrożenia podstawowych działań. Pełne efekty — stabilna pozycja w top 3
        i organiczny wzrost ruchu lokalnego — zwykle pojawiają się po 3–6 miesiącach
        konsekwentnych działań.
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
                "name": "Czym jest Local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local SEO (pozycjonowanie lokalne) to działania zwiększające widoczność firmy w wynikach Google dla zapytań z lokalizacją. Obejmuje optymalizację Google Business Profile, zarządzanie recenzjami, spójność danych NAP i cytowania w lokalnych katalogach."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo trwa efekt local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pierwsze efekty są widoczne w 4–8 tygodni. Stabilna pozycja w top 3 Local Pack i organiczny wzrost ruchu lokalnego zwykle pojawiają się po 3–6 miesiącach konsekwentnych działań."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
