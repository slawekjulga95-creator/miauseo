import Link from "next/link";
import type { Metadata } from "next";
import WizytowkaForm from "@/components/WizytowkaForm";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Pozycjonowanie wizytówki Google – MiauSEO | Od 500 zł/mies.",
  description: "Pozycjonowanie wizytówki Google dla firm lokalnych. Sprawdź co obejmuje usługa, ile kosztuje i jak działamy. Bezpłatna konsultacja – oddzwonimy.",
};

const services = [
  {
    title: "Audyt wizytówki Google",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    desc: (
      <>
        Analizujemy <strong className="font-semibold text-ink">każdy element profilu</strong>: kategorie, opis,
        atrybuty, zdjęcia, godziny, recenzje i dane NAP. Sprawdzamy pozycje na kluczowe frazy lokalne i porównujemy
        z <strong className="font-semibold text-ink">bezpośrednią konkurencją</strong> w Twoim mieście.
        Audyt to punkt startowy — bez niego nie wiemy gdzie jesteś i co blokuje widoczność.
      </>
    ),
  },
  {
    title: "Optymalizacja profilu Google Business",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    desc: (
      <>
        Uzupełniamy i poprawiamy <strong className="font-semibold text-ink">wszystkie dane w profilu</strong>:
        dobieramy właściwe kategorie główne i dodatkowe, piszemy zoptymalizowany opis, dodajemy atrybuty usług
        i produktów. Publikujemy regularne <strong className="font-semibold text-ink">posty i aktualizacje</strong>,
        które sygnalizują algorytmowi Google, że firma jest aktywna.
      </>
    ),
  },
  {
    title: "Odpowiadanie na opinie",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    desc: (
      <>
        Recenzje to <strong className="font-semibold text-ink">jeden z najważniejszych sygnałów rankingowych</strong>.
        Odpowiadamy na każdą opinię — pozytywną i negatywną — w sposób profesjonalny i zgodny z Twoim wizerunkiem.
        Wdrażamy też strategię <strong className="font-semibold text-ink">pozyskiwania nowych recenzji</strong>
        od zadowolonych klientów, co bezpośrednio wpływa na pozycję w Mapach Google.
      </>
    ),
  },
  {
    title: "Tworzenie i edycja danych NAP",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    desc: (
      <>
        NAP (Nazwa, Adres, Telefon) musi być <strong className="font-semibold text-ink">spójne w całym
        internecie</strong>: na stronie, w wizytówce, w katalogach i mediach społecznościowych.
        Rozbieżności w danych mylą algorytm Google i <strong className="font-semibold text-ink">obniżają
        widoczność</strong>. Uzupełniamy i korygujemy dane we wszystkich kluczowych miejscach.
      </>
    ),
  },
];

const beforeAfter = [
  { before: "Wizytówka na pozycji 8–15 w wynikach lokalnych", after: "Top 3 w Mapach Google na główne frazy" },
  { before: "3–5 recenzji, brak odpowiedzi", after: "20+ recenzji, każda z profesjonalną odpowiedzią" },
  { before: "Brak postów, nieaktualne godziny", after: "Regularne posty, pełny i aktualny profil" },
  { before: "0–5 połączeń miesięcznie z wizytówki", after: "30–80 połączeń miesięcznie z Mapy Google" },
  { before: "Klient sam próbował przez rok, bez efektów", after: "Pierwsze efekty widoczne po 3–6 tygodniach" },
];

