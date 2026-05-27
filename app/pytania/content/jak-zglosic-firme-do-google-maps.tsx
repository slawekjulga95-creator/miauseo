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

export default function JakZglosicFirmeDoGoogleMaps() {
  return (
    <div className="prose-blog">

      <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-brand/30 pl-5 mb-8 not-prose">
        Zgłoszenie firmy do Google Maps i założenie profilu w Google to de facto ten sam proces – oba prowadzą do tego samego miejsca. Niezależnie od tego, czy zaczniesz od aplikacji Maps, wyników wyszukiwania czy panelu business.google.com, efekt końcowy jest identyczny: Twoja firma pojawi się na mapach Google. Poniżej wyjaśniamy każdą z tych dróg.
      </p>

      <h2>Google Maps i Google Business Profile to naczynia połączone</h2>

      <p>
        Wiele osób myśli o Google Maps i wizytówce Google jako o dwóch oddzielnych rzeczach. W praktyce są to dwie strony tego samego medalu. Twój profil w Google – oficjalnie nazywany <strong>Profilem Firmy w Google</strong> – pojawia się automatycznie zarówno w wynikach wyszukiwania Google, jak i na mapach. Nie ma osobnej rejestracji „do Google Maps" – rejestrujesz się raz, a firma trafia wszędzie.
      </p>

      <p>
        Zanim przejdziesz do rejestracji, warto sprawdzić czy Twoja firma przypadkiem nie jest już widoczna na mapach. Google często samo tworzy nieoficjalne wpisy na podstawie danych zebranych z katalogów branżowych, mediów społecznościowych i innych stron. Wejdź na maps.google.com, wpisz nazwę swojej firmy i sprawdź wyniki. Jeśli firma już tam jest, możesz ją „przejąć" i stać się jej oficjalnym właścicielem – bez konieczności tworzenia profilu od zera.
      </p>

      <Img
        alt="Aplikacja Google Maps na smartfonie z otwartym widokiem profilu firmy – przyciski zadzwoń, wyznacz trasę i strona www"
        caption="Profil firmy wyświetlany w aplikacji Google Maps – klienci mogą zadzwonić, wyznaczyć trasę lub odwiedzić stronę jednym kliknięciem"
      />

      <h2>Trzy sposoby na zgłoszenie firmy do Google Maps</h2>

      <h3>Przez panel Google Business Profile</h3>

      <p>
        Najbardziej kompletna metoda. Wejdź na <strong>business.google.com</strong>, zaloguj się kontem Google i kliknij „Zarządzaj teraz". Wpisz nazwę firmy w polu wyszukiwania – jeśli profil już istnieje, zobaczysz opcję przejęcia własności. Jeśli nie, wybierz „Dodaj firmę". Uzupełniasz kolejno: kategorię, adres lub obszar obsługi, dane kontaktowe. Na końcu Google poprosi o weryfikację tożsamości.
      </p>

      <p>
        Ten sposób daje od razu dostęp do pełnego panelu zarządzania ze wszystkimi sekcjami do uzupełnienia. Polecamy go szczególnie osobom, które chcą od razu solidnie skonfigurować cały profil. Pełny opis procesu znajdziesz w artykule <Link href="/pytania/jak-dodac-firme-do-google">jak dodać firmę do Google</Link>.
      </p>

      <h3>Przez aplikację Google Maps</h3>

      <p>
        Otwórz aplikację Google Maps na telefonie, zaloguj się i naciśnij ikonę swojego profilu w prawym górnym rogu. Z menu wybierz „Twoja firma w Google". Jeśli firma nie jest jeszcze dodana, zostaniesz przekierowany do formularza rejestracji. Proces jest identyczny jak przez przeglądarkę, ale interfejs dostosowany do ekranu dotykowego. Po założeniu profilem można zarządzać zarówno przez aplikację Maps, jak i przez panel webowy.
      </p>

      <h3>Przez wyniki wyszukiwania Google</h3>

      <p>
        Wpisz w Google frazy takie jak „moja firma Google" lub „dodaj firmę do Google". W wynikach pojawi się bezpośredni przycisk prowadzący do formularza rejestracji Profilu Firmy. To najszybsza droga dla osób, które chcą po prostu zacząć bez szukania konkretnych adresów URL.
      </p>

      <InfoBox>
        <strong>Ważne:</strong> niezależnie od wybranej metody, musisz przejść weryfikację zanim profil stanie się publiczny. Bez weryfikacji firma nie pojawi się na mapach. Czas oczekiwania na kod pocztowy to 5–14 dni roboczych. Wszystkie dostępne metody weryfikacji opisujemy w artykule <Link href="/pytania/google-business-profile-weryfikacja-firmy">Google Business Profile – weryfikacja firmy</Link>.
      </InfoBox>

      <h2>Czy można zgłosić firmę bez stałego adresu?</h2>

      <p>
        Tak. Google przewiduje specjalny typ profilu dla firm działających w terenie – hydraulicy, elektrycy, opiekunki, firmy sprzątające. Zaznaczasz podczas rejestracji, że obsługujesz klientów poza siedzibą, i możesz ukryć swój adres zamieszkania lub magazynu. Zamiast adresu podajesz obszar obsługi – konkretne miasta lub region. Firma nadal pojawia się w Google Maps dla klientów szukających usług w tym obszarze.
      </p>

      <p>
        Szczegóły ustawień obszaru opisujemy tutaj: <Link href="/pytania/wizytowka-google-a-obszar-obslugi-jak-ustawic">wizytówka Google a obszar obsługi – jak ustawić</Link>.
      </p>

      <h2>Co się dzieje po zgłoszeniu firmy?</h2>

      <Img
        alt="Ekran potwierdzenia wysłania kodu weryfikacyjnego Google na adres firmowy – widok formularza z polem do wpisania kodu"
        caption="Po wysłaniu zgłoszenia Google przesyła kod weryfikacyjny – bez jego wpisania profil pozostaje niewidoczny publicznie"
      />

      <p>
        Po wysłaniu formularza rejestracji Twój profil trafia do kolejki weryfikacji. Do czasu jej ukończenia możesz uzupełniać informacje w panelu – godziny otwarcia, opis firmy, zdjęcia – ale profil nie będzie widoczny dla klientów na mapach ani w wyszukiwarce. Kiedy kod dotrze pocztą (lub zweryfikujesz się inną metodą), profil staje się aktywny zazwyczaj w ciągu 24–48 godzin.
      </p>

      <p>
        Samo pojawienie się na mapach to jednak dopiero punkt startowy. Nowy profil bez opinii, bez zdjęć i bez uzupełnionych sekcji będzie wyświetlał się nisko w wynikach. Warto od razu po weryfikacji solidnie skonfigurować cały profil. Jak to zrobić krok po kroku opisujemy w poradniku <Link href="/pytania/profil-firmy-w-google-jak-skonfigurowac">profil firmy w Google – jak skonfigurować</Link>. A jeśli chcesz żeby profil był widoczny wyżej niż konkurencja, zacznij od lektury: <Link href="/pytania/jak-wypozycjonowac-wizytowke-google">jak wypozycjonować wizytówkę Google</Link>.
      </p>

      <h2>Podsumowanie</h2>

      <p>
        Zgłoszenie firmy do Google Maps to jeden i ten sam proces co zakładanie Profilu Firmy w Google. Możesz zacząć przez <strong>business.google.com</strong>, przez aplikację Google Maps lub przez wyniki wyszukiwania – wszystkie drogi prowadzą do tego samego formularza. Kluczowy krok to weryfikacja – bez niej profil pozostaje niewidoczny. Po jej przejściu uzupełnij profil możliwie kompletnie i zacznij zbierać opinie, bo to one w największym stopniu decydują o pozycji w mapach.
      </p>

    </div>
  );
}
