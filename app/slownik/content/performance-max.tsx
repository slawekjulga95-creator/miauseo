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

export default function PerformanceMax() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Performance Max?</h2>
      <p>
        <strong>Performance Max</strong> (PMax) to typ kampanii <Link href="/google-ads">Google Ads</Link>,
        który automatycznie wyświetla reklamy we <strong>wszystkich kanałach Google</strong> jednocześnie —
        w sieci wyszukiwania, Display, YouTube, Discover, Gmail i Mapach.
        W odróżnieniu od tradycyjnych kampanii, w PMax nie wybierasz kanałów, grup reklam
        ani słów kluczowych. Zamiast tego dostarczasz zasoby (teksty, obrazy, wideo, sygnały odbiorców),
        a algorytm machine learning Google decyduje, gdzie, kiedy i komu wyświetlać reklamy,
        żeby zmaksymalizować wyniki konwersji.
      </p>
      <p>
        Google oficjalnie rekomenduje PMax dla reklamodawców zorientowanych na konwersje —
        zakup, formularz, połączenie telefoniczne. Od 2022 roku PMax zastąpił kampanie
        Smart Shopping i Local jako główny format automatycznych kampanii Google Ads.
      </p>

      <h2>Jak działa Performance Max?</h2>
      <p>
        Reklamodawca dostarcza tzw. <strong>asset group</strong> — zestawy zasobów kreatywnych:
        do 15 nagłówków, 4 długich nagłówków, 4 opisy, do 15 obrazów, do 5 wideo,
        logo i sygnały odbiorców (grupy remarketingowe, custom intent). Algorytm Google
        testuje kombinacje zasobów we wszystkich kanałach i automatycznie optymalizuje
        pod wybrany cel konwersji i budżet.
      </p>
      <p>
        PMax działa w tle kampanii Search — jeśli zapytanie użytkownika pasuje do istniejącej
        kampanii wyszukiwania z odpowiadającym słowem kluczowym, kampania Search ma pierwszeństwo.
        PMax przejmuje zapytania nieobsłużone przez kampanie Search.
      </p>

      <h2>Zalety i ograniczenia PMax</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zalety</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Ograniczenia</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 text-zinc-600">Zasięg we wszystkich kanałach Google z jednej kampanii</td><td className="p-4 text-zinc-600">Brak kontroli nad słowami kluczowymi i miejscami docelowymi</td></tr>
            <tr><td className="p-4 text-zinc-600">Machine learning Google optymalizuje stawki w czasie rzeczywistym</td><td className="p-4 text-zinc-600">Ograniczona przejrzystość — niewidoczne zapytania i miejsca docelowe</td></tr>
            <tr><td className="p-4 text-zinc-600">Skuteczny przy dobrze skonfigurowanych celach konwersji</td><td className="p-4 text-zinc-600">Wymaga minimum 30–50 konwersji miesięcznie do efektywnej optymalizacji</td></tr>
            <tr><td className="p-4 text-zinc-600">Obsługuje remarketing, TOFU i MOFU jednocześnie</td><td className="p-4 text-zinc-600">Może kanibalizować branded queries kampanii Search</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>PMax nie zastępuje kampanii Search w każdym przypadku:</strong> Dla reklamodawców
        z dobrze skonfigurowanymi kampaniami Search i precyzyjną kontrolą nad słowami kluczowymi,
        PMax jest uzupełnieniem, nie zamiennikiem. Kompetentni specjaliści <Link href="/ppc">PPC</Link>{" "}
        prowadzą obie formy równolegle — Search dla precyzyjnych intencji zakupowych,
        PMax dla odkrywania nowych odbiorców i zasięgu omnichannel.
      </InfoBox>

      <h2>FAQ — Performance Max</h2>

      <h3>Ile budżetu potrzebuje PMax?</h3>
      <p>
        Google rekomenduje minimum 50–100 zł dziennie, żeby algorytm miał wystarczająco danych
        do optymalizacji. W praktyce — im więcej konwersji generuje kampania, tym lepiej
        działa machine learning. PMax z budżetem pozwalającym na mniej niż 30 konwersji
        miesięcznie wejdzie w fazę uczenia i będzie suboptymalna.
      </p>

      <h3>Jak interpretować wyniki PMax?</h3>
      <p>
        Raport PMax pokazuje wyniki w podziale na grupy zasobów i kanały, ale nie na poziomie
        słów kluczowych. Kluczowe metryki to ROAS (Return on Ad Spend), <Link href="/cpa">CPA</Link>,
        liczba konwersji i wartość konwersji. Insights w PMax pokazują tematy wyszukiwań,
        grupy odbiorców i sygnały, które algorytm uznaje za kluczowe — to jedyne okno
        na to, na co faktycznie wydajesz budżet.
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
                "name": "Czym jest kampania Performance Max?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Performance Max to typ kampanii Google Ads automatycznie wyświetlający reklamy we wszystkich kanałach Google (Search, Display, YouTube, Discover, Gmail, Mapy) przy pomocy machine learning. Reklamodawca dostarcza zasoby kreatywne, algorytm optymalizuje pod konwersje."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Performance Max zastępuje kampanie Search?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie zawsze. Dla precyzyjnej kontroli nad słowami kluczowymi kampanie Search mają pierwszeństwo. PMax jest uzupełnieniem — obsługuje zapytania nieobsłużone przez Search i rozszerza zasięg omnichannel. Oba typy sprawdzają się najlepiej razem."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
