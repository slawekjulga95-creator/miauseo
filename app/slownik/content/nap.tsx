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

export default function Nap() {
  return (
    <div className="prose-blog">
      <h2>Czym jest NAP?</h2>
      <p>
        <strong>NAP</strong> to akronim od <em>Name, Address, Phone</em> — nazwy firmy, adresu
        i numeru telefonu. W kontekście <Link href="/local-seo">local SEO</Link> NAP oznacza
        komplet podstawowych danych identyfikujących firmę, które muszą być dokładnie spójne
        we wszystkich miejscach w sieci, gdzie firma jest wymieniona. Spójność NAP to jeden
        z fundamentalnych sygnałów zaufania dla algorytmu Google przy ocenie lokalnej wiarygodności firmy.
      </p>
      <p>
        Google i inne wyszukiwarki zbierają dane o firmach z setek źródeł — katalogów, map,
        portali branżowych, mediów społecznościowych, recenzji. Kiedy dane są spójne wszędzie,
        algorytm z wysokim prawdopodobieństwem identyfikuje je jako dotyczące tej samej firmy
        i wzmacnia jej prominence. Rozbieżności — różny adres, inny format telefonu, skrócona nazwa —
        tworzą sygnał niezaufania i osłabiają widoczność w <Link href="/local-pack">Local Pack</Link>.
      </p>

      <h2>Gdzie NAP musi być spójne?</h2>
      <p>
        <strong>Google Business Profile</strong> — priorytet absolutny; dane w GBP są referencją,
        z którą Google porównuje inne źródła.
        <strong>Strona www</strong> — stopka, strona kontaktowa i schema.org LocalBusiness muszą
        zawierać identyczne dane jak GBP.
        <strong>Katalogi lokalne i branżowe</strong> — Panorama Firm, Yelp, TripAdvisor, Zomato,
        katalogi branżowe. Każde cytowanie (citation) ze spójnym NAP wzmacnia profil.
        <strong>Media społecznościowe</strong> — Facebook, Instagram, LinkedIn, Twitter/X —
        nazwa i adres w sekcji „O firmie" muszą być spójne.
        <strong>Platformy recenzji</strong> — Trustpilot, Google Maps, branżowe portale ocen.
      </p>

      <h2>Najczęstsze błędy niespójności NAP</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Źródło błędu</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Przykład rozbieżności</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-semibold text-ink">Format numeru telefonu</td><td className="p-4 text-zinc-600">+48 12 345 67 89 vs 123456789 vs 12 345-67-89</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Skrócona nazwa firmy</td><td className="p-4 text-zinc-600">„MiauSEO" vs „Miau SEO Sp. z o.o." vs „MiauSEO Agencja"</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Stary adres po przeprowadzce</td><td className="p-4 text-zinc-600">Aktualizacja w GBP, ale stary adres w 30 katalogach</td></tr>
            <tr><td className="p-4 font-semibold text-ink">Różne warianty ulicy</td><td className="p-4 text-zinc-600">„ul. Długa 5" vs „Długa 5" vs „Ulica Długa 5/1"</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>Przeprowadzka firmy = audyt NAP w całej sieci.</strong> Zmiana adresu to jedno z najtrudniejszych
        wyzwań local SEO — stary adres może być zaindeksowany w setkach miejsc przez lata.
        Narzędzia jak Bright Local Citation Tracker lub Moz Local pomagają zidentyfikować
        i zaktualizować wszystkie cytowania jednocześnie, zamiast robić to ręcznie.
      </InfoBox>

      <h2>FAQ — NAP</h2>

      <h3>Czy format NAP musi być identyczny co do znaku?</h3>
      <p>
        Algorytmy Google są wystarczająco inteligentne, by rozumieć drobne różnice formatowania
        (z przecinkiem, bez przecinka, skróty ulic). Jednak im bardziej spójne dane, tym mniejsze
        ryzyko błędnej interpretacji. Zaleca się wybranie jednego standardowego formatu i
        konsekwentne stosowanie go wszędzie.
      </p>

      <h3>Czy NAP dotyczy tylko firm z fizyczną lokalizacją?</h3>
      <p>
        Głównie tak — NAP jest kluczowe dla firm stacjonarnych lub obsługujących określony
        obszar geograficzny (SAB — Service Area Business). Firmy działające wyłącznie online,
        bez fizycznej lokalizacji dla klientów, są mniej zależne od cytowań NAP,
        choć spójność danych nadal wspiera wiarygodność marki.
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
                "name": "Czym jest NAP w local SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NAP (Name, Address, Phone) to nazwa firmy, adres i telefon — dane, które muszą być spójne we wszystkich miejscach w sieci. Spójność NAP jest fundamentalnym sygnałem zaufania dla Google przy ocenie lokalnej wiarygodności firmy i widoczności w Local Pack."
                }
              },
              {
                "@type": "Question",
                "name": "Co zrobić, kiedy firma zmienia adres?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zmiana adresu wymaga audytu i aktualizacji NAP we wszystkich miejscach w sieci. Priorytet: Google Business Profile, strona www, schema.org. Następnie wszystkie katalogi i media społecznościowe. Narzędzia jak Bright Local lub Moz Local pomagają zarządzać tym procesem."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
