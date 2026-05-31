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

export default function Query() {
  return (
    <div className="prose-blog">
      <h2>Czym jest query (zapytanie)?</h2>
      <p>
        <strong>Query</strong> (zapytanie, search query) to dokładna fraza wpisana lub
        wypowiedziana przez użytkownika w pole wyszukiwarki Google. W odróżnieniu od{" "}
        <Link href="/keyword">słowa kluczowego</Link> — które jest pojęciem z perspektywy
        stratega SEO — query to surowy sygnał intencji użytkownika, widoczny
        w danych z narzędzi analitycznych. To co ludzie faktycznie wpisują,
        nie to, na co chcemy rankować.
      </p>
      <p>
        Analiza zapytań jest fundamentem nowoczesnego SEO: to jedyny bezpośredni wgląd
        w język, potrzeby i pytania rzeczywistych użytkowników wyszukiwarki.
        Dane o zapytaniach są dostępne w{" "}
        <Link href="/google-search-console">Google Search Console</Link> (raport
        „Wyniki wyszukiwania" → zakładka „Zapytania") oraz w raportach
        „Wyszukiwane hasła" w Google Ads.
      </p>

      <h2>Typy zapytań według intencji</h2>
      <p>
        <strong>Informacyjne</strong> — użytkownik szuka odpowiedzi lub wiedzy:
        „co to jest backlink", „jak poprawić CTR", „dlaczego strona nie rankuje".
        Dominują w ruchu organicznym; najlepsza odpowiedź to ekspercka treść.
      </p>
      <p>
        <strong>Nawigacyjne</strong> — użytkownik szuka konkretnej marki lub strony:
        „Google Analytics logowanie", „MiauSEO oferta". Użytkownik wie, dokąd zmierza.
      </p>
      <p>
        <strong>Transakcyjne</strong> — wyraźna intencja zakupu: „kup buty biegowe",
        „cennik pozycjonowania", „zamów SEO". Najwyższa wartość biznesowa.
      </p>
      <p>
        <strong>Komercyjne (investigational)</strong> — użytkownik porównuje przed zakupem:
        „najlepsza agencja SEO Kraków", „Ahrefs vs Semrush", „opinie o MiauSEO".
        Etap consideration w lejku sprzedażowym.
      </p>

      <h2>Query vs słowo kluczowe — różnica praktyczna</h2>

      <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface">
            <tr>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Query (zapytanie)</th>
              <th className="text-left p-4 text-xs font-bold uppercase tracking-widest text-zinc-400">Słowo kluczowe</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="p-4 text-zinc-600">Pochodzi od użytkownika</td><td className="p-4 text-zinc-600">Definiowane przez stratega SEO</td></tr>
            <tr><td className="p-4 text-zinc-600">Surowe, niefiltrowane dane</td><td className="p-4 text-zinc-600">Docelowa fraza do optymalizacji</td></tr>
            <tr><td className="p-4 text-zinc-600">Widoczne w GSC i Google Ads</td><td className="p-4 text-zinc-600">Planowane w narzędziach keyword research</td></tr>
            <tr><td className="p-4 text-zinc-600">Może być pytaniem, zdaniem, głosem</td><td className="p-4 text-zinc-600">Zazwyczaj zwięzły, zoptymalizowany</td></tr>
          </tbody>
        </table>
      </div>

      <InfoBox>
        <strong>GSC to kopalnia danych o prawdziwych zapytaniach:</strong> Raport zapytań
        w Google Search Console pokazuje, na jakie frazy strona faktycznie wyświetla się
        w Google — z podziałem na kliknięcia, wyświetlenia, CTR i średnią pozycję.
        Regularna analiza ujawnia frazy z wysokimi wyświetleniami i niskim CTR
        (do poprawy meta titla), frazy, na które strona rankuje na pozycjach 6–20
        (do działań optymalizacyjnych) i zupełnie nowe tematy, których nie planowałeś.
      </InfoBox>

      <h2>FAQ — Query</h2>

      <h3>Ile zapytań przetwarza Google dziennie?</h3>
      <p>
        Google przetwarza ok. 8,5 miliarda zapytań dziennie (dane z 2023 roku) —
        to ok. 100 000 zapytań na sekundę. Szacuje się, że 15% zapytań, które Google
        widzi każdego dnia, to zapytania, których nigdy wcześniej nie widziało.
        To właśnie dlatego semantyczne, wyczerpujące treści rankują lepiej niż
        strony optymalizowane pod jedną frazę.
      </p>

      <h3>Jak analizować zapytania w Google Search Console?</h3>
      <p>
        Wejdź do GSC → Wyniki wyszukiwania → filtruj po stronach lub zapytaniach.
        Posortuj według wyświetleń — zobaczysz frazy, na które Google Cię pokazuje.
        Posortuj według CTR rosnąco — zobaczysz frazy z dużą widocznością
        i małą liczbą kliknięć (okazje do poprawy <Link href="/meta-title">meta title</Link>
        i <Link href="/meta-description">opisu</Link>). Filtr „Pozycja" 6–20 pokazuje
        „low hanging fruit" — strony bliskie pierwszej stronie wyników.
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
                "name": "Czym jest query w SEO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Query (zapytanie) to dokładna fraza wpisana przez użytkownika w wyszukiwarkę. W odróżnieniu od słowa kluczowego jest surowym sygnałem intencji użytkownika. Analiza zapytań w Google Search Console to podstawa optymalizacji treści pod SEO."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
