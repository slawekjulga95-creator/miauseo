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

export default function GoogleMapsPinBlednaLokalizacjaJakPoprawic() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Adres w profilu jest poprawny, ale pin na mapie stoi w złym miejscu — 200 metrów dalej, po drugiej stronie ulicy, albo w ogóle w innej dzielnicy. Klienci jadą według wskazówek Google i nie mogą trafić. To klasyczny problem który ma proste rozwiązanie — jeśli wiesz gdzie go szukać.
      </p>

      <h2>Dlaczego pin stoi w złym miejscu</h2>
      <p>Google automatycznie geokoduje adresy — zamienia adres tekstowy na współrzędne geograficzne. Proces ten nie jest idealny, szczególnie w Polsce gdzie formatowanie adresów bywa niejednoznaczne, nowe osiedla nie mają jeszcze dokładnych danych w bazach Google, albo budynek stoi w miejscu innym niż dane literowe adresu sugerują (np. wejście od innej ulicy). Błędna lokalizacja pinu jest częsta przy nowych inwestycjach, obiektach na skrzyżowaniach i budynkach z numeracją niestandardową.</p>

      <h2>Jak poprawić lokalizację pinu przez panel Google Business</h2>
      <p>Zaloguj się do panelu Google Business Profile i wejdź w edycję danych firmy. W sekcji „Lokalizacja" lub „Adres" znajdziesz mapę z aktualną pozycją pinu. Kliknij na mapę i przeciągnij pin w dokładne miejsce gdzie jest wejście do firmy — nie środek budynku, nie parking, ale wejście przez które wchodzą klienci. Jeśli Twoje wejście jest od innej ulicy niż adres rejestrowy — ustaw pin przy faktycznym wejściu, nawet jeśli to inne miejsce niż literalne geokodowanie adresu.</p>
      <p>Po przesunięciu pinu zapisz zmiany. Google zazwyczaj akceptuje takie korekty właścicielskie szybko — w ciągu 24–48 godzin nowa pozycja jest widoczna na mapie. W rzadkich przypadkach Google może poprosić o weryfikację zmiany jeśli nowa pozycja znacząco odbiega od adresu rejestrowego.</p>

      <InfoBox>
        <strong>Jak sprawdzić aktualną pozycję pinu:</strong> otwórz Google Maps, wyszukaj swoją firmę i sprawdź gdzie dokładnie stoi pin. Sprawdź to też w trybie Street View — Google Maps pozwala „wejść" w widok ulicy i zobaczyć jak nawigacja prowadzi klientów. Jeśli końcowy punkt nie jest przy Twoim wejściu, pin wymaga korekty.
      </InfoBox>

      <h2>Kiedy sam pin nie wystarczy — problem z geocodingiem ulicy</h2>
      <p>Czasem błąd nie leży w pinie Twojego profilu, ale w danych geograficznych Google Maps dla całej ulicy lub obszaru. Jeśli nowa ulica nie jest jeszcze w bazie Google lub jest niepoprawnie zaznaczona, problem dotyczy wszystkich firm przy tej ulicy. W takim przypadku możesz zgłosić korektę danych mapy bezpośrednio przez Google Maps — kliknij prawym przyciskiem myszy na błędnym miejscu i wybierz „Zgłoś błąd na mapie" lub użyj funkcji „Edytuj mapę" dostępnej dla zalogowanych użytkowników.</p>
      <p>Aktualizacje danych geograficznych Google Maps są przetwarzane przez społeczność Local Guides i zespół Google — czas na wprowadzenie poprawki może wynosić od kilku dni do kilku tygodni. W Polsce adresy nowych osiedli i ulic bywają nieaktualne przez wiele miesięcy po faktycznym nadaniu adresu przez gminę.</p>

      <h2>Opis dojazdu jako tymczasowe rozwiązanie</h2>
      <p>Dopóki pin nie jest w idealnym miejscu, możesz pomóc klientom przez dodanie szczegółowego opisu dojazdu w profilu. Sekcja „Opis firmy" lub posty Google mogą zawierać informację: „Wejście od ulicy X, przy bramie z numerem 5B, parking od tyłu budynku". To nie zastąpi poprawnego pinu, ale znacząco redukuje liczbę klientów którzy dzwonią z mapą w ręku nie mogąc trafić. Jak pisać opis firmy który dostarcza użytecznych informacji: <Link href="/pytania/opis-firmy-w-wizytowce-google-jak-napisac">jak napisać opis firmy w wizytówce Google</Link>.</p>
    </div>
  );
}
