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
export default function GoogleBusinessProfile() {
  return (
    <div className="prose-blog">
      <h2>Czym jest Google Business Profile?</h2>
      <p>
        <strong>Google Business Profile</strong> (GBP, dawniej Google Moja Firma / Google My Business)
        to bezpłatne narzędzie Google pozwalające firmom zarządzać swoją obecnością w wyszukiwarce
        Google i Google Maps. Profil wyświetla się jako karta po prawej stronie wyników wyszukiwania
        dla zapytań brandowych (np. „Mechanik Kowalski Kraków") oraz w <Link href="/local-pack">Local Packu</Link>
        — bloku z mapą i trzema wyróżnionymi firmami dla zapytań lokalnych.
        GBP to absolutny fundament <Link href="/local-seo">lokalnego SEO</Link> dla każdej firmy z fizyczną lokalizacją lub obsługującą klientów na danym terenie.
      </p>

      <h2>Co zawiera profil Google Business Profile?</h2>
      <p>
        Profil GBP to znacznie więcej niż tylko adres i telefon. Kompletny profil zawiera:
        nazwę firmy — powinna być identyczna z tą używaną w innych miejscach w sieci (zasada <Link href="/nap">NAP</Link>),
        kategorię główną i kategorie dodatkowe — decydują o tym, przy jakich frazach Google wyświetla profil,
        opis firmy — do 750 znaków, przestrzeń na naturalne słowa kluczowe i przekaz marki,
        godziny otwarcia — regularne i świąteczne, aktualizowane na bieżąco,
        zdjęcia i wideo — wnętrze, zewnętrze, zespół, produkty — profile z co najmniej 10 zdjęciami
        dostają o 42% więcej próśb o trasę,
        posty GBP — aktualności, oferty, wydarzenia, produkty,
        sekcja Q&A — pytania i odpowiedzi widoczne bezpośrednio na profilu,
        opinie klientów — jeden z silniejszych czynników rankingowych w Local Packu.
      </p>

      <h2>Jak GBP wpływa na widoczność w Google Maps?</h2>
      <p>
        Algorytm Local Pack bierze pod uwagę trzy główne czynniki: <strong>Relevance</strong>
        (trafność — jak dobrze profil odpowiada na zapytanie), <strong>Distance</strong>
        (odległość fizyczna od użytkownika lub wskazanej lokalizacji) i <strong>Prominence</strong>
        (prominencja — jak znana i ceniona jest firma w internecie: opinie, linki, cytowania).
        Spośród tych czynników Prominence jest tym, który firmy mogą najbardziej aktywnie kształtować:
        przez zdobywanie i odpowiadanie na opinie, aktywność postami, uzupełnianie profilu w 100%
        i budowanie spójnych cytowań NAP w katalogach branżowych.
      </p>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Element profilu</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Wpływ na ranking</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Priorytet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 font-medium text-ink">Kategoria główna</td><td className="p-4 text-zinc-600">Bardzo wysoki — decyduje o frazach</td><td className="p-4 text-green-600 font-semibold">Krytyczny</td></tr>
            <tr><td className="p-4 font-medium text-ink">Opinie (liczba i ocena)</td><td className="p-4 text-zinc-600">Wysoki — Prominence i CTR</td><td className="p-4 text-green-600 font-semibold">Krytyczny</td></tr>
            <tr><td className="p-4 font-medium text-ink">Kompletność profilu</td><td className="p-4 text-zinc-600">Wysoki — Google preferuje pełne profile</td><td className="p-4 text-green-600 font-semibold">Wysoki</td></tr>
            <tr><td className="p-4 font-medium text-ink">Aktywność postów</td><td className="p-4 text-zinc-600">Średni — sygnał aktywności</td><td className="p-4 text-zinc-600">Średni</td></tr>
            <tr><td className="p-4 font-medium text-ink">Zdjęcia</td><td className="p-4 text-zinc-600">Średni — CTR i zaangażowanie</td><td className="p-4 text-zinc-600">Średni</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>GBP a strona www — nie wykluczają się:</strong> Google Business Profile to nie alternatywa dla strony internetowej — to uzupełnienie. Profil GBP jest widoczny dla zapytań lokalnych, strona buduje autorytet organiczny dla szerszych fraz. Firmy z kompletnym GBP <em>i</em> zoptymalizowaną stroną dominują w lokalnych wynikach znacznie skuteczniej niż te, które inwestują tylko w jedno z tych narzędzi.
      </InfoBox>

      <h2>FAQ — Google Business Profile</h2>
      <h3>Czy Google Business Profile jest płatne?</h3>
      <p>
        Nie — profil GBP jest całkowicie bezpłatny. Google zarabia na reklamach wokół wyników organicznych,
        ale sama wizytówka nie kosztuje nic. Jedynym kosztem jest czas potrzebny na założenie, weryfikację i optymalizację.
      </p>
      <h3>Jak zweryfikować firmę w Google Business Profile?</h3>
      <p>
        Najczęstsze metody weryfikacji: kartka pocztowa z kodem (5–14 dni roboczych),
        telefon lub SMS (dostępny dla wybranych firm), nagranie wideo (od 2023 coraz popularniejsze),
        lub weryfikacja natychmiastowa jeśli domena jest już zweryfikowana w Google Search Console.
        Bez weryfikacji profil nie jest widoczny publicznie.
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Czym jest Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Google Business Profile (dawniej Google Moja Firma) to bezpłatne narzędzie do zarządzania obecnością firmy w Google i Maps. Profil wyświetla się w Local Packu dla lokalnych zapytań. Podstawa lokalnego SEO." } }] }) }} />
    </div>
  );
}
