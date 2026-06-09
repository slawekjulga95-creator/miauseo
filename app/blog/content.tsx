import Link from "next/link";

export const articleContent: Record<string, React.ReactNode> = {

  /* ─────────────────────────────────────────────────────────────────────────
     SEO: Google Search Console raporty AI 2026
  ───────────────────────────────────────────────────────────────────────── */
  "google-search-console-raporty-ai-2026": (
    <>
      <h2>Co właśnie ogłosił Google — i dlaczego to ważne</h2>
      <p>
        W czerwcu 2026 Google oficjalnie uruchomił dedykowane raporty widoczności w generatywnych funkcjach AI w Search Console. To odpowiedź na jedno z najczęściej zadawanych pytań przez właścicieli stron i specjalistów SEO: <strong>skąd mam wiedzieć, czy moja treść pojawia się w AI Overviews i AI Mode?</strong>
      </p>
      <p>
        Do tej pory dane o widoczności w AI były wmieszane w ogólny raport wydajności — nie dało się ich wyizolować. Teraz dostają własny, oddzielny widok. To pierwsza tak duża zmiana w transparentności Search Console od lat i sygnał, że Google traktuje generatywne AI w wyszukiwaniu jako stały element, nie eksperyment.
      </p>

      <h2>Czym są raporty Search Generative AI?</h2>
      <p>
        Google uruchamia dwa nowe raporty: jeden dla wyników Search (AI Overviews, AI Mode) i drugi dla Discover. Oba działają jako oddzielne widoki wewnątrz Search Console — dane są też nadal dostępne w głównym raporcie wydajności, ale teraz możesz je przeglądać osobno, bez ręcznego filtrowania.
      </p>
      <p>
        Raporty są wdrażane stopniowo — na start trafiają do wybranej grupy właścicieli stron, zanim rozszerzą się globalnie. Jeśli jeszcze nie widzisz ich w swoim Search Console, poczekaj kilka tygodni. Oficjalnie projekt zapowiedzieli Hillel Maoz (Search Ecosystem Engineering Manager) i Moshe Samet (Product Manager Lead, Search Console).
      </p>

      <h2>Co dokładnie możesz zmierzyć?</h2>
      <p>
        Każdy raport pokazuje pięć wymiarów danych. <strong>Impressions</strong> — ile razy Twój URL pojawił się w odpowiedzi generatywnej AI w Search lub Discover. <strong>Pages</strong> — które konkretne podstrony trafiają do AI. <strong>Countries</strong> — w jakich krajach Twoja strona jest widoczna w AI. <strong>Devices</strong> — na jakich urządzeniach to się dzieje (dostępne wyłącznie dla Search, nie dla Discover). <strong>Dates</strong> — granularność od godzinowej po miesięczną, żebyś mógł śledzić trendy w czasie i wychwytywać momenty, kiedy widoczność rośnie lub spada.
      </p>

      <div className="not-prose mt-6 mb-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">WAŻNE</p>
        <p className="text-sm text-amber-900 leading-relaxed">
          Raporty pokazują wyłącznie <strong>impressions — nie kliknięcia</strong>. Google świadomie nie udostępnia danych o tym, ile ruchu faktycznie przychodzi z AI Overviews czy AI Mode. Przedstawiciel Google potwierdził tylko tyle, że „pracują nad dodatkowymi metrykami w przyszłości". Na razie widzisz zasięg, ale nie ruch.
        </p>
      </div>

      <h2>Brak kliknięć — dlaczego to problem i co z tym zrobić</h2>
      <p>
        To nie jest przeoczenie — to świadoma decyzja. AI Overviews i AI Mode są zaprojektowane tak, żeby odpowiadać na pytania bezpośrednio w wynikach wyszukiwania, bez zmuszania użytkownika do klikania w linki. Google doskonale zdaje sobie sprawę, że to generuje mniej kliknięć do stron zewnętrznych, i nie spieszy się z publikowaniem danych, które mogłyby to potwierdzić czarno na białym.
      </p>
      <p>
        Dla właściciela strony oznacza to jedno: impressions w AI to na razie metryka zasięgu, nie ruchu. Możesz wiedzieć, że Google cytuje Twoją treść w odpowiedziach AI — ale czy to przynosi Ci klientów, tego Search Console jeszcze nie powie. To poważne ograniczenie dla każdego, kto próbuje uzasadnić inwestycję w content SEO na podstawie twardych liczb.
      </p>

      <h2>Blokowanie treści przed AI — masz już taką opcję</h2>
      <p>
        Przy okazji premiery raportów Google testuje w Wielkiej Brytanii osobną funkcję: toggle w Search Console, który pozwala zablokować swoją treść przed pojawianiem się w AI Overviews, AI Mode i generatywnym AI w Discover. Strony, które zdecydują się na wyłączenie, przestają otrzymywać impressions z tych funkcji.
      </p>
      <p>
        Google zapewnia, że ta decyzja <strong>nie wpłynie na pozycje w klasycznych wynikach wyszukiwania</strong> — blokada dotyczy wyłącznie funkcji generatywnych AI. Kiedy toggle pojawi się globalnie, stoisz przed realnym wyborem: wolisz być cytowany w AI bez gwarancji ruchu, czy całkowicie z tego zrezygnować i liczyć wyłącznie na klasyczne wyniki organiczne?
      </p>

      <div className="not-prose mt-6 mb-6 rounded-2xl border-l-4 border-amber-400 bg-amber-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">WAŻNE</p>
        <p className="text-sm text-amber-900 leading-relaxed">
          Blokowanie treści przed AI jest testowane w UK i nie jest jeszcze dostępne globalnie. Zanim zdecydujesz się je włączyć — przeanalizuj najpierw dane z raportów impressions. Jeśli AI Overviews generuje Ci widoczność na frazy, które inaczej byłyby poza Twoim zasięgiem, blokada może przynieść więcej szkody niż pożytku.
        </p>
      </div>

      <h2>Co to zmienia w strategii SEO — 3 wnioski na teraz</h2>
      <p>
        <strong>Zacznij monitorować impressions z AI</strong> od momentu, gdy dostaniesz dostęp do raportów. To dane historyczne, które za 6 miesięcy pokażą Ci, czy Twoja widoczność w AI rośnie czy maleje. Nie mając baseline'u teraz, nie będziesz miał punktu odniesienia za rok — a większość Twojej konkurencji też go nie będzie mieć.
      </p>
      <p>
        <strong>Sprawdź, które strony trafiają do AI.</strong> Jeśli w raporcie Pages zobaczysz podstrony z wysokimi impressions w AI, to sygnał, że ta treść jest przez Google uznawana za wiarygodną i pełną odpowiedź na konkretne pytania. Zidentyfikuj, co te strony mają wspólnego, i powtórz ten schemat w nowych tekstach.
      </p>
      <p>
        <strong>Nie mierz sukcesu wyłącznie przez ruch organiczny.</strong> Obecność w AI Overviews to element budowania świadomości marki — szczególnie dla lokalnych firm, gdzie pojawienie się w odpowiedzi AI na pytanie „kto robi X w moim mieście" może być równie wartościowe co kliknięcie. Połącz dane z Search Console z innymi sygnałami: zapytaniami bezpośrednimi, rosnącą liczbą wejść branded, telefonami z Google Maps.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Google po raz pierwszy daje właścicielom stron konkretne dane o widoczności w generatywnym AI. To dobra zmiana — choć niepełna, bo brak danych o kliknięciach to realna luka. Impressions to dopiero pierwszy krok, ale lepszy niż operowanie w ciemno.
      </p>
      <p>
        Obserwuj, kiedy raporty pojawią się w Twoim Search Console, ustaw regularne monitorowanie i zacznij zbierać dane. Za rok będziesz mieć trendlinię — i przewagę nad tymi, którzy zaczęli patrzeć na te liczby rok za późno.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/pozycjonowanie-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Pozycjonowanie wizytówki Google – kompletny przewodnik 2026</Link></li>
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026 — pełna lista</Link></li>
          <li><Link href="/jak-dobierac-slowa-kluczowe-do-pozycjonowania" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak dobierać słowa kluczowe do pozycjonowania</Link></li>
        </ul>
      </div>

      <p className="text-xs text-zinc-400 mt-6">
        Źródło:{" "}
        <a
          href="https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-brand transition-colors"
        >
          Google Search Central Blog — Search Generative AI Performance Reports (Hillel Maoz, Moshe Samet)
        </a>
      </p>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Kategorie
  ───────────────────────────────────────────────────────────────────────── */
  "kategorie-wizytowka-google": (
    <>
      <h2>Dlaczego kategoria główna to najważniejszy wybór w GBP?</h2>
      <p>
        Algorytm Google Local Pack w pierwszej kolejności sprawdza, czy kategoria główna wizytówki pasuje do zapytania użytkownika. Firma z kategorią „Restauracja" nigdy nie pojawi się na frazę „dentysta" — nawet jeśli w opisie wspomina o gabinecie. Kategoria główna to filtr, który Google stosuje zanim w ogóle sprawdzi pozostałe sygnały rankingowe.
      </p>
      <p>
        W praktyce oznacza to, że zła kategoria główna może całkowicie wykluczyć Cię z widoczności na kluczowe frazy — niezależnie od liczby opinii, jakości zdjęć czy wypełnienia pozostałych pól. To błąd, który trudno wykryć samodzielnie, bo wizytówka pozornie „działa".
      </p>

      <h2>Kategoria główna vs kategorie dodatkowe — jak to działa</h2>
      <p>
        Google Business Profile pozwala dodać <strong>1 kategorię główną</strong> i do <strong>9 kategorii dodatkowych</strong>. Mają fundamentalnie inną wagę:
      </p>
      <ul>
        <li><strong>Kategoria główna</strong> — określa, na jakie zapytania ogólne (bez lokalizacji) Twoja firma może się pojawić. Ma największy wpływ na ranking. Wybieraj ją z perspektywy „co robimy najczęściej" lub „za co płacą nam najwięcej klientów".</li>
        <li><strong>Kategorie dodatkowe</strong> — rozszerzają widoczność na poboczne usługi. Dentysta może dodać „Ortodonta" jako dodatkową, jeśli rzeczywiście oferuje ortodoncję. Nie wpisuj kategorii usług, których nie wykonujesz — Google to weryfikuje przez opinie, zdjęcia i czas spędzany na stronie.</li>
      </ul>
      <p>
        Maksymalna liczba 9 kategorii dodatkowych nie oznacza, że powinieneś je wszystkie wypełnić. Lepiej 3 trafne niż 9 naciągniętych — rozmyte sygnały obniżają pozycję na wszystkich frazach zamiast ją podnosić.
      </p>

      <h2>Jak znaleźć właściwą kategorię — krok po kroku</h2>
      <p>
        Google ma ponad 4 000 kategorii GBP, ale nie udostępnia ich pełnej listy bezpośrednio. Sprawdzony sposób na znalezienie właściwej:
      </p>
      <ul>
        <li><strong>Wyszukaj konkurentów</strong> — wpisz w Google frazę, na którą chcesz się pojawiać (np. „dentysta Kraków") i sprawdź kategorie główne firm z top 3 w Mapach Google. Kliknij wizytówkę → Informacje → sekcja Kategorie.</li>
        <li><strong>Zacznij wpisywać w GBP</strong> — panel sugeruje kategorie podczas wpisywania. Wpisz ogólne słowo (np. „gabinet", „salon", „sklep") i przejrzyj sugestie.</li>
        <li><strong>Sprawdź placeresearch.app</strong> — nieoficjalna baza kategorii GBP z możliwością wyszukiwania i filtrowania po krajach.</li>
      </ul>

      <h2>Najczęstsze błędy przy wyborze kategorii</h2>
      <ul>
        <li><strong>Za szeroka kategoria</strong> — „Sklep" zamiast „Sklep z akcesoriami do jogi". Im węższa kategoria, tym mniejsza konkurencja i wyższe pozycje dla trafnych fraz.</li>
        <li><strong>Kategoria aspiracyjna zamiast faktycznej</strong> — wybieranie kategorii pasującej do tego, czym firma chce być, zamiast tego, czym jest. Google porównuje kategorię z opiniami i zachowaniem użytkowników.</li>
        <li><strong>Ignorowanie nowych kategorii</strong> — Google regularnie dodaje nowe, bardziej szczegółowe kategorie. Raz w kwartale warto sprawdzić, czy pojawiła się trafniejsza opcja.</li>
        <li><strong>Kopiowanie kategorii konkurencji bez analizy</strong> — jeśli konkurent jest źle skategoryzowany i mimo to wyświetla się wysoko, ma inne silne sygnały rankingowe. Skopiowanie błędu nie da Ci jego pozycji.</li>
      </ul>

      <h2>Czy zmiana kategorii wpłynie negatywnie na ranking?</h2>
      <p>
        Zmiana kategorii głównej to interwencja w jeden z najsilniejszych sygnałów GBP — może wywołać tymczasowe wahnięcia pozycji w obie strony. W praktyce poprawna zmiana (z błędnej na trafną) poprawia pozycje w ciągu 2–4 tygodni. Nie zmieniaj kategorii eksperymentalnie — każda zmiana powinna być przemyślana i oparta na analizie konkurencji.
      </p>
      <p>
        Więcej o tym, jak kategoria wpływa na cały algorytm rankingowy, przeczytasz w artykule{" "}
        <Link href="/czynniki-rankingowe-wizytowki-google-2026">czynniki rankingowe wizytówki Google w 2026</Link>.
        Jeśli dopiero tworzysz wizytówkę lub konfigurujesz ją od nowa, sprawdź też{" "}
        <Link href="/sekcja-informacje-wizytowka-google">kompletny przewodnik po sekcji Informacje w GBP</Link>, żeby nie pominąć żadnego ważnego pola.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/atrybuty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Atrybuty wizytówki Google – czym są i jak je wypełnić?</Link></li>
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026</Link></li>
          <li><Link href="/jak-pozycjonowac-wizytowke-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Godziny otwarcia
  ───────────────────────────────────────────────────────────────────────── */
  "godziny-otwarcia-wizytowka-google": (
    <>
      <h2>Dlaczego godziny otwarcia są ważniejsze niż myślisz</h2>
      <p>
        Google Maps i wyniki lokalne pokazują użytkownikom informację „Otwarte teraz" lub „Zamknięte" w czasie rzeczywistym. Firmy oznaczone jako otwarte mają statystycznie wyższy CTR — klienci rzadziej klikają miejsca, które są aktualnie zamknięte. Ponadto Google może obniżyć pozycję wizytówki, jeśli użytkownicy regularnie zgłaszają, że godziny otwarcia są niepoprawne.
      </p>
      <p>
        Nieaktualne godziny to też jeden z najczęstszych powodów negatywnych opinii 1-gwiazdkowych — „Przyjechałem a firma była zamknięta mimo że Google pokazywał że jest otwarta". Taką opinię trudno usunąć i trudno zrównoważyć.
      </p>

      <h2>Godziny regularne — jak je poprawnie ustawić</h2>
      <p>
        W panelu GBP (business.google.com) przejdź do sekcji <strong>Informacje → Godziny</strong>. Dla każdego dnia tygodnia możesz ustawić:
      </p>
      <ul>
        <li><strong>Otwarte z przerwą</strong> — np. 8:00–12:00 i 14:00–18:00 (dodaj drugi zakres godzin dla tego samego dnia)</li>
        <li><strong>Cały dzień (24h)</strong> — przydatne dla pogotowia, dyzuru, sklepów nocnych</li>
        <li><strong>Zamknięte</strong> — zaznacz jeśli firma jest nieczynna w danym dniu</li>
      </ul>
      <p>
        <strong>Ważna zasada:</strong> wpisuj godziny kiedy <em>klient może się z Tobą skontaktować lub odwiedzić firmę</em>, a nie kiedy jesteś fizycznie w pracy. Jeśli przyjmujesz klientów tylko po umówieniu, a telefon odbierasz od 9 do 17 — wpisz właśnie 9–17.
      </p>

      <h2>Godziny specjalne i świąteczne — o tym zapomina 90% firm</h2>
      <p>
        Google Business Profile ma dedykowaną funkcję <strong>Godziny specjalne</strong>, pozwalającą ustawić wyjątki dla konkretnych dat: świąt, długich weekendów, urlopów, eventów specjalnych.
      </p>
      <p>
        Jak to zrobić: w sekcji Godziny kliknij <strong>„Godziny specjalne"</strong> → Dodaj datę → Wybierz czy w tym dniu firma jest zamknięta, czynna ze zmienionymi godzinami, lub czynna całą dobę.
      </p>
      <p>
        Google często sam sugeruje aktualizację godzin specjalnych przed większymi świętami (Boże Narodzenie, Nowy Rok, Wielkanoc). Warto reagować na te powiadomienia — firma która potwierdziła godziny świąteczne dostaje wizualny wyróżnik w wynikach Google Maps.
      </p>

      <h2>Godziny „Więcej godzin" — dla specyficznych usług</h2>
      <p>
        Dla niektórych branż Google oferuje dodatkowe sekcje godzin, np.:
      </p>
      <ul>
        <li>Godziny przyjęć online (teleporady)</li>
        <li>Godziny dostawy</li>
        <li>Godziny drive-through</li>
        <li>Godziny kuchni (dla restauracji)</li>
        <li>Godziny recepcji</li>
      </ul>
      <p>
        Te dodatkowe sekcje pojawiają się tylko jeśli kategoria Twojej firmy je obsługuje. Jeśli ich nie widzisz — Twoja kategoria ich nie ma lub nie są dostępne w Polsce dla tej branży.
      </p>

      <h2>Co zrobić gdy godziny się zmieniają sezonowo?</h2>
      <p>
        Wiele firm (hotele, restauracje, atrakcje turystyczne) ma inne godziny latem i zimą. Najlepsze rozwiązanie: ustaw aktualny sezon jako godziny regularne, a na kilka dni przed zmianą zaktualizuj. Nie zostawiaj starych godzin „bo większość klientów i tak wie" — Google tego nie wie, i karze za niezgodność.
      </p>
      <p>
        Godziny otwarcia są jednym z elementów omówionych szczegółowo w{" "}
        <Link href="/sekcja-informacje-wizytowka-google">kompletnym przewodniku po sekcji Informacje w GBP</Link>.
        Warto też uzupełnić{" "}
        <Link href="/atrybuty-wizytowka-google">atrybuty wizytówki</Link>, które informują klientów o dostępnych udogodnieniach — często decydują o tym, czy klient w ogóle odwiedzi firmę.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/atrybuty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Atrybuty wizytówki Google – czym są i jak je wypełnić?</Link></li>
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026</Link></li>
          <li><Link href="/nap-wizytowka-google-co-to-jest" className="text-sm font-semibold text-ink hover:text-brand transition-colors">NAP w wizytówce Google – czym jest i jak skonfigurować?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Atrybuty
  ───────────────────────────────────────────────────────────────────────── */
  "atrybuty-wizytowka-google": (
    <>
      <h2>Czym są atrybuty w wizytówce Google?</h2>
      <p>
        Atrybuty GBP to krótkie informacje opisujące cechy charakterystyczne Twojej firmy — dostępne udogodnienia, metody płatności, opcje obsługi, środowisko. Wyświetlają się bezpośrednio w panelu wiedzy (Knowledge Panel) Twojej firmy w Google Maps i wyszukiwarce.
      </p>
      <p>
        Użytkownik szukający restauracji może filtrować wyniki po atrybutach: „z miejscem dla wózków", „z WiFi", „dostawa do domu". Firma bez uzupełnionych atrybutów nie pojawi się w tych filtrach — niezależnie od pozycji w wynikach organicznych.
      </p>

      <h2>Typy atrybutów w GBP</h2>
      <p>
        Google dzieli atrybuty na kilka kategorii, dostępność zależy od branży i lokalizacji:
      </p>
      <ul>
        <li><strong>Dostępność</strong> — wejście dla wózków inwalidzkich, parking dla niepełnosprawnych, toaleta dostępna dla niepełnosprawnych, wejście bez schodów</li>
        <li><strong>Oferta usług</strong> — dostawa do domu, odbiór osobisty, catering, rezerwacja online, usługi mobilne (dojazd do klienta)</li>
        <li><strong>Płatności</strong> — płatność gotówką, kartą, BLIK, Google Pay, Apple Pay, płatności online</li>
        <li><strong>Środowisko</strong> — miejsce przyjazne dzieciom, miejsce przyjazne LGBTQ+, zwierzęta mile widziane, miejsce dla palących na zewnątrz</li>
        <li><strong>Usługi zdrowotne i bezpieczeństwo</strong> — maseczki obowiązkowe, rezerwacja wymagana, temperatury mierzone przy wejściu (atrybuty COVID nadal dostępne w niektórych branżach)</li>
        <li><strong>Rozrywka i jedzenie</strong> (dla restauracji/barów) — na żywo muzyka, happy hour, tylko dla dorosłych, bar, menu dla wegan</li>
      </ul>

      <h2>Jak dodać atrybuty do wizytówki Google?</h2>
      <p>
        W panelu GBP (business.google.com) przejdź do sekcji <strong>Informacje → Atrybuty</strong>. Lista dostępnych atrybutów zależy od wybranej kategorii głównej — to kolejny powód, dla którego{" "}
        <Link href="/kategorie-wizytowka-google">właściwy wybór kategorii</Link> jest tak ważny.
      </p>
      <p>
        Atrybuty dzielą się na dwa typy:
      </p>
      <ul>
        <li><strong>Atrybuty subiektywne</strong> — które Ty sam zaznaczasz (np. „WiFi dostępne", „dla wózków"). Masz pełną kontrolę.</li>
        <li><strong>Atrybuty weryfikowane przez użytkowników</strong> — Google zbiera opinie użytkowników i sam dodaje atrybuty na podstawie odpowiedzi w ankietach po wizycie. Np. „Zazwyczaj spokojne miejsce", „Zazwyczaj szybka obsługa". Tych nie możesz edytować.</li>
      </ul>

      <h2>Które atrybuty mają największy wpływ na widoczność?</h2>
      <p>
        Bezpośredni wpływ na ranking jest trudny do zmierzenia, ale atrybuty wpływają na CTR (klikalność) — a wysoki CTR jest sygnałem dla Google że wizytówka jest dopasowana do zapytania.
      </p>
      <p>
        Najważniejsze z perspektywy klientów:
      </p>
      <ul>
        <li><strong>Metody płatności</strong> — klient przed wizytą sprawdza czy może zapłacić kartą. Brak tej informacji to realna strata klientów.</li>
        <li><strong>Dostępność dla osób z niepełnosprawnościami</strong> — istotne dla starszych klientów i rodziców z wózkami, a wyszukiwania z tymi filtrami rosną.</li>
        <li><strong>Dostawa i odbiór</strong> — kluczowe dla branży food, ale też dla sklepów lokalnych po zmianie nawyków po pandemii.</li>
        <li><strong>Rezerwacja online</strong> — firmy z możliwością rezerwacji online mają wyższy współczynnik konwersji niż te wymagające kontaktu telefonicznego.</li>
      </ul>
      <p>
        Atrybuty to jedno z pól omówionych w{" "}
        <Link href="/sekcja-informacje-wizytowka-google">pełnym przewodniku po sekcji Informacje GBP</Link>.
        Jeśli dopiero uzupełniasz wizytówkę,{" "}
        <Link href="/godziny-otwarcia-wizytowka-google">ustaw też poprawnie godziny otwarcia</Link> — to kolejny element, który klienci sprawdzają przed wizytą.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie w wizytówce Google – jak wybrać właściwe?</Link></li>
          <li><Link href="/godziny-otwarcia-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Godziny otwarcia w wizytówce Google – jak ustawić poprawnie?</Link></li>
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/uslugi-wizytowka-google-business" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Usługi w wizytówce Google Business Profile</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Usługi
  ───────────────────────────────────────────────────────────────────────── */
  "uslugi-wizytowka-google-business": (
    <>
      <h2>Sekcja Usługi w GBP — niedoceniany element wizytówki</h2>
      <p>
        Większość firm wypełnia opis firmy i dodaje zdjęcia, ale ignoruje sekcję Usługi. To błąd — sekcja Usługi wyświetla się bezpośrednio w panelu wiedzy (Knowledge Panel) Twojej firmy, zanim użytkownik odwiedzi stronę internetową. Dla niektórych branż może to być pierwsza i jedyna interakcja klienta z ofertą.
      </p>
      <p>
        Co ważne: tekst wpisany w opisach usług jest indeksowany przez Google i może wpływać na widoczność na frazy long-tail. To bezpłatna przestrzeń na treść SEO, bezpośrednio w profilu firmy.
      </p>

      <h2>Jak dodać usługi do wizytówki Google?</h2>
      <p>
        W panelu GBP przejdź do <strong>Informacje → Usługi</strong>. Możesz:
      </p>
      <ul>
        <li>Skorzystać z sugerowanych usług dla Twojej kategorii (Google proponuje popularne usługi w Twojej branży)</li>
        <li>Dodać własne usługi — kliknij „Dodaj niestandardowe usługi"</li>
        <li>Pogrupować usługi w sekcje (np. „Zabiegi pielęgnacyjne", „Manicure", „Stylizacja brwi")</li>
      </ul>
      <p>
        Dla każdej usługi możesz uzupełnić:
      </p>
      <ul>
        <li><strong>Nazwa usługi</strong> — zwięzła, jak klient by jej szukał</li>
        <li><strong>Cena</strong> — opcjonalnie: dokładna, od–do, lub „Cena ustalana indywidualnie"</li>
        <li><strong>Opis</strong> — maksymalnie 300 znaków, opisz co zawiera usługa i kto z niej skorzysta</li>
      </ul>

      <h2>Jak pisać opisy usług żeby przyciągały klientów?</h2>
      <p>
        300 znaków to mało, ale wystarczy żeby odpowiedzieć na najważniejsze pytania klienta. Schemat który działa:
      </p>
      <ul>
        <li><strong>Co obejmuje</strong> — np. „Kompleksowe czyszczenie zębów: skaling, piaskowanie, polerowanie i fluoryzacja"</li>
        <li><strong>Dla kogo</strong> — np. „Dla osób z wrażliwym uzębieniem i pierwszorazowych pacjentów"</li>
        <li><strong>Wynik/korzyść</strong> — np. „Po zabiegu zęby są o 1–2 tony jaśniejsze i chronione przed kamieniem przez 6 miesięcy"</li>
      </ul>
      <p>
        Unikaj ogólnych opisów typu „Profesjonalna obsługa w świetnych cenach" — nic nie mówią klientowi i nie pomagają w SEO.
      </p>

      <h2>Usługi vs Produkty — kiedy używać czego?</h2>
      <p>
        GBP ma zarówno sekcję Usługi jak i Produkty. Różnica jest prosta: Usługi to działania, które wykonujesz (strzyżenie, naprawa, konsultacja). Produkty to rzeczy fizyczne lub cyfrowe, które sprzedajesz.
      </p>
      <p>
        Gabinet stomatologiczny powinien używać Usług. Sklep z kosmetykami — Produktów. Salon fryzjerski — obu: Usług (strzyżenie, koloryzacja) i Produktów (szampony, odżywki, które sprzedaje przy kasie).
      </p>
      <p>
        Więcej o katalogu produktów znajdziesz w artykule{" "}
        <Link href="/produkty-wizytowka-google-business">Produkty w wizytówce Google Business Profile</Link>.
        Pamiętaj też o{" "}
        <Link href="/opis-firmy-google-business-profile-jak-napisac">opisie firmy</Link> — sekcja Usługi go nie zastępuje, oba elementy pełnią różne funkcje.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/produkty-wizytowka-google-business" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Produkty w wizytówce Google Business Profile</Link></li>
          <li><Link href="/opis-firmy-google-business-profile-jak-napisac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opis firmy w Google Business Profile – jak napisać go skutecznie?</Link></li>
          <li><Link href="/posty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Google Posts – jak tworzyć posty w wizytówce?</Link></li>
          <li><Link href="/atrybuty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Atrybuty wizytówki Google – czym są i jak je wypełnić?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Posty Google
  ───────────────────────────────────────────────────────────────────────── */
  "posty-wizytowka-google": (
    <>
      <h2>Czym są Google Posts i dlaczego większość firm je ignoruje?</h2>
      <p>
        Google Posts to funkcja GBP pozwalająca publikować krótkie posty — aktualności, oferty, wydarzenia, produkty — które wyświetlają się bezpośrednio w Twoim panelu wiedzy w wyszukiwarce i Google Maps. Użytkownik widzi je jeszcze przed wejściem na stronę internetową.
      </p>
      <p>
        Większość firm nie korzysta z tej funkcji albo publikuje sporadycznie, bo efekty są trudne do zmierzenia. Tymczasem regularne posty mają mierzalny wpływ na CTR wizytówki — im więcej aktywności w profilu, tym częściej Google uznaje go za wartościowy i aktywny.
      </p>

      <h2>Rodzaje postów w GBP</h2>
      <ul>
        <li><strong>Aktualności</strong> — ogólne informacje o firmie, nowości, zmiany. Widoczne przez 7 dni, potem automatycznie archiwizowane (ale dostępne w profilu).</li>
        <li><strong>Oferty</strong> — promocje i zniżki z datą ważności. Wyświetlają się z wyróżnionym przyciskiem i tagiem „Oferta". Najskuteczniejszy typ pod kątem konwersji.</li>
        <li><strong>Wydarzenia</strong> — nadchodzące wydarzenia z datą i godziną. Mogą pojawić się w Google Events.</li>
        <li><strong>Produkty</strong> — prezentacja konkretnego produktu ze zdjęciem, nazwą i ceną. Połączone z sekcją Produkty w GBP.</li>
      </ul>

      <h2>Jak pisać posty, które przynoszą klientów?</h2>
      <p>
        Limit znaków na post to 1500 — ale Google wyświetla w podglądzie pierwsze 100–150 znaków. Kluczowy komunikat musi być na początku.
      </p>
      <ul>
        <li><strong>Zacznij od korzyści lub oferty</strong> — np. „-20% na wszystkie zabiegi twarzowe przez cały czerwiec" działa lepiej niż „Z okazji lata przygotowaliśmy dla Was..."</li>
        <li><strong>Dodaj CTA (Call to Action)</strong> — każdy post może mieć przycisk: Zadzwoń, Zarezerwuj, Zamów online, Kup, Dowiedz się więcej. Zawsze go dodawaj.</li>
        <li><strong>Dodaj zdjęcie</strong> — posty ze zdjęciem mają wyższy CTR. Optymalne wymiary: 1200×900px (format 4:3). Unikaj stockowych zdjęć — oryginalne fotografie Twojej firmy są bardziej wiarygodne.</li>
        <li><strong>Lokalne słowa kluczowe</strong> — wspominaj miasto lub dzielnicę jeśli to naturalne. Pomaga przy widoczności na frazy lokalne.</li>
      </ul>

      <h2>Jak często publikować?</h2>
      <p>
        Minimum 1 post tygodniowo — taka częstotliwość jest wystarczająca żeby algorytm Google uznał profil za aktywny. Jeśli masz zasoby — 2–3 posty tygodniowo to optimum.
      </p>
      <p>
        Posty Aktualności wygasają po 7 dniach, więc przy rzadszej publikacji wizytówka przez część czasu nie ma żadnego aktywnego posta. Posty Oferty i Wydarzenie wygasają po dacie zakończenia.
      </p>

      <h2>Google Posts a inne elementy wizytówki</h2>
      <p>
        Posty świetnie współpracują z innymi elementami GBP. Ofertę możesz powiązać z{" "}
        <Link href="/uslugi-wizytowka-google-business">konkretną usługą z sekcji Usługi</Link>.
        Aktualności możesz pisać odpowiadając na{" "}
        <Link href="/pytania-odpowiedzi-wizytowka-google">najczęstsze pytania z sekcji Q&A</Link>.
        Zdjęcia w postach wzmacniają efekt{" "}
        <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">profesjonalnych zdjęć w wizytówce</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/uslugi-wizytowka-google-business" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Usługi w wizytówce Google Business Profile</Link></li>
          <li><Link href="/pytania-odpowiedzi-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Q&A w wizytówce Google – jak zarządzać pytaniami?</Link></li>
          <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zdjęcia w wizytówce Google – które wpływają na pozycję?</Link></li>
          <li><Link href="/opinie-google-jak-zdobywac-skutecznie" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opinie w Google – jak zbierać bez nachalnego proszenia?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Q&A
  ───────────────────────────────────────────────────────────────────────── */
  "pytania-odpowiedzi-wizytowka-google": (
    <>
      <h2>Czym jest sekcja Q&A w wizytówce Google i dlaczego jest ryzykowna?</h2>
      <p>
        Sekcja Pytania i odpowiedzi (Q&A) w GBP to publiczne forum pod wizytówką Twojej firmy — każdy zalogowany użytkownik Google może zadać pytanie i każdy może udzielić odpowiedzi. W tym Twoja konkurencja, niezadowoleni klienci, a nawet boty spamujące.
      </p>
      <p>
        Google nie powiadamia właścicieli wizytówek o nowych pytaniach domyślnie (chyba że masz włączone powiadomienia w GBP). W efekcie wiele firm ma w Q&A pytania bez odpowiedzi od miesięcy — lub co gorsza, odpowiedzi udzielone przez nieznanych użytkowników z błędnymi informacjami.
      </p>

      <h2>Jak włączyć powiadomienia o nowych pytaniach?</h2>
      <p>
        W aplikacji Google Maps na telefonie: otwórz swoją wizytówkę → zakładka Aktualizacje → upewnij się że powiadomienia push są włączone. W panelu GBP na komputerze: Ustawienia → Powiadomienia → zaznacz „Pytania i odpowiedzi".
      </p>
      <p>
        Alternatywnie: zainstaluj aplikację <strong>Google Business Profile</strong> na smartfonie — automatycznie wysyła powiadomienia o nowych pytaniach i umożliwia szybką odpowiedź bezpośrednio z telefonu.
      </p>

      <h2>Jak odpowiadać na pytania w Q&A?</h2>
      <p>
        Odpowiedź właściciela wizytówki jest wyróżniona i oznaczona jako „Odpowiedź właściciela" — ma wyższy autorytet niż odpowiedzi innych użytkowników. Kilka zasad:
      </p>
      <ul>
        <li><strong>Odpowiadaj szybko</strong> — klient który czeka na odpowiedź tydzień, prawdopodobnie już wybrał konkurencję</li>
        <li><strong>Odpowiadaj wyczerpująco</strong> — jeśli pytanie brzmi „Czy przyjmujecie dzieci?", odpowiedz: „Tak, przyjmujemy dzieci od 3 roku życia. Mamy specjalne fotele i zestaw zabawek w poczekalni."</li>
        <li><strong>Używaj słów kluczowych naturalnie</strong> — odpowiedzi są indeksowane przez Google. Wzmianka o lokalizacji i usłudze pomaga widoczności.</li>
        <li><strong>Nie bądź defensywny</strong> — nawet jeśli pytanie jest złośliwe lub oparte na błędnej informacji, odpowiadaj spokojnie i rzeczowo</li>
      </ul>

      <h2>Strategia: zadawaj pytania samodzielnie</h2>
      <p>
        Możesz sam — przez inne konto Google (nie właściciela) — zadawać pytania, które Twoi klienci często pytają telefonicznie. Następnie odpowiadasz na nie jako właściciel. To legalna i skuteczna metoda budowania sekcji Q&A z przydatnymi informacjami.
      </p>
      <p>
        Pytania które warto zadać sobie samemu: cennik, godziny otwarcia (choć to dubluje inne informacje), parking, czas oczekiwania, sposoby płatności, polityka anulowania rezerwacji.
      </p>

      <h2>Jak usunąć fałszywe lub szkodliwe pytania?</h2>
      <p>
        Jeśli w Q&A pojawi się pytanie zawierające fałszywe informacje, spam lub treści reklamowe — możesz je zgłosić do Google przez przycisk „Zgłoś". Google moderuje Q&A, ale proces trwa kilka dni. W tym czasie warto udzielić odpowiedzi prostującej fakty — żeby inne osoby widziały prawdę.
      </p>
      <p>
        Sekcja Q&A działa podobnie do{" "}
        <Link href="/negatywna-opinia-google-co-zrobic">obsługi negatywnych opinii</Link> — w obu przypadkach publiczna, spokojna odpowiedź właściciela robi lepsze wrażenie niż brak reakcji. Zarządzanie Q&A jest też częścią aktywności w GBP, która wpływa na sygnały{" "}
        <Link href="/czynniki-rankingowe-wizytowki-google-2026">rankingowe wizytówki</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/posty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Google Posts – jak tworzyć posty w wizytówce?</Link></li>
          <li><Link href="/negatywna-opinia-google-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Dostałem negatywną opinię na wizytówce – co teraz?</Link></li>
          <li><Link href="/opinie-google-jak-zdobywac-skutecznie" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opinie w Google – jak zbierać bez nachalnego proszenia?</Link></li>
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Produkty
  ───────────────────────────────────────────────────────────────────────── */
  "produkty-wizytowka-google-business": (
    <>
      <h2>Czym jest katalog produktów w GBP i kto powinien go używać?</h2>
      <p>
        Sekcja Produkty w Google Business Profile to wbudowany mini-sklep w wizytówce — pozwala wylistować produkty ze zdjęciami, opisami, cenami i przyciskiem CTA. Wyświetla się w zakładce „Produkty" bezpośrednio w profilu firmy w Google Maps i wyszukiwarce.
      </p>
      <p>
        Produkty w GBP są idealne dla:
      </p>
      <ul>
        <li>Sklepów detalicznych (odzież, elektronika, artykuły sportowe)</li>
        <li>Salonów urody sprzedających produkty pielęgnacyjne</li>
        <li>Restauracji z menu do wglądu</li>
        <li>Firm B2B prezentujących swoje rozwiązania produktowe</li>
        <li>Sklepów online z odbiorem lokalnym</li>
      </ul>
      <p>
        Firmy usługowe bez fizycznych produktów powinny korzystać z{" "}
        <Link href="/uslugi-wizytowka-google-business">sekcji Usługi</Link>, a nie Produkty.
      </p>

      <h2>Jak dodać produkty do wizytówki Google?</h2>
      <p>
        W panelu GBP przejdź do <strong>Produkty → Dodaj produkt</strong>. Dla każdego produktu możesz uzupełnić:
      </p>
      <ul>
        <li><strong>Zdjęcie produktu</strong> — minimum 1, maksymalnie kilka. Kwadratowe lub poziome, minimum 250×250px. Zdjęcia własne konwertują lepiej niż stockowe.</li>
        <li><strong>Nazwa produktu</strong> — taka jak klient szukałby w Google</li>
        <li><strong>Kategoria</strong> — grupuje produkty w zakładce (tworzysz własne kategorie)</li>
        <li><strong>Cena</strong> — dokładna lub zakres (od–do)</li>
        <li><strong>Opis</strong> — do 1000 znaków, opisz produkt jak na karcie produktu w sklepie</li>
        <li><strong>Przycisk CTA</strong> — „Zamów online", „Kup", „Dowiedz się więcej" z linkiem do strony produktu</li>
      </ul>

      <h2>Jak organizować produkty w kategorie?</h2>
      <p>
        Google pozwala grupować produkty w niestandardowe kategorie — tworzysz je sam podczas dodawania produktu. Zasady dobrego podziału:
      </p>
      <ul>
        <li>Maksymalnie 5–8 kategorii — więcej jest nieczytelne</li>
        <li>Nazwy kategorii jak w sklepie stacjonarnym (np. „Kawa i herbata", „Akcesoria kuchenne")</li>
        <li>Każda kategoria powinna mieć minimum 3 produkty, żeby sekcja wyglądała pełnie</li>
        <li>Produkty bestsellerowe i sezonowe umieszczaj w pierwszej kategorii — wyświetla się domyślnie</li>
      </ul>

      <h2>Produkty w GBP a Google Shopping</h2>
      <p>
        Katalog produktów w GBP to nie Google Shopping — nie pojawia się w zakładce Zakupy ani w reklamach. To wyłącznie prezentacja w obrębie wizytówki firmy. Jeśli prowadzisz sklep internetowy, warto mieć oba: produkty w GBP dla klientów lokalnych i Google Shopping dla klientów online.
      </p>
      <p>
        Zarządzanie produktami warto połączyć z regularnymi{" "}
        <Link href="/posty-wizytowka-google">Google Posts o nowościach i promocjach</Link>.
        Nowy produkt w katalogu + post o jego premierze to podwójny sygnał aktywności dla algorytmu Google.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/uslugi-wizytowka-google-business" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Usługi w wizytówce Google Business Profile</Link></li>
          <li><Link href="/posty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Google Posts – jak tworzyć posty w wizytówce?</Link></li>
          <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zdjęcia w wizytówce Google – które wpływają na pozycję?</Link></li>
          <li><Link href="/opis-firmy-google-business-profile-jak-napisac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opis firmy w Google Business Profile – jak napisać skutecznie?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Weryfikacja
  ───────────────────────────────────────────────────────────────────────── */
  "weryfikacja-wizytowki-google": (
    <>
      <h2>Dlaczego weryfikacja jest obowiązkowa i co się stanie bez niej?</h2>
      <p>
        Niezweryfikowana wizytówka Google nie wyświetla się w Google Maps ani w wynikach lokalnych. Możesz ją stworzyć, uzupełnić i ozdobić zdjęciami — ale dopóki Google nie potwierdzi, że firma rzeczywiście istnieje pod podanym adresem, profil pozostaje niewidoczny dla klientów.
      </p>
      <p>
        Weryfikacja chroni też przed przejęciem wizytówki przez osoby trzecie — bez weryfikacji każdy mógłby się podać za właściciela.
      </p>

      <h2>Metoda 1 – Pocztówka (najczęstsza)</h2>
      <p>
        Google wysyła pocztówkę z 5-cyfrowym kodem na adres fizyczny firmy. Czas dostawy: zazwyczaj 5–14 dni roboczych w Polsce. Kod ważny jest przez 30 dni.
      </p>
      <p>
        <strong>Jak wpisać kod:</strong> zaloguj się do GBP → kliknij „Zweryfikuj teraz" → wpisz 5-cyfrowy kod z pocztówki. Jeśli kod wygasł lub pocztówka nie dotarła, możesz zamówić nową (maksymalnie 3 razy).
      </p>
      <p>
        <strong>Ważne:</strong> nie zmieniaj adresu firmy po wysłaniu pocztówki — kod jest przypisany do konkretnego adresu i jeśli go zmienisz, pocztówka trafi na stary adres.
      </p>

      <h2>Metoda 2 – Telefon lub SMS</h2>
      <p>
        Google wysyła kod jednorazowy SMS-em lub rozmową głosową na numer telefonu podany w wizytówce. Metoda dostępna tylko dla firm z numerem telefonicznym weryfikowalnym przez Google — nie jest dostępna dla wszystkich typów firm.
      </p>
      <p>
        Jeśli opcja pojawia się w panelu — wybierz ją jako pierwszą. Weryfikacja trwa minuty zamiast tygodni.
      </p>

      <h2>Metoda 3 – E-mail</h2>
      <p>
        Google wysyła link weryfikacyjny na adres e-mail w domenie firmy (np. kontakt@twojafirma.pl). Weryfikacja przez e-mail jest dostępna rzadko i tylko gdy Google uzna, że adres e-mail jest zaufany.
      </p>

      <h2>Metoda 4 – Wideo (coraz częstsza)</h2>
      <p>
        Od 2023 roku Google coraz częściej wymaga weryfikacji przez nagranie wideo. Musisz nagrać film pokazujący:
      </p>
      <ul>
        <li>Okolicę firmy (ulica, budynek, szyld)</li>
        <li>Wnętrze firmy z oznakowaniem lub wyposażeniem typowym dla branży</li>
        <li>Dowód że masz do firmy dostęp (klucze, otwierasz drzwi)</li>
      </ul>
      <p>
        Nagranie trwa 2–5 minut i jest przeglądane przez pracownika Google (lub AI). Weryfikacja może trwać od kilku godzin do kilku dni. Film nie jest publicznie udostępniany.
      </p>

      <h2>Metoda 5 – Natychmiastowa (Instant Verification)</h2>
      <p>
        Jeśli Twoja strona internetowa jest zweryfikowana w Google Search Console i konto GBP jest powiązane z tym samym adresem e-mail — możesz otrzymać weryfikację natychmiastową bez żadnych kodów. To najszybsza metoda, ale dostępna tylko przy spełnieniu powyższych warunków.
      </p>

      <h2>Co po weryfikacji?</h2>
      <p>
        Po weryfikacji wizytówka staje się widoczna w wynikach lokalnych. Teraz czas na optymalizację: uzupełnij{" "}
        <Link href="/sekcja-informacje-wizytowka-google">wszystkie pola sekcji Informacje</Link>,
        dodaj{" "}
        <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">profesjonalne zdjęcia</Link>,
        skonfiguruj{" "}
        <Link href="/kategorie-wizytowka-google">właściwe kategorie</Link> i zacznij zbierać opinie.
        Jeśli kiedyś stracisz dostęp do wizytówki, sprawdź{" "}
        <Link href="/jak-odzyskac-dostep-do-wizytowki-google">jak odzyskać dostęp do wizytówki Google</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie w wizytówce Google – jak wybrać właściwe?</Link></li>
          <li><Link href="/jak-odzyskac-dostep-do-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak odzyskać dostęp do wizytówki Google?</Link></li>
          <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zdjęcia w wizytówce Google – które wpływają na pozycję?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Sekcja Informacje
  ───────────────────────────────────────────────────────────────────────── */
  "sekcja-informacje-wizytowka-google": (
    <>
      <h2>Dlaczego warto wypełnić każde pole w sekcji Informacje?</h2>
      <p>
        Sekcja Informacje w GBP to centrum zarządzania wszystkimi danymi o firmie. Każde wypełnione pole to dodatkowy sygnał dla algorytmu Google i dodatkowa informacja dla potencjalnego klienta. Profil kompletny w 100% ma statystycznie wyższy ranking niż profil wypełniony w 50% — nawet przy tej samej liczbie opinii.
      </p>

      <h2>Nazwa firmy — zasady których nie można łamać</h2>
      <p>
        Nazwa w GBP musi być identyczna z nazwą używaną w szyldzie, na stronie internetowej i w innych miejscach online. Nie wolno dodawać do nazwy słów kluczowych, lokalizacji ani opisów usług — np. „Salon Kosmetyczny Kraków Anna Nowak" jest naruszeniem regulaminu Google, jeśli oficjalna nazwa firmy to „Salon Kosmetyczny Anna Nowak".
      </p>
      <p>
        Dodawanie słów kluczowych do nazwy to taktyka stosowana przez wielu właścicieli firm, ale Google aktywnie to zwalcza. Zgłoszenie przez konkurencję może skutkować tymczasowym zawieszeniem wizytówki i koniecznością weryfikacji.
      </p>

      <h2>Adres — NAP i spójność w internecie</h2>
      <p>
        Adres w GBP musi być zgodny z adresem na stronie internetowej, w KRS/CEIDG i we wszystkich katalogach firm. Niespójność NAP (Name, Address, Phone) to jeden z najczęstszych powodów słabego rankingu lokalnego. Szczegółowo opisujemy to w artykule{" "}
        <Link href="/nap-wizytowka-google-co-to-jest">czym jest NAP i jak go skonfigurować</Link>.
      </p>

      <h2>Numer telefonu — który wpisać?</h2>
      <p>
        Wpisuj numer, pod którym faktycznie odbierasz telefony od klientów. Jeśli masz kilka numerów, jako główny ustaw ten najważniejszy — wyświetla się go na wizytówce z przyciskiem „Zadzwoń". Możesz dodać numer dodatkowy w polu „Telefon dodatkowy".
      </p>
      <p>
        Numery 0-800 i 0-801 są dozwolone, ale numery zagraniczne jako jedyne dla polskiej firmy mogą budzić wątpliwości algorytmu. Numer stacjonarny z numerem kierunkowym miasta (np. 12 dla Krakowa) wzmacnia sygnał lokalny.
      </p>

      <h2>Strona internetowa — co wpisać jeśli masz kilka podstron?</h2>
      <p>
        Wpisz adres strony głównej lub strony landing page dedykowanej lokalizacji — nie podstrony konkretnej usługi. Jeśli masz wiele lokalizacji, każda wizytówka powinna linkować do podstrony dedykowanej tej lokalizacji (np. /warszawa, /krakow) — nie do strony głównej.
      </p>

      <h2>Opis firmy — 750 znaków które muszą pracować podwójnie</h2>
      <p>
        Opis w sekcji Informacje to nie to samo co sekcja Usługi. Opis powinien opisywać firmę jako całość — jej misję, unikalną wartość, historię i podejście do klienta. Unikaj list usług — od tego jest sekcja Usługi. Szczegółowo o pisaniu opisu piszemy w artykule{" "}
        <Link href="/opis-firmy-google-business-profile-jak-napisac">jak napisać opis firmy w GBP</Link>.
      </p>

      <h2>Pozostałe ważne pola</h2>
      <ul>
        <li><strong>Rok założenia</strong> — starsze firmy budzą więcej zaufania. Wypełnij jeśli firma istnieje od kilku lat.</li>
        <li><strong>Link do rezerwacji online</strong> — jeśli korzystasz z systemu rezerwacji (Booksy, Calendly, własny system), wpisz bezpośredni link. Pojawia się jako przycisk „Zarezerwuj" w wizytówce.</li>
        <li><strong>Produkty i usługi</strong> — powiązane z osobnymi sekcjami omówionymi w artykułach{" "}<Link href="/uslugi-wizytowka-google-business">o usługach</Link> i{" "}<Link href="/produkty-wizytowka-google-business">produktach</Link>.</li>
        <li><strong>Kategorie</strong> — omówione szczegółowo w artykule{" "}<Link href="/kategorie-wizytowka-google">o kategoriach GBP</Link>.</li>
        <li><strong>Atrybuty</strong> — omówione w artykule{" "}<Link href="/atrybuty-wizytowka-google">o atrybutach wizytówki</Link>.</li>
      </ul>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/nap-wizytowka-google-co-to-jest" className="text-sm font-semibold text-ink hover:text-brand transition-colors">NAP w wizytówce Google – czym jest i jak skonfigurować?</Link></li>
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie w wizytówce Google – jak wybrać właściwe?</Link></li>
          <li><Link href="/atrybuty-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Atrybuty wizytówki Google – czym są i jak je wypełnić?</Link></li>
          <li><Link href="/opis-firmy-google-business-profile-jak-napisac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opis firmy w Google Business Profile – jak napisać skutecznie?</Link></li>
          <li><Link href="/godziny-otwarcia-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Godziny otwarcia w wizytówce Google – jak ustawić poprawnie?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WIZYTÓWKA: Wiele lokalizacji
  ───────────────────────────────────────────────────────────────────────── */
  "wiele-lokalizacji-google-business-profile": (
    <>
      <h2>Jeden profil czy wiele wizytówek — kiedy zakładać osobne?</h2>
      <p>
        Zasada jest prosta: każda fizyczna lokalizacja, pod którą klienci mogą przyjść lub zadzwonić, powinna mieć <strong>osobną wizytówkę GBP</strong>. Restauracja z 3 lokalami = 3 wizytówki. Kancelaria z biurami w Warszawie i Krakowie = 2 wizytówki.
      </p>
      <p>
        Jedna wizytówka z kilkoma adresami nie istnieje w GBP — Google nie dopuszcza takiej formy. Próba wpisania kilku adresów w jednym profilu może skutkować zawieszeniem wizytówki.
      </p>

      <h2>Jak zorganizować konto dla wielu lokalizacji?</h2>
      <p>
        Google Business Profile oferuje <strong>Business Profile Manager</strong> — panel do zarządzania wieloma wizytówkami z jednego konta. Aby go aktywować, musisz mieć minimum 10 lokalizacji przypisanych do jednego konta (dla mniejszej liczby wystarczy zwykły panel GBP).
      </p>
      <p>
        Dla firm z 10+ lokalizacjami dostępna jest też <strong>weryfikacja zbiorcza (bulk verification)</strong> — zamiast weryfikować każdą wizytówkę osobno, Google weryfikuje cały łańcuch lokalizacji jednocześnie po przesłaniu pliku Excel z danymi. Wymaga spełnienia warunków: wszystkie lokalizacje muszą należeć do tej samej firmy i branży.
      </p>

      <h2>Spójność NAP między lokalizacjami — najczęstszy błąd</h2>
      <p>
        Każda wizytówka musi mieć unikalny adres i numer telefonu dla danej lokalizacji. Błąd, który popełnia wiele firm: używanie tego samego numeru telefonu (centrali) dla wszystkich lokalizacji. Google traktuje to jako sygnał że to jedna firma w wielu miejscach — może obniżyć widoczność wszystkich wizytówek.
      </p>
      <p>
        Każda lokalizacja powinna mieć:
      </p>
      <ul>
        <li>Unikalny adres fizyczny</li>
        <li>Własny numer telefonu (lub przynajmniej numer z przekierowaniem lokalnym)</li>
        <li>Własną podstronę na stronie internetowej (np. /lokalizacje/warszawa)</li>
        <li>Własne godziny otwarcia — mogą się różnić między lokalizacjami</li>
      </ul>

      <h2>Nazwy wizytówek dla wielu lokalizacji</h2>
      <p>
        Gdy firma ma wiele lokalizacji, dopuszcza się dodanie nazwy lokalizacji do nazwy firmy — ale tylko jeśli firma faktycznie tak się nazywa lub wyróżnia lokalizacje w oficjalnych materiałach. Np. „Restauracja Złota Kaczka – Mokotów" jest akceptowalne, jeśli firma używa takiego oznaczenia.
      </p>
      <p>
        Nie dodawaj nazwy miasta wyłącznie dla SEO (np. „Salon Piękności Kraków") jeśli oficjalna nazwa nie zawiera nazwy miasta.
      </p>

      <h2>Monitorowanie wielu wizytówek</h2>
      <p>
        Im więcej wizytówek, tym większa szansa że jedna z nich zostanie zmodyfikowana przez użytkowników, dostanie negatywną opinię bez Twojej wiedzy lub zostanie zduplikowana przez Google. Ustaw powiadomienia dla każdej wizytówki i regularnie sprawdzaj panel Business Profile Manager.
      </p>
      <p>
        Przed założeniem wielu wizytówek upewnij się, że{" "}
        <Link href="/weryfikacja-wizytowki-google">wiesz jak przebiega weryfikacja</Link> — dla wielu lokalizacji to wąskie gardło, które często opóźnia uruchomienie.
        Każda wizytówka powinna też mieć wypełnioną{" "}
        <Link href="/sekcja-informacje-wizytowka-google">sekcję Informacje</Link> z danymi właściwymi dla danej lokalizacji, nie skopiowanymi z innej wizytówki.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/weryfikacja-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Weryfikacja wizytówki Google – wszystkie metody krok po kroku</Link></li>
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/nap-wizytowka-google-co-to-jest" className="text-sm font-semibold text-ink hover:text-brand transition-colors">NAP w wizytówce Google – czym jest i jak skonfigurować?</Link></li>
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie w wizytówce Google – jak wybrać właściwe?</Link></li>
          <li><Link href="/siedziba-mala-miejscowosc-local-seo" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Siedziba w małej miejscowości – jak zdobyć klientów z dużego miasta?</Link></li>
        </ul>
      </div>
    </>
  ),


  /* ─────────────────────────────────────────────────────────────────────────
     Jak dobierać słowa kluczowe do pozycjonowania
  ───────────────────────────────────────────────────────────────────────── */
  "jak-dobierac-slowa-kluczowe-do-pozycjonowania": (
    <>
      <h2>Dlaczego dobór słów kluczowych to najważniejszy krok w SEO</h2>
      <p>
        Możesz mieć technicznie perfekcyjną stronę, szybką jak błyskawica i zoptymalizowaną pod
        każdy czynnik rankingowy — i nadal nie przyciągać klientów. Przyczyna jest zwykle jedna:
        pozycjonujesz się na <strong>złe słowa kluczowe</strong>. Frazy, które nikt nie wpisuje.
        Albo które wpisują ludzie szukający czegoś zupełnie innego niż to, co sprzedajesz.
      </p>
      <p>
        Badanie słów kluczowych (keyword research) to etap, który poprzedza każde inne działanie
        SEO. Mówi Ci: <em>na co jest popyt w wyszukiwarce, jaką intencję mają użytkownicy i czy
        w ogóle masz szansę przebić się w tym miejscu</em>. Bez tego informacje zwrotne z
        całej reszty strategii SEO są bezużyteczne.
      </p>

      <h2>Rodzaje słów kluczowych — zanim zaczniesz szukać</h2>
      <p>
        Słowa kluczowe nie są jednorodne. Różnią się długością, konkurencyjnością, wolumenem
        i — najważniejsze — intencją stojącą za wyszukaniem. Zrozumienie tego podziału jest
        warunkiem koniecznym dobrej analizy.
      </p>

      <h3>Head keywords (frazy ogólne)</h3>
      <p>
        Pojedyncze słowa lub bardzo krótkie frazy, np. <em>„fryzjer"</em>, <em>„adwokat"</em>,
        <em>„okna"</em>. Charakteryzują się ogromnym wolumenem wyszukań i skrajnie wysoką
        konkurencją. Dla małej i średniej firmy są praktycznie nieosiągalne bez wieloletnich
        inwestycji w SEO. Co ważniejsze — konwersja z takich fraz jest niska, bo intencja
        jest niejasna. Ktoś wpisujący „fryzjer" może szukać pracy, zdjęć, historii zawodu
        albo dopiero rozważać wizytę.
      </p>

      <h3>Middle-tail (frazy pośrednie)</h3>
      <p>
        Dwa–trzy słowa, np. <em>„fryzjer damski Kraków"</em>, <em>„adwokat rozwodowy Poznań"</em>.
        Niższy wolumen niż head keywords, ale znacznie wyższa trafność i niższa konkurencja.
        To główne pole walki dla większości firm lokalnych i branżowych. Dobra konwersja,
        realne szanse na pozycjonowanie przy odpowiedniej pracy.
      </p>

      <h3>Long-tail (frazy długiego ogona)</h3>
      <p>
        Trzy słowa i więcej, np. <em>„fryzjer damski centrum Kraków koloryzacja włosów"</em>,
        <em>„ile kosztuje adwokat przy rozwodzie z orzeczeniem winy Warszawa"</em>.
        Bardzo niski wolumen (często 10–100 wyszukań miesięcznie), ale:
      </p>
      <ul>
        <li>Niska konkurencja — często możesz się pozycjonować bez budowania linków</li>
        <li>Bardzo wysoka konwersja — osoba wpisująca tak szczegółową frazę dokładnie wie, czego chce</li>
        <li>Łącznie odpowiadają za <strong>ponad 70% wszystkich wyszukań</strong> w Google</li>
      </ul>
      <p>
        Strategia oparta wyłącznie na long-tail jest szczególnie skuteczna dla nowych stron
        i firm lokalnych z ograniczonym budżetem SEO.
      </p>

      <h3>Frazy brandowe vs niebrandowe</h3>
      <p>
        Frazy brandowe zawierają nazwę firmy (np. „MiauSEO opinie"). Niebrandowe — nie.
        W keyword research skupiamy się przede wszystkim na niebrandowych, bo stamtąd
        pochodzi nowy ruch od osób, które jeszcze Cię nie znają.
      </p>

      <h3>Frazy lokalne</h3>
      <p>
        Frazy z nazwą miasta, dzielnicy lub regionu: <em>„hydraulik Wrocław"</em>,
        <em>„dentyst Mokotów"</em>. Kluczowe dla firm z fizyczną lokalizacją lub obsługujących
        określony obszar. Omówimy je szczegółowo w osobnej sekcji.
      </p>

      <h2>Intencja wyszukiwania — najważniejszy filtr przy doborze fraz</h2>
      <p>
        Intencja wyszukiwania (search intent) to powód, dla którego użytkownik wpisał daną
        frazę. Google bardzo dobrze ją rozumie i nagradza strony, które jej odpowiadają.
        Optymalizowanie strony usługowej pod frazę informacyjną to jeden z najczęstszych błędów
        w SEO — i prowadzi do pozycjonowania strony, która nigdy nie awansuje, bo nie spełnia
        oczekiwań algorytmu.
      </p>
      <p>
        Wyróżniamy cztery główne typy intencji:
      </p>

      <h3>Intencja informacyjna</h3>
      <p>
        Użytkownik szuka wiedzy. Frazy: <em>„jak usunąć negatywną opinię z Google"</em>,
        <em>„co to jest NAP w SEO"</em>, <em>„jak działa pozycjonowanie"</em>. Odpowiada
        na nie blog, poradnik, artykuł, FAQ. <strong>Nie</strong> strona produktu ani landing
        page usługowy. Konwersja bezpośrednia jest niska, ale treści informacyjne budują
        autorytet domeny i zaufanie do marki.
      </p>

      <h3>Intencja nawigacyjna</h3>
      <p>
        Użytkownik szuka konkretnej strony lub marki: <em>„Google Business Profile logowanie"</em>,
        <em>„Facebook Ads Manager"</em>. Takie frazy są zdominowane przez właściciela marki —
        nie ma sensu walczyć o nie, jeśli nie jesteś tą marką.
      </p>

      <h3>Intencja komercyjna (badawcza)</h3>
      <p>
        Użytkownik rozważa zakup, porównuje opcje: <em>„najlepsza agencja SEO Warszawa"</em>,
        <em>„Ahrefs vs Semrush"</em>, <em>„opinie o [nazwa firmy]"</em>. Odpowiadają na nie
        strony porównawcze, zestawienia, recenzje i case studies. Wysoka wartość komercyjna,
        umiarkowana konwersja.
      </p>

      <h3>Intencja transakcyjna</h3>
      <p>
        Użytkownik jest gotowy do działania: <em>„kup kurs SEO online"</em>,
        <em>„umów wizytę fryzjer Kraków"</em>, <em>„wycena strony internetowej"</em>.
        Odpowiadają na nie strony usług, sklepy, formularze kontaktowe. Najwyższa konwersja
        ze wszystkich typów intencji. To tu dzieje się sprzedaż.
      </p>

      <blockquote>
        Jak sprawdzić intencję? Wpisz frazę w Google i obserwuj, co rankuje na pierwszej
        stronie. Jeśli dominują artykuły blogowe — intencja jest informacyjna. Jeśli strony
        usług i landing pages — transakcyjna. Algorytm Google już to za Ciebie przeanalizował.
      </blockquote>

      <h2>Skąd brać pomysły na słowa kluczowe</h2>
      <p>
        Badanie słów kluczowych zaczyna się od burzy mózgów, nie od narzędzi. Narzędzia
        pomagają weryfikować i rozszerzać listę — ale najpierw musisz ją zasiać.
      </p>

      <h3>Myśl jak klient, nie jak właściciel</h3>
      <p>
        Największy błąd w badaniu słów kluczowych: używanie branżowego żargonu, którego klienci
        nie znają. Mechanik samochodowy myśli „diagnostyka OBD2", ale klient wpisuje „dlaczego
        pali się kontrolka silnika". Prawnik myśli „alimenty z art. 135 KRO", ale klient wpisuje
        „jak wymusić alimenty na ojcu". Zawsze pytaj siebie: <em>jak mój klient opisałby
        swój problem, nie rozwiązanie?</em>
      </p>

      <h3>Google Autocomplete i powiązane wyszukiwania</h3>
      <p>
        Wpisz bazową frazę w Google i obserwuj podpowiedzi autocomplete — to rzeczywiste frazy
        wpisywane przez użytkowników. Następnie przewiń na dół strony wyników — sekcja
        „Powiązane wyszukiwania" to kolejna kopalnia pomysłów. Obie te metody są w 100%
        bezpłatne i opierają się na prawdziwych danych Google.
      </p>
      <p>
        Trick: wpisz frazę ze spacją i literą alfabetu (np. „fryzjer Kraków a", „fryzjer
        Kraków b"...) — każda litera uruchamia inne podpowiedzi.
      </p>

      <h3>Sekcja „People Also Ask"</h3>
      <p>
        Box z pytaniami pojawiający się w wynikach Google (w Polsce: „Ludzie pytają też o")
        to gotowa lista tematów pod artykuły i FAQ. Każde pytanie to potencjalny nagłówek H2
        lub H3 w Twoim artykule. Klikanie pytań rozwija kolejne — możesz wygenerować dziesiątki
        powiązanych tematów w 5 minut.
      </p>

      <h3>Fora, grupy i social media</h3>
      <p>
        Grupy na Facebooku, Reddit (r/Poland i subreddity branżowe), Quora, branżowe fora
        i sekcje komentarzy pod artykułami branżowymi to miejsca, gdzie klienci piszą swoim
        językiem. Szukaj powtarzających się pytań i problemów — każde z nich to potencjalne
        słowo kluczowe.
      </p>

      <h3>Google Search Console — Twoje własne dane</h3>
      <p>
        Jeśli Twoja strona już istnieje i ma jakikolwiek ruch, Google Search Console jest
        najcenniejszym źródłem słów kluczowych. Zakładka <strong>Skuteczność → Zapytania</strong>
        pokazuje, na jakie frazy Twoja strona już się wyświetla — nawet jeśli nie jesteś na
        pierwszej stronie. To gotowe słowa kluczowe z potwierdzonym popytem, które możesz
        zoptymalizować i awansować.
      </p>

      <h3>Strony konkurencji</h3>
      <p>
        Otwórz strony 3–5 konkurentów, którzy rankują wyżej od Ciebie. Przejrzyj ich nagłówki
        H1/H2, tytuły stron, opisy meta i strukturę URL. To szybki sposób na zidentyfikowanie
        fraz, które już działają w Twojej branży. Płatne narzędzia (Ahrefs, Semrush) pozwalają
        zobaczyć pełną listę fraz organicznych dowolnej domeny.
      </p>

      <h2>Narzędzia do badania słów kluczowych</h2>

      <h3>Google Keyword Planner (bezpłatny)</h3>
      <p>
        Dostępny w koncie Google Ads. Pokazuje miesięczny wolumen wyszukań, konkurencję
        reklamową i sugestie powiązanych fraz. Wadą jest grupowanie wolumenu w przedziały
        (np. „100–1000") zamiast dokładnych liczb dla kont bez aktywnych kampanii. Mimo to
        to najlepsze bezpłatne narzędzie z prawdziwymi danymi Google.
      </p>

      <h3>Google Search Console (bezpłatny)</h3>
      <p>
        Jak wspomniano — niezastąpiony dla stron z istniejącym ruchem. Dane są dla Twojej
        domeny specyficzne i oparte na rzeczywistych wynikach. Szczególnie cenna jest metryka
        CTR — fraza z wysoką liczbą wyświetleń i niskim CTR to sygnał, że title lub meta
        description wymagają poprawy.
      </p>

      <h3>Ahrefs Keywords Explorer (płatny)</h3>
      <p>
        Branżowy standard dla zaawansowanego keyword research. Dokładny wolumen, Keyword
        Difficulty (KD), kliknięcia (nie każde wyszukanie kończy się kliknięciem), SERP
        analysis, keyword ideas i „Parent Topic" — kontekst tematyczny frazy. Najdroższy
        z popularnych narzędzi, ale najdokładniejszy.
      </p>

      <h3>Semrush (płatny)</h3>
      <p>
        Alternatywa dla Ahrefs z silniejszym naciskiem na analizę konkurencji i content
        marketing. Funkcja „Keyword Magic Tool" generuje tysiące wariantów frazy bazowej
        posegregowanych tematycznie. Dobra opcja jeśli dużo czasu poświęcasz analizie
        działań rywali.
      </p>

      <h3>Senuto (płatny, polskie dane)</h3>
      <p>
        Narzędzie stworzone z myślą o polskim rynku. Bardzo dobra baza danych dla fraz
        polskojęzycznych, monitorowanie pozycji, analiza widoczności konkurencji w Google.pl.
        Szczególnie przydatne dla agencji i firm skupionych wyłącznie na rynku polskim.
      </p>

      <h3>Ubersuggest (freemium)</h3>
      <p>
        Dobra opcja na start z ograniczonym budżetem. Wersja bezpłatna pozwala sprawdzić
        kilka fraz dziennie. Dane są mniej dokładne niż Ahrefs/Semrush, ale wystarczające
        dla małych firm lokalnych na etapie tworzenia pierwszej listy słów kluczowych.
      </p>

      <h3>AnswerThePublic (freemium)</h3>
      <p>
        Specjalizuje się w pytaniach — generuje setki pytań, przyimków i porównań
        wokół podanego słowa kluczowego. Bardzo przydatny do planowania treści blogowych
        i sekcji FAQ. Bezpłatna wersja pozwala na kilka wyszukań dziennie.
      </p>

      <h3>Google Trends (bezpłatny)</h3>
      <p>
        Niezastąpiony do analizy sezonowości. Sprawdź, czy popyt na Twoją frazę jest stały
        przez cały rok czy skokowy (np. „klimatyzacja" latem, „instalacja choinkowa" w grudniu).
        To wiedza kluczowa przy planowaniu kalendarza treści i budżetu SEO.
      </p>

      <h2>Metryki słów kluczowych — co analizować i jak interpretować</h2>

      <h3>Search Volume (miesięczny wolumen wyszukań)</h3>
      <p>
        Ile razy dana fraza jest wpisywana miesięcznie. Ważna wskazówka, ale nie jedyna.
        Fraza z wolumenem 50 i wysoką intencją transakcyjną może być cenniejsza niż fraza
        z 5000 wolumenem i intencją informacyjną. Nie gonij za wolumenem — gonij za trafnością.
      </p>
      <p>
        Dla lokalnych firm małe wolumeny (20–200 miesięcznie) są normą i nie oznaczają,
        że fraza jest bezwartościowa. Jeśli 30 osób miesięcznie wpisuje <em>„mechanik
        Żoliborz"</em> i połowa z nich dzwoni — to 15 potencjalnych klientów miesięcznie
        z jednej frazy.
      </p>

      <h3>Keyword Difficulty (KD)</h3>
      <p>
        Wskaźnik trudności rankowania (0–100), obliczany głównie na podstawie profilu
        linkowego stron rankujących na pierwszej stronie. KD 0–20 — łatwe do osiągnięcia
        nawet bez linków. KD 20–50 — wymaga solidnych treści i kilku linków zewnętrznych.
        KD 50–70 — potrzebujesz autorytetu domeny. KD 70+ — zazwyczaj poza zasięgiem
        nowej lub słabej domeny.
      </p>
      <p>
        KD jest przybliżeniem, nie wyrokiem. Sprawdź zawsze ręcznie SERPy dla danej frazy —
        zdarza się, że KD = 60, ale rankują słabe strony bez treści, które możesz pobić
        dobrym artykułem.
      </p>

      <h3>CPC (Cost Per Click)</h3>
      <p>
        Koszt kliknięcia w Google Ads. Wysoki CPC oznacza, że reklamodawcy są gotowi
        płacić dużo za ten ruch — bo konwertuje. Frazy z wysokim CPC mają zwykle wysoką
        wartość komercyjną i warto je priorytetyzować w SEO. Fraza darmowa organicznie,
        która kosztuje 20 zł/klik w Ads, to świetny cel.
      </p>

      <h3>Trendy i sezonowość</h3>
      <p>
        Sprawdź w Google Trends historię popularności frazy przez 5 lat. Pytania, które
        warto sobie zadać: Czy fraza rośnie, maleje czy jest stabilna? Czy ma sezonowe szczyty?
        Kiedy publikować treść, żeby zindeksowała się na szczyt popytu (zwykle potrzebujesz
        2–4 miesięcy wyprzedzenia)?
      </p>

      <h3>SERP Features</h3>
      <p>
        Czy dla danej frazy Google wyświetla Featured Snippet (podświetlona odpowiedź na górze),
        Local Pack (mapa z firmami), People Also Ask, wideo czy obrazy? Obecność Local Pack
        dla frazy lokalnej to sygnał, że warto zadbać o wizytówkę Google — a nie tylko stronę.
        Featured Snippet to szansa na pozycję „0" bez bycia pierwszym organicznie.
      </p>

      <h2>Analiza SERP — zanim zaatakujesz frazę</h2>
      <p>
        Każdą frazę, którą chcesz pozycjonować, wpisz w Google i zbadaj pierwszą stronę wyników.
        Sprawdź:
      </p>
      <ul>
        <li><strong>Typ treści, które rankują</strong> — artykuł, strona usługi, sklep, lista? Twoja strona musi pasować do tego wzorca.</li>
        <li><strong>Autorytety, które dominują</strong> — jeśli pierwsza strona to Wikipedia, Forbes i Onet, trudno będzie wejść bez bardzo silnej domeny. Jeśli rankują małe firmy lokalne — masz szansę.</li>
        <li><strong>Długość i jakość treści</strong> — jak rozbudowane są strony na pierwszej pozycji? To przybliżony standard, który musisz dorównać lub pobić.</li>
        <li><strong>Czy są słabe miejsca</strong> — strony z małą liczbą treści, bez obrazów, bez struktury? To luki, które możesz wypełnić lepszym contentem.</li>
      </ul>

      <h2>Słowa kluczowe lokalne — specyfika i strategie</h2>
      <p>
        Dla firm lokalnych badanie słów kluczowych ma swoją specyfikę. Większość fraz docelowych
        zawiera lokalizację — ale nie wszystkie.
      </p>

      <h3>Frazy z lokalizacją jawną</h3>
      <p>
        <em>„mechanik Bielsko-Biała"</em>, <em>„sklep zoologiczny Gdańsk Wrzeszcz"</em>.
        Oczywiste i warte pozycjonowania. Zazwyczaj niski wolumen, ale bardzo wysoka intencja
        lokalna. Twórz osobne podstrony dla każdej obsługiwanej lokalizacji, jeśli działasz
        w kilku miastach.
      </p>

      <h3>Frazy bez lokalizacji, ale z lokalną intencją</h3>
      <p>
        Gdy ktoś wpisuje <em>„dentysta"</em> lub <em>„hydraulik pilnie"</em> z telefonu,
        Google często rozpoznaje intencję lokalną i wyświetla Local Pack z firmami w pobliżu —
        bez podania miasta. W takim przypadku kluczowe jest pozycjonowanie wizytówki Google,
        a nie tylko strony www. Przeczytaj więcej w artykule o{" "}
        <Link href="/jak-pozycjonowac-wizytowke-google-2026">pozycjonowaniu wizytówki Google</Link>.
      </p>

      <h3>Frazy „near me"</h3>
      <p>
        W Polsce frazy typu <em>„fryzjer near me"</em> czy <em>„near me"</em> są rzadkością —
        użytkownicy częściej wpisują nazwę miasta. Warto jednak wiedzieć, że Google traktuje
        te frazy jako sygnał do wyświetlania wyników opartych na lokalizacji urządzenia.
        Nie musisz na nie optymalizować — robi to Local Pack automatycznie.
      </p>

      <h3>Podstrony lokalizacyjne (service area pages)</h3>
      <p>
        Jeśli Twoja firma obsługuje wiele lokalizacji bez fizycznej siedziby w każdej z nich
        (np. firma remontowa działająca w całym województwie), twórz dedykowane podstrony
        dla każdego miasta: <code>/hydraulik-wroclaw</code>, <code>/hydraulik-olesnica</code>.
        Każda powinna mieć unikalną treść — nie kopiuj tekstu zmieniając tylko nazwę miasta.
        Więcej o tej strategii w artykule o{" "}
        <Link href="/siedziba-mala-miejscowosc-local-seo">firmie z małej miejscowości szukającej klientów z miasta</Link>.
      </p>

      <h2>Grupowanie słów kluczowych (keyword clustering)</h2>
      <p>
        Po zbudowaniu listy kilkudziesięciu lub kilkuset fraz, następny krok to ich grupowanie.
        Każda podstrona powinna być zoptymalizowana pod <strong>grupę fraz o tej samej
        intencji</strong> — nie pod jedno słowo kluczowe.
      </p>
      <p>
        Przykład grupy dla strony usług fryzjerskich:
      </p>
      <ul>
        <li>fryzjer damski Kraków (fraza główna, 480/mies.)</li>
        <li>salon fryzjerski Kraków (600/mies.)</li>
        <li>strzyżenie damskie Kraków (210/mies.)</li>
        <li>fryzjer dla kobiet Kraków (90/mies.)</li>
        <li>salon fryzjerski centrum Kraków (70/mies.)</li>
      </ul>
      <p>
        Wszystkie mają tę samą intencję transakcyjną i powinny trafić na jedną, dobrze
        zoptymalizowaną stronę usługi. Tworzenie osobnych podstron dla każdej frazy
        to błąd — prowadzi do kanibalizacji słów kluczowych.
      </p>

      <h3>Keyword cannibalization</h3>
      <p>
        Kanibalizacja słów kluczowych to sytuacja, gdy kilka podstron na Twojej witrynie
        konkuruje o tę samą frazę. Google nie wie, którą promować, więc „rozkłada" potencjał
        między nie — żadna nie osiąga wysokiej pozycji. Rozwiązanie: zidentyfikuj strony
        z nakładającymi się frazami i albo je skonsoliduj (redirect 301), albo wyraźnie
        zróżnicuj intencją.
      </p>

      <h2>Mapowanie słów kluczowych do struktury strony</h2>
      <p>
        Każda strona w serwisie powinna mieć przypisaną jedną główną frazę kluczową
        (i grupę powiązanych). Standardowe mapowanie dla firmy lokalnej:
      </p>
      <ul>
        <li><strong>Strona główna</strong> — najbardziej ogólna fraza brandowo-lokalna, np. <em>„salon fryzjerski Kraków"</em></li>
        <li><strong>Podstrony usług</strong> — frazy transakcyjne dla każdej usługi: <em>„koloryzacja włosów Kraków"</em>, <em>„strzyżenie i modelowanie Kraków"</em></li>
        <li><strong>Strona kontakt/lokalizacja</strong> — frazy z adresem i dzielnicą: <em>„fryzjer Krowodrza"</em></li>
        <li><strong>Blog / artykuły</strong> — frazy informacyjne: <em>„jak dbać o farbowane włosy"</em>, <em>„jakie odżywki do włosów kręconych"</em></li>
        <li><strong>FAQ</strong> — pytania z People Also Ask: <em>„ile kosztuje koloryzacja włosów"</em></li>
      </ul>

      <h2>Najczęstsze błędy przy doborze słów kluczowych</h2>

      <h3>Błąd 1 — Celowanie w frazy niemożliwe na starcie</h3>
      <p>
        Nowa strona bez żadnych linków i autorytetu domeny nie ma szans na frazę z KD 70+
        w ciągu pierwszego roku. Zamiast tego: zacznij od long-tail z KD poniżej 30,
        zbuduj ruch i autorytet, a potem atakuj trudniejsze frazy.
      </p>

      <h3>Błąd 2 — Ignorowanie long-tail</h3>
      <p>
        Firmy skupiają się na kilku głównych frazach i ignorują setki możliwości long-tail.
        Tymczasem strona z 50 artykułami na long-tail często przebija domenę z 5 stronami
        na middle-tail — łącznie generując więcej ruchu i lepszej jakości leady.
      </p>

      <h3>Błąd 3 — Optymalizacja pod frazę bez dopasowania intencji</h3>
      <p>
        Strona landing page zoptymalizowana pod frazę informacyjną. Artykuł blogowy
        zoptymalizowany pod frazę transakcyjną. W obu przypadkach Google wie, że strona
        nie spełnia intencji użytkownika i nie promuje jej — niezależnie od jakości treści.
      </p>

      <h3>Błąd 4 — Zbyt rzadka aktualizacja badania</h3>
      <p>
        Keyword research to nie jednorazowy projekt. Trendy się zmieniają, nowe frazy
        zyskują na popularności, stare tracą. Rób przegląd listy słów kluczowych co
        6–12 miesięcy i sprawdzaj w Search Console, czy pojawiają się nowe frazy warte
        zaadresowania.
      </p>

      <h3>Błąd 5 — Pomijanie Google Search Console</h3>
      <p>
        Wiele firm wydaje pieniądze na płatne narzędzia, ignorując Search Console — bezpłatne
        narzędzie z prawdziwymi danymi o ich własnej stronie. GSC pokaże Ci frazy z pozycji
        4–20, które przy drobnej optymalizacji (poprawa tytułu, dodanie treści) mogą
        wskoczyć do top 3. To najszybsza droga do wzrostu ruchu organicznego.
      </p>

      <h3>Błąd 6 — Mierzenie pozycji zamiast konwersji</h3>
      <p>
        Bycie na pozycji 1 na frazę, która nie przynosi klientów, jest bezwartościowe.
        Zawsze weryfikuj, czy ruch z danej frazy konwertuje — przez Google Analytics, GSC
        lub system CRM. Jeśli fraza generuje ruch bez konwersji przez 6 miesięcy,
        sprawdź intencję i dostosuj treść lub zamień frazę na bardziej trafną.
      </p>

      <h2>Jak zbudować pierwszą listę słów kluczowych — krok po kroku</h2>
      <ol>
        <li><strong>Wypisz 10–20 „seed keywords"</strong> — bazowych fraz opisujących Twoje usługi i lokalizację. Myśl jak klient.</li>
        <li><strong>Rozszerz przez Google Autocomplete</strong> — dla każdego seed keyword sprawdź podpowiedzi i powiązane wyszukiwania.</li>
        <li><strong>Wrzuć do narzędzia</strong> — Google Keyword Planner, Ubersuggest lub Ahrefs. Pobierz wolumeny i KD.</li>
        <li><strong>Sprawdź Search Console</strong> — dodaj frazy, na które już się wyświetlasz, a o których nie wiedziałeś.</li>
        <li><strong>Zbadaj konkurencję</strong> — przejrzyj 3–5 stron konkurentów. Jakie nagłówki, jakie tytuły stron?</li>
        <li><strong>Przefiltruj przez intencję</strong> — każdej frazie przypisz typ intencji i typ strony, która na nią odpowie.</li>
        <li><strong>Pogrupuj w klastry</strong> — połącz frazy o tej samej intencji w grupy. Jedna grupa = jedna podstrona.</li>
        <li><strong>Priorytetyzuj</strong> — zacznij od fraz z niskim KD i wyraźną intencją transakcyjną lub komercyjną.</li>
      </ol>

      <h2>Podsumowanie</h2>
      <p>
        Dobór słów kluczowych to kombinacja danych i intuicji. Narzędzia dają liczby,
        ale to Ty musisz ocenić, czy fraza jest trafna dla Twojego biznesu i czy masz
        szansę w danym miejscu w SERPach. Zacznij od intencji, weryfikuj metryki, buduj
        listy metodycznie — i regularnie wracaj do badania, bo rynek się zmienia.
      </p>
      <p>
        Gdy masz już listę słów kluczowych, kolejny krok to ich implementacja:
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — sygnały lokalne w 2026 roku</Link></li>
        <li><Link href="/jak-dodac-local-schema-do-strony">Jak dodać local schema markup — wzmocnij sygnały SEO strukturą danych</Link></li>
        <li><Link href="/ile-kosztuje-pozycjonowanie-strony-internetowej">Ile kosztuje pozycjonowanie strony — jak liczyć ROI z SEO</Link></li>
        <li><Link href="/siedziba-mala-miejscowosc-local-seo">Firma z małej miejscowości — strategia słów lokalnych dla dużego miasta</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Jak dodać local schema markup do swojej strony
  ───────────────────────────────────────────────────────────────────────── */
  "jak-dodac-local-schema-do-strony": (
    <>
      <h2>Czym jest schema markup i dlaczego local SEO tego potrzebuje</h2>
      <p>
        Schema markup (znany też jako dane strukturalne) to sposób na opisanie zawartości strony
        w języku zrozumiałym dla robotów Google, Bing i innych wyszukiwarek. Zamiast analizować
        tekst i zgadywać, czym jest Twoja firma, Google dostaje wprost: <em>to jest firma lokalna,
        nazywa się tak i tak, ma ten adres, te godziny otwarcia i taki numer telefonu</em>.
      </p>
      <p>
        Dla local SEO schema markup LocalBusiness jest jednym z kluczowych sygnałów rankingowych.
        Pomaga Google powiązać Twoją stronę www z wizytówką Google Business Profile, rozumieć
        obszar geograficzny działalności i poprawnie wyświetlać informacje w wynikach wyszukiwania —
        łącznie z tzw. <strong>rich results</strong>: ocenami gwiazdkowymi, godzinami otwarcia
        czy adresem widocznym bezpośrednio w SERPach.
      </p>
      <p>
        Co ważne: implementacja schema markup jest technicznie prosta, zajmuje 30–60 minut,
        a zdecydowana większość małych firm jej nie ma. To oznacza, że masz szansę zyskać przewagę
        nad konkurencją przy stosunkowo niewielkim nakładzie pracy.
      </p>

      <h2>Format JSON-LD — jedyna słuszna droga</h2>
      <p>
        Schema markup można implementować na trzy sposoby: JSON-LD, Microdata i RDFa.
        <strong>Google oficjalnie rekomenduje JSON-LD</strong> i ten format powinieneś stosować.
        Dlaczego?
      </p>
      <ul>
        <li>JSON-LD dodaje się jako blok kodu w sekcji <code>&lt;head&gt;</code> — nie ingeruje w HTML strony</li>
        <li>Jest znacznie łatwiejszy do pisania, aktualizowania i debugowania niż Microdata</li>
        <li>Działa identycznie niezależnie od tego, jak wygląda struktura HTML Twojej strony</li>
        <li>Google czyta go tak samo jak dane wbudowane w HTML, więc nie ma żadnego powodu, żeby używać Microdata</li>
      </ul>

      <h2>Typ LocalBusiness i jego podtypy — co wybrać</h2>
      <p>
        Schema.org definiuje typ <strong>LocalBusiness</strong> jako bazowy dla każdej fizycznej
        firmy lokalnej. Możesz używać go wprost, ale jeśli Twoja branża ma bardziej szczegółowy
        podtyp — zawsze używaj bardziej szczegółowego. Google wyżej ceni precyzję.
      </p>
      <p>
        Najważniejsze podtypy i kiedy ich używać:
      </p>
      <ul>
        <li><strong>Dentist</strong> — gabinet stomatologiczny</li>
        <li><strong>MedicalBusiness → Physician</strong> — lekarz, klinika</li>
        <li><strong>LegalService → Attorney</strong> — kancelaria adwokacka, radca prawny</li>
        <li><strong>AccountingService</strong> — biuro rachunkowe</li>
        <li><strong>AutoRepair</strong> — warsztat samochodowy</li>
        <li><strong>BeautySalon</strong> — salon kosmetyczny, fryzjer</li>
        <li><strong>Restaurant / FoodEstablishment</strong> — restauracja, kawiarnia</li>
        <li><strong>Hotel / LodgingBusiness</strong> — hotel, pensjonat</li>
        <li><strong>RealEstateAgent</strong> — biuro nieruchomości</li>
        <li><strong>HomeAndConstructionBusiness</strong> — firma remontowa, budowlana</li>
        <li><strong>Store</strong> (i podtypy) — sklepy różnych branż</li>
        <li><strong>LocalBusiness</strong> — jeśli żaden z powyższych nie pasuje</li>
      </ul>
      <p>
        Pełną listę podtypów znajdziesz na <strong>schema.org/LocalBusiness</strong>.
        Zasada jest prosta: zejdź jak najgłębiej w hierarchii typów — im bardziej precyzyjny typ,
        tym lepiej Google rozumie Twoją firmę.
      </p>

      <h2>Właściwości, które musisz uwzględnić</h2>
      <p>
        Schema.org definiuje dziesiątki właściwości dla LocalBusiness. Poniżej podział na
        obowiązkowe, zalecane i dodatkowe:
      </p>

      <h3>Obowiązkowe (bez nich schema nie ma sensu)</h3>
      <ul>
        <li><strong>name</strong> — pełna nazwa firmy (identyczna jak w GBP i w każdym innym miejscu w sieci)</li>
        <li><strong>address</strong> — obiekt PostalAddress z ulicą, miastem, kodem pocztowym i kodem kraju</li>
        <li><strong>telephone</strong> — numer telefonu w formacie międzynarodowym: <code>+48 123 456 789</code></li>
        <li><strong>url</strong> — adres strony głównej Twojej firmy</li>
      </ul>

      <h3>Zalecane (znacząco poprawiają sygnał lokalny)</h3>
      <ul>
        <li><strong>@id</strong> — unikalny identyfikator URI dla tej lokalizacji, np. <code>https://twojastrona.pl/#firma</code></li>
        <li><strong>geo</strong> — obiekt GeoCoordinates ze współrzędnymi geograficznymi (latitude i longitude)</li>
        <li><strong>openingHoursSpecification</strong> — godziny otwarcia dla każdego dnia tygodnia</li>
        <li><strong>image</strong> — URL zdjęcia firmy lub logo</li>
        <li><strong>priceRange</strong> — przedział cenowy w dolarach/złotówkach: <code>$</code>, <code>$$</code>, <code>$$$</code></li>
        <li><strong>sameAs</strong> — tablica URLi do Twoich profili (Facebook, Google Maps, LinkedIn itp.)</li>
        <li><strong>email</strong> — adres e-mail kontaktowy</li>
        <li><strong>description</strong> — krótki opis firmy (10–200 znaków)</li>
      </ul>

      <h3>Dodatkowe (zaawansowane)</h3>
      <ul>
        <li><strong>areaServed</strong> — obszar działalności firmy (gdy obsługujesz klientów poza swoją lokalizacją)</li>
        <li><strong>hasMap</strong> — link do Google Maps prowadzący do Twojej wizytówki</li>
        <li><strong>aggregateRating</strong> — ocena zbiorcza (patrz sekcja o pułapkach)</li>
        <li><strong>servesCuisine</strong> — tylko dla restauracji, typ kuchni</li>
        <li><strong>menu</strong> — tylko dla restauracji/kawiarni, link do menu</li>
        <li><strong>paymentAccepted</strong> — akceptowane metody płatności</li>
      </ul>

      <h2>Kompletny przykład JSON-LD dla LocalBusiness</h2>
      <p>
        Poniżej gotowy, kompletny kod do wklejenia. Zamień wartości na dane swojej firmy:
      </p>
      <div className="my-6 rounded-xl overflow-x-auto bg-zinc-950 border border-zinc-800">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">schema-lokalizacja.json</span>
        </div>
        <pre className="text-sm text-zinc-100 font-mono p-5 leading-relaxed overflow-x-auto whitespace-pre">{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://twojastrona.pl/#lokalizacja",
  "name": "Nazwa Twojej Firmy",
  "url": "https://twojastrona.pl",
  "telephone": "+48 123 456 789",
  "email": "kontakt@twojastrona.pl",
  "description": "Krótki opis firmy — czym się zajmujesz, gdzie działasz.",
  "priceRange": "$$",
  "image": "https://twojastrona.pl/images/firma.jpg",
  "logo": {
    "@type": "ImageObject",
    "url": "https://twojastrona.pl/images/logo.png"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Główna 10",
    "addressLocality": "Warszawa",
    "postalCode": "00-001",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2297,
    "longitude": 21.0122
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/twoja-firma",
    "https://www.instagram.com/twoja-firma",
    "https://g.co/kgs/XXXXX"
  ],
  "areaServed": {
    "@type": "City",
    "name": "Warszawa"
  }
}
</script>`}</pre>
      </div>

      <h2>Jak znaleźć współrzędne geograficzne (geo)</h2>
      <p>
        Właściwość <strong>geo</strong> ze współrzędnymi geograficznymi to jeden z najmocniejszych
        sygnałów lokalnych w schema — i najczęściej pomijany. Aby znaleźć dokładne współrzędne
        swojej lokalizacji:
      </p>
      <ol>
        <li>Otwórz Google Maps i wyszukaj swoją firmę lub adres</li>
        <li>Kliknij prawym przyciskiem myszy na pinezkę lokalizacji</li>
        <li>Skopiuj współrzędne (pierwsza liczba to latitude, druga to longitude)</li>
      </ol>
      <p>
        Alternatywnie: wejdź na <strong>maps.google.com</strong>, ustaw mapę na swojej lokalizacji,
        a współrzędne pojawią się w pasku adresu URL po kliknięciu w punkt na mapie.
        Użyj co najmniej 4 miejsc po przecinku — im dokładniej, tym lepiej.
      </p>

      <h2>Implementacja w WordPress</h2>
      <p>
        WordPress oferuje kilka metod dodania schema markup. Od najprostszej do bardziej
        zaawansowanej:
      </p>

      <h3>Metoda 1 — Wtyczka (polecana dla większości)</h3>
      <p>
        Najwygodniejsza opcja bez pisania kodu. Najlepsze wtyczki do schema LocalBusiness:
      </p>
      <ul>
        <li><strong>Rank Math SEO</strong> — ma wbudowany kreator schema LocalBusiness z formularzem. Idź do Rank Math → Schema → dodaj LocalBusiness. Wypełnij pola. Wtyczka generuje JSON-LD automatycznie.</li>
        <li><strong>Yoast SEO</strong> (wersja Premium) — podobny kreator w zakładce Schema. Wersja darmowa dodaje tylko podstawowe dane organizacji.</li>
        <li><strong>Schema & Structured Data for WP</strong> — dedykowana wtyczka do schema, bezpłatna, z intuicyjnym interfejsem.</li>
      </ul>

      <h3>Metoda 2 — Ręczne dodanie przez functions.php</h3>
      <p>
        Jeśli chcesz pełną kontrolę bez wtyczki, dodaj poniższy kod do pliku <code>functions.php</code>
        swojego motywu (lub do wtyczki niestandardowej):
      </p>
      <div className="my-6 rounded-xl overflow-x-auto bg-zinc-950 border border-zinc-800">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">functions.php</span>
        </div>
        <pre className="text-sm text-zinc-100 font-mono p-5 leading-relaxed overflow-x-auto whitespace-pre">{`function miauseo_local_business_schema() {
  $schema = [
    '@context'  => 'https://schema.org',
    '@type'     => 'LocalBusiness',
    '@id'       => 'https://twojastrona.pl/#lokalizacja',
    'name'      => 'Nazwa Twojej Firmy',
    'url'       => 'https://twojastrona.pl',
    'telephone' => '+48 123 456 789',
    'address'   => [
      '@type'           => 'PostalAddress',
      'streetAddress'   => 'ul. Główna 10',
      'addressLocality' => 'Warszawa',
      'postalCode'      => '00-001',
      'addressCountry'  => 'PL',
    ],
    'geo' => [
      '@type'     => 'GeoCoordinates',
      'latitude'  => 52.2297,
      'longitude' => 21.0122,
    ],
  ];

  echo '<script type="application/ld+json">'
    . wp_json_encode( $schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT )
    . '</script>';
}
add_action( 'wp_head', 'miauseo_local_business_schema' );`}</pre>
      </div>
      <p>
        Użyj <code>wp_json_encode</code> zamiast zwykłego <code>json_encode</code> —
        WordPress opakowuje go w dodatkowe zabezpieczenia i poprawnie koduje znaki Unicode
        (polskie litery).
      </p>

      <h2>Implementacja w Next.js / React</h2>
      <p>
        W aplikacjach React i Next.js najwygodniej dodać schema markup w komponencie layoutu —
        raz, globalnie, dla całej strony. W Next.js App Router (Next.js 13+) robi się to
        przez <code>layout.tsx</code>:
      </p>
      <div className="my-6 rounded-xl overflow-x-auto bg-zinc-950 border border-zinc-800">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">app/layout.tsx</span>
        </div>
        <pre className="text-sm text-zinc-100 font-mono p-5 leading-relaxed overflow-x-auto whitespace-pre">{`const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://twojastrona.pl/#lokalizacja",
  "name": "Nazwa Twojej Firmy",
  "url": "https://twojastrona.pl",
  "telephone": "+48 123 456 789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Główna 10",
    "addressLocality": "Warszawa",
    "postalCode": "00-001",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2297,
    "longitude": 21.0122
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}`}</pre>
      </div>
      <p>
        Kilka ważnych zasad dla Next.js:
      </p>
      <ul>
        <li>Zdefiniuj obiekt <code>localBusinessSchema</code> <em>poza</em> komponentem — nie w ciele funkcji. Dzięki temu nie jest on ponownie tworzony przy każdym renderowaniu.</li>
        <li>Użyj <code>JSON.stringify</code> bez wcięć w produkcji — zmniejsza rozmiar HTML. W developmencie możesz dodać <code>null, 2</code> dla czytelności.</li>
        <li>Prop <code>dangerouslySetInnerHTML</code> jest tutaj bezpieczny — wstawiasz dane, które sam kontrolujesz, nie dane od użytkownika.</li>
        <li>Jeśli masz wiele lokalizacji, stwórz osobny plik <code>lib/schema.ts</code> z tablicą obiektów schema i mapuj je w layout.</li>
      </ul>

      <h2>Implementacja w zwykłym HTML</h2>
      <p>
        Jeśli Twoja strona to statyczny HTML lub używasz dowolnego innego CMSu,
        po prostu wklej tag <code>&lt;script&gt;</code> bezpośrednio przed zamknięciem
        tagu <code>&lt;/head&gt;</code>:
      </p>
      <div className="my-6 rounded-xl overflow-x-auto bg-zinc-950 border border-zinc-800">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">index.html</span>
        </div>
        <pre className="text-sm text-zinc-100 font-mono p-5 leading-relaxed overflow-x-auto whitespace-pre">{`<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Twoja Firma</title>

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://twojastrona.pl/#lokalizacja",
    "name": "Nazwa Twojej Firmy",
    "telephone": "+48 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Główna 10",
      "addressLocality": "Warszawa",
      "postalCode": "00-001",
      "addressCountry": "PL"
    }
  }
  </script>

</head>
<body>
  ...
</body>
</html>`}</pre>
      </div>
      <p>
        Jeśli używasz Google Tag Managera — <strong>nie dodawaj schema przez GTM</strong>.
        Google oficjalnie potwierdził, że renderowana przez JavaScript schema markup jest obsługiwana,
        ale crawlery indeksujące przetwarzają ją wolniej i mniej niezawodnie niż statyczny HTML.
        Zawsze wstawiaj JSON-LD bezpośrednio w kodzie strony.
      </p>

      <h2>Wiele lokalizacji — jak obsłużyć</h2>
      <p>
        Jeśli Twoja firma ma więcej niż jeden oddział, każda lokalizacja powinna mieć
        <strong>osobny obiekt LocalBusiness</strong> z unikalnym <code>@id</code> i adresem.
        Możesz wstawić je jako tablicę JSON-LD w jednym tagu <code>&lt;script&gt;</code>
        lub jako osobne tagi — oba podejścia są poprawne:
      </p>
      <div className="my-6 rounded-xl overflow-x-auto bg-zinc-950 border border-zinc-800">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">wiele lokalizacji</span>
        </div>
        <pre className="text-sm text-zinc-100 font-mono p-5 leading-relaxed overflow-x-auto whitespace-pre">{`<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://twojastrona.pl/#warszawa",
    "name": "Twoja Firma — Warszawa",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Marszałkowska 1",
      "addressLocality": "Warszawa",
      "postalCode": "00-001",
      "addressCountry": "PL"
    },
    "telephone": "+48 111 222 333"
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://twojastrona.pl/#krakow",
    "name": "Twoja Firma — Kraków",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Floriańska 10",
      "addressLocality": "Kraków",
      "postalCode": "31-001",
      "addressCountry": "PL"
    },
    "telephone": "+48 444 555 666"
  }
]
</script>`}</pre>
      </div>
      <p>
        Najlepszą praktyką jest stworzenie dla każdej lokalizacji dedykowanej podstrony
        (<code>/warszawa</code>, <code>/krakow</code>) i umieszczenie odpowiedniego schema
        markup na tej konkretnej podstronie, a nie globalnie w całej witrynie.
        To wzmacnia sygnał lokalny dla każdego oddziału osobno.
      </p>

      <h2>Jak testować poprawność schema markup</h2>
      <p>
        Po wdrożeniu obowiązkowo przetestuj schema przed indeksowaniem. Masz do dyspozycji
        dwa narzędzia:
      </p>

      <h3>1. Google Rich Results Test</h3>
      <p>
        Narzędzie dostępne pod adresem <strong>search.google.com/test/rich-results</strong>.
        Wklej URL strony lub bezpośrednio kod HTML z JSON-LD. Narzędzie pokaże:
      </p>
      <ul>
        <li>Czy schema została poprawnie odczytana</li>
        <li>Jakie właściwości zostały wykryte</li>
        <li>Czy kwalifikujesz się do rich results (np. oceny gwiazdkowe)</li>
        <li>Ostrzeżenia o brakujących zalecanych właściwościach</li>
      </ul>

      <h3>2. Schema.org Validator</h3>
      <p>
        Dostępny pod adresem <strong>validator.schema.org</strong>. Bardziej szczegółowy niż
        narzędzie Google — sprawdza zgodność ze specyfikacją schema.org, a nie tylko z tym,
        co Google rozumie. Używaj go jako drugiego sprawdzenia po Rich Results Test.
      </p>
      <p>
        Po wdrożeniu sprawdź też w <strong>Google Search Console → Udoskonalenia</strong> —
        po 1–2 tygodniach pojawi się raport o wykrytych danych strukturalnych i ewentualnych
        błędach na Twojej stronie.
      </p>

      <h2>Najczęstsze błędy przy implementacji LocalBusiness schema</h2>

      <h3>Błąd 1 — Rozbieżność z danymi w GBP i na stronie (NAP)</h3>
      <p>
        To najpoważniejszy błąd. Nazwa, adres i numer telefonu w schema markup muszą być
        <strong>dokładnie identyczne</strong> jak w Google Business Profile, w stopce strony
        i w każdym innym miejscu w internecie. Nawet drobna różnica (np. „ul. Główna 10"
        vs „Główna 10") to sygnał niespójności, który osłabia cały profil lokalny.
        Przeczytaj więcej o tym w artykule o{" "}
        <Link href="/nap-wizytowka-google-co-to-jest">NAP w wizytówce Google</Link>.
      </p>

      <h3>Błąd 2 — aggregateRating z fałszywymi danymi</h3>
      <p>
        Właściwość <code>aggregateRating</code> pozwala pokazać ocenę gwiazdkową bezpośrednio
        w wynikach wyszukiwania. Ale Google weryfikuje te dane — jeśli ocena w schema nie
        odpowiada rzeczywistym opiniom na stronie lub w GBP, ryzykujesz manualną karą
        i usunięciem rich results. <strong>Nie wpisuj fikcyjnych ocen</strong>.
        Jeśli chcesz używać aggregateRating, pobieraj dane dynamicznie ze swojego systemu opinii.
      </p>

      <h3>Błąd 3 — Schema tylko na stronie głównej</h3>
      <p>
        Wiele firm dodaje LocalBusiness schema wyłącznie na stronie głównej. Lepsze podejście:
        dodaj ją na każdej stronie serwisu (przez layout/szablon) oraz stwórz dedykowane
        strony dla każdej lokalizacji z osobnym schema markup.
      </p>

      <h3>Błąd 4 — Brak właściwości @id</h3>
      <p>
        Właściwość <code>@id</code> to unikalny identyfikator encji w grafie wiedzy Google.
        Bez niego Google trudniej powiązać Twoją schema z innymi sygnałami (wizytówka GBP,
        Wikidata, inne wzmianki w sieci). Zawsze dodawaj <code>@id</code> w formacie
        URL z kotwicą: <code>https://twojastrona.pl/#firma</code>.
      </p>

      <h3>Błąd 5 — Używanie zbyt ogólnego typu</h3>
      <p>
        Dentysta ze schemaTypem <code>LocalBusiness</code> zamiast <code>Dentist</code>
        traci sygnał precyzji. Google traktuje bardziej szczegółowe typy jako mocniejszy
        sygnał trafności dla zapytań branżowych. Zawsze sprawdź schema.org/LocalBusiness
        czy istnieje bardziej precyzyjny podtyp.
      </p>

      <h3>Błąd 6 — Dodawanie schema przez Google Tag Manager</h3>
      <p>
        Jak wspomniano wyżej — GTM wstrzykuje skrypty po załadowaniu strony przez JavaScript.
        Crawlery Google indeksują takie dane, ale wolniej i mniej niezawodnie. Schema markup
        powinna być częścią statycznego HTML strony.
      </p>

      <h2>Jak schema markup realnie wpływa na local SEO</h2>
      <p>
        Warto mieć realistyczne oczekiwania. LocalBusiness schema <strong>nie jest magicznym
        przełącznikiem</strong>, który natychmiast wywinduje Cię na pierwszą pozycję w mapach.
        Jej wpływ jest pośredni, ale istotny:
      </p>
      <ul>
        <li><strong>Powiązanie strony www z wizytówką GBP</strong> — Google lepiej łączy sygnały z różnych źródeł, co wzmacnia autorytet lokalny</li>
        <li><strong>Rich results w wynikach</strong> — oceny gwiazdkowe, godziny otwarcia i adres w SERPach zwiększają CTR (klikalność), a CTR jest sygnałem rankingowym</li>
        <li><strong>Sygnał spójności NAP</strong> — schema potwierdza dane z GBP i innych cytowań, co wzmacnia zaufanie algorytmu</li>
        <li><strong>Knowledge Panel</strong> — kompletna schema schema pomaga Google budować lub wzbogacać panel wiedzy Twojej firmy</li>
        <li><strong>Voice search</strong> — asystenci głosowi (Google Assistant, Siri) korzystają ze schema markup przy odpowiadaniu na pytania lokalne</li>
      </ul>
      <p>
        Czas na efekty: pierwsze zmiany w wynikach możesz zauważyć po 2–6 tygodniach
        od indeksowania — tyle potrzebuje Googlebot na przetworzenie nowych danych strukturalnych.
      </p>

      <h2>Podsumowanie — lista kontrolna wdrożenia</h2>
      <p>
        Zanim skończysz, przejdź przez checklistę:
      </p>
      <ul>
        <li>✓ Wybrałem najbardziej szczegółowy typ LocalBusiness pasujący do mojej branży</li>
        <li>✓ Dane NAP w schema są identyczne jak w GBP i na stronie</li>
        <li>✓ Dodałem właściwość <code>@id</code> z unikalnym URL</li>
        <li>✓ Dodałem współrzędne geograficzne (<code>geo</code>)</li>
        <li>✓ Wypełniłem godziny otwarcia (<code>openingHoursSpecification</code>)</li>
        <li>✓ Dodałem <code>sameAs</code> z linkami do profili społecznościowych i GBP</li>
        <li>✓ Przetestowałem schema w Google Rich Results Test — brak błędów</li>
        <li>✓ Schema jest w statycznym HTML, nie wstrzykiwana przez JavaScript/GTM</li>
      </ul>
      <p>
        Schema markup LocalBusiness to jedna z prostszych technicznie optymalizacji SEO —
        i jedna z tych, które wiele firm nadal pomija. Wdrożenie zajmie Ci godzinę,
        a efekty widoczne będą przez lata. Żeby wyciągnąć maksimum z lokalnej widoczności,
        połącz schema markup z silnym profilem GBP:
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik</Link></li>
        <li><Link href="/nap-wizytowka-google-co-to-jest">NAP w wizytówce Google — czym jest i jak zadbać o spójność danych</Link></li>
        <li><Link href="/siedziba-mala-miejscowosc-local-seo">Siedziba w małej miejscowości — jak zdobyć klientów z dużego miasta</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Jak odzyskać dostęp do wizytówki Google?
  ───────────────────────────────────────────────────────────────────────── */
  "jak-odzyskac-dostep-do-wizytowki-google": (
    <>
      <h2>Dlaczego tracisz dostęp do profilu GBP — najczęstsze przyczyny</h2>
      <p>
        Problem z dostępem do Google Business Profile pojawia się częściej niż myślisz. Typowe
        scenariusze: pracownik odpowiedzialny za marketing odszedł z firmy i zabrał ze sobą
        dostęp do konta Google, poprzedni właściciel firmy nie przepisał profilu, konto Google
        powiązane z GBP zostało usunięte lub zainfekowane, albo profil po prostu nigdy nie był
        formalnie zweryfikowany przez Ciebie.
      </p>
      <p>
        Dobra wiadomość: Google przewidziało te sytuacje i daje narzędzia do odzyskania kontroli.
        Zła wiadomość: proces bywa długi i wymaga cierpliwości. Żaden serwis zewnętrzny nie
        może tego za Ciebie przyspieszyć — i każdy, kto twierdzi że może, za pieniądze, to oszust.
      </p>

      <h2>Scenariusz 1 – Znasz email, ale nie pamiętasz hasła</h2>
      <p>
        Najprostszy przypadek. Wejdź na <strong>accounts.google.com</strong>, kliknij „Zapomniałem
        hasła" i skorzystaj z procedury odzyskiwania — przez numer telefonu, zapasowy email lub
        pytania bezpieczeństwa. Jeśli masz dostęp do zapasowego adresu email lub numeru telefonu
        powiązanego z kontem, odzyskanie hasła zajmuje 5 minut.
      </p>
      <p>
        Jeśli nie masz dostępu do żadnej metody weryfikacji, Google oferuje procedurę odzyskiwania
        przez weryfikację tożsamości właściciela konta — wymaga to czasu (zwykle kilka dni)
        i odpowiedzi na pytania weryfikacyjne dotyczące aktywności na koncie.
      </p>

      <h2>Scenariusz 2 – Profil jest zweryfikowany, ale nie masz do niego dostępu</h2>
      <p>
        Zdarza się gdy pracownik lub poprzednia agencja marketingowa zarejestrowała profil
        na własnym koncie Google i nie przekazała dostępu. W takim przypadku:
      </p>
      <ol>
        <li>
          Wejdź na <strong>business.google.com</strong> i wyszukaj swoją firmę.
        </li>
        <li>
          Kliknij „Przejąć kontrolę nad tym profilem?" lub „Zażądaj dostępu".
        </li>
        <li>
          Google wyśle powiadomienie do obecnego właściciela profilu z prośbą o przyznanie
          dostępu. Obecny właściciel ma 7 dni na odpowiedź.
        </li>
        <li>
          Jeśli obecny właściciel nie odpowie w ciągu 7 dni, możesz złożyć wniosek o
          weryfikację tożsamości jako właściciel firmy — Google zweryfikuje Cię przez
          kartę pocztową lub inną metodę.
        </li>
      </ol>

      <h2>Scenariusz 3 – Profil zweryfikowany przez poprzedniego właściciela firmy</h2>
      <p>
        Przy zakupie lub przejęciu firmy nowy właściciel często staje przed problemem profilu
        GBP zweryfikowanego na poprzedniego właściciela. Procedura:
      </p>
      <ul>
        <li>Skontaktuj się z poprzednim właścicielem i poproś o dodanie Cię jako administratora</li>
        <li>Jeśli kontakt jest niemożliwy, skorzystaj z procedury „Żądaj dostępu" jak w scenariuszu 2</li>
        <li>Jeśli poprzedni właściciel nie reaguje — złóż wniosek przez formularz wsparcia Google z dokumentacją prawną potwierdzającą przejęcie firmy (akt sprzedaży, wypis z KRS/CEIDG)</li>
      </ul>

      <h2>Scenariusz 4 – Profil jest niezweryfikowany lub nie istnieje</h2>
      <p>
        Jeśli profil Twojej firmy istnieje w Google Maps (stworzony automatycznie przez algorytm
        na podstawie danych z internetu), ale nikt go nigdy nie zweryfikował, przejęcie kontroli
        jest najprostsze. Po prostu:
      </p>
      <ol>
        <li>Zaloguj się na swoje konto Google na <strong>business.google.com</strong></li>
        <li>Wyszukaj firmę i kliknij „Zarządzaj tym profilem"</li>
        <li>Przejdź przez weryfikację — przez kartę pocztową (najczęstsza metoda), telefon, email lub nagranie wideo</li>
      </ol>

      <h2>Scenariusz 5 – Profil zawieszony przez Google</h2>
      <p>
        Inny problem: masz dostęp do konta, ale profil jest oznaczony jako „Zawieszony". Nie
        mylić z brakiem dostępu. Zawieszenie to efekt naruszenia zasad Google (np. fałszywy adres,
        keyword stuffing w nazwie, zakup recenzji). W tym przypadku:
      </p>
      <ul>
        <li>Zaloguj się do GBP i sprawdź powód zawieszenia</li>
        <li>Usuń naruszenie (popraw nazwę, adres, usuń podejrzane recenzje)</li>
        <li>Złóż wniosek o przywrócenie profilu przez formularz odwołania w panelu GBP</li>
        <li>Czas rozpatrywania: kilka dni do kilku tygodni</li>
      </ul>

      <h2>Jak zabezpieczyć się na przyszłość?</h2>
      <ul>
        <li><strong>Dodaj co najmniej dwóch właścicieli/menedżerów</strong> do profilu GBP — nigdy nie uzależniaj dostępu od jednej osoby</li>
        <li>Korzystaj z firmowego adresu email (nie prywatnego pracownika) jako głównego konta</li>
        <li>Regularnie sprawdzaj, kto ma dostęp: Panel GBP → Menedżerowie → przejrzyj listę</li>
        <li>Zapisz dane logowania w firmowym menedżerze haseł (Bitwarden, 1Password)</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Odzyskanie dostępu do wizytówki Google jest możliwe w każdym scenariuszu — wymaga tylko
        cierpliwości i przejścia przez oficjalne procedury Google. Nie płać nikomu za tę usługę.
        Gdy odzyskasz dostęp, od razu zadbaj o bezpieczeństwo profilu i zacznij go rozwijać:
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        <li><Link href="/nap-wizytowka-google-co-to-jest">NAP — fundament każdego profilu GBP</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Pozycjonowanie wizytówki Google dla hoteli
  ───────────────────────────────────────────────────────────────────────── */
  "pozycjonowanie-wizytowki-google-hotel": (
    <>
      <h2>Dlaczego GBP jest kluczowy dla każdego hotelu?</h2>
      <p>
        Podróżni szukający hotelu w danym mieście w ponad 60% przypadków zaczynają od wyszukiwarki
        Google, a nie bezpośrednio od Bookinga czy TripAdvisora. Profil Google Business Profile
        hotelu pojawia się zanim użytkownik dotrze do jakiejkolwiek strony rezerwacyjnej — razem
        ze zdjęciami, oceną, ceną za noc i przyciskiem „Sprawdź dostępność".
      </p>
      <p>
        Co więcej, Google Hotels (panel wyszukiwania hoteli) zasilany jest właśnie danymi z GBP.
        Hotele z niekompletnym lub słabo zoptymalizowanym profilem wypadają z tego widoku
        na rzecz konkurencji, która poświęciła czas na konfigurację.
      </p>

      <h2>Kategorie i atrybuty — branżowa specyfika hoteli</h2>
      <p>
        W kategorii głównej wybierz tę, która najdokładniej opisuje Twój obiekt: „Hotel",
        „Hotel butikowy", „Aparthotel", „Pensjonat", „Hostel" itp. Następnie dodaj kategorie
        dodatkowe: „Restauracja", „Bar", „Spa", „Sala konferencyjna" — jeśli te usługi
        faktycznie oferujesz.
      </p>
      <p>
        Atrybuty to goldmine dla hoteli — Google oferuje dla tej branży kilkadziesiąt opcji,
        które wpływają na filtrowanie wyników przez użytkowników. Koniecznie uzupełnij:
      </p>
      <ul>
        <li>Dostępność: winda, podjazd dla wózków, pokoje przystosowane dla niepełnosprawnych</li>
        <li>Udogodnienia: basen, sauna, siłownia, parking (płatny/bezpłatny), WiFi</li>
        <li>Zwierzęta: czy akceptujesz psy/koty</li>
        <li>Obsługa: recepcja 24h, concierge, transfer z lotniska</li>
        <li>Wyżywienie: śniadanie w cenie, restauracja na miejscu, minibar</li>
        <li>Lokalizacja: blisko centrum, przy morzu, blisko lotniska (gdzie to prawda)</li>
      </ul>

      <h2>Zdjęcia — standard dla hoteli jest wyższy</h2>
      <p>
        W branży hotelarskiej zdjęcia mają znacznie większy wpływ na decyzje klientów niż
        w jakiejkolwiek innej kategorii. Gość chce zobaczyć pokój zanim go zarezerwuje.
        Minimum dla hotelu to:
      </p>
      <ul>
        <li><strong>Lobby i recepcja</strong> — pierwsze wrażenie po wejściu</li>
        <li><strong>Każdy typ pokoju</strong> — standard, superior, suite: łóżko, łazienka, widok</li>
        <li><strong>Restauracja i bar</strong> — jedzenie w hotelu to często czynnik decyzyjny</li>
        <li><strong>Basen, spa, siłownia</strong> — jeśli masz, to kluczowe zdjęcia</li>
        <li><strong>Elewacja i otoczenie</strong> — drogowa widoczność i wejście główne</li>
        <li><strong>Widok z okna</strong> — dla hoteli z atrakcyjną lokalizacją to czynnik premium</li>
      </ul>
      <p>
        Minimalny standard fotografii: naturalne oświetlenie dzienne, poziome kadry (nie pionowe
        smartfonowe), rozdzielczość minimum 1920×1080 px. Warto inwestować w profesjonalnego
        fotografa wnętrz — różnica w jakości jest widoczna i przekłada się na rezerwacje.
      </p>

      <h2>Integracja z systemami rezerwacji</h2>
      <p>
        Google Business Profile dla hoteli pozwala na bezpośrednią integrację z systemami OTA
        (Online Travel Agencies) i silnikami rezerwacji. Jeśli Twój hotel korzysta z Bookinga,
        Expedia, HRS lub własnego silnika rezerwacji (np. Profitroom, Beds24), możesz wyświetlać
        aktualne ceny i dostępność bezpośrednio w wynikach Google.
      </p>
      <p>
        To tzw. <strong>Google Hotel Ads</strong> — płatna opcja wyświetlania cen w panelu Google
        Hotels, ale wdrożenie jej wymaga integracji przez partnera. Bezpłatna alternatywa to
        „Free Booking Links" — link do rezerwacji widoczny w profilu bez kosztów CPC.
      </p>

      <h2>Opinie — kluczowe dla hoteli bardziej niż dla kogokolwiek</h2>
      <p>
        92% podróżnych czyta opinie przed rezerwacją hotelu. Średnia ocena ma bezpośredni wpływ
        na widoczność w Google Hotels — algorytm faworyzuje hotele z oceną powyżej 4,2 i
        regularnie napływającymi recenzjami.
      </p>
      <p>
        Strategia dla hoteli: wyślij prośbę o opinię przez PMS (Property Management System)
        automatycznie po wymeldowaniu. Email powinien być wysłany 24–48h po wyjeździe gościa,
        kiedy emocje są jeszcze świeże. <Link href="/opinie-google-jak-zdobywac-skutecznie">Więcej o zbieraniu opinii bez nachalnego proszenia.</Link>
      </p>
      <p>
        Odpowiadaj na każdą opinię — zarówno pozytywną, jak i negatywną. W odpowiedzi na
        negatywną: nie kłóć się, przeproś za złe doświadczenie, zaproponuj kontakt bezpośredni.
        Potencjalni goście czytają odpowiedzi tak samo uważnie jak same recenzje.
      </p>

      <h2>Posty Google dla hoteli — jak je używać?</h2>
      <p>
        Używaj postów do promowania: pakietów sezonowych, ofert last minute, wydarzeń (wesela,
        konferencje, Sylwester), a także do informowania o tymczasowych zamknięciach czy remontach.
        Posty z wyraźnym CTA i zdjęciem generują kliknięcia bezpośrednio do systemu rezerwacji.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Hotel z kompletnym, aktywnym profilem GBP jest widoczny we wszystkich kluczowych punktach
        styku z potencjalnym gościem: wyszukiwarka, Maps, Google Hotels. To bezpłatne narzędzie,
        które może zmniejszyć zależność od pośredników pobierających prowizje.
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik</Link></li>
        <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">Jakie zdjęcia w wizytówce Google naprawdę pomagają?</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Jak usunąć negatywne opinie z Google?
  ───────────────────────────────────────────────────────────────────────── */
  "jak-usunac-negatywne-opinie-z-google": (
    <>
      <h2>Smutna prawda: nie możesz usunąć każdej złej recenzji</h2>
      <p>
        Zacznijmy od czegoś, co wielu właścicieli firm chce usłyszeć — ale co nie jest prawdą:
        <strong>nie ma możliwości usunięcia negatywnej opinii tylko dlatego, że Ci się nie podoba.</strong>
        Google chroni wolność słowa i autentyczność recenzji — to fundament, na którym opiera
        się zaufanie do platformy.
      </p>
      <p>
        Ale jest dobra wiadomość: część negatywnych opinii narusza zasady Google i można je
        skutecznie usunąć. Kluczem jest wiedza, które opinie kwalifikują się do zgłoszenia,
        i cierpliwość w procesie.
      </p>

      <h2>Kiedy Google usunie opinię? — wyczerpująca lista naruszeń</h2>
      <p>
        Google usuwa recenzje, które naruszają jego politykę treści. Oto kategorie naruszeń,
        które dają realne szanse na usunięcie:
      </p>
      <ul>
        <li><strong>Spam i treści nieprawdziwe</strong> — opinia napisana przez kogoś, kto nigdy nie był klientem; opinia wielokrotnie wklejona z tego samego lub podobnego konta</li>
        <li><strong>Treści nieodpowiednie</strong> — mowa nienawiści, wulgaryzmy, rasizm, dyskryminacja, treści dla dorosłych</li>
        <li><strong>Konflikt interesów</strong> — opinia napisana przez pracownika firmy lub przez właściciela konkurencji</li>
        <li><strong>Treści nielegalne</strong> — naruszenie prawa, groźby, szantaż</li>
        <li><strong>Informacje prywatne</strong> — ujawnienie danych osobowych, numerów telefonów, adresów prywatnych</li>
        <li><strong>Opinia nie dotyczy firmy</strong> — komentarz o polityce, kontrowersjach zewnętrznych, a nie o doświadczeniu z firmą</li>
        <li><strong>Reklama w opinii</strong> — linki do konkurencji, promocje innych firm</li>
      </ul>

      <h2>Jak zgłosić opinię do usunięcia — krok po kroku</h2>
      <ol>
        <li>
          Zaloguj się do panelu <strong>Google Business Profile</strong> na business.google.com
        </li>
        <li>
          Przejdź do zakładki „Opinie"
        </li>
        <li>
          Znajdź problematyczną recenzję i kliknij trzy kropki (menu) obok niej
        </li>
        <li>
          Wybierz „Zgłoś opinię jako nieodpowiednią"
        </li>
        <li>
          Wybierz kategorię naruszenia i potwierdź zgłoszenie
        </li>
      </ol>
      <p>
        Google rozpatruje zgłoszenia zazwyczaj w ciągu <strong>3–7 dni roboczych</strong>.
        Jeśli recenzja zostanie oceniona jako niezgodna z polityką, zostanie usunięta.
        Jeśli nie — pozostanie.
      </p>

      <h2>Co zrobić, jeśli zgłoszenie zostało odrzucone?</h2>
      <p>
        Masz kilka opcji:
      </p>
      <ul>
        <li>
          <strong>Odwołanie przez Google Business Support</strong> — skontaktuj się z
          pomocą techniczną Google (chat lub email) i wyjaśnij, dlaczego opinia narusza zasady.
          Dołącz dowody (screenshoty, dokumenty potwierdzające, że osoba nie była klientem).
        </li>
        <li>
          <strong>Zgłoszenie prawne</strong> — jeśli opinia zawiera fałszywe fakty,
          które możesz udowodnić (np. twierdzi, że byłeś nieobecny w dniu, gdy masz
          fakturę sprzedaży), możesz złożyć zgłoszenie prawne przez formularz Google
          dotyczący zniesławienia.
        </li>
        <li>
          <strong>Odpowiedz profesjonalnie</strong> — jeśli opinia nie zostanie usunięta,
          najlepsza strategia to odpowiedź, która pokazuje Twoją stronę historii.
          <Link href="/negatywna-opinia-google-co-zrobic">Jak odpowiadać na negatywne opinie — krok po kroku.</Link>
        </li>
      </ul>

      <h2>Zbiorowe ataki fake reviews — co robić?</h2>
      <p>
        Czasem firmy padają ofiarą skoordynowanych ataków: dziesiątki fałszywych opinii
        pojawiają się w krótkim czasie, często od nowych kont bez historii. To tzw.
        review bombing. W takim przypadku:
      </p>
      <ul>
        <li>Zgłoś każdą podejrzaną opinię osobno (nie ma opcji zgłoszenia zbiorczego)</li>
        <li>Skontaktuj się z Google Business Support i opisz sytuację — w przypadku udowodnionego ataku Google może przyspieszyć rozpatrywanie</li>
        <li>Zbieraj dowody: screenshoty profili autorów, daty, wzorce (podobne treści, nowe konta)</li>
        <li>Jeśli masz podstawy sądzić, że to działanie konkurencji — możesz zgłosić sprawę na policję (nieuczciwa konkurencja) lub skonsultować się z prawnikiem</li>
      </ul>

      <h2>Czego nie robić przy negatywnych opiniach</h2>
      <ul>
        <li><strong>Nie kupuj usług usuwania opinii</strong> — firmy obiecujące usunięcie „każdej" złej recenzji za pieniądze to oszuści. Google nie daje dostępu zewnętrznym podmiotom do moderacji opinii</li>
        <li><strong>Nie odpowiadaj emocjonalnie</strong> — agresywna lub defensywna odpowiedź szkodzi wizerunkowi bardziej niż sama opinia</li>
        <li><strong>Nie próbuj zakupić pozytywnych opinii</strong> — to naruszenie zasad Google i może skutkować zawieszeniem całego profilu</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Usunięcie negatywnej opinii jest możliwe — ale tylko wtedy, gdy narusza ona zasady Google.
        W pozostałych przypadkach najskuteczniejszym narzędziem jest profesjonalna odpowiedź
        i budowanie bazy pozytywnych recenzji, które zepchnęły tę jedną złą na dalsze miejsce.
      </p>
      <ul>
        <li><Link href="/negatywna-opinia-google-co-zrobic">Dostałem negatywną opinię — co teraz? Plan działania</Link></li>
        <li><Link href="/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Dostałem negatywną opinię na wizytówce Google – co zrobić?
  ───────────────────────────────────────────────────────────────────────── */
  "negatywna-opinia-google-co-zrobic": (
    <>
      <h2>Spokojnie. To nie koniec świata — ale wymaga działania</h2>
      <p>
        Pierwsza reakcja na negatywną recenzję to często emocje: złość, defensywność, chęć
        natychmiastowej odpowiedzi. To zrozumiałe — ale działanie pod wpływem emocji jest
        największym błędem, jaki możesz popełnić. Potencjalni klienci czytają nie tylko samą
        opinię, ale <strong>przede wszystkim to, jak na nią reagujesz</strong>.
      </p>
      <p>
        Badania pokazują, że profesjonalna odpowiedź na negatywną recenzję może odwrócić
        decyzję klienta — i sprawić, że ten, który pisał skargę, wróci. Oto plan działania
        krok po kroku.
      </p>

      <h2>Krok 1 – Przeczytaj uważnie i zidentyfikuj, o co chodzi</h2>
      <p>
        Przed jakąkolwiek akcją przeczytaj opinię kilka razy. Odpowiedz sobie na pytania:
      </p>
      <ul>
        <li>Czy rozpoznaję tego klienta? (data, opis sytuacji, inicjały)</li>
        <li>Czy zarzuty są konkretne, czy ogólnikowe?</li>
        <li>Czy opinia zawiera fakty, które mogę zweryfikować?</li>
        <li>Czy to klient z realnym doświadczeniem, czy potencjalnie fake review?</li>
      </ul>
      <p>
        Jeśli opinia wygląda na fałszywą (osoba nie jest Twoim klientem, konto bez historii,
        treść niespójna z rzeczywistością) — najpierw spróbuj ją zgłosić.{" "}
        <Link href="/jak-usunac-negatywne-opinie-z-google">Jak zgłaszać opinie do usunięcia — szczegółowy poradnik.</Link>
      </p>

      <h2>Krok 2 – Poczekaj co najmniej godzinę przed odpowiedzią</h2>
      <p>
        Jeśli opinia Cię zdenerwowała — nie odpowiadaj teraz. Daj sobie czas. Napisz
        odpowiedź w notesie (nie w panelu GBP), zostaw ją na godzinę, wróć i przeczytaj
        ze świeżą głową. Zapytaj kogoś zaufanego: „Czy ta odpowiedź brzmi profesjonalnie?"
      </p>

      <h2>Krok 3 – Napisz odpowiedź według sprawdzonej struktury</h2>
      <p>
        Dobra odpowiedź na negatywną recenzję składa się z czterech elementów:
      </p>
      <ol>
        <li>
          <strong>Podziękowanie</strong> za podzielenie się opinią (nawet jeśli negatywną —
          to sygnał, że zależy Ci na feedbacku)
        </li>
        <li>
          <strong>Przeproszenie</strong> za złe doświadczenie — nie tłumaczenie się, nie
          obwinianie klienta, tylko przyjęcie do wiadomości, że doświadczenie było złe
        </li>
        <li>
          <strong>Krótkie wyjaśnienie</strong> (jeśli masz realną i spokojną rację) —
          jednym zdaniem, bez wchodzenia w detale publicznie
        </li>
        <li>
          <strong>Zaproszenie do kontaktu</strong> — podaj email lub telefon i zaproś
          do bezpośredniej rozmowy o rozwiązaniu
        </li>
      </ol>
      <p>
        Przykład: <em>„Dziękujemy za opinię, Panie Janie. Przykro nam, że wizyta nie spełniła
        oczekiwań. Zależy nam na każdym kliencie i chcielibyśmy wyjaśnić tę sytuację
        bezpośrednio. Proszę o kontakt na adres kontakt@firma.pl lub telefonicznie."</em>
      </p>

      <h2>Krok 4 – Nigdy nie rób tych rzeczy</h2>
      <ul>
        <li><strong>Nie kłóć się publicznie</strong> — nawet jeśli klient kłamie. Inni to czytają i oceniają Ciebie, nie klienta</li>
        <li><strong>Nie ujawniaj danych klienta</strong> — nawet jeśli możesz udowodnić, że opinia jest niesprawiedliwa. To naruszenie RODO i psuje wizerunek</li>
        <li><strong>Nie proś o usunięcie opinii w odpowiedzi</strong> — to wygląda defensywnie i podnosi zainteresowanie recenzją</li>
        <li><strong>Nie kopiuj szablonowej odpowiedzi</strong> — „Drogi Kliencie, dziękujemy za Twoją opinię..." brzmi jak automat i nikt w to nie wierzy</li>
        <li><strong>Nie zwlekaj tygodniami</strong> — odpowiedź po miesiącu wygląda jakbyś nie monitorował profilu</li>
      </ul>

      <h2>Krok 5 – Spróbuj rozwiązać problem offline</h2>
      <p>
        Jeśli klient skontaktuje się przez email lub telefon, masz szansę zamienić negatywne
        doświadczenie w pozytywne. Uznaj reklamację (jeśli zasadna), zaproponuj konkretne
        rozwiązanie: rabat, ponowną usługę, zwrot części kosztów. Część klientów, których
        problem zostanie rozwiązany, z własnej inicjatywy zmienia ocenę lub usuwa złą opinię.
      </p>

      <h2>Perspektywa długoterminowa: jedna opinia nie zniszczy firmy</h2>
      <p>
        Jedna negatywna recenzja wśród 50 pozytywnych ma minimalny wpływ na decyzje klientów —
        a niektórzy badacze twierdzą, że kilka złych opinii wśród wielu dobrych wzmacnia
        wiarygodność profilu (bo pokazuje, że recenzje są autentyczne, a nie kupione).
        Najlepszą odpowiedzią na negatywną opinię jest <strong>budowanie bazy pozytywnych recenzji</strong>.
      </p>
      <ul>
        <li><Link href="/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia klientów</Link></li>
        <li><Link href="/jak-usunac-negatywne-opinie-z-google">Kiedy i jak usunąć negatywną opinię z Google?</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Czy wizytówka Google jest płatna?
  ───────────────────────────────────────────────────────────────────────── */
  "czy-wizytowka-google-jest-platna": (
    <>
      <h2>Odpowiedź: Google Business Profile jest w 100% bezpłatny</h2>
      <p>
        Google Business Profile (dawniej Google Moja Firma) jest <strong>bezpłatny dla każdej
        legalnie działającej firmy</strong>. Nie ma planu podstawowego i premium, nie ma miesięcznej
        subskrypcji, nie ma opłaty za weryfikację, nie ma limitu zdjęć ani postów, które trzeba
        „odblokować". Wszystkie funkcje są dostępne bez kosztów.
      </p>
      <p>
        Jeśli ktoś próbuje Ci sprzedać „pakiet GBP", „odnowienie wizytówki" albo „płatną
        weryfikację Google" — to oszustwo. Więcej o tym schemacie w artykule:{" "}
        <Link href="/wizytowka-google-nie-wygasa-oszustwo">Czy wizytówka Google wygasa? NIE — to oszustwo.</Link>
      </p>

      <h2>Za co naprawdę płacisz w ekosystemie Google?</h2>
      <p>
        Warto rozróżnić bezpłatne i płatne narzędzia Google dla firm:
      </p>

      <h3>Bezpłatne</h3>
      <ul>
        <li><strong>Google Business Profile</strong> — wizytówka, mapa, opinie, zdjęcia, posty, Q&amp;A</li>
        <li><strong>Google Search Console</strong> — analiza widoczności strony w organicznych wynikach wyszukiwania</li>
        <li><strong>Google Analytics</strong> — statystyki ruchu na stronie</li>
        <li><strong>Google Merchant Center</strong> (warstwa podstawowa) — wystawianie produktów w Google Shopping</li>
      </ul>

      <h3>Płatne</h3>
      <ul>
        <li><strong>Google Ads</strong> — reklamy w wyszukiwarce, YouTube, sieci reklamowej. Płacisz za kliknięcia (CPC) lub wyświetlenia (CPM)</li>
        <li><strong>Google Hotel Ads</strong> — płatna integracja cen dla hoteli w Google Hotels</li>
        <li><strong>Google Workspace</strong> — firmowy email, Drive, Meet (od 6 USD/użytkownik/miesiąc)</li>
      </ul>

      <h2>GBP vs Facebook — co daje więcej za darmo?</h2>
      <p>
        To porównanie, które warto przeprowadzić uczciwie. Facebook Business Page (fanpage) jest
        również <strong>bezpłatny</strong> do założenia. Ale tu podobieństwa się kończą:
      </p>
      <ul>
        <li>
          <strong>Organiczny zasięg na Facebooku</strong> wynosi dziś 2–5% obserwujących. Post
          widziany przez kogoś, kto jeszcze nie jest fanem strony? Praktycznie zerowy zasięg.
          Aby dotrzeć do nowych klientów, musisz płacić za Facebook Ads.
        </li>
        <li>
          <strong>GBP jest widoczny dla każdego</strong>, kto szuka Twojej branży lokalnie —
          bez żadnego budżetu reklamowego. Klient, który nigdy o Tobie nie słyszał, zobaczy Twój
          profil jeśli jest dobrze zoptymalizowany.
        </li>
        <li>
          <strong>Intencja zakupowa</strong> w Google jest wyższa niż na Facebooku. Użytkownik
          Google szuka aktywnie usługi lub produktu. Użytkownik Facebooka przewija tablicę —
          reklama go przerywa, niekoniecznie w momencie gdy chce kupić.
        </li>
      </ul>

      <h2>GBP vs Google Ads — jaka różnica?</h2>
      <p>
        Google Ads to <strong>płatna reklama</strong> — Twoja firma pojawia się na górze wyników
        (oznaczona „Sponsorowane") za każdym razem, gdy ktoś wyszukuje wybrane przez Ciebie
        słowa kluczowe. Płacisz za każde kliknięcie.
      </p>
      <p>
        GBP to <strong>bezpłatna obecność organiczna</strong> — Twoja firma pojawia się w
        Local Pack i Google Maps na podstawie trafności, lokalizacji i pozycji. Nie płacisz
        za wyświetlenia ani kliknięcia.
      </p>
      <p>
        Obie metody się uzupełniają: GBP buduje długoterminową, bezkosztową widoczność, a
        Google Ads daje natychmiastowe wyniki przy wyższej konkurencji lub nowych produktach.
        Firmy z ograniczonym budżetem powinny zacząć od maksymalnego wykorzystania GBP zanim
        zainwestują w reklamy.
      </p>

      <h2>Ile naprawdę „kosztuje" GBP — czas</h2>
      <p>
        Bezpłatny nie znaczy „bez nakładu". Skuteczne prowadzenie profilu GBP wymaga czasu:
        uzupełnienia profilu (jednorazowo 2–4 godziny), regularnego zbierania opinii (ciągłe),
        dodawania zdjęć (2–4 godziny miesięcznie) i publikowania postów (30–60 minut tygodniowo).
        Jeśli nie masz czasu, możesz zlecić prowadzenie GBP specjalistowi local SEO.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Google Business Profile jest bezpłatny, widoczny dla klientów bez płacenia za zasięg
        i działa na wysokiej intencji zakupowej. To najbardziej opłacalne narzędzie marketingowe
        dla lokalnych firm — niezależnie od budżetu. Jeśli chcesz wycisnąć z niego maksimum:
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        <li><Link href="/opis-firmy-google-business-profile-jak-napisac">Jak napisać opis firmy w GBP, który przyciąga klientów?</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Opłata administracyjna za wizytówkę Google
  ───────────────────────────────────────────────────────────────────────── */
  "oplata-administracyjna-wizytowka-google": (
    <>
      <h2>„Opłata administracyjna za wizytówkę Google" — to przekręt</h2>
      <p>
        Jeśli trafiłeś na tę stronę po tym, jak dostałeś fakturę lub telefon z żądaniem
        uiszczenia „opłaty administracyjnej" za utrzymanie, weryfikację lub aktywację wizytówki
        Google — mamy dla Ciebie ważną informację: <strong>nie istnieje żadna opłata
        administracyjna za Google Business Profile.</strong> Nigdy nie istniała i nie zostanie
        wprowadzona.
      </p>
      <p>
        To wariant klasycznego oszustwa, które od ponad dekady atakuje właścicieli małych firm.
        Sama nazwa „opłata administracyjna" jest celowo neutralna i brzmi urzędowo, żeby
        ofiara nie rozpoznała przekrętu. Jest to sformułowanie stosowane przez oszustów w Polsce
        i na świecie w setkach podobnych schematów.
      </p>

      <h2>Jak wygląda ten schemat w praktyce?</h2>
      <p>
        Schemat ma kilka wariantów, ale każdy działa na tej samej zasadzie:
      </p>

      <h3>Wariant faktura pocztowa lub email</h3>
      <p>
        Przychodzi dokument wyglądający jak oficjalna faktura. Nagłówek może brzmieć: „Rejestr
        Wizytówek Google", „Panel Google Business", „Centrum Firm Google", „Usługi Google Maps"
        lub podobnie. Na dokumencie widnieje kwota (najczęściej 300–1200 zł), termin płatności
        i numer konta bankowego.
      </p>
      <p>
        Kluczowy detal, który zdradzają wszystkie te faktury: <strong>nie są wystawione przez
        Google LLC</strong>. Są wystawione przez fikcyjne lub prawdziwe polskie spółki o
        mylących nazwach. Google nie wystawia faktur za GBP, bo GBP jest bezpłatne.
      </p>

      <h3>Wariant telefoniczny</h3>
      <p>
        Dzwoni osoba podająca się za „konsultanta", „weryfikatora" lub „pracownika działu
        technicznego Google". Informuje, że musi pobrać opłatę administracyjną, żeby
        Twój profil pozostał aktywny lub żeby przejść obowiązkową aktualizację systemu.
        Często podaje szczegóły Twojej firmy (publicznie dostępne z GBP), żeby brzmieć
        wiarygodnie.
      </p>

      <h2>Jak odróżnić prawdziwą komunikację od Google?</h2>
      <p>
        Google komunikuje się z właścicielami GBP wyłącznie:
      </p>
      <ul>
        <li>Przez powiadomienia w panelu GBP (business.google.com)</li>
        <li>Przez email na adres powiązany z kontem Google — zawsze z domeny <strong>@google.com</strong></li>
        <li>Przez fizyczną kartę pocztową (tylko podczas procesu weryfikacji nowego profilu)</li>
      </ul>
      <p>
        Google <strong>nigdy</strong> nie dzwoni proaktywnie, nie wysyła faktur za GBP i nie
        korzysta z zewnętrznych agentów do pobierania „opłat administracyjnych".
      </p>

      <h2>Co zrobić z taką fakturą?</h2>
      <ul>
        <li><strong>Nie płać</strong> — nawet jeśli faktura wydaje się oficjalna</li>
        <li><strong>Nie dzwoń pod podany numer</strong> — rozmowa może być nagrywana jako „potwierdzenie zamówienia"</li>
        <li><strong>Zachowaj dokument</strong> jako dowód i zgłoś sprawę na policję lub do UOKiK</li>
        <li><strong>Sprawdź w CEIDG/KRS</strong> — pod jakimi danymi jest zarejestrowana firma wystawiająca fakturę. Jeśli znajdziesz — kontakt z firmą i żądanie wyjaśnień (w Polsce sprzedaż usług, których świadomie się nie zamawiało, jest nielegalna)</li>
        <li><strong>Ostrzeż innych</strong> — na forach branżowych, w grupach na Facebooku, przez recenzje — Twoje zgłoszenie może uchronić inne firmy</li>
      </ul>

      <h2>A jeśli już zapłaciłeś?</h2>
      <p>
        Natychmiast skontaktuj się z bankiem i zgłoś przelew jako potencjalne oszustwo. W
        przypadku przelewów krajowych bank może wstrzymać operację, jeśli zadzwonisz szybko.
        Złóż zawiadomienie na policji o możliwości popełnienia przestępstwa z artykułu 286
        Kodeksu Karnego (oszustwo). Kwota może się wydawać mała, żeby nie warto było działać —
        ale właśnie na to liczą sprawcy. Każde zgłoszenie pomaga.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Opłata administracyjna za wizytówkę Google nie istnieje. Każda faktura lub telefon
        z takim żądaniem to oszustwo. Google Business Profile jest bezpłatny — bez wyjątków,
        bez ukrytych kosztów, bez dat wygaśnięcia. Więcej o bezpieczeństwie profilu GBP:
      </p>
      <ul>
        <li><Link href="/wizytowka-google-nie-wygasa-oszustwo">Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat</Link></li>
        <li><Link href="/wizytowka-google-popularne-oszustwa">Inne popularne oszustwa związane z GBP</Link></li>
        <li><Link href="/czy-wizytowka-google-jest-platna">Czy wizytówka Google jest płatna? Szczegółowe porównanie</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Gdzie pozyskiwać linki do wizytówki Google?
  ───────────────────────────────────────────────────────────────────────── */
  "linki-do-wizytowki-google": (
    <>
      <h2>Czy linki do profilu GBP naprawdę pomagają?</h2>
      <p>
        Tak — choć mechanizm jest inny niż w przypadku linków do strony www. Linki prowadzące
        bezpośrednio do profilu Google Business Profile nie wpływają na pozycję w wynikach
        organicznych (tam liczy się link do strony, nie do GBP). Ale mają dwa inne efekty:
      </p>
      <ul>
        <li>
          <strong>Generują kliknięcia i wizyty na profilu</strong> — a sygnały zaangażowania
          (wyświetlenia, kliknięcia „Zadzwoń", „Wyznacz trasę") są brane pod uwagę przez
          algorytm Local Pack
        </li>
        <li>
          <strong>Ułatwiają klientom zostawienie opinii</strong> — bezpośredni link do strony
          opinii skraca drogę do recenzji z kilku kroków do jednego kliknięcia
        </li>
      </ul>
      <p>
        Poniżej znajdziesz 8 miejsc, gdzie warto umieszczać link do GBP — większość jest
        bezpłatna i wymaga tylko kilku minut konfiguracji.
      </p>

      <h2>1. Twoja własna strona internetowa</h2>
      <p>
        Najważniejsze i najbardziej kontrolowane przez Ciebie miejsce. Dodaj link do profilu
        GBP w co najmniej dwóch miejscach: w stopce (widoczna na każdej podstronie) i na
        stronie kontaktowej. Możesz użyć widżetu Google Maps (osadzenie mapy z pinezką
        Twojej firmy) lub prostego przycisku „Sprawdź nas na Google Maps".
      </p>
      <p>
        Bonus: link do profilu opinii Google (bezpośrednio do strony pisania recenzji) jako
        CTA na stronie — np. „Wyraź swoją opinię".
      </p>

      <h2>2. Profile w mediach społecznościowych</h2>
      <p>
        Facebook, Instagram, LinkedIn, TikTok — każdy profil biznesowy ma pole „Strona
        internetowa" lub „Link w bio". Możesz tam umieścić link do GBP zamiast (lub obok)
        linku do strony www. Na Instagramie możesz użyć linktree z wieloma linkami,
        w tym do profilu Google.
      </p>

      <h2>3. Stopka emailowa</h2>
      <p>
        Każdy email, który wysyłasz do klienta, to okazja do linku. Dodaj do stopki email
        ikonę Google Maps lub tekst „Oceń nas w Google" z linkiem do strony opinii.
        Przy dużej liczbie emaili wysyłanych dziennie to znaczące źródło kliknięć.
      </p>

      <h2>4. Podpis w fakturach i dokumentach</h2>
      <p>
        Faktury, umowy, potwierdzenia zamówień — dokumenty, które regularnie trafiają do
        klientów. Krótka linijka „Oceń nasze usługi: [link]" lub QR kod w stopce dokumentu
        to nieinwazyjna prośba o recenzję w momencie, gdy transakcja jest jeszcze świeża.
      </p>

      <h2>5. Kody QR w materiałach drukowanych</h2>
      <p>
        Wizytówki, ulotki, menu restauracyjne, tabliczki przy wejściu, receipty — wszędzie
        tam, gdzie masz kontakt fizyczny z klientem. QR kod prowadzący bezpośrednio do
        strony opinii Google to jedna z najskuteczniejszych metod zbierania recenzji.
        Kod możesz wygenerować bezpłatnie bezpośrednio z panelu GBP.
      </p>

      <h2>6. Katalogi firm i portale branżowe</h2>
      <p>
        Wiele katalogów firm (Panorama Firm, Aleo, Yelp, portale branżowe) pozwala
        umieszczać linki do zewnętrznych profili. Dodaj link do GBP wszędzie tam, gdzie
        masz wypełniony profil. To wzmacnia spójność obecności online i kieruje ruch
        na profil Google.
      </p>

      <h2>7. Strony partnerskie i dostawcy</h2>
      <p>
        Jeśli współpracujesz z innymi firmami, które mają strony www — zapytaj, czy mogą
        umieścić wzmiankę o Twojej firmie z linkiem do GBP (lub do strony www).
        Wzajemne linki między komplementarnymi firmami (np. fotograf ślubny i kwiaciarnia)
        są naturalnym sygnałem budującym widoczność obu stron.
      </p>

      <h2>8. SMS i komunikatory po realizacji usługi</h2>
      <p>
        Bezpośredni link do strony opinii wysłany SMS-em lub WhatsApp po zakończeniu usługi.
        Link możesz skrócić przez bit.ly. To najskuteczniejszy kanał zbierania opinii —
        klient jest w miejscu i czasie, gdy emocje z usługi są najświeższe.
        <Link href="/opinie-google-jak-zdobywac-skutecznie"> Więcej o zbieraniu opinii przez SMS i WhatsApp.</Link>
      </p>

      <h2>Jak znaleźć swój link do profilu GBP?</h2>
      <p>
        W panelu Google Business Profile (business.google.com) przejdź do sekcji „Opinie" →
        „Pobierz więcej opinii". Zobaczysz tam skrócony link do Twojej strony opinii, gotowy
        do skopiowania i udostępnienia. To bezpośredni link do formularza recenzji.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Linki do GBP to prosta i bezkosztowa metoda zwiększenia widoczności i liczby opinii.
        Skonfiguruj te 8 źródeł raz — i będą pracować za Ciebie przez długi czas.
      </p>
      <ul>
        <li><Link href="/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia</Link></li>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Pełny przewodnik po pozycjonowaniu wizytówki Google</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Ile kosztuje pozycjonowanie strony internetowej?
  ───────────────────────────────────────────────────────────────────────── */
  "ile-kosztuje-pozycjonowanie-strony-internetowej": (
    <>
      <h2>Dlaczego ceny SEO różnią się tak drastycznie?</h2>
      <p>
        Od 300 do 30 000 zł miesięcznie — i obie kwoty możesz spotkać na polskim rynku SEO.
        Tak duże rozpiętość cen wynika z ogromnych różnic w zakresie usługi, doświadczeniu
        specjalisty, konkurencyjności branży i skali projektu. Nie istnieje jedna „uczciwa
        cena" SEO — ale istnieją czerwone flagi, które pomagają rozpoznać zarówno przekręty,
        jak i przepłacanie.
      </p>

      <h2>Co składa się na koszt SEO?</h2>
      <p>
        Pozycjonowanie to nie jedna czynność, a pakiet działań wymagających różnych umiejętności:
      </p>
      <ul>
        <li><strong>Audyt techniczny strony</strong> — szybkość, mobile, indeksowanie, struktury URL, duplikaty</li>
        <li><strong>Badanie słów kluczowych</strong> — analiza fraz, intencji zakupowych, konkurencji</li>
        <li><strong>Tworzenie treści</strong> — artykuły blogowe, opisy kategorii, landing pages</li>
        <li><strong>Link building</strong> — pozyskiwanie linków z wartościowych domen</li>
        <li><strong>Optymalizacja on-page</strong> — meta tagi, nagłówki, wewnętrzne linkowanie</li>
        <li><strong>Raportowanie</strong> — miesięczny raport z wyników, pozycji, ruchu</li>
        <li><strong>Local SEO</strong> — optymalizacja GBP, cytowania, NAP (opcjonalnie)</li>
      </ul>

      <h2>Przedziały cenowe — co dostaniesz za ile</h2>

      <h3>300–800 zł miesięcznie — najtaniej, ale czy warto?</h3>
      <p>
        W tej cenie możesz dostać: bardzo podstawową optymalizację, kilka postów blogowych
        miesięcznie generowanych przez AI bez głębokiej edycji, raport z narzędzia (nie
        prawdziwą analizę). Dla witryn lokalnych w niskiej konkurencji może być wystarczające.
        Dla firm w konkurencyjnych branżach — za mało, żeby zobaczyć efekty.
      </p>

      <h3>1 000–3 000 zł miesięcznie — solidny freelancer lub mała agencja</h3>
      <p>
        To zakres, gdzie zaczyna się realne SEO: regularny content plan, techniczny audyt na
        początku współpracy, aktywny link building (3–5 linków miesięcznie), miesięczny raport
        z analizą. Dla MŚP i lokalnych firm to często optymalny punkt.
      </p>

      <h3>3 000–8 000 zł miesięcznie — agencja SEO</h3>
      <p>
        Dedykowany specjalista, szerszy zakres contentu, agresywniejszy link building,
        bardziej szczegółowe analizy. Uzasadnione dla firm w średnio-konkurencyjnych branżach,
        e-commerce z kilkuset produktami, firm B2B z długim cyklem sprzedaży.
      </p>

      <h3>8 000+ zł miesięcznie — projekty enterprise</h3>
      <p>
        Duże sklepy internetowe, marki ogólnopolskie, branże o bardzo wysokiej konkurencji
        (finanse, prawo, medycyna). Cały zespół: SEO specjalista, copywriter, developer, PR/link builder.
      </p>

      <h2>Ile czasu zajmuje, żeby zobaczyć efekty?</h2>
      <p>
        SEO to inwestycja długoterminowa. Pierwsze zmiany pozycji pojawiają się zazwyczaj
        po <strong>3–4 miesiącach</strong>. Wyraźny wzrost ruchu i konwersji — po 6–12 miesiącach.
        Projekty w bardzo konkurencyjnych branżach mogą wymagać 18–24 miesięcy ciągłej pracy.
        Firmy obiecujące „efekty po 2 tygodniach" kłamią.
      </p>

      <h2>Jak wyliczyć ROI z SEO?</h2>
      <p>
        Zanim podpiszesz umowę, zrób proste obliczenie:
      </p>
      <ol>
        <li>Jaka jest średnia wartość klienta pozyskanego online?</li>
        <li>Ile klientów miesięcznie pozyskujesz teraz organicznie?</li>
        <li>Ile klientów miesięcznie potrzebujesz pozyskać, żeby SEO się zwróciło?</li>
      </ol>
      <p>
        Przykład: firma usługowa z klientem wartym 2 000 zł. Wydaje 2 000 zł/miesiąc na SEO.
        SEO zwraca się już przy pozyskaniu 1 nowego klienta miesięcznie z wyszukiwarki.
        Każdy kolejny to czysty zysk z kanału, który rośnie bez proporcjonalnego wzrostu kosztów.
      </p>

      <h2>Czerwone flagi — unikaj tych ofert</h2>
      <ul>
        <li>„Gwarantujemy 1. miejsce w Google" — niemożliwe, Google tego nie gwarantuje nikomu</li>
        <li>Cena poniżej 500 zł za „pełne SEO" — nikt nie pracuje efektywnie za taką kwotę</li>
        <li>Brak raportu miesięcznego w ofercie — jak będziesz wiedzieć, za co płacisz?</li>
        <li>Umowa na 12 miesięcy z karą za zerwanie bez klauzuli wyników — ryzyko po Twojej stronie</li>
        <li>Tajemnica metodologii — uczciwy specjalista tłumaczy, co i dlaczego robi</li>
      </ul>

      <h2>SEO wizytówki Google vs SEO strony — co najpierw?</h2>
      <p>
        Dla lokalnych firm odpowiedź jest prosta: najpierw{" "}
        <Link href="/jak-pozycjonowac-wizytowke-google-2026">optymalizacja wizytówki Google</Link>{" "}
        (bezpłatna, szybsze efekty), potem SEO strony www (płatne, długoterminowe). GBP
        przynosi klientów lokalnych bez budżetu. SEO strony skaluje widoczność na szerszy rynek.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Koszt SEO powinien być dopasowany do Twoich celów, skali firmy i konkurencyjności
        branży. Zamiast szukać najtaniej — szukaj specjalisty, który potrafi wyjaśnić
        co robi i pokazać rzeczywiste efekty poprzednich projektów.
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — bezpłatny punkt startowy</Link></li>
        <li><Link href="/siedziba-mala-miejscowosc-local-seo">Local SEO dla firm z siedzibą poza dużym miastem</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Reklama kancelarii adwokackiej w Google
  ───────────────────────────────────────────────────────────────────────── */
  "reklama-kancelarii-adwokackiej-google": (
    <>
      <h2>Czy kancelaria adwokacka może reklamować się w Google?</h2>
      <p>
        Tak — od 2015 roku polskie samorządy zawodowe prawników (Naczelna Rada Adwokacka i
        Krajowa Rada Radców Prawnych) dopuszczają reklamę usług prawnych z zachowaniem zasad
        etyki zawodowej. Oznacza to, że adwokat lub radca prawny może legalnie prowadzić kampanie
        Google Ads i Google Business Profile — pod warunkiem, że reklama jest <strong>rzetelna,
        godna zawodu i nie narusza Kodeksu Etyki</strong>.
      </p>

      <h2>Czego nie wolno w reklamie prawniczej?</h2>
      <p>
        Zasady etyki zawodowej nakładają konkretne ograniczenia, których musisz przestrzegać:
      </p>
      <ul>
        <li><strong>Zakaz rekomendacji i testimoniali</strong> — nie możesz cytować opinii klientów z imienia i nazwiska ani używać ich jako referencji bez ich świadomej zgody</li>
        <li><strong>Zakaz porównywania z konkurencją</strong> — nie możesz twierdzić, że Twoja kancelaria jest „lepsza", „tańsza" czy „skuteczniejsza" od innych</li>
        <li><strong>Zakaz gwarantowania wyników</strong> — nie możesz obiecywać wygranej sprawy ani konkretnego odszkodowania</li>
        <li><strong>Obowiązek godności</strong> — reklama musi być utrzymana w poważnym, profesjonalnym tonie</li>
        <li><strong>Zakaz reklamy nachalnej i wprowadzającej w błąd</strong></li>
      </ul>

      <h2>Google Business Profile dla kancelarii — fundament lokalnego SEO</h2>
      <p>
        Klienci szukający prawnika najczęściej wpisują frazy lokalne: „adwokat Kraków sprawy
        rodzinne", „radca prawny Warszawa prawo pracy". Profil GBP z dobrą oceną i precyzyjnymi
        kategoriami to bezpłatny sposób na pojawienie się w tych wynikach.
      </p>
      <p>
        Dla kancelarii szczególnie ważne:
      </p>
      <ul>
        <li><strong>Kategoria główna</strong>: „Adwokat" lub „Kancelaria prawna" lub „Radca prawny"</li>
        <li><strong>Kategorie dodatkowe</strong>: specjalizacje — „Prawnik specjalizujący się w prawie rodzinnym", „Prawnik ds. odszkodowań" itp.</li>
        <li><strong>Opis firmy</strong>: specjalizacje, obszar obsługi (sądy, których dotyczy praktyka), doświadczenie — bez gwarantowania wyników</li>
        <li><strong>Godziny otwarcia</strong>: w tym dostępność telefoniczna poza biurem</li>
        <li><strong>Zdjęcia</strong>: sala konferencyjna, biuro (buduje zaufanie), zespół w profesjonalnym ujęciu</li>
      </ul>

      <h2>Google Ads dla kancelarii — jak to działa?</h2>
      <p>
        Słowa kluczowe związane z prawem należą do najdroższych w Google Ads — CPC (koszt
        za kliknięcie) w Polsce może wynosić od 5 do 50+ zł dla fraz takich jak „adwokat
        karny Warszawa" czy „odszkodowanie za wypadek". Wynika to z wysokiej wartości klienta
        dla kancelarii.
      </p>
      <p>
        Kluczowe elementy kampanii Google Ads dla kancelarii:
      </p>
      <ul>
        <li><strong>Targetowanie lokalne</strong> — ogranicz kampanię do obszaru, w którym faktycznie prowadzisz praktykę (promień lub konkretne miasto/region)</li>
        <li><strong>Słowa kluczowe z intencją</strong> — frazy takie jak „adwokat sprawa karna Kraków" mają wyższą intencję zakupową niż ogólne „prawo karne"</li>
        <li><strong>Rozszerzenia reklam</strong> — numer telefonu (call extension) jest kluczowy; klienci w sprawach pilnych dzwonią, nie klikają</li>
        <li><strong>Landing page</strong> — strona docelowa musi być spójna z reklamą i zawierać jasne CTA: bezpłatna konsultacja, formularz kontaktowy, numer telefonu</li>
        <li><strong>Czas emisji</strong> — ogranicz wyświetlanie do godzin pracy kancelarii lub godzin, kiedy ktoś jest dostępny do odebrania telefonu</li>
      </ul>

      <h2>Content marketing — alternatywa dla drogich reklam</h2>
      <p>
        Blog prawniczy z artykułami odpowiadającymi na pytania klientów to długoterminowa
        alternatywa dla kosztownych reklam. Artykuły takie jak „Jak przebiega rozwód w Polsce?"
        lub „Kiedy pracodawca może zwolnić dyscyplinarnie?" przyciągają ruch organiczny bez
        kosztów CPC — i budują wizerunek eksperta. To szczególnie wartościowe w kontekście
        Kodeksu Etyki, który ogranicza bezpośrednią promocję.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Marketing kancelarii adwokackiej w Google jest możliwy, legalny i skuteczny — przy
        zachowaniu zasad etyki zawodowej. Zacznij od bezpłatnego GBP, uzupełnij go o content
        marketing, a Google Ads używaj jako uzupełnienie przy specjalizacjach o wysokiej
        wartości klienta.
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — podstawy dla każdej branży</Link></li>
        <li><Link href="/opis-firmy-google-business-profile-jak-napisac">Jak napisać opis kancelarii w GBP zgodnie z zasadami etyki</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Jak promować warsztat samochodowy w Google?
  ───────────────────────────────────────────────────────────────────────── */
  "jak-promowac-warsztat-samochodowy-google": (
    <>
      <h2>Dlaczego klient warsztatu szuka „tu i teraz"?</h2>
      <p>
        Użytkownik z przebitą oponą, z samochodem, który nie odpala, lub który właśnie
        skończył badanie techniczne i szuka kolejnego przeglądu — to ktoś, kto szuka
        natychmiast i lokalnie. Frazy takie jak „warsztat samochodowy Wola", „opony Kraków
        dziś" czy „mechanik 24h Gdańsk" to zapytania o bardzo wysokiej intencji zakupowej.
      </p>
      <p>
        Dla warsztatu samochodowego Google Business Profile jest prawdopodobnie najważniejszym
        kanałem marketingowym — ważniejszym niż strona www, ważniejszym niż social media.
        Klient w nagłej potrzebie szuka w Google Maps, nie na Facebooku.
      </p>

      <h2>Optymalizacja GBP dla warsztatu — specyfika branży</h2>

      <h3>Kategoria główna</h3>
      <p>
        Dobierz precyzyjnie: „Warsztat samochodowy", „Mechanik samochodowy", „Sklep z oponami",
        „Blacharnia samochodowa", „Elektromechanik". Nie bierz ogólnej kategorii, jeśli masz
        specjalizację — algorytm faworyzuje precyzję.
      </p>

      <h3>Usługi — wypełnij każdą pozycję</h3>
      <p>
        GBP dla warsztatu pozwala dodać listę usług z cenami lub zakresami cenowymi. To
        ogromna szansa: klient widzi, że robisz wymianę rozrządu, naprawę klimatyzacji i
        geometrię kół — bez wchodzenia na stronę. Dodaj wszystkie usługi, które świadczysz,
        z krótkim opisem każdej.
      </p>

      <h3>Godziny otwarcia</h3>
      <p>
        Dla warsztatu szczególnie ważna jest rzetelność w godzinach — klient nie zadzwoni
        do warsztatu, który jest „zamknięty" według Google, nawet jeśli pracujesz. Jeśli
        przyjmujesz awaryjnie poza godzinami, zaznacz to w opisie.
      </p>

      <h2>Zdjęcia, które budują zaufanie warsztatu</h2>
      <p>
        Klient oddający samochód do warsztatu powierza Ci wartościowe mienie. Zdjęcia
        powinny budować zaufanie — czystość, profesjonalizm, nowoczesność sprzętu:
      </p>
      <ul>
        <li>Hala warsztatowa — czysta, zorganizowana, z widocznym sprzętem</li>
        <li>Podnośniki, diagnostyki — świadczą o wyposażeniu</li>
        <li>Mechanicy przy pracy (z zgodą) — humanizuje firmę</li>
        <li>Zdjęcia „przed i po" — blacharnia, lakiernia, instalacje</li>
        <li>Certyfikaty, szkolenia na ścianie — jeśli masz autoryzację producenta</li>
      </ul>

      <h2>Opinie — kluczowe dla warsztatu</h2>
      <p>
        „Mechanik, któremu mogę zaufać" — to fraza, którą klient wyszukuje w głowie, patrząc
        na recenzje. Opinie dla warsztatu powinny wspominać o uczciwości wyceny, jakości
        naprawy i terminowości. Proś klientów o opinię przez SMS od razu po odbiorze
        samochodu — moment, gdy emocje są świeże i zadowolenie (lub niezadowolenie) najsilniejsze.
      </p>
      <p>
        Odpowiadaj na każdą opinię. W odpowiedzi na pozytywną — wspomnij o konkretnym typie
        naprawy (to naturalny keyword): „Cieszę się, że wymiana rozrządu w Pana Volkswagennie
        przebiegła sprawnie". To pomaga w pozycjonowaniu na te frazy.
      </p>

      <h2>Google Ads dla warsztatu — kiedy warto?</h2>
      <p>
        Jeśli GBP działa, ale chcesz więcej klientów w krótkim czasie lub chcesz wyprzedzić
        konkretnych konkurentów — Google Ads to dobre uzupełnienie. Kluczowe ustawienia:
      </p>
      <ul>
        <li><strong>Kampania lokalna</strong> — promowanie wizytówki GBP (dawne Local Services Ads) zamiast odesłania na stronę</li>
        <li><strong>Targetowanie: promień 5–10 km</strong> od warsztatu — klienci nie jeżdżą dalej</li>
        <li><strong>Rozszerzenie wywołania</strong> — kliknięcie w numer telefonu bezpośrednio z reklamy. Dla warsztatu konwersja przez telefon jest kluczowa</li>
        <li><strong>Słowa kluczowe awaryjne</strong>: „mechanik dziś", „naprawa awaryjna", „opony dziś Warszawa"</li>
        <li><strong>Harmonogram</strong>: wyświetlaj reklamy tylko w godzinach pracy warsztatu</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Warsztat samochodowy w Google wygrywa przez precyzję: dokładne kategorie, pełna lista
        usług z cenami, budujące zaufanie zdjęcia i regularnie zbierane opinie. To wystarczy,
        żeby wejść do Local Pack i odbierać klientów bez kosztów reklamowych.
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Pełny przewodnik po pozycjonowaniu wizytówki Google</Link></li>
        <li><Link href="/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google skutecznie</Link></li>
        <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">Jakie zdjęcia w GBP naprawdę pomagają?</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Salon kosmetyczny i Facebook Ads
  ───────────────────────────────────────────────────────────────────────── */
  "salon-kosmetyczny-facebook-ads": (
    <>
      <h2>Dlaczego salon kosmetyczny i reklamy Meta to idealne połączenie?</h2>
      <p>
        Salon kosmetyczny sprzedaje transformację — zmianę wyglądu, poczucie zadbania, efekt
        widoczny na zdjęciu. Facebook i Instagram to platformy w 100% wizualne, gdzie kobieta
        w wieku 25–55 lat spędza średnio 45 minut dziennie. To nie zbieg okoliczności —
        to najlepszy możliwy kontekst dla reklamy salonu piękności.
      </p>
      <p>
        Różnica między GBP a Facebook Ads: wizytówka Google łapie klientkę, gdy szuka
        aktywnie (wysoka intencja, ale mała skala). Facebook Ads buduje świadomość, pożądanie
        i lojalność — docierasz do kobiet, zanim jeszcze pomyślą o zapisaniu się na zabieg.
        Najlepsza strategia łączy oba kanały.
      </p>

      <h2>Kto jest Twoją klientką? — targetowanie na Meta</h2>
      <p>
        Dokładne targetowanie to klucz do opłacalności reklam. Dla salonu kosmetycznego podstawowe
        ustawienia:
      </p>
      <ul>
        <li><strong>Lokalizacja</strong>: promień 5–15 km od salonu (nie więcej — nikt nie jedzie przez całe miasto na manicure)</li>
        <li><strong>Wiek</strong>: 22–55 lat (dostosuj do swojej faktycznej grupy klientek)</li>
        <li><strong>Płeć</strong>: kobiety (choć nie wyklucz — niektóre zabiegi są unisex)</li>
        <li><strong>Zainteresowania</strong>: beauty, spa, pielęgnacja skóry, moda, wellness, konkretne marki kosmetyczne (Kerastase, OPI, Caci, Babor)</li>
        <li><strong>Zachowania</strong>: osoby, które polubiły podobne strony; osoby regularnie wchodzące w interakcje z treściami beauty</li>
      </ul>

      <h2>Najskuteczniejsze formaty reklam dla salonu</h2>

      <h3>Zdjęcia „przed i po"</h3>
      <p>
        Najwyższy CTR i najniższy koszt pozyskania klienta dla salonów beauty. Jedno zdjęcie
        lewej ręki z zaniedbanymi paznokciami obok prawej z idealnym manicure mówi więcej
        niż jakikolwiek tekst. Ważne zasady:
      </p>
      <ul>
        <li>Zawsze pytaj klientkę o zgodę na publikację</li>
        <li>Dobre oświetlenie — naturalne lub lightbox — to warunek konieczny</li>
        <li>Nie używaj filtrów ani nadmiernej edycji — Instagram to weryfikuje</li>
        <li>W reklamach Meta nie możesz używać „przed i po" dla efektów medycznych (np. lipoliza) — sprawdź zasady dla swojego zabiegu</li>
      </ul>

      <h3>Wideo i Reels</h3>
      <p>
        Krótkie wideo (15–30 sekund) z procesu zabiegu lub efektu końcowego. Format Reels
        ma organicznie wyższy zasięg na Instagramie — twórz je regularnie i część możesz
        booostować jako reklamy. Ciekawa kamera przy pracy, miłe wnętrze, efektowny finisz —
        to konwertuje.
      </p>

      <h3>Oferta / rabat na pierwsze odwiedziny</h3>
      <p>
        Reklama z konkretną ofertą: „-20% na pierwsze coloryzację", „bezpłatna konsultacja
        pielęgnacyjna". Dodaj licznik czasu lub informację o ograniczonej liczbie miejsc —
        buduje urgency bez bycia nachalnym. Prowadź reklamy z ofertami w poniedziałki
        i wtorki — to dni, kiedy ludzie planują tydzień i rezerwują terminy.
      </p>

      <h3>Retargeting — najniższy koszt pozyskania klienta</h3>
      <p>
        Ktoś odwiedził Twoją stronę lub profil, ale nie zapisał się — retargeting to reklama
        przypominająca o Tobie tej konkretnej osobie. Konfiguracja:
      </p>
      <ol>
        <li>Zainstaluj Meta Pixel na swojej stronie internetowej</li>
        <li>Utwórz niestandardową grupę odbiorców: „Osoby, które odwiedziły stronę w ciągu 30 dni"</li>
        <li>Pokaż im spersonalizowaną reklamę: „Widziałaś nas? Wróć i skorzystaj z -15%"</li>
      </ol>

      <h2>Budżet — od czego zacząć?</h2>
      <p>
        Dla lokalnego salonu nie potrzebujesz dużego budżetu, żeby zobaczyć efekty:
      </p>
      <ul>
        <li><strong>20–30 zł dziennie</strong> — testowanie reklam, budowanie grupy odbiorców, pierwsze rezerwacje z reklam (lokalny promień 5 km)</li>
        <li><strong>50–100 zł dziennie</strong> — skala, możliwość testowania kilku kreacji jednocześnie, budowanie lookalike audiences</li>
        <li>Poniżej 20 zł dziennie — Meta ogranicza optymalizację. Lepiej puścić kampanię przez 2 tygodnie z 30 zł/dzień niż ciągnąć przez 6 tygodni z 10 zł/dzień</li>
      </ul>

      <h2>Lookalike audiences — znajdź więcej klientek jak te, które już masz</h2>
      <p>
        Gdy zbierzesz bazę klientek (min. 100 rekordów: email lub numer telefonu), możesz
        wgrać ją do Menedżera Reklam Meta i stworzyć „grupę podobnych odbiorców" (Lookalike
        Audience 1%). Meta znajdzie kobiety w Twojej lokalizacji, których profil behawioralny
        jest najbardziej zbliżony do Twoich klientek. To jedna z najskuteczniejszych metod
        targetowania dostępna małym firmom.
      </p>

      <h2>Mierzenie efektów — co śledzić?</h2>
      <ul>
        <li><strong>Koszt za kliknięcie (CPC)</strong> — cel: poniżej 0,50–1 zł dla branży beauty</li>
        <li><strong>Koszt za rezerwację</strong> — jeśli masz formularz lub link do bookingu, śledź, ile kosztuje pozyskanie rezerwacji</li>
        <li><strong>ROAS</strong> (zwrot z wydatków reklamowych): jeśli wydajesz 1 000 zł na reklamy i pozyskujesz klientki za 5 000 zł usług — ROAS wynosi 5, co jest bardzo dobrym wynikiem</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Salon kosmetyczny i reklamy Facebook/Instagram to połączenie, które działa — bo
        sprzedajesz efekt wizualny na platformie wizualnej, targetując grupę demograficzną,
        która naturalnie tam przebywa. Kluczem jest jakość treści wizualnych, precyzyjne
        targetowanie lokalne i retargeting. Uzupełnij reklamy o dobrze zoptymalizowany
        profil Google:
      </p>
      <ul>
        <li><Link href="/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — dla salonów i usług lokalnych</Link></li>
        <li><Link href="/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google od klientek salonu?</Link></li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     5. NAP w wizytówce Google – czym jest i jak poprawnie ją skonfigurować?
  ───────────────────────────────────────────────────────────────────────── */
  "nap-wizytowka-google-co-to-jest": (
    <>
      <h2>Czym jest NAP i dlaczego to fundament local SEO?</h2>
      <p>
        NAP to skrót od angielskich słów <strong>Name, Address, Phone</strong> — nazwa firmy,
        adres i numer telefonu. Te trzy dane tworzą cyfrową tożsamość Twojego biznesu w internecie.
        Google i inne wyszukiwarki traktują je jak „odcisk palca" firmy — porównują je w setkach
        miejsc w sieci i na podstawie tej analizy oceniają wiarygodność Twojego profilu.
      </p>
      <p>
        Zasada jest prosta: <strong>im bardziej spójne dane NAP we wszystkich miejscach, tym wyższy
        sygnał zaufania dla algorytmu.</strong> Jedna literówka w nazwie ulicy, inny format telefonu
        albo stary adres pozostawiony w jakimś katalogu — to wszystko rozmywa sygnały i może
        obniżać pozycję w wynikach lokalnych. To brzmi drobiazgowo, ale w local SEO właśnie na
        takich drobiazgach wygrywa się lub przegrywa z konkurencją.
      </p>

      <h2>Gdzie musi pojawić się NAP?</h2>
      <p>
        Spójność NAP nie dotyczy tylko wizytówki Google. Twoje dane muszą być identyczne we
        wszystkich miejscach, gdzie firma jest wymieniona w internecie:
      </p>
      <ul>
        <li><strong>Google Business Profile</strong> — punkt wyjścia, dane referencyjne</li>
        <li><strong>Strona internetowa</strong> — stopka, strona kontaktowa, i znaczniki schema.org (patrz niżej)</li>
        <li><strong>Katalogi firm</strong> — Panorama Firm, Aleo, Złote Strony, Yelp, Bing Places, Apple Maps</li>
        <li><strong>Media społecznościowe</strong> — Facebook, LinkedIn, Instagram (sekcja „O nas" / „Info")</li>
        <li><strong>Branżowe portale i agregatory</strong> — np. Booksy, Znany Lekarz, Pracuj.pl, OLX</li>
        <li><strong>Lokalna prasa i portale</strong> — artykuły sponsorowane, wizytówki na portalach miejskich</li>
      </ul>

      <h2>Jak poprawnie sformatować NAP?</h2>

      <h3>Nazwa firmy</h3>
      <p>
        Używaj dokładnie tej samej formy nazwy, która widnieje w CEIDG lub KRS. Nie skracaj, nie
        dodawaj słów kluczowych do nazwy (np. „Hydraulik Warszawa Jan Kowalski" zamiast „Jan
        Kowalski Usługi Hydrauliczne") — to narusza zasady Google i grozi zawieszeniem profilu.
        Jeśli firma używa skróconej nazwy handlowej (np. „Kancelaria AK" zamiast pełnej nazwy
        z KRS), stosuj tę samą wersję konsekwentnie wszędzie.
      </p>

      <h3>Adres</h3>
      <p>
        Zdecyduj się na jeden format i trzymaj go wszędzie. Typowe pułapki:
      </p>
      <ul>
        <li>„ul. Kwiatowa" vs „Kwiatowa" (z lub bez przedrostka)</li>
        <li>„m. 5" vs „/5" vs „lok. 5" (format numeru lokalu)</li>
        <li>Stary kod pocztowy po przeprowadzce</li>
        <li>Skrócona nazwa miasta (np. „W-wa" zamiast „Warszawa")</li>
      </ul>

      <h3>Telefon</h3>
      <p>
        Wybierz jeden format i stosuj go wszędzie: np. <strong>+48 123 456 789</strong> albo
        <strong>123 456 789</strong> — nigdy obu naraz. Jeśli masz kilka numerów, zdecyduj,
        który jest „głównym" i to jego używaj w NAP. Telefony komórkowe i stacjonarne traktuj
        jako dwa osobne numery — nigdy nie zamieniaj ich miejscami w różnych katalogach.
      </p>

      <h2>Schema.org LocalBusiness — NAP w kodzie strony</h2>
      <p>
        Wyszukiwarki rozumieją dane strukturalne. Dodając znacznik <strong>LocalBusiness</strong>
        ze schema.org do kodu Twojej strony, dajesz Google pewność, że dane NAP na stronie są
        autorytarne i spójne z resztą internetu. Przykładowy JSON-LD do wklejenia w sekcję{" "}
        <code>&lt;head&gt;</code>:
      </p>
      <blockquote>
        {`{ "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Nazwa Firmy", "address": { "@type": "PostalAddress", "streetAddress": "ul. Kwiatowa 12", "addressLocality": "Warszawa", "postalCode": "00-001", "addressCountry": "PL" }, "telephone": "+48123456789" }`}
      </blockquote>
      <p>
        Wygeneruj swój znacznik bezpłatnie na <strong>schema.org</strong> lub w narzędziu
        Google Rich Results Test.
      </p>

      <h2>Jak przeprowadzić audyt spójności NAP?</h2>
      <p>
        Audyt NAP nie wymaga specjalistycznych narzędzi. Zacznij od tych kroków:
      </p>
      <ol>
        <li>
          <strong>Wpisz nazwę firmy w cudzysłowie w Google</strong> — zobaczysz, gdzie
          jesteś wzmiankowany i jak brzmią dane w każdym miejscu.
        </li>
        <li>
          <strong>Wyszukaj stary adres lub numer telefonu</strong> — jeśli gdzieś
          pozostały stare dane, Google je znajdzie i Ty też powinieneś.
        </li>
        <li>
          <strong>Sprawdź 5 kluczowych katalogów ręcznie</strong> — Panorama Firm,
          Aleo, Yelp, Bing Places, Apple Maps. Zaktualizuj dane wszędzie, gdzie są
          rozbieżności.
        </li>
        <li>
          <strong>Porównaj dane na stronie www z GBP</strong> — stopka, strona kontaktowa
          i schema.org muszą być identyczne z tym, co masz w wizytówce.
        </li>
      </ol>

      <h2>Najczęstsze błędy NAP, które kosztują pozycje</h2>
      <ul>
        <li>Zmiana adresu po przeprowadzce bez aktualizacji we wszystkich katalogach</li>
        <li>Rejestracja w katalogu przez kogoś innego (agencja, pracownik) z lekko inną nazwą</li>
        <li>Dwa profile GBP dla tej samej firmy (duplikaty) — jeden z aktualnym, drugi ze starym adresem</li>
        <li>Używanie numeru kierunkowego tylko w niektórych miejscach</li>
        <li>Firmy wielooddziałowe z jednym numerem telefonu dla wszystkich lokalizacji</li>
      </ul>

      <h2>NAP a firmy bez stałej siedziby</h2>
      <p>
        Jeśli prowadzisz firmę usługową (hydraulik, elektryk, sprzątanie) i nie przyjmujesz
        klientów pod stałym adresem, możesz ukryć adres w GBP i ustawić obszar obsługi (service
        area). W tym przypadku NAP opiera się głównie na nazwie i telefonie. To szczególnie ważne,
        jeśli Twoja firma chce być widoczna w wielu miastach — o tej strategii piszemy szerzej
        w artykule o{" "}
        <Link href="/siedziba-mala-miejscowosc-local-seo">
          firmach z siedzibą w małej miejscowości.
        </Link>
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Spójność NAP to nie jednorazowe zadanie — to ciągła higiena cyfrowej obecności firmy.
        Wystarczy raz na kwartał przejrzeć kluczowe katalogi i porównać dane z GBP. Firmy, które
        o tym pamiętają, stopniowo budują przewagę nad konkurencją, która tego nie robi. Jeśli
        chcesz wycisnąć maksimum z local SEO, połącz spójność NAP z dobrze napisanym opisem:
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Pełny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Jak napisać opis firmy w Google Business Profile, który działa?
          </Link>
        </li>
        <li>
          <Link href="/siedziba-mala-miejscowosc-local-seo">
            Siedziba w małej miejscowości — jak zdobyć klientów z dużego miasta?
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     6. Wizytówka Google – najpopularniejsze oszustwa
  ───────────────────────────────────────────────────────────────────────── */
  "wizytowka-google-popularne-oszustwa": (
    <>
      <h2>Dlaczego oszustwa związane z GBP są tak powszechne?</h2>
      <p>
        Google Business Profile to jeden z najważniejszych kanałów pozyskiwania klientów dla małych
        i średnich firm. Tam, gdzie są pieniądze i mało obeznani z tematem właściciele firm —
        pojawiają się oszuści. Część z nich działa bezpośrednio przeciwko Tobie (próbując zawiesić
        lub zdyskredytować Twój profil), część próbuje wyłudzić pieniądze, a część stosuje
        nieetyczne praktyki, które mogą zrujnować Twój profil od środka.
      </p>
      <p>
        Poniżej omawiamy najczęstsze schematy — wiedza o nich to pierwsza linia obrony.
      </p>

      <h2>1. Fałszywe telefony i faktury od „Google"</h2>
      <p>
        To prawdopodobnie <strong>najstarsza i wciąż najskuteczniejsza metoda</strong>. Firma
        lub osoba dzwoni do właściciela biznesu, podając się za przedstawiciela Google, i
        informuje, że wizytówka „wygaśnie", „zostanie usunięta" lub „wymaga weryfikacji płatnej".
        Czasem zamiast telefonu przychodzi email lub fizyczna faktura z logo łudząco podobnym do
        Google.
      </p>
      <p>
        <strong>Fakty:</strong> Google nigdy nie dzwoni proaktywnie do właścicieli profili GBP
        w sprawie płatności ani weryfikacji. Google Business Profile jest i zawsze był bezpłatny.
        Więcej o tym schemacie piszemy szczegółowo w artykule{" "}
        <Link href="/wizytowka-google-nie-wygasa-oszustwo">
          „Czy wizytówka Google wygasa?"
        </Link>
        .
      </p>

      <h2>2. Kupowanie fałszywych opinii</h2>
      <p>
        Zarówno kupowanie pozytywnych recenzji dla siebie, jak i negatywnych dla konkurencji
        to nagminne zjawisko w wielu branżach (szczególnie w gastronomii, usługach prawnych i
        remontowych). Serwisy sprzedające recenzje Google działają otwarcie, często na platformach
        takich jak Fiverr czy polskich grupach na Facebooku.
      </p>
      <p>
        <strong>Dlaczego to się nie opłaca?</strong> Google stale doskonali algorytmy wykrywające
        sztuczne recenzje. Skutki: usunięcie kupionych opinii (bez ostrzeżenia i bez zwrotu
        pieniędzy), zawieszenie profilu, a nawet usunięcie konta Google. Poza tym — klienci
        coraz lepiej wyczuwają fałszywe recenzje i brak zdjęcia profilu autora, generyczna treść
        i nowa historia konta to sygnały alarmowe dla każdego rozsądnego kupującego.
      </p>

      <h2>3. Upychanie słów kluczowych w nazwie firmy</h2>
      <p>
        „Hydraulik Warszawa 24h — Jan Kowalski Naprawa Awarii" zamiast po prostu „Jan Kowalski
        Usługi Hydrauliczne". Ten schemat jest nagminny i widoczny gołym okiem w wynikach Local
        Pack. To naruszenie zasad Google, które może skutkować:
      </p>
      <ul>
        <li>Ręcznym zawieszeniem profilu przez recenzenta Google</li>
        <li>Niższymi pozycjami (algorytm karze za spam)</li>
        <li>Zgłoszeniem przez konkurencję (każdy może zgłosić profil z keyword stuffingiem)</li>
      </ul>
      <p>
        Ironiczna puenta: profile ze słowami kluczowymi w nazwie często <em>chwilowo</em> wyskakują
        wyżej, przez co właściciele myślą, że to działa. Działa — do czasu.
      </p>

      <h2>4. Ataki na profil konkurencji</h2>
      <p>
        Niestety część firm stosuje czarny kapelusz przeciwko rywalom zamiast inwestować we
        własny profil. Popularne metody:
      </p>
      <ul>
        <li>
          <strong>Masowe zgłaszanie profilu</strong> — wysyłanie wielu zgłoszeń do Google
          o rzekomych naruszeniach regulaminu, żeby wywołać zawieszenie profilu konkurenta.
        </li>
        <li>
          <strong>Fałszywe negatywne recenzje</strong> — zlecanie lub samodzielne pisanie
          1-gwiazdkowych opinii o konkurencji.
        </li>
        <li>
          <strong>Edycja danych w profilu konkurenta</strong> — każdy użytkownik Google może
          sugerować zmiany w profilach GBP. Złośliwe zmiany godzin otwarcia, adresu lub nazwy
          mogą dezorientować klientów.
        </li>
      </ul>
      <p>
        Jak się bronić? Włącz powiadomienia w GBP — dostaniesz alert o każdej sugerowanej zmianie
        i możesz ją odrzucić. Regularnie sprawdzaj, czy dane w profilu są poprawne.
      </p>

      <h2>5. Płatne „weryfikacje" i „optymalizacje" profilu</h2>
      <p>
        Firmy oferujące „oficjalną weryfikację wizytówki Google" za opłatą to kolejna kategoria
        oszustw. Weryfikacja GBP jest zawsze bezpłatna i odbywa się bezpośrednio przez Google
        (przez kartę pocztową, telefon, wideo lub natychmiastową weryfikację dla wybranych firm).
        Nikt nie może przyspieszyć weryfikacji za pieniądze — każda taka oferta to oszustwo.
      </p>
      <p>
        Oddzielną kwestią są agencje SEO oferujące „optymalizację wizytówki" — to usługa
        legalna i może być wartościowa. Problem pojawia się, gdy firma obiecuje „gwarantowane
        pierwsze miejsce w Google" lub „natychmiastowe efekty" — to niemożliwe i nieuczciwe.
      </p>

      <h2>6. Porzucone profile i podszywanie się pod firmę</h2>
      <p>
        Jeśli Twoja firma nigdy nie utworzyła profilu GBP, ktoś inny mógł zrobić to za Ciebie.
        Niezweryfikowane profile mogą edytować osoby trzecie — w tym konkurenci. Porzucone profile
        (np. po zamknięciu starej firmy) mogą zostać przejęte i używane do spamu lub dezinformacji.
      </p>
      <p>
        Rozwiązanie: <strong>zawsze zweryfikuj swój profil GBP</strong>, nawet jeśli nie
        planujesz go aktywnie rozwijać. Weryfikacja daje Ci kontrolę nad danymi i chroni przed
        nieautoryzowanymi zmianami.
      </p>

      <h2>Podsumowanie — jak się chronić?</h2>
      <ul>
        <li>Włącz wszystkie powiadomienia w panelu Google Business Profile</li>
        <li>Regularnie loguj się i sprawdzaj dane profilu</li>
        <li>Nigdy nie płać za „weryfikację" ani „odnowienie" wizytówki</li>
        <li>Nie kupuj recenzji — ryzyko jest znacznie większe niż potencjalny zysk</li>
        <li>Używaj dokładnej nazwy firmy bez słów kluczowych</li>
        <li>Zgłaszaj profile z keyword stuffingiem — chronisz rynek, nie tylko siebie</li>
      </ul>
      <ul>
        <li>
          <Link href="/wizytowka-google-nie-wygasa-oszustwo">
            Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat
          </Link>
        </li>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — uczciwy przewodnik
          </Link>
        </li>
        <li>
          <Link href="/opinie-google-jak-zdobywac-skutecznie">
            Jak zbierać opinie Google bez nachalnego proszenia
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     7. Siedziba w małej miejscowości – jak zdobyć klientów z dużego miasta?
  ───────────────────────────────────────────────────────────────────────── */
  "siedziba-mala-miejscowosc-local-seo": (
    <>
      <h2>Problem: lokalizacja vs. rynek docelowy</h2>
      <p>
        Firma hydrauliczna zarejestrowana w Łomiankach, ale obsługuje całą Warszawę. Zakład
        fryzjerski w Wieliczce, ale klientki dojeżdżają z Krakowa. Ekipa remontowa z Otwocka
        szukająca zleceń w całym Mazowszu. To typowy scenariusz dla setek tysięcy polskich
        firm usługowych — <strong>siedziba w jednym miejscu, klienci w innym</strong>.
      </p>
      <p>
        Algorytm Google domyślnie faworyzuje firmy zlokalizowane blisko użytkownika. Firma
        z siedzibą w małej miejscowości ma naturalną przewagę tylko dla zapytań z tej okolicy
        — ale to nie znaczy, że jest bez szans w dużym mieście. Wymaga jednak innej strategii
        niż firma z lokalem w centrum.
      </p>

      <h2>Krok 1 – Poprawna konfiguracja obszaru obsługi w GBP</h2>
      <p>
        To pierwszy i najważniejszy krok. W Google Business Profile możesz zdefiniować
        <strong>obszar obsługi (service area)</strong> — listę miast, powiatów lub całych
        województw, w których świadczysz usługi. Google uwzględnia ten obszar przy dopasowywaniu
        wyników do zapytań lokalizacyjnych.
      </p>
      <p>
        Jak ustawić: Panel GBP → „Informacje" → „Obszar obsługi". Dodaj wszystkie miasta,
        w których chcesz być widoczny. Możesz ukryć swój faktyczny adres (jeśli nie przyjmujesz
        klientów w siedzibie), żeby nie mylić użytkowników.
      </p>
      <p>
        Ważna uwaga: <strong>obszar obsługi nie zastąpi fizycznej bliskości</strong>. Firma
        z siedzibą w Łomiankach ustawiona na obsługę Warszawy będzie widoczna w wynikach,
        ale z reguły niżej niż firma z adresem w centrum Warszawy dla zapytań bez lokalizacji.
        Dlatego sam GBP to za mało — potrzebujesz też strategii na stronie www.
      </p>

      <h2>Krok 2 – Podstrony lokalizacyjne na stronie www</h2>
      <p>
        <strong>Podstrony lokalizacyjne</strong> to jedna z najskuteczniejszych technik local
        SEO dla firm obsługujących wiele miast. Chodzi o stworzenie dedykowanych podstron
        w stylu:
      </p>
      <ul>
        <li><code>/hydraulik-warszawa</code></li>
        <li><code>/hydraulik-pruszkow</code></li>
        <li><code>/hydraulik-piaseczno</code></li>
      </ul>
      <p>
        Każda taka podstrona powinna być <strong>unikalna i wartościowa</strong> — nie kopiuj
        tego samego tekstu z zamienioną tylko nazwą miasta. Google traktuje takie strony jako
        thin content i je deprecjonuje lub indeksuje niżej. Co powinno być na każdej podstronie:
      </p>
      <ul>
        <li>Unikalna treść opisująca usługi w tym konkretnym mieście lub dzielnicy</li>
        <li>Lokalne odniesienia (nazwy dzielnic, osiedli, charakterystyczne punkty)</li>
        <li>Opinie od klientów z tego miasta (jeśli masz)</li>
        <li>Mapa Google osadzona bezpośrednio na stronie</li>
        <li>NAP z numerem telefonu i obszarem obsługi dla tego miasta</li>
        <li>Schema.org LocalBusiness ze wskazaniem danej miejscowości</li>
      </ul>

      <h2>Krok 3 – Spójność NAP dla każdego obszaru</h2>
      <p>
        <Link href="/nap-wizytowka-google-co-to-jest">Spójność danych NAP</Link> jest
        kluczowa szczególnie dla firm wielolokalizacyjnych. Jeśli tworzysz podstrony dla różnych
        miast, zadbaj o to, żeby:
      </p>
      <ul>
        <li>Na każdej podstronie lokalizacyjnej był poprawny numer telefonu (jeśli masz różne numery dla różnych obszarów)</li>
        <li>Dane firmy w katalogach branżowych były spójne — Panorama Firm, Aleo, Yelp, portale branżowe</li>
        <li>W każdym katalogu, w którym możesz podać obszar obsługi, zrobiłeś to</li>
      </ul>

      <h2>Krok 4 – Cytowania lokalne (citations) w katalogach</h2>
      <p>
        Cytowanie (citation) to każda wzmianka o Twojej firmie w internecie zawierająca dane NAP.
        Dla firm z siedzibą w małej miejscowości szczególnie ważne są:
      </p>
      <ul>
        <li><strong>Katalogi ogólnopolskie</strong> z możliwością podania obszaru obsługi: Panorama Firm, Aleo, Firmy.pl</li>
        <li><strong>Portale miejskie i regionalne</strong> docelowych miast — np. warszawa.naszemiasto.pl, krakow.pl, lokalne fora</li>
        <li><strong>Branżowe katalogi</strong> — ZnanyLekarz, Booksy, Oferteo, Fixly i inne agregatory w Twojej branży</li>
        <li><strong>Lokalna prasa online</strong> — artykuły sponsorowane lub wzmianki w portalach regionalnych miast docelowych</li>
      </ul>

      <h2>Krok 5 – Opinie od klientów z docelowych miast</h2>
      <p>
        Jeśli Twoi klienci zostawiają opinie, Google analizuje też treść recenzji. Opinia
        zawierająca zwrot „polecam hydraulika w Warszawie" lub „świetna firma, obsługuje Mokotów"
        to dodatkowy sygnał lokalizacyjny. Nie możesz dyktować klientom, co mają pisać, ale
        możesz im ułatwić pisanie przez konkretny link do opinii i krótką informację, że
        doceniasz, kiedy wspomnią o lokalizacji realizacji.
      </p>

      <h2>Krok 6 – Posty Google z lokalnymi frazami</h2>
      <p>
        Regularne posty w GBP to kolejny sygnał aktywności. Pisz je z myślą o docelowych
        lokalizacjach: „Realizacja w Wawrze", „Projekt zrealizowany na Ursynowie", „Dostępni
        w całej lewobrzeżnej Warszawie". To nie magia — ale to naturalne, niespamowe użycie
        nazw miast i dzielnic, które Google odczytuje jako sygnał trafności.
      </p>

      <h2>Czego absolutnie nie robić</h2>
      <ul>
        <li>
          <strong>Rejestrowanie fikcyjnych adresów w docelowym mieście</strong> — wirtualne
          biura i skrzynki pocztowe zarejestrowane tylko po to, żeby mieć adres w Warszawie.
          Google to wykrywa i zawiesza profile. To też naruszenie regulaminu GBP.
        </li>
        <li>
          <strong>Tworzenie wielu profili GBP dla tej samej firmy</strong> — jeden profil
          per firma (lub per fizyczna lokalizacja, jeśli naprawdę masz kilka oddziałów).
        </li>
        <li>
          <strong>Kopiowanie treści między podstronami lokalizacyjnymi</strong> — ten sam tekst
          z zamienioną tylko nazwą miasta to przepis na karę algorytmiczną.
        </li>
      </ul>

      <h2>Podsumowanie — strategia krok po kroku</h2>
      <p>
        Firmy z siedzibą poza dużym miastem mogą skutecznie walczyć o klientów z metropolii,
        ale wymaga to więcej pracy niż firma z lokalem w centrum. Kluczowe elementy strategii:
        poprawny obszar obsługi w GBP, unikalne podstrony lokalizacyjne na www, spójny NAP
        i cytowania w katalogach docelowych miast. To buduje się miesiącami — ale efekty są
        trwałe i nie znikają po odcięciu budżetu reklamowego.
      </p>
      <ul>
        <li>
          <Link href="/nap-wizytowka-google-co-to-jest">
            NAP w wizytówce Google — jak zachować spójność danych w sieci
          </Link>
        </li>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Opis firmy w Google Business Profile — jak napisać go skutecznie?
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     8. Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat
  ───────────────────────────────────────────────────────────────────────── */
  "wizytowka-google-nie-wygasa-oszustwo": (
    <>
      <h2>Odpowiedź na pytanie z tytułu: NIE, wizytówka Google nie wygasa</h2>
      <p>
        Google Business Profile (dawniej Google Moja Firma) <strong>nigdy nie wygasa</strong>.
        Jest bezpłatny, nie ma subskrypcji, nie ma rocznego odnowienia i nigdy żadnego nie będzie.
        Jeśli ktoś twierdzi inaczej — próbuje Cię oszukać. Koniec, kropka.
      </p>
      <p>
        To zdanie chcemy żebyś zapamiętał, zanim przejdziemy dalej. Poniżej wyjaśniamy,
        skąd bierze się ten przekręt, jak działa, jak go rozpoznać i co zrobić, jeśli już go
        doświadczyłeś.
      </p>

      <h2>Skąd wziął się ten schemat? Historia sięga ponad dekady</h2>
      <p>
        Pierwsze przypadki firm podszywających się pod Google i straszących właścicieli
        biznesów wygaśnięciem wizytówki pojawiły się już około <strong>2012–2014 roku</strong>,
        gdy Google Places (poprzednik Google Moja Firma i Google Business Profile) stawało się
        coraz popularniejsze wśród małych firm.
      </p>
      <p>
        Schemat działa na tej samej zasadzie od lat i nigdy nie przestał być skuteczny, bo
        stale pojawiają się nowi właściciele firm, którzy nie wiedzą, jak działa GBP. Firmy
        stosujące ten przekręt zmieniają tylko szatę graficzną i numery telefonów — schemat
        pozostaje identyczny od ponad dekady.
      </p>
      <p>
        W Polsce schemat ten funkcjonuje pod różnymi nazwami: „odnowienie wizytówki Google",
        „aktualizacja profilu Google", „weryfikacja biznesu Google", „aktywacja wpisu w Google
        Maps". Wszystko to to warianty tego samego oszustwa.
      </p>

      <h2>Jak dokładnie działa ten przekręt?</h2>

      <h3>Wariant 1 – Telefon od „konsultanta Google"</h3>
      <p>
        Dzwoni osoba podająca się za pracownika lub „autoryzowanego partnera" Google. Informuje
        Cię, że Twoja wizytówka „wkrótce wygaśnie", „zostanie usunięta z wyników" albo „wymaga
        pilnej aktualizacji". Następuje próba sprzedaży pakietu usług: „optymalizacja",
        „weryfikacja premium", „gwarantowana widoczność".
      </p>
      <p>
        Brzmi przekonująco, bo osoba po drugiej stronie zna Twój adres, numer telefonu i branżę
        — wszystkie te dane są publicznie dostępne w Twojej wizytówce Google.
      </p>

      <h3>Wariant 2 – Faktura pocztą lub emailem</h3>
      <p>
        Przychodzi faktura proforma lub faktura z logo łudząco podobnym do Google, z kwotą
        kilkuset lub kilku tysięcy złotych za „roczne utrzymanie wizytówki". Druk wygląda
        oficjalnie, zawiera termin płatności i numer konta bankowego.
      </p>
      <p>
        Kluczowy detal: te faktury prawie nigdy nie twierdzą wprost, że są od Google. Używają
        sformułowań takich jak „Usługi Google Business", „Panel Google Maps" albo nazw
        firm-krzaków brzmiących jak coś związanego z Google.
      </p>

      <h3>Wariant 3 – Email z linkiem „weryfikacyjnym"</h3>
      <p>
        Email podszywający się pod Google z prośbą o „ponowną weryfikację konta" lub „aktualizację
        danych rozliczeniowych". Link prowadzi do fałszywej strony logowania Google. To klasyczny
        phishing — celem jest przejęcie konta Google Twojej firmy.
      </p>

      <h2>Czego Google nigdy nie robi</h2>
      <p>
        Zapamiętaj tę listę i wróć do niej za każdym razem, gdy ktoś kontaktuje się z Tobą
        „od Google":
      </p>
      <ul>
        <li>Google <strong>nigdy nie dzwoni proaktywnie</strong> do właścicieli profili GBP w celu sprzedaży, odnowienia lub weryfikacji</li>
        <li>Google <strong>nigdy nie wysyła faktur</strong> za utrzymanie profilu Google Business Profile</li>
        <li>Google Business Profile <strong>nigdy nie wygasa</strong> i nie wymaga opłat za utrzymanie</li>
        <li>Google <strong>nie ma autoryzowanych partnerów</strong> sprzedających odnowienia GBP</li>
        <li>Weryfikacja GBP <strong>zawsze odbywa się bezpłatnie</strong> przez oficjalny panel na business.google.com</li>
      </ul>

      <h2>Co Google faktycznie może zrobić z Twoim profilem?</h2>
      <p>
        Profil GBP może zostać ograniczony lub zawieszony, ale tylko z konkretnych powodów
        i zawsze przez sam Google — nie przez osoby trzecie:
      </p>
      <ul>
        <li><strong>Zawieszenie za naruszenie regulaminu</strong> — keyword stuffing w nazwie, fałszywy adres, fałszywe recenzje. Dostajesz wtedy powiadomienie z wyjaśnieniem przez panel GBP.</li>
        <li><strong>Profil niezweryfikowany</strong> — jeśli nigdy nie przeszedłeś weryfikacji, profil może mieć ograniczoną widoczność. Rozwiązanie: zweryfikuj przez business.google.com.</li>
        <li><strong>Duplikaty profili</strong> — Google może scalić lub ukryć zduplikowane profile tej samej firmy.</li>
      </ul>
      <p>
        W każdym z powyższych przypadków Google komunikuje się z Tobą <strong>przez oficjalny
        panel Google Business Profile lub przez adres email powiązany z kontem Google</strong>
        — nie przez telefon, nie przez zewnętrzne faktury.
      </p>

      <h2>Co zrobić jeśli już zapłaciłeś?</h2>
      <p>
        Jeśli padłeś ofiarą tego oszustwa:
      </p>
      <ol>
        <li>
          <strong>Zgłoś przelew jako oszustwo</strong> w swoim banku — w przypadku przelewów
          krajowych możliwe jest wstrzymanie operacji lub odwołanie przelewu, jeśli działa szybko.
        </li>
        <li>
          <strong>Złóż zawiadomienie na policję</strong> — to przestępstwo, nawet jeśli kwota
          była mała. Każde zgłoszenie pomaga ścigać sprawców.
        </li>
        <li>
          <strong>Zgłoś oszustwo do Google</strong> — przez formularz na support.google.com.
          Google ma zespół zajmujący się tego typu nadużyciami.
        </li>
        <li>
          <strong>Ostrzeż innych</strong> — zamieść opinię lub wpis na lokalnych grupach
          branżowych. Twoja historia może uchronić kolejną osobę.
        </li>
      </ol>

      <h2>Jak zabezpieczyć się na przyszłość?</h2>
      <ul>
        <li>Zaloguj się do <strong>business.google.com</strong> i sprawdź status swojego profilu — to jedyne oficjalne miejsce do zarządzania GBP</li>
        <li>Dodaj oficjalny panel GBP do zakładek i korzystaj tylko z niego</li>
        <li>Poinformuj pracowników odbierających telefony, że Google nie dzwoni w takich sprawach</li>
        <li>Każdy podejrzany email od „Google" sprawdź bezpośrednio logując się na konto — nie klikaj linków z emaila</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Ten schemat działa od ponad dekady i wciąż zbiera ofiary — bo stale przybywa nowych
        właścicieli firm tworzących wizytówki Google. Najlepsza ochrona to wiedza: Google
        Business Profile jest bezpłatny, nie wygasa i nigdy nie wymaga telefonu od konsultanta.
        Jeśli chcesz rozwijać swój profil legalnie i skutecznie, zacznij od podstaw:
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — uczciwy przewodnik
          </Link>
        </li>
        <li>
          <Link href="/wizytowka-google-popularne-oszustwa">
            Wizytówka Google — inne popularne oszustwa, na które warto uważać
          </Link>
        </li>
        <li>
          <Link href="/nap-wizytowka-google-co-to-jest">
            NAP w wizytówce Google — fundament, od którego zaczynają wszyscy
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     1. Jak pozycjonować wizytówkę Google w 2026 roku?
  ───────────────────────────────────────────────────────────────────────── */
  "jak-pozycjonowac-wizytowke-google-2026": (
    <>
      <h2>Dlaczego wizytówka Google jest ważniejsza niż Twoja strona internetowa?</h2>
      <p>
        Kiedy potencjalny klient wpisuje w Google „hydraulik Warszawa" lub „fryzjer Kraków Krowodrza",
        pierwsze co widzi — zanim dotrze do jakiejkolwiek strony www — to tzw. Local Pack: trzy firmy
        wyróżnione na mapie. Badania pokazują, że ponad <strong>46% wszystkich wyszukiwań w Google ma
        lokalny charakter</strong>, a użytkownicy mobilni klikają bezpośrednio w przycisk „Zadzwoń"
        lub „Wyznacz trasę, nie odwiedzając strony firmy.
      </p>
      <p>
        Wizytówka Google (Google Business Profile, w skrócie GBP) to w praktyce Twoja najważniejsza
        strona w sieci. Dobrze zoptymalizowana może przyciągnąć klientów szybciej i taniej niż
        jakakolwiek reklama. Zaniedbana — oddaje klientów konkurencji, która poświęciła kilka godzin
        na konfigurację profilu.
      </p>

      <h2>Jak działa algorytm Local Pack w 2026 roku?</h2>
      <p>
        Google nie ujawnia szczegółów swojego algorytmu, ale na podstawie setek audytów profili wiemy,
        że decyzja o tym, które firmy trafiają do Local Pack, opiera się na trzech głównych sygnałach:
      </p>

      <h3>Trafność (relevance) – czy profil pasuje do zapytania?</h3>
      <p>
        Google sprawdza, czy Twoja wizytówka odpowiada na to, czego szuka użytkownik. Im dokładniej
        wypełnisz kategorie, usługi, <Link href="/opis-firmy-google-business-profile-jak-napisac">opis firmy</Link> i atrybuty —
        tym wyżej pojawisz się przy trafnych zapytaniach. Nie chodzi o upychanie słów kluczowych,
        ale o precyzyjne opisanie tego, czym naprawdę się zajmujesz.
      </p>

      <h3>Odległość (distance) – jak blisko jest firma?</h3>
      <p>
        Lokalizacji fizycznej nie zmienisz, ale możesz skonfigurować <strong>obszar obsługi</strong> (service area),
        jeśli dojeżdżasz do klientów. Firmy bez stałego adresu (np. hydraulicy, elektrycy, firmy
        cateringowe) powinny wyraźnie wskazać obszar działania zamiast ukrywać adres.
      </p>

      <h3>Pozycja (prominence) – jak ważna jest firma w sieci?</h3>
      <p>
        To najszerszy sygnał. Google bierze pod uwagę: liczbę i jakość <Link href="/opinie-google-jak-zdobywac-skutecznie">opinii Google</Link>,
        wzmianki o firmie na innych stronach (cytowania), jakość Twojej strony www oraz aktywność
        na samym profilu GBP. Im bardziej „widoczna" firma w internecie, tym wyżej w Local Pack.
      </p>

      <h2>7 czynników rankingowych, które mają dziś największe znaczenie</h2>
      <ol>
        <li>
          <strong>Kategoria główna</strong> — wybierz ją bardzo starannie. To pojedynczy najsilniejszy
          czynnik trafności. Jeśli jesteś dentystą, kategoria „Dentysta" bije ogólne „Usługi medyczne".
        </li>
        <li>
          <strong>Kompletność profilu</strong> — Google nagradza w pełni wypełnione profile. Uzupełnij
          godziny otwarcia (w tym godziny świąteczne), numer telefonu, stronę www, opis, zdjęcia i usługi.
        </li>
        <li>
          <strong>Opinie — liczba i średnia ocena</strong> — profile z ponad 50 opiniami i oceną powyżej
          4,5 mają wyraźną przewagę. Ważna jest też regularność: nowe opinie pojawiające się co tydzień
          sygnalizują aktywność.{" "}
          <Link href="/opinie-google-jak-zdobywac-skutecznie">
            Przeczytaj, jak zbierać opinie bez nachalnego proszenia.
          </Link>
        </li>
        <li>
          <strong>Odpowiedzi na opinie</strong> — firmom, które odpowiadają na każdą recenzję (zarówno
          pozytywną, jak i negatywną), Google wystawia wyższe noty za zaangażowanie.
        </li>
        <li>
          <strong>Zdjęcia dodawane regularnie</strong> — statycznie wgrane zdjęcia sprzed 2 lat pomagają
          mniej niż świeże fotografie. Dodawaj przynajmniej 2–3 nowe co miesiąc.{" "}
          <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">
            Dowiedz się, które zdjęcia Google naprawdę premiuje.
          </Link>
        </li>
        <li>
          <strong>Posty Google</strong> — regularne wpisy (raz na tydzień) sygnalizują algorytmowi, że
          profil jest aktywny. Możesz promować oferty, aktualności lub wydarzenia.
        </li>
        <li>
          <strong>Opis firmy z słowami kluczowymi</strong> — 750 znaków, które mogą zdecydowanie poprawić
          trafność profilu. To Twoja szansa na naturalne umieszczenie fraz, na które chcesz być widoczny.{" "}
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Sprawdź, jak napisać opis firmy, który działa.
          </Link>
        </li>
      </ol>

      <h2>Kompletność profilu – praktyczna checklista</h2>
      <p>Uzupełnij każdy z tych elementów, zanim zaczniesz myśleć o zaawansowanych strategiach:</p>
      <ul>
        <li>Nazwa firmy (dokładnie taka jak w rejestrze, bez „słów kluczowych" w nazwie)</li>
        <li>Kategoria główna + kategorie dodatkowe (max 9)</li>
        <li>Adres lub obszar obsługi</li>
        <li>Numer telefonu — lokalny, nie 0800</li>
        <li>Strona internetowa</li>
        <li>Godziny otwarcia (w tym dni świąteczne i specjalne)</li>
        <li>Opis firmy (750 znaków)</li>
        <li>Usługi i produkty z cenami lub opisami</li>
        <li>Atrybuty (np. dostępność dla niepełnosprawnych, płatność kartą, parking)</li>
        <li>Minimum 10 zdjęć (logo, okładka, wnętrze, zewnętrze, zespół)</li>
        <li>Sekcja Q&amp;A — dodaj własne pytania i odpowiedzi</li>
      </ul>

      <h2>Posty Google — czy warto tracić na nie czas?</h2>
      <p>
        Tak, ale tylko jeśli robisz to regularnie. Jednorazowy post sprzed 6 miesięcy nie robi
        żadnej różnicy. Algorytm nagrądza <strong>aktywność tygodniową</strong>. Post nie musi być
        rozbudowany — wystarczy zdjęcie + 150–200 słów opisujących aktualną ofertę, poradę lub
        wydarzenie. Posty z wyraźnym wezwaniem do działania (np. „Zadzwoń i umów wizytę") generują
        też kliknięcia bezpośrednio z wyników Google.
      </p>

      <h2>Plan działania na pierwsze 30 dni</h2>
      <p>
        Nie musisz robić wszystkiego naraz. Oto konkretny harmonogram, który da efekty:
      </p>
      <ul>
        <li><strong>Tydzień 1:</strong> Uzupełnij profil zgodnie z checklistą powyżej. Zweryfikuj dane NAP (nazwa, adres, telefon) — muszą być identyczne na stronie www i w GBP.</li>
        <li><strong>Tydzień 2:</strong> Wyślij prośbę o opinię do 10–20 ostatnich klientów. Użyj skróconego linku do strony opinii.</li>
        <li><strong>Tydzień 3:</strong> Dodaj 10 nowych zdjęć — wnętrze, zewnętrze, produkt lub usługa w akcji, zdjęcie zespołu.</li>
        <li><strong>Tydzień 4:</strong> Opublikuj pierwszy post. Zaplanuj pisanie jednego posta tygodniowo przez kolejne 3 miesiące.</li>
      </ul>

      <h2>Kiedy widać pierwsze efekty?</h2>
      <p>
        Pozycjonowanie wizytówki Google to maraton, nie sprint. Pierwsze zmiany pozycji zauważysz
        zazwyczaj po <strong>4–8 tygodniach</strong> systematycznej pracy. Profile całkowicie zaniedbane
        mogą potrzebować 3–4 miesięcy, żeby wskoczyć do Local Pack. Kluczem jest konsekwencja —
        firmy, które regularnie zbierają opinie, dodają zdjęcia i publikują posty, utrzymują pozycję
        długoterminowo bez kosztów reklamowych.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Wizytówka Google to bezpłatne narzędzie, które — właściwie skonfigurowane — może być Twoim
        głównym źródłem klientów z internetu. Skup się na kompletności profilu, regularnym zbieraniu
        opinii i aktywności na profilu. Jeśli chcesz pójść krok dalej, zadbaj o szczegóły:
      </p>
      <ul>
        <li>
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Napisz opis firmy, który działa na klientów i algorytm
          </Link>
        </li>
        <li>
          <Link href="/opinie-google-jak-zdobywac-skutecznie">
            Zbieraj opinie Google skutecznie, bez nachalnego proszenia
          </Link>
        </li>
        <li>
          <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">
            Dodaj zdjęcia, które Google naprawdę premiuje
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     2. Opinie w Google – jak zbierać je bez nachalnego proszenia?
  ───────────────────────────────────────────────────────────────────────── */
  "opinie-google-jak-zdobywac-skutecznie": (
    <>
      <h2>Dlaczego opinie Google są ważniejsze niż myślisz?</h2>
      <p>
        Opinie to jeden z trzech głównych sygnałów algorytmu Local Pack. Firmy z większą liczbą
        recenzji i wyższą średnią oceną zajmują wyższe pozycje — nawet jeśli ich strona www jest
        słabsza od konkurencji. Ale to nie koniec: <strong>93% klientów czyta opinie online</strong>{" "}
        przed podjęciem decyzji o zakupie lub skorzystaniu z usługi. Wizytówka bez opinii albo z
        kilkoma starymi recenzjami po prostu nie budzi zaufania.
      </p>
      <p>
        Problem w tym, że zadowoleni klienci rzadko wystawiają opinie z własnej inicjatywy.
        Niezadowoleni — owszem. Dlatego aktywne zbieranie recenzji to konieczność, nie opcja.
        Jak jednak robić to skutecznie, nie czując się jak natręt?
      </p>

      <h2>Kiedy prosić o opinię – timing jest kluczowy</h2>
      <p>
        Najlepszy moment na prośbę o recenzję to <strong>bezpośrednio po pozytywnym doświadczeniu</strong>
        klienta — gdy emocje są świeże. W usługach: zaraz po zakończeniu realizacji. W handlu:
        kilka dni po dostarczeniu produktu, gdy klient miał czas go ocenić. Prośba wysłana po
        tygodniu ma kilkukrotnie niższy wskaźnik realizacji niż ta wysłana w dniu usługi.
      </p>

      <h3>Metoda 1 – SMS lub WhatsApp ze skróconym linkiem</h3>
      <p>
        To najskuteczniejsza metoda dla usług „na miejscu" (fryzjer, warsztat, kosmetyczka).
        Zaraz po zakończeniu usługi wyślij klientowi wiadomość z bezpośrednim linkiem do strony
        opinii Google Twojej firmy. Link możesz skrócić za pomocą bit.ly lub go.gl, żeby nie
        wyglądał groźnie. Przykładowy tekst:
      </p>
      <blockquote>
        „Cieszę się, że wszystko poszło sprawnie! Byłoby świetnie, gdybyś mógł/mogła zostawić
        krótką opinię — to dla mnie duże wsparcie: [link]. Z góry dziękuję!"
      </blockquote>
      <p>
        Kluczowe: wiadomość musi być osobista, nie szablonowa. Klienci wyczuwają masowe wiadomości.
      </p>

      <h3>Metoda 2 – Karta wizytowa z kodem QR</h3>
      <p>
        Wydrukuj małą kartę (format wizytówki lub A6) z kodem QR prowadzącym bezpośrednio do
        strony opinii. Wręczaj ją przy kasie, dołączaj do zamówień lub kładź na blacie. Tekst
        na karcie powinien być prosty: „Byłeś zadowolony? Oceń nas — skanuj i zostaw opinię.
        To zajmie 30 sekund." Kod QR możesz wygenerować bezpłatnie w Google Business Profile.
      </p>

      <h3>Metoda 3 – Autoresponder mailowy</h3>
      <p>
        Jeśli zbierasz adresy email klientów, ustaw autoresponder wysyłający prośbę o opinię
        2–3 dni po zakupie lub realizacji. Kluczowy element to personalizacja — użyj imienia
        klienta i odwołaj się do konkretnego zakupu lub usługi. E-maile z ogólnym „Oceń nas"
        mają bardzo niski współczynnik odpowiedzi.
      </p>

      <h2>Czego absolutnie nie robić — ryzyko kary od Google</h2>
      <p>
        Google ma surowe zasady dotyczące opinii i aktywnie je egzekwuje. Unikaj tych działań
        jak ognia:
      </p>
      <ul>
        <li>
          <strong>Kupowanie opinii</strong> — Google wykrywa wzorce (zbyt wiele recenzji naraz, z
          podobnych IP, kont bez historii). Skutek: usunięcie opinii, a w skrajnych przypadkach
          zawieszenie profilu.
        </li>
        <li>
          <strong>Incentywizowanie recenzji</strong> — oferowanie rabatu, prezentu lub innej nagrody
          w zamian za opinię narusza regulamin Google.
        </li>
        <li>
          <strong>Prosić tylko wybranych klientów</strong> — selektywne zbieranie opinii (np. tylko
          od tych, o których wiesz, że są zadowoleni) to tzw. review gating — zabronione przez Google.
          Proś wszystkich, nie filtruj.
        </li>
        <li>
          <strong>Opinie od pracowników i znajomych</strong> — recenzje od osób związanych z firmą
          są łatwe do wykrycia i zostaną usunięte.
        </li>
      </ul>

      <h2>Jak odpowiadać na opinie — dobre i złe?</h2>
      <p>
        Odpowiadanie na opinie to nie tylko grzeczność — to sygnał dla algorytmu i dla potencjalnych
        klientów. <strong>Na każdą recenzję odpowiadaj w ciągu 24–48 godzin.</strong>
      </p>
      <p>
        Na pozytywne opinie: podziękuj, użyj imienia klienta i wspomnij o konkretnej usłudze lub
        produkcie (pomaga to w SEO). Unikaj szablonowej odpowiedzi „Dziękujemy za opinię!" — brzmi
        automatycznie.
      </p>
      <p>
        Na negatywne opinie: zachowaj spokój, przeproś za złe doświadczenie (nawet jeśli uważasz,
        że klient nie ma racji), zaproponuj rozwiązanie i przenieś rozmowę na prywatny kanał
        (telefon, email). Nigdy nie kłóć się publicznie z klientem — inni to czytają i wyrabiają
        sobie opinię o Tobie jako o właścicielu.
      </p>

      <h2>Ile opinii potrzebujesz, żeby rywalizować?</h2>
      <p>
        Nie ma jednej liczby ważnej dla wszystkich branż i miast. W małym mieście 20–30 opinii może
        być wystarczające. W dużym mieście w konkurencyjnej branży — 100+ recenzji to minimum, żeby
        wejść do Local Pack. Sprawdź, ile opinii mają trzy firmy wyświetlane w Local Pack dla Twojego
        głównego słowa kluczowego — to Twój cel minimalny.
      </p>
      <p>
        Ważna jest też <strong>regularność</strong>. 10 opinii miesięcznie przez rok robi lepsze
        wrażenie niż 120 opinii zdobytych w jeden miesiąc i brak aktywności przez kolejne 11.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Zbieranie opinii Google nie musi być nachalne ani niekomfortowe. Wystarczy dobry timing,
        prosty komunikat i bezpośredni link. Wytrwałość w zbieraniu recenzji to jeden z najłatwiejszych
        sposobów na poprawę pozycji w Local Pack bez wydawania pieniędzy na reklamy. Jeśli chcesz
        wycisnąć maksimum z wizytówki, zadbaj też o inne elementy:
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Kompletny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Jak napisać opis firmy w GBP, który przyciąga klientów i poprawia SEO
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     3. Zdjęcia w wizytówce Google – które naprawdę wpływają na pozycję?
  ───────────────────────────────────────────────────────────────────────── */
  "zdjecia-w-wizytowce-google-ktore-dzialaja": (
    <>
      <h2>Czy zdjęcia naprawdę pomagają w pozycjonowaniu?</h2>
      <p>
        Krótka odpowiedź: tak, ale nie w sposób, o którym myślisz. Zdjęcia w wizytówce Google
        nie są bezpośrednim czynnikiem rankingowym — Google nie „czyta" zawartości obrazka tak jak
        tekstu. Ale <strong>wpływają na zachowanie użytkowników</strong>, a to Google jak najbardziej
        bierze pod uwagę.
      </p>
      <p>
        Firmy z dużą liczbą zdjęć wysokiej jakości notują więcej kliknięć w wyniki, więcej
        wyświetleń karty profilu i wyższy wskaźnik zapytań o trasę. Te sygnały zaangażowania
        przekładają się pośrednio na pozycję. Według danych Google Business Profile, firmy z
        ponad 100 zdjęciami mają <strong>520% więcej połączeń telefonicznych</strong> niż te
        bez zdjęć. To dużo.
      </p>

      <h2>Zdjęcia, które Google i klienci doceniają najbardziej</h2>

      <h3>1. Zdjęcie profilowe i okładka — pierwsze wrażenie</h3>
      <p>
        Zdjęcie profilowe to zazwyczaj logo — zadbaj, żeby było na białym lub neutralnym tle,
        o dobrej rozdzielczości (min. 250×250 px). Zdjęcie okładki to pierwsza rzecz, którą klient
        widzi otwierając Twój profil. Wybierz coś reprezentatywnego dla Twojej firmy:
        wnętrze, najważniejszy produkt, zdjęcie zespołu.
      </p>

      <h3>2. Zdjęcia wnętrza i zewnętrza — dla firm stacjonarnych</h3>
      <p>
        Pomagają klientom znaleźć firmę fizycznie i zmniejszają „próg wejścia" — klient wie, czego
        się spodziewać. Zdjęcia wnętrza powinny pokazywać przestrzeń roboczą lub sprzedażową w
        rzeczywistym użyciu, nie pustą i wysterylizowaną. Zewnętrze — obowiązkowo z widocznym szyldem
        i wejściem, żeby klient mógł Cię łatwo zlokalizować.
      </p>

      <h3>3. Zdjęcia usług i produktów „w akcji"</h3>
      <p>
        To najskuteczniejszy typ zdjęć jeśli chodzi o konwersje. Klient fryzjera woli zobaczyć
        efekty strzyżeń niż puste fotele. Klient warsztatu — naprawiony samochód, nie pustą halę.
        Pokaż pracę w toku: ręce specjalisty przy robocie, gotowy produkt, zadowolony klient
        (zawsze za zgodą). Autentyczność wygrywa ze stockowymi fotografiami.
      </p>

      <h3>4. Zdjęcia zespołu</h3>
      <p>
        Budują zaufanie. Ludzie kupują od ludzi. Krótkie, naturalne zdjęcia pracowników przy pracy
        lub w stroju służbowym (nie korporacyjna sesja fotograficzna) znacznie podnoszą wiarygodność
        profilu. To szczególnie ważne w branżach usługowych, gdzie klient powierza Ci swój dom,
        zdrowie lub finanse.
      </p>

      <h2>Specyfikacja techniczna — rozmiary i formaty</h2>
      <p>
        Google akceptuje zdjęcia w formatach JPG i PNG. Zalecane parametry:
      </p>
      <ul>
        <li>Rozmiar: minimum 720×720 px, zalecane 1200×900 px lub więcej</li>
        <li>Plik: między 10 KB a 5 MB</li>
        <li>Jakość: wyraźne, bez rozmycia, dobrze oświetlone</li>
        <li>Zdjęcie okładki: proporcje 16:9 (np. 1920×1080 px)</li>
        <li>Zdjęcie profilowe: proporcje 1:1 (kwadrat)</li>
      </ul>
      <p>
        Unikaj zdjęć z dużymi napisami, watermarkami i grafikami komputerowymi — Google może je
        odrzucić lub obniżyć ich widoczność w profilu.
      </p>

      <h2>Zdjęcia, których lepiej unikać</h2>
      <ul>
        <li>Stockowe fotografie — Google je rozpoznaje, a klienci nie ufają „sztucznym" obrazkom</li>
        <li>Zdjęcia z dużym tekstem lub logotypami innych marek</li>
        <li>Niskiej jakości, ciemne lub rozmazane fotografie</li>
        <li>Zdjęcia niezwiązane z firmą (np. pejzaże, abstrakcje)</li>
        <li>Zdjęcia wprowadzające w błąd co do wyglądu lub lokalizacji firmy</li>
      </ul>

      <h2>Jak często dodawać nowe zdjęcia?</h2>
      <p>
        Regularność jest tutaj kluczowa — algorytm premiuje aktywne profile. Minimum to
        <strong>2–4 nowe zdjęcia miesięcznie</strong>. Nie musisz robić profesjonalnej sesji —
        wystarczy smartfon z dobrą kamerą i naturalne oświetlenie. Dobra praktyka to
        fotografowanie każdej nowej realizacji, sezonowych zmian w ofercie lub ważnych wydarzeń
        w firmie.
      </p>
      <p>
        Pamiętaj też, że klienci mogą sami dodawać zdjęcia Twojego miejsca — regularnie je
        przeglądaj. Jeśli ktoś wgrał zdjęcie, które Cię niekorzystnie przedstawia lub jest
        mylące, możesz zgłosić je do usunięcia przez Google.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Zdjęcia w wizytówce Google to inwestycja czasu, która bezpośrednio przekłada się na zaufanie
        klientów i pośrednio na pozycję w wynikach lokalnych. Skup się na autentyczności, regularności
        i technicznej poprawności. Jeśli chcesz zbudować silny profil GBP od podstaw, zacznij tutaj:
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Pełny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/opis-firmy-google-business-profile-jak-napisac">
            Jak napisać opis firmy w Google Business Profile, który działa?
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     4. Opis firmy w Google Business Profile – jak napisać go skutecznie?
  ───────────────────────────────────────────────────────────────────────── */
  "opis-firmy-google-business-profile-jak-napisac": (
    <>
      <h2>Czym jest opis firmy w GBP i po co go w ogóle pisać?</h2>
      <p>
        Opis firmy w Google Business Profile to pole tekstowe o długości do <strong>750 znaków</strong>,
        widoczne dla użytkowników bezpośrednio w Twoim profilu — zarówno w wynikach wyszukiwania,
        jak i w Google Maps. To jedno z niewielu miejsc, gdzie możesz własnym głosem opowiedzieć,
        czym zajmuje się Twoja firma.
      </p>
      <p>
        Wiele firm zostawia to pole puste albo wkleja tam generyczny tekst. To błąd. Dobrze napisany
        opis pełni dwie funkcje: <strong>przekonuje klientów</strong> (jest widoczny zanim zdecydują
        się kliknąć) i <strong>poprawia trafność profilu</strong> w algorytmie Google. Naturalne
        użycie słów kluczowych w opisie pomaga Google zrozumieć, czym się zajmujesz i na jakie
        zapytania powinieneś się pojawiać.
      </p>

      <h2>Zasady Google, których nie możesz złamać</h2>
      <p>
        Zanim zaczniesz pisać, poznaj reguły. Google ma konkretne wytyczne dotyczące opisów —
        naruszenie ich grozi usunięciem opisu lub zawieszeniem profilu:
      </p>
      <ul>
        <li><strong>Brak linków URL</strong> — nie możesz wklejać adresów stron www ani linków</li>
        <li><strong>Brak numerów telefonów</strong> — dane kontaktowe są w innych polach</li>
        <li><strong>Brak promocji cenowych</strong> — „promocja -20%", „najtaniej w Polsce" itp.</li>
        <li><strong>Brak porównań z konkurencją</strong> — nie wolno wymieniać nazw innych firm</li>
        <li><strong>Brak wprowadzających w błąd informacji</strong> — opis musi odpowiadać rzeczywistości</li>
        <li><strong>Limit 750 znaków</strong> — tekst dłuższy zostanie przycięty</li>
      </ul>

      <h2>Struktura skutecznego opisu firmy</h2>

      <h3>Pierwsze zdanie — najważniejsze</h3>
      <p>
        Google w wynikach wyszukiwania często pokazuje tylko pierwsze 250–300 znaków opisu, resztę
        ukrywając za przyciskiem „więcej". Dlatego pierwsze zdanie musi zawierać:
      </p>
      <ul>
        <li>nazwę firmy lub branżę (nie powtarzaj dosłownie nazwy z pola „Nazwa" — Google to flaguje)</li>
        <li>główne słowo kluczowe (np. „hydraulik Warszawa", „fryzjer damski Kraków")</li>
        <li>najważniejszy wyróżnik lub propozycję wartości</li>
      </ul>
      <p>
        Przykład: <em>„Świadczymy usługi hydrauliczne na terenie Warszawy i okolic z gwarancją
        interwencji w ciągu 2 godzin od zgłoszenia."</em>
      </p>

      <h3>Środek — usługi, specjalizacja i wyróżniki</h3>
      <p>
        W środkowej części opisz konkretnie, co robisz. Wymień 3–5 głównych usług lub produktów,
        swoją specjalizację i to, co wyróżnia Cię na tle konkurencji. Unikaj fraz-klisz w stylu
        „najwyższa jakość", „profesjonalny zespół" czy „indywidualne podejście" — brzmią pusto
        i nic nie mówią klientowi.
      </p>
      <p>
        Zamiast: <em>„Oferujemy profesjonalne usługi najwyższej jakości z indywidualnym podejściem."</em><br/>
        Napisz: <em>„Specjalizujemy się w instalacjach podłogówki i wymianie pionów c.o. w
        budynkach wielorodzinnych. Obsługujemy spółdzielnie mieszkaniowe i wspólnoty na terenie
        całego Mazowsza."</em>
      </p>

      <h3>Zakończenie — lokalizacja lub CTA</h3>
      <p>
        Ostatnie zdanie to dobre miejsce na informację o zasięgu geograficznym (ważne dla SEO
        lokalnego) lub miękkie wezwanie do działania. Unikaj twardego „Zadzwoń teraz!" — to
        narusza zasady Google dotyczące promocji. Możesz napisać np.:
        <em>„Działamy w Krakowie i okolicznych powiatach — Wieliczce, Myślenicach i Bochni."</em>
      </p>

      <h2>Słowa kluczowe w opisie — jak je umieszczać naturalnie?</h2>
      <p>
        Przed napisaniem opisu zrób prostą analizę: wpisz w Google swoje główne usługi i sprawdź,
        jak formułują zapytania Twoi potencjalni klienci. Następnie użyj tych fraz naturalnie —
        nie upychaj ich na siłę. Algorytm Google jest na tyle zaawansowany, że potrafi ocenić,
        czy tekst jest pisany dla ludzi, czy tylko pod roboty.
      </p>
      <p>
        Dobra zasada: przeczytaj opis na głos. Jeśli brzmi nienaturalnie lub sztucznie — usuń
        lub przepisz. Jeśli brzmi jak normalny opis działalności firmy — jest OK.
      </p>

      <h2>Przykłady opisów dla różnych branż</h2>

      <h3>Dentysta</h3>
      <p>
        <em>„Gabinet stomatologiczny w centrum Gdańska oferujący leczenie zachowawcze, stomatologię
        estetyczną i protetykę. Przyjmujemy dorosłych i dzieci. Specjalizujemy się w leczeniu
        bez bólu — stosujemy najnowsze techniki znieczulenia miejscowego. Współpracujemy z NFZ
        oraz przyjmujemy prywatnie. Rejestracja online dostępna całą dobę."</em>
        (387 znaków)
      </p>

      <h3>Firma remontowa</h3>
      <p>
        <em>„Ekipa remontowa z Wrocławia z 15-letnim doświadczeniem. Wykonujemy kompleksowe
        remonty mieszkań i domów: wykończenia pod klucz, łazienki, kuchnie, gładzie i malowanie.
        Pracujemy na terenie Wrocławia, Oławy, Świdnicy i Oleśnicy. Każde zlecenie wyceniamy
        bezpłatnie w ciągu 24 godzin. Posiadamy ubezpieczenie OC i referencje od ponad 200
        zadowolonych klientów."</em>
        (471 znaków)
      </p>

      <h3>Sklep z kawą</h3>
      <p>
        <em>„Palarnia i sklep z kawą speciality w Poznaniu. Prażymy kawę na miejscu z ziaren
        od sprawdzonych plantacji z Etiopii, Kolumbii i Gwatemali. W ofercie: kawy ziarniste,
        mielone na zamówienie, zestawy prezentowe i sprzęt do parzenia. Prowadzimy też kursy
        i warsztaty baristyczne dla początkujących i zaawansowanych. Wysyłamy w całej Polsce."</em>
        (418 znaków)
      </p>

      <h2>Czego nie pisać w opisie firmy?</h2>
      <p>
        Poza zakazami wynikającymi z regulaminu Google, unikaj też:
      </p>
      <ul>
        <li>Listy słów kluczowych oddzielonych przecinkami (wygląda jak spam)</li>
        <li>Pisania o sobie w trzeciej osobie — brzmi sztucznie</li>
        <li>Zbyt ogólnego opisu, który pasuje do każdej firmy w branży</li>
        <li>Kopiowania opisu ze strony www — Google może to ocenić jako duplicate content</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        750 znaków to krótka przestrzeń, ale wystarczająca, żeby zrobić dobre pierwsze wrażenie
        i wskazać Google, na jakie zapytania powinieneś się pojawiać. Poświęć na opis 30 minut —
        to jedna z najlepiej zwracających się inwestycji w pozycjonowanie wizytówki. Żeby wycisnąć
        więcej z całego profilu, przeczytaj też:
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/opinie-google-jak-zdobywac-skutecznie">
            Jak zbierać opinie Google bez nachalnego proszenia klientów
          </Link>
        </li>
        <li>
          <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">
            Jakie zdjęcia w wizytówce Google naprawdę pomagają w pozycjonowaniu?
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     Czynniki rankingowe wizytówki Google w 2026
  ───────────────────────────────────────────────────────────────────────── */
  "czynniki-rankingowe-wizytowki-google-2026": (
    <>
      <h2>Dlaczego znanie czynników rankingowych ma realne znaczenie</h2>
      <p>
        W 2026 roku <strong>ponad 46% wszystkich wyszukiwań w Google nosi charakter lokalny</strong>.
        Kiedy ktoś wpisuje „dentysta Kraków" albo „hydraulik pilnie", algorytm Local Pack decyduje
        w ułamku sekundy, które firmy pojawią się w słynnej <strong>trójce na mapie</strong> — i te
        właśnie firmy zbierają 80% telefonów, kliknięć i klientów z takiego zapytania.
      </p>
      <p>
        Poniższa lista zawiera <strong>34 udokumentowane czynniki rankingowe</strong> Google Business Profile,
        sklasyfikowane według realnego wpływu na widoczność w Local Pack. Każdy czynnik ma ocenę
        od A (krytyczny — zaniedbanie eliminuje Cię z wyników) do E (marginalny — pracuj nad nim
        tylko gdy wszystko ważniejsze jest zadbane).
      </p>
      <blockquote>
        Lista opiera się na badaniach BrightLocal Local Search Ranking Factors Survey, analizach Whitespark
        i Local SEO Guide oraz obserwacjach korelacyjnych z setek audytów wizytówek. Google nie ujawnia
        dokładnych wag algorytmu — poniższe oceny odzwierciedlają aktualny konsensus specjalistów.
      </blockquote>

      <h2>Trzy filary algorytmu lokalnego Google</h2>
      <p>
        Zanim przejdziemy do listy, ważne jest zrozumienie logiki algorytmu. Google oficjalnie przyznaje,
        że ocenia wizytówki na podstawie trzech osi:
      </p>
      <ul>
        <li>
          <strong>Relevance (Trafność)</strong> — czy profil odpowiada na to, czego szuka użytkownik?
          Wpływają tu: kategoria główna, opis, usługi, słowa kluczowe. Ten filar kontrolujesz w 100%.
        </li>
        <li>
          <strong>Distance (Odległość)</strong> — jak daleko firma jest od miejsca wyszukiwania?
          Przy aktywnej lokalizacji Google używa GPS; bez niej bierze centrum wyszukiwanego miasta lub ulicę.
          Tego filaru zasadniczo nie zmienisz bez fizycznej zmiany adresu.
        </li>
        <li>
          <strong>Prominence (Popularność)</strong> — jak rozpoznawalna jest firma w sieci i poza nią?
          Liczba i jakość recenzji, wzmianki, aktywność profilu, linki do strony www.
        </li>
      </ul>
      <p>
        Gdy widzisz, że konkurent z gorszym profilem wyprzedza Cię w wynikach — prawie zawsze przyczyną
        jest albo mniejsza odległość (jego lokal jest bliżej wyszukiwanego centrum), albo znacznie silniejsza
        baza recenzji. Oba elementy można zaadresować strategicznie.
      </p>

      <h2>Legenda kategorii ważności</h2>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor: '#18181b'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-16">Ocena</th>
              <th className="text-left px-4 py-3 text-white font-semibold w-36">Znaczenie</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Co to oznacza w praktyce</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 text-center"><span className="inline-block font-bold px-2.5 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-4 py-3 font-semibold text-ink">Krytyczny</td>
              <td className="px-4 py-3 text-zinc-600">Zaniedbanie tego czynnika może sprawić, że wizytówka w ogóle nie pojawi się na kluczowe frazy. Działaj tu absolutnie w pierwszej kolejności.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 text-center"><span className="inline-block font-bold px-2.5 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-4 py-3 font-semibold text-ink">Ważny</td>
              <td className="px-4 py-3 text-zinc-600">Silnie wpływa na pozycję. Zadbaj o te elementy po opanowaniu czynników A — i utrzymuj je regularnie, nie jednorazowo.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 text-center"><span className="inline-block font-bold px-2.5 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-4 py-3 font-semibold text-ink">Mniej ważny</td>
              <td className="px-4 py-3 text-zinc-600">Zauważalny wpływ, szczególnie w bardzo konkurencyjnych niszach. Warto wdrożyć, ale nie kosztem zaniedbania A i B.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 text-center"><span className="inline-block font-bold px-2.5 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-4 py-3 font-semibold text-ink">Mały czynnik</td>
              <td className="px-4 py-3 text-zinc-600">Niewielki bezpośredni wpływ rankingowy. Może być tie-breaker gdy dwie wizytówki są bardzo wyrównane. Wdrażaj gdy masz czas i zasoby.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-center"><span className="inline-block font-bold px-2.5 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-4 py-3 font-semibold text-ink">Mało ważny</td>
              <td className="px-4 py-3 text-zinc-600">Marginalny wpływ na pozycję. Przydatne dla konwersji i UX odwiedzających, ale nie ruszaj tego dopóki A–D są niekompletne.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kategoria A — Czynniki krytyczne</h2>
      <p>
        To fundamenty, bez których wizytówka nie ma szans na top 3. Zaniedbanie choćby jednego z tych
        czynników praktycznie eliminuje Cię z rywalizacji w Local Pack na frazy komercyjne z intencją zakupową.
        Wdrożenie wszystkich dziewięciu to minimum startowe — nie przewaga, lecz wejście do gry.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#FF6A00'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Znaczenie i wpływ</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Jak wdrożyć</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>1</td>
              <td className="px-4 py-3 font-semibold text-ink">Główna kategoria działalności</td>
              <td className="px-4 py-3 text-zinc-600">Najważniejszy pojedynczy sygnał trafności w całym algorytmie. Google dopasowuje kategorię bezpośrednio do frazy wyszukiwania. Zła lub zbyt ogólna kategoria powoduje niewidoczność na kluczowe zapytania niezależnie od jakości reszty profilu.</td>
              <td className="px-4 py-3 text-zinc-600">Testuj różne kategorie — ta sama branża może mieć kilka opcji o dramatycznie różnych wynikach. Sprawdź kategorie topowych konkurentów w Twoim rynku i porównaj z dostępnymi opcjami w GBP.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>2</td>
              <td className="px-4 py-3 font-semibold text-ink">Odległość od miejsca wyszukiwania</td>
              <td className="px-4 py-3 text-zinc-600">Google priorytetyzuje firmy bliskie wyszukującemu. To czynnik, który Twoi konkurenci znają i o którym nic nie możesz zrobić bez zmiany fizycznej lokalizacji. Jedyną strategią jest bycie lepszym we wszystkich pozostałych czynnikach.</td>
              <td className="px-4 py-3 text-zinc-600">Jeśli obsługujesz klientów poza siedzibą — skonfiguruj Service Area. Jeśli działasz zdalnie — rozważ adres w centrum obsługiwanego miasta (biuro wirtualne lub coworking z prawdziwym adresem).</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>3</td>
              <td className="px-4 py-3 font-semibold text-ink">Łączna liczba recenzji Google</td>
              <td className="px-4 py-3 text-zinc-600">Recenzje to jeden z najpotężniejszych sygnałów Prominence. Większa baza opinii = wyższe zaufanie algorytmu i wyższy CTR w wynikach. Firmy z 50+ recenzjami statystycznie dominują w Local Pack w większości branż w Polsce.</td>
              <td className="px-4 py-3 text-zinc-600">Wdróż stały proces pozyskiwania recenzji — nie kampanię jednorazową. Automatyczny SMS po zakończeniu usługi, QR kod w lokalu, link w stopce e-mail — każda z metod podwaja lub potraja tempo zbierania opinii.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>4</td>
              <td className="px-4 py-3 font-semibold text-ink">Średnia ocena gwiazdkowa</td>
              <td className="px-4 py-3 text-zinc-600">Ocena poniżej 4,0 drastycznie obniża CTR niezależnie od pozycji. Algorytm traktuje niską średnią jako sygnał słabej jakości usługi. Idealny zakres dla widoczności: 4,3–4,8 — zbyt wysoka ocena przy małej liczbie opinii może być uznana za podejrzaną.</td>
              <td className="px-4 py-3 text-zinc-600">Odpowiadaj na każdą negatywną opinię spokojnie i konstruktywnie — publiczna reakcja właściciela wpływa na decyzje nowych klientów. Każda nowa wysoka ocena podnosi średnią — wolumen i jakość recenzji są ze sobą nierozłączne.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>5</td>
              <td className="px-4 py-3 font-semibold text-ink">Spójność NAP w sieci</td>
              <td className="px-4 py-3 text-zinc-600">Nazwa, adres i numer telefonu muszą być identyczne (dosłownie — ta sama kolejność słów, ten sam format numeru) we wszystkich miejscach w sieci: strona www, katalogi, social media, portale branżowe. Rozbieżności dezorientują algorytm i obniżają wiarygodność profilu.</td>
              <td className="px-4 py-3 text-zinc-600">Wykonaj audyt NAP: wyszukaj nazwę firmy w Google, sprawdź Panorama Firm, Yelp, Facebook, Apple Maps. Każda rozbieżność wymaga korekty bezpośrednio w danym serwisie. Więcej o audycie NAP znajdziesz w osobnym artykule.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>6</td>
              <td className="px-4 py-3 font-semibold text-ink">Weryfikacja i kompletność profilu</td>
              <td className="px-4 py-3 text-zinc-600">Niezweryfikowana wizytówka ma mocno ograniczoną widoczność. Kompletność profilu — kategoria, opis, godziny, zdjęcia, usługi, link do strony — to sygnał aktywnej i wiarygodnej firmy. Brakujące pola Google interpretuje jako zaniedbany profil.</td>
              <td className="px-4 py-3 text-zinc-600">Zweryfikuj profil przez SMS, wideorozmowę lub pocztówkę. Uzupełnij absolutnie każde dostępne pole. Sprawdź completeness score w sekcji „Profil" w panelu GBP — dąż do 100%.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>7</td>
              <td className="px-4 py-3 font-semibold text-ink">Świeżość i regularność recenzji</td>
              <td className="px-4 py-3 text-zinc-600">Google preferuje profile z aktywnymi, bieżącymi opiniami. 100 recenzji sprzed 3 lat znaczy mniej niż 30 z ostatnich 6 miesięcy. Algorytm mierzy zarówno <em>recency</em> (świeżość), jak i <em>velocity</em> (prędkość przyrostu nowych opinii) — oba wskaźniki mają osobny ciężar rankingowy.</td>
              <td className="px-4 py-3 text-zinc-600">Nie zbieraj recenzji kampanijnie. Stały proces (automatyczny SMS po każdej usłudze) zapewnia regularny napływ świeżych opinii. Cel minimum dla małej firmy: 2–4 nowe recenzje miesięcznie bez przerwy.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>8</td>
              <td className="px-4 py-3 font-semibold text-ink">Słowo kluczowe w nazwie firmy</td>
              <td className="px-4 py-3 text-zinc-600">Kontrowersyjny, ale silnie udowodniony korelacyjnie czynnik. Firma „Hydraulik Jan Kowalski Warszawa" pojawia się wyżej niż „HJK Services" na frazy hydrauliczne. Google traktuje naturalną nazwę opisową jako sygnał relevancji. Celowe dodawanie słów kluczowych do nazwy narusza regulamin GBP.</td>
              <td className="px-4 py-3 text-zinc-600">Jeśli Twoja firma ma naturalną, opisową nazwę — korzystaj z niej w pełni. Nie dodawaj sztucznie słów kluczowych — to naruszenie regulaminu Google i może skutkować zawieszeniem profilu lub usunięciem zmodyfikowanej nazwy przez Google.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold" style={{color:'#FF6A00'}}>9</td>
              <td className="px-4 py-3 font-semibold text-ink">Trafność kategorii do frazy wyszukiwania</td>
              <td className="px-4 py-3 text-zinc-600">Google nie rankuje wizytówek „za wszystko". Algorytm zestawia dostępne kategorie profilu z semantyczną intencją zapytania. Profil dentysty nie pojawi się na „ortodonta" nawet gdy to słowo jest w opisie — chyba że ma kategorię ortodontyczną. Brak odpowiedniej kategorii = pominięcie niezależnie od innych czynników.</td>
              <td className="px-4 py-3 text-zinc-600">Mapuj frazy, na które chcesz być widoczny. Każda kluczowa fraza powinna mieć odpowiadającą kategorię główną lub dodatkową. Sprawdzaj w Google Search Console, na jakie zapytania lokalne pojawia się wizytówka — luki to brakujące kategorie.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kategoria B — Czynniki ważne</h2>
      <p>
        Po zadbaniu o wszystkie czynniki A, te poniżej decydują, czy Twoja wizytówka wyprzedzi
        konkurenta o podobnej lokalizacji i zbliżonej liczbie recenzji. To czynniki wymagające
        regularnej, systematycznej pracy — nie jednorazowej konfiguracji. Zaniedbanie ich przez
        kilka miesięcy jest widoczne w wynikach.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#ea580c'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Znaczenie i wpływ</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Jak wdrożyć</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>10</td>
              <td className="px-4 py-3 font-semibold text-ink">Odpowiedzi właściciela na recenzje</td>
              <td className="px-4 py-3 text-zinc-600">Google oficjalnie podaje odpowiedzi na recenzje jako czynnik wpływający na widoczność. Właściciel odpowiadający na opinie wysyła sygnał aktywności i zaangażowania. Brak odpowiedzi na negatywne opinie jest publicznie widoczny i silnie obniża CTR profilu.</td>
              <td className="px-4 py-3 text-zinc-600">Odpowiadaj na każdą recenzję w ciągu 48 godzin. Na pozytywne: podziękuj i personalnie nawiąż do usługi. Na negatywne: zachowaj spokój, przyznaj błąd jeśli był, zaproponuj kontakt prywatny. Unikaj szablonowych odpowiedzi — Google i klienci je rozpoznają.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>11</td>
              <td className="px-4 py-3 font-semibold text-ink">Zdjęcia firmy — liczba i regularność</td>
              <td className="px-4 py-3 text-zinc-600">Zdjęcia są silnym sygnałem aktywności profilu. Google premiuje wizytówki z dużą liczbą zdjęć dodawanych regularnie przez właściciela. Badania pokazują, że wizytówki z 100+ zdjęciami mają wyższy CTR o 520% i więcej połączeń telefonicznych o 473% niż średnia rynkowa.</td>
              <td className="px-4 py-3 text-zinc-600">Minimum 5–10 nowych zdjęć miesięcznie. Fotografie wnętrza, zewnętrza, zespołu i realizacji mają najsilniejszy wpływ. Zdjęcia powinny mieć co najmniej 720×720 px — Google może pomijać zdjęcia niskiej jakości.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>12</td>
              <td className="px-4 py-3 font-semibold text-ink">Opis firmy ze słowami kluczowymi</td>
              <td className="px-4 py-3 text-zinc-600">750-znakowy opis to bezpośredni sygnał trafności dla algorytmu. Słowa kluczowe umieszczone naturalnie w opisie pomagają Google zrozumieć zakres usług firmy. Opis wyświetla się użytkownikom i wpływa na decyzję o kliknięciu w wizytówkę.</td>
              <td className="px-4 py-3 text-zinc-600">Napisz opis zawierający 2–3 główne frazy kluczowe, nazwę miasta i specjalizację. Używaj pełnych 750 znaków. Unikaj upychania słów kluczowych — opis musi brzmieć naturalnie dla człowieka i dla algorytmu.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>13</td>
              <td className="px-4 py-3 font-semibold text-ink">Posty Google — regularność i treść</td>
              <td className="px-4 py-3 text-zinc-600">Regularne posty wysyłają Google sygnał, że firma jest aktywna i relevantna. Posty z odpowiednimi słowami kluczowymi wzmacniają trafność profilu dla konkretnych fraz. Wizytówki bez postów od miesięcy traktowane są przez algorytm jako mniej aktywne.</td>
              <td className="px-4 py-3 text-zinc-600">Minimum 1–2 posty tygodniowo. Typy treści: aktualności, oferty, produkty, realizacje. Każdy post powinien zawierać CTA (zadzwoń, umów się, sprawdź) i zdjęcie. Posty wygasają po 7 dniach — planuj z wyprzedzeniem.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>14</td>
              <td className="px-4 py-3 font-semibold text-ink">Kompletne i aktualne godziny otwarcia</td>
              <td className="px-4 py-3 text-zinc-600">Niekompletne lub błędne godziny to bezpośredni sygnał niezadbania profilu. Klienci, którzy przyjadą po godzinach podanych w Google i zastają zamkniętą firmę, zostawiają negatywne recenzje — co skutkuje podwójną karą rankingową.</td>
              <td className="px-4 py-3 text-zinc-600">Uzupełnij godziny dla każdego dnia tygodnia, łącznie z niedzielami i dniami gdy firma jest zamknięta. Aktualizuj godziny przed każdą przerwą świąteczną. Włącz godziny specjalne dla lokalnych świąt.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>15</td>
              <td className="px-4 py-3 font-semibold text-ink">Katalog usług i produktów w profilu</td>
              <td className="px-4 py-3 text-zinc-600">Sekcja usług i produktów w GBP to dodatkowe miejsce na słowa kluczowe i opis zakresu działalności. Google używa tych danych do lepszego dopasowania profilu do szczegółowych zapytań. Wizytówki bez wypełnionego katalogu mają widoczną lukę trafności.</td>
              <td className="px-4 py-3 text-zinc-600">Dodaj wszystkie świadczone usługi z opisem i ceną (jeśli możliwe). Każda usługa to osobna fraza kluczowa. Używaj nazw, które klienci wpisują w wyszukiwarce — nie żargonu branżowego. Maksymalny opis usługi: 300 znaków.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>16</td>
              <td className="px-4 py-3 font-semibold text-ink">Strona www z lokalnymi sygnałami SEO</td>
              <td className="px-4 py-3 text-zinc-600">Google łączy dane z profilu GBP ze stroną www podlinkowaną w wizytówce. Strona z lokalnymi sygnałami (nazwa miasta, adres, lokalne frazy w tytułach i nagłówkach) wzmacnia sygnały relevancji całego profilu i potwierdza NAP.</td>
              <td className="px-4 py-3 text-zinc-600">Upewnij się, że strona ma adres firmy identyczny z GBP, lokalne słowa kluczowe w tytule strony i H1 oraz szybki czas ładowania na mobile. Implementacja Local Schema (czynnik nr 22) potęguje efekt.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold" style={{color:'#ea580c'}}>17</td>
              <td className="px-4 py-3 font-semibold text-ink">Sekcja Q&A — aktywna z odpowiedziami</td>
              <td className="px-4 py-3 text-zinc-600">Pytania i odpowiedzi w wizytówce są indeksowane przez Google i pojawiają się w wynikach dla szczegółowych zapytań. Pytania bez odpowiedzi obniżają wrażenie aktywności profilu. Właściciel może sam dodawać pytania i odpowiadać — to legalna, skuteczna optymalizacja.</td>
              <td className="px-4 py-3 text-zinc-600">Dodaj 5–10 typowych pytań klientów z pełnymi odpowiedziami zawierającymi słowa kluczowe. Monitoruj nowe pytania i odpowiadaj w ciągu 24 godzin. Zgłaszaj do Google pytania wprowadzające w błąd lub spamowe.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kategoria C — Czynniki mniej ważne</h2>
      <p>
        Czynniki kategorii C mają mierzalny wpływ na widoczność, ale rzadko decydują o wyniku
        samodzielnie. Ich wartość rośnie w bardzo konkurencyjnych niszach, gdzie top 3 wizytówki
        są niemal identyczne pod względem A i B. Wdrażaj je po opanowaniu podstaw.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#ca8a04'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Znaczenie i wpływ</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Jak wdrożyć</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>18</td>
              <td className="px-4 py-3 font-semibold text-ink">Kategorie dodatkowe</td>
              <td className="px-4 py-3 text-zinc-600">GBP pozwala dodać do 9 kategorii dodatkowych. Każda rozszerza zakres fraz, na które wizytówka może być widoczna. Zbyt szerokie lub błędne kategorie dodatkowe mogą jednak rozmywać sygnały trafności profilu.</td>
              <td className="px-4 py-3 text-zinc-600">Dodaj max. 4–5 kategorii, które naprawdę odpowiadają Twojej ofercie. Sprawdź kategorie używane przez topowych konkurentów. Nie dodawaj kategorii tylko dlatego, że brzmią powiązanie — muszą odzwierciedlać realne usługi.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>19</td>
              <td className="px-4 py-3 font-semibold text-ink">Lokalne cytowania — katalogi i serwisy branżowe</td>
              <td className="px-4 py-3 text-zinc-600">Wzmianki o firmie w katalogach lokalnych i branżowych (Panorama Firm, Yelp, TripAdvisor, fachowy.pl) wzmacniają sygnał Prominence. Każde cytowanie potwierdza istnienie firmy w danym miejscu i branży — dla algorytmu to kolejny głos w wyborach.</td>
              <td className="px-4 py-3 text-zinc-600">Zadbaj o obecność w 10–15 katalogach ogólnych i 3–5 branżowych. Kluczowe: NAP identyczny we wszystkich wpisach. Jakość cytowania ważniejsza niż ilość — unikaj katalogów spamowych i niskiej jakości.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>20</td>
              <td className="px-4 py-3 font-semibold text-ink">Atrybuty profilu GBP</td>
              <td className="px-4 py-3 text-zinc-600">Atrybuty opisują cechy firmy (parking, dostępność dla niepełnosprawnych, metody płatności, obsługa w języku angielskim). Pomagają Google dopasować profil do zapytań z filtrem. Wyselekcjonowane atrybuty pojawiają się bezpośrednio w wizytówce.</td>
              <td className="px-4 py-3 text-zinc-600">Przejdź przez listę dostępnych atrybutów dla swojej kategorii i zaznacz wszystkie prawdziwe. Nie zaznaczaj fałszywych — klienci mogą je obalić w recenzjach, co szkodzi wiarygodności. Sprawdź jakie atrybuty widzą Twoi klienci w wizytówce.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>21</td>
              <td className="px-4 py-3 font-semibold text-ink">Obszar obsługi (Service Area)</td>
              <td className="px-4 py-3 text-zinc-600">Firmy wyjazdowe (hydraulicy, elektrycy, sprzątanie) powinny skonfigurować obszar obsługi zamiast stałego adresu lub jako uzupełnienie. Algorytm rozszerza potencjalny zasięg widoczności na wszystkie miejscowości z obszaru obsługi.</td>
              <td className="px-4 py-3 text-zinc-600">W ustawieniach GBP dodaj wszystkie miejscowości, do których faktycznie dojeżdżasz. Nie dodawaj miast, do których nie docierasz — to naruszenie regulaminu. Limit: 20 obszarów obsługi na wizytówkę.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>22</td>
              <td className="px-4 py-3 font-semibold text-ink">Schema LocalBusiness na stronie www</td>
              <td className="px-4 py-3 text-zinc-600">Dane strukturalne (JSON-LD) na stronie www pomagają Google powiązać stronę z wizytówką GBP i potwierdzić NAP bez analizy treści. Poprawna implementacja może generować rich snippets (oceny, godziny, adres) bezpośrednio w wynikach wyszukiwania.</td>
              <td className="px-4 py-3 text-zinc-600">Zaimplementuj typ LocalBusiness (lub branżowy podtyp: Restaurant, MedicalBusiness, LegalService itd.) z pełnym NAP, godzinami i URL-em. Waliduj przez Google Rich Results Test po wdrożeniu.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold" style={{color:'#ca8a04'}}>23</td>
              <td className="px-4 py-3 font-semibold text-ink">Słowa kluczowe w treści odpowiedzi na recenzje</td>
              <td className="px-4 py-3 text-zinc-600">Odpowiedzi właściciela na recenzje są indeksowane przez Google. Naturalne użycie nazwy usługi i miasta w treści odpowiedzi wzmacnia sygnały trafności profilu. To jeden z nielicznych sposobów na dodanie słów kluczowych do treści generowanej przez użytkowników.</td>
              <td className="px-4 py-3 text-zinc-600">W odpowiedziach naturalnie nawiązuj do konkretnej usługi i lokalizacji: „Cieszymy się, że wybrali Państwo nasz serwis ogumienia w Warszawie…". Unikaj sztucznego upychania fraz — Google i klienci czytają te odpowiedzi.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kategoria D — Małe czynniki</h2>
      <p>
        Czynniki kategorii D mają niewielki bezpośredni wpływ na pozycję, ale mogą być
        tie-breakerem w sytuacjach ekstremalnej konkurencji, gdy dwie wizytówki są niemal
        identyczne pod każdym innym względem. Część z nich (linki, wzmianki) oddziałuje
        pośrednio przez wzmacnianie ogólnej pozycji strony www.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#1d4ed8'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Znaczenie i wpływ</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Jak wdrożyć</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>24</td>
              <td className="px-4 py-3 font-semibold text-ink">Linki zewnętrzne do strony www</td>
              <td className="px-4 py-3 text-zinc-600">Profil linkowy strony www powiązanej z wizytówką GBP wpływa na ogólną autorytywność domeny, co pośrednio przekłada się na lokalne wyniki. Google traktuje stronę z silnym profilem linkowym jako bardziej renomowaną firmę.</td>
              <td className="px-4 py-3 text-zinc-600">Buduj linki z lokalnych portali, branżowych katalogów, mediów lokalnych i stron partnerów. Jakość linku jest ważniejsza niż liczba. Linki z polskich domen i lokalnych mediów mają szczególną wartość dla local SEO.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>25</td>
              <td className="px-4 py-3 font-semibold text-ink">Geolokalizacja EXIF w zdjęciach</td>
              <td className="px-4 py-3 text-zinc-600">Dane EXIF zdjęć (w tym GPS) mogą dostarczać Google informacji o lokalizacji firmy, szczególnie gdy zdjęcia są wykonywane bezpośrednio w lokalu. Wpływ jest mały i niepotwierdzony oficjalnie, ale testy wykazują korelację w branżach mocno wizualnych.</td>
              <td className="px-4 py-3 text-zinc-600">Fotografuj materiały do GBP telefonem z aktywną lokalizacją, znajdując się fizycznie w lokalu firmy. Nie usuwaj metadanych GPS ze zdjęć przed uploadem. Google może ignorować te dane w przyszłych aktualizacjach algorytmu.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>26</td>
              <td className="px-4 py-3 font-semibold text-ink">Wiek wizytówki GBP</td>
              <td className="px-4 py-3 text-zinc-600">Starsze, stabilne wizytówki cieszą się wyższym zaufaniem algorytmu. Profil z 5-letnią historią bez naruszeń regulaminu jest bardziej odporny na wahania algorytmu niż nowy profil z identyczną optymalizacją — analogicznie jak dojrzała domena w klasycznym SEO.</td>
              <td className="px-4 py-3 text-zinc-600">Nie usuwaj i nie twórz od nowa starych wizytówek — nawet jeśli wymagają gruntownej optymalizacji. Zaktualizuj istniejący profil. Jeśli przejąłeś firmę, zadbaj o transfer właściciela zamiast tworzenia nowego profilu.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>27</td>
              <td className="px-4 py-3 font-semibold text-ink">Czas odpowiedzi na wiadomości w GBP</td>
              <td className="px-4 py-3 text-zinc-600">Google monitoruje czas odpowiedzi na wiadomości i wyświetla tę informację użytkownikom. Szybki czas (poniżej 1 godziny) jest wyświetlany jako „zazwyczaj odpowiada szybko" i zwiększa CTR. Długi czas lub brak odpowiedzi działa odwrotnie.</td>
              <td className="px-4 py-3 text-zinc-600">Włącz powiadomienia mobilne dla wiadomości GBP i odpowiadaj w ciągu godziny w godzinach pracy. Jeśli nie możesz utrzymać tego tempa — rozważ wyłączenie funkcji wiadomości. Brak odpowiedzi przez długi czas jest gorszy niż brak funkcji.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>28</td>
              <td className="px-4 py-3 font-semibold text-ink">Linki zewnętrzne wskazujące na profil GBP</td>
              <td className="px-4 py-3 text-zinc-600">Bezpośrednie linki do profilu Google Business Profile (maps.google.com lub g.page) z zewnętrznych stron wzmacniają sygnał popularności wizytówki. To mniej zbadany, ale korelacyjnie potwierdzony czynnik w analizach Whitespark.</td>
              <td className="px-4 py-3 text-zinc-600">Umieść link do profilu GBP na swojej stronie www, w stopce e-mail i w profilach social media. Zarejestruj się w katalogach przyjmujących bezpośredni link do Google Maps. Nie kupuj linków — to naruszenie regulaminu Google.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold" style={{color:'#1d4ed8'}}>29</td>
              <td className="px-4 py-3 font-semibold text-ink">Lokalne wzmianki (unlinked mentions)</td>
              <td className="px-4 py-3 text-zinc-600">Wzmianki o nazwie firmy, adresie lub numerze telefonu na stronach bez linku są mimo to rozpoznawane przez algorytm Google (entity recognition). Wzmacniają sygnał Prominence bez konieczności pozyskania linku zwrotnego.</td>
              <td className="px-4 py-3 text-zinc-600">Monitoruj wzmianki przez Google Alerts. Aktywność PR lokalna (artykuły w lokalnej prasie online), sponsoring wydarzeń i udział w rankingach branżowych generują naturalne wzmianki — nie można ich bezpośrednio „zamówić".</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Kategoria E — Czynniki mało ważne</h2>
      <p>
        Ostatnia kategoria obejmuje elementy o marginalnym lub bardzo pośrednim wpływie na pozycję
        w Local Pack. Nie ignoruj ich całkowicie — niektóre mają realną wartość dla konwersji
        odwiedzających profil — ale nie poświęcaj im uwagi, gdy czynniki A–D są jeszcze niezaopiekowane.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#52525b'}}>
              <th className="text-left px-4 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Znaczenie i wpływ</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Jak wdrożyć</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold text-zinc-500">30</td>
              <td className="px-4 py-3 font-semibold text-ink">Filmy wideo w profilu</td>
              <td className="px-4 py-3 text-zinc-600">Wideo w profilu GBP pojawia się w karuzeli zdjęć i może zwiększać czas spędzony na profilu. Bezpośredni wpływ rankingowy jest jednak minimalny i znacznie mniejszy niż fotografii — wiele testów nie wykazuje korelacji z pozycją.</td>
              <td className="px-4 py-3 text-zinc-600">Dodaj 1–3 krótkie wideo (30–60 sekund) pokazujące firmę, usługi lub realizacje. Format MP4, max. 75 MB, min. 720p. Traktuj wideo jako uzupełnienie galerii, nie substytut regularnych zdjęć.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold text-zinc-500">31</td>
              <td className="px-4 py-3 font-semibold text-ink">Linki do mediów społecznościowych w profilu</td>
              <td className="px-4 py-3 text-zinc-600">GBP pozwala dodać linki do profili społecznościowych. Bezpośredni wpływ na pozycję jest marginalny, ale aktywne profile społecznościowe ogólnie wzmacniają sygnał Prominence i mogą generować dodatkowe cytowania i wzmianki.</td>
              <td className="px-4 py-3 text-zinc-600">Dodaj linki wyłącznie do aktywnych profili. Nieaktywne konto na Facebooku z ostatnim postem sprzed 2 lat to negatywny sygnał dla odwiedzających wizytówkę, który może osłabić konwersję.</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-4 py-3 font-bold text-zinc-500">32</td>
              <td className="px-4 py-3 font-semibold text-ink">Specjalne godziny i godziny świąteczne</td>
              <td className="px-4 py-3 text-zinc-600">Aktualizowanie godzin specjalnych to sygnał aktywności profilu i zapobieganie negatywnym recenzjom od klientów, którzy przyjechali do zamkniętej firmy. Bezpośredni wpływ rankingowy jest minimalny, ale wpływ na reputację — bardzo realny.</td>
              <td className="px-4 py-3 text-zinc-600">Ustaw przypomnienie przed każdymi dłuższymi świętami (Wielkanoc, Boże Narodzenie) i zaktualizuj godziny specjalne. GBP często sam sugeruje aktualizację godzin świątecznych — nie ignoruj tych powiadomień.</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-4 py-3 font-bold text-zinc-500">33</td>
              <td className="px-4 py-3 font-semibold text-ink">Atrybuty dostępności i cechy lokalu</td>
              <td className="px-4 py-3 text-zinc-600">Atrybuty takie jak „Dostępne wejście dla wózków", „Toaleta dla klientów" czy „Płatność kartą" pojawiają się w wizytówce i wpływają na CTR użytkowników filtrujących wyniki. Bezpośredni wpływ rankingowy jest marginalny, ale dobry UX profilu poprawia konwersję.</td>
              <td className="px-4 py-3 text-zinc-600">Uzupełnij atrybuty dostępności jeśli są dostępne dla Twojej kategorii. Mają większe znaczenie dla konwersji odwiedzającego profil niż dla samego rankingu — ale lepszy CTR pośrednio wzmacnia pozycję.</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-zinc-500">34</td>
              <td className="px-4 py-3 font-semibold text-ink">Integracje z zewnętrznymi platformami rezerwacyjnymi</td>
              <td className="px-4 py-3 text-zinc-600">Połączenie GBP z Booksy, Calendly, OpenTable i podobnymi platformami dodaje przycisk „Zarezerwuj" bezpośrednio do wizytówki. Silnie zwiększa konwersję na urządzeniach mobilnych, ale ma minimalny bezpośredni wpływ na pozycję rankingową profilu.</td>
              <td className="px-4 py-3 text-zinc-600">Jeśli korzystasz z platformy rezerwacyjnej — podłącz ją przez ustawienia „Informacje o wizytach" w GBP. Przycisk rezerwacji w wynikach mobilnych znacznie zwiększa współczynnik konwersji, co może poprawiać sygnały behawioralne.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Zbiorcza tabela wszystkich 34 czynników</h2>
      <p>
        Kompletna lista wszystkich czynników w jednym miejscu — posortowana według kategorii.
        Służy jako szybka ściąga przy audycie wizytówki lub planowaniu działań optymalizacyjnych.
      </p>
      <div className="overflow-x-auto my-6 rounded-xl border border-zinc-200">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{backgroundColor:'#18181b'}}>
              <th className="text-center px-3 py-3 text-white font-semibold w-14">Kat.</th>
              <th className="text-left px-3 py-3 text-white font-semibold w-8">#</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Czynnik rankingowy</th>
              <th className="text-left px-4 py-3 text-white font-semibold w-28">Filar Google</th>
              <th className="text-left px-4 py-3 text-white font-semibold">Priorytet działania</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">1</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Główna kategoria działalności</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Weryfikuj i testuj różne kategorie</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">2</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Odległość od miejsca wyszukiwania</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Odległość</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Konfiguruj Service Area dla firm wyjazdowych</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">3</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Łączna liczba recenzji Google</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Wdróż stały, automatyczny proces zbierania opinii</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">4</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Średnia ocena gwiazdkowa</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Odpowiadaj na negatywne; cel: 4,3–4,8</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">5</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Spójność NAP w sieci</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Audyt NAP i ujednolicenie wszystkich wpisów</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">6</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Weryfikacja i kompletność profilu</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Zweryfikuj profil i uzupełnij wszystkie pola do 100%</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">7</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Świeżość i regularność recenzji</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Min. 2–4 nowe recenzje miesięcznie bez przerwy</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">8</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Słowo kluczowe w nazwie firmy</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Korzystaj z naturalnej opisowej nazwy firmy</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fee2e2',color:'#b91c1c'}}>A</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">9</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Trafność kategorii do frazy wyszukiwania</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Mapuj frazy na kategorie i wypełnij luki</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">10</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Odpowiedzi właściciela na recenzje</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Odpowiadaj w 48h na każdą opinię</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">11</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Zdjęcia firmy — liczba i regularność</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Min. 5–10 nowych zdjęć miesięcznie</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">12</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Opis firmy ze słowami kluczowymi</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Napisz opis wykorzystujący pełne 750 znaków</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">13</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Posty Google — regularność i treść</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">1–2 posty tygodniowo z CTA i zdjęciem</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">14</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Kompletne i aktualne godziny otwarcia</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Uzupełnij każdy dzień; aktualizuj przed świętami</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">15</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Katalog usług i produktów w profilu</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Dodaj wszystkie usługi z opisem i ceną</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">16</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Strona www z lokalnymi sygnałami SEO</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">NAP i lokalne frazy w tytule, H1 i treści strony</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#ffedd5',color:'#c2410c'}}>B</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">17</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Sekcja Q&A — aktywna z odpowiedziami</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Dodaj 5–10 pytań klientów z pełnymi odpowiedziami</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">18</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Kategorie dodatkowe</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Dodaj max. 4–5 trafnych kategorii dodatkowych</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">19</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Lokalne cytowania — katalogi i serwisy branżowe</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Obecność w 10–15 katalogach z identycznym NAP</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">20</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Atrybuty profilu GBP</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Uzupełnij wszystkie prawdziwe atrybuty</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">21</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Obszar obsługi (Service Area)</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Odległość</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Skonfiguruj dla firm wyjazdowych (max. 20 obszarów)</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">22</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Schema LocalBusiness na stronie www</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Implementuj JSON-LD z pełnym NAP i godzinami</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#fef9c3',color:'#a16207'}}>C</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">23</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Słowa kluczowe w odpowiedziach na recenzje</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Naturalnie nawiązuj do usługi i miasta w odpowiedziach</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">24</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Linki zewnętrzne do strony www (backlinks)</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Buduj linki z lokalnych mediów i katalogów branżowych</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">25</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Geolokalizacja EXIF w zdjęciach</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Fotografuj telefonem z aktywną lokalizacją w lokalu</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">26</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Wiek wizytówki GBP</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Nie usuwaj starych profili — aktualizuj je</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">27</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Czas odpowiedzi na wiadomości w GBP</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Odpowiadaj poniżej 1h lub wyłącz funkcję</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">28</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Linki zewnętrzne wskazujące na profil GBP</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Link do GBP na stronie www i w social media</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#dbeafe',color:'#1d4ed8'}}>D</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">29</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Lokalne wzmianki (unlinked mentions)</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">PR lokalny, sponsoring, udział w rankingach branżowych</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">30</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Filmy wideo w profilu</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Dodaj 1–3 krótkie wideo jako uzupełnienie zdjęć</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">31</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Linki do mediów społecznościowych w profilu</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Dodaj wyłącznie linki do aktywnych profili</td>
            </tr>
            <tr className="border-b border-zinc-100 bg-zinc-50">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">32</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Specjalne godziny i godziny świąteczne</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Aktualizuj przed każdymi dłuższymi świętami</td>
            </tr>
            <tr className="border-b border-zinc-100">
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">33</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Atrybuty dostępności i cechy lokalu</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Trafność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Uzupełnij dla poprawy CTR odwiedzających profil</td>
            </tr>
            <tr>
              <td className="px-3 py-2 text-center"><span className="inline-block font-bold px-2 py-0.5 rounded text-xs" style={{backgroundColor:'#f4f4f5',color:'#52525b'}}>E</span></td>
              <td className="px-3 py-2 text-zinc-400 text-xs font-mono">34</td>
              <td className="px-4 py-2 font-semibold text-ink text-xs">Integracje z zewnętrznymi platformami rezerwacyjnymi</td>
              <td className="px-4 py-2 text-zinc-500 text-xs">Popularność</td>
              <td className="px-4 py-2 text-zinc-600 text-xs">Podłącz jeśli używasz Booksy, OpenTable itp.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Jak korzystać z tej listy — plan działania</h2>
      <p>
        Najczęstszy błąd przy optymalizacji wizytówki Google to skupianie się na czynnikach
        z kategorii C, D i E — bo są łatwiejsze do wdrożenia — zamiast naprawić to, co naprawdę
        ma znaczenie. Dodanie wideo (E) przy jednoczesnym braku aktualnych godzin otwarcia (B)
        to jak malowanie ścian w domu bez fundamentów.
      </p>
      <ul>
        <li><strong>Tydzień 1–2:</strong> Audyt i naprawa wszystkich czynników A — kategoria, NAP, weryfikacja, kompletność profilu.</li>
        <li><strong>Tydzień 3–4:</strong> Wdrożenie procesu zbierania recenzji — automatyczny SMS, QR kod w lokalu, skrypt dla personelu.</li>
        <li><strong>Miesiąc 2:</strong> Systematyczna praca nad czynnikami B — zdjęcia, posty tygodniowe, Q&A, katalog usług, opis firmy.</li>
        <li><strong>Miesiąc 3–4:</strong> Czynniki C — cytowania lokalne, atrybuty, service area, schema markup na stronie.</li>
        <li><strong>Bieżąco:</strong> Monitorowanie wyników w GBP Insights, reagowanie na nowe recenzje, aktualizacja godzin.</li>
      </ul>
      <p>
        Czynniki D i E wdrażaj dopiero gdy plan powyżej jest w pełni zrealizowany. W większości
        przypadków <strong>dobrze zoptymalizowane czynniki A i B wystarczają, żeby znaleźć się
        w top 3 Local Pack</strong> w branżach o średniej i niskiej konkurencji.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Algorytm Google Business Profile jest złożony, ale logiczny. Priorytetyzuje firmy trafne,
        bliskie i renomowane. Nie istnieje żaden „hack", który zastąpi fundamenty: właściwą kategorię,
        dużą bazę świeżych recenzji, aktywny profil i spójny NAP w całej sieci.
      </p>
      <p>
        Wróć do tej listy co kwartał — algorytm Google się zmienia, a nowe czynniki pojawiają się
        razem z nowymi funkcjami GBP. To, co dziś jest kategorią D, za rok może awansować do B.
        Aktualizujemy ten artykuł przy każdej znaczącej zmianie algorytmu lokalnego.
      </p>
      <ul>
        <li>
          <Link href="/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/opinie-google-jak-zdobywac-skutecznie">
            Jak zbierać opinie Google bez nachalnego proszenia klientów
          </Link>
        </li>
        <li>
          <Link href="/nap-wizytowka-google-co-to-jest">
            NAP w wizytówce Google — czym jest i jak przeprowadzić audyt
          </Link>
        </li>
        <li>
          <Link href="/jak-dodac-local-schema-do-strony">
            Jak dodać Local Schema markup do strony — z gotowym kodem JSON-LD
          </Link>
        </li>
      </ul>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Zawirusowana strona
  ───────────────────────────────────────────────────────────────────────── */
  "zawirusowana-strona-wordpress-co-zrobic": (
    <>
      <h2>Jak poznać, że strona WordPress została zawirusowana?</h2>
      <p>
        Włamanie na stronę WordPress rzadko wygląda jak w filmie — hakerzy zazwyczaj nie chcą, żebyś wiedział o ich obecności tak długo, jak to możliwe. Objawy bywają subtelne i mylące. Oto najczęstsze sygnały, że coś jest nie tak:
      </p>
      <ul>
        <li><strong>Przekierowania na zewnętrzne strony</strong> — użytkownicy lądują na stronach z reklamami, phishingiem albo treściami dla dorosłych zamiast na Twojej witrynie.</li>
        <li><strong>Obcy kod w stopce lub nagłówku</strong> — podejrzane skrypty JavaScript, iframe'y, ukryte linki do obcych domen.</li>
        <li><strong>Ostrzeżenie Google</strong> — „Ta strona może być niebezpieczna" lub „Witryna zawiera szkodliwe programy" w wynikach wyszukiwania.</li>
        <li><strong>Spam w Google Search Console</strong> — nowe podstrony z obcymi słowami kluczowymi (często japońskimi, chińskimi lub farmaceutycznymi).</li>
        <li><strong>Powolne ładowanie lub awarie</strong> — złośliwy kod generuje obciążenie serwera i wysyła spam e-mail przez Twój hosting.</li>
        <li><strong>Nieznane konta administratora</strong> — w panelu WordPress pojawiają się użytkownicy, których nie zakładałeś.</li>
        <li><strong>Hosting zablokował konto</strong> — dobry hosting wykrywa masowe wysyłanie spamu i zawiesza konto z komunikatem o naruszeniu regulaminu.</li>
      </ul>
      <p>
        Jeśli widzisz którykolwiek z tych objawów — działaj natychmiast. Każda godzina zwłoki to czas, w którym hakerzy mogą pogłębiać szkody, a Google obniża zaufanie do Twojej domeny.
      </p>

      <h2>Krok 1 – Zrób backup i wejdź w tryb maintenance</h2>
      <p>
        Zanim cokolwiek zmienisz, zrób kopię zapasową obecnego stanu — nawet zawirusowanego. Może się przydać przy analizie wektora ataku. Następnie włącz tryb konserwacji (maintenance mode), żeby chronić odwiedzających. Możesz to zrobić przez plik <code>.htaccess</code> lub wtyczkę.
      </p>
      <p>
        Jeśli Twój hosting ma panel (cPanel, Plesk, Hetzner), pobierz pełną kopię plików i bazy danych przez menedżer plików lub FTP. Nie polegaj wyłącznie na wtyczkach do backupów — złośliwy kod mógł je zainfekować.
      </p>

      <h2>Krok 2 – Zeskanuj stronę narzędziami do wykrywania malware</h2>
      <p>
        Istnieje kilka narzędzi, które pomogą Ci zlokalizować zainfekowane pliki:
      </p>
      <ul>
        <li><strong>Wordfence Security</strong> — darmowa wtyczka z rozbudowanym skanerem. Po instalacji uruchom „Threat Scan" i sprawdź listę wykrytych plików.</li>
        <li><strong>Sucuri SiteCheck</strong> — skaner online. Wystarczy wpisać adres strony na sucuri.net/website-antivirus.</li>
        <li><strong>MalCare</strong> — alternatywa dla Wordfence, dobra przy dużych stronach WooCommerce.</li>
        <li><strong>Serwer FTP + narzędzie grep</strong> — jeśli masz dostęp SSH, możesz ręcznie szukać podejrzanego kodu: <code>grep -r "eval(base64_decode" /public_html/</code></li>
      </ul>
      <p>
        Zanotuj wszystkie zainfekowane pliki. Najczęściej złośliwy kod pojawia się w <code>wp-config.php</code>, plikach motywu, wtyczkach i pliku <code>index.php</code> w katalogu głównym.
      </p>

      <h2>Krok 3 – Usuń złośliwy kod i przywróć czyste pliki</h2>
      <p>
        Dla plików WordPressa (core) — pobierz świeżą kopię tej samej wersji WordPress ze strony wordpress.org i zastąp wszystkie pliki w <code>wp-admin/</code> i <code>wp-includes/</code>. Nigdy nie edytuj plików core ręcznie.
      </p>
      <p>
        Dla zainfekowanych wtyczek i motywów — usuń je całkowicie i zainstaluj od nowa z oficjalnych repozytoriów. Jeśli używasz premium motywu lub wtyczki, pobierz czystą wersję z konta zakupu.
      </p>
      <p>
        <strong>Nigdy nie usuwaj samego złośliwego kodu ręcznie bez zastąpienia całego pliku czystą wersją.</strong> Hakerzy często zostawiają kilka warstw backdoorów. Usunięcie jednej nie gwarantuje bezpieczeństwa.
      </p>

      <h2>Krok 4 – Zmień wszystkie hasła i klucze bezpieczeństwa</h2>
      <p>
        Po wyczyszczeniu plików natychmiast:
      </p>
      <ul>
        <li>Zmień hasło do konta administratora WordPress (i wszystkich innych użytkowników)</li>
        <li>Zmień hasło do bazy danych w <code>wp-config.php</code> i w panelu hostingu</li>
        <li>Zmień hasło do panelu hostingu i FTP</li>
        <li>Wygeneruj nowe klucze bezpieczeństwa WordPress (sekcja <code>AUTH_KEY</code> w <code>wp-config.php</code>) — możesz je wygenerować na api.wordpress.org/secret-key/1.1/salt/</li>
        <li>Usuń wszystkich nieznanych użytkowników administratora</li>
      </ul>

      <h2>Krok 5 – Zabezpiecz stronę przed kolejnym atakiem</h2>
      <p>
        Sama naprawa to połowa sukcesu. Jeśli nie usuniesz przyczyny włamania, hakerzy wrócą w ciągu kilku dni. Najczęstsze wektory ataku:
      </p>
      <ul>
        <li><strong>Przestarzałe wtyczki lub motyw</strong> — aktualizuj wszystko natychmiast po pojawieniu się nowych wersji</li>
        <li><strong>Słabe hasło</strong> — używaj hasła minimum 16 znaków, włącz 2FA (np. przez wtyczkę Google Authenticator for WP)</li>
        <li><strong>Nullowane premium wtyczki</strong> — pirackie wersje płatnych wtyczek zawierają celowo wbudowane backdoory</li>
        <li><strong>Brak ochrony wp-login.php</strong> — ogranicz dostęp do panelu logowania przez IP lub zainstaluj Limit Login Attempts Reloaded</li>
        <li><strong>Stare konto FTP</strong> — usuń nieużywane konta FTP w panelu hostingu</li>
      </ul>
      <p>
        Po przywróceniu strony zgłoś ją do Google przez Search Console (sekcja „Zabezpieczenia i działania ręczne" → „Poproś o sprawdzenie"). Google usunie ostrzeżenie po weryfikacji, zazwyczaj w ciągu 24–72 godzin.
      </p>

      <h2>Kiedy skorzystać z pomocy specjalisty?</h2>
      <p>
        Jeśli nie masz dostępu do FTP, nie znasz się na strukturze WordPressa lub złośliwy kod pojawia się ponownie po wyczyszczeniu — skontaktuj się ze specjalistą. Koszt profesjonalnego czyszczenia strony (100–500 zł) jest wielokrotnie niższy niż straty wynikające z długotrwałego zablokowania przez Google lub utraty danych klientów.
      </p>
      <p>
        Warto też wiedzieć, że zawirusowana strona może powodować inne objawy: jeśli po wyczyszczeniu widzisz pusty ekran, przeczytaj{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">jak naprawić biały ekran WordPress</Link>. Jeśli masz problem z zalogowaniem się do panelu, sprawdź{" "}
        <Link href="/nie-moge-zalogowac-sie-do-wordpressa">jak odzyskać dostęp do WordPressa</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/nie-moge-zalogowac-sie-do-wordpressa" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Nie mogę się zalogować do WordPressa – jak odzyskać dostęp?</Link></li>
          <li><Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Konflikt wtyczek WordPress – jak zdiagnozować i naprawić?</Link></li>
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Biały ekran (WSOD)
  ───────────────────────────────────────────────────────────────────────── */
  "bialy-ekran-wordpress-jak-naprawic": (
    <>
      <h2>Czym jest White Screen of Death w WordPress?</h2>
      <p>
        White Screen of Death (WSOD) to potoczna nazwa problemu, kiedy strona WordPress wyświetla tylko pustą, białą stronę — bez żadnego komunikatu błędu, bez treści, bez paska admina. Problem może dotyczyć całej strony, tylko frontendu albo tylko panelu administracyjnego.
      </p>
      <p>
        Dobra wiadomość: WSOD prawie zawsze jest naprawialny bez utraty danych. Zła: musisz działać po ciemku, bo WordPress nie mówi Ci co się stało. Poniżej znajdziesz wszystkie możliwe przyczyny i ich rozwiązania — sprawdzaj je po kolei.
      </p>

      <h2>Przyczyna 1 – Błąd w wtyczce lub motywie (najczęstsza)</h2>
      <p>
        Nowo zainstalowana lub zaktualizowana wtyczka albo motyw zawiera błąd PHP, który zatrzymuje działanie całego WordPressa. To zdecydowanie najczęstsza przyczyna białego ekranu.
      </p>
      <p>
        <strong>Rozwiązanie przez FTP/menedżer plików:</strong> Wejdź na serwer przez FTP lub panel hostingu. Przejdź do katalogu <code>wp-content/plugins/</code> i zmień nazwę folderu ostatnio zainstalowanej lub zaktualizowanej wtyczki (np. dodaj <code>-disabled</code> na końcu). Jeśli strona wróci — znalazłeś winowajcę. Możesz też zmienić nazwę całego folderu <code>plugins/</code> na <code>plugins-disabled/</code>, żeby dezaktywować wszystkie naraz.
      </p>
      <p>
        <strong>Rozwiązanie dla motywu:</strong> W katalogu <code>wp-content/themes/</code> zmień nazwę aktywnego motywu. WordPress automatycznie przełączy się na domyślny motyw (Twenty Twenty-Four).
      </p>

      <h2>Przyczyna 2 – Wyczerpany limit pamięci PHP</h2>
      <p>
        WordPress ma domyślnie ustawiony limit pamięci PHP (zazwyczaj 32 MB lub 64 MB), który jest za mały dla dużych stron z wieloma wtyczkami. Kiedy skrypt przekroczy limit, PHP kończy działanie bez komunikatu błędu — stąd biały ekran.
      </p>
      <p>
        <strong>Rozwiązanie:</strong> Dodaj lub zmodyfikuj linię w pliku <code>wp-config.php</code>:
      </p>
      <pre><code>define( 'WP_MEMORY_LIMIT', '256M' );</code></pre>
      <p>
        Jeśli to nie wystarczy, podnieś limit również po stronie serwera w pliku <code>php.ini</code> lub przez panel hostingu (szukaj opcji „PHP Memory Limit"). Standardowo 256 MB powinno wystarczyć dla większości stron.
      </p>

      <h2>Przyczyna 3 – Uszkodzony plik wp-config.php lub .htaccess</h2>
      <p>
        Przypadkowe usunięcie znaku, błędna edycja lub złośliwy kod w <code>wp-config.php</code> może wywołać biały ekran już na etapie ładowania WordPressa. Podobnie błędny <code>.htaccess</code> powoduje problemy z routingiem.
      </p>
      <p>
        <strong>Rozwiązanie dla .htaccess:</strong> Zmień nazwę pliku <code>.htaccess</code> na <code>.htaccess-backup</code> i sprawdź czy strona wróci. Jeśli tak — wygeneruj nowy plik przez panel WordPress (Ustawienia → Bezpośrednie odnośniki → Zapisz zmiany).
      </p>
      <p>
        <strong>Rozwiązanie dla wp-config.php:</strong> Pobierz świeżą kopię pliku <code>wp-config-sample.php</code> z oficjalnej paczki WordPress i porównaj ze swoim plikiem. Szczególnie sprawdź czy nie ma zbędnych znaków przed <code>&lt;?php</code> lub po ostatniej linii.
      </p>

      <h2>Przyczyna 4 – Błąd składni w functions.php</h2>
      <p>
        Edycja pliku <code>functions.php</code> motywu przez Panel → Edytor plików (lub ręcznie przez FTP) przy przypadkowym błędzie składni PHP natychmiast wywoła biały ekran. Nawet jeden brakujący średnik wystarczy.
      </p>
      <p>
        <strong>Rozwiązanie:</strong> Przez FTP otwórz <code>wp-content/themes/[nazwa-motywu]/functions.php</code> i cofnij ostatnią zmianę. Jeśli nie wiesz co zmieniłeś, pobierz czystą kopię motywu i zastąp plik.
      </p>

      <h2>Przyczyna 5 – Włącz tryb debugowania, żeby zobaczyć błąd</h2>
      <p>
        Jeśli żadna z powyższych metod nie pomogła, włącz debugowanie WordPress, żeby zobaczyć konkretny komunikat błędu. W pliku <code>wp-config.php</code> znajdź i zmień:
      </p>
      <pre><code>define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', false );</code></pre>
      <p>
        Błędy zostaną zapisane w pliku <code>wp-content/debug.log</code>. Otwórz go i znajdź ostatni wpis — zazwyczaj od razu wskażuje konkretny plik i linię kodu, gdzie wystąpił problem. Po rozwiązaniu koniecznie wyłącz debugowanie (<code>WP_DEBUG false</code>).
      </p>

      <h2>Przyczyna 6 – Problem z bazą danych</h2>
      <p>
        Jeśli widzisz komunikat „Error establishing a database connection" zamiast białego ekranu — problem leży w połączeniu z bazą danych. Sprawdź dane dostępowe w <code>wp-config.php</code> (nazwa bazy, użytkownik, hasło, host) i porównaj z danymi w panelu hostingu. Ten błąd jest szczególnie częsty{" "}
        <Link href="/wordpress-nie-wyswietla-sie-po-migracji-hosting">po migracji strony na nowy hosting</Link>.
      </p>
      <p>
        Jeśli mimo wszystkich kroków strona nadal nie działa, sprawdź też{" "}
        <Link href="/wordpress-blad-500-internal-server-error">jak naprawić błąd 500 w WordPress</Link> — objawy bywają podobne, przyczyny różne. Jeśli strona została zaatakowana,{" "}
        <Link href="/zawirusowana-strona-wordpress-co-zrobic">przeczytaj nasz przewodnik po odwirusowaniu WordPressa</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
          <li><Link href="/zawirusowana-strona-wordpress-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zawirusowana strona na WordPressie – co zrobić?</Link></li>
          <li><Link href="/wordpress-nie-wyswietla-sie-po-migracji-hosting" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Strona WordPress nie wyświetla się po migracji na nowy hosting</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Odzyskiwanie dostępu do logowania
  ───────────────────────────────────────────────────────────────────────── */
  "nie-moge-zalogowac-sie-do-wordpressa": (
    <>
      <h2>Nie pamiętasz hasła do WordPressa – najprostsza metoda</h2>
      <p>
        Zanim sięgniesz po FTP i bazę danych — sprawdź najprostsze rozwiązanie. Na stronie logowania (<code>twojadomena.pl/wp-login.php</code>) kliknij <strong>„Nie pamiętasz hasła?"</strong>. WordPress wyśle link resetujący na adres e-mail przypisany do konta.
      </p>
      <p>
        Jeśli mail nie dociera — sprawdź folder spam. Jeśli hosting blokuje wysyłkę maili z WordPressa, link i tak zostaje zapisany w bazie danych na 24 godziny. Możesz też spróbować przez phpMyAdmin (opisujemy poniżej).
      </p>

      <h2>Nie masz dostępu do e-maila – resetowanie przez phpMyAdmin</h2>
      <p>
        To najskuteczniejsza metoda, gdy nie masz dostępu do e-maila lub gdy resetowanie hasłem nie działa. Wymaga dostępu do panelu hostingu (cPanel, Plesk lub podobny).
      </p>
      <p>
        <strong>Krok 1:</strong> Zaloguj się do panelu hostingu i otwórz phpMyAdmin (zwykle w sekcji „Bazy danych").
      </p>
      <p>
        <strong>Krok 2:</strong> Wybierz bazę danych swojej strony WordPress. Kliknij tabelę <code>wp_users</code> (prefix może być inny niż <code>wp_</code>).
      </p>
      <p>
        <strong>Krok 3:</strong> Znajdź wiersz z Twoim kontem administratora i kliknij „Edytuj". W polu <code>user_pass</code> wpisz nowe hasło. W kolumnie „Funkcja" wybierz <code>MD5</code> z listy. Kliknij „Zapisz".
      </p>
      <p>
        <strong>Krok 4:</strong> Wróć do <code>wp-login.php</code> i zaloguj się nowym hasłem. Działa natychmiast — bez potrzeby wysyłania maila.
      </p>

      <h2>Konto zablokowane po ataku brute-force</h2>
      <p>
        Jeśli Twoja strona ma zainstalowaną wtyczkę do ochrony logowania (Wordfence, Limit Login Attempts, iThemes Security), może ona tymczasowo zablokować Twoje IP po zbyt wielu nieudanych próbach. Dzieje się to też automatycznie na niektórych hostingach.
      </p>
      <p>
        <strong>Rozwiązanie 1:</strong> Zaczekaj 15–60 minut — większość blokad IP wygasa automatycznie.
      </p>
      <p>
        <strong>Rozwiązanie 2:</strong> Spróbuj zalogować się z innego adresu IP (telefon na LTE zamiast WiFi, VPN lub inna sieć).
      </p>
      <p>
        <strong>Rozwiązanie 3:</strong> Przez FTP lub panel hostingu dezaktywuj wtyczkę bezpieczeństwa — zmień nazwę jej folderu w <code>wp-content/plugins/</code>. Po zalogowaniu możesz ją ponownie aktywować i odblokować swoje IP w ustawieniach.
      </p>

      <h2>Utracony dostęp do e-maila i brak dostępu do phpMyAdmin</h2>
      <p>
        W najgorszym scenariuszu — gdy nie masz ani dostępu do maila, ani do panelu hostingu — jedyną opcją jest kontakt z pomocą techniczną hostingu. Po weryfikacji tożsamości (zwykle wystarczy dowód rejestracji domeny lub ostatnia faktura) hosting może zresetować hasło do panelu lub bezpośrednio do bazy danych.
      </p>

      <h2>Resetowanie przez WP-CLI (dla zaawansowanych)</h2>
      <p>
        Jeśli masz dostęp SSH do serwera, możesz zresetować hasło jedną komendą przez WP-CLI:
      </p>
      <pre><code>wp user update admin --user_pass=NoweHaslo123! --path=/public_html</code></pre>
      <p>
        Zastąp <code>admin</code> loginem użytkownika i <code>/public_html</code> ścieżką do instalacji WordPress. WP-CLI jest dostępne na większości hostingów VPS i dedykowanych.
      </p>

      <h2>Jak zabezpieczyć się na przyszłość?</h2>
      <p>
        Po odzyskaniu dostępu wdróż co najmniej trzy środki bezpieczeństwa:
      </p>
      <ul>
        <li><strong>Uwierzytelnianie dwuskładnikowe (2FA)</strong> — wtyczka np. WP 2FA lub Google Authenticator for WP</li>
        <li><strong>Limit prób logowania</strong> — wtyczka Limit Login Attempts Reloaded (darmowa)</li>
        <li><strong>Zmiana URL panelu logowania</strong> — zamiast domyślnego <code>/wp-login.php</code> ustaw unikalny adres przez WPS Hide Login</li>
        <li><strong>Silne hasło</strong> — minimum 16 znaków, wielkie i małe litery, cyfry, znaki specjalne. Używaj menedżera haseł.</li>
      </ul>
      <p>
        Jeśli powodem braku dostępu było włamanie, sprawdź koniecznie{" "}
        <Link href="/zawirusowana-strona-wordpress-co-zrobic">jak sprawdzić i wyczyścić zawirusowaną stronę WordPress</Link>.
        Przy okazji warto też wiedzieć, że brak dostępu do panelu może być objawem{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">białego ekranu (WSOD)</Link> — sprawdź ten artykuł jeśli panel admin też nie działa.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/zawirusowana-strona-wordpress-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zawirusowana strona na WordPressie – co zrobić?</Link></li>
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Błąd 500
  ───────────────────────────────────────────────────────────────────────── */
  "wordpress-blad-500-internal-server-error": (
    <>
      <h2>Czym jest błąd 500 i dlaczego WordPress go ukrywa?</h2>
      <p>
        HTTP 500 Internal Server Error oznacza, że serwer napotkał nieoczekiwany błąd i nie może obsłużyć żądania. Problem leży po stronie serwera (lub aplikacji), nie przeglądarki użytkownika. W WordPress ten błąd bywa szczególnie frustrujący, bo domyślna konfiguracja ukrywa szczegóły — widać tylko pustą stronę lub ogólny komunikat.
      </p>
      <p>
        Dobra wiadomość: błąd 500 ma zawsze konkretną przyczynę. Poniżej znajdziesz wszystkie najczęstsze — sprawdzaj je od góry do dołu, bo są uszeregowane od najczęstszych do najrzadszych.
      </p>

      <h2>Krok 1 – Włącz wyświetlanie błędów PHP</h2>
      <p>
        Zanim cokolwiek naprawiasz, musisz wiedzieć co się dzieje. W <code>wp-config.php</code> zmień:
      </p>
      <pre><code>define( 'WP_DEBUG', true );
define( 'WP_DEBUG_DISPLAY', true );
define( 'WP_DEBUG_LOG', true );</code></pre>
      <p>
        Odśwież stronę — powinieneś teraz zobaczyć konkretny komunikat błędu z nazwą pliku i numerem linii. To od razu wskazuje gdzie leży problem. Pamiętaj, żeby wyłączyć debug po naprawie!
      </p>

      <h2>Krok 2 – Sprawdź i napraw plik .htaccess</h2>
      <p>
        Uszkodzony <code>.htaccess</code> to jedna z najczęstszych przyczyn błędu 500. Przez FTP lub menedżer plików zmień nazwę pliku <code>.htaccess</code> na <code>.htaccess-stary</code> i odśwież stronę.
      </p>
      <p>
        Jeśli błąd zniknie — Twój <code>.htaccess</code> był uszkodzony. Wygeneruj nowy, idąc w panelu WordPress do: <strong>Ustawienia → Bezpośrednie odnośniki → Zapisz zmiany</strong>. WordPress automatycznie stworzy poprawny plik.
      </p>

      <h2>Krok 3 – Dezaktywuj wszystkie wtyczki</h2>
      <p>
        Przez FTP wejdź do <code>wp-content/plugins/</code> i zmień nazwę całego folderu na <code>plugins-disabled</code>. Odśwież stronę — jeśli błąd zniknie, winowajcą jest jedna z wtyczek.
      </p>
      <p>
        Przywróć oryginalną nazwę folderu (<code>plugins</code>), a następnie wejdź do panelu WordPress i aktywuj wtyczki po jednej, za każdym razem odświeżając stronę. Gdy błąd wróci — właśnie znalazłeś problematyczną wtyczkę.
      </p>

      <h2>Krok 4 – Zwiększ limit pamięci PHP i limit czasu wykonania</h2>
      <p>
        W <code>wp-config.php</code> dodaj przed linią <code>/* That's all, stop editing! */</code>:
      </p>
      <pre><code>define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );</code></pre>
      <p>
        Możesz też zwiększyć limit przez <code>php.ini</code> (jeśli masz do niego dostęp) lub przez <code>.htaccess</code>:
      </p>
      <pre><code>php_value memory_limit 256M
php_value max_execution_time 300</code></pre>

      <h2>Krok 5 – Przywróć pliki core WordPress</h2>
      <p>
        Jeśli uszkodzony jest plik należący do rdzenia WordPress (wp-admin, wp-includes), pobierz świeżą paczkę WordPress w tej samej wersji co Twoja instalacja (sprawdź w panelu → Pulpit → Aktualizacje). Rozpakuj i przez FTP nadpisz foldery <code>wp-admin/</code> i <code>wp-includes/</code>. <strong>Nie usuwaj folderu wp-content</strong> — tam są Twoje wtyczki, motywy i media.
      </p>

      <h2>Krok 6 – Sprawdź logi serwera</h2>
      <p>
        Hosting zazwyczaj przechowuje szczegółowe logi błędów PHP i Apache/Nginx. W cPanel znajdziesz je w sekcji „Logi błędów" lub w pliku <code>/home/uzytkownik/logs/error_log</code>. Szukaj wierszy z datą i godziną wystąpienia błędu — zawierają dokładny opis problemu, w tym nazwę pliku i numer linii.
      </p>

      <h2>Kiedy błąd 500 jest po stronie hostingu?</h2>
      <p>
        Zdarza się, że błąd 500 pojawia się na wielu stronach jednocześnie na tym samym serwerze współdzielonym — wtedy problem leży po stronie hostingu (przeciążony serwer, awaria usług). Sprawdź status strony swojego hostingu lub skontaktuj się z supportem. Możesz też tymczasowo przetestować stronę na innym serwerze lub środowisku lokalnym, żeby potwierdzić że problem jest serwerowy, nie w kodzie.
      </p>
      <p>
        Błąd 500 często pojawia się razem z innymi symptomami. Jeśli zamiast błędu widzisz biały ekran, przeczytaj{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">artykuł o białym ekranie w WordPress</Link>.
        Jeśli problem pojawił się po aktualizacji,{" "}
        <Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic">sprawdź jak cofnąć aktualizację WordPress</Link>.
        Błąd 500 jest też częstym problemem{" "}
        <Link href="/wordpress-nie-wyswietla-sie-po-migracji-hosting">po migracji strony na nowy hosting</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
          <li><Link href="/wordpress-this-site-is-experiencing-technical-difficulties" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress: „This site is experiencing technical difficulties"</Link></li>
          <li><Link href="/wordpress-nie-wyswietla-sie-po-migracji-hosting" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Strona WordPress nie wyświetla się po migracji na nowy hosting</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Wolna strona
  ───────────────────────────────────────────────────────────────────────── */
  "wordpress-dziala-wolno-jak-przyspieszyc": (
    <>
      <h2>Dlaczego czas ładowania strony WordPress ma tak duże znaczenie?</h2>
      <p>
        Każda sekunda opóźnienia ładowania strony kosztuje Cię mierzalnie: według badań Google, strona ładująca się 3 sekundy traci 53% użytkowników mobilnych zanim w ogóle się załaduje. Core Web Vitals — sygnał rankingowy Google od 2021 roku — bezpośrednio premiuje szybkie strony w wynikach wyszukiwania.
      </p>
      <p>
        Poniżej znajdziesz listę optymalizacji uszeregowaną według wpływu na czas ładowania — od największego do najmniejszego.
      </p>

      <h2>1. Wybierz lepszy hosting (największy wpływ)</h2>
      <p>
        Jeśli Twoja strona jest na tanim hostingu współdzielonym za 10–20 zł miesięcznie, żadna optymalizacja nie pomoże na tyle, co zmiana serwera. Serwery współdzielone dzielą zasoby między setki stron — gdy ktoś inny generuje ruch, Twoja strona zwalnia.
      </p>
      <p>
        Dla stron biznesowych w 2026 roku minimum to hosting z <strong>PHP 8.2+, SSD NVMe i serwerem w Polsce lub środkowej Europie</strong>. Dobrzy dostawcy: Cyber_Folks (SSD), home.pl (Business), LH.pl, Hetzner (VPS). Czas odpowiedzi serwera poniżej 200 ms (TTFB) to cel minimum.
      </p>

      <h2>2. Zainstaluj wtyczkę cache</h2>
      <p>
        WordPress domyślnie generuje każdą stronę dynamicznie — odpytuje bazę danych i wykonuje PHP przy każdym wejściu. Cache zapisuje gotowy HTML i serwuje go bezpośrednio, omijając PHP i bazę danych. Zysk czasowy: 50–90%.
      </p>
      <ul>
        <li><strong>WP Rocket</strong> — płatny (ok. 59 EUR/rok), najlepszy w swojej klasie, zero konfiguracji</li>
        <li><strong>LiteSpeed Cache</strong> — darmowy, idealny jeśli hosting korzysta z serwera LiteSpeed</li>
        <li><strong>W3 Total Cache</strong> lub <strong>WP Super Cache</strong> — darmowe alternatywy, wymagają więcej konfiguracji</li>
      </ul>

      <h2>3. Zoptymalizuj obrazy</h2>
      <p>
        Nieskompresowane obrazy to najczęstszy powód wolnego ładowania. Zasady:
      </p>
      <ul>
        <li>Używaj formatu <strong>WebP</strong> zamiast JPEG/PNG — mniejszy rozmiar przy tej samej jakości</li>
        <li>Nigdy nie wgrywaj zdjęcia w wyższej rozdzielczości niż potrzebuje strona (2000px szerokości wystarczy nawet na sekcję hero)</li>
        <li>Zainstaluj <strong>Smush</strong> lub <strong>ShortPixel</strong> — automatycznie kompresują obrazy przy wgrywaniu</li>
        <li>Włącz <strong>lazy loading</strong> — obrazy poza widocznym obszarem ładują się dopiero gdy użytkownik do nich dotrze</li>
      </ul>

      <h2>4. Ogranicz liczbę wtyczek i wybieraj lekkie motywy</h2>
      <p>
        Każda aktywna wtyczka dodaje do strony JavaScript, CSS i zapytania do bazy danych. Przejrzyj listę wtyczek i usuń te, których naprawdę nie używasz. Sprawdź też ile zapytań do bazy danych generuje Twój motyw — użyj wtyczki Query Monitor (darmowa), która pokaże Ci szczegółowe statystyki.
      </p>
      <p>
        Ciężkie page buildery (Divi, Avada, WPBakery) generują dziesiątki plików CSS i JS na każdej stronie. Jeśli Twoja strona jest prosta, rozważ zamianę na lżejszy motyw (Astra, GeneratePress, Kadence) z Gutenbergiem.
      </p>

      <h2>5. Włącz CDN i Gzip/Brotli</h2>
      <p>
        <strong>CDN (Content Delivery Network)</strong> serwuje statyczne pliki (obrazy, CSS, JS) z serwera geograficznie najbliższego użytkownikowi. Dla stron z ruchem spoza Polski różnica jest odczuwalna. Cloudflare (darmowy plan) to najłatwiejszy wybór — wystarczy zmienić nameservery domeny.
      </p>
      <p>
        <strong>Kompresja Gzip/Brotli</strong> zmniejsza rozmiar plików HTML, CSS i JS przesyłanych przez serwer o 60–80%. Większość hostingów ma ją domyślnie włączoną. Sprawdź przez GTmetrix lub PageSpeed Insights czy jest aktywna.
      </p>

      <h2>6. Zoptymalizuj bazę danych</h2>
      <p>
        Po latach użytkowania baza danych WordPress wypełnia się zbędnymi danymi: rewizjami postów, transientami, usuniętymi komentarzami, logami wtyczek. Wtyczka <strong>WP-Optimize</strong> (darmowa) czyści bazę jednym kliknięciem i może zmniejszyć jej rozmiar nawet o kilkadziesiąt procent. Rób backup przed czyszczeniem.
      </p>

      <h2>Jak mierzyć wyniki?</h2>
      <p>
        Przed i po każdej optymalizacji mierz wyniki tymi samymi narzędziami:
      </p>
      <ul>
        <li><strong>Google PageSpeed Insights</strong> — pokazuje Core Web Vitals i konkretne sugestie</li>
        <li><strong>GTmetrix</strong> — szczegółowy waterfall ładowania zasobów</li>
        <li><strong>WebPageTest.org</strong> — możliwość testowania z różnych lokalizacji i urządzeń</li>
      </ul>
      <p>
        Cel to wynik powyżej 90/100 dla urządzeń mobilnych i LCP (Largest Contentful Paint) poniżej 2,5 sekundy.
      </p>
      <p>
        Szybka strona to też lepsza widoczność w lokalnych wynikach Google. Jeśli prowadzisz firmę lokalną, sprawdź{" "}
        <Link href="/jak-pozycjonowac-wizytowke-google-2026">jak pozycjonować wizytówkę Google w 2026 roku</Link> — Core Web Vitals są jednym z sygnałów rankingowych. Warto też zadbać o{" "}
        <Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac">regularne sprawdzanie konfliktów między wtyczkami</Link>, które potrafią drastycznie spowalniać stronę.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Konflikt wtyczek WordPress – jak zdiagnozować i naprawić?</Link></li>
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
          <li><Link href="/jak-pozycjonowac-wizytowke-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Aktualizacja zepsuła stronę
  ───────────────────────────────────────────────────────────────────────── */
  "aktualizacja-wordpress-zepsuta-strone-co-zrobic": (
    <>
      <h2>Dlaczego aktualizacje WordPress psują strony?</h2>
      <p>
        WordPress jest systemem opartym na wtyczkach i motywach tworzonych przez tysiące niezależnych deweloperów. Każda aktualizacja rdzenia, wtyczki lub motywu może wprowadzić zmiany niekompatybilne z innymi elementami Twojej strony. To nie jest błąd projektu — to cena ekosystemu otwartego źródła z ponad 60 000 wtyczek.
      </p>
      <p>
        Najczęstsze scenariusze po nieudanej aktualizacji: biały ekran, błąd 500, zepsuty wygląd strony, nieprawidłowe działanie formularzy lub WooCommerce, lub znikające treści.
      </p>

      <h2>Krok 1 – Sprawdź czy masz backup (i jak go przywrócić)</h2>
      <p>
        Jeśli masz backup sprzed aktualizacji — jesteś uratowany. Większość dobrych hostingów robi automatyczne kopie dzienne lub cotygodniowe. Sprawdź w panelu hostingu sekcję „Kopie zapasowe" lub „Backup".
      </p>
      <p>
        Jeśli używasz wtyczek do backupów (UpdraftPlus, BackupBuddy), znajdź kopię w ustawieniach wtyczki lub w wyznaczonej lokalizacji (Google Drive, Dropbox, Amazon S3). Przywróć ją — to najszybsze rozwiązanie i powinno być pierwszym krokiem.
      </p>
      <p>
        <strong>Uwaga:</strong> Po przywróceniu backupu natychmiast zaktualizuj problematyczną wtyczkę/motyw. Stare wersje często zawierają luki bezpieczeństwa.
      </p>

      <h2>Krok 2 – Bez backupu: cofnij aktualizację ręcznie</h2>
      <p>
        WordPress nie ma wbudowanej opcji cofania aktualizacji, ale możesz to zrobić ręcznie:
      </p>
      <p>
        <strong>Dla wtyczki:</strong>
      </p>
      <ul>
        <li>Wejdź na wordpress.org/plugins/[nazwa-wtyczki]/advanced/ i pobierz poprzednią wersję</li>
        <li>Przez FTP usuń folder wtyczki z <code>wp-content/plugins/</code></li>
        <li>Wgraj i rozpakuj pobraną starą wersję</li>
        <li>Aktywuj wtyczkę w panelu WordPress</li>
      </ul>
      <p>
        <strong>Dla rdzenia WordPress:</strong>
      </p>
      <ul>
        <li>Pobierz poprzednią wersję ze strony wordpress.org/download/releases/</li>
        <li>Przez FTP nadpisz foldery <code>wp-admin/</code> i <code>wp-includes/</code></li>
        <li>W <code>wp-config.php</code> możesz tymczasowo dodać <code>define('AUTOMATIC_UPDATER_DISABLED', true);</code> żeby zapobiec automatycznej aktualizacji z powrotem</li>
      </ul>

      <h2>Krok 3 – Zidentyfikuj problematyczną wtyczkę metodą bisekcji</h2>
      <p>
        Jeśli aktualizowałeś wiele wtyczek jednocześnie, musisz znaleźć tę winną. Metoda bisekcji:
      </p>
      <ul>
        <li>Dezaktywuj połowę zaktualizowanych wtyczek — sprawdź czy błąd znikł</li>
        <li>Jeśli znikł — problem jest w dezaktywowanej połowie. Aktywuj połowę z tej grupy i sprawdź ponownie</li>
        <li>Jeśli nie znikł — problem jest w aktywnej połowie. Dezaktywuj połowę z tej grupy</li>
        <li>Powtarzaj aż do znalezienia jednej winnej wtyczki</li>
      </ul>

      <h2>Jak aktualizować bezpiecznie w przyszłości?</h2>
      <p>
        Nauczona przykrym doświadczeniem zasada numer jeden: <strong>zawsze rób backup przed każdą aktualizacją</strong>. Oto pełna procedura bezpiecznego aktualizowania:
      </p>
      <ul>
        <li><strong>Środowisko testowe (staging)</strong> — większość hostingów oferuje subdomenę testową. Aktualizuj najpierw tam, sprawdź stronę, a dopiero po potwierdzeniu że wszystko działa — aktualizuj produkcję.</li>
        <li><strong>Aktualizuj pojedynczo</strong> — nie klikaj „Zaktualizuj wszystko" jednocześnie. Aktualizuj jedną wtyczkę, sprawdź stronę, przejdź do następnej.</li>
        <li><strong>Wyłącz automatyczne aktualizacje</strong> — dla wtyczek premium lub stron e-commerce to ryzykowna opcja. Kontroluj aktualizacje ręcznie.</li>
        <li><strong>Monitoruj stronę</strong> — użyj narzędzia jak UptimeRobot (darmowy), które powiadomi Cię SMS-em jeśli strona przestanie działać.</li>
      </ul>
      <p>
        Aktualizacje to nie jedyne źródło problemów. Zainstalowanie nowych wtyczek może powodować{" "}
        <Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac">konflikty między wtyczkami</Link>, które dają podobne objawy.
        Jeśli po przywróceniu backupu widzisz biały ekran,{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">sprawdź nasz przewodnik po białym ekranie WordPress</Link>.
        Błąd po aktualizacji może też manifestować się jako{" "}
        <Link href="/wordpress-blad-500-internal-server-error">błąd 500</Link> lub komunikat{" "}
        <Link href="/wordpress-this-site-is-experiencing-technical-difficulties">„This site is experiencing technical difficulties"</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Konflikt wtyczek WordPress – jak zdiagnozować i naprawić?</Link></li>
          <li><Link href="/wordpress-this-site-is-experiencing-technical-difficulties" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress: „This site is experiencing technical difficulties"</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Formularz nie wysyła maili
  ───────────────────────────────────────────────────────────────────────── */
  "formularz-kontaktowy-wordpress-nie-wysyla-maili": (
    <>
      <h2>Dlaczego formularze WordPress przestają wysyłać maile?</h2>
      <p>
        Większość popularnych wtyczek formularzy (Contact Form 7, WPForms, Gravity Forms, Ninja Forms) do wysyłania maili używa funkcji PHP <code>mail()</code>. Problem w tym, że ta funkcja zależy od konfiguracji serwera pocztowego hostingu — i wiele hostingów celowo ją ogranicza lub blokuje, żeby zapobiegać wysyłaniu spamu.
      </p>
      <p>
        Wynik jest paradoksalny: formularz działa poprawnie (dane są zapisywane), ale mail nigdy nie dociera do skrzynki. Lub trafia do folderu spam.
      </p>

      <h2>Krok 1 – Sprawdź folder spam</h2>
      <p>
        To banalne, ale często pomijane. Sprawdź folder spam w swojej skrzynce. Wiele filtrów antyspamowych (szczególnie Gmail i Outlook) klasyfikuje maile wysyłane przez <code>mail()</code> z hostingu jako spam, bo nie przechodzą weryfikacji SPF/DKIM.
      </p>
      <p>
        Jeśli mail trafia do spamu — to sygnał, że Twój hosting nie jest prawidłowo skonfigurowany pod kątem wysyłki. Rozwiązaniem jest SMTP (opisujemy poniżej).
      </p>

      <h2>Krok 2 – Zainstaluj wtyczkę diagnostyczną</h2>
      <p>
        Zainstaluj darmową wtyczkę <strong>Check & Log Email</strong>. Pozwala wysłać testową wiadomość bezpośrednio z WordPress i sprawdzić czy funkcja mail() w ogóle działa. Pokazuje też logi wszystkich prób wysyłki z czasem i wynikiem.
      </p>
      <p>
        Jeśli testowy mail nie dociera — potwierdzasz, że problem leży w konfiguracji wysyłki, nie w samej wtyczce formularzy.
      </p>

      <h2>Krok 3 – Skonfiguruj SMTP (rozwiązanie docelowe)</h2>
      <p>
        SMTP (Simple Mail Transfer Protocol) to protokół wysyłki maili przez zewnętrzny serwer pocztowy — np. Gmail, Outlook, Zoho Mail lub dedykowany serwer hostingu. Zamiast używać słabej funkcji <code>mail()</code>, WordPress wysyła maile przez prawdziwe konto e-mail z autoryzacją.
      </p>
      <p>
        <strong>Najpopularniejsze wtyczki SMTP:</strong>
      </p>
      <ul>
        <li><strong>WP Mail SMTP</strong> (darmowa) — najpopularniejsza, obsługuje Gmail, Outlook, SendGrid, Mailgun i inne</li>
        <li><strong>FluentSMTP</strong> (darmowa) — dobra alternatywa, obsługuje wiele kont jednocześnie</li>
        <li><strong>Post SMTP</strong> (darmowa) — ze szczegółowym logowaniem maili</li>
      </ul>
      <p>
        <strong>Konfiguracja z kontem Gmail (najprostsze):</strong>
      </p>
      <ul>
        <li>Zainstaluj WP Mail SMTP</li>
        <li>W ustawieniach wybierz „Google / Gmail" jako mailer</li>
        <li>Postępuj zgodnie z instrukcją tworzenia Google OAuth — wymaga chwilowego dostępu do Google Cloud Console (WP Mail SMTP Pro ma uproszczony kreator)</li>
        <li>Alternatywa: użyj hasła aplikacyjnego Google (wymaga włączonego 2FA na koncie Google)</li>
      </ul>

      <h2>Krok 4 – Skonfiguruj SPF i DKIM dla domeny</h2>
      <p>
        Nawet z SMTP, jeśli Twoja domena nie ma poprawnych rekordów SPF i DKIM, część maili będzie trafiać do spamu. SPF i DKIM to mechanizmy uwierzytelniania e-mail, które potwierdzają że mail wysyłany z Twojej domeny rzeczywiście pochodzi od Ciebie.
      </p>
      <p>
        Rekordy SPF i DKIM konfiguruje się w strefie DNS domeny. Dokładne wartości dostarcza Twój dostawca poczty (hosting, Google Workspace, Zoho). Większość paneli DNS prowadzi przez ten proces krok po kroku.
      </p>

      <h2>Formularz działa, ale wiadomości znikają — sprawdź też te rzeczy</h2>
      <ul>
        <li><strong>Adres e-mail administratora</strong> — w Ustawieniach → Ogólne sprawdź czy adres e-mail administratora WordPress jest poprawny i aktywny</li>
        <li><strong>Konfiguracja wtyczki formularza</strong> — w Contact Form 7 sprawdź zakładkę „Mail" i upewnij się że „Do" (adresat) jest ustawiony poprawnie</li>
        <li><strong>Konflikty wtyczek</strong> — niektóre wtyczki bezpieczeństwa lub cache mogą blokować wysyłkę. Sprawdź czy problem znika po ich dezaktywacji.</li>
        <li><strong>Filtr antyspamowy w skrzynce</strong> — reguły w Outlooku lub Gmail mogą automatycznie usuwać lub archiwizować przychodzące maile z formularzy</li>
      </ul>
      <p>
        Problem z formularzem może być też objawem głębszego problemu z konfiguracją serwera. Jeśli strona ma też inne nieprawidłowości, sprawdź{" "}
        <Link href="/wordpress-blad-500-internal-server-error">jak diagnozować błąd 500</Link> oraz czy nie masz{" "}
        <Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac">konfliktu między wtyczkami</Link> — szczególnie między wtyczką formularza a wtyczką cache lub bezpieczeństwa.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Konflikt wtyczek WordPress – jak zdiagnozować i naprawić?</Link></li>
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/wordpress-this-site-is-experiencing-technical-difficulties" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress: „This site is experiencing technical difficulties"</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Technical Difficulties
  ───────────────────────────────────────────────────────────────────────── */
  "wordpress-this-site-is-experiencing-technical-difficulties": (
    <>
      <h2>Co oznacza komunikat „This site is experiencing technical difficulties"?</h2>
      <p>
        Od wersji WordPress 5.2 istnieje mechanizm zwany <strong>fatal error protection</strong>. Zamiast pokazywać użytkownikom biały ekran lub techniczny komunikat błędu PHP, WordPress wyświetla przyjazną wiadomość: „This site is experiencing technical difficulties."
      </p>
      <p>
        Jednocześnie WordPress wysyła na adres e-mail administratora maila z dokładnym opisem błędu i linkiem do specjalnego trybu odzyskiwania. To ogromne ułatwienie w porównaniu z klasycznym WSOD.
      </p>

      <h2>Krok 1 – Sprawdź pocztę administratora</h2>
      <p>
        WordPress automatycznie wysyła mail na adres podany w Ustawieniach → Ogólne → E-mail administratora. Mail zawiera:
      </p>
      <ul>
        <li>Nazwę pliku i numer linii gdzie wystąpił błąd</li>
        <li>Rodzaj błędu (np. Fatal error, Parse error, Class not found)</li>
        <li>Unikalny link do trybu odzyskiwania — pozwala zalogować się do panelu WordPress i dezaktywować problematyczną wtyczkę <strong>bez naprawiania błędu w kodzie</strong></li>
      </ul>
      <p>
        Kliknij link z maila, zaloguj się i dezaktywuj wskazaną wtyczkę lub motyw. Strona powinna wrócić do działania.
      </p>

      <h2>Krok 2 – Jeśli mail nie dotarł</h2>
      <p>
        Jeśli hosting blokuje wysyłkę PHP mail() (co jest częste) lub adres administratora jest niepoprawny, mail z linkiem odzyskiwania nie dotrze. W takim przypadku:
      </p>
      <p>
        Wejdź bezpośrednio w tryb odzyskiwania wpisując w przeglądarce:
      </p>
      <pre><code>https://twojadomena.pl/wp-login.php?action=recovery_mode&rm_token=TOKEN</code></pre>
      <p>
        Token recovery mode jest zapisany w bazie danych w opcji <code>recovery_mode_email</code>. Możesz go odczytać przez phpMyAdmin (tabela <code>wp_options</code>).
      </p>
      <p>
        Alternatywnie — przez FTP dezaktywuj problematyczną wtyczkę zmieniając nazwę jej folderu w <code>wp-content/plugins/</code>.
      </p>

      <h2>Krok 3 – Zdiagnozuj konkretny błąd</h2>
      <p>
        Komunikat w mailu mówi Ci co się stało. Najczęstsze typy błędów:
      </p>
      <ul>
        <li><strong>Fatal error: Class 'NazwaKlasy' not found</strong> — wtyczka próbuje użyć funkcji lub klasy z innej wtyczki, która nie jest aktywna lub ma inną wersję. Sprawdź zależności wtyczki.</li>
        <li><strong>Fatal error: Call to undefined function</strong> — podobna przyczyna — brakująca funkcja z innej wtyczki lub nieaktualna wersja PHP.</li>
        <li><strong>PHP Fatal error: Allowed memory size exhausted</strong> — zwiększ limit pamięci PHP (opisujemy w artykule o WSOD).</li>
        <li><strong>Parse error: syntax error</strong> — błąd składni w kodzie PHP, zazwyczaj wynik ręcznej edycji pliku. Cofnij ostatnią zmianę.</li>
      </ul>

      <h2>Krok 4 – Sprawdź wersję PHP</h2>
      <p>
        Częstą przyczyną tego komunikatu po aktualizacji wtyczki jest <strong>niekompatybilność z wersją PHP na serwerze</strong>. Nowe wersje wtyczek często wymagają PHP 8.0 lub 8.1, podczas gdy hosting może mieć skonfigurowane PHP 7.4.
      </p>
      <p>
        Sprawdź wymaganą wersję PHP na stronie wtyczki w wordpress.org. Jeśli Twój hosting ma starszą wersję, zmień ją w panelu (cPanel → PHP Selector lub PHP Version). Aktualizacja PHP wymaga ostrożności — sprawdź najpierw kompatybilność całej strony z nową wersją.
      </p>

      <h2>Jak zapobiegać temu problemowi?</h2>
      <ul>
        <li>Zawsze aktualizuj wtyczki pojedynczo, nie wszystkie naraz</li>
        <li>Sprawdzaj changelog przed aktualizacją — czy nie ma informacji o zmianie wymagań PHP lub zależnościach</li>
        <li>Używaj środowiska staging do testowania aktualizacji przed wdrożeniem na produkcję</li>
        <li>Upewnij się że adres e-mail administratora WordPress jest aktywny i odbiera maile</li>
      </ul>
      <p>
        Ten komunikat to ulepszona wersja{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">białego ekranu WordPress (WSOD)</Link> — jeśli widzisz biały ekran zamiast komunikatu „technical difficulties", Twoja instalacja ma starszą wersję WordPressa lub inne ustawienia.
        Zazwyczaj błąd pojawia się po nieudanej aktualizacji — sprawdź{" "}
        <Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic">co zrobić gdy aktualizacja zepsuje stronę</Link>.
        Objaw może być też podobny do{" "}
        <Link href="/wordpress-blad-500-internal-server-error">błędu 500</Link> — warto sprawdzić oba artykuły.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/konflikt-wtyczek-wordpress-jak-zdiagnozowac" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Konflikt wtyczek WordPress – jak zdiagnozować i naprawić?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Strona po migracji
  ───────────────────────────────────────────────────────────────────────── */
  "wordpress-nie-wyswietla-sie-po-migracji-hosting": (
    <>
      <h2>Dlaczego migracja WordPress jest pułapką dla początkujących?</h2>
      <p>
        Przeniesienie strony WordPress na nowy hosting wydaje się proste: skopiuj pliki, przenieś bazę danych, zmień ustawienia. W praktyce każdy z tych kroków ma pułapki, które mogą sprawić, że strona przestanie działać lub wyświetla stary adres.
      </p>
      <p>
        Poniżej znajdziesz diagnostykę typowych problemów po migracji — oraz jak każdy z nich naprawić.
      </p>

      <h2>Problem 1 – Strona wyświetla stary adres lub „Error 404"</h2>
      <p>
        <strong>Przyczyna:</strong> W bazie danych WordPress zapisany jest stary adres URL (np. stara domena lub stary serwer). WordPress używa go do generowania wszystkich linków.
      </p>
      <p>
        <strong>Rozwiązanie:</strong> Musisz zaktualizować adresy URL w bazie danych. Najlepsze narzędzie to <strong>Better Search Replace</strong> (wtyczka darmowa) lub skrypt <strong>Search-Replace-DB</strong> wgrany przez FTP.
      </p>
      <p>
        W Better Search Replace wpisz stary adres (np. <code>https://stara-domena.pl</code>) w polu „Search for" i nowy adres (np. <code>https://nowa-domena.pl</code>) w „Replace with". Zaznacz wszystkie tabele i kliknij „Run Search/Replace". <strong>Odznacz „Run as dry run"</strong> żeby faktycznie wprowadzić zmiany.
      </p>

      <h2>Problem 2 – Biały ekran lub błąd 500 po migracji</h2>
      <p>
        <strong>Sprawdź wp-config.php:</strong> Dane dostępowe do bazy danych (nazwa, użytkownik, hasło, host) muszą odpowiadać nowej bazie na nowym hostingu. Najczęstszy błąd to pozostawienie danych z poprzedniego serwera.
      </p>
      <pre><code>define( 'DB_NAME', 'nazwa_nowej_bazy' );
define( 'DB_USER', 'uzytkownik_nowej_bazy' );
define( 'DB_PASSWORD', 'haslo_nowej_bazy' );
define( 'DB_HOST', 'localhost' );</code></pre>
      <p>
        <strong>Sprawdź uprawnienia plików:</strong> Po przesłaniu przez FTP pliki mogą mieć niepoprawne uprawnienia. Standardowo: katalogi 755, pliki PHP 644, <code>wp-config.php</code> 600. Zmień przez panel hostingu lub FTP komendy <code>chmod</code>.
      </p>

      <h2>Problem 3 – Strona wyświetla się poprawnie, ale linki nie działają (Error 404)</h2>
      <p>
        <strong>Przyczyna:</strong> Brakuje pliku <code>.htaccess</code> lub moduł mod_rewrite nie jest włączony na nowym serwerze.
      </p>
      <p>
        <strong>Rozwiązanie:</strong> Zaloguj się do panelu WordPress i przejdź do Ustawienia → Bezpośrednie odnośniki. Kliknij „Zapisz zmiany" — WordPress wygeneruje nowy plik <code>.htaccess</code>. Jeśli to nie pomoże, upewnij się w panelu hostingu że <code>mod_rewrite</code> jest włączony (jest wymagany przez WordPress do działania bezpośrednich odnośników).
      </p>

      <h2>Problem 4 – Propagacja DNS — strona wyświetla stary serwer</h2>
      <p>
        Po zmianie nameserverów lub rekordów DNS zmiana propaguje się na serwery DNS na całym świecie przez 24–72 godziny. W tym czasie część użytkowników widzi starą stronę, część nową.
      </p>
      <p>
        Sprawdź aktualny stan propagacji na <strong>whatsmydns.net</strong> — wpisz swoją domenę i sprawdź czy różne serwery DNS na świecie już wskazują na nowy adres IP. W swoim systemie możesz wymusić nowe DNS edytując plik <code>/etc/hosts</code> (Linux/Mac) lub <code>C:\Windows\System32\drivers\etc\hosts</code> (Windows) dodając linię: <code>nowe.ip.serwera twojadomena.pl</code>.
      </p>

      <h2>Problem 5 – Brakujące obrazy i media po migracji</h2>
      <p>
        Jeśli treść wyświetla się poprawnie, ale brakuje zdjęć — folder <code>wp-content/uploads/</code> nie został przeniesiony w całości. Sprawdź czy wszystkie podfoldery (zazwyczaj podzielone na rok/miesiąc) są obecne na nowym serwerze. Skopiuj folder przez FTP lub użyj Rsync przez SSH jeśli masz dostęp.
      </p>

      <h2>Checklista przed i po migracji</h2>
      <ul>
        <li>Backup pełny (pliki + baza danych) przed migracją</li>
        <li>Poprawne dane bazy w wp-config.php na nowym serwerze</li>
        <li>Podmiana URL przez Search Replace DB</li>
        <li>Wygenerowanie nowego .htaccess</li>
        <li>Sprawdzenie propagacji DNS</li>
        <li>Test wszystkich formularzy i funkcji po migracji</li>
        <li>Sprawdzenie certyfikatu SSL na nowej domenie/serwerze</li>
      </ul>
      <p>
        Problemy po migracji często nakładają się — biały ekran, błąd 500 i problemy z DNS mogą występować jednocześnie. Jeśli masz{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">biały ekran</Link> lub{" "}
        <Link href="/wordpress-blad-500-internal-server-error">błąd 500</Link>, sprawdź te artykuły równolegle z diagnostyką migracji.
        Migracja to też dobry moment by zadbać o bezpieczeństwo — po przeniesieniu sprawdź{" "}
        <Link href="/zawirusowana-strona-wordpress-co-zrobic">czy strona nie nosi śladów wcześniejszego włamania</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/zawirusowana-strona-wordpress-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zawirusowana strona na WordPressie – co zrobić?</Link></li>
          <li><Link href="/wordpress-dziala-wolno-jak-przyspieszyc" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress działa wolno – jak przyspieszyć stronę?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     WORDPRESS: Konflikt wtyczek
  ───────────────────────────────────────────────────────────────────────── */
  "konflikt-wtyczek-wordpress-jak-zdiagnozowac": (
    <>
      <h2>Czym jest konflikt wtyczek i jak powstaje?</h2>
      <p>
        WordPress ładuje każdą aktywną wtyczkę przy każdym żądaniu do strony. Wtyczki mogą wchodzić w konflikt na kilka sposobów:
      </p>
      <ul>
        <li><strong>Konflikty JavaScript</strong> — dwie wtyczki ładują różne wersje tej samej biblioteki (np. jQuery), która się nawzajem nadpisuje</li>
        <li><strong>Konflikty CSS</strong> — style jednej wtyczki nadpisują style drugiej, psując wygląd elementów</li>
        <li><strong>Konflikty funkcji PHP</strong> — dwie wtyczki definiują funkcję o tej samej nazwie, co generuje fatal error</li>
        <li><strong>Konflikty bazy danych</strong> — wtyczki zapisują dane w tych samych opcjach lub tabelach</li>
        <li><strong>Konflikty kolejności ładowania (hooks)</strong> — wtyczka A nadpisuje wynik wtyczki B przez system hooków WordPress</li>
      </ul>

      <h2>Metoda bisekcji — szybka diagnostyka w 5 krokach</h2>
      <p>
        Metoda bisekcji (binary search) pozwala znaleźć problematyczną wtyczkę spośród dziesiątek aktywnych w logarytmicznym czasie — zamiast sprawdzać każdą z osobna.
      </p>
      <ul>
        <li><strong>Krok 1:</strong> Zrób listę wszystkich aktywnych wtyczek (np. screenshot)</li>
        <li><strong>Krok 2:</strong> Dezaktywuj połowę wtyczek. Sprawdź czy problem nadal występuje.</li>
        <li><strong>Krok 3 (jeśli problem znikł):</strong> Problem jest w dezaktywowanej połowie. Aktywuj połowę z tej grupy. Sprawdź.</li>
        <li><strong>Krok 3 (jeśli problem trwa):</strong> Problem jest w aktywnej połowie. Dezaktywuj połowę z tej grupy. Sprawdź.</li>
        <li><strong>Krok 4:</strong> Powtarzaj aż zostanie jedna wtyczka — to winowajca.</li>
      </ul>
      <p>
        Przykład: masz 20 wtyczek → dezaktyrujesz 10 → problem znikł → aktywujesz 5 z dezaktywowanych → problem wrócił → dezaktyrujesz 2–3 z tych 5 → znajdziesz winowajcę maksymalnie w 4–5 krokach zamiast 20.
      </p>

      <h2>Diagnoza przez Query Monitor</h2>
      <p>
        Wtyczka <strong>Query Monitor</strong> (darmowa) to developer toolbar dla WordPress. Pokazuje:
      </p>
      <ul>
        <li>Wszystkie błędy PHP (E_NOTICE, E_WARNING, E_ERROR) z nazwą pliku i linią</li>
        <li>Konflikty skryptów i styli JavaScript/CSS</li>
        <li>Zapytania do bazy danych — ile ich jest i które są wolne</li>
        <li>Hooki i filtry WordPress — jakie wartości przekazują</li>
      </ul>
      <p>
        Po aktywacji Query Monitor pojawi się pasek narzędzi administratora na górze strony. Zakładka „PHP Errors" często od razu wskazuje winowajcę konfliktu.
      </p>

      <h2>Najczęstsze typy konfliktów i jak je rozwiązać</h2>

      <h3>Konflikt z page builderem</h3>
      <p>
        Elementor, Beaver Builder, Divi i WPBakery mają własne systemy zarządzania JavaScriptem i CSS. Wtyczki słabo zintegrowane z page builderami często powodują konflikty wizualne lub błędy JavaScript.
      </p>
      <p>
        Rozwiązanie: sprawdź w ustawieniach problematycznej wtyczki czy ma opcję „Wyłącz w edytorze" lub „Kompatybilność z page builderem". Alternatywnie poszukaj oficjalnych addonów do używanego page buildera.
      </p>

      <h3>Konflikt z wtyczką cache</h3>
      <p>
        Wtyczki cache (WP Rocket, W3 Total Cache, LiteSpeed Cache) agresywnie optymalizują JavaScript i CSS, co może psuć działanie innych wtyczek. Objawy: slider nie działa, formularze nie działają, galeria się sypie — ale tylko na froncie, nie w panelu admina.
      </p>
      <p>
        Rozwiązanie: w ustawieniach wtyczki cache wyklucz JavaScript konkretnej wtyczki z minifikacji/łączenia. W WP Rocket zrób to w zakładce „Plik" → pole wykluczeń JS.
      </p>

      <h3>Konflikt z wtyczką bezpieczeństwa</h3>
      <p>
        Wordfence, iThemes Security i Sucuri mogą blokować żądania AJAX, które są potrzebne do działania innych wtyczek (szczególnie formularzy, koszyków WooCommerce, live search).
      </p>
      <p>
        Rozwiązanie: sprawdź logi wtyczki bezpieczeństwa — czy nie blokuje żądań z konkretnych wtyczek. Dodaj wyjątek dla blokowanych URL.
      </p>

      <h2>Kiedy konflikt jest nie do rozwiązania?</h2>
      <p>
        Niekiedy dwie wtyczki są fundamentalnie niekompatybilne i żadna konfiguracja tego nie zmieni. W takiej sytuacji masz trzy wyjścia:
      </p>
      <ul>
        <li>Zamień jedną z wtyczek na alternatywę</li>
        <li>Zamów customowe rozwiązanie u dewelopera WordPress który połączy funkcjonalności</li>
        <li>Rezygnuj z funkcjonalności mniej ważnej z dwóch kolidujących</li>
      </ul>
      <p>
        Regularny przegląd listy wtyczek i usuwanie nieużywanych to najlepsza profilaktyka. Reguła: jeśli wtyczka nie była używana od miesiąca — usuń ją, nie tylko dezaktywuj (dezaktywowane wtyczki nadal zajmują miejsce na serwerze i mogą zawierać luki bezpieczeństwa).
      </p>
      <p>
        Konflikty wtyczek często objawiają się podobnie jak inne problemy WordPress. Sprawdź też:
        jeśli widzisz{" "}
        <Link href="/bialy-ekran-wordpress-jak-naprawic">biały ekran</Link> lub{" "}
        <Link href="/wordpress-blad-500-internal-server-error">błąd 500</Link> — wtyczka to pierwsza rzecz do sprawdzenia.
        Konflikt może też pojawić się po{" "}
        <Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic">aktualizacji WordPressa lub wtyczek</Link>.
        W najgorszym scenariuszu — backdoor w nullowanej wtyczce może prowadzić do{" "}
        <Link href="/zawirusowana-strona-wordpress-co-zrobic">zawirusowania strony</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/aktualizacja-wordpress-zepsuta-strone-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Aktualizacja WordPressa zepsuła stronę – co zrobić?</Link></li>
          <li><Link href="/bialy-ekran-wordpress-jak-naprawic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Biały ekran WordPress (White Screen of Death) – jak naprawić?</Link></li>
          <li><Link href="/wordpress-blad-500-internal-server-error" className="text-sm font-semibold text-ink hover:text-brand transition-colors">WordPress błąd 500 – przyczyny i naprawa</Link></li>
          <li><Link href="/zawirusowana-strona-wordpress-co-zrobic" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zawirusowana strona na WordPressie – co zrobić?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     SEO: Pozycjonowanie wizytówki Google – kompletny przewodnik 2026
  ───────────────────────────────────────────────────────────────────────── */
  "pozycjonowanie-wizytowki-google": (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Pozycjonowanie wizytówki Google – kompletny przewodnik 2026",
            "description": "Czym jest pozycjonowanie wizytówki Google, jak działa algorytm Local Pack i co zrobić, żeby Twoja firma znalazła się w top 3 Google Maps?",
            "author": { "@type": "Organization", "name": "MiauSEO", "url": "https://miauseo.pl" },
            "publisher": { "@type": "Organization", "name": "MiauSEO", "url": "https://miauseo.pl" },
            "datePublished": "2026-05-30",
            "dateModified": "2026-05-30",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://miauseo.pl/pozycjonowanie-wizytowki-google" }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czym jest pozycjonowanie wizytówki Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Pozycjonowanie wizytówki Google to zestaw działań SEO mających na celu poprawę pozycji firmy w Google Maps i Local Pack – bloku z 3 firmami pojawiającym się nad wynikami organicznymi. Obejmuje optymalizację profilu GBP, zbieranie opinii, budowanie cytowań i lokalne link building." }
              },
              {
                "@type": "Question",
                "name": "Ile trwa pozycjonowanie wizytówki Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Pierwsze efekty widać zwykle po 4–8 tygodniach od wdrożenia optymalizacji. Pełna poprawa pozycji w konkurencyjnych branżach zajmuje od 3 do 6 miesięcy, a w bardzo konkurencyjnych lokalizacjach nawet 12 miesięcy." }
              },
              {
                "@type": "Question",
                "name": "Ile kosztuje pozycjonowanie wizytówki Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Jednorazowa optymalizacja profilu GBP kosztuje od 500 do 2000 zł. Miesięczna opieka local SEO to wydatek od 300 do 1500 zł, w zależności od zakresu działań i konkurencji w branży." }
              },
              {
                "@type": "Question",
                "name": "Co to jest Local Pack w Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Local Pack (Map Pack) to wyróżniony blok z mapą i listą 3 firm lokalnych, który Google wyświetla nad wynikami organicznymi dla zapytań lokalnych. Pozycja w Local Pack generuje od 30% do 50% wszystkich kliknięć dla fraz lokalnych." }
              },
              {
                "@type": "Question",
                "name": "Czy można samodzielnie pozycjonować wizytówkę Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tak – uzupełnienie profilu, dodawanie zdjęć, publikowanie postów i odpowiadanie na opinie można robić samodzielnie. Jednak budowanie cytowań, link building lokalny i analiza konkurencji wymagają doświadczenia i specjalistycznych narzędzi SEO." }
              },
              {
                "@type": "Question",
                "name": "Co to jest NAP w local SEO?",
                "acceptedAnswer": { "@type": "Answer", "text": "NAP to skrót od Name, Address, Phone – nazwa firmy, adres i numer telefonu. Google porównuje te dane we wszystkich źródłach w sieci. Niespójne dane NAP obniżają pozycję wizytówki w Google Maps." }
              },
              {
                "@type": "Question",
                "name": "Czy pozycja w Google Maps zależy od strony internetowej?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tak – strona internetowa jest silnym sygnałem rankingowym dla wizytówki GBP. Google analizuje autorytet domeny, lokalne słowa kluczowe i schema markup LocalBusiness. Firma bez strony lub ze słabą stroną traci w rankingu wobec konkurentów z dobrą witryną." }
              },
              {
                "@type": "Question",
                "name": "Jak działają AI Overviews w lokalnym SEO?",
                "acceptedAnswer": { "@type": "Answer", "text": "AI Overviews w Google coraz częściej rekomendują konkretne firmy w odpowiedzi na lokalne zapytania. Profile z kompletem informacji, aktywnymi postami i dobrymi opiniami mają największą szansę na wyróżnienie. W 2026 roku widoczność w AI Overviews staje się nowym wskaźnikiem skuteczności local SEO." }
              }
            ]
          })
        }}
      />

      <h2>Czym jest pozycjonowanie wizytówki Google?</h2>
      <p>
        Gdy ktoś wpisuje w Google „hydraulik Warszawa" albo „fryzjer na Mokotowie", nie widzi tylko listy stron internetowych. Na górze ekranu pojawia się mapa z pinezkami i trzy wyróżnione firmy — to właśnie <strong>Local Pack</strong>, zwany też Map Pack. Ten blok generuje od 30 do 50% wszystkich kliknięć dla fraz lokalnych. Walka o te trzy miejsca to właśnie pozycjonowanie wizytówki Google.
      </p>
      <p>
        W odróżnieniu od klasycznego SEO stron internetowych, tutaj pracujesz przede wszystkim z <strong>Profilem Firmy w Google</strong> — dawniej Google Moja Firma, dziś Google Business Profile (GBP). To bezpłatny profil, który Google udostępnia każdej firmie. Im bardziej kompletny, aktywny i wiarygodny, tym wyżej algorytm go pozycjonuje w wynikach lokalnych i Google Maps.
      </p>
      <p>
        Pozycjonowanie lokalne w Google Maps to kilka warstw działań: optymalizacja samego profilu GBP, systematyczne zbieranie i zarządzanie opiniami, budowanie spójności danych w sieci, praca nad stroną internetową i zdobywanie sygnałów lokalnego autorytetu. Razem tworzą strategię SEO lokalnego, która decyduje, czy klient znajdzie Ciebie — czy Twoją konkurencję.
      </p>

      {/* ── Ilustracja: Local Pack ── */}
      <div className="not-prose my-8 rounded-2xl overflow-hidden border border-border shadow-sm">
        <div className="bg-surface px-4 py-2.5 flex items-center gap-3 border-b border-border">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
          </div>
          <div className="flex-1 bg-white rounded-full px-3 py-1 text-xs text-zinc-400 border border-border">hydraulik warszawa</div>
        </div>
        <div className="bg-white p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-3">Local Pack · Wyniki lokalne z mapą</p>
          <div className="flex gap-4">
            <div className="flex-1 border border-border rounded-xl overflow-hidden">
              <div className="p-3 flex items-start gap-3 border-b border-border bg-orange-50/50">
                <span className="shrink-0 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center mt-0.5 bg-brand">1</span>
                <div>
                  <p className="text-xs font-semibold text-brand">Hydraulik Warszawa Pro</p>
                  <p className="text-[11px]"><span className="text-amber-400">★★★★★</span><span className="text-zinc-500 ml-1">4,9 · (184)</span></p>
                  <p className="text-[10px] text-zinc-400">Hydraulik · Mokotowska 12, Warszawa</p>
                </div>
              </div>
              <div className="p-3 flex items-start gap-3 border-b border-border">
                <span className="shrink-0 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center mt-0.5 bg-zinc-300">2</span>
                <div>
                  <p className="text-xs font-semibold text-ink">Hydraulik 24h Wawa</p>
                  <p className="text-[11px]"><span className="text-amber-400">★★★★☆</span><span className="text-zinc-500 ml-1">4,2 · (67)</span></p>
                  <p className="text-[10px] text-zinc-400">Hydraulik · Al. Jerozolimskie 44</p>
                </div>
              </div>
              <div className="p-3 flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full text-[10px] font-bold text-white flex items-center justify-center mt-0.5 bg-zinc-300">3</span>
                <div>
                  <p className="text-xs font-semibold text-ink">Złota Rączka Serwis</p>
                  <p className="text-[11px]"><span className="text-amber-400">★★★★☆</span><span className="text-zinc-500 ml-1">4,0 · (41)</span></p>
                  <p className="text-[10px] text-zinc-400">Hydraulik · ul. Puławska 88</p>
                </div>
              </div>
            </div>
            <div className="w-36 shrink-0 rounded-xl bg-blue-50 border border-border flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 140 130" width="140" height="130">
                <rect width="140" height="130" fill="#dbeafe"/>
                <line x1="0" y1="65" x2="140" y2="65" stroke="white" strokeWidth="7" opacity="0.7"/>
                <line x1="70" y1="0" x2="70" y2="130" stroke="white" strokeWidth="5" opacity="0.7"/>
                <line x1="0" y1="32" x2="140" y2="32" stroke="white" strokeWidth="2" opacity="0.4"/>
                <line x1="0" y1="98" x2="140" y2="98" stroke="white" strokeWidth="2" opacity="0.4"/>
                <line x1="35" y1="0" x2="35" y2="130" stroke="white" strokeWidth="2" opacity="0.4"/>
                <line x1="105" y1="0" x2="105" y2="130" stroke="white" strokeWidth="2" opacity="0.4"/>
                <path d="M65 20 C58 20 52 26 52 34 C52 44 65 57 65 57 C65 57 78 44 78 34 C78 26 72 20 65 20 Z" fill="#FF6A00"/>
                <circle cx="65" cy="33" r="7" fill="white"/>
                <path d="M95 50 C90 50 86 54 86 60 C86 67 95 77 95 77 C95 77 104 67 104 60 C104 54 100 50 95 50 Z" fill="#9e9e9e"/>
                <path d="M112 28 C108 28 105 31 105 36 C105 42 112 50 112 50 C112 50 119 42 119 36 C119 31 116 28 112 28 Z" fill="#9e9e9e"/>
              </svg>
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 text-center mt-4 border-t border-border pt-3">
            Local Pack — 3 wyróżnione firmy nad organicznymi. Pozycja #1 zbiera nawet 40% kliknięć dla danej frazy lokalnej.
          </p>
        </div>
      </div>

      <h2>Profil Firmy w Google (Google Business Profile) — co to jest i co zawiera?</h2>
      <p>
        Google Business Profile to bezpłatny panel, w którym firma zarządza swoją obecnością w Google. Po weryfikacji profilu wizytówka pojawia się jako <strong>Knowledge Panel</strong> po prawej stronie wyników oraz jako pin na Google Maps. To często pierwsza rzecz, jaką potencjalny klient widzi o Twojej firmie — jeszcze przed wejściem na stronę internetową.
      </p>
      <p>W profilu GBP zarządzasz:</p>
      <ul>
        <li>nazwą firmy, adresem i numerem telefonu (NAP)</li>
        <li>godzinami otwarcia — regularnymi, świątecznymi i specjalnymi</li>
        <li>kategorią główną i kategoriami dodatkowymi działalności</li>
        <li>opisem firmy (do 750 znaków) z frazami kluczowymi</li>
        <li>zdjęciami lokalu, zespołu i realizacji oraz materiałami wideo</li>
        <li>listą usług i produktów z opisami i cenami</li>
        <li>postami i aktualnościami (Google Posts)</li>
        <li>sekcją pytań i odpowiedzi (Q&amp;A) dostępną publicznie</li>
        <li>atrybutami firmy (płatność kartą, WiFi, dostęp dla wózków itp.)</li>
      </ul>
      <p>
        Każde z tych pól to sygnał dla algorytmu rankingowego. Firma, która wypełnia tylko podstawowe dane, ma znacznie mniejszą szansę na top 3 w porównaniu z konkurentem, który aktywnie zarządza pełnym profilem i regularnie go aktualizuje.
      </p>

      <h2>Jak działa lokalny algorytm Google?</h2>
      <p>
        Google oficjalnie wskazuje trzy główne czynniki decydujące o pozycji wizytówki w wynikach lokalnych. Zrozumienie ich jest punktem wyjścia do skutecznej strategii pozycjonowania map Google.
      </p>

      <h3>Trafność (Relevance)</h3>
      <p>
        Google sprawdza, jak dobrze profil firmy pasuje do intencji zapytania. Decyduje tu przede wszystkim kategoria główna, słowa kluczowe w opisie i sekcji usług, a także treść połączonej strony internetowej. Firma z kategorią „Dentysta" nigdy nie pojawi się na frazę „hydraulik" — nawet jeśli działa przy tej samej ulicy.
      </p>

      <h3>Odległość (Distance)</h3>
      <p>
        Im bliżej użytkownika jest firma, tym wyżej rankuje dla zapytań bez określonej lokalizacji (np. „pizza" wpisana ze smartfona). Odległość jest obliczana od urządzenia użytkownika lub miejsca podanego w zapytaniu. Nie masz wpływu na to, gdzie jest klient — ale możesz pracować na trafność i renomę, żeby wygrywać z firmami bliżej centrum mimo peryferyjnej siedziby.
      </p>

      <h3>Renoma (Prominence)</h3>
      <p>
        To sygnał wiarygodności i popularności marki w sieci. Google bierze pod uwagę liczbę i jakość opinii, linki prowadzące do strony internetowej, obecność w katalogach i serwisach lokalnych, aktywność profilu oraz ogólną rozpoznawalność. Firmy znane offline mają naturalną przewagę — ale nawet mała firma może budować renomę online krok po kroku.
      </p>
      <p>
        W 2026 roku dochodzi nowy wymiar: <strong>AI Overviews</strong>. Google AI coraz częściej wstawia rekomendacje firm lokalnych bezpośrednio w odpowiedziach generowanych przez sztuczną inteligencję. Profil z kompletem informacji, aktywnymi postami i dobrymi opiniami ma największą szansę na wyróżnienie w tym nowym formacie — to nowy front Google Maps SEO, który warto brać pod uwagę od zaraz.
      </p>

      {/* ── Ilustracja: Trzy filary algorytmu ── */}
      <div className="not-prose my-8 grid sm:grid-cols-3 gap-4">
        <div className="border border-orange-200 rounded-2xl p-5 bg-orange-50">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand mb-2">Relevance</p>
          <p className="text-sm font-bold text-ink mb-2">Trafność</p>
          <p className="text-xs text-zinc-500 leading-relaxed">Czy Twoja kategoria i usługi odpowiadają na intencję zapytania? Kategoria główna GBP to filtr #1.</p>
        </div>
        <div className="border border-sky-200 rounded-2xl p-5 bg-sky-50">
          <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600 mb-2">Distance</p>
          <p className="text-sm font-bold text-ink mb-2">Odległość</p>
          <p className="text-xs text-zinc-500 leading-relaxed">Jak blisko klienta jesteś? Bliżej = wyżej — ale silna renoma pokonuje odległość.</p>
        </div>
        <div className="border border-emerald-200 rounded-2xl p-5 bg-emerald-50">
          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Prominence</p>
          <p className="text-sm font-bold text-ink mb-2">Renoma</p>
          <p className="text-xs text-zinc-500 leading-relaxed">Opinie, linki i cytowania — jak rozpoznawalna i wiarygodna jest firma w całej sieci?</p>
        </div>
      </div>

      <h2>Czynniki rankingowe wizytówek Google w 2026 roku</h2>
      <p>
        Na podstawie badań branżowych i obserwacji z dziesiątek projektów pozycjonowania lokalnego — poniżej najważniejsze sygnały rankingowe GBP w 2026 roku:
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="text-left p-3 border border-border font-bold text-ink">Czynnik rankingowy</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Waga</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Co zrobić w praktyce</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border">Kategoria główna GBP</td>
              <td className="p-3 border border-border text-brand font-semibold">Krytyczna</td>
              <td className="p-3 border border-border">Wybierz jak najbardziej szczegółową kategorię pasującą do głównej działalności</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Opinie (liczba, ocena, regularność)</td>
              <td className="p-3 border border-border text-brand font-semibold">Bardzo wysoka</td>
              <td className="p-3 border border-border">Systematycznie proś klientów o recenzje, odpowiadaj na każdą</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Spójność NAP w sieci</td>
              <td className="p-3 border border-border text-orange-600 font-semibold">Wysoka</td>
              <td className="p-3 border border-border">Identyczna nazwa, adres i telefon w GBP, na stronie i we wszystkich katalogach</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Sygnały strony internetowej</td>
              <td className="p-3 border border-border text-orange-600 font-semibold">Wysoka</td>
              <td className="p-3 border border-border">Lokalne słowa kluczowe, schema LocalBusiness, szybkość strony (Core Web Vitals)</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Kompletność profilu GBP</td>
              <td className="p-3 border border-border text-orange-600 font-semibold">Wysoka</td>
              <td className="p-3 border border-border">Wszystkie pola wypełnione: opis, usługi, atrybuty, godziny specjalne</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Aktywność profilu (posty, zdjęcia)</td>
              <td className="p-3 border border-border text-yellow-600 font-semibold">Średnia</td>
              <td className="p-3 border border-border">Minimum 1–2 posty tygodniowo, 2–3 nowe zdjęcia miesięcznie</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Cytowania lokalne</td>
              <td className="p-3 border border-border text-yellow-600 font-semibold">Średnia</td>
              <td className="p-3 border border-border">Wpisy w Panoramie Firm, Facebook, Yelp, branżowych katalogach</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Linki do strony internetowej</td>
              <td className="p-3 border border-border text-yellow-600 font-semibold">Średnia</td>
              <td className="p-3 border border-border">Jakość linków z lokalnych serwisów ważniejsza niż ilość</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Zachowania użytkowników (CTR, połączenia, trasy)</td>
              <td className="p-3 border border-border text-yellow-600 font-semibold">Rosnąca</td>
              <td className="p-3 border border-border">Atrakcyjne zdjęcie okładkowe i aktualne godziny zwiększają CTR</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Zdjęcia i wideo (regularność, autentyczność)</td>
              <td className="p-3 border border-border text-yellow-600 font-semibold">Rosnąca</td>
              <td className="p-3 border border-border">Własne zdjęcia z geolokalizacją, nie stockowe</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Pełną listę 34 czynników rankingowych z oceną ważności znajdziesz w artykule{" "}
        <Link href="/czynniki-rankingowe-wizytowki-google-2026">czynniki rankingowe wizytówki Google w 2026</Link>.
      </p>

      <h2>Opinie Google – najsilniejszy sygnał rankingowy</h2>
      <p>
        Recenzje to jednocześnie czynnik rankingowy i element, który decyduje, czy klient kliknie Twoją wizytówkę, czy pójdzie do konkurencji. Z perspektywy algorytmu liczą się trzy rzeczy:
      </p>
      <ul>
        <li><strong>Liczba opinii</strong> — więcej recenzji to silniejszy sygnał wiarygodności. Minimum 20–30 opinii to próg, od którego firma zaczyna być traktowana poważnie przez algorytm. Dla konkurencyjnych branż w dużych miastach — 100+ to nowe minimum.</li>
        <li><strong>Średnia ocena</strong> — firma z oceną poniżej 4,0 traci w rankingu i w zaufaniu potencjalnych klientów. Docelowo celuj w 4,5 gwiazdki i więcej.</li>
        <li><strong>Regularność napływu nowych recenzji</strong> — 50 opinii zdobytych 3 lata temu waży mniej niż 20 z ostatnich 6 miesięcy. Świeżość sygnałów ma dla algorytmu kluczowe znaczenie.</li>
      </ul>
      <p>
        Praktyczny sposób na systematyczne zbieranie opinii: wysyłaj link do wystawienia recenzji przez SMS lub WhatsApp zaraz po zakończeniu usługi — gdy klient jest w najwyższym punkcie satysfakcji. Skrócony link GBP (g.page/[twoja-firma]/review) możesz nakleić na fakturę, umieścić w stopce maila lub wydrukować jako QR kod w lokalu.
      </p>
      <p>
        Równie ważna jest <strong>odpowiedź na każdą opinię</strong> — zarówno pozytywną, jak i negatywną. Google bierze aktywność właściciela pod uwagę przy ocenie profilu. Firmy odpowiadające na recenzje budują też zaufanie przyszłych klientów, którzy czytają sposób reakcji na problem, zanim zdecydują się skorzystać z usługi.
      </p>
      <p>
        Skuteczne strategie zbierania recenzji opisujemy w artykule{" "}
        <Link href="/opinie-google-jak-zdobywac-skutecznie">jak zbierać opinie w Google bez nachalnego proszenia</Link>.
        Jeśli otrzymałeś negatywną recenzję, sprawdź{" "}
        <Link href="/negatywna-opinia-google-co-zrobic">co zrobić gdy dostaniesz negatywną opinię na wizytówce Google</Link>.
      </p>

      <h2>Optymalizacja kategorii i opisu firmy</h2>
      <p>
        Kategoria główna GBP to filtr, który Google stosuje jako pierwszy. Zanim algorytm sprawdzi odległość czy opinie — patrzy, czy kategoria firmy pasuje do zapytania. Błędna lub zbyt ogólna kategoria może wykluczyć Cię z widoczności na kluczowe frazy, nawet jeśli wszystkie inne sygnały są mocne.
      </p>
      <p>Zasady doboru kategorii w Google Business Profile:</p>
      <ul>
        <li><strong>Kategoria główna</strong> = to, za co klienci płacą Ci najczęściej lub co generuje największy przychód firmy</li>
        <li><strong>Kategorie dodatkowe</strong> (do 9) = uzupełniające usługi, które faktycznie oferujesz — nie te, które chciałbyś oferować</li>
        <li>Unikaj kategorii aspiracyjnych — wpisuj to, czym firma jest, nie czym chce być za rok</li>
        <li>Raz na kwartał sprawdzaj, czy Google dodał bardziej szczegółową kategorię pasującą do Twojej branży</li>
        <li>Analizuj kategorie top 3 konkurentów dla Twoich kluczowych fraz — to najszybszy sposób na znalezienie właściwego wyboru</li>
      </ul>
      <p>
        <strong>Opis firmy (750 znaków)</strong> powinien naturalnie zawierać frazę główną i frazy semantyczne, ale pisz go przede wszystkim dla klienta — co firma robi, dla kogo i co ją wyróżnia. Keyword stuffing w opisie GBP nie pomaga, a może sygnalizować niską jakość profilu. Opis ma przekonać człowieka, nie algorytm.
      </p>
      <p>
        Szczegółowy przewodnik po wyborze kategorii znajdziesz w artykule{" "}
        <Link href="/kategorie-wizytowka-google">kategorie w wizytówce Google – jak wybrać właściwe</Link>.
        Jak napisać skuteczny opis firmy wyjaśniamy w artykule{" "}
        <Link href="/opis-firmy-google-business-profile-jak-napisac">opis firmy w Google Business Profile</Link>.
      </p>

      <h2>Zdjęcia i materiały wideo w Google Business Profile</h2>
      <p>
        Zdjęcia mają podwójne znaczenie dla rankingu wizytówki Google: bezpośrednio wpływają na aktywność profilu (sygnał dla algorytmu) i pośrednio — przez wyższy współczynnik klikalności (CTR). Wizytówka z atrakcyjnymi zdjęciami jest klikana statystycznie 2–3 razy częściej niż ta z domyślną grafiką Google.
      </p>
      <p>Rodzaje zdjęć warte dodania do profilu GBP:</p>
      <ul>
        <li><strong>Zdjęcie profilowe i okładkowe</strong> — logo lub rozpoznawalny element wizualny marki, zdjęcie wejścia lub wnętrza lokalu</li>
        <li><strong>Zdjęcia wnętrza i zewnętrza</strong> — pomagają klientom rozpoznać lokal na miejscu i budują poczucie bezpieczeństwa przed pierwszą wizytą</li>
        <li><strong>Zdjęcia pracowników i zespołu</strong> — humanizują markę i budują zaufanie, szczególnie ważne w usługach</li>
        <li><strong>Zdjęcia realizacji, produktów i usług</strong> — kluczowe dla rzemieślników, restauracji, salonów kosmetycznych, warsztatów</li>
        <li><strong>Materiały wideo (do 30 sekund)</strong> — coraz silniejszy sygnał aktywności; Google premiuje profile z wideo w rankingu Google Maps</li>
      </ul>
      <p>
        Kluczowa zasada: <strong>regularność ponad ilość</strong>. Firma dodająca 2–3 autentyczne zdjęcia miesięcznie sygnalizuje Google aktywny, aktualizowany profil. Nie wrzucaj 100 zdjęć jednorazowo i nie znikaj na pół roku. Stały rytm wygrywa z akcyjnymi kampaniami.
      </p>
      <p>
        Co warto wiedzieć o zdjęciach w GBP i które formaty premiuje Google — sprawdź w artykule{" "}
        <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">zdjęcia w wizytówce Google – które naprawdę wpływają na pozycję</Link>.
      </p>

      <h2>Publikowanie postów w wizytówce – Google Posts</h2>
      <p>
        Google Posts to funkcja, którą większość firm ignoruje — a która daje realną przewagę konkurencyjną. Posty pojawiają się bezpośrednio w wynikach wyszukiwania, w panelu wizytówki i coraz częściej w AI Overviews. Wyróżniają Cię na tle firm, które w ogóle nie korzystają z tej opcji.
      </p>
      <p>Dostępne rodzaje postów w GBP:</p>
      <ul>
        <li><strong>Aktualności</strong> — informacje o firmie, porady, nowości (widoczne 7 dni, zostają w historii)</li>
        <li><strong>Oferty</strong> — promocje z datą ważności, kod rabatowy i warunki skorzystania</li>
        <li><strong>Wydarzenia</strong> — zaproszenia na warsztaty, targi, dni otwarte, szkolenia</li>
        <li><strong>Produkty</strong> — prezentacja konkretnych produktów ze zdjęciem i ceną</li>
      </ul>
      <p>
        Z perspektywy SEO lokalnego posty to sygnał aktywności profilu i świeżości treści. Firma publikująca regularnie komunikuje algorytmowi: „jesteśmy czynni, nasza oferta jest aktualna". W praktyce 1–2 posty tygodniowo to optimum. Mniej niż jeden wpis miesięcznie to sygnał zaniedbania profilu.
      </p>
      <p>
        Jak tworzyć posty, które faktycznie przyciągają klientów, opisujemy w artykule{" "}
        <Link href="/posty-wizytowka-google">Google Posts – jak tworzyć posty w wizytówce, które przyciągają klientów</Link>.
      </p>

      <h2>NAP, cytowania lokalne i spójność danych w sieci</h2>

      <h3>Czym jest NAP w local SEO?</h3>
      <p>
        NAP (Name, Address, Phone) to trójka najważniejszych danych firmowych w pozycjonowaniu lokalnym. Google porównuje te informacje we wszystkich miejscach w sieci, gdzie firma jest wymieniona: w GBP, na stronie internetowej, w katalogach, mediach społecznościowych, mapach Apple i mediach lokalnych.
      </p>
      <p>
        Każda niespójność — inne literowanie nazwy, skrócony adres, nieaktualny numer telefonu, brakujący kod pocztowy — to sygnał braku wiarygodności. Algorytm traktuje to jako sprzeczne informacje i obniża pozycję firmy, która „mówi różne rzeczy w różnych miejscach w internecie".
      </p>

      <h3>Cytowania lokalne – gdzie je budować?</h3>
      <p>
        Cytowanie (citation) to każde miejsce w sieci, gdzie pojawia się NAP Twojej firmy. Budowanie cytowań lokalnych to jeden z filarów lokalnego SEO i pozycjonowania wizytówki Google. Zacznij od priorytetowych źródeł:
      </p>
      <ul>
        <li>Panorama Firm (panoramafirm.pl) — najważniejszy polski katalog lokalny</li>
        <li>Facebook — zakładka Informacje na profilu firmowym</li>
        <li>Yelp — duże znaczenie dla algorytmu GBP</li>
        <li>Apple Maps i Bing Places for Business</li>
        <li>Katalogi branżowe: Znany Lekarz, Booksy, Treatwell, Fixly, OLX Praca</li>
        <li>Lokalne portale miejskie i informacyjne</li>
        <li>Izby gospodarcze i stowarzyszenia branżowe</li>
        <li>Branżowe portale z katalogiem firm (np. e-firmy.eu, aleo.com)</li>
      </ul>
      <p>
        Liczy się nie tylko ilość cytowań, ale ich spójność. Jeden wpis z błędnym adresem w popularnym katalogu może zaszkodzić bardziej niż brak 10 wpisów w mało znanych serwisach.
      </p>
      <p>
        Szczegółowy przewodnik po audycie NAP i budowaniu cytowań znajdziesz w artykule{" "}
        <Link href="/nap-wizytowka-google-co-to-jest">NAP w wizytówce Google – co to jest i jak poprawnie skonfigurować</Link>.
      </p>

      <h2>Znaczenie strony internetowej dla pozycji wizytówki Google</h2>
      <p>
        Wielu właścicieli firm traktuje stronę internetową i wizytówkę GBP jako oddzielne kanały. W rzeczywistości Google ocenia je razem — strona jest jednym z silniejszych sygnałów pozycji w rankingu Google Maps.
      </p>
      <p>Kluczowe sygnały strony dla local SEO i pozycjonowania wizytówki:</p>
      <ul>
        <li><strong>Lokalne słowa kluczowe na stronie</strong> — frazy z nazwą miasta, dzielnicy i regionu w nagłówkach H1/H2, meta tytule i treści (np. „Kancelaria prawna Kraków Śródmieście")</li>
        <li><strong>Schema markup LocalBusiness</strong> — dane strukturalne JSON-LD informujące Google o typie firmy, adresie, godzinach otwarcia i danych kontaktowych; jeden z najskuteczniejszych, a zarazem najrzadziej wdrażanych sygnałów local SEO</li>
        <li><strong>Spójność NAP na stronie</strong> — dane kontaktowe na stronie muszą być co do znaku identyczne z tymi w GBP</li>
        <li><strong>Szybkość strony i Core Web Vitals</strong> — wolna strona traci w rankingu zarówno organicznym, jak i lokalnym</li>
        <li><strong>Autorytet domeny</strong> — strony z silnym profilem linków zewnętrznych pośrednio wspierają pozycję wizytówki GBP</li>
      </ul>
      <p>
        Praktyczna rada: stwórz dedykowaną podstronę lądowania z lokalnymi słowami kluczowymi (np. „Usługi elektryczne Warszawa Wola") i linkuj ją bezpośrednio z profilu GBP w polu „Strona internetowa". To jedna z najbardziej efektywnych, a zarazem najrzadziej stosowanych technik SEO lokalnego dla małych firm.
      </p>
      <p>
        Jak wdrożyć schema markup LocalBusiness w każdym środowisku — z gotowym kodem JSON-LD — opisujemy w artykule{" "}
        <Link href="/jak-dodac-local-schema-do-strony">jak dodać local schema markup do swojej strony</Link>.
      </p>

      <h2>Lokalne link building i budowanie autorytetu</h2>
      <p>
        Linki zewnętrzne do strony internetowej firmy pozostają ważnym sygnałem rankingowym — zarówno dla SEO organicznego, jak i dla pozycji wizytówki w Google Maps. W local SEO chodzi jednak o <strong>jakość lokalną</strong>, nie ilość globalną.
      </p>
      <p>Najskuteczniejsze źródła lokalnych linków:</p>
      <ul>
        <li><strong>Lokalne media i portale informacyjne</strong> — artykuły sponsorowane, wywiady, relacje z wydarzeń</li>
        <li><strong>Partnerzy biznesowi</strong> — wzajemne linki z firmami uzupełniającymi Twoją działalność (np. architekt ↔ firma budowlana)</li>
        <li><strong>Izby gospodarcze i organizacje branżowe</strong> — profil w katalogu członków z linkiem do strony</li>
        <li><strong>Lokalne eventy i sponsoring</strong> — wzmianka z linkiem na stronie organizatora lub sponsorowanej drużyny</li>
        <li><strong>Uczelnie i instytucje publiczne</strong> — staże, współpraca, warsztaty</li>
        <li><strong>Linki bezpośrednio do profilu GBP</strong> — wzmacniają sygnały widoczności w wynikach lokalnych</li>
      </ul>
      <p>
        Gdzie pozyskiwać linki do wizytówki Google i dlaczego to nic nie kosztuje — dowiesz się w artykule{" "}
        <Link href="/linki-do-wizytowki-google">gdzie pozyskiwać linki do wizytówki Google i po co to robić</Link>.
      </p>

      <h2>Zachowania użytkowników jako sygnał rankingowy</h2>
      <p>
        Google coraz uważniej obserwuje, co użytkownicy robią po wyświetleniu wyników lokalnych. Sygnały behawioralne korelują silnie z pozycjami w Local Pack i w 2026 roku są traktowane jako coraz ważniejszy wskaźnik jakości profilu:
      </p>
      <ul>
        <li><strong>CTR (click-through rate)</strong> — jak często użytkownicy klikają Twoją wizytówkę w stosunku do konkurentów na tej samej stronie wyników</li>
        <li><strong>Kliknięcia „Zadzwoń"</strong> — liczba połączeń inicjowanych bezpośrednio z wizytówki GBP</li>
        <li><strong>Kliknięcia „Wyznacz trasę"</strong> — silny sygnał realnego zainteresowania wizytą fizyczną</li>
        <li><strong>Kliknięcia „Strona internetowa"</strong> — przejścia na stronę z poziomu GBP</li>
        <li><strong>Wyszukiwania brandowane</strong> — gdy użytkownicy szukają bezpośrednio nazwy Twojej firmy, to sygnał rozpoznawalności</li>
      </ul>
      <p>
        Co możesz zrobić, żeby poprawić sygnały behawioralne? Przede wszystkim: atrakcyjne zdjęcie okładkowe (to ono decyduje o pierwszym wrażeniu i CTR w wynikach map), aktualne godziny otwarcia z wyróżnieniem „Otwarte teraz" oraz kompletny opis usług, który odpowiada na pytanie klienta przed kliknięciem.
      </p>

      <h2>Najczęstsze błędy właścicieli firm przy pozycjonowaniu wizytówki</h2>
      <p>
        Z doświadczenia przy dziesiątkach audytów GBP — te błędy pojawiają się najczęściej i kosztują firmy widoczność w Google Maps:
      </p>
      <ul>
        <li><strong>Porzucony profil po weryfikacji</strong> — firma weryfikuje wizytówkę i nigdy do niej nie wraca. Pusty profil bez aktywności to przepis na niewidoczność w wynikach lokalnych.</li>
        <li><strong>Zła lub zbyt ogólna kategoria główna</strong> — np. „Firma usługowa" zamiast „Hydraulik" albo „Kancelaria adwokacka". Każdy stopień ogólności kosztuje pozycje.</li>
        <li><strong>Ignorowanie negatywnych opinii</strong> — brak odpowiedzi na złą recenzję komunikuje przyszłym klientom, że firma nie reaguje na problemy. To często bardziej szkodliwe niż sama recenzja.</li>
        <li><strong>Niespójne dane NAP</strong> — różne numery telefonów lub wersje adresu na stronie, Facebooku, w Panoramie Firm i GBP obniżają wiarygodność sygnałów lokalnych.</li>
        <li><strong>Kupowanie lub generowanie sztucznych opinii</strong> — Google wykrywa fałszywe recenzje i usuwa je. W skrajnych przypadkach zawiesza cały profil firmowy.</li>
        <li><strong>Brak monitorowania sekcji Q&amp;A</strong> — każdy może zadać pytanie i każdy może odpowiedzieć — w tym Twoja bezpośrednia konkurencja. Nieodpowiadane pytania zapraszają do manipulacji.</li>
        <li><strong>Stockowe fotografie zamiast własnych zdjęć</strong> — Google faworyzuje autentyczne zdjęcia z danymi geolokalizacyjnymi. Stockowe fotografie mogą być penalizowane.</li>
        <li><strong>Brak regularności</strong> — jednorazowe wdrożenie i zero aktywności przez rok. Algorytm GBP premiuje profile, które żyją i są aktualizowane.</li>
      </ul>

      <h2>Ile trwa pozycjonowanie wizytówki Google?</h2>
      <p>
        Odpowiedź zależy od branży, lokalizacji i aktualnej siły konkurencji. Poniżej realistyczny harmonogram dla typowej firmy lokalnej:
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="text-left p-3 border border-border font-bold text-ink">Etap</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Timeframe</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Co się dzieje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border">Wdrożenie optymalizacji profilu</td>
              <td className="p-3 border border-border font-semibold">Tydzień 1–2</td>
              <td className="p-3 border border-border">Kompletowanie GBP, korekta NAP, zdjęcia, opis, kategorie, usługi, atrybuty</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Pierwsze widoczne efekty</td>
              <td className="p-3 border border-border font-semibold">Tydzień 4–8</td>
              <td className="p-3 border border-border">Poprawa widoczności dla mniej konkurencyjnych fraz, wzrost wyświetleń profilu</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Stabilna poprawa pozycji</td>
              <td className="p-3 border border-border font-semibold">Miesiąc 3–6</td>
              <td className="p-3 border border-border">Wejście do top 5–10 dla głównych fraz, wzrost połączeń i wejść na stronę</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Top 3 w Local Pack</td>
              <td className="p-3 border border-border font-semibold">Miesiąc 6–12+</td>
              <td className="p-3 border border-border">W branżach o dużej konkurencji wymaga stałego budowania autorytetu i cytowań</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hydraulicy i elektrycy w małych miastach mogą zobaczyć efekty po 4–6 tygodniach. Prawnicy, lekarze czy hotele w dużych miastach — po 6–12 miesiącach intensywnych działań. Kluczowe: nie przerywaj. Profile, które regularnie rozwijają aktywność, budują przewagę, która z czasem staje się trudna do nadgonienia przez konkurencję.
      </p>

      <h2>Ile kosztuje pozycjonowanie wizytówki Google?</h2>
      <p>
        Rynek usług local SEO w Polsce jest mocno zróżnicowany. Oto realistyczny przegląd cen w 2026 roku:
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="text-left p-3 border border-border font-bold text-ink">Model współpracy</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Zakres cenowy</th>
              <th className="text-left p-3 border border-border font-bold text-ink">Dla kogo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border">Jednorazowa optymalizacja profilu GBP</td>
              <td className="p-3 border border-border font-semibold">500–2 000 zł</td>
              <td className="p-3 border border-border">Małe firmy z mało konkurencyjną branżą i lokalizacją</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Opieka miesięczna (zakres podstawowy)</td>
              <td className="p-3 border border-border font-semibold">300–600 zł/mies.</td>
              <td className="p-3 border border-border">Posty, odpowiedzi na opinie, aktualizacja danych, podstawowe zdjęcia</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Opieka miesięczna (pełen local SEO)</td>
              <td className="p-3 border border-border font-semibold">700–1 500 zł/mies.</td>
              <td className="p-3 border border-border">Posty, zdjęcia, budowanie cytowań, link building lokalny, raportowanie KPI</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Agencja, duże miasto, konkurencyjna branża</td>
              <td className="p-3 border border-border font-semibold">1 500–3 500 zł/mies.</td>
              <td className="p-3 border border-border">Intensywna rywalizacja (dentyści w Warszawie, prawnicy w Krakowie, hotele)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Uważaj na oferty poniżej 200 zł miesięcznie — zazwyczaj oznaczają brak realnych działań lub automatyczne generowanie niskiej jakości treści, które mogą obniżyć jakość profilu. Pytaj o konkretne działania, raportowanie i dostęp do panelu statystyk GBP.
      </p>
      <p>
        Kontekst cenowy dla całościowej strategii SEO znajdziesz w artykule{" "}
        <Link href="/ile-kosztuje-pozycjonowanie-strony-internetowej">ile kosztuje pozycjonowanie strony internetowej w 2026 roku</Link>.
      </p>

      <h2>Kiedy warto zlecić pozycjonowanie wizytówki agencji SEO?</h2>
      <p>
        Część działań możesz robić samodzielnie: uzupełnić profil, dodawać zdjęcia, odpowiadać na opinie, publikować posty. Ale są sytuacje, w których warto zainwestować w specjalistę:
      </p>
      <ul>
        <li><strong>Konkurencyjna lokalizacja lub branża</strong> — jeśli konkurenci mają profesjonalnie prowadzone profile z setkami recenzji, samodzielne działania będą zbyt wolne.</li>
        <li><strong>Brak czasu na regularność</strong> — systematyczność jest kluczem do sukcesu w local SEO. Jeśli nie możesz poświęcić 2–3 godzin tygodniowo na profil, lepiej zlecić specjaliście.</li>
        <li><strong>Zawieszony, zduplikowany lub zhakowany profil</strong> — naprawa tych sytuacji wymaga doświadczenia w kontaktach z pomocą techniczną Google.</li>
        <li><strong>Szybki wzrost jest priorytetem biznesowym</strong> — agencja z narzędziami i bazą cytowań może osiągnąć efekty 2–3 razy szybciej niż działania samodzielne.</li>
        <li><strong>Firma z wieloma lokalizacjami</strong> — zarządzanie kilkoma profilami GBP bez zorganizowanego systemu i narzędzi to przepis na chaos i niespójność NAP.</li>
      </ul>
      <p>
        Dobra agencja local SEO powinna transparentnie raportować wyniki (wyświetlenia, kliknięcia, połączenia, wyznaczenia tras), mieć doświadczenie w Twojej branży i nie obiecywać „gwarancji pierwszego miejsca". Takie gwarancje nie istnieją — algorytm Google nie jest pod niczyją kontrolą, a każde takie obietnice powinny wzbudzić Twoją czujność.
      </p>

      <h2>Często zadawane pytania o pozycjonowanie wizytówki Google</h2>

      <h3>Czym różni się pozycjonowanie wizytówki od pozycjonowania strony internetowej?</h3>
      <p>
        Pozycjonowanie strony (SEO organiczne) skupia się na poprawie pozycji w wynikach organicznych — niebieskich linkach. Pozycjonowanie wizytówki Google dotyczy wyników lokalnych — Local Packa z mapą i 3 firmami nad wynikami organicznymi. Oba podejścia działają synergicznie: silna strona pomaga w rankingu GBP, a wysoka pozycja wizytówki zwiększa ruch na stronie. Optymalna strategia marketingu lokalnego łączy oba kanały.
      </p>

      <h3>Czy firma bez fizycznej siedziby może mieć wizytówkę Google?</h3>
      <p>
        Tak — Google umożliwia tworzenie profilu bez podawania publicznego adresu dla firm działających w modelu Service Area Business (SAB). Fryzjer wyjazdowy, hydraulik wyjazdowy czy firma sprzątająca mogą zdefiniować obszar obsługi zamiast konkretnego adresu. Ważne: nie używaj jako adresu skrytki pocztowej ani wirtualnego biura — to narusza zasady GBP i może skutkować zawieszeniem profilu.
      </p>

      <h3>Jak sprawdzić, na które frazy wyświetla się moja wizytówka Google?</h3>
      <p>
        W panelu Google Business Profile przejdź do <strong>Statystyki → Jak klienci Cię znajdą</strong>. Zobaczysz wyszukiwane frazy, które doprowadziły do wyświetlenia Twojego profilu. Do głębszej analizy używaj Google Search Console lub narzędzi zewnętrznych jak BrightLocal, Whitespark lub Semrush Local.
      </p>

      <h3>Czy zmiana nazwy firmy wpłynie negatywnie na pozycję wizytówki?</h3>
      <p>
        Tak — każda modyfikacja nazwy w GBP może wywołać tymczasowe wahnięcie pozycji i wymagać ponownej weryfikacji przez Google. Jeśli musisz zmienić nazwę, nie zmieniaj jednocześnie innych kluczowych danych. Działaj etapami i monitoruj pozycje przez 4–6 tygodni po zmianie.
      </p>

      <h3>Czy można mieć wizytówkę Google dla firmy zarejestrowanej w małej miejscowości, ale obsługującej duże miasto?</h3>
      <p>
        Tak, ale z ograniczeniami. Wizytówka będzie rankować najsilniej w obrębie 15–30 km od adresu. Dla szerszego zasięgu warto stosować strategię podstron lokalizacyjnych na stronie internetowej, dedykowanych każdemu docelowemu miastu. Jak to zrobić opisujemy w artykule{" "}
        <Link href="/siedziba-mala-miejscowosc-local-seo">siedziba w małej miejscowości – jak zdobyć klientów z dużego miasta</Link>.
      </p>

      <h3>Jak długo efekty pozycjonowania utrzymują się po zakończeniu współpracy z agencją?</h3>
      <p>
        To zależy od tego, co zostało zbudowane. Jeśli agencja pracowała wyłącznie na aktywności profilu (posty, zdjęcia), efekty zaczną zanikać po 2–3 miesiącach bez aktywności. Jeśli zbudowano trwałe cytowania, linki i opinie — te sygnały zostają i nadal wspierają pozycję wizytówki. Pozycjonowanie wizytówki Google to inwestycja wymagająca ciągłości, nie jednorazowy projekt z datą ważności.
      </p>

      <h3>Czy liczba zdjęć w GBP bezpośrednio wpływa na ranking?</h3>
      <p>
        Pośrednio tak — ale przez aktywność profilu i wyższy CTR, nie przez samą liczbę. 200 stockowych zdjęć wgranych jednorazowo nie przewyższy profilu, który dodaje 3 autentyczne zdjęcia co tydzień. Regularność i oryginalność są ważniejsze niż ilość.
      </p>

      <h3>Co zrobić gdy konkurencja ma fałszywe opinie Google?</h3>
      <p>
        Podejrzane recenzje (wiele 5-gwiazdkowych bez treści, z kont bez historii, dodanych w krótkim czasie) możesz zgłaszać w panelu GBP jako naruszające zasady Google. Poza zgłaszaniem — skoncentruj się na systematycznym zbieraniu własnych autentycznych recenzji. Algorytm długofalowo faworyzuje naturalny wzrost nad jednorazowe skoki. Jak usunąć fałszywe lub szkodliwe opinie wyjaśniamy w artykule{" "}
        <Link href="/jak-usunac-negatywne-opinie-z-google">jak usunąć negatywne opinie z Google</Link>.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026 – pełna lista z oceną ważności</Link></li>
          <li><Link href="/opinie-google-jak-zdobywac-skutecznie" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opinie w Google – jak zbierać je bez nachalnego proszenia?</Link></li>
          <li><Link href="/nap-wizytowka-google-co-to-jest" className="text-sm font-semibold text-ink hover:text-brand transition-colors">NAP w wizytówce Google – czym jest i jak poprawnie skonfigurować?</Link></li>
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie w wizytówce Google – jak wybrać właściwe i dlaczego to kluczowe?</Link></li>
          <li><Link href="/jak-pozycjonowac-wizytowke-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
          <li><Link href="/jak-dodac-local-schema-do-strony" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak dodać local schema markup do swojej strony?</Link></li>
          <li><Link href="/linki-do-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Gdzie pozyskiwać linki do wizytówki Google i po co to robić?</Link></li>
        </ul>
      </div>
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     PORADNIK: Reklamy konkurencji na Facebooku
  ───────────────────────────────────────────────────────────────────────── */
  "jak-sprawdzic-reklamy-konkurencji-na-facebooku": (
    <>
      <h2>Czym jest Meta Ad Library i dlaczego możesz z niej korzystać legalnie?</h2>
      <p>
        Meta Ad Library (Biblioteka reklam Meta) to bezpłatne, publicznie dostępne narzędzie udostępnione przez Meta, które pokazuje wszystkie aktywne reklamy emitowane na Facebooku, Instagramie, Messengerze i w sieci Audience Network. Każdy może je przeszukiwać bez logowania. Meta wprowadziła bibliotekę w 2018 roku jako element polityki transparentności reklam politycznych, ale objęła nią wszystkie kategorie reklam.
      </p>
      <p>
        To oznacza, że masz legalny, bezpłatny dostęp do pełnej bazy aktywnych reklam dowolnej firmy — od lokalnego sklepu po ogólnopolską sieć. Nie ma tu żadnej szarej strefy. Meta sama udostępnia te dane publicznie i zachęca do korzystania z biblioteki.
      </p>

      <h2>Jak wejść do Meta Ad Library — krok po kroku</h2>
      <p>
        Meta Ad Library jest dostępna pod adresem <strong>facebook.com/ads/library</strong> — bez logowania, bez zakładania konta. Wystarczy wejść na stronę, wybrać kraj i wpisać nazwę firmy lub słowo kluczowe. Interfejs jest prosty, ale ma kilka filtrów, o których większość użytkowników nie wie.
      </p>
      <ol>
        <li>Wejdź na <strong>facebook.com/ads/library</strong>.</li>
        <li>W polu <strong>„Kraj"</strong> wybierz <strong>Polska</strong> lub „Wszystkie kraje", jeśli szukasz reklam globalnych.</li>
        <li>W polu <strong>„Kategoria reklam"</strong> wybierz <strong>„Wszystkie reklamy"</strong> — nie ograniczaj do kategorii politycznych.</li>
        <li>Wpisz <strong>nazwę strony Facebook</strong> konkurenta lub słowo kluczowe opisujące branżę.</li>
        <li>Kliknij wybraną stronę z wyników — zobaczyłeś pełną listę aktywnych reklam.</li>
      </ol>
      <p>
        Jeśli nie znasz nazwy fanpage'a konkurenta, wejdź najpierw na ich profil Facebook i skopiuj dokładną nazwę strony. Możesz też wyszukiwać po słowach kluczowych, żeby zobaczyć, co reklamują firmy z danej branży.
      </p>

      <h2>Co dokładnie widać w bibliotece reklam?</h2>
      <p>
        Meta Ad Library pokazuje każdą aktywną reklamę wraz z kluczowymi danymi: treść kreacji (zdjęcie, wideo lub karuzela), tekst reklamy, nagłówek, przycisk CTA, data uruchomienia oraz platformy emisji. Dla reklam z kategorii „Zagadnienia społeczne, wybory lub polityka" widoczne są też szacunkowe wydatki i zasięg — dla zwykłych reklam komercyjnych Meta nie ujawnia budżetów.
      </p>
      <ul>
        <li><strong>Kreacja wizualna</strong> — zdjęcie, wideo, karuzela. Widzisz dokładnie, jakie formaty testuje konkurent.</li>
        <li><strong>Tekst reklamy i nagłówek</strong> — pełna treść copy, łącznie z wariantami A/B (jeśli są aktywne).</li>
        <li><strong>Przycisk CTA</strong> — „Kup teraz", „Dowiedz się więcej", „Skontaktuj się" — mówi wiele o etapie lejka, na który kieruje reklama.</li>
        <li><strong>Data uruchomienia</strong> — kiedy reklama zaczęła się wyświetlać. Reklamy aktywne od wielu tygodni lub miesięcy to zazwyczaj te, które dobrze działają.</li>
        <li><strong>Platformy emisji</strong> — Facebook, Instagram, Messenger, Audience Network.</li>
        <li><strong>Liczba aktywnych reklam</strong> — widoczna na poziomie strony. Duża liczba wariantów świadczy o aktywnym testowaniu.</li>
      </ul>

      <h2>Jak analizować reklamy konkurencji — co szukać</h2>
      <p>
        Sam widok reklam to dopiero punkt wyjścia. Wartość płynie z umiejętnej interpretacji tego, co widzisz. Analiza reklam konkurencji pozwala odpowiedzieć na trzy pytania: co im działa, do kogo kierują przekaz i jakie mają luki, które możesz wykorzystać.
      </p>

      <h3>Które reklamy są skuteczne?</h3>
      <p>
        Meta nie pokazuje wyników reklam (CTR, konwersje), ale jest jeden proxy, który działa niezawodnie: <strong>czas emisji</strong>. Reklama aktywna od 3, 6 lub 12 miesięcy bez przerwy prawie na pewno przynosi wyniki — nikt nie płaci za reklamę przez rok, jeśli nie działa. Filtruj wyniki „od najstarszych" i szukaj kreacji, które przetrwały próbę czasu.
      </p>
      <p>
        Drugi sygnał to <strong>liczba wariantów tej samej kreacji</strong>. Jeśli konkurent ma 5 wersji reklamy z różnymi nagłówkami i tymi samymi obrazami, testuje copy. To wskazówka, że warto skupić się na nagłówkach jako elemencie decydującym o efektywności.
      </p>

      <h3>Do kogo kierują przekaz?</h3>
      <p>
        Treść reklamy mówi wiele o targetowaniu, nawet jeśli nie widzisz ustawień grupy docelowej. Reklama pisana językiem technicznym i odwołująca się do konkretnych problemów branżowych sugeruje targetowanie B2B. Reklama emocjonalna z obrazami rodziny i hasłami o bezpieczeństwie — targetowanie konsumentów. Zwróć uwagę na:
      </p>
      <ul>
        <li>Czy reklama mówi „Ty" (B2C) czy „Wasza firma / Twój biznes" (B2B)?</li>
        <li>Jakie problemy adresuje — finansowe, emocjonalne, wizerunkowe?</li>
        <li>Jaki jest punkt wejścia do lejka — ruch na stronę, lead magnet, zakup bezpośredni?</li>
        <li>Jakich słów i fraz używa — czy pokrywają się z tym, czego szukają Twoi klienci?</li>
      </ul>

      <h3>Jakie mają luki?</h3>
      <p>
        Analiza konkurencji to nie tylko kopiowanie tego, co działa — to też szukanie tego, czego nie robią. Czy żaden z konkurentów nie pokazuje twarzy właściciela? Czy nikt nie używa wideo? Czy wszystkie reklamy mówią o cenie, a nikt o procesie lub gwarancji? Luki w komunikacji konkurencji to Twoja przestrzeń do wyróżnienia się.
      </p>

      <h2>Filtry w Meta Ad Library, o których nie wiesz</h2>
      <p>
        Biblioteka reklam Meta ma kilka mniej oczywistych filtrów, które znacząco zwiększają użyteczność analizy. Większość użytkowników przegląda tylko aktywne reklamy konkretnej firmy — a można zrobić znacznie więcej.
      </p>
      <ul>
        <li><strong>Filtr „Data emisji"</strong> — pozwala zawęzić wyniki do reklam uruchomionych w konkretnym przedziale czasowym. Pomocne przy analizie sezonowych kampanii konkurencji.</li>
        <li><strong>Filtr „Platforma"</strong> — pokaż tylko reklamy z Instagrama albo tylko z Facebooka. Przydatne, jeśli chcesz wiedzieć, gdzie konkurent mocniej inwestuje.</li>
        <li><strong>Filtr „Typ mediów"</strong> — obrazy, wideo, karuzele. Sprawdź, który format dominuje w strategii konkurenta.</li>
        <li><strong>Wyszukiwanie po słowach kluczowych</strong> — zamiast szukać konkretnej firmy, wpisz słowo kluczowe (np. „klimatyzacja Warszawa") i zobaczysz reklamy wszystkich firm używających tego zwrotu. Świetne do analizy komunikatów w całej branży.</li>
        <li><strong>API biblioteki reklam</strong> — dla zaawansowanych użytkowników Meta udostępnia API do pobierania danych masowo. Wymaga zweryfikowanego konta dewelopera Meta.</li>
      </ul>

      <h2>Inne narzędzia do analizy reklam na Facebooku</h2>
      <p>
        Meta Ad Library to punkt startowy, ale nie jedyne narzędzie. Poniższe rozszerzają możliwości analizy, szczególnie gdy potrzebujesz danych historycznych lub głębszej analizy wydatków.
      </p>

      <h3>Bezpłatne narzędzia</h3>
      <ul>
        <li><strong>Facebook Ad Library (Meta Ad Library)</strong> — opisana powyżej. Bezpłatna, bez logowania, wyłącznie aktywne reklamy.</li>
        <li><strong>Moduł „Dlaczego widzę tę reklamę"</strong> — kliknij trzy kropki przy reklamie w swoim feedzie i wybierz tę opcję. Zobaczysz dane targetowania tej konkretnej reklamy, w tym jakie zainteresowania lub listy odbiorców Cię zakwalifikowały.</li>
        <li><strong>Rozszerzenie BigSpy (plan bezpłatny)</strong> — ograniczona liczba podglądów reklam dziennie, ale pozwala zobaczyć szacunkowy zasięg i zaangażowanie.</li>
      </ul>

      <h3>Płatne narzędzia</h3>
      <ul>
        <li><strong>Semrush Advertising Research</strong> — rozbudowana analiza konkurencji w płatnych kanałach, w tym Facebook Ads. Pokazuje historię reklam i szacunkowe budżety.</li>
        <li><strong>AdSpy</strong> — specjalistyczne narzędzie do śledzenia reklam na Facebooku z bazą ponad 150 mln kreacji. Możliwość filtrowania po branży, kraju, typie reklamy.</li>
        <li><strong>Minea</strong> — popularne wśród e-commerce. Śledzi produkty promowane w reklamach i szacuje ich sprzedaż.</li>
      </ul>

      <h2>Jak wykorzystać wiedzę o reklamach konkurencji w praktyce</h2>
      <p>
        Sama obserwacja reklam nic nie da, jeśli nie przełożysz jej na konkretne działania. Analiza biblioteki reklam Meta powinna kończyć się listą wniosków, nie zrzutami ekranu. Oto co warto zrobić z zebranymi danymi.
      </p>
      <ul>
        <li><strong>Zidentyfikuj najskuteczniejsze formaty</strong> — jeśli wszyscy konkurenci używają wideo, a Ty nie, to albo wiesz coś, czego oni nie wiedzą, albo zostajesz w tyle.</li>
        <li><strong>Przeanalizuj copy i nagłówki</strong> — jakie hasła się powtarzają? To prawdopodobnie te, które rezonują z Twoją wspólną grupą docelową. Możesz je przetestować z własnym twistem.</li>
        <li><strong>Sprawdź landing page'e</strong> — kliknij CTA w reklamie konkurenta i przeanalizuj stronę, na którą trafia ruch. Jak wygląda oferta, jakie są elementy konwersji?</li>
        <li><strong>Zaplanuj testy A/B</strong> — inspirując się tym, co działa u innych, stwórz własne warianty. Nie kopiuj — przetestuj ten sam koncept we własnej interpretacji.</li>
        <li><strong>Uzupełnij luki komunikacyjne</strong> — jeśli nikt w branży nie mówi o gwarancji zwrotu, czasie reakcji lub konkretnym problemie klienta, to Twoja szansa na wyróżnienie się.</li>
      </ul>

      <h2>FAQ — często zadawane pytania</h2>

      <h3>Czy sprawdzanie reklam konkurencji w Meta Ad Library jest legalne?</h3>
      <p>
        Tak — w 100%. Meta Ad Library jest publicznie dostępnym narzędziem stworzonym przez Meta i udostępnionym celowo. Przegląda je bez ograniczeń każdy użytkownik internetu, bez logowania i bez żadnych warunków użytkowania ograniczających analizę konkurencji.
      </p>

      <h3>Czy widać reklamy, które już nie są aktywne?</h3>
      <p>
        Dla większości kategorii reklam komercyjnych biblioteka pokazuje wyłącznie aktywnie emitowane kampanie. Dla reklam z kategorii politycznej i społecznej Meta przechowuje historię przez 7 lat. Narzędzia płatne takie jak AdSpy archiwizują reklamy komercyjne i pozwalają przeglądać historię.
      </p>

      <h3>Czy mogę zobaczyć, ile konkurent wydaje na reklamy?</h3>
      <p>
        Dla zwykłych reklam komercyjnych Meta nie ujawnia budżetów. Pośrednio możesz ocenić skalę inwestycji po liczbie aktywnych reklam i czasie ich emisji — im więcej wariantów i im dłuższy czas aktywności, tym zazwyczaj wyższe wydatki. Szacunkowe budżety pokazują niektóre płatne narzędzia, ale są to przybliżenia.
      </p>

      <h3>Jak często powinienem monitorować reklamy konkurencji?</h3>
      <p>
        Dla aktywnie prowadzących kampanie — raz w miesiącu jako rutynowy przegląd, plus każdorazowo przed uruchomieniem nowej kampanii. Jeśli jesteś w sezonowej branży (turystyka, budownictwo, produkty świąteczne), sprawdzaj 4–6 tygodni przed sezonem, żeby zobaczyć, jak konkurencja się przygotowuje.
      </p>

      <h3>Co zrobić, jeśli konkurent kopiuje moje reklamy?</h3>
      <p>
        Jeśli konkurent kopiuje Twoje kreacje dosłownie (identyczne zdjęcia, teksty), możesz zgłosić naruszenie praw autorskich bezpośrednio do Meta. Jeśli kopiuje styl lub koncept — to legalne i trudne do zablokowania. Najlepsza odpowiedź to przyspieszone testowanie nowych kreacji i budowanie własnej rozpoznawalnej marki.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/salon-kosmetyczny-facebook-ads" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Salon kosmetyczny i Facebook Ads – jak zarabiać na reklamach Meta?</Link></li>
          <li><Link href="/reklama-kancelarii-adwokackiej-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Reklama kancelarii adwokackiej w Google – co wolno, co działa</Link></li>
          <li><Link href="/jak-promowac-warsztat-samochodowy-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak promować warsztat samochodowy w Google?</Link></li>
          <li><Link href="/ile-kosztuje-pozycjonowanie-strony-internetowej" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Ile kosztuje pozycjonowanie strony internetowej w 2026 roku?</Link></li>
          <li><Link href="/jak-dobierac-slowa-kluczowe-do-pozycjonowania" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak dobierać słowa kluczowe do pozycjonowania?</Link></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czy sprawdzanie reklam konkurencji w Meta Ad Library jest legalne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak — w 100%. Meta Ad Library jest publicznie dostępnym narzędziem stworzonym przez Meta i udostępnionym celowo. Przegląda je bez ograniczeń każdy użytkownik internetu, bez logowania i bez żadnych warunków użytkowania ograniczających analizę konkurencji.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy w Meta Ad Library widać reklamy, które już nie są aktywne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dla większości kategorii reklam komercyjnych biblioteka pokazuje wyłącznie aktywnie emitowane kampanie. Dla reklam politycznych Meta przechowuje historię przez 7 lat. Narzędzia płatne takie jak AdSpy archiwizują reklamy komercyjne.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy można zobaczyć, ile konkurent wydaje na reklamy na Facebooku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dla zwykłych reklam komercyjnych Meta nie ujawnia budżetów. Pośrednio możesz ocenić skalę po liczbie aktywnych reklam i czasie ich emisji. Szacunkowe budżety pokazują niektóre płatne narzędzia takie jak Semrush czy AdSpy.",
                },
              },
              {
                "@type": "Question",
                "name": "Jak często powinienem monitorować reklamy konkurencji na Facebooku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dla aktywnie prowadzących kampanie — raz w miesiącu jako rutynowy przegląd, plus każdorazowo przed uruchomieniem nowej kampanii. W sezonowych branżach sprawdzaj 4–6 tygodni przed sezonem.",
                },
              },
              {
                "@type": "Question",
                "name": "Jak rozpoznać, które reklamy konkurencji są skuteczne?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kluczowym wskaźnikiem jest czas emisji. Reklama aktywna od wielu miesięcy bez przerwy prawie na pewno przynosi wyniki — nikt nie płaci za niedziałającą reklamę przez rok. Szukaj kreacji uruchomionych najwcześniej i nadal aktywnych.",
                },
              },
            ],
          }),
        }}
      />
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     OSZUSTWO: Telefon że wizytówka wygaśnie
  ───────────────────────────────────────────────────────────────────────── */
  "telefon-wizytowka-google-wygasnie-oszustwo": (
    <>
      <h2>Wizytówka Google nie wygasa — to fakt, nie opinia</h2>
      <p>
        Google Business Profile jest usługą bezpłatną i nie ma żadnego okresu ważności. Wizytówka nie wygasa po roku, dwóch ani nigdy — dopóki Google nie zmieni swoich zasad lub właściciel sam jej nie usunie. Telefon z informacją o zbliżającym się wygaśnięciu profilu jest oszustwem, niezależnie od tego, jak profesjonalnie brzmi rozmówca i jak pilnie prosi o płatność.
      </p>
      <p>
        To nie jest nowy przekręt. Działa od ponad dekady, ewoluuje i wciąż zbiera ofiary — bo jest skuteczny. Właściciele firm są zajęci, zagrożenie brzmi wiarygodnie, a kwoty żądane przez oszustów są na tyle małe, że wielu woli zapłacić niż ryzykować utratę widoczności w Google. Poniżej wyjaśniam dokładnie, jak ten schemat działa i co zrobić, gdy Cię dotknął.
      </p>

      <h2>Jak brzmi ten telefon — dokładny scenariusz</h2>
      <p>
        Oszuści telefoniczni w tym schemacie posługują się skryptem, który jest niemal identyczny u setek firm działających na terenie całej Polski. Znajomość scenariusza rozmowy to najszybszy sposób, żeby rozpoznać przekręt zanim zdążysz się zaangażować emocjonalnie.
      </p>
      <p>Typowy przebieg rozmowy wygląda tak:</p>
      <ul>
        <li><strong>Wstęp:</strong> „Dzień dobry, dzwonię w imieniu partnera Google / działu wsparcia Google / centrum obsługi klienta Google." Rozmówca mówi pewnie, często z lekkim akcentem lub przez firmową centralę, która ma dodać wiarygodności.</li>
        <li><strong>Komunikat o zagrożeniu:</strong> „Widzimy, że Pana/Pani wizytówka Google wygaśnie za [3–14] dni. Jeśli nie odnowi Pan/Pani abonamentu, profil zostanie usunięty z wyników wyszukiwania i map."</li>
        <li><strong>Presja czasu:</strong> „Mamy dla Pana/Pani jeszcze aktywną ofertę odnowienia, ale ważna jest tylko do dziś / do końca tygodnia."</li>
        <li><strong>Kwota:</strong> Zazwyczaj między 150 a 600 zł — wystarczająco mało, żeby nie wzbudzić podejrzeń, wystarczająco dużo, żeby zarobić.</li>
        <li><strong>Dane do płatności:</strong> Przelew na konto osoby fizycznej lub firmy z enigmatyczną nazwą, szybki przelew BLIK albo link do płatności przez zewnętrzny serwis.</li>
      </ul>
      <p>
        Jeśli zaczniesz pytać o szczegóły — numer klienta, potwierdzenie od Google, fakturę — rozmówca stanie się coraz bardziej natrętny lub po prostu rozłączy się. Prawdziwy pracownik Google tak się nie zachowuje. Zresztą — Google nie prowadzi sprzedaży telefonicznej usług GBP w Polsce.
      </p>

      <h2>Dlaczego ten przekręt działa tak skutecznie</h2>
      <p>
        Schemat „wygasającej wizytówki" jest efektywny, bo łączy trzy elementy psychologiczne: autorytet (Google to wielka firma, której się ufa), pilność (za kilka dni profil zniknie) i niską barierę wejścia (relatywnie mała kwota). Właściciele firm, którzy zainwestowali czas w budowanie wizytówki i zdobywanie opinii, naturalnie boją się jej utraty.
      </p>
      <p>
        Dodatkowym czynnikiem jest to, że Google rzeczywiście wysyła e-maile z przypomnieniami o aktualizacji danych, co oswaja z myślą, że „coś od Google" może wymagać działania. Oszuści celowo naśladują styl komunikacji korporacyjnej — by zamazać granicę między legalnym powiadomieniem a przekrętem.
      </p>

      <h2>Co konkretnie Google nigdy nie robi</h2>
      <p>
        Google nie kontaktuje się z właścicielami firm telefonicznie w celu pobierania opłat za wizytówkę. Nie ma takiej usługi, takiego działu i takiego numeru telefonu. Poniżej lista rzeczy, których Google nie robi — a które są stałymi elementami tego oszustwa.
      </p>
      <ul>
        <li><strong>Google nie dzwoni, żeby przypomnieć o „odnowieniu" GBP</strong> — bo nie ma czego odnawiać. Profil nie ma abonamentu ani okresu ważności.</li>
        <li><strong>Google nie wysyła faktur za prowadzenie wizytówki</strong> — GBP jest bezpłatny. Faktury od Google mogą dotyczyć wyłącznie płatnych usług: Google Ads, Google Workspace, Google Cloud.</li>
        <li><strong>Google nie grozi usunięciem profilu za brak płatności</strong> — profil może zostać zawieszony za naruszenie zasad (np. fałszywe dane, opinie), ale nie za brak opłaty, bo opłat nie ma.</li>
        <li><strong>Google nie prosi o płatność BLIK-iem, przelewem na konto osoby fizycznej ani przez WhatsApp</strong>.</li>
        <li><strong>Google nie oferuje „specjalnych pakietów odnowienia" przez telefon</strong> — wszelkie płatne produkty Google dostępne są wyłącznie przez oficjalne panele (ads.google.com, workspace.google.com).</li>
      </ul>

      <h2>Już zapłaciłem — co teraz?</h2>
      <p>
        Jeśli przelałeś pieniądze zanim zorientowałeś się, że to oszustwo, działaj szybko — im szybciej, tym większe szanse na odzyskanie środków. Nie ma gwarancji powodzenia, ale cztery kroki poniżej zwiększają prawdopodobieństwo.
      </p>
      <ol>
        <li>
          <strong>Zadzwoń do banku natychmiast</strong> — poproś o blokadę przelewu lub uruchomienie procedury RECALL. Banki mają możliwość cofnięcia transakcji, jeśli środki jeszcze nie opuściły rachunku docelowego. Każda minuta ma znaczenie.
        </li>
        <li>
          <strong>Zgłoś oszustwo na Policję</strong> — złóż zawiadomienie o podejrzeniu popełnienia przestępstwa (art. 286 Kodeksu karnego — oszustwo). Możesz to zrobić online przez platformę ePUAP lub osobiście na komisariacie. Zachowaj wszelkie dowody: numer telefonu, nagranie rozmowy, potwierdzenie przelewu, korespondencję.
        </li>
        <li>
          <strong>Zgłoś incydent do CERT Polska</strong> — pod adresem <strong>incydent.cert.pl</strong>. CERT Polska monitoruje tego typu schematy i może przyczynić się do zablokowania numerów używanych przez oszustów.
        </li>
        <li>
          <strong>Zgłoś do UOKiK</strong> — jeśli firma, która dzwoniła, działa legalnie pod polskim adresem i wystawiała faktury za fikcyjne usługi, Urząd Ochrony Konkurencji i Konsumentów może wszcząć postępowanie.
        </li>
      </ol>
      <p>
        Nie wstydź się zgłaszać. Oszuści liczą na to, że ofiary zamilczą z wstydu. Każde zgłoszenie pomaga w identyfikacji sprawców i chroni kolejne osoby.
      </p>

      <h2>Jak rozpoznać inne warianty tego przekrętu</h2>
      <p>
        Schemat „wygasającej wizytówki" ma kilka mutacji, które krążą w Polsce od lat. Wspólny mianownik to zawsze ta sama logika: podszywanie się pod autorytet (Google, urząd, operator), tworzenie fikcyjnego zagrożenia i żądanie płatności. Znaj ich wszystkie, żeby nie dać się zaskoczyć w innej formie.
      </p>
      <ul>
        <li><strong>Faktura za „opłatę administracyjną"</strong> — przychodzi pocztą lub e-mailem, wygląda jak oficjalny dokument Google. Piszemy o tym osobno w artykule{" "}
          <Link href="/oplata-administracyjna-wizytowka-google">opłata administracyjna za wizytówkę Google — to oszustwo</Link>.
        </li>
        <li><strong>SMS o „konieczności aktualizacji danych"</strong> — z linkiem do fałszywego panelu logowania, który kradnie dane dostępowe do konta Google.</li>
        <li><strong>E-mail o „naruszeniu zasad" wymagający natychmiastowej opłaty</strong> — Google wysyła powiadomienia o naruszeniach, ale nigdy nie żąda opłaty w celu ich rozwiązania.</li>
        <li><strong>Telefon od „firmy SEO" oferującej pozycjonowanie wizytówki za drobną opłatę z góry</strong> — część takich firm jest legalna, część nie. Zasada jest prosta: prawdziwa agencja SEO nigdy nie żąda przedpłaty przez telefon bez umowy.</li>
      </ul>
      <p>
        Przegląd najpopularniejszych przekrętów związanych z GBP znajdziesz w artykule{" "}
        <Link href="/wizytowka-google-popularne-oszustwa">wizytówka Google — najpopularniejsze oszustwa</Link>.
      </p>

      <h2>Co powiedzieć, gdy znów zadzwonią</h2>
      <p>
        Najskuteczniejsza odpowiedź jest krótka. Nie wdawaj się w dyskusję, nie podawaj żadnych danych, nie pytaj o szczegóły oferty — bo każda odpowiedź przedłuża rozmowę i daje oszustowi kolejną szansę na wywieranie presji.
      </p>
      <p>
        Wystarczy jedno zdanie: <strong>„Google Business Profile jest bezpłatny i nie wygasa. Rozłączam się."</strong>
      </p>
      <p>
        Możesz też dodać numer do blokady w telefonie. Wiele numerów używanych w tym schemacie jest już zgłoszonych w bazie <strong>KtoZadzwonil.pl</strong> — warto tam sprawdzić, zanim oddzwonisz na nieznany numer.
      </p>

      <h2>Jak sprawdzić prawdziwy stan swojej wizytówki Google</h2>
      <p>
        Jedynym wiarygodnym miejscem do sprawdzenia stanu wizytówki Google jest Twój własny panel — dostępny po zalogowaniu na konto Google powiązane z profilem. Jeśli profil jest aktywny, widoczny i nie ma żadnych alertów w panelu, wizytówka działa prawidłowo.
      </p>
      <p>
        Wejdź na <strong>business.google.com</strong> lub wpisz w Google nazwę swojej firmy będąc zalogowanym — zobaczysz kafelek z przyciskami zarządzania. Jeśli profil wymaga uwagi, Google pokaże ostrzeżenie bezpośrednio tam — nie przez telefon od nieznanej osoby.
      </p>
      <p>
        Jeśli rzeczywiście masz problem z dostępem do wizytówki, przyczyny są zupełnie inne niż brak opłaty. Pomaga w takich sytuacjach poradnik{" "}
        <Link href="/jak-odzyskac-dostep-do-wizytowki-google">jak odzyskać dostęp do wizytówki Google</Link>.
      </p>

      <h2>FAQ — często zadawane pytania</h2>

      <h3>Czy wizytówka Google naprawdę wygasa?</h3>
      <p>
        Nie. Google Business Profile jest bezpłatny i nie ma żadnego okresu ważności ani abonamentu. Wizytówka może zostać zawieszona przez Google wyłącznie za naruszenie zasad użytkowania (np. fałszywe dane, nieautentyczne opinie) — nigdy za brak opłaty, bo opłat nie ma.
      </p>

      <h3>Czy Google dzwoni do firm w sprawie wizytówki?</h3>
      <p>
        Google nie prowadzi sprzedaży telefonicznej usług Google Business Profile w Polsce. Jeśli ktoś dzwoni jako „przedstawiciel Google" z informacją o wygasaniu profilu lub konieczności opłaty — to nie jest pracownik Google. To oszust.
      </p>

      <h3>Zapłaciłem. Czy odzyskam pieniądze?</h3>
      <p>
        Szanse zależą od szybkości reakcji. Zadzwoń do banku natychmiast po zorientowaniu się — możliwa jest blokada przelewu. Złóż też zawiadomienie na Policję i zgłoszenie do CERT Polska (incydent.cert.pl). Im więcej osób zgłasza ten sam numer, tym szybciej można zablokować działalność oszustów.
      </p>

      <h3>Jak sprawdzić, czy numer, który zadzwonił, jest znany jako oszukańczy?</h3>
      <p>
        Wpisz numer w wyszukiwarce lub sprawdź na stronie <strong>KtoZadzwonil.pl</strong> — użytkownicy zgłaszają tam numery używane przez telemarketerów i oszustów. Numery używane w schemacie „wygasającej wizytówki" pojawiają się tam regularnie z opisami ostrzegającymi innych.
      </p>

      <h3>Firma wystawiła mi fakturę za „utrzymanie wizytówki". Czy muszę ją opłacić?</h3>
      <p>
        Nie — jeśli nie podpisałeś żadnej umowy z tą firmą. Faktura bez umowy nie jest prawnie wiążącym dokumentem. Skonsultuj się z prawnikiem lub zgłoś sprawę do UOKiK, jeśli firma nalega na płatność lub grozi konsekwencjami prawnymi.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/wizytowka-google-nie-wygasa-oszustwo" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat</Link></li>
          <li><Link href="/oplata-administracyjna-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opłata administracyjna za wizytówkę Google – to oszustwo</Link></li>
          <li><Link href="/wizytowka-google-popularne-oszustwa" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Wizytówka Google – najpopularniejsze oszustwa</Link></li>
          <li><Link href="/jak-odzyskac-dostep-do-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak odzyskać dostęp do wizytówki Google?</Link></li>
          <li><Link href="/czy-wizytowka-google-jest-platna" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czy wizytówka Google jest płatna?</Link></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czy wizytówka Google naprawdę wygasa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. Google Business Profile jest bezpłatny i nie ma żadnego okresu ważności ani abonamentu. Wizytówka może zostać zawieszona przez Google wyłącznie za naruszenie zasad użytkowania — nigdy za brak opłaty, bo opłat nie ma.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy Google dzwoni do firm w sprawie wizytówki Google Business Profile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google nie prowadzi sprzedaży telefonicznej usług Google Business Profile w Polsce. Jeśli ktoś dzwoni jako 'przedstawiciel Google' z informacją o wygasaniu profilu lub konieczności opłaty — to oszust, nie pracownik Google.",
                },
              },
              {
                "@type": "Question",
                "name": "Co zrobić jeśli zapłaciłem za rzekome odnowienie wizytówki Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zadzwoń do banku natychmiast — możliwa jest blokada przelewu. Złóż zawiadomienie na Policję i zgłoszenie do CERT Polska pod adresem incydent.cert.pl. Im szybciej działasz, tym większe szanse na odzyskanie środków.",
                },
              },
              {
                "@type": "Question",
                "name": "Firma wystawiła mi fakturę za utrzymanie wizytówki Google. Czy muszę ją opłacić?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — jeśli nie podpisałeś żadnej umowy z tą firmą. Faktura bez umowy nie jest prawnie wiążącym dokumentem. Skonsultuj się z prawnikiem lub zgłoś sprawę do UOKiK.",
                },
              },
              {
                "@type": "Question",
                "name": "Jak sprawdzić prawdziwy stan swojej wizytówki Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wejdź na business.google.com lub wpisz w Google nazwę swojej firmy będąc zalogowanym. Jeśli profil jest aktywny i nie ma alertów w panelu — wizytówka działa prawidłowo. Google nigdy nie informuje o problemach przez telefon od zewnętrznej firmy.",
                },
              },
            ],
          }),
        }}
      />
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     PORADNIK: Prawa menedżerskie do wizytówki Google
  ───────────────────────────────────────────────────────────────────────── */
  "jak-nadac-prawa-menedzerskie-wizytowka-google": (
    <>
      <h2>Czym są prawa menedżerskie w Google Business Profile?</h2>
      <p>
        Prawa menedżerskie w Google Business Profile to uprawnienia nadawane innym użytkownikom, które pozwalają im zarządzać wizytówką firmy bez przejmowania jej własności. Menedżer może edytować dane, dodawać zdjęcia, odpowiadać na opinie i publikować posty — ale nie może usunąć profilu ani zmienić właściciela. To bezpieczny sposób na przekazanie obsługi GBP agencji lub pracownikowi.
      </p>
      <p>
        W praktyce prawa menedżerskie rozwiązują jeden z najczęstszych problemów właścicieli firm: chcą zlecić prowadzenie wizytówki na zewnątrz, ale boją się utraty kontroli nad profilem. Dzięki podziałowi ról w GBP właściciel zawsze zachowuje najwyższy poziom uprawnień — nikt nie może go usunąć bez jego zgody.
      </p>

      <h2>Właściciel a menedżer — kluczowe różnice w uprawnieniach</h2>
      <p>
        Google Business Profile rozróżnia dwie główne role: właściciela (Owner) i menedżera (Manager). Właściciel ma pełną kontrolę nad profilem — może go usunąć, przekazać własność, dodawać i usuwać użytkowników. Menedżer ma dostęp do wszystkich funkcji operacyjnych, ale nie może modyfikować uprawnień ani trwale usunąć profilu. Istnieje też rola Właściciela współdzielonego, pośrednia między nimi.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1a2340] text-white">
              <th className="text-left p-3 border border-border">Czynność</th>
              <th className="text-left p-3 border border-border">Właściciel</th>
              <th className="text-left p-3 border border-border">Właściciel współdzielony</th>
              <th className="text-left p-3 border border-border">Menedżer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-border">Edycja danych firmy</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Odpowiadanie na opinie</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Dodawanie zdjęć i postów</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Dodawanie/usuwanie użytkowników</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-red-500 font-semibold">✗ Nie</td>
            </tr>
            <tr>
              <td className="p-3 border border-border">Usunięcie profilu</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-red-500 font-semibold">✗ Nie</td>
              <td className="p-3 border border-border text-red-500 font-semibold">✗ Nie</td>
            </tr>
            <tr className="bg-surface">
              <td className="p-3 border border-border">Przekazanie własności</td>
              <td className="p-3 border border-border text-green-600 font-semibold">✓ Tak</td>
              <td className="p-3 border border-border text-red-500 font-semibold">✗ Nie</td>
              <td className="p-3 border border-border text-red-500 font-semibold">✗ Nie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Zlecając obsługę GBP agencji SEO lub pracownikowi, zawsze nadaj im rolę <strong>Menedżera</strong> — nigdy Właściciela. Właściciel ma zbyt szerokie uprawnienia i w skrajnych przypadkach może przejąć kontrolę nad profilem, co jest trudne do odwrócenia. Szczegóły o tym, jak zarządzać kontem, gdy straciłeś dostęp, opisuje artykuł{" "}
        <Link href="/jak-odzyskac-dostep-do-wizytowki-google">jak odzyskać dostęp do wizytówki Google</Link>.
      </p>

      <h2>Jak nadać prawa menedżerskie do wizytówki Google — krok po kroku</h2>
      <p>
        Nadanie praw menedżerskich zajmuje mniej niż 2 minuty i wymaga wyłącznie dostępu do przeglądarki. Cały proces odbywa się w panelu Google Business Profile lub bezpośrednio przez wyszukiwarkę Google. Osoba, której nadajesz uprawnienia, musi posiadać aktywne konto Google.
      </p>

      <h3>Metoda 1 — przez wyszukiwarkę Google (najszybsza)</h3>
      <ol>
        <li>Zaloguj się na konto Google powiązane z wizytówką.</li>
        <li>Wpisz w Google nazwę swojej firmy lub wejdź na <strong>google.com/business</strong>.</li>
        <li>Kliknij kafelek wizytówki, a następnie „Edytuj profil".</li>
        <li>W lewym menu wybierz <strong>„Użytkownicy"</strong> (ikona osoby).</li>
        <li>Kliknij niebieski przycisk <strong>„Dodaj użytkownika"</strong> w prawym górnym rogu.</li>
        <li>Wpisz adres e-mail konta Google osoby, której nadajesz dostęp.</li>
        <li>Wybierz rolę: <strong>Menedżer</strong> lub Właściciel współdzielony.</li>
        <li>Kliknij <strong>„Zaproś"</strong>. Zaproszenie trafi na wskazany adres e-mail.</li>
      </ol>

      <h3>Metoda 2 — przez panel business.google.com</h3>
      <ol>
        <li>Wejdź na <strong>business.google.com</strong> i zaloguj się.</li>
        <li>Wybierz profil, do którego chcesz dodać użytkownika.</li>
        <li>Kliknij ikonę trzech kropek (menu) → <strong>„Ustawienia biznesowe"</strong>.</li>
        <li>Przejdź do sekcji <strong>„Menedżerowie"</strong>.</li>
        <li>Kliknij <strong>„Zaproś menedżerów"</strong>, wpisz adres e-mail i wybierz rolę.</li>
        <li>Zatwierdź zaproszenie przyciskiem <strong>„Zaproś"</strong>.</li>
      </ol>
      <p>
        Zaproszenie jest ważne przez <strong>30 dni</strong>. Jeśli zaproszony użytkownik go nie przyjmie w tym czasie, konieczne będzie wysłanie nowego. Osoba po przyjęciu zaproszenia pojawi się na liście użytkowników profilu.
      </p>

      <h2>Jak wygląda zaproszenie od strony menedżera?</h2>
      <p>
        Osoba, której wysłałeś zaproszenie, otrzyma wiadomość e-mail od Google z tytułem „[Nazwa Twojej firmy] zaprasza Cię do zarządzania swoją wizytówką". W mailu znajdzie przycisk „Zaakceptuj zaproszenie", który przekieruje ją do konta Google. Po zalogowaniu (lub założeniu konta, jeśli go nie ma) zaproszenie zostaje aktywowane automatycznie.
      </p>
      <p>
        Od momentu przyjęcia zaproszenia menedżer widzi profil firmy w swoim panelu business.google.com. Może zalogować się na własne konto Google i zarządzać wizytówką — bez dostępu do Twojego prywatnego konta czy innych profili, które posiadasz.
      </p>

      <h2>Kiedy warto nadać prawa menedżerskie?</h2>
      <p>
        Prawa menedżerskie warto nadać w każdej sytuacji, gdy zarządzanie wizytówką ma wykonywać ktoś inny niż właściciel firmy. Delegowanie dostępu do GBP to dobra praktyka przy skalowaniu działań marketingowych i zabezpieczeniu ciągłości obsługi profilu w razie nieobecności.
      </p>
      <ul>
        <li><strong>Agencja SEO lub marketingowa</strong> — aby mogła optymalizować profil, publikować posty, dodawać zdjęcia i odpowiadać na opinie bez angażowania właściciela.</li>
        <li><strong>Pracownik ds. marketingu</strong> — gdy firma ma dział marketingu wewnętrznego odpowiedzialnego za obecność w Google.</li>
        <li><strong>Wiele lokalizacji</strong> — gdy każda lokalizacja ma lokalnego menedżera odpowiedzialnego za swoją wizytówkę. Jak zarządzać wieloma profilami jednocześnie, opisuje artykuł{" "}
          <Link href="/wiele-lokalizacji-google-business-profile">wiele lokalizacji w Google Business Profile</Link>.
        </li>
        <li><strong>Wsparcie techniczne podczas weryfikacji</strong> — jeśli ktoś pomaga Ci przejść przez proces weryfikacji. Więcej o weryfikacji przeczytasz w artykule{" "}
          <Link href="/weryfikacja-wizytowki-google">weryfikacja wizytówki Google</Link>.
        </li>
      </ul>

      <h2>Jak bezpiecznie zarządzać dostępami do wizytówki</h2>
      <p>
        Bezpieczne zarządzanie dostępami do GBP opiera się na zasadzie minimalnych uprawnień — każda osoba powinna mieć tylko tyle dostępu, ile potrzebuje do wykonania swojej pracy. Właściciel powinien co kwartał przeglądać listę użytkowników i usuwać osoby, które już nie zarządzają profilem.
      </p>
      <ul>
        <li><strong>Nigdy nie przekazuj roli Właściciela agencji</strong> — zawsze nadawaj rolę Menedżera. Właściciel może usunąć Cię z własnego profilu.</li>
        <li><strong>Używaj adresów e-mail firmowych</strong> — nie prywatnych. Jeśli pracownik odejdzie, jego prywatne konto Google nadal będzie miało dostęp do wizytówki.</li>
        <li><strong>Regularnie audytuj listę użytkowników</strong> — były pracownik lub była agencja z dostępem Menedżera może edytować dane firmy.</li>
        <li><strong>Zachowaj co najmniej 2 właścicieli</strong> — jeśli jedyny właściciel straci dostęp do konta Google, odzyskanie profilu może trwać tygodnie.</li>
        <li><strong>Nie loguj się na konto właściciela przez panel agencji</strong> — udostępniaj tylko dostęp przez zaproszenie, nigdy login i hasło.</li>
      </ul>

      <h2>Jak usunąć menedżera z wizytówki Google</h2>
      <p>
        Usunięcie menedżera z wizytówki Google zajmuje kilkanaście sekund i może wykonać wyłącznie właściciel lub właściciel współdzielony. Dostęp jest odbierany natychmiastowo — menedżer traci możliwość edycji profilu w chwili usunięcia, bez możliwości odwołania ani powiadomienia.
      </p>
      <ol>
        <li>Zaloguj się na konto właściciela wizytówki.</li>
        <li>Wejdź w panel zarządzania profilem → <strong>„Użytkownicy"</strong>.</li>
        <li>Znajdź osobę, którą chcesz usunąć, i kliknij ikonę trzech kropek obok jej nazwy.</li>
        <li>Wybierz <strong>„Usuń"</strong> i potwierdź decyzję.</li>
      </ol>
      <p>
        Jeśli usuwasz dostęp agencji, upewnij się najpierw, że masz własny dostęp do profilu jako właściciel — zdarzają się sytuacje, gdy agencja była jedynym użytkownikiem z dostępem do panelu. W takiej sytuacji pomocny będzie poradnik{" "}
        <Link href="/jak-odzyskac-dostep-do-wizytowki-google">jak odzyskać dostęp do wizytówki Google</Link>.
      </p>

      <h2>Najczęstsze problemy przy nadawaniu uprawnień</h2>
      <p>
        Większość błędów przy nadawaniu uprawnień do GBP wynika z pomyłek w adresie e-mail lub braku konta Google po stronie zaproszonej osoby. Poniżej najczęstsze problemy i sposoby ich rozwiązania.
      </p>
      <ul>
        <li>
          <strong>„Nie mogę znaleźć użytkownika"</strong> — podany adres e-mail nie jest powiązany z żadnym kontem Google. Poproś osobę o założenie konta Google lub podaj inny adres.
        </li>
        <li>
          <strong>Zaproszenie wygasło</strong> — zaproszenia ważne są 30 dni. Wyślij nowe zaproszenie. Starsze zaproszenia nie są anulowane automatycznie — warto ręcznie usunąć wygasłe z listy oczekujących.
        </li>
        <li>
          <strong>Menedżer nie widzi profilu w panelu</strong> — zazwyczaj wynika z zalogowania na inne konto Google. Sprawdź, czy menedżer jest zalogowany na adres e-mail, na który wysłałeś zaproszenie.
        </li>
        <li>
          <strong>Brak opcji „Użytkownicy" w panelu</strong> — widzisz tę opcję tylko jako właściciel lub właściciel współdzielony. Menedżerowie nie mają dostępu do zarządzania użytkownikami.
        </li>
        <li>
          <strong>Wizytówka nie jest zweryfikowana</strong> — niezweryfikowane profile mają ograniczone funkcje, w tym brak możliwości zarządzania użytkownikami. Najpierw przeprowadź weryfikację — opisuje ją artykuł{" "}
          <Link href="/weryfikacja-wizytowki-google">weryfikacja wizytówki Google krok po kroku</Link>.
        </li>
      </ul>

      <h2>FAQ — często zadawane pytania</h2>

      <h3>Ile osób może zarządzać jedną wizytówką Google?</h3>
      <p>
        Google Business Profile pozwala dodać do 100 użytkowników w różnych rolach. W praktyce profil firmy powinien mieć maksymalnie 2–3 właścicieli (jako zabezpieczenie) i tyle menedżerów, ile realnie potrzeba. Zbyt duża liczba użytkowników zwiększa ryzyko niezamierzonych zmian w profilu.
      </p>

      <h3>Czy menedżer może sam sobie nadać wyższe uprawnienia?</h3>
      <p>
        Nie. Menedżer nie może zmieniać uprawnień — ani swoich, ani innych użytkowników. Tylko właściciel i właściciel współdzielony mogą zarządzać rolami. Menedżer nie może też usunąć profilu ani przekazać własności.
      </p>

      <h3>Co się stanie z wizytówką, jeśli jedyny właściciel usunie konto Google?</h3>
      <p>
        Wizytówka pozostanie aktywna, ale nikt nie będzie miał do niej dostępu jako właściciel. Odzyskanie dostępu w takiej sytuacji wymaga przejścia przez proces weryfikacji tożsamości Google, który może trwać od kilku dni do kilku tygodni. Dlatego warto zawsze mieć co najmniej dwóch właścicieli z różnymi kontami Gmail.
      </p>

      <h3>Czy agencja SEO potrzebuje hasła do mojego konta Google?</h3>
      <p>
        Nie — i nie powinna go otrzymywać. Właściwy sposób to zaproszenie agencji jako menedżera przez panel GBP. Agencja zarządza wizytówką ze swojego konta Google, a Ty zachowujesz pełną kontrolę jako właściciel. Przekazywanie hasła do konta Google jest poważnym błędem bezpieczeństwa.
      </p>

      <h3>Czy menedżer widzi dane osobiste właściciela?</h3>
      <p>
        Menedżer widzi tylko dane biznesowe profilu: nazwę firmy, adres, godziny, opinie, statystyki wizytówki. Nie ma dostępu do prywatnych danych konta Google właściciela, jego innych usług Google (Gmail, Dysk, Zdjęcia) ani historii rozliczeń.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/jak-odzyskac-dostep-do-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Jak odzyskać dostęp do wizytówki Google? Krok po kroku</Link></li>
          <li><Link href="/weryfikacja-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Weryfikacja wizytówki Google – wszystkie metody krok po kroku</Link></li>
          <li><Link href="/wiele-lokalizacji-google-business-profile" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Wiele lokalizacji w Google Business Profile – jak zarządzać?</Link></li>
          <li><Link href="/sekcja-informacje-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Sekcja Informacje w wizytówce Google – kompletny przewodnik</Link></li>
          <li><Link href="/pozycjonowanie-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Pozycjonowanie wizytówki Google – kompletny przewodnik 2026</Link></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Ile osób może zarządzać jedną wizytówką Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Google Business Profile pozwala dodać do 100 użytkowników w różnych rolach. W praktyce profil firmy powinien mieć 2–3 właścicieli i tyle menedżerów, ile realnie potrzeba.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy menedżer może sam sobie nadać wyższe uprawnienia w wizytówce Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. Menedżer nie może zmieniać uprawnień ani swoich, ani innych użytkowników. Tylko właściciel i właściciel współdzielony mogą zarządzać rolami.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy agencja SEO potrzebuje hasła do konta Google żeby zarządzać wizytówką?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie — i nie powinna go otrzymywać. Właściwy sposób to zaproszenie agencji jako menedżera przez panel GBP. Przekazywanie hasła do konta Google jest poważnym błędem bezpieczeństwa.",
                },
              },
              {
                "@type": "Question",
                "name": "Co się stanie z wizytówką, jeśli jedyny właściciel usunie konto Google?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wizytówka pozostanie aktywna, ale nikt nie będzie miał do niej dostępu jako właściciel. Odzyskanie dostępu wymaga weryfikacji tożsamości przez Google i może trwać tygodnie. Warto zawsze mieć co najmniej dwóch właścicieli.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy menedżer wizytówki Google widzi dane osobiste właściciela?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. Menedżer widzi tylko dane biznesowe profilu. Nie ma dostępu do prywatnych danych konta Google właściciela, jego innych usług Google ani historii rozliczeń.",
                },
              },
            ],
          }),
        }}
      />
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     HOTEL: Pozycjonowanie w Mapach Google
  ───────────────────────────────────────────────────────────────────────── */
  "pozycjonowanie-hoteli-w-mapach-google": (
    <>
      <h2>Czym jest pozycjonowanie hoteli w Mapach Google?</h2>
      <p>
        Pozycjonowanie hoteli w Mapach Google to proces optymalizacji profilu Google Business Profile (GBP) i sygnałów lokalnego SEO w taki sposób, aby obiekt noclegowy pojawiał się jak najwyżej w wynikach Google Maps i Local Pack — liście 3 firm wyświetlanej nad organicznymi wynikami wyszukiwania. Dla hoteli, pensjonatów i apartamentów jest to główny kanał pozyskiwania rezerwacji bezpośrednich, omijający prowizje OTA.
      </p>
      <p>
        Gdy potencjalny gość wpisuje w Google „hotel Kraków centrum" lub „pensjonat Zakopane z basenem", widzi mapę z trzema pinezkami i tabelą z nazwami, ocenami i odległościami. To właśnie Local Pack. Hotele poza pierwszą trójką tracą statystycznie ponad 70% kliknięć — dlatego pozycja ma bezpośrednie przełożenie na przychody z rezerwacji bezpośrednich.
      </p>
      <p>
        Więcej o tym, jak działa algorytm rankingowy i czym jest Local Pack, wyjaśnia artykuł{" "}
        <Link href="/pozycjonowanie-wizytowki-google">pozycjonowanie wizytówki Google — kompletny przewodnik</Link>.
      </p>

      <h2>Jak Google ocenia hotele w wynikach lokalnych — 3 czynniki rankingowe</h2>
      <p>
        Google ocenia pozycję hotelu w Maps na podstawie trzech głównych sygnałów: trafności (jak dobrze profil pasuje do zapytania), odległości (jak daleko hotel jest od lokalizacji szukającego) i popularności (jak silna jest marka i profil w internecie). Każdy z tych czynników można aktywnie kształtować — odległość w najmniejszym stopniu, trafność i popularność w największym.
      </p>

      <h3>Trafność (Relevance)</h3>
      <p>
        Trafność to dopasowanie profilu do intencji zapytania. Google analizuje kategorię główną, słowa kluczowe w opisie i sekcji usług, atrybuty (np. „Parking", „Śniadanie w cenie", „Dostęp dla niepełnosprawnych"), a także treść powiązanej strony internetowej. Hotel z kategorią „Hotel" pojawi się na frazę „hotel Wrocław", ale już nie na „hostel Wrocław" — nawet jeśli oferuje pokoje wieloosobowe.
      </p>
      <p>
        Dla obiektów noclegowych kluczowe jest użycie kategorii szczegółowej zamiast ogólnej. Różnica między „Hotel" a „Hotel butikowy" lub „Hotel spa" może decydować o widoczności na frazy long-tail o wysokiej intencji zakupowej. Sprawdź, jak wybrać{" "}
        <Link href="/kategorie-wizytowka-google">właściwe kategorie wizytówki Google</Link> dla swojej branży.
      </p>

      <h3>Odległość (Distance)</h3>
      <p>
        Google uwzględnia fizyczną odległość hotelu od miejsca, z którego pochodzi zapytanie, lub lokalizacji wpisanej przez użytkownika. Jeśli ktoś szuka hotelu „w centrum Gdańska", Google wyświetli przede wszystkim obiekty w centrum — niezależnie od siły ich profilu. Hotele poza centrum naturalnie tracą na tym czynniku, ale mogą to kompensować wyższą trafnością i popularnością.
      </p>

      <h3>Popularność (Prominence)</h3>
      <p>
        Popularność mierzy ogólną siłę marki i profilu w sieci. Składa się na nią liczba i jakość opinii Google, wzmianki w innych serwisach (booking.com, TripAdvisor, Trivago), cytowania NAP w katalogach, linki do strony hotelowej i aktywność w samym GBP. To jedyny czynnik, który bezpośrednio nagradza długoterminową pracę nad reputacją.
      </p>
      <p>
        Pełną listę 34 czynników rankingowych z oceną ważności znajdziesz w artykule{" "}
        <Link href="/czynniki-rankingowe-wizytowki-google-2026">czynniki rankingowe wizytówki Google w 2026</Link>.
      </p>

      <h2>Optymalizacja profilu Google Business Profile dla hotelu</h2>
      <p>
        Kompletny i poprawnie zoptymalizowany profil GBP to fundament widoczności hotelu w Google Maps. Google premiuje profile z wypełnionymi wszystkimi dostępnymi polami — im więcej informacji dostarczysz, tym lepiej algorytm dopasuje Twój obiekt do właściwych zapytań. Dla hoteli dostępnych jest kilkadziesiąt pól specyficznych dla branży, których większość właścicieli nie wypełnia.
      </p>

      <h3>Kategorie i atrybuty dla obiektu noclegowego</h3>
      <p>
        Wybierz kategorię główną tak szczegółową, jak to możliwe. Zamiast ogólnego „Hotel" rozważ „Hotel butikowy", „Hotel spa", „Hotel biznesowy" lub „Resort" — zależnie od profilu obiektu. Następnie dodaj kategorie dodatkowe odpowiadające udogodnieniom: „Restauracja", „Centrum konferencyjne", „Centrum fitness".
      </p>
      <p>
        Atrybuty to szczególnie ważny element dla hoteli — Google wyświetla je bezpośrednio w karcie obiektu jeszcze przed wejściem na stronę. Koniecznie zaznacz: parking (bezpłatny vs. płatny), śniadanie w cenie, dostęp do WiFi, dostępność dla osób z niepełnosprawnością, basen, spa, zwierzęta domowe, klimatyzację. Każdy atrybut odpowiada potencjalnemu zapytaniu filtrowemu użytkownika.
      </p>

      <h3>Opis hotelu i sekcja usług</h3>
      <p>
        Opis w GBP ma limit 750 znaków — wykorzystaj go w pełni. Umieść w nim naturalnie słowa kluczowe związane z lokalizacją, typem obiektu i wyróżnikami oferty. Unikaj suchej listy faktów — pisz tak, żeby zaciekawić osobę, która właśnie decyduje między Twoim hotelem a trzema konkurentami.
      </p>
      <p>
        Sekcja Usługi pozwala dodać szczegółowe pozycje z opisem i ceną: „Pokój standard", „Pokój z widokiem na morze", „Śniadanie szwedzkie", „Transfer z lotniska". Każda usługa to dodatkowe słowa kluczowe indeksowane przez Google i wyświetlane w profilu.
      </p>

      <h2>Opinie i recenzje — jak je zdobywać i zarządzać</h2>
      <p>
        Opinie Google są dla hoteli podwójnie ważne: bezpośrednio wpływają na pozycję w Local Pack i stanowią główny czynnik decyzyjny gości. Obiekty z oceną 4,5+ i minimum 50 opiniami dominują w wynikach lokalnych. Każda nowa recenzja to sygnał aktywności — Google premiuje profile, które regularnie zdobywają nowe opinie, a nie te z dużą liczbą ale starą datą ostatniej recenzji.
      </p>
      <p>
        Pełny przewodnik po skutecznym zbieraniu recenzji bez nachalności znajdziesz w artykule{" "}
        <Link href="/opinie-google-jak-zdobywac-skutecznie">opinie w Google — jak zbierać je skutecznie</Link>.
      </p>

      <h3>Najlepsze momenty na prośbę o opinię</h3>
      <ul>
        <li><strong>Check-out</strong> — personel przy wymeldowaniu może poprosić o recenzję i podesłać QR kod lub link na e-mail.</li>
        <li><strong>E-mail po pobycie</strong> — automatyczny mail 24 godziny po wymeldowaniu z bezpośrednim linkiem. Konwersja tej metody wynosi zazwyczaj 8–15%.</li>
        <li><strong>QR kody w pokojach i recepcji</strong> — umieszczone przy karcie WiFi, na pilotach lub menu śniadaniowym. Gość wystawia opinię jeszcze podczas pobytu, kiedy emocje są świeże.</li>
        <li><strong>Karty z podziękowaniem</strong> — fizyczna kartka w pokoju z QR kodem i krótką prośbą działa szczególnie dobrze w segmencie premium.</li>
      </ul>

      <h3>Odpowiadanie na opinie — jak to robić dobrze</h3>
      <p>
        Google premiuje profile, których właściciele aktywnie odpowiadają na recenzje. Odpowiedź na pozytywną opinię powinna być spersonalizowana — nie kopiuj szablonu. Odpowiedź na negatywną recenzję to Twoja szansa na pokazanie profesjonalizmu: podziękuj za feedback, przeproś za niedogodność i zaproponuj rozwiązanie. Nigdy nie wchodź w publiczną dyskusję ani nie kwestionuj opinii gościa w odpowiedzi.
      </p>

      <h2>Słowa kluczowe i kategorie dla obiektów noclegowych</h2>
      <p>
        Strategia słów kluczowych dla hotelu w Google Maps opiera się na połączeniu frazy lokalizacyjnej, typu obiektu i atrybutów. Frazy o największej intencji zakupowej zawierają konkretną lokalizację i cechy specyficzne dla podróżnych: „hotel z parkingiem Wrocław", „pensjonat przy plaży Sopot", „pokoje ze śniadaniem Zakopane centrum". To właśnie na takie frazy warto optymalizować profil GBP.
      </p>

      <h3>Mapa fraz kluczowych dla hoteli</h3>
      <ul>
        <li><strong>Frazy ogólne + miasto:</strong> „hotel Gdańsk", „noclegi Kraków", „pensjonat Zakopane"</li>
        <li><strong>Frazy z atrybutem:</strong> „hotel z basenem Łódź", „hotel dla psów Warszawa", „hotel z garażem Poznań"</li>
        <li><strong>Frazy z lokalizacją precyzyjną:</strong> „hotel przy dworcu Wrocław", „hotel Stare Miasto Kraków"</li>
        <li><strong>Frazy okazjonalne:</strong> „hotel na wesele Mazury", „hotel spa walentynki Trójmiasto"</li>
        <li><strong>Frazy biznesowe:</strong> „hotel z salą konferencyjną Katowice", „hotel na szkolenie Warszawa"</li>
      </ul>
      <p>
        Umieszczaj te frazy naturalnie w opisie GBP, sekcji usług, odpowiedziach na opinie i postach Google. Nie upychaj słów kluczowych — Google wykrywa keyword stuffing i może obniżyć pozycję profilu.
      </p>

      <h2>Zdjęcia i posty w wizytówce hotelu</h2>
      <p>
        Hotele i obiekty noclegowe to jedna z kategorii, w której zdjęcia mają największy wpływ na decyzję zakupową — i pośrednio na pozycję w Google Maps. Profile z ponad 100 zdjęciami mają statystycznie trzykrotnie wyższy wskaźnik kliknięć niż profile z kilkoma fotkam. Google analizuje aktywność zdjęciową jako sygnał zaangażowania właściciela.
      </p>

      <h3>Jakie zdjęcia dodawać</h3>
      <ul>
        <li><strong>Pokoje</strong> — każdy typ pokoju osobno, dobra jakość, naturalne światło</li>
        <li><strong>Restauracja i śniadania</strong> — jedzenie generuje największe zaangażowanie użytkowników</li>
        <li><strong>Recepcja i hol główny</strong> — pierwsze wrażenie gościa po przyjeździe</li>
        <li><strong>Okolica i dojazd</strong> — widok z okna, parking, wejście główne</li>
        <li><strong>Udogodnienia</strong> — basen, spa, sala fitness, sala konferencyjna</li>
        <li><strong>Zdjęcia 360°</strong> — Google premiuje wirtualne spacery, szczególnie w branży hotelowej</li>
      </ul>
      <p>
        Więcej o tym, które zdjęcia naprawdę wpływają na pozycję, przeczytasz w artykule{" "}
        <Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja">zdjęcia w wizytówce Google — które działają</Link>.
      </p>

      <h3>Google Posts dla hoteli</h3>
      <p>
        Posty Google wyświetlają się bezpośrednio w wizytówce i mają krótki czas życia (7 dni dla standardowych). Hotele powinny regularnie publikować: oferty last minute, promocje weekendowe, informacje o eventach w okolicy, pakiety sezonowe (ferie, sylwester, Boże Narodzenie). Każdy post z CTA „Zarezerwuj teraz" to dodatkowa ścieżka konwersji bez pośrednictwa OTA.
      </p>

      <h2>Najczęstsze błędy w pozycjonowaniu hoteli na mapach</h2>
      <p>
        Hotele popełniają powtarzające się błędy w GBP, które bezpośrednio obniżają pozycję i zmniejszają liczbę rezerwacji bezpośrednich. Większość z nich można naprawić w ciągu jednego roboczego dnia — efekty widać po 2–4 tygodniach.
      </p>
      <ul>
        <li><strong>Zbyt ogólna kategoria główna</strong> — „Hotel" zamiast „Hotel spa" lub „Hotel butikowy". Im węższa kategoria, tym mniejsza konkurencja i wyższe pozycje na frazy long-tail.</li>
        <li><strong>Brak odpowiedzi na opinie</strong> — Google obniża ranking profili, których właściciele ignorują recenzje, szczególnie negatywne.</li>
        <li><strong>Niespójna nazwa NAP</strong> — inne dane adresowe w GBP, na stronie hotelu i w booking.com dezorientują algorytm i obniżają sygnał trafności.</li>
        <li><strong>Pusty opis i sekcja usług</strong> — niewykorzystane 750 znaków i brak listy usług to utrata dziesiątek słów kluczowych.</li>
        <li><strong>Stara data ostatniej aktywności</strong> — profile bez nowych zdjęć, postów i odpowiedzi przez 2–3 miesiące tracą na popularności.</li>
        <li><strong>Brak zdjęć pokoi</strong> — gość nie zarezerwuje pokoju, którego nie widzi. Profil bez zdjęć pokoi traci kliknięcia i bezpośrednie rezerwacje.</li>
        <li><strong>Nieuzupełnione godziny specjalne</strong> — brak godzin na święta i ferie powoduje wyświetlanie „Godziny mogą być inne" — sygnał niepewności zniechęcający do rezerwacji.</li>
      </ul>

      <h2>Jak zmierzyć efekty pozycjonowania hotelu w Google Maps</h2>
      <p>
        Postęp pozycjonowania hotelu można śledzić bezpośrednio w panelu GBP — sekcja „Statystyki" pokazuje liczbę wyświetleń w wyszukiwarce i na mapach, kliknięć do strony, połączeń telefonicznych i próśb o trasę. Wzrost tych wskaźników to bezpośredni dowód poprawy widoczności — zanim jeszcze przełoży się na rezerwacje.
      </p>
      <p>
        Jeśli chcesz oddać te działania specjalistom i skupić się na prowadzeniu obiektu, sprawdź{" "}
        <Link href="/uslugi/wizytowka-google">usługę pozycjonowania wizytówki Google</Link> lub{" "}
        <Link href="/kontakt">umów bezpłatną konsultację</Link>.
      </p>

      <h2>FAQ — często zadawane pytania</h2>

      <h3>Ile czasu zajmuje pozycjonowanie hotelu w Google Maps?</h3>
      <p>
        Pierwsze efekty — poprawa widoczności na frazy long-tail — są widoczne zazwyczaj po 4–8 tygodniach od kompleksowej optymalizacji profilu. Wejście do top 3 na frazy główne (np. „hotel Kraków centrum") wymaga 3–6 miesięcy systematycznej pracy z opiniami, postami i budową popularności. Konkretny czas zależy od siły konkurencji w danej lokalizacji.
      </p>

      <h3>Czy hotel z kilkoma budynkami powinien mieć osobną wizytówkę dla każdego?</h3>
      <p>
        Nie. Hotel z kilkoma budynkami w tej samej lokalizacji powinien mieć jedną wizytówkę GBP. Wyjątek to obiekty z osobnymi adresami, które realnie działają jako niezależne marki — wówczas każdy adres może mieć własny profil, ale wymagają spójnego zarządzania NAP.
      </p>

      <h3>Jak ważna jest ocena gwiazdkowa dla pozycji w Google Maps?</h3>
      <p>
        Ocena (gwiazdki) to składnik czynnika popularności — im wyższa i im więcej recenzji, tym silniejszy sygnał. Hotele z oceną poniżej 4,0 tracą kliknięcia nawet przy wysokiej pozycji. Ważniejsza niż wysoka ocena jest regularność zdobywania nowych recenzji — Google preferuje profile z aktywnymi opiniami nad te z dużą liczbą ale starymi recenzjami.
      </p>

      <h3>Czy hotel bez strony internetowej może dobrze pozycjonować się w Mapach?</h3>
      <p>
        Tak — Google Business Profile działa niezależnie od posiadania strony www. Jednak hotel z dobrze zoptymalizowaną stroną ma przewagę w zakresie trafności i popularności, a strona umożliwia rezerwacje bezpośrednie bez prowizji OTA.
      </p>

      <h3>Czy warto inwestować w pozycjonowanie w Mapach Google, skoro hotel jest już na Booking.com?</h3>
      <p>
        Zdecydowanie tak. Booking.com pobiera prowizję 15–20% od każdej rezerwacji. Hotele z silną pozycją w Local Pack mogą przenieść 20–40% rezerwacji z OTA na kanały bezpośrednie — przy 100 rezerwacjach miesięcznie i średniej prowizji 200 zł daje to oszczędność 20 000–40 000 zł rocznie.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-4">Powiązane artykuły</p>
        <ul className="space-y-2">
          <li><Link href="/pozycjonowanie-wizytowki-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Pozycjonowanie wizytówki Google – kompletny przewodnik 2026</Link></li>
          <li><Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Czynniki rankingowe wizytówki Google w 2026</Link></li>
          <li><Link href="/opinie-google-jak-zdobywac-skutecznie" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Opinie w Google – jak zbierać je skutecznie?</Link></li>
          <li><Link href="/zdjecia-w-wizytowce-google-ktore-dzialaja" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Zdjęcia w wizytówce Google – które naprawdę działają?</Link></li>
          <li><Link href="/kategorie-wizytowka-google" className="text-sm font-semibold text-ink hover:text-brand transition-colors">Kategorie wizytówki Google – jak wybrać właściwe?</Link></li>
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Ile czasu zajmuje pozycjonowanie hotelu w Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pierwsze efekty są widoczne zazwyczaj po 4–8 tygodniach od kompleksowej optymalizacji profilu GBP. Wejście do top 3 na frazy główne wymaga 3–6 miesięcy systematycznej pracy z opiniami, postami i budową popularności.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy hotel bez strony internetowej może dobrze pozycjonować się w Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak — Google Business Profile działa niezależnie od posiadania strony www. Hotel z dobrze zoptymalizowaną stroną internetową ma przewagę w zakresie trafności i popularności i pozwala na rezerwacje bezpośrednie bez prowizji OTA.",
                },
              },
              {
                "@type": "Question",
                "name": "Jak ważna jest ocena gwiazdkowa dla pozycji w Google Maps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ocena to składnik czynnika popularności. Hotele z oceną poniżej 4.0 tracą kliknięcia nawet przy wysokiej pozycji. Ważniejsza niż wysoka ocena jest regularność zdobywania nowych recenzji.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy warto pozycjonować hotel w Google Maps, skoro jest już na Booking.com?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tak. Booking.com pobiera prowizję 15–20% od każdej rezerwacji. Hotele z silną pozycją w Local Pack mogą przenieść 20–40% rezerwacji z OTA na kanały bezpośrednie, co oznacza oszczędność dziesiątek tysięcy złotych rocznie.",
                },
              },
              {
                "@type": "Question",
                "name": "Czy hotel z kilkoma budynkami powinien mieć osobną wizytówkę Google dla każdego?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie. Hotel z kilkoma budynkami w tej samej lokalizacji powinien mieć jedną wizytówkę GBP. Wyjątek to obiekty z osobnymi adresami działające jako niezależne marki.",
                },
              },
            ],
          }),
        }}
      />
    </>
  ),

  /* ─────────────────────────────────────────────────────────────────────────
     SZTUCZNA INTELIGENCJA: Claude Fable 5 i Mythos 5
  ───────────────────────────────────────────────────────────────────────── */
  "claude-fable-5-mythos-5-anthropic": (
    <>
      <h2>Czym są Claude Fable 5 i Mythos 5?</h2>
      <p>
        9 czerwca 2026 roku Anthropic ogłosił dwa nowe modele: Claude Fable 5 i Claude Mythos 5. To nie jest kolejna iteracja — to przełom. Fable 5 jest pierwszym modelem klasy Mythos udostępnionym publicznie, a klasa Mythos oznacza poziom możliwości, który wcześniej był dostępny wyłącznie dla wybranej grupy partnerów rządowych i cyberbezpieczeństwa.
      </p>
      <p>
        Podział między tymi dwoma modelami jest prosty, ale ważny. Fable i Mythos to ten sam model bazowy — różni je zestaw zabezpieczeń. Fable 5 jest dostępny dla wszystkich i ma aktywne klasyfikatory blokujące najbardziej ryzykowne zastosowania. Mythos 5 to wersja z częściowo zdjętymi ograniczeniami, dostępna wyłącznie dla zweryfikowanych partnerów: organizacji cyberobrony, agencji rządowych i wkrótce wybranych ośrodków badań biomedycznych. Nazwa nie jest przypadkowa — <em>fable</em> to po łacinie <em>fabula</em>, „to, co się opowiada", bliskie greckim <em>mythos</em>. Zabezpieczenia to jedyna różnica między tymi dwoma wersjami.
      </p>

      <h2>Co potrafi Fable 5 w inżynierii oprogramowania</h2>
      <p>
        Stripe przetestował model na produkcyjnej bazie kodu liczącej 50 milionów linii Ruby. Migracja, która normalnie zajęłaby całemu zespołowi ponad dwa miesiące pracy, została wykonana w ciągu jednego dnia. To nie jest liczba z benchmarku — to raport z realnego wdrożenia na jednej z największych platform płatniczych na świecie.
      </p>
      <p>
        Na ocenie FrontierCode firmy Cognition — która sprawdza, czy modele potrafią przechodzić trudne zadania kodowania przy zachowaniu standardów produkcyjnej jakości kodu — Fable 5 zajął pierwsze miejsce wśród modeli frontierowych. Co istotne, osiągnął to nawet przy ustawieniu „medium effort", co oznacza, że nie wymaga drogich, wieloetapowych wywołań żeby dostarczyć wyniki na tym poziomie.
      </p>

      <h2>Praca analityczna i wiedza domenowa</h2>
      <p>
        Hebbia, firma specjalizująca się w analizie dokumentów dla sektora finansowego, przetestowała Fable 5 na swoim Finance Benchmark — zestawie zadań odpowiadających pracy analityka wyższego szczebla. Model uzyskał najwyższy wynik spośród wszystkich testowanych modeli, z wyraźną przewagą w rozumowaniu na dokumentach, interpretacji wykresów i tabel oraz rozwiązywaniu problemów wieloetapowych.
      </p>
      <p>
        IMC, firma zajmująca się handlem algorytmicznym, potwierdziła, że Fable 5 praktycznie aced ich wewnętrzne testy analizy tradingowej — od prostego wyszukiwania faktów, przez rozumowanie konceptualne, po analizę przyczyn źródłowych i obliczanie wartości oczekiwanej. To kategorie zadań, w których wcześniejsze modele regularnie popełniały błędy na poziomie eksperta.
      </p>

      <h2>Widzenie — nowy standard</h2>
      <p>
        Fable 5 jest nowym state-of-the-art w zadaniach wymagających analizy obrazu. Potrafi odczytywać precyzyjne liczby z szczegółowych wykresów naukowych i odtwarzać kod źródłowy aplikacji webowej wyłącznie na podstawie zrzutów ekranu. Ale najlepiej ilustruje to przykład z Pokémon FireRed.
      </p>
      <p>
        Wcześniejsze modele Claude radziły sobie z tą grą tylko wtedy, gdy otrzymywały rozbudowane narzędzia pomocnicze — mapy, dane o stanie gry, wskazówki nawigacyjne. Fable 5 ukończył Pokémon FireRed od początku do końca używając wyłącznie surowych zrzutów ekranu z rozgrywki. Żadnych map, żadnych dodatkowych informacji o stanie gry — tylko obrazy, tak jak widzi je gracz. To demonstracja zdolności percepcyjnych, które wcześniej nie istniały w modelu ogólnego przeznaczenia.
      </p>

      <h2>Pamięć i praca z długim kontekstem</h2>
      <p>
        Fable 5 zachowuje koncentrację przez miliony tokenów w długotrwałych zadaniach i potrafi aktywnie ulepszać swoje wyniki korzystając z własnych notatek. Anthropic przetestował to na grze Slay the Spire — deck-building roguelike wymagającym długoterminowego planowania. Gdy model miał dostęp do trwałej pamięci plikowej, jego wyniki poprawiały się trzy razy bardziej niż u Opusa 4.8 w analogicznych warunkach. Fable docierał do finałowego aktu gry trzy razy częściej.
      </p>
      <p>
        W praktyce oznacza to, że im dłuższe i bardziej złożone zadanie, tym większa przewaga Fable 5 nad poprzednimi modelami. To celowe — model był projektowany z myślą o wielogodzinnej, autonomicznej pracy agentowej, nie o krótkich odpowiedziach na pojedyncze pytania.
      </p>

      <h2>Mythos 5 w nauce — projektowanie leków i genomika</h2>
      <p>
        Zastosowania Mythosa 5 w naukach przyrodniczych to osobny rozdział. Wewnętrzni eksperci Anthropic od projektowania białek przyspieszyli przy jego pomocy wybrane etapy procesu projektowania leków o około dziesięć razy. W jednym z testów Mythos 5 — wyposażony w narzędzia do projektowania białek i bioinformatyki, ale bez żadnej pomocy ludzkiej — dorównał lub przewyższył doświadczonych operatorów ludzkich. Model samodzielnie wybierał miejsca wiązania, dobierał i uruchamiał narzędzia do projektowania białek i radził sobie z niepowodzeniami. Spośród 14 celów białkowych zbadanych w tym projekcie, 9 dało obiecujących kandydatów, które Anthropic aktualnie bada dalej.
      </p>
      <p>
        Mythos 5 przeprowadził też nowatorskie badania genomiczne w trakcie ponad tygodnia w dużej mierze autonomicznej pracy. Zebrał dane z pojedynczych komórek dla milionów komórek ze 138 gatunków zwierząt, zaprojektował i wytrenował własny model uczenia maszynowego do identyfikacji komórek pełniących tę samą funkcję biologiczną u odlegle spokrewnionych organizmów. Wynik: model Mythosa pobił wyniki pracy opublikowanej w prestiżowym Science — będąc przy tym 100 razy mniejszy.
      </p>

      <h2>Jak działają zabezpieczenia Fable 5</h2>
      <p>
        Najważniejsze pytanie przy modelu tej klasy to nie „co potrafi", ale „co mu wolno". Fable 5 wprowadza nową generację klasyfikatorów — osobnych systemów AI, które monitorują każde zapytanie i decydują, czy odpowiada na nie Fable, czy automatycznie przełącza się na Opus 4.8. Użytkownik jest o tym informowany. Opus 4.8 to nadal bardzo zdolny model — przełączenie to degradacja, nie odmowa.
      </p>
      <p>
        Klasyfikatory obejmują trzy obszary. Cyberbezpieczeństwo — Mythos-class modele wykazują tak zaawansowane zdolności w znajdowaniu i eksploitowaniu podatności, że ich niekontrolowane udostępnienie stanowiłoby realną pomoc dla cyberprzestępców. Klasyfikatory blokują zarówno klasyczne exploity, jak i wieloetapowe zadania hakerskie: rekonesans, ruch lateralny, eskalację uprawnień. Biologia i chemia — nowe modele są w stanie wykonywać realne zadania naukowe, które mają charakter dualny. Anthropic przetestował zdolność modelu do projektowania wirusowych cząsteczek AAV używanych w terapii genowej — model bez specjalnego treningu w tym kierunku przewyższył dedykowane modele białkowe, co ilustruje zarówno potencjał terapeutyczny, jak i ryzyko. Distylacja — Anthropic wykrył wcześniejsze próby systematycznego wydobywania wiedzy modelu w celu trenowania konkurencyjnych systemów w krajach autorytarnych. Zapytania rozpoznane jako część takiego procesu są automatycznie przełączane na Opus 4.8.
      </p>
      <p>
        Ponad 95% sesji nie wyzwala żadnego klasyfikatora. Zewnętrzny red-teaming przez ponad 1000 godzin nie ujawnił żadnego uniwersalnego jailbreaku. Jeden z zewnętrznych partnerów potwierdził, że Fable 5 ma najsilniejsze zabezpieczenia spośród wszystkich testowanych modeli — zero odpowiedzi na szkodliwe zapytania dotyczące cyberbezpieczeństwa, nawet przy 30 różnych technikach jailbreak.
      </p>

      <h2>Cena i dostępność</h2>
      <p>
        Claude Fable 5 jest dostępny od 9 czerwca 2026 przez API jako <code>claude-fable-5</code>. Cena wynosi 10 dolarów za milion tokenów wejściowych i 50 dolarów za milion tokenów wyjściowych — mniej niż połowa ceny wcześniejszego Mythos Preview. Do 22 czerwca Fable 5 jest dostępny bezpłatnie w planach Pro, Max, Team i Enterprise. Po tej dacie będzie wymagał wykupienia kredytów użytkowania; Anthropic deklaruje przywrócenie go jako standardowego elementu subskrypcji gdy pozwoli na to infrastruktura.
      </p>
      <p>
        Claude Mythos 5 pozostaje na razie dostępny wyłącznie dla partnerów Project Glasswing z cyber safeguards lifted oraz wkrótce dla wybranych badaczy biomedycznych z biology safeguards lifted.
      </p>

      <div className="not-prose mt-8 rounded-2xl border-l-4 border-purple-400 bg-purple-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-700 mb-2">NOWA POLITYKA RETENCJI DANYCH</p>
        <p className="text-sm text-purple-900 leading-relaxed">
          Dla Fable 5, Mythos 5 i przyszłych modeli o podobnych lub wyższych możliwościach Anthropic wprowadza 30-dniową retencję ruchu — dotyczy to zarówno first-party, jak i third-party. Dane nie są używane do trenowania modeli ani do celów innych niż bezpieczeństwo. Po 30 dniach są usuwane. Celem jest wykrywanie złożonych, wielosesyjnych ataków i nowych jailbreaków.
        </p>
      </div>

      <h2>Co to zmienia — podsumowanie</h2>
      <p>
        Fable 5 to pierwszy raz, kiedy możliwości klasy Mythos trafiają do ogólnego użytku. Wcześniej oznaczało to dostęp wyłącznie dla rządów i wybranych firm z sektora cyberbezpieczeństwa. Teraz każdy deweloper może wywołać ten model przez API. W praktyce oznacza to, że automatyzacja złożonej inżynierii oprogramowania, zaawansowana analiza finansowa i wielogodzinna autonomiczna praca agentowa stają się dostępne w cenie niższej niż wcześniej za słabszy model.
      </p>
      <p>
        Dla firm pytanie nie brzmi już „czy AI może to zrobić" — po demonstracji Stripe to pytanie jest zamknięte. Pytanie brzmi: kiedy i jak to wdrożyć, żeby nie zostać w tyle za konkurencją, która już to robi.
      </p>

      <div className="not-prose mt-8 border border-border rounded-2xl p-6 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Źródło</p>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Artykuł na podstawie oficjalnego ogłoszenia Anthropic z 9 czerwca 2026.{" "}
          <a
            href="https://www.anthropic.com/news/claude-fable-5-mythos-5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            anthropic.com/news/claude-fable-5-mythos-5 →
          </a>
        </p>
      </div>
    </>
  ),
};
