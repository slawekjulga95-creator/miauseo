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
export default function Geotargeting() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Geotargeting?</h2>
      <p>
        <strong>Geotargeting</strong> (targetowanie geograficzne) to technologia pozwalająca wyświetlać reklamy,
        treści lub spersonalizowane doświadczenia wyłącznie użytkownikom znajdującym się w określonej lokalizacji
        geograficznej — kraju, województwie, mieście, dzielnicy lub promieniu od wskazanego punktu na mapie.
        Lokalizacja użytkownika ustalana jest na podstawie adresu IP, danych GPS urządzenia mobilnego,
        sieci Wi-Fi lub deklarowanej lokalizacji w ustawieniach konta Google.
      </p>
      <p>
        Geotargeting jest fundamentem <Link href="/local-seo">lokalnego SEO</Link> i kampanii
        <Link href="/google-ads"> Google Ads</Link> skierowanych do lokalnych rynków.
        Pozwala firmie z Krakowa wyświetlać reklamy wyłącznie mieszkańcom Krakowa i okolic —
        zamiast marnować budżet na kliknięcia z Gdańska czy Berlina.
      </p>

      <h2>Typy geotargetowania — od kraju do ulicy</h2>
      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Typ</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Granularność</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Zastosowanie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Kraj</td><td className="p-4 text-zinc-600">Cała Polska / Europa</td><td className="p-4 text-zinc-600">Kampanie ogólnokrajowe, e-commerce</td></tr>
            <tr><td className="p-4 font-medium text-ink">Region / województwo</td><td className="p-4 text-zinc-600">Małopolska, Mazowieckie</td><td className="p-4 text-zinc-600">Kampanie regionalne, sieci sklepów</td></tr>
            <tr><td className="p-4 font-medium text-ink">Miasto</td><td className="p-4 text-zinc-600">Kraków, Warszawa</td><td className="p-4 text-zinc-600">Usługi lokalne, restauracje, hotele</td></tr>
            <tr><td className="p-4 font-medium text-ink">Promień od punktu</td><td className="p-4 text-zinc-600">5 km od adresu firmy</td><td className="p-4 text-zinc-600">Firmy usługowe, delivery, kliniki</td></tr>
            <tr><td className="p-4 font-medium text-ink">Kod pocztowy / dzielnica</td><td className="p-4 text-zinc-600">Praga-Północ, 31-000</td><td className="p-4 text-zinc-600">Hyperlokalne kampanie</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Geotargeting w Google Ads</h2>
      <p>
        W <Link href="/google-ads">Google Ads</Link> geotargeting ustawia się na poziomie kampanii —
        w sekcji „Lokalizacje". Google oferuje targetowanie do lokalizacji (wyświetlaj reklamę użytkownikom w X)
        lub wykluczenie lokalizacji (nie wyświetlaj w Y). Dodatkowe ustawienie „Opcje lokalizacji" pozwala
        precyzować, czy targetujesz użytkowników <em>fizycznie</em> w danym miejscu,
        czy też wykazujących zainteresowanie tym miejscem (np. ktoś w Warszawie szukający „hotel Zakopane").
      </p>
      <p>
        Modyfikatory stawek według lokalizacji pozwalają zwiększać lub zmniejszać stawkę CPC
        dla konkretnych obszarów — np. podnosić stawkę o 20% dla centrum Krakowa, gdzie konwersja jest wyższa,
        i obniżać dla mniejszych miejscowości. To zaawansowana optymalizacja <Link href="/cpc">CPC</Link>
        wymagająca danych historycznych o konwersjach według lokalizacji.
      </p>

      <h2>Geotargeting w SEO — treść i linki lokalne</h2>
      <p>
        W organicznym SEO geotargeting realizowany jest przez: tworzenie stron dedykowanych konkretnym lokalizacjom
        (landing pages dla miast), optymalizację <Link href="/google-business-profile">Google Business Profile</Link>
        dla lokalnych zapytań, pozyskiwanie linków z lokalnych mediów i katalogów,
        oraz konsekwentne stosowanie <Link href="/nap">NAP</Link> (Name, Address, Phone) spójnego ze wszystkimi
        źródłami w sieci.
        Dla firm z wieloma oddziałami — dedykowane podstrony dla każdej lokalizacji z unikalną treścią,
        danymi kontaktowymi i mapą to standard lokalnej strategii SEO.
      </p>

      <InfoBox>
        <strong>Targetowanie lokalizacji vs. język:</strong> Geotargeting i targetowanie językowe to dwie odrębne kwestie. Użytkownik z Polski może wyszukiwać po angielsku; użytkownik w Niemczech może szukać po polsku. Dla wielojęzycznych witryn należy stosować <Link href="/hreflang">hreflang</Link> do sygnalizowania Google właściwej wersji językowej i regionalnej.
      </InfoBox>

      <h2>FAQ — Geotargeting</h2>
      <h3>Jak dokładne jest geotargetowanie w Google Ads?</h3>
      <p>
        Dokładność zależy od metody ustalania lokalizacji. GPS na mobile jest bardzo precyzyjny (kilkadziesiąt metrów),
        adres IP mniej — może wskazywać na miasto lub region, ale nie konkretną ulicę. Google łączy sygnały
        z wielu źródeł, żeby poprawić dokładność. W targetowaniu promieniowym błąd może wynosić 1–5 km.
      </p>
      <h3>Czy mogę targetować użytkowników, którzy odwiedzili konkretną lokalizację?</h3>
      <p>
        Tak — Google Ads i Meta Ads oferują targetowanie na odwiedzających konkretne miejsca (location-based audiences).
        Na przykład możesz targetować użytkowników, którzy byli w centrum handlowym lub na targach branżowych.
        Ta funkcja jest bardziej rozbudowana w Meta niż Google i wymaga odpowiednich uprawnień platformy.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest geotargeting?", "acceptedAnswer": { "@type": "Answer", "text": "Geotargeting to wyświetlanie reklam lub treści wyłącznie użytkownikom w określonej lokalizacji geograficznej — kraju, mieście, promieniu od punktu. Lokalizacja ustalana jest przez IP, GPS lub dane Wi-Fi." } }] }) }} />
    </div>
  );
}
