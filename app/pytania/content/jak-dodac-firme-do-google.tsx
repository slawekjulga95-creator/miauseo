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
        <div className="text-[15px] text-zinc-600 leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  );
}

export default function JakDodacFirmeDoGoogle() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Dodanie firmy do Google to jeden z najważniejszych kroków, które możesz wykonać dla swojego lokalnego biznesu. W 2026 roku ponad <strong>92% użytkowników</strong> szuka firm lokalnych przez Google Maps i wyszukiwarkę. Poniżej znajdziesz kompletny przewodnik krok po kroku – od założenia profilu po weryfikację i pierwsze optymalizacje.
      </p>

      <Img
        alt="Strona główna Google Business Profile – panel rejestracji firmy"
        caption="Panel Google Business Profile (dawniej Google Moja Firma) dostępny pod adresem business.google.com"
      />

      <h2>Co to jest Google Business Profile?</h2>
      <p>
        <strong>Google Business Profile</strong> (dawniej Google Moja Firma, Google My Business) to bezpłatne narzędzie Google, które pozwala firmom zarządzać swoją obecnością w wyszukiwarce Google i Google Maps. Dzięki niemu Twoja firma może pojawiać się w <Link href="/pytania/jak-pojawic-sie-w-local-pack-google">Local Pack</Link> – trzech wyróżnionych wynikach lokalnych na górze strony – oraz wyświetlać kluczowe informacje: godziny otwarcia, numer telefonu, opinie klientów i zdjęcia.
      </p>
      <p>
        Profil jest całkowicie darmowy. Google zarabia na reklamach wokół wyników organicznych, ale sama wizytówka nie kosztuje nic. Jedynym kosztem jest czas potrzebny na prawidłowe uzupełnienie i późniejsze utrzymanie profilu.
      </p>

      <InfoBox>
        <strong>Zmiana nazwy w 2022 roku:</strong> Google przemianowało „Google Moja Firma" na „Google Business Profile". Jeśli gdzieś widzisz starą nazwę – chodzi o to samo narzędzie. Panel zarządzania znajdziesz pod adresem <strong>business.google.com</strong>.
      </InfoBox>

      <h2>Kto może dodać firmę do Google?</h2>
      <p>Google Business Profile jest dostępny dla trzech typów działalności:</p>
      <ul>
        <li><strong>Firmy ze stałą lokalizacją</strong> – sklepy, restauracje, gabinety, serwisy, salony. Klienci przychodzą do Ciebie pod konkretny adres.</li>
        <li><strong>Firmy obsługujące określony obszar (SAB)</strong> – hydraulicy, elektrycy, firmy sprzątające. Ty dojeżdżasz do klienta. Możesz ukryć swój adres i zamiast tego wskazać obszar obsługi.</li>
        <li><strong>Firmy hybrydowe</strong> – masz siedzibę, ale obsługujesz też klientów na ich terenie. Możesz podać adres i jednocześnie ustawić obszar obsługi.</li>
      </ul>
      <p>
        Firmy działające wyłącznie online (bez kontaktu fizycznego z klientem w określonej lokalizacji) <strong>nie kwalifikują się</strong> do Google Business Profile. Google może usunąć profil, jeśli stwierdzi, że narusza wytyczne.
      </p>

      <h2>Jak dodać firmę do Google – krok po kroku</h2>
      <p>Cały proces zajmuje około 10–15 minut. Do założenia profilu potrzebujesz konta Google (Gmail lub konto firmowe Google Workspace).</p>

      <Img
        alt="Formularz wyszukiwania nazwy firmy w Google Business Profile – pole tekstowe do wpisania nazwy"
        caption="Krok 1: wpisz dokładną nazwę swojej firmy tak, jak chcesz żeby wyświetlała się w Google"
      />

      <Step num="1" title="Wejdź na Google Business Profile i zaloguj się">
        <p>Otwórz przeglądarkę i wejdź na <strong>business.google.com</strong>. Kliknij przycisk <em>„Zarządzaj teraz"</em> i zaloguj się na konto Google, którego chcesz używać do zarządzania profilem. Pamiętaj – do tego konta zawsze będziesz mieć dostęp. Możesz później dodać innych administratorów.</p>
      </Step>

      <Step num="2" title='Wpisz nazwę firmy i sprawdź czy profil już istnieje'>
        <p>W polu wyszukiwania wpisz dokładną nazwę swojej firmy. Google sprawdzi, czy profil już istnieje – czasem Google samo tworzy „nieoficjalne" wpisy na podstawie danych z internetu.</p>
        <p>Jeśli Twoja firma już widnieje na liście – wybierz ją i kliknij <em>„Przejęcie własności"</em>. Jeśli jej nie ma – kliknij <em>„Dodaj firmę do Google"</em>.</p>
        <InfoBox>Używaj <strong>dokładnej, oficjalnej nazwy firmy</strong> – takiej, jaka widnieje na umowach, paragonach i szyldie. Wpisywanie słów kluczowych do nazwy (np. „Mechanik Warszawa – AutoSerwis Kowalski") jest niezgodne z wytycznymi Google i może skutkować zawieszeniem profilu.</InfoBox>
      </Step>

      <Step num="3" title="Wybierz kategorię główną firmy">
        <p>To jeden z ważniejszych kroków – kategoria wpływa bezpośrednio na to, przy jakich wyszukiwaniach pojawi się Twoja wizytówka. Wpisz słowo opisujące Twój biznes i wybierz kategorię z listy podpowiedzi.</p>
        <p>Przykłady: <em>Mechanik samochodowy</em>, <em>Stomatolog</em>, <em>Restauracja włoska</em>, <em>Sklep z elektroniką</em>.</p>
        <p>Szczegółowy poradnik znajdziesz tutaj: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy w Google</Link>.</p>
      </Step>

      <Img
        alt="Mapa Google z zaznaczonym pinem lokalizacji firmy oraz formularzem wpisywania adresu"
        caption="Krok 4: wskaż lokalizację lub obszar obsługi – dokładność adresu ma wpływ na pozycję w Maps"
      />

      <Step num="4" title="Podaj lokalizację lub obszar obsługi">
        <p><strong>Jeśli masz stały adres:</strong> wpisz ulicę, numer, miasto i kod pocztowy. Google pokaże pin na mapie – sprawdź czy jest we właściwym miejscu i przesuń go jeśli trzeba.</p>
        <p><strong>Jeśli obsługujesz klientów w terenie:</strong> zaznacz opcję <em>„Dostarczam towary lub świadczę usługi na miejscu u klientów"</em>. Następnie możesz ukryć adres i wskazać obszar obsługi – miasto, powiat, województwo lub region.</p>
      </Step>

      <Step num="5" title="Uzupełnij dane kontaktowe">
        <p>Podaj numer telefonu (najlepiej lokalny, nie 0-800) i adres strony internetowej, jeśli posiadasz. Oba pola są opcjonalne, ale <strong>brak numeru telefonu znacząco obniża konwersję</strong> – klienci chcą zadzwonić od razu po zobaczeniu wizytówki.</p>
        <p>Upewnij się, że numer i strona są takie same jak w pozostałych miejscach w internecie – to istotne z punktu widzenia <Link href="/pytania/nap-consistency-co-to-jest">NAP consistency</Link>.</p>
      </Step>

      <Step num="6" title="Zweryfikuj firmę">
        <p>Po zapisaniu danych Google poprosi o weryfikację tożsamości. To obowiązkowy krok – bez weryfikacji profil nie będzie widoczny publicznie. Dostępne metody opisujemy szczegółowo w kolejnej sekcji.</p>
      </Step>

      <h2>Metody weryfikacji firmy w Google</h2>
      <p>
        Weryfikacja potwierdza Google, że firma naprawdę istnieje pod podanym adresem lub numerem telefonu. Dostępne metody zależą od rodzaju firmy i kraju. Szczegółowy poradnik: <Link href="/pytania/google-business-profile-weryfikacja-firmy">Google Business Profile – weryfikacja firmy</Link>.
      </p>

      <Img
        alt="Kartka z kodem weryfikacyjnym Google Business Profile przesłana pocztą – widok koperty z logo Google"
        caption="Kod weryfikacyjny Google przesyła tradycyjną pocztą w ciągu 5–14 dni roboczych"
      />

      <h3>Weryfikacja pocztą (kod na kartce)</h3>
      <p>
        Najpopularniejsza metoda w Polsce. Google wysyła pocztówkę z 5-cyfrowym kodem na adres firmy. Czas dostawy: <strong>5–14 dni roboczych</strong>. Po otrzymaniu kartki zaloguj się na business.google.com i wpisz kod. Szczegóły: <Link href="/pytania/jak-zweryfikowac-firme-w-google-poczta">jak zweryfikować firmę w Google pocztą</Link>.
      </p>

      <h3>Weryfikacja przez telefon lub SMS</h3>
      <p>
        Dostępna dla części firm – Google dzwoni na podany numer lub wysyła SMS z kodem. Cały proces trwa kilka minut. Opcja nie zawsze jest dostępna – zależy od kategorii firmy i historii konta Google.
      </p>

      <h3>Weryfikacja nagraniem wideo</h3>
      <p>
        Od 2023 roku Google coraz częściej wymaga weryfikacji wideo, szczególnie dla nowych kont bez historii. Nagrywasz krótki film pokazujący: dojście do siedziby firmy, wnętrze lub oznakowanie oraz dowód własności (np. dokument rejestrowy). Film analizowany jest przez system Google i moderatorów.
      </p>

      <h3>Weryfikacja natychmiastowa</h3>
      <p>
        Jeśli Twoja strona internetowa jest już zweryfikowana w Google Search Console i używasz tego samego adresu email – Google może zweryfikować profil automatycznie, bez żadnego dodatkowego kroku.
      </p>

      <InfoBox>
        <strong>Wskazówka 2026:</strong> Nie publikuj profilu z niekompletnymi danymi licząc, że uzupełnisz je po weryfikacji. Google obserwuje zachowanie profilu od pierwszych dni – im szybciej uzupełnisz wszystkie sekcje, tym lepiej dla widoczności.
      </InfoBox>

      <h2>Co zrobić bezpośrednio po dodaniu firmy do Google?</h2>
      <p>Weryfikacja to dopiero początek. Profil tuż po założeniu ma zwykle bardzo niską pozycję – Google nie ma jeszcze wystarczających sygnałów, żeby wyświetlać go wysoko. Oto co powinieneś zrobić w pierwszych 48 godzinach:</p>
      <ul>
        <li><strong>Uzupełnij wszystkie sekcje profilu</strong> – opis firmy, godziny otwarcia, atrybuty (np. „dostęp dla osób niepełnosprawnych", „parking"). Szczegółowy poradnik: <Link href="/pytania/jak-uzupelnic-wizytowke-google-zeby-byla-skuteczna">jak uzupełnić wizytówkę Google, żeby była skuteczna</Link>.</li>
        <li><strong>Dodaj minimum 10 zdjęć</strong> – wnętrze, zewnętrze, zespół, produkty lub usługi. Profile ze zdjęciami dostają średnio o 42% więcej zapytań o trasę niż te bez zdjęć.</li>
        <li><strong>Poproś pierwszych klientów o opinie</strong> – <Link href="/pytania/jak-zdobyc-wiecej-opinii-google">jak zdobywać opinie w Google</Link> bez naruszania zasad.</li>
        <li><strong>Dodaj usługi i produkty</strong> – sekcja „Usługi" to dodatkowe słowa kluczowe widoczne bezpośrednio na profilu.</li>
        <li><strong>Ustaw obszar obsługi</strong> jeśli prowadzisz usługi mobilne – <Link href="/pytania/wizytowka-google-a-obszar-obslugi-jak-ustawic">wizytówka Google a obszar obsługi</Link>.</li>
      </ul>

      <h2>Najczęstsze błędy przy zakładaniu wizytówki Google</h2>
      <p>W ciągu lat pracy z lokalnym SEO widziałem te same błędy popełniane przez właścicieli firm. Uniknij ich od samego początku:</p>

      <ul>
        <li>
          <strong>Błędna kategoria główna</strong> – kategoria decyduje, przy jakich frazach Google pokazuje wizytówkę. Wybierasz zbyt ogólną (np. „Firma usługowa" zamiast „Hydraulik") i tracisz widoczność na frazy, które naprawdę przynoszą klientów. Więcej: <Link href="/pytania/kategoria-firmy-google-jak-wybrac">jak wybrać kategorię firmy</Link>.
        </li>
        <li>
          <strong>Niezgodność danych z innymi źródłami</strong> – jeśli na stronie masz inny numer telefonu niż w wizytówce, Google traktuje to jako sygnał niespójności. Zasada: jeden numer, jeden adres, wszędzie tak samo.
        </li>
        <li>
          <strong>Brak odpowiedzi na opinie</strong> – Google obserwuje aktywność właściciela. Profil bez odpowiedzi na opinie jest traktowany jako mniej wiarygodny. Odpowiadaj na każdą opinię – pozytywną i negatywną.
        </li>
        <li>
          <strong>Słabe lub zerowe zdjęcia</strong> – zdjęcia z telefonu zrobione w pośpiechu nie budują zaufania. Profil bez zdjęć jest prawie niewidoczny w wynikach z dużą konkurencją.
        </li>
        <li>
          <strong>Porzucenie profilu po założeniu</strong> – wizytówka wymaga regularnej aktywności: aktualizacji godzin, odpowiedzi na pytania, dodawania postów. Profile nieaktywne stopniowo tracą pozycję.
        </li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Dodanie firmy do Google to kilkanaście minut pracy – weryfikacja zajmuje kilka dni, ale cały proces jest prosty. Kluczowe punkty:
      </p>
      <ul>
        <li>Wejdź na <strong>business.google.com</strong> i zaloguj się kontem Google.</li>
        <li>Wpisz dokładną, oficjalną nazwę firmy bez słów kluczowych.</li>
        <li>Wybierz precyzyjną kategorię – to jeden z najważniejszych czynników widoczności.</li>
        <li>Zweryfikuj firmę – bez tego profil nie jest widoczny publicznie.</li>
        <li>Po weryfikacji uzupełnij profil w 100% i zbierz pierwsze opinie.</li>
      </ul>
      <p>
        Sama wizytówka to dopiero punkt startowy. Jeśli chcesz faktycznie pojawiać się wyżej niż konkurencja w Google Maps, potrzebujesz aktywnej pracy nad <Link href="/uslugi/wizytowka-google">pozycjonowaniem wizytówki Google</Link>. Sprawdź też: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link> – kompleksowy przewodnik po czynnikach rankingowych.
      </p>

    </div>
  );
}