const fears = [
  {
    fear: "Czy to w ogóle działa?",
    answer: "Pozycjonowanie wizytówki Google to jedna z najlepiej udokumentowanych technik marketingu lokalnego. Firmy w top 3 Mapy Google zbierają ponad 70% kliknięć i połączeń. Efekty są mierzalne — widać je w statystykach profilu Google Business.",
  },
  {
    fear: "Zapłacę i nic się nie zmieni",
    answer: "Rozumiemy tę obawę — większość klientów trafia do nas po rozczarowaniu poprzednią agencją. Dlatego nie podpisujemy długoletnich umów. Pracujemy miesiąc do miesiąca. Jeśli nie dostarczamy wyników, możesz odejść bez konsekwencji.",
  },
  {
    fear: "Nie wiem co będziecie robić za moje pieniądze",
    answer: "Co tydzień raport z działań i wyników. Masz stały dostęp do swojego konta Google Business — nic nie dzieje się bez Twojej wiedzy. Transparentność to nasz standard, nie wyjątek.",
  },
  {
    fear: "Moja branża / miasto jest zbyt konkurencyjna",
    answer: "Im bardziej konkurencyjna nisza, tym więcej pracy — ale też tym większy efekt dla Ciebie. Pracujemy zarówno z małymi miejscowościami, jak i dużymi miastami. Oceniamy sytuację indywidualnie na bezpłatnej konsultacji.",
  },
];

