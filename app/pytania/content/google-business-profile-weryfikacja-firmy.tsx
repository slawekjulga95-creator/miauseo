import Link from "next/link";

function Img({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure className="my-8" role="img" aria-label={alt}>
      <div className="rounded-2xl bg-zinc-50 border border-border h-56 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          </div>
          <p className="text-zinc-500 text-sm font-medium">{alt}</p>
        </div>
      </div>
      {caption && <figcaption className="text-center text-xs text-zinc-400 mt-2 italic">{caption}</figcaption>}
    </figure>
  );
}

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

export default function GoogleBusinessProfileWeryfikacjaFirmy() {
  return (
    <div className="prose-blog">
      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Weryfikacja to moment, w którym Google pyta: „Czy ta firma naprawdę istnieje?" Bez pozytywnej odpowiedzi profil pozostaje niewidoczny dla klientów, nieważne jak starannie go uzupełnisz. W 2026 roku dostępnych jest kilka metod weryfikacji — i Google coraz częściej sam decyduje, którą z nich Ci zaproponuje.
      </p>

      <h2>Po co w ogóle weryfikacja?</h2>
      <p>Zanim profil trafi do publicznych wyników Google, musi przejść kontrolę tożsamości. Google robi to żeby ograniczyć liczbę fałszywych wpisów — firm, które nie istnieją pod podanym adresem, albo które zostały założone przez kogoś bez związku z prawdziwą firmą. Weryfikacja potwierdza, że osoba zarządzająca profilem ma faktyczny dostęp do podanego adresu, numeru telefonu lub strony internetowej.</p>
      <p>Z praktycznego punktu widzenia: niezweryfikowany profil jest widoczny tylko dla jego właściciela w panelu zarządzania. Dla żadnego klienta wpisującego zapytanie w Google taki profil nie istnieje. Dopiero po pomyślnej weryfikacji profil staje się publiczny i może pojawiać się w wynikach wyszukiwania i Google Maps.</p>

      <Img alt="Ekran wyboru metody weryfikacji w panelu Google Business Profile – opcje: poczta, telefon, email, wideo, Search Console" caption="Google proponuje dostępne metody weryfikacji na podstawie kategorii firmy i historii konta" />

      <h2>Metoda pierwsza: weryfikacja nagraniem wideo</h2>
      <p>Od 2023 roku weryfikacja wideo stała się dominującą metodą dla nowych profili, szczególnie jeśli konto Google nie ma historii i zakładana firma jest w kategorii uznawanej za ryzykowną pod względem fałszywych wpisów. Google prosi o nagranie krótkiego materiału, który musi spełniać trzy warunki jednocześnie: pokazuje fizyczne dojście do miejsca prowadzenia działalności, dokumentuje oznakowanie lub wyposażenie firmy, oraz potwierdza tożsamość właściciela przez pokazanie dokumentu rejestrowego lub oznakowania z nazwą firmy.</p>
      <p>Nagranie nie musi być profesjonalne — liczy się autentyczność, nie jakość produkcji. Google wprost mówi, że ujęcia mają być ciągłe i bez cięć montażowych. Film analizowany jest przez automatyczny system, a w razie wątpliwości trafia do ręcznej weryfikacji przez człowieka. Czas oczekiwania na decyzję to od kilku godzin do kilku dni roboczych.</p>

      <h2>Metoda druga: weryfikacja przez telefon lub SMS</h2>
      <p>Jeśli numer telefonu podany w profilu jest weryfikowalny i Google uzna konto za wystarczająco wiarygodne, może zaproponować weryfikację przez połączenie głosowe lub SMS. W obu przypadkach na podany numer trafia pięciocyfrowy kod, który wpisujesz w panelu. Cały proces zamyka się w kilku minutach. Ta metoda jest wygodna, ale nie zawsze dostępna — Google sam decyduje czy ją zaoferować na podstawie szeregu wewnętrznych sygnałów.</p>

      <h2>Metoda trzecia: weryfikacja przez email</h2>
      <p>Dostępna dla wybranych kategorii firm, najczęściej tych z długą historią obecności w internecie. Google wysyła kod na adres email powiązany z domeną firmową. Podobnie jak w przypadku telefonu — opcja pojawia się tylko jeśli algorytm uzna ją za odpowiednią dla danego profilu. Jeśli jej nie widzisz na liście metod, to znaczy że Google aktualnie jej dla Ciebie nie oferuje.</p>

      <h2>Metoda czwarta: weryfikacja przez Google Search Console</h2>
      <p>To najszybsza możliwa metoda i jest dostępna dla firm, które mają już zweryfikowaną stronę internetową w Google Search Console za pomocą tego samego adresu email. Google rozpoznaje, że domena należy do właściciela konta i automatycznie zatwierdza profil bez żadnych dodatkowych kroków. Jeśli prowadzisz stronę i masz ją podłączoną do Search Console — sprawdź czy ta opcja pojawia się przy weryfikacji. Może zaoszczędzić kilka tygodni oczekiwania.</p>

      <InfoBox>
        Weryfikacja pocztą — wysyłka kartki z kodem — jest dziś rzadko dostępna jako domyślna opcja dla nowych profili w Polsce. Google zastąpił ją metodami szybszymi i trudniejszymi do obejścia dla fałszywych wpisów. Jeśli jednak ta opcja się pojawi, czas oczekiwania na przesyłkę wynosi 5–14 dni roboczych. Więcej: <Link href="/pytania/jak-zweryfikowac-firme-w-google-poczta">jak zweryfikować firmę w Google pocztą</Link>.
      </InfoBox>

      <Img alt="Widok panelu Google Business Profile po pomyślnej weryfikacji – status zweryfikowano i aktywny profil z przyciskami zarządzania" caption="Po weryfikacji profil staje się publiczny – pojawia się w wynikach wyszukiwania i Google Maps" />

      <h2>Co jeśli żadna metoda nie działa?</h2>
      <p>Zdarza się, że Google nie proponuje żadnej metody, którą możesz od razu ukończyć — albo odrzuca kolejne próby. W takiej sytuacji można złożyć prośbę o wsparcie przez formularz pomocy Google. Przygotuj dokumenty potwierdzające istnienie firmy: wydruk z KRS lub CEIDG, zdjęcia siedziby z widocznym szyldem, faktury z adresem. Google może poprosić o ich przesłanie w ramach ręcznej weryfikacji.</p>
      <p>Jeśli przejmujesz własność profilu, który już istnieje i jest zarządzany przez kogoś innego, proces jest nieco inny — musisz złożyć wniosek o przejęcie i poczekać aż Google skontaktuje się z obecnym właścicielem. Jak to działa opisujemy w artykule <Link href="/pytania/jak-przeniesc-wlasnosc-wizytowki-google">jak przenieść własność wizytówki Google</Link>.</p>

      <h2>Po weryfikacji: co dalej?</h2>
      <p>Moment weryfikacji to dobry punkt startowy do kompleksowego uzupełnienia profilu. Wiele osób weryfikuje i zostawia profil z minimalnymi danymi — i to jest błąd. Google zaczyna obserwować aktywność profilu od pierwszych dni po weryfikacji, a profil z uzupełnionymi wszystkimi sekcjami dostaje lepsze sygnały dla algorytmu od samego początku. Jak skonfigurować profil po weryfikacji opisujemy w poradniku <Link href="/pytania/profil-firmy-w-google-jak-skonfigurowac">profil firmy w Google — jak skonfigurować</Link>.</p>
    </div>
  );
}
