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

export default function AtrybytFirmyGoogleCoWybrac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Atrybuty firmy w Google Business Profile to cechy i udogodnienia, które właściciel może przypisać do swojego profilu — od dostępności dla osób z niepełnosprawnościami, przez formy płatności, po specjalizacje i udogodnienia dla klientów. Klienci coraz częściej filtrują wyniki Maps właśnie przez atrybuty. Brak ich uzupełnienia to oddanie pola konkurencji.
      </p>

      <h2>Czym są atrybuty i gdzie są widoczne</h2>
      <p>Atrybuty to krótkie etykiety widoczne w profilu firmy — pod opisem i godzinami. Google wyświetla je jako ikony lub krótkie napisy: „Dostępne dla wózków inwalidzkich", „WiFi", „Parking bezpłatny", „Akceptujemy karty", „Obsługa po angielsku" i wiele innych. Zakres dostępnych atrybutów zależy od kategorii firmy — restauracja widzi inne opcje niż prawnik, a sklep inne niż gabinet fryzjerski.</p>
      <p>Atrybuty są dwóch rodzajów: te które ustawia właściciel samodzielnie i te które mogą oceniać klienci. Klienci przez Google Maps mogą zatwierdzać lub zaprzeczać atrybutom — jeśli np. oznaczysz że masz parking a klienci masowo oznaczają że go nie widzieli, Google może to uwzględnić w wyświetlaniu. Dlatego zaznaczaj tylko atrybuty, które faktycznie pasują do Twojej firmy.</p>

      <h2>Które atrybuty warto uzupełnić zawsze</h2>
      <p>Niezależnie od branży, kilka grup atrybutów jest szczególnie ważnych dla konwersji i filtrowania wyników. Dostępność dla osób z niepełnosprawnościami — wejście dostępne dla wózków, miejsca parkingowe dla niepełnosprawnych, toalety dostępne. Ten atrybut jest filtrowany przez coraz więcej użytkowników Maps i jego brak może eliminować profil z wyników dla osób szukających dostępnych miejsc.</p>
      <p>Formy płatności — przyjmujesz karty, Google Pay, Apple Pay, gotówkę? Klienci sprawdzają to zanim wyjdą z domu, szczególnie gdy planują większy zakup. Brak tej informacji generuje niepotrzebne pytania telefoniczne. Języki obsługi — jeśli obsługujesz klientów po angielsku, niemiecku lub w innym języku, oznacz to. Dla turystów i obcokrajowców to kluczowy filtr przy wyborze usługi.</p>

      <InfoBox>
        <strong>Atrybuty tożsamościowe:</strong> Google umożliwia zaznaczenie atrybutów tożsamościowych — firma prowadzona przez kobietę, przez osobę LGBT+, przez weterana. Te atrybuty są widoczne w profilu i coraz więcej użytkowników aktywnie szuka firm z takimi oznakowaniami. Zaznacz te, które autentycznie opisują Twój biznes — nigdy nie dodawaj fałszywych atrybutów.
      </InfoBox>

      <h2>Atrybuty branżowe — co sprawdzić po wyborze kategorii</h2>
      <p>Po ustawieniu kategorii głównej wejdź do sekcji atrybutów i przejrzyj co jest dostępne — Google wyświetla tylko atrybuty odpowiednie dla Twojej kategorii. Restauracja zobaczy opcje: typ kuchni, sposób serwowania (na miejscu, na wynos, dostawa), opcje dla grup, rezerwacje, poziom głośności, dress code. Salon fryzjerski zobaczy: typy włosów, płeć klientów, konkretne usługi (koloryzacja, keratyna, ombre). Gabinet medyczny — specjalizacje, ubezpieczenia, dostępność dla nowych pacjentów.</p>
      <p>Przejdź przez każdy dostępny atrybut i zaznacz te, które są prawdziwe. Kompletna lista atrybutów uzupełniona rzetelnie jest lepszym sygnałem wiarygodności niż kilka wyrywkowo zaznaczonych. Jak atrybuty wpisują się w pełną optymalizację profilu: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google żeby była skuteczna</Link>.</p>

      <h2>Wpływ atrybutów na pozycję i filtrowanie</h2>
      <p>Atrybuty mają wpływ na filtrowanie wyników w Google Maps — użytkownicy mogą filtrować firmy według konkretnych cech. Firma bez uzupełnionych atrybutów nie pojawia się przy filtrowaniu, nawet jeśli faktycznie spełnia wymagania klienta. To bezpośrednia utrata ruchu, którą można naprawić w ciągu kilku minut.</p>
      <p>Wpływ atrybutów na organiczną pozycję w Local Pack jest pośredni — bardziej przez wzmocnienie trafności profilu i wyższy CTR niż przez bezpośredni sygnał rankingowy. Ale połączenie uzupełnionych atrybutów z innymi elementami optymalizacji — kategorią, usługami, opisem, zdjęciami, opiniami — daje profil wyraźnie silniejszy niż konkurencja, która pominęła te szczegóły. Jak słowa kluczowe w atrybutach i innych polach profilu wpływają na widoczność: <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">gdzie umieszczać słowa kluczowe w wizytówce Google</Link>.</p>
    </div>
  );
}
