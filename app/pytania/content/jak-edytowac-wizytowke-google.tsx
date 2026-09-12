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

export default function JakEdytowacWizytowkeGoogle() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Edytowanie wizytówki Google jest prostsze niż myślisz – i od 2022 roku jeszcze wygodniejsze, bo Google przeniosło panel zarządzania bezpośrednio do wyników wyszukiwania. Nie musisz szukać żadnego oddzielnego panelu. Wystarczy wyszukać nazwę swojej firmy będąc zalogowanym na konto, którym zarządzasz profilem.
      </p>

      <h2>Gdzie teraz edytuje się wizytówkę Google?</h2>

      <p>
        Do 2022 roku edycja profilu odbywała się wyłącznie przez oddzielną aplikację Google My Business lub stronę business.google.com. Po rebrandingu Google uprościło ten proces – jeśli jesteś zalogowany na konto właściciela lub administratora profilu i wpiszesz w wyszukiwarkę nazwę swojej firmy, tuż pod wynikami zobaczysz specjalny panel zarządzania z przyciskami edycji. To ta sama funkcjonalność, tylko łatwiej dostępna.
      </p>

      <p>
        Możesz korzystać z trzech równoważnych sposobów edytowania: przez wyniki wyszukiwania Google po wpisaniu nazwy firmy, przez stronę <strong>business.google.com</strong>, albo przez aplikację Google Maps na telefonie – po wejściu w swój profil. Wszystkie trzy metody dają dostęp do tych samych ustawień, różnią się tylko interfejsem.
      </p>

      <Img
        alt="Panel zarządzania profilem firmy widoczny bezpośrednio w wynikach Google – przyciski edytuj profil, dodaj aktualizację, wyświetl statystyki"
        caption="Po wyszukaniu nazwy swojej firmy na koncie właściciela pojawia się panel zarządzania bez potrzeby wchodzenia na oddzielną stronę"
      />

      <h2>Co możesz edytować w wizytówce Google?</h2>

      <p>
        Zakres edycji jest szeroki. Możesz zmienić nazwę firmy, choć ta zmiana wymaga ponownej weryfikacji jeśli różni się znacznie od poprzedniej. Możesz edytować adres, numer telefonu, adres strony internetowej oraz godziny otwarcia – w tym ustawić specjalne godziny na święta i dni wolne. Każda zmiana danych kontaktowych powinna być zsynchronizowana ze wszystkimi innymi miejscami w internecie, gdzie Twoja firma jest wymieniona, bo rozbieżności szkodzą pozycji – tłumaczymy to w artykule <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency – co to jest</Link>.
      </p>

      <p>
        Edytować możesz też opis firmy – pole na do 750 znaków, w którym opisujesz czym się zajmujesz, dla kogo jesteś i co Cię wyróżnia. To ważne miejsce z punktu widzenia SEO, bo Google analizuje jego treść przy ustalaniu przy jakich zapytaniach pokazywać profil. Jak napisać dobry opis omawiamy w artykule <Link href="/pytania/opis-firmy-w-wizytowce-google-jak-napisac">opis firmy w wizytówce Google – jak napisać</Link>.
      </p>

      <p>
        W sekcji kategorii możesz zmienić kategorię główną i dodać kategorie dodatkowe. Kategoria główna to jeden z najsilniejszych sygnałów rankingowych – decyduje przy jakich frazach Google wyświetla Twój profil. Zmiana kategorii może znacząco wpłynąć na widoczność, dlatego przed dokonaniem zmiany warto to dobrze przemyśleć. Szczegółowy przewodnik: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.
      </p>

      <h2>Jak edytować zdjęcia w wizytówce Google?</h2>

      <Img
        alt="Panel zdjęć w profilu firmy Google – widok siatki z opcją dodaj zdjęcie i przyciskami zarządzania poszczególnymi fotografiami"
        caption="Zdjęcia edytujesz przez osobną sekcję profilu – możesz dodawać nowe, ale usuwać możesz tylko te dodane przez Ciebie jako właściciel"
      />

      <p>
        Zdjęcia zarządza się przez osobną sekcję profilu. Jako właściciel możesz dodawać nowe zdjęcia i usuwać te, które sam dodałeś. Zdjęcia dodane przez klientów – w tym te dołączone do opinii – widoczne są w sekcji „Od klientów" i nie możesz ich usunąć samodzielnie. Jedyną drogą do usunięcia zdjęcia od klienta jest zgłoszenie go do Google jako naruszającego zasady, co nie zawsze przynosi efekt.
      </p>

      <p>
        Przy dodawaniu zdjęć zwróć uwagę na ich jakość i zawartość. Google preferuje oryginalne fotografie z wnętrza lokalu, zewnętrza budynku, zespołu i przykładowych usług lub produktów. Zdjęcia stockowe lub grafiki z tekstem są dopuszczalne, ale rzadziej angażują klientów. Profil z dużą liczbą dobrych zdjęć notuje znacznie więcej kliknięć. Więcej o wpływie zdjęć na pozycję wyjaśniamy w artykule <Link href="/pytania/zdjecia-w-wizytowce-google-jaki-wplyw-na-pozycje">zdjęcia w wizytówce Google – jaki wpływ na pozycję</Link>.
      </p>

      <h2>Zmiany wymagające ponownej weryfikacji</h2>

      <p>
        Większość edycji wchodzi w życie natychmiast lub po krótkim czasie potrzebnym Google na ich zatwierdzenie. Są jednak zmiany, które Google traktuje jako istotne i może poprosić o ponowne potwierdzenie tożsamości. Dotyczy to przede wszystkim zmiany nazwy firmy, zmiany adresu na inną lokalizację i – w niektórych przypadkach – zmiany kategorii głównej. Ponowna weryfikacja przebiega tymi samymi metodami co pierwotna – pocztą, telefonicznie lub przez wideo.
      </p>

      <InfoBox>
        Zmiany w profilu są widoczne publicznie niemal od razu, ale Google może je tymczasowo ukryć do momentu wewnętrznej weryfikacji – szczególnie zmiany nazwy i adresu. Jeśli edytowana informacja nie pojawiła się po 24 godzinach, sprawdź w panelu czy nie ma oczekującego zgłoszenia do zatwierdzenia.
      </InfoBox>

      <h2>Jak często należy edytować wizytówkę?</h2>

      <p>
        Profil firmy to żywy dokument, nie formularz wypełniany raz i zapominany. Google obserwuje aktywność właściciela i bierze ją pod uwagę przy ustalaniu pozycji. Regularne aktualizacje – choćby zmiana godzin otwarcia przy okazji świąt, dodanie nowego zdjęcia co kilka tygodni lub opublikowanie posta z aktualnością – sygnalizują algorytmowi, że profil jest aktywnie zarządzany.
      </p>

      <p>
        Minimum to aktualizacja przy każdej faktycznej zmianie: nowy numer telefonu, zmiana godzin, nowe usługi w ofercie, zmiana lokalizacji. Warto też regularnie przeglądać sekcję Q&A – pytania i odpowiedzi – bo klienci mogą zadawać tam pytania, które wymagają reakcji. Jak zarządzać tą sekcją opisujemy w artykule <Link href="/pytania/qa-wizytowka-google-jak-zarzadzac">Q&A w wizytówce Google – jak zarządzać</Link>.
      </p>

      <p>
        Jeśli chcesz żeby Twój profil nie tylko był aktualny, ale faktycznie pojawiał się wysoko w wynikach lokalnych, sama edycja danych to za mało. Potrzebna jest szersza strategia pozycjonowania. Jak wygląda taki proces opisujemy w poradniku <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>, a profesjonalną pomoc oferujemy w ramach usługi <Link href="/uslugi/wizytowka-google">pozycjonowania wizytówki Google</Link>.
      </p>

      <h2>Podsumowanie</h2>

      <p>
        Wizytówkę Google edytujesz przez wyniki wyszukiwania po wpisaniu nazwy firmy (będąc zalogowanym jako właściciel), przez <strong>business.google.com</strong> lub przez aplikację Google Maps. Możesz zmieniać nazwę, adres, telefon, godziny, opis, kategorie, zdjęcia i usługi. Część zmian – zwłaszcza nazwa i adres – może wymagać ponownej weryfikacji. Profil warto edytować regularnie, bo aktywność właściciela jest jednym z sygnałów branych pod uwagę przez algorytm Google Maps.
      </p>

    </div>
  );
}
