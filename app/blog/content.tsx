import Link from "next/link";

export const articleContent: Record<string, React.ReactNode> = {

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
        <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">pozycjonowaniu wizytówki Google</Link>.
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
        <Link href="/blog/siedziba-mala-miejscowosc-local-seo">firmie z małej miejscowości szukającej klientów z miasta</Link>.
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — sygnały lokalne w 2026 roku</Link></li>
        <li><Link href="/blog/jak-dodac-local-schema-do-strony">Jak dodać local schema markup — wzmocnij sygnały SEO strukturą danych</Link></li>
        <li><Link href="/blog/ile-kosztuje-pozycjonowanie-strony-internetowej">Ile kosztuje pozycjonowanie strony — jak liczyć ROI z SEO</Link></li>
        <li><Link href="/blog/siedziba-mala-miejscowosc-local-seo">Firma z małej miejscowości — strategia słów lokalnych dla dużego miasta</Link></li>
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
        <Link href="/blog/nap-wizytowka-google-co-to-jest">NAP w wizytówce Google</Link>.
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik</Link></li>
        <li><Link href="/blog/nap-wizytowka-google-co-to-jest">NAP w wizytówce Google — czym jest i jak zadbać o spójność danych</Link></li>
        <li><Link href="/blog/siedziba-mala-miejscowosc-local-seo">Siedziba w małej miejscowości — jak zdobyć klientów z dużego miasta</Link></li>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        <li><Link href="/blog/nap-wizytowka-google-co-to-jest">NAP — fundament każdego profilu GBP</Link></li>
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
        kiedy emocje są jeszcze świeże. <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Więcej o zbieraniu opinii bez nachalnego proszenia.</Link>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik</Link></li>
        <li><Link href="/blog/zdjecia-w-wizytowce-google-ktore-dzialaja">Jakie zdjęcia w wizytówce Google naprawdę pomagają?</Link></li>
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
          <Link href="/blog/negatywna-opinia-google-co-zrobic">Jak odpowiadać na negatywne opinie — krok po kroku.</Link>
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
        <li><Link href="/blog/negatywna-opinia-google-co-zrobic">Dostałem negatywną opinię — co teraz? Plan działania</Link></li>
        <li><Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia</Link></li>
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
        <Link href="/blog/jak-usunac-negatywne-opinie-z-google">Jak zgłaszać opinie do usunięcia — szczegółowy poradnik.</Link>
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
        <li><Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia klientów</Link></li>
        <li><Link href="/blog/jak-usunac-negatywne-opinie-z-google">Kiedy i jak usunąć negatywną opinię z Google?</Link></li>
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
        <Link href="/blog/wizytowka-google-nie-wygasa-oszustwo">Czy wizytówka Google wygasa? NIE — to oszustwo.</Link>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google w 2026 roku?</Link></li>
        <li><Link href="/blog/opis-firmy-google-business-profile-jak-napisac">Jak napisać opis firmy w GBP, który przyciąga klientów?</Link></li>
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
        <li><Link href="/blog/wizytowka-google-nie-wygasa-oszustwo">Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat</Link></li>
        <li><Link href="/blog/wizytowka-google-popularne-oszustwa">Inne popularne oszustwa związane z GBP</Link></li>
        <li><Link href="/blog/czy-wizytowka-google-jest-platna">Czy wizytówka Google jest płatna? Szczegółowe porównanie</Link></li>
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
        <Link href="/blog/opinie-google-jak-zdobywac-skutecznie"> Więcej o zbieraniu opinii przez SMS i WhatsApp.</Link>
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
        <li><Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google bez nachalnego proszenia</Link></li>
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Pełny przewodnik po pozycjonowaniu wizytówki Google</Link></li>
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
        <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">optymalizacja wizytówki Google</Link>{" "}
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — bezpłatny punkt startowy</Link></li>
        <li><Link href="/blog/siedziba-mala-miejscowosc-local-seo">Local SEO dla firm z siedzibą poza dużym miastem</Link></li>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — podstawy dla każdej branży</Link></li>
        <li><Link href="/blog/opis-firmy-google-business-profile-jak-napisac">Jak napisać opis kancelarii w GBP zgodnie z zasadami etyki</Link></li>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Pełny przewodnik po pozycjonowaniu wizytówki Google</Link></li>
        <li><Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google skutecznie</Link></li>
        <li><Link href="/blog/zdjecia-w-wizytowce-google-ktore-dzialaja">Jakie zdjęcia w GBP naprawdę pomagają?</Link></li>
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
        <li><Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">Jak pozycjonować wizytówkę Google — dla salonów i usług lokalnych</Link></li>
        <li><Link href="/blog/opinie-google-jak-zdobywac-skutecznie">Jak zbierać opinie Google od klientek salonu?</Link></li>
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
        <Link href="/blog/siedziba-mala-miejscowosc-local-seo">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Pełny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
            Jak napisać opis firmy w Google Business Profile, który działa?
          </Link>
        </li>
        <li>
          <Link href="/blog/siedziba-mala-miejscowosc-local-seo">
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
        <Link href="/blog/wizytowka-google-nie-wygasa-oszustwo">
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
          <Link href="/blog/wizytowka-google-nie-wygasa-oszustwo">
            Czy wizytówka Google wygasa? Nie — to oszustwo działające od lat
          </Link>
        </li>
        <li>
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — uczciwy przewodnik
          </Link>
        </li>
        <li>
          <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">
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
        <Link href="/blog/nap-wizytowka-google-co-to-jest">Spójność danych NAP</Link> jest
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
          <Link href="/blog/nap-wizytowka-google-co-to-jest">
            NAP w wizytówce Google — jak zachować spójność danych w sieci
          </Link>
        </li>
        <li>
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — uczciwy przewodnik
          </Link>
        </li>
        <li>
          <Link href="/blog/wizytowka-google-popularne-oszustwa">
            Wizytówka Google — inne popularne oszustwa, na które warto uważać
          </Link>
        </li>
        <li>
          <Link href="/blog/nap-wizytowka-google-co-to-jest">
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
        wypełnisz kategorie, usługi, <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">opis firmy</Link> i atrybuty —
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
        To najszerszy sygnał. Google bierze pod uwagę: liczbę i jakość <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">opinii Google</Link>,
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
          <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">
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
          <Link href="/blog/zdjecia-w-wizytowce-google-ktore-dzialaja">
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
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
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
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
            Napisz opis firmy, który działa na klientów i algorytm
          </Link>
        </li>
        <li>
          <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">
            Zbieraj opinie Google skutecznie, bez nachalnego proszenia
          </Link>
        </li>
        <li>
          <Link href="/blog/zdjecia-w-wizytowce-google-ktore-dzialaja">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Kompletny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Pełny przewodnik po pozycjonowaniu wizytówki Google w 2026 roku
          </Link>
        </li>
        <li>
          <Link href="/blog/opis-firmy-google-business-profile-jak-napisac">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">
            Jak zbierać opinie Google bez nachalnego proszenia klientów
          </Link>
        </li>
        <li>
          <Link href="/blog/zdjecia-w-wizytowce-google-ktore-dzialaja">
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
          <Link href="/blog/jak-pozycjonowac-wizytowke-google-2026">
            Jak pozycjonować wizytówkę Google w 2026 roku — pełny przewodnik
          </Link>
        </li>
        <li>
          <Link href="/blog/opinie-google-jak-zdobywac-skutecznie">
            Jak zbierać opinie Google bez nachalnego proszenia klientów
          </Link>
        </li>
        <li>
          <Link href="/blog/nap-wizytowka-google-co-to-jest">
            NAP w wizytówce Google — czym jest i jak przeprowadzić audyt
          </Link>
        </li>
        <li>
          <Link href="/blog/jak-dodac-local-schema-do-strony">
            Jak dodać Local Schema markup do strony — z gotowym kodem JSON-LD
          </Link>
        </li>
      </ul>
    </>
  ),
};