export default function WizytowkaGooglePage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">
                Wizytówka Google
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Top 3 w Mapach Google.{" "}
                <span className="text-brand">Więcej klientów bez płatnych reklam.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Twoja firma pojawia się gdy klienci szukają lokalnie — zanim spojrzą na konkurencję. Pozycjonowanie wizytówki Google to najszybsza droga do klientów z Twojej okolicy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Bezpłatna konsultacja
                </Link>
                <Link href="#zakres" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  Zakres usługi
                </Link>
              </div>
            </div>

            {/* Right – form */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
                <div className="h-1 bg-brand w-full" />
                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-600 px-2.5 py-1 rounded-full mb-2">Bezpłatne</span>
                    <h2 className="text-xl font-bold text-ink">Bezpłatna konsultacja</h2>
                    <p className="text-sm text-zinc-500 mt-1">Sprawdzimy Twoją wizytówkę i powiemy co blokuje widoczność.</p>
                  </div>
                  <WizytowkaForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Skuteczne pozycjonowanie 2026 ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Wiedza</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-10">
            Skuteczne pozycjonowanie wizytówki Google{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w 2026 roku</span>
          </h2>
          <div className="space-y-6">
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              W 2026 roku <strong className="font-semibold text-ink">Google Business Profile</strong> to
              najważniejszy kanał pozyskiwania klientów dla firm lokalnych. Gdy ktoś wpisuje w Google
              nazwę usługi i miasto, widzi przede wszystkim <strong className="font-semibold text-ink">3-pak
              z Mapy Google</strong> — jeszcze przed organicznymi wynikami wyszukiwania. To właśnie tam
              toczy się walka o klienta.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Algorytm Google ocenia wizytówki pod kątem trzech głównych czynników:{" "}
              <strong className="font-semibold text-ink">trafności</strong> (czy profil pasuje do zapytania),
              <strong className="font-semibold text-ink"> odległości</strong> (jak daleko firma jest od
              szukającego) i <strong className="font-semibold text-ink">popularności</strong> (recenzje,
              aktywność, linki). Na dwa z trzech możemy aktywnie wpływać.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Pozycjonowanie wizytówki to proces ciągły, nie jednorazowa konfiguracja.{" "}
              <strong className="font-semibold text-ink">Regularne posty, nowe recenzje, aktualne dane</strong>
              {" "}i odpowiedzi na opinie — to sygnały, które Google zbiera co tydzień. Firmy, które
              to rozumieją i działają systematycznie, budują przewagę, której konkurencja nie jest
              w stanie nadrobić w krótkim czasie.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Efekty zależą od <strong className="font-semibold text-ink">konkurencyjności branży
              i lokalizacji</strong>. W mniejszych miastach pierwsze pozycje można osiągnąć
              w kilka tygodni. W dużych miastach z intensywną konkurencją — w 2–3 miesiące.
              W obu przypadkach wyniki są <strong className="font-semibold text-ink">mierzalne
              i trwałe</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tabela przed / po ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Zmiana</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Wizytówka stoi{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w miejscu?</span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Nasze najlepsze zlecenia to firmy, które przez rok próbowały samodzielnie — i nie widziały żadnej zmiany.
              Właśnie dla nich pozycjonowanie wizytówki Google przynosi największy efekt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-zinc-50 rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-zinc-200 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </div>
                <span className="font-bold text-zinc-500">Przed współpracą</span>
              </div>
              <ul className="space-y-3">
                {beforeAfter.map((row, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    {row.before}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand/5 rounded-2xl p-6 border border-brand/20">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="font-bold text-ink">Po współpracy z MiauSEO</span>
              </div>
              <ul className="space-y-3">
                {beforeAfter.map((row, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                    <strong className="font-semibold text-ink">{row.after}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Korzyści ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Dlaczego warto</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-10">
            Jakie korzyści daje{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">profil firmy w Google?</span>
          </h2>
          <div className="space-y-6">
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Dobrze wypozycjonowana wizytówka Google generuje{" "}
              <strong className="font-semibold text-ink">bezpośrednie połączenia telefoniczne</strong>,
              zapytania o trasę dojazdu i kliknięcia na stronę — bez konieczności płacenia za każde kliknięcie
              jak w <Link href="/uslugi/google-ads" className="text-brand font-semibold hover:underline">Google Ads</Link>.
              To jeden z niewielu kanałów, który po zoptymalizowaniu pracuje na siebie długoterminowo.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Firmy widoczne w top 3 Mapy Google są postrzegane jako{" "}
              <strong className="font-semibold text-ink">bardziej wiarygodne i profesjonalne</strong>.
              Klienci coraz rzadziej scrollują — jeśli nie ma Cię na początku listy, dla większości
              po prostu nie istniejesz. Sprawdź też jak działają nasze{" "}
              <Link href="/uslugi/meta-ads" className="text-brand font-semibold hover:underline">kampanie Meta Ads</Link>,
              które docierają do klientów, zanim zaczną szukać.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Profil Google Business to też <strong className="font-semibold text-ink">centrum zarządzania
              reputacją</strong>. Recenzje, odpowiedzi, zdjęcia i posty — wszystko co klient widzi zanim
              zadzwoni, jest w Twoich rękach. Dobrze prowadzona wizytówka buduje zaufanie szybciej
              niż jakakolwiek reklama.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Co ważne — pozycjonowanie wizytówki działa niezależnie od tego, czy masz stronę internetową.
              Dla wielu firm lokalnych <strong className="font-semibold text-ink">profil Google Business
              generuje więcej klientów niż własna strona</strong>. Jeśli masz obie — połączenie
              wizytówki z{" "}
              <Link href="/uslugi/pozycjonowanie-strony" className="text-brand font-semibold hover:underline">pozycjonowaniem strony</Link>
              {" "}daje najlepsze efekty.
            </p>
          </div>
        </div>
      </section>

      {/* ── Co obejmuje usługa ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Zakres</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Nasza usługa —{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">co obejmuje?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="relative bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200 overflow-hidden">
                <div className="absolute top-4 right-5 text-[5rem] font-bold leading-none text-brand/8 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-4">{s.title}</h3>
                <div className="w-10 h-0.5 bg-brand mb-4" />
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Koszt ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Cennik</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-10">
            Ile kosztuje pozycjonowanie wizytówki Google{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w 2026 roku?</span>
          </h2>
          <div className="space-y-5">
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Koszt pozycjonowania wizytówki Google zależy przede wszystkim od{" "}
              <strong className="font-semibold text-ink">konkurencyjności Twojej branży i lokalizacji</strong>.
              Fryzjer w małej miejscowości i kancelaria prawna w centrum Warszawy to zupełnie inne rynki —
              i zupełnie inne nakłady pracy.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Nasze ceny zaczynają się od <strong className="font-semibold text-ink">500 zł netto miesięcznie</strong>{" "}
              dla firm w mniej konkurencyjnych niszach i lokalizacjach. W bardziej wymagających przypadkach —
              duże miasto, wiele fraz, intensywna konkurencja — kwota może być znacznie wyższa.
              Na końcową cenę wpływa liczba obsługiwanych lokalizacji, zakres działań i aktualny stan wizytówki.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              <strong className="font-semibold text-ink">Wszystko ustalamy indywidualnie</strong> — na
              bezpłatnej konsultacji analizujemy Twoją sytuację i podajemy konkretną kwotę. Żadnych
              widełek, żadnych niespodzianek. Pracujemy w modelu miesięcznym, więc wiesz dokładnie
              ile zapłacisz i co za to dostaniesz.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <p className="font-bold text-ink text-lg">Chcesz poznać cenę dla swojej firmy?</p>
              <p className="text-zinc-500 text-sm mt-1">Bezpłatna konsultacja, wycena w 24h.</p>
            </div>
            <Link href="/kontakt" className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm">
              Umów konsultację
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Obawy ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Szczerość</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Czego najbardziej obawiamy się{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">przy współpracy z agencją?</span>
            </h2>
          </div>
          <div className="space-y-4">
            {fears.map((f, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-ink mb-2">{f.fear}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{f.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jak działamy ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Proces</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Jak{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">działamy?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5">Klient przed współpracą</p>
              <div className="space-y-4">
                {["Wizytówka istnieje, ale stoi w miejscu od miesięcy lub lat", "Klient próbował samodzielnie — dodał zdjęcia, poprawił opis — bez efektu", "Brak wiedzy dlaczego konkurencja jest wyżej mimo gorszej oferty", "Zero połączeń z Mapy Google, klienci przychodzą tylko z polecenia"].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                    <span className="w-2 h-2 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    <p className="text-sm text-zinc-500">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Klient po współpracy z MiauSEO</p>
              <div className="space-y-4">
                {["Wizytówka w top 3 na główne frazy lokalne — klienci dzwonią sami", "Pełny, aktywny profil z regularnymi postami i aktualnymi danymi", "Tygodniowe raporty — wiadomo dokładnie co robimy i jakie są efekty", "Stały wzrost liczby wyświetleń, połączeń i zapytań o trasę dojazdu"].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand/5 rounded-xl p-4 border border-brand/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <p className="text-sm text-zinc-600"><strong className="font-semibold text-ink">{t}</strong></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Podsumowanie ── */}
      <section className="py-20 bg-ink text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Podsumowanie</span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-8">
            Pozycjonowanie wizytówki Google to{" "}
            <span className="text-brand">najszybszy sposób</span>{" "}
            na lokalnych klientów
          </h2>
          <div className="space-y-4 text-white/70 text-left max-w-2xl mx-auto mb-10">
            <p className="leading-relaxed">
              Firmy w top 3 Mapy Google zbierają zdecydowaną większość połączeń i kliknięć w wynikach lokalnych.
              Jeśli Cię tam nie ma — Twoi potencjalni klienci trafiają do konkurencji.
            </p>
            <p className="leading-relaxed">
              Pozycjonowanie wizytówki Google to inwestycja, która po zoptymalizowaniu pracuje miesiącami.
              W przeciwieństwie do reklam — nie znika gdy przestajesz płacić. Buduje trwałą widoczność
              i wiarygodność Twojej firmy w internecie.
            </p>
            <p className="leading-relaxed">
              Zaczynamy od bezpłatnej analizy. Patrzymy na Twoją wizytówkę, sprawdzamy konkurencję
              i mówimy wprost co można poprawić i ile to zajmie. Bez owijania w bawełnę.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm">
              Umów bezpłatną konsultację
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/o-nas" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm">
              Poznaj nas
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
