import Link from "next/link";
import type { Metadata } from "next";
import WizytowkaForm from "@/components/WizytowkaForm";
import LightboxImage from "@/components/ui/LightboxImage";

export const metadata: Metadata = {
  title: "Pozycjonowanie wizytówki Google – cennik, Mapy i efekty | MiauSEO",
  description:
    "Pozycjonowanie wizytówki Google Moja Firma i Google Maps. Cennik w modelu abonamentowym, zakres prac krok po kroku i prawdziwe zrzuty statystyk klientów: 77, 95 i 180 połączeń z profilu. Bezpłatna wycena.",
  alternates: { canonical: "https://miauseo.pl/pozycjonowanie-wizytowki-google" },
  openGraph: {
    title: "Pozycjonowanie wizytówki Google – cennik, Mapy i efekty | MiauSEO",
    description:
      "Wizytówka Google, która dzwoni. Zakres prac, cennik abonamentowy i zrzuty statystyk klientów z panelu Profilu Firmy.",
    images: [{ url: "https://miauseo.pl/uslugi/wizytowka-google.jpg", width: 1200, height: 630 }],
  },
};

/* Wspólny kontener — jeden odstęp od krawędzi na całej stronie */
function Kontener({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>{children}</div>;
}

/* Zdjęcia i zrzuty — wszystkie pliki leżą na serwerze w /public */
const dowody = [
  {
    src: "/blog/skup-aut/skup-aut-czerwiec-2026.png",
    alt: "Panel statystyk wizytówki Google firmy kasującej auta — czerwiec 2026, 12 połączeń, wykres płaski przez pierwsze trzy tygodnie miesiąca",
    miesiac: "Czerwiec 2026",
    liczba: "12",
    opis: "Miesiąc startowy. Wizytówka dopiero przechodzi weryfikację, pierwsze telefony w ostatnim tygodniu.",
  },
  {
    src: "/blog/skup-aut/skup-aut-lipiec-2026.png",
    alt: "Panel statystyk wizytówki Google firmy kasującej auta — lipiec 2026, 77 połączeń rozłożonych równomiernie na cały miesiąc",
    miesiac: "Lipiec 2026",
    liczba: "77",
    opis: "Pierwszy pełny miesiąc widocznego profilu. Telefony niemal każdego dnia, bez jednorazowych skoków.",
  },
  {
    src: "/blog/skup-aut/skup-aut-sierpien-2026.png",
    alt: "Panel statystyk wizytówki Google firmy kasującej auta — sierpień 2026, 95 połączeń wykonanych bezpośrednio z profilu firmy",
    miesiac: "Sierpień 2026",
    liczba: "95",
    opis: "Bez nowych kanałów. Ten sam profil, ta sama strona, rosnące zaplecze wpisów NAP.",
  },
];

const protetyk = [
  {
    src: "/blog/protetyk/miauSEO_opinie_kwiecien.png",
    alt: "Statystyki Profilu Firmy w Google gabinetu protetycznego — kwiecień 2026, pierwszy miesiąc po uporządkowaniu danych NAP",
    podpis: "Kwiecień — pierwszy miesiąc po uporządkowaniu danych NAP",
  },
  {
    src: "/blog/protetyk/miauSEO_opinie_maj.png",
    alt: "Statystyki Profilu Firmy w Google gabinetu protetycznego — maj 2026, wzrost liczby połączeń z wizytówki",
    podpis: "Maj — profil wchodzi do wyników na frazy protetyczne",
  },
  {
    src: "/blog/protetyk/miauSEO_opinie_czerwiec.png",
    alt: "Statystyki Profilu Firmy w Google gabinetu protetycznego — czerwiec 2026, stabilna liczba połączeń telefonicznych",
    podpis: "Czerwiec — liczba telefonów stabilizuje się wyżej",
  },
  {
    src: "/blog/protetyk/miauSEO_opinie_lipiec.png",
    alt: "Statystyki Profilu Firmy w Google gabinetu protetycznego — lipiec 2026, łącznie ponad 180 połączeń od kwietnia",
    podpis: "Lipiec — ponad 180 połączeń od początku współpracy",
  },
];

const realizacje = [
  { src: "/realizacje/szybkiskup-aut.png", alt: "Strona internetowa skupu samochodów zbudowana jako zaplecze treściowe wizytówki Google, z podstronami lokalizacyjnymi" },
  { src: "/realizacje/hydronowka.png", alt: "Witryna firmy czyszczącej ciśnieniowo z sekcją obszaru działania wspierającą profil firmy w Mapach Google" },
  { src: "/realizacje/rozluznijsie.png", alt: "Strona gabinetu masażu z podstronami dzielnic, przygotowana pod lokalne wyniki wyszukiwania" },
  { src: "/realizacje/akspol-malowanie.png", alt: "Serwis firmy malującej dachy z podstronami miejscowości, do których dojeżdża ekipa" },
  { src: "/realizacje/umyjemy-morusiewicz.png", alt: "Strona usług mycia ciśnieniowego z danymi NAP spójnymi z wizytówką Google" },
  { src: "/realizacje/czystakostka-24.png", alt: "Witryna firmy czyszczącej kostkę brukową przygotowana pod zapytania lokalne w Mapach Google" },
  { src: "/realizacje/beskidzkiemyciebruku.png", alt: "Strona firmy myjącej bruk w Beskidach z rozbudowaną sekcją obszaru obsługi" },
  { src: "/realizacje/malowanie-oskar.png", alt: "Serwis usług malowania dachów z podstronami lokalizacyjnymi wspierającymi profil w Google" },
];

const etapy = [
  {
    nr: "01",
    tydzien: "Tydzień 1",
    tytul: "Audyt profilu i konkurencji",
    tresc: "Sprawdzamy, na których frazach wizytówka się pokazuje i na której pozycji oraz jak wypadają kategorie, opisy i atrybuty na tle trzech firm wygrywających Twoje zapytania. Dostajesz listę tego, co blokuje widoczność.",
  },
  {
    nr: "02",
    tydzien: "Tydzień 1–2",
    tytul: "Porządek w danych NAP",
    tresc: "Nazwa, adres i telefon dostają jeden format i trafiają w nim wszędzie: do profilu, na stronę, do katalogów. Najmniej efektowna część pracy i jednocześnie ta, bez której reszta się nie utrzyma.",
  },
  {
    nr: "03",
    tydzien: "Tydzień 2–3",
    tytul: "Optymalizacja Profilu Firmy",
    tresc: "Kategoria główna i dodatkowe, opis firmy, osobne wpisy usług, atrybuty, godziny ze świętami, zdjęcia, obszar obsługi. Wypełniamy każde pole, które Google udostępnia, bo puste pole to oddany punkt.",
  },
  {
    nr: "04",
    tydzien: "Tydzień 3–5",
    tytul: "Zaplecze: strona i katalogi",
    tresc: "Podstrony lokalizacyjne spięte linkowaniem wewnętrznym oraz wpisy w katalogach i lokalnych serwisach, każdy z identycznym zapisem danych. Profil przestaje być pojedynczym punktem w sieci.",
  },
  {
    nr: "05",
    tydzien: "Stale",
    tytul: "Opinie, posty, monitoring",
    tresc: "Proces zbierania recenzji, odpowiedzi na każdą opinię, regularne posty i comiesięczny przegląd statystyk. Tu zaczyna się właściwa część abonamentu, bo tutaj wynik albo rośnie, albo się cofa.",
  },
];

export default function PozycjonowanieWizytowkiGooglePage() {
  return (
    <main className="pt-20">

      {/* ══ H1 + wstęp ══ */}
      <section className="bg-white pt-14 pb-12 sm:pt-20 sm:pb-16">
        <Kontener>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand">
            Lokalne SEO · Profil Firmy w Google
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-ink leading-[1.08] tracking-tight">
            Pozycjonowanie wizytówki Google —{" "}
            <span className="text-brand">profil, który dzwoni</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg sm:text-xl text-ink leading-relaxed font-medium">
            Klient szukający hydraulika, protetyka czy skupu aut nie przewija dziesięciu wyników. Wybiera jedną
            z trzech firm, które Google pokazuje mu w ramce z mapą, i dzwoni. Cała gra toczy się o to, żeby w tej
            ramce stała Twoja firma.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl">
            <p className="text-zinc-600 leading-relaxed">
              Zajmujemy się wyłącznie widocznością lokalną: Profil Firmy w Google, Mapy, opinie i zaplecze, które
              to wszystko podtrzymuje. Nie sprzedajemy pakietów „wszystko dla firmy" — jeśli Twój problem leży
              gdzie indziej, powiemy to na konsultacji zamiast wystawiać fakturę.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Niżej masz komplet: zakres prac, prawdziwe zrzuty statystyk z paneli klientów, cennik z wyjaśnieniem,
              dlaczego ta usługa działa w abonamencie, oraz różnicę między{" "}
              <strong className="font-semibold text-ink">Google Moja Firma</strong> a widocznością
              w <strong className="font-semibold text-ink">Mapach Google</strong>.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors">
              Zamów bezpłatną wycenę
            </Link>
            <Link href="#cennik" className="inline-block border-2 border-ink text-ink font-bold px-8 py-4 rounded-xl hover:bg-ink hover:text-white transition-colors">
              Zobacz cennik
            </Link>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Wolisz najpierw sprawdzić sam?{" "}
            <Link href="/gbp-score" className="text-brand font-semibold hover:underline">Darmowy test wizytówki</Link>{" "}
            albo{" "}
            <Link href="/checklista-wizytowki-google" className="text-brand font-semibold hover:underline">checklista optymalizacji</Link>.
          </p>
        </Kontener>
      </section>

      {/* ══ Zdjęcie w kontenerze ══ */}
      <section className="bg-white pb-16">
        <Kontener>
          <img
            src="/uslugi/wizytowka-google.jpg"
            alt="Właściciel firmy lokalnej sprawdzający na telefonie pozycję swojej wizytówki Google w Mapach"
            className="w-full h-[240px] sm:h-[340px] lg:h-[400px] object-cover rounded-3xl"
          />
        </Kontener>
      </section>

      {/* ══ Efekt biznesowy: statystyki skupu aut ══ */}
      <section className="bg-ink text-white py-16 sm:py-20">
        <Kontener>
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand">
            Prawdziwe dane z panelu klienta
          </span>
          <h2 className="mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1]">
            Ile telefonów realnie daje dobrze ustawiona wizytówka
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300 leading-relaxed">
            To pytanie pada na każdej pierwszej rozmowie, więc odpowiadamy zrzutami z panelu klienta zamiast
            widełkami z branżowego raportu. Trzy kolejne miesiące jednego profilu — firma kasująca i skupująca
            samochody w mieście na około 70 tysięcy mieszkańców.
          </p>

          {/* pasek liczb */}
          <div className="mt-10 grid grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {dowody.map((d) => (
              <div key={d.liczba} className="bg-ink px-4 py-6 sm:py-8 text-center">
                <div className="text-4xl sm:text-6xl font-bold text-brand leading-none">{d.liczba}</div>
                <div className="mt-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                  {d.miesiac}
                </div>
              </div>
            ))}
          </div>

          {/* zrzuty */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {dowody.map((d) => (
              <figure key={d.src} className="bg-white rounded-2xl overflow-hidden flex flex-col">
                <LightboxImage src={d.src} alt={d.alt} className="w-full" />
                <figcaption className="px-5 py-4 border-t border-border text-sm text-zinc-600 leading-relaxed">
                  {d.opis}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
            <p className="text-zinc-300 leading-relaxed">
              Największy przeskok wypada między pierwszym a drugim miesiącem, bo miesiąc startowy to w dużej części
              okres bez widocznego profilu. Istotniejszy jest ten trzeci: pozycja utrzymała się i dalej rosła bez
              dokładania nowych działań. Pełny rozbiór w{" "}
              <Link href="/miauseo-opinie-kasacja-aut" className="text-brand font-semibold hover:underline">case study kasacji aut</Link>.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Uczciwe zastrzeżenie, bez którego te liczby byłyby ściemą:{" "}
              <strong className="text-white font-semibold">połączenie to nie transakcja</strong>. Część telefonów
              przy frazach typu „kasacja aut" to pytania o części. Podajemy to, co mierzy panel Google, i nie
              dopisujemy współczynników, których nikt nie zweryfikuje.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-white/15 p-6 sm:p-8 max-w-4xl">
            <p className="text-lg text-zinc-200 leading-relaxed">
              Jakiego rzędu wielkości można się spodziewać? Usługa z pilną potrzebą — hydraulik, laweta, skup aut,
              serwis — po dojściu do pierwszej trójki w Mapach zbiera zwykle{" "}
              <strong className="text-white font-semibold">30–90 połączeń miesięcznie</strong> w mieście średniej
              wielkości. Gabinet, salon czy kancelaria, gdzie decyzja zapada wolniej, notuje częściej{" "}
              <strong className="text-white font-semibold">20–50 telefonów</strong>, za to z wyższą wartością
              pojedynczego klienta. Ile wpisuje się w Twojej okolicy — sprawdzamy przed startem, nie po trzech
              miesiącach.
            </p>
          </div>
        </Kontener>
      </section>

      {/* ══ Drugi dowód: protetyk ══ */}
      <section className="bg-surface py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl font-bold text-ink leading-[1.15]">
            Cztery miesiące z gabinetu protetycznego, miesiąc po miesiącu
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Inna branża, inny mechanizm, ta sama podstawa. Gabinet zmienił adres, przez co dane w sieci rozjechały
            się na kilka wariantów naraz. Uporządkowanie NAP i pełne wypełnienie profilu dało ponad{" "}
            <strong className="font-semibold text-ink">180 połączeń w cztery miesiące</strong>. Cała historia
            w{" "}
            <Link href="/miauseo-opinie-protetyk" className="text-brand font-semibold hover:underline">case study gabinetu protetycznego</Link>.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {protetyk.map((p) => (
              <figure key={p.src} className="bg-white rounded-2xl border border-border overflow-hidden">
                <LightboxImage src={p.src} alt={p.alt} className="w-full" />
                <figcaption className="px-4 py-4 text-sm text-zinc-600 border-t border-border">{p.podpis}</figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-zinc-600 leading-relaxed">
            Więcej takich rozbiorów — skup telefonów konkurujący z sieciówkami, masaż mobilny, serwis w Poznaniu —
            znajdziesz w dziale{" "}
            <Link href="/opinie" className="text-brand font-semibold hover:underline">opinie klientów</Link>{" "}
            oraz w{" "}
            <Link href="/referencje" className="text-brand font-semibold hover:underline">referencjach</Link>.
          </p>
        </Kontener>
      </section>

      {/* ══ H2 wymagany: Google Moja Firma ══ */}
      <section className="bg-white py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink leading-[1.12]">
            Pozycjonowanie wizytówki Google Moja Firma
          </h2>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 space-y-5 text-[17px] text-zinc-600 leading-relaxed">
              <p>
                Wizytówka Google Moja Firma — od kilku lat Google nazywa ją{" "}
                <strong className="font-semibold text-ink">Profilem Firmy w Google</strong>, choć stara nazwa
                została w głowach i w wyszukiwarce — to karta Twojej firmy wyświetlana obok wyników wyszukiwania,
                w Mapach i na telefonie. Nazwa, adres, telefon, godziny, kategorie, zdjęcia, usługi, opinie
                i przycisk połączenia. Dla większości firm lokalnych jest to pierwszy i często jedyny kontakt
                klienta z firmą przed telefonem.
              </p>
              <p>
                Pozycjonowanie wizytówki to praca nad tym, żeby przy konkretnych zapytaniach Twój profil trafiał
                do trójki, którą Google pokazuje nad wynikami organicznymi. Algorytm bierze pod uwagę trzy rzeczy:{" "}
                <strong className="font-semibold text-ink">trafność</strong> (czy kategorie i opisy odpowiadają
                zapytaniu), <strong className="font-semibold text-ink">odległość</strong> (gdzie stoi telefon
                szukającego względem Twojego adresu) i{" "}
                <strong className="font-semibold text-ink">rozpoznawalność</strong> (ile sygnałów w sieci
                potwierdza, że firma istnieje i działa). Na odległość nie wpłyniesz. Na dwie pozostałe — jak
                najbardziej.
              </p>
              <p>
                Pełną listę sygnałów rozpisaliśmy w zestawieniu{" "}
                <Link href="/czynniki-rankingowe-wizytowki-google-2026" className="text-brand font-semibold hover:underline">czynników rankingowych wizytówki Google</Link>.
                Jeśli dopiero zakładasz profil, zacznij od przewodnika po{" "}
                <Link href="/profil-firmy-w-google" className="text-brand font-semibold hover:underline">Profilu Firmy w Google</Link>.
              </p>
            </div>

            <figure className="lg:col-span-5">
              <img
                src="/miauseopozycjonowaniewizytowki.webp"
                alt="Wizytówka Google firmy lokalnej widoczna w wynikach wyszukiwania wraz z oceną, godzinami otwarcia i przyciskiem połączenia"
                className="w-full rounded-2xl border border-border"
              />
              <figcaption className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Karta firmy, o którą toczy się cała gra — klient widzi ocenę, godziny i przycisk „Zadzwoń".
              </figcaption>
            </figure>
          </div>

          <h3 className="mt-16 text-2xl sm:text-3xl font-bold text-ink">Co obejmuje usługa</h3>
          <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-border p-6 bg-surface">
              <h4 className="font-bold text-ink text-lg">Kategorie i opisy</h4>
              <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
                Kategoria główna rozstrzyga, przy jakich zapytaniach profil wchodzi do gry. Dobieramy ją pod frazę
                o realnym wolumenie, opisy piszemy językiem klientów, nie branżowym żargonem. Szerzej:{" "}
                <Link href="/kategorie-wizytowka-google" className="text-brand font-semibold hover:underline">dobór kategorii</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-surface">
              <h4 className="font-bold text-ink text-lg">Dane NAP</h4>
              <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
                Nazwa, adres i telefon w jednym zapisie we wszystkich źródłach. Dwa warianty nazwy albo stary numer
                w katalogu to dla Google sygnał niepewności. Rozkładamy to w tekście o{" "}
                <Link href="/nap-wizytowka-google-co-to-jest" className="text-brand font-semibold hover:underline">spójności NAP</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-surface">
              <h4 className="font-bold text-ink text-lg">Weryfikacja i odzyskiwanie</h4>
              <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
                Prowadzimy przez weryfikację wideo, która potrafi zablokować firmę na tygodnie, oraz przez
                odzyskiwanie profilu przejętego albo zawieszonego. Krok po kroku przy{" "}
                <Link href="/weryfikacja-wizytowki-google" className="text-brand font-semibold hover:underline">weryfikacji wizytówki</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-6 bg-surface">
              <h4 className="font-bold text-ink text-lg">Opinie i posty</h4>
              <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">
                Wdrażamy proces zbierania recenzji — link, kod QR i moment w obsłudze, w którym wypada poprosić —
                i odpowiadamy na każdą. Metoda w poradniku o{" "}
                <Link href="/opinie-google-jak-zdobywac-skutecznie" className="text-brand font-semibold hover:underline">zdobywaniu opinii Google</Link>.
              </p>
            </div>
          </div>
        </Kontener>
      </section>

      {/* ══ H2 wymagany: Google Maps ══ */}
      <section className="bg-surface py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink leading-[1.12]">
            Pozycjonowanie wizytówki Google Maps
          </h2>

          <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <figure className="lg:col-span-5 order-2 lg:order-1">
              <img
                src="/miauseopozycjonowaniestrony.webp"
                alt="Wyniki lokalne Google z mapą i trzema firmami w ramce local pack nad wynikami organicznymi"
                className="w-full rounded-2xl border border-border"
              />
              <figcaption className="mt-3 text-sm text-zinc-500 leading-relaxed">
                Ramka z mapą i trzema firmami to local pack — miejsce, w którym zapada decyzja o telefonie.
              </figcaption>
            </figure>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 text-[17px] text-zinc-600 leading-relaxed">
              <p>
                Ludzie mówią „pozycjonowanie w Google Maps" i „pozycjonowanie wizytówki" zamiennie, choć to dwa
                wyjścia z tego samego mechanizmu. Za jedno i drugie odpowiada ten sam indeks lokalny Google i ten
                sam profil firmy — różni się tylko miejsce, w którym wynik się pokazuje.
              </p>
              <p>
                <strong className="font-semibold text-ink">Local pack</strong> to ramka z mapką i trzema firmami,
                którą widzisz po wpisaniu zapytania w zwykłą wyszukiwarkę. Stamtąd bierze się większość telefonów,
                bo klient nie musi nigdzie przechodzić — przycisk połączenia ma od razu pod nosem.{" "}
                <strong className="font-semibold text-ink">Mapy Google</strong> to osobna aplikacja z pełną listą
                wyników, po której klient przewija dalej, filtruje po ocenie i porównuje. Trafia tam rzadziej, ale
                z wyraźniejszą intencją: skoro otworzył Mapy, zwykle już wie, że chce kogoś takiego zamówić.
              </p>
              <p>
                Praktyczny wniosek: optymalizujesz jeden profil, a wygrywasz w dwóch miejscach naraz. Nie ma
                osobnej usługi „pod Mapy" i osobnej „pod wyszukiwarkę" — kto ją sprzedaje, sprzedaje tę samą pracę
                dwa razy.
              </p>
            </div>
          </div>

          <h3 className="mt-16 text-2xl sm:text-3xl font-bold text-ink">Jak wygląda optymalizacja pod Mapy</h3>
          <div className="mt-7 grid md:grid-cols-3 gap-8 text-[17px] text-zinc-600 leading-relaxed">
            <p>
              Zaczynamy od <strong className="font-semibold text-ink">pinezki i obszaru obsługi</strong>. Pinezka
              musi stać dokładnie tam, gdzie firma fizycznie działa, a obszar obsługi trzeba rozumieć poprawnie:
              zaznaczenie pół województwa nie sprawi, że pokażesz się w całym rejonie. To informacja dla klienta,
              nie dźwignia rankingowa.
            </p>
            <p>
              Dalej <strong className="font-semibold text-ink">zdjęcia z danymi lokalizacji</strong>, regularne
              posty i uzupełnione usługi. Profil, który dostaje nowe treści, jest dla algorytmu żywy. Ustawiony raz
              i zostawiony zaczyna się cofać — i to jest najczęstszy powód, dla którego jednorazowa optymalizacja
              przestaje działać po kilku miesiącach.
            </p>
            <p>
              Na końcu <strong className="font-semibold text-ink">zaplecze poza profilem</strong>: podstrony
              lokalizacyjne, wpisy w katalogach i lokalne wzmianki z identycznym NAP. Firmom spoza dużego miasta
              poświęciliśmy tekst o{" "}
              <Link href="/siedziba-mala-miejscowosc-local-seo" className="text-brand font-semibold hover:underline">siedzibie w małej miejscowości</Link>,
              a całość opisuje przewodnik po{" "}
              <Link href="/seo-lokalne-dla-firm" className="text-brand font-semibold hover:underline">SEO lokalnym dla firm</Link>.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-border p-6 sm:p-8">
            <p className="text-[17px] text-zinc-600 leading-relaxed">
              Działasz w konkretnym mieście? Mamy osobne strony z realiami lokalnego rynku, między innymi dla{" "}
              <Link href="/pozycjonowanie-wizytowki-google-warszawa" className="text-brand font-semibold hover:underline">Warszawy</Link>,{" "}
              <Link href="/pozycjonowanie-wizytowki-google-krakow" className="text-brand font-semibold hover:underline">Krakowa</Link>,{" "}
              <Link href="/pozycjonowanie-wizytowki-google-wroclaw" className="text-brand font-semibold hover:underline">Wrocławia</Link>,{" "}
              <Link href="/pozycjonowanie-wizytowki-google-poznan" className="text-brand font-semibold hover:underline">Poznania</Link>,{" "}
              <Link href="/pozycjonowanie-wizytowki-google-gdansk" className="text-brand font-semibold hover:underline">Gdańska</Link>{" "}
              i <Link href="/pozycjonowanie-wizytowki-google-katowice" className="text-brand font-semibold hover:underline">Katowic</Link>.
            </p>
          </div>
        </Kontener>
      </section>

      {/* ══ Proces ══ */}
      <section className="bg-white py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink leading-[1.12]">
            Jak wygląda współpraca, tydzień po tygodniu
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Kolejność nie jest przypadkowa. Budowanie zaplecza pod dane, które się rozjeżdżają, utrwala bałagan
            zamiast go naprawiać, więc porządek w NAP zawsze idzie przed linkami.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {etapy.map((e) => (
              <div key={e.nr} className="rounded-2xl border border-border p-6 flex flex-col">
                <span className="text-4xl font-bold text-brand/20 leading-none">{e.nr}</span>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-brand">{e.tydzien}</span>
                <h3 className="mt-2 text-lg font-bold text-ink leading-snug">{e.tytul}</h3>
                <p className="mt-3 text-[15px] text-zinc-600 leading-relaxed">{e.tresc}</p>
              </div>
            ))}
          </div>

          <p className="mt-9 max-w-3xl text-[17px] text-zinc-600 leading-relaxed">
            Pierwsze ruchy w statystykach widać zwykle po trzech do sześciu tygodni, pełniejszy obraz po drugim
            pełnym miesiącu. Każdy, kto obiecuje top 3 w dwa tygodnie, albo nie rozumie, jak indeksuje się profil,
            albo liczy, że nie sprawdzisz.{" "}
            <Link href="/kontakt" className="text-brand font-semibold hover:underline">Umów rozmowę</Link>{" "}
            i przejdziemy ten harmonogram na Twojej wizytówce.
          </p>
        </Kontener>
      </section>

      {/* ══ Galeria realizacji ══ */}
      <section className="bg-surface py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl font-bold text-ink leading-[1.15]">
            Zaplecze, które budujemy pod wizytówkę
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Profil nie działa w próżni. Strona z podstronami lokalizacyjnymi daje mu treść, miejsce, do którego
            można odesłać klienta po szczegóły, i punkt odniesienia dla danych firmy. Poniżej witryny, które
            powstały dokładnie w tym celu — żadna z nich nie jest pozycjonowana osobno.
          </p>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {realizacje.map((r) => (
              <img
                key={r.src}
                src={r.src}
                alt={r.alt}
                loading="lazy"
                className="w-full rounded-xl border border-border bg-white object-cover aspect-[4/3]"
              />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-zinc-600 leading-relaxed">
            Potrzebujesz takiej strony razem z wizytówką? Zobacz{" "}
            <Link href="/strony-internetowe" className="text-brand font-semibold hover:underline">strony internetowe</Link>{" "}
            albo pełne{" "}
            <Link href="/uslugi/pozycjonowanie-strony" className="text-brand font-semibold hover:underline">pozycjonowanie strony</Link>,
            jeśli chcesz walczyć też o wyniki organiczne. Gdy telefony są potrzebne od jutra, sprawdź{" "}
            <Link href="/uslugi/google-ads" className="text-brand font-semibold hover:underline">kampanie Google Ads</Link>.
          </p>
        </Kontener>
      </section>

      {/* ══ H2 wymagany: cennik ══ */}
      <section id="cennik" className="bg-white py-16 sm:py-20 scroll-mt-24">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink leading-[1.12]">
            Pozycjonowanie wizytówki Google cennik
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600 leading-relaxed">
            Rozliczamy się w modelu abonamentowym — stała miesięczna opłata za prowadzenie profilu. Rzadziej,
            w konkretnych sytuacjach, ma sens jednorazowa optymalizacja. Niżej wyjaśniamy, skąd ta różnica i kiedy
            która opcja jest uczciwsza wobec Twojego budżetu.
          </p>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-brand p-7 sm:p-9 bg-white">
              <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-brand">Standard w tej usłudze</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-ink">Abonament miesięczny</h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Stała opłata za każdy miesiąc prowadzenia profilu: optymalizacja, posty, opinie, rozbudowa zaplecza
                NAP, monitoring pozycji i comiesięczny przegląd statystyk. Bez umowy na rok — pracujemy miesiąc do
                miesiąca, więc Twoje ryzyko kończy się na jednym okresie rozliczeniowym.
              </p>
              <h4 className="mt-7 font-bold text-ink">Dlaczego akurat abonament</h4>
              <div className="mt-3 space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Bo pozycja w local packu nie jest stanem, tylko wynikiem bieżącej rywalizacji. Konkurencja
                  dokłada opinie, uzupełnia opisy i publikuje posty — profil, który stoi w miejscu, obsuwa się bez
                  żadnej zmiany po Twojej stronie.
                </p>
                <p>
                  Bo Google zmienia zasady w trakcie gry. Zmiana wag sygnałów, nowe pola w profilu, masowe
                  zawieszenia w branży czy przejście na weryfikację wideo potrafią przestawić wyniki w kilka dni.
                  Reagowanie na to jest pracą ciągłą.
                </p>
                <p>
                  Bo opinie napływają cały czas, a każda — także ta na jedną gwiazdkę — wymaga odpowiedzi.
                  Nieodpowiedziana negatywna recenzja kosztuje telefony przez kolejne miesiące.
                </p>
                <p>
                  I bo bez monitoringu nie wiadomo, czy coś działa. Comiesięczny przegląd statystyk to jedyny
                  moment, w którym widać, czy wynik rośnie, czy zaczął się cofać.
                </p>
              </div>
              <Link href="/kontakt" className="mt-8 inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors">
                Poproś o wycenę abonamentu
              </Link>
            </div>

            <div className="rounded-2xl border border-border p-7 sm:p-9 bg-surface">
              <span className="inline-block text-[11px] font-bold tracking-[0.15em] uppercase text-zinc-500">Opcja rzadsza</span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-ink">Jednorazowa optymalizacja</h3>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Jedno zamknięte wdrożenie: audyt, uporządkowanie NAP, komplet pól w profilu, kategorie, opisy usług,
                zdjęcia i przekazanie instrukcji do dalszego prowadzenia własnymi siłami.
              </p>
              <h4 className="mt-7 font-bold text-ink">Kiedy to ma sens</h4>
              <div className="mt-3 space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Gdy w Twojej okolicy nikt poważnie nie walczy o te frazy — kilka profili z pustymi opisami
                  i trzema opiniami. Solidne ustawienie wystarczy tu na długo.
                </p>
                <p>
                  Gdy masz kogoś na miejscu, kto realnie przejmie prowadzenie: będzie publikował posty, pilnował
                  opinii i reagował na zmiany. Wtedy płacisz nam za start, nie za obecność.
                </p>
                <p>
                  Gdy potrzebujesz konkretnej interwencji — odzyskania przejętego profilu, zdjęcia zawieszenia,
                  przejścia przez weryfikację po zmianie adresu. To zadanie z terminem końcowym.
                </p>
                <p className="text-ink font-medium">
                  Czego nie obiecujemy: że jednorazówka utrzyma pozycję w konkurencyjnej branży. Po kilku miesiącach
                  bez opieki profil zwykle wraca tam, skąd wyszedł, i trzeba płacić drugi raz.
                </p>
              </div>
              <Link href="/kontakt" className="mt-8 inline-block border-2 border-ink text-ink font-bold px-8 py-4 rounded-xl hover:bg-ink hover:text-white transition-colors">
                Zapytaj o jednorazowe wdrożenie
              </Link>
            </div>
          </div>

          <h3 className="mt-16 text-2xl sm:text-3xl font-bold text-ink">Od czego zależy cena</h3>
          <div className="mt-7 grid md:grid-cols-3 gap-8 text-[17px] text-zinc-600 leading-relaxed">
            <p>
              <strong className="font-semibold text-ink">Od konkurencji na Twoje frazy.</strong> Fryzjer w Warszawie
              i fryzjer w mieście na 30 tysięcy mieszkańców to dwa różne nakłady pracy przy identycznym zakresie
              usługi.
            </p>
            <p>
              <strong className="font-semibold text-ink">Od stanu wyjściowego.</strong> Profil zweryfikowany
              i w miarę uzupełniony wymaga innego wejścia niż wizytówka przejęta przez kogoś obcego albo zawieszona
              przez Google.
            </p>
            <p>
              <strong className="font-semibold text-ink">Od zakresu zaplecza.</strong> Sam profil to jedna kwota.
              Profil plus strona z podstronami lokalizacyjnymi i budowa wpisów NAP to inna — za to z zauważalnie
              szybszym efektem.
            </p>
          </div>
          <p className="mt-8 max-w-3xl text-[17px] text-zinc-600 leading-relaxed">
            Konkretną kwotę podajemy po zerknięciu na profil i na to, kto stoi nad Tobą w wynikach. Zajmuje to jedną
            rozmowę i nic nie kosztuje —{" "}
            <Link href="/kontakt" className="text-brand font-semibold hover:underline">napisz do nas</Link>,
            a dostaniesz widełki dopasowane do swojej branży i miasta zamiast cennika z sufitu.
          </p>
        </Kontener>
      </section>

      {/* ══ Ekspert — miniaturka zdjęcia profilowego ══ */}
      <section className="bg-ink text-white py-16 sm:py-20">
        <Kontener>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <figure className="lg:col-span-3">
              <img
                src="/SlawomirJ.webp"
                alt="Sławomir Jułga, specjalista lokalnego SEO i właściciel MiauSEO, prowadzący pozycjonowanie wizytówek Google"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border-4 border-brand"
              />
              <figcaption className="mt-4">
                <span className="block font-bold text-lg">Sławomir Jułga</span>
                <span className="block text-sm text-zinc-400 mt-1">
                  Lokalne SEO i Profile Firm w Google · MiauSEO
                </span>
              </figcaption>
            </figure>

            <div className="lg:col-span-9">
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-[1.15]">
                Kto będzie prowadził Twoją wizytówkę
              </h2>
              <div className="mt-6 space-y-5 text-[17px] text-zinc-300 leading-relaxed max-w-3xl">
                <p>
                  Twoim profilem zajmuje się jedna osoba, nie rotujący opiekun z call center. Prowadzę wizytówki
                  firm usługowych i handlowych — protetyka, skupy aut, serwisy, ekipy remontowe, gabinety — i to
                  samo nazwisko odbiera telefon, gdy coś przestaje działać.
                </p>
                <p>
                  Nie sprzedaję gwarancji pozycji, bo nikt nie ma na nie wpływu. Sprzedaję robotę, której efekt
                  widać w panelu statystyk Twojego profilu: liczbę wyświetleń, kliknięć w trasę i połączeń. Jeśli po
                  dwóch pełnych miesiącach te liczby nie ruszają, rozmawiamy o tym wprost, zamiast przedłużać
                  abonament w nadziei, że samo się poprawi.
                </p>
                <p>
                  Jak pracuję i czego nie obiecuję, opisałem na stronie{" "}
                  <Link href="/o-nas" className="text-brand font-semibold hover:underline">o nas</Link>.
                  Zdanie klientów znajdziesz w{" "}
                  <Link href="/referencje" className="text-brand font-semibold hover:underline">referencjach</Link>,
                  a pełne rozbiory współprac w dziale{" "}
                  <Link href="/opinie" className="text-brand font-semibold hover:underline">opinie</Link>.
                </p>
              </div>
            </div>
          </div>
        </Kontener>
      </section>

      {/* ══ Obawy ══ */}
      <section className="bg-white py-16 sm:py-20">
        <Kontener>
          <h2 className="max-w-3xl text-3xl sm:text-4xl font-bold text-ink leading-[1.15]">
            Cztery rzeczy, o które pytasz przed podjęciem decyzji
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border p-7">
              <h3 className="text-xl font-bold text-ink">„Próbowałem sam i nic z tego nie wyszło"</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Najczęściej z dwóch powodów: kategoria główna była ustawiona pod to, jak firma nazywa swoją usługę,
                a nie pod to, jak szuka jej klient, albo dane w sieci rozjeżdżały się na kilka wariantów. Jedno
                i drugie da się zweryfikować w kwadrans — wystarczy adres Twojej wizytówki.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-7">
              <h3 className="text-xl font-bold text-ink">„Poprzednia agencja wzięła pieniądze i tyle"</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Dlatego nie wiążemy umową na rok i zostawiamy Ci pełny dostęp do konta Google. Wszystko, co robimy,
                widzisz w historii zmian profilu, a raz w miesiącu dostajesz zestawienie ze statystykami. Nie musisz
                wierzyć na słowo, bo masz te same dane co my.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-7">
              <h3 className="text-xl font-bold text-ink">„Moja branża jest za bardzo konkurencyjna"</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                Zdarza się, że faktycznie jest — i wtedy mówimy to przed podpisaniem czegokolwiek. Częściej okazuje
                się jednak, że konkurenci mają profile z pustymi opisami i bez ani jednego wpisu usługi, co oznacza,
                że wystarczy zrobić porządnie rzeczy, których nikt tam nie zrobił.
              </p>
            </div>
            <div className="rounded-2xl border border-border p-7">
              <h3 className="text-xl font-bold text-ink">„Ktoś dzwoni, że moja wizytówka wygaśnie"</h3>
              <p className="mt-3 text-zinc-600 leading-relaxed">
                To oszustwo, które krąży od lat. Profil Firmy w Google nie wygasa i nie ma żadnej opłaty
                administracyjnej. Zebraliśmy te scenariusze w tekście o{" "}
                <Link href="/wizytowka-google-popularne-oszustwa" className="text-brand font-semibold hover:underline">oszustwach na wizytówkę Google</Link> —
                warto przeczytać, zanim ktoś wyciągnie od Ciebie dane do karty.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-[17px] text-zinc-600 leading-relaxed">
            Masz inne pytanie? Odpowiedzi na kilkadziesiąt konkretnych sytuacji zebraliśmy w dziale{" "}
            <Link href="/pytania" className="text-brand font-semibold hover:underline">pytań o wizytówkę</Link>,
            pojęcia z branży wyjaśniamy w{" "}
            <Link href="/slownik" className="text-brand font-semibold hover:underline">słowniku SEO</Link>,
            a świeże analizy trafiają na{" "}
            <Link href="/blog" className="text-brand font-semibold hover:underline">bloga</Link>.
          </p>
        </Kontener>
      </section>

      {/* ══ CTA końcowe ══ */}
      <section className="bg-brand text-white py-16 sm:py-24">
        <Kontener>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight">
                Sprawdź, ile telefonów traci dziś Twoja wizytówka
              </h2>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-orange-50">
                Zostaw numer i adres profilu. Oddzwaniamy, sprawdzamy, na której pozycji stoisz na swoje główne
                frazy, kto stoi nad Tobą i co konkretnie go tam trzyma. Dostajesz listę rzeczy do poprawy i widełki
                cenowe — bez zobowiązania i bez wciskania pakietu, którego nie potrzebujesz.
              </p>
              <p className="mt-5 text-orange-50 leading-relaxed">
                Jeśli po tej rozmowie uznasz, że poradzisz sobie sam, dostaniesz od nas{" "}
                <Link href="/checklista-wizytowki-google" className="underline font-semibold hover:no-underline">checklistę</Link>{" "}
                i tyle. Wolimy to niż klienta, który płaci abonament bez przekonania.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/kontakt" className="inline-block bg-white text-brand font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
                  Umów bezpłatną konsultację
                </Link>
                <Link href="/gbp-score" className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-brand transition-colors">
                  Przetestuj wizytówkę online
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <WizytowkaForm />
            </div>
          </div>
        </Kontener>
      </section>

    </main>
  );
}
