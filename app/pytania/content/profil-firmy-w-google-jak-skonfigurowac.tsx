import Link from "next/link";

function Img({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure className="my-8" role="img" aria-label={alt}>
      <div className="rounded-2xl bg-zinc-50 border border-border h-56 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
            </svg>
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
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="text-sm text-orange-900 leading-relaxed">{children}</div>
    </div>
  );
}

export default function ProfilFirmyWGoogleJakSkonfigurowac() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Założenie profilu to dopiero połowa roboty. Większość firm zatrzymuje się na etapie weryfikacji i zostawia profil w stanie minimalnym – sama nazwa i adres. Tymczasem to właśnie konfiguracja decyduje o tym, czy pojawisz się w wynikach Google wyżej czy niżej od konkurencji. Ten artykuł przeprowadzi Cię przez każdą sekcję profilu, od najważniejszej do tych, o których zwykle się zapomina.
      </p>

      <h2>Dlaczego konfiguracja profilu ma znaczenie dla pozycji?</h2>

      <p>
        Google ocenia profile firm według kilkudziesięciu kryteriów, a stopień wypełnienia profilu jest jednym z nich. Profil uzupełniony w 100% dostaje od algorytmu premię za kompletność. Ale to nie wszystko – każda sekcja, którą wypełnisz, dodaje dodatkowe konteksty, po których klienci mogą Cię znaleźć. Firma, która ma w profilu listę usług z opisami, pojawia się przy znacznie większej liczbie zapytań niż ta, która uzupełniła tylko nazwę i adres.
      </p>

      <p>
        Warto też wiedzieć, że Google traktuje aktywność właściciela jako sygnał jakości. Profil, który był aktywnie konfigurowany i jest regularnie aktualizowany, dostaje lepsze wyniki niż ten porzucony po weryfikacji. Konfiguracja to nie jednorazowe działanie – to fundament, do którego wracasz i który rozwijasz.
      </p>

      <h2>Kategoria główna – najważniejsza decyzja konfiguracyjna</h2>

      <p>
        Zanim cokolwiek innego – sprawdź i ewentualnie popraw kategorię główną. To ona w największym stopniu decyduje przy jakich frazach Google pokazuje Twój profil. Jeśli prowadzisz gabinet fizjoterapii i wybrałeś kategorię „Lekarz", tracisz widoczność na wszystkie zapytania o fizjoterapię, rehabilitację i masaż. Kategoria powinna być możliwie precyzyjna i opisywać to, czym głównie się zajmujesz.
      </p>

      <p>
        Poza kategorią główną możesz dodać do dziewięciu kategorii dodatkowych. Służą one do opisania pobocznych usług – na przykład mechanik samochodowy może dodać kategorie „Wulkanizacja", „Serwis klimatyzacji" i „Diagnostyka pojazdów". Kategorie dodatkowe nie mają tak silnego wpływu jak główna, ale rozszerzają zasięg profilu na dodatkowe frazy. Jak wybrać najlepszą kategorię dla swojej branży opisujemy szczegółowo w artykule <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.
      </p>

      <Img
        alt="Sekcja kategorii w panelu Profilu Firmy w Google – pole kategorii głównej i lista kategorii dodatkowych z polem wyszukiwania"
        caption="Kategorię główną wybierz z najwyższą starannością – możesz ją zmienić w dowolnym momencie, ale zmiana może wymagać ponownej weryfikacji"
      />

      <h2>Opis firmy – 750 znaków, które muszą pracować</h2>

      <p>
        Opis firmy to pole tekstowe z limitem 750 znaków. Klienci widzą go bezpośrednio w profilu, a Google analizuje jego treść przy ustalaniu relevantności profilu dla różnych zapytań. Dobry opis powinien naturalnie zawierać słowa kluczowe – nazwy świadczonych usług, lokalizację działania, specjalizacje – ale przede wszystkim powinien być napisany z myślą o kliencie, nie o algorytmie.
      </p>

      <p>
        Najczęstszy błąd to opis pisany w trzeciej osobie w stylu oficjalnego komunikatu prasowego. „Firma X Sp. z o.o. świadczy usługi w zakresie..." – to nikogo nie przekonuje. Skuteczniejszy jest konkretny i bezpośredni język: czym się zajmujesz, dla kogo, co Cię wyróżnia i dlaczego klient powinien wybrać właśnie Ciebie. Jak napisać taki opis z przykładami dla różnych branż tłumaczymy w artykule <Link href="/pytania/opis-firmy-w-wizytowce-google-jak-napisac">opis firmy w wizytówce Google – jak napisać</Link>.
      </p>

      <h2>Godziny otwarcia i godziny specjalne</h2>

      <p>
        Godziny otwarcia to jedna z tych informacji, która bezpośrednio wpływa na to czy klient zdecyduje się zadzwonić. Profil pokazujący status „Otwarte" lub „Zamknięte" w czasie rzeczywistym daje klientowi pewność, że dane są aktualne. Nieaktualne godziny – szczególnie takie, które sugerują że jesteś otwarty gdy faktycznie nie pracujesz – są jednym z najczęstszych powodów złych opinii i straconych klientów.
      </p>

      <p>
        Poza standardowymi godzinami tygodniowymi warto ustawić <strong>godziny specjalne</strong> na święta i dni wolne. Google wysyła właścicielom przypomnienia przed popularnymi świętami z prośbą o aktualizację godzin. Jeśli tego nie zrobisz, profil może wyświetlać błędny status w dniu, gdy wielu klientów decyduje się zadzwonić. Szczegóły konfiguracji opisujemy w artykule <Link href="/pytania/godziny-otwarcia-wizytowka-google-jak-ustawic">godziny otwarcia wizytówka Google – jak ustawić</Link>.
      </p>

      <h2>Usługi i produkty – niedoceniana sekcja</h2>

      <Img
        alt="Sekcja usług w profilu firmy Google – lista usług z nazwami, opisami i cenami widoczna bezpośrednio w wynikach wyszukiwania"
        caption="Sekcja usług jest widoczna dla klientów bezpośrednio w profilu – każda usługa to dodatkowe słowa kluczowe dla algorytmu"
      />

      <p>
        Sekcja usług jest przez większość właścicieli całkowicie pomijana, a jest to jeden z najlepszych sposobów na rozszerzenie widoczności profilu. Każda usługa, którą dodasz, to dodatkowe słowa kluczowe, po których Google może Cię znaleźć. Firma sprzątająca, która ma w sekcji usług „mycie okien", „sprzątanie biur", „czyszczenie dywanów" i „usługi po remoncie", będzie widoczna na każde z tych zapytań. Firma, która tego nie uzupełniła – tylko na ogólne „firma sprzątająca".
      </p>

      <p>
        Każdej usłudze możesz nadać nazwę, dodać opis (do 300 znaków) i opcjonalnie podać cenę lub przedział cenowy. Ceny nie są obowiązkowe, ale ich obecność buduje zaufanie i pomaga klientom wstępnie ocenić czy oferta mieści się w ich budżecie. Jak dodać usługi i co w nich napisać opisujemy w artykule <Link href="/pytania/produkty-i-uslugi-w-wizytowce-google-jak-dodac">produkty i usługi w wizytówce Google – jak dodać</Link>.
      </p>

      <h2>Atrybuty – szczegóły, które mają znaczenie</h2>

      <p>
        Atrybuty to zestaw predefiniowanych cech, które możesz zaznaczyć dla swojej firmy. Dostępna lista zależy od kategorii – restauracja może oznaczyć czy serwuje alkohol, akceptuje rezerwacje i ma taras, salon fryzjerski może zaznaczyć czy obsługuje klientów bez umówienia. Atrybuty wyświetlają się bezpośrednio na profilu i mogą decydować o tym czy klient kliknie w Twój profil czy w konkurencji.
      </p>

      <p>
        Ważna podgrupa to atrybuty dostępności – informacja o podjeździe dla wózków, toalecie przystosowanej dla niepełnosprawnych, możliwości wejścia ze psem asystującym. Klienci wymagający tych udogodnień aktywnie szukają takich informacji, więc ich brak może oznaczać utratę klienta. Jak wybrać odpowiednie atrybuty dla swojej kategorii opisujemy w artykule <Link href="/pytania/atrybut-firmy-google-co-wybrac">atrybuty firmy Google – co wybrać</Link>.
      </p>

      <h2>Zdjęcia – liczba i jakość robią różnicę</h2>

      <p>
        Profile z co najmniej dziesięcioma zdjęciami notują statystycznie znacznie więcej kliknięć w numer telefonu i zapytań o trasę niż profile bez zdjęć. Google analizuje też aktywność użytkowników przy zdjęciach – jeśli klienci często przeglądają fotografie Twojego profilu, to pozytywny sygnał dla algorytmu. Warto więc dodawać zdjęcia regularnie, nie tylko podczas konfiguracji.
      </p>

      <p>
        Zdjęcia profilu i okładki mają konkretne zalecane wymiary: zdjęcie profilu 250×250 px, zdjęcie okładki 1080×608 px. Dla zdjęć ogólnych zalecane jest minimum 720×720 px. Nie używaj grafik z dużą ilością tekstu jako zdjęć – Google może je traktować jako materiał reklamowy i ograniczać ich wyświetlanie. Szczegółowy wpływ zdjęć na pozycję omawiamy w artykule <Link href="/pytania/zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje">zdjęcia w wizytówce Google – jaki wpływ na pozycję</Link>.
      </p>

      <InfoBox>
        <strong>Wskazówka:</strong> poproś zadowolonych klientów żeby dodawali zdjęcia przy okazji wystawiania opinii. Zdjęcia od klientów są dla nowych użytkowników znacznie bardziej wiarygodne niż te dodane przez właściciela i mają pozytywny wpływ na konwersję.
      </InfoBox>

      <h2>Pytania i odpowiedzi – sekcja, którą łatwo zaniedbać</h2>

      <p>
        Sekcja Q&A w profilu Google działa inaczej niż większość właścicieli myśli. Pytania może zadawać każdy – nie tylko klienci, ale też dowolni użytkownicy Google. Co więcej, odpowiadać też może każdy, nie tylko właściciel. Oznacza to, że ktoś może odpowiedzieć na pytanie o Twoją firmę błędnie albo stronniczo, a ta odpowiedź pojawi się publicznie na Twoim profilu.
      </p>

      <p>
        Dlatego sekcja Q&A wymaga aktywnego monitorowania. Włącz powiadomienia o nowych pytaniach i odpowiadaj na nie jako właściciel – Twoje odpowiedzi są oznaczone jako oficjalne i wyświetlają się wyżej niż te od innych użytkowników. Możesz też samodzielnie zadawać pytania i na nie odpowiadać – to sposób na proaktywne umieszczenie w profilu najczęstszych pytań klientów z poprawnymi odpowiedziami. Jak zarządzać tą sekcją szczegółowo: <Link href="/pytania/qa-wizytowka-google-jak-zarzadzac">Q&A w wizytówce Google – jak zarządzać</Link>.
      </p>

      <h2>Konfiguracja to fundament, nie cel sam w sobie</h2>

      <p>
        Nawet perfekcyjnie skonfigurowany profil nie gwarantuje wysokiej pozycji w Google Maps. Konfiguracja to fundament, na którym buduje się widoczność – ale żeby faktycznie wyprzedzać konkurencję potrzebne są opinie klientów, aktywność właściciela, sygnały z zewnątrz (cytowania, linki) i czas. Jak wygląda cały proces pozycjonowania wizytówki Google wyjaśniamy w poradniku <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.
      </p>

      <p>
        Jeśli wolisz skupić się na prowadzeniu firmy zamiast na samodzielnym zgłębianiu algorytmów Google, sprawdź naszą usługę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>. Zajmujemy się konfiguracją, optymalizacją i bieżącym zarządzaniem profilem, a Ty dostajesz raport z efektów co miesiąc.
      </p>

      <h2>Podsumowanie</h2>

      <p>
        Konfiguracja profilu firmy w Google obejmuje: precyzyjny wybór kategorii głównej i dodatkowych, napisanie skutecznego opisu z naturalnymi słowami kluczowymi, ustawienie prawidłowych godzin otwarcia z godzinami specjalnymi, uzupełnienie listy usług lub produktów z opisami i cenami, zaznaczenie odpowiednich atrybutów oraz dodanie co najmniej dziesięciu zdjęć dobrej jakości. Każdy z tych elementów wnosi konkretną wartość – pomija się je tylko na własne ryzyko.
      </p>

    </div>
  );
}
