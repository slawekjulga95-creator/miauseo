import Link from "next/link";

function Img({ alt, caption }: { alt: string; caption: string }) {
  return (
    <figure className="my-8" role="img" aria-label={alt}>
      <div className="rounded-2xl bg-zinc-50 border border-border h-56 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <p className="text-zinc-500 text-sm font-medium">{alt}</p>
        </div>
      </div>
      {caption && (
        <figcaption className="text-center text-xs text-zinc-400 mt-2 italic">{caption}</figcaption>
      )}
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

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 mb-8">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-brand text-white font-bold text-sm flex items-center justify-center">{num}</div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-ink mb-2">{title}</h3>
        <div className="text-[15px] text-zinc-600 leading-relaxed space-y-3">{children}</div>
      </div>
    </div>
  );
}

export default function WizytowkaGoogleMojaFirmaJakZalozyc() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Jeśli szukasz informacji o tym jak założyć „wizytówkę Google Moja Firma" – dobrze trafiłeś, choć warto wiedzieć, że ta nazwa już oficjalnie nie istnieje. Google przemianowało usługę na <strong>Profil Firmy w Google</strong> (po angielsku: Google Business Profile). Zasady działają tak samo, panel wygląda podobnie – zmieniła się tylko nazwa. Poniżej znajdziesz kompletny przewodnik jak założyć profil od zera.
      </p>

      <h2>Google Moja Firma to już Profil Firmy w Google</h2>

      <p>
        W 2022 roku Google oficjalnie wycofało markę „Google Moja Firma" i zastąpiło ją nazwą <strong>Profil Firmy w Google</strong>. Zmiana dotyczyła też aplikacji mobilnej – Google My Business App została wycofana ze sklepów, a zarządzanie profilem przeniesiono bezpośrednio do wyszukiwarki Google oraz map. Oznacza to, że dziś możesz edytować swój profil wprost z poziomu wyników wyszukiwania po wpisaniu nazwy firmy.
      </p>

      <p>
        Stara aplikacja przestała być aktualizowana i nie należy jej używać do zarządzania profilem. Jeśli masz ją nadal zainstalowaną, Google przekieruje Cię do nowego panelu na <strong>business.google.com</strong> lub do zarządzania w aplikacji Google Maps. Warto też wiedzieć, że w ramach tej samej zmiany Google zintegrowało zarządzanie profilami z Google Search Console dla właścicieli stron internetowych.
      </p>

      <InfoBox>
        Szukaj zawsze pod adresem <strong>business.google.com</strong> – to oficjalny panel Profilu Firmy w Google. Wszelkie inne strony oferujące „rejestrację wizytówki" mogą być próbą wyłudzenia danych lub opłat. Założenie profilu jest całkowicie bezpłatne.
      </InfoBox>

      <h2>Dlaczego warto mieć profil firmy w Google?</h2>

      <Img
        alt="Przykładowy profil firmy widoczny w wynikach Google Maps – wizytówka z nazwą, ocenami, godzinami i przyciskami kontaktowymi"
        caption="Profil firmy w Google wyświetla się bezpośrednio w mapach i w panelu bocznym wyszukiwarki"
      />

      <p>
        Profil firmy w Google to Twoja obecność w miejscu, gdzie klienci szukają usług w Twojej okolicy. Kiedy ktoś wpisuje w Google hasło „hydraulik Kraków" albo „fryzjer blisko mnie", wyniki lokalne pojawiają się jako pierwsze – jeszcze przed zwykłymi wynikami wyszukiwania. Ten blok z mapą i listą trzech firm nazywa się <Link href="/pytania/jak-pojawic-sie-w-local-pack-google">Local Pack</Link> i jest najbardziej eksponowanym miejscem w całym Google dla lokalnych biznesów.
      </p>

      <p>
        Firma bez profilu w Google po prostu tam nie istnieje dla nowych klientów szukających w sieci. Nie wystarczy mieć strony internetowej – profil w Google Maps to osobny kanał widoczności, który działa niezależnie od SEO Twojej strony. Co więcej, wiele firm lokalnych pozyskuje znaczącą część klientów właśnie przez mapy, a nie przez stronę www. Szczegółowo tłumaczymy to w artykule <Link href="/pytania/czy-wizytowka-google-pomaga-bez-strony-internetowej">czy wizytówka Google pomaga bez strony internetowej</Link>.
      </p>

      <p>
        Profil daje też dostęp do statystyk: widzisz ile osób wyświetliło Twój profil, ile kliknęło w numer telefonu, ile zapytało o trasę do Twojego lokalu. To bezpłatne dane analityczne, które pomagają ocenić skuteczność działań. Jak je odczytywać tłumaczymy w odpowiedzi na pytanie <Link href="/pytania/jak-sprawdzic-statystyki-wizytowki-google">jak sprawdzić statystyki wizytówki Google</Link>.
      </p>

      <h2>Wymagania przed założeniem profilu</h2>

      <p>
        Zanim zaczniesz, upewnij się że spełniasz podstawowe warunki określone przez Google. Profil możesz założyć jeśli Twoja firma ma bezpośredni kontakt z klientami – albo przyjmujesz ich w konkretnym miejscu (sklep, gabinet, salon), albo sam dojeżdżasz do klientów na określonym obszarze (usługi wyjazdowe, dostawa). Firmy działające wyłącznie online, bez żadnego kontaktu fizycznego z klientem, nie kwalifikują się do profilu lokalnego.
      </p>

      <p>
        Potrzebujesz konta Google – może to być zwykły Gmail lub konto Google Workspace przypisane do domeny firmowej. Ważne, żebyś miał do tego konta stały dostęp, bo przez nie zarządzasz całym profilem. Możesz później dodać dodatkowych użytkowników lub menedżerów, ale właściciel konta powinien być osobą w pełni odpowiedzialną za firmę.
      </p>

      <h2>Jak założyć profil firmy w Google krok po kroku</h2>

      <p>
        Cały proces rejestracji zajmuje od 10 do 15 minut. Samo pojawienie się w Google Maps zależy od weryfikacji – czas oczekiwania na kod pocztowy to zazwyczaj 5 do 14 dni roboczych.
      </p>

      <Img
        alt="Panel wyszukiwania nazwy firmy w Google Business Profile – pole tekstowe z podpowiedziami istniejących profili"
        caption="Google sprawdza czy profil dla Twojej firmy już istnieje – zdarza się, że Google samo go utworzyło na podstawie danych z internetu"
      />

      <Step num="1" title="Przejdź na business.google.com i zaloguj się">
        <p>Otwórz przeglądarkę i wpisz <strong>business.google.com</strong>. Na stronie pojawi się przycisk „Zarządzaj teraz" – kliknij go i zaloguj się na konto Google. Jeśli masz kilka kont, wybierz to, które ma być powiązane z firmą na stałe. Zmiana konta właściciela profilu jest możliwa, ale wymaga dodatkowych kroków.</p>
      </Step>

      <Step num="2" title="Wpisz nazwę firmy">
        <p>W polu wyszukiwania wpisz dokładną nazwę firmy. Google sprawdzi czy profil już istnieje – zdarza się, że Google samo tworzy nieoficjalne wpisy na podstawie danych zebranych z internetu, stron branżowych i katalogów. Jeśli Twoja firma już widnieje na liście, wybierz ją i kliknij „Przejęcie własności". Jeśli nie ma jej na liście, kliknij „Dodaj firmę do Google" i postępuj zgodnie z kolejnymi krokami.</p>
        <p>Bardzo ważne: używaj oficjalnej nazwy firmy, takiej jaka widnieje na dokumentach rejestrowych, szyldie i fakturach. Dodawanie słów kluczowych do nazwy (np. „Hydraulik Warszawa – Jan Kowalski") jest niezgodne z wytycznymi Google i może skutkować zawieszeniem profilu. Więcej na ten temat w naszym poradniku <Link href="/pytania/jak-dodac-firme-do-google">jak dodać firmę do Google</Link>.</p>
      </Step>

      <Step num="3" title="Wybierz kategorię główną">
        <p>Kategoria to jeden z najsilniejszych czynników decydujących o tym, przy jakich zapytaniach Google będzie pokazywać Twój profil. Wpisz słowo opisujące Twój biznes i wybierz kategorię z listy podpowiedzi – im bardziej precyzyjna, tym lepiej. „Gabinet stomatologiczny" jest lepszym wyborem niż „Lekarz", a „Mechanik samochodowy" lepszym niż „Firma usługowa". Szczegółowy przewodnik po wyborze kategorii znajdziesz w artykule <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.</p>
      </Step>

      <Step num="4" title="Podaj adres lub obszar obsługi">
        <p>Jeśli klienci przyjeżdżają do Ciebie, wpisz dokładny adres – ulicę, numer budynku, miasto i kod pocztowy. Google wyświetli pin na mapie, który możesz ręcznie przesunąć jeśli nie trafił w odpowiednie miejsce. Dokładność lokalizacji ma wpływ na widoczność w wynikach dla zapytań „blisko mnie".</p>
        <p>Jeśli dojeżdżasz do klientów na ich teren, zaznacz opcję że obsługujesz klientów poza siedzibą. Możesz wtedy ukryć adres i wskazać obszar obsługi – konkretne miasta, powiaty lub województwa. Więcej o tej opcji wyjaśniamy tutaj: <Link href="/pytania/wizytowka-google-a-obszar-obslugi-jak-ustawic">wizytówka Google a obszar obsługi</Link>.</p>
      </Step>

      <Step num="5" title="Uzupełnij dane kontaktowe">
        <p>Podaj numer telefonu i adres strony internetowej jeśli ją posiadasz. Numer wpisz w formacie z numerem kierunkowym – najlepiej +48 i dziewięć cyfr. Upewnij się, że ten sam numer telefonu i ten sam adres używasz w każdym miejscu w internecie: na stronie www, w katalogach branżowych, w mediach społecznościowych. Rozbieżności w tych danych negatywnie wpływają na pozycję profilu – to zjawisko opisujemy dokładnie w artykule <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency – co to jest</Link>.</p>
      </Step>

      <Step num="6" title="Zweryfikuj firmę">
        <p>Bez weryfikacji profil nie jest publicznie widoczny. Google musi potwierdzić, że firma faktycznie istnieje pod podanym adresem lub numerem telefonu. Najczęstszą metodą w Polsce jest wysłanie kartki pocztowej z kodem weryfikacyjnym na adres firmy – kod wpisujesz w panelu po otrzymaniu przesyłki. Czas oczekiwania to od 5 do 14 dni roboczych. Dostępne są też inne metody w zależności od kategorii firmy i historii konta. Wszystkie metody opisujemy w artykule <Link href="/pytania/google-business-profile-weryfikacja-firmy">Google Business Profile – weryfikacja firmy</Link>.</p>
      </Step>

      <h2>Co zrobić zaraz po założeniu profilu?</h2>

      <Img
        alt="Panel zarządzania Profilem Firmy w Google – widok sekcji do uzupełnienia: opis, godziny, zdjęcia, usługi"
        caption="Po weryfikacji uzupełnij wszystkie sekcje profilu – im więcej informacji, tym wyższa pozycja w wynikach lokalnych"
      />

      <p>
        Samo założenie i zweryfikowanie profilu to dopiero początek. Profil tuż po rejestracji ma minimalną widoczność – Google nie ma jeszcze wystarczających sygnałów, żeby wyświetlać go wysoko w wynikach. Kluczowe jest jak najszybsze uzupełnienie wszystkich dostępnych sekcji: opisu firmy, godzin otwarcia, listy usług lub produktów, atrybutów (takich jak dostępność parkingu, obsługa płatności kartą, czy dostęp dla osób z niepełnosprawnościami).
      </p>

      <p>
        Zdjęcia mają ogromne znaczenie zarówno dla konwersji jak i dla samego algorytmu Google. Profile z co najmniej dziesięcioma zdjęciami notują znacznie więcej kliknięć w numer telefonu i zapytań o trasę niż te bez zdjęć. Warto dodać zdjęcia wnętrza, zewnętrza budynku, zespołu i przykładowych usług lub produktów. Kompletny przewodnik znajdziesz tutaj: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google, żeby była skuteczna</Link>.
      </p>

      <p>
        Jak najszybciej zacznij zbierać opinie od pierwszych klientów. Opinie to jeden z najsilniejszych sygnałów rankingowych Google Maps – profile z dużą liczbą pozytywnych recenzji zdecydowanie wyprzedzają te bez opinii, nawet jeśli konkurencja jest starsza na rynku. Jak to robić zgodnie z zasadami Google tłumaczymy w artykule <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobyć więcej opinii w Google</Link>.
      </p>

      <h2>Profil firmy a pozycja w wynikach wyszukiwania</h2>

      <p>
        Wiele osób zakłada, że sam fakt posiadania profilu wystarczy, żeby pojawiać się wysoko w Google Maps. To niestety błędne przekonanie. Profil firmy w Google działa jak strona internetowa – samo istnienie nie gwarantuje dobrej pozycji. Google bierze pod uwagę kilkadziesiąt czynników rankingowych, w tym kompletność profilu, liczbę i jakość opinii, aktywność właściciela, liczbę zdjęć, spójność danych w internecie i odległość od lokalizacji wyszukującego.
      </p>

      <p>
        Jeśli zależy Ci na pojawianiu się wysoko w wynikach dla konkretnych fraz w Twoim mieście lub regionie, warto zapoznać się z pełnym przewodnikiem <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>. Alternatywnie możesz skorzystać z profesjonalnej usługi – sprawdź ofertę <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link> i dowiedz się jak wygląda współpraca.
      </p>

      <h2>Podsumowanie</h2>

      <p>
        Założenie Profilu Firmy w Google (dawniej Google Moja Firma) jest bezpłatne i zajmuje kilkanaście minut. Przejdź na <strong>business.google.com</strong>, zaloguj się, wpisz oficjalną nazwę firmy, wybierz precyzyjną kategorię, podaj adres lub obszar obsługi i zweryfikuj profil kodem pocztowym. Po weryfikacji uzupełnij wszystkie sekcje w 100%, dodaj zdjęcia i zacznij zbierać opinie. Dopiero wtedy profil zaczyna realnie pracować na klientów.
      </p>

      <p>
        Pamiętaj, że Google przemianowało usługę – jeśli spotkasz gdzieś starą nazwę „Google Moja Firma", chodzi o dokładnie to samo narzędzie. Zarządzaj profilem przez <strong>business.google.com</strong> lub bezpośrednio w wynikach wyszukiwania po wpisaniu nazwy swojej firmy.
      </p>

    </div>
  );
}
