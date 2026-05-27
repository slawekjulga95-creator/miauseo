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

export default function ProduktyIUsllugiWWizytowceGoogleJakDodac() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Sekcja usług i produktów w Google Business Profile to jedno z najbardziej niedocenianych narzędzi optymalizacji lokalnego profilu. Większość firm ma tam albo nic, albo jedną ogólną pozycję. Tymczasem każda dodana usługa z opisem to potencjalnie nowe słowo kluczowe, przy którym profil może się pojawić w Google Maps.
      </p>

      <h2>Sekcja Usługi a sekcja Produkty — różnica</h2>
      <p>Google Business Profile oferuje dwa osobne moduły: Usługi i Produkty. Dostępność każdego z nich zależy od kategorii firmy — niektóre kategorie mają obu dostęp, inne tylko jeden. Usługi to niematerialne świadczenia: naprawa, doradztwo, leczenie, szkolenie. Produkty to fizyczne towary lub itemizowane oferty z ceną. Jeśli masz sklep stacjonarny, możesz dodawać konkretne produkty z opisem, ceną i zdjęciem — trafiają one do osobnej galerii w profilu i są widoczne dla użytkowników przeglądających profil.</p>
      <p>Dla firm usługowych ważniejsza jest sekcja Usługi, ponieważ bezpośrednio rozszerza zakres zapytań, przy których profil jest trafny. Hydraulik z listą usług: instalacje wod-kan, wymiana baterii, naprawa rur, montaż bojlerów — pojawia się w wynikach dla każdego z tych zapytań osobno, a nie tylko przy ogólnym „hydraulik". To konkretna, mierzalna zaleta.</p>

      <h2>Jak dodać usługi do profilu — krok po kroku</h2>
      <p>Zaloguj się do panelu Google Business Profile i wejdź w sekcję zarządzania profilem. Znajdź zakładkę Usługi (Services) w lewym menu lub przez tryb edycji profilu po wyszukaniu nazwy firmy w Google z zalogowanego konta właściciela. W sekcji Usługi możesz tworzyć kategorie usług i dodawać do nich poszczególne pozycje z nazwą, opcjonalnym opisem i ceną (jeśli dotyczy).</p>
      <p>Każda usługa może mieć opis do 300 znaków — to miejsce, gdzie naturalnie umieszczasz słowa kluczowe opisujące tę konkretną usługę. Opis powinien być pisany z perspektywy klienta, nie z perspektywy cennika. Fryzjer nie pisze „Strzyżenie damskie — 50 zł", ale „Strzyżenie damskie z myciem i stylizacją — efekt utrzymuje się przez 6–8 tygodni". Drugi opis odpowiada na pytanie klienta zanim je zadał.</p>

      <InfoBox>
        <strong>Dostępność zależy od kategorii:</strong> Google nie udostępnia sekcji usług wszystkim kategoriom firm. Jeśli nie widzisz zakładki Usługi w swoim panelu, sprawdź czy Twoja kategoria główna jest obsługiwana. Czasem zmiana lub doprecyzowanie kategorii głównej odblokowuje dostęp do sekcji. Jak wybrać optymalną kategorię: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.
      </InfoBox>

      <h2>Ile usług dodawać i jak je porządkować</h2>
      <p>Nie ma sztywnego limitu liczby usług, ale powinieneś trzymać się zasady: dodawaj tylko te usługi, które faktycznie świadczysz. Dodawanie fikcyjnych pozycji dla słów kluczowych, których nie realizujesz, to ryzyko — klienci mogą pytać o usługę której nie ma, co generuje frustrację i negatywne opinie. Przy dużej liczbie usług warto stworzyć kategorie — np. mechanik może podzielić usługi na: Naprawy silnika, Układ hamulcowy, Klimatyzacja, Elektryka — co ułatwia klientom nawigację po profilu.</p>
      <p>Nazwy usług powinny odpowiadać temu jak klienci naprawdę szukają — nie żargonem branżowym, ale potocznym językiem. „Wymiana paska rozrządu" jest lepsze niż „Serwis układu napędowego wałka rozrządu". Sprawdź co wpisują klienci w Google — nazwy usług w profilu mogą to odzwierciedlać. Jak słowa kluczowe działają w różnych polach profilu: <Link href="/pytania/slowa-kluczowe-w-wizytowce-google-gdzie-umieszczac">gdzie umieszczać słowa kluczowe w wizytówce Google</Link>.</p>

      <h2>Aktualizacja usług — jak często</h2>
      <p>Lista usług powinna odzwierciedlać aktualną ofertę. Jeśli przestajesz świadczyć jakąś usługę — usuń ją. Jeśli dodajesz nową — dodaj ją do profilu przed oficjalnym uruchomieniem. Klienci, którzy trafią na usługę przez Google, nie muszą wiedzieć że „właśnie ją startujemy". Aktualizacja profilu po każdej zmianie oferty to dobra rutyna, która utrzymuje profil wiarygodny i aktualny — jeden z sygnałów jakości, które Google bierze pod uwagę.</p>
    </div>
  );
}
