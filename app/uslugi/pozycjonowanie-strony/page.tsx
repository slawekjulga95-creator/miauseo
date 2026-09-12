import Link from "next/link";
import type { Metadata } from "next";
import WizytowkaForm from "@/components/WizytowkaForm";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Pozycjonowanie strony internetowej – MiauSEO | SEO dla firm lokalnych",
  description: "Pozycjonowanie strony internetowej dla małych i średnich firm. Audyt SEO, optymalizacja techniczna, treści i link building. Sprawdź co obejmuje usługa i ile kosztuje.",
};

const services = [
  {
    title: "Audyt SEO strony",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    desc: (
      <>
        Analizujemy <strong className="font-semibold text-ink">każdy element strony</strong>, który wpływa
        na widoczność w Google: strukturę URL, szybkość ładowania, dane strukturalne, nagłówki, meta tagi
        i indeksowanie. Sprawdzamy też <strong className="font-semibold text-ink">profil linków
        zewnętrznych</strong> i pozycje na frazy kluczowe. Audyt to mapa drogowa — pokazuje co blokuje
        wzrost i co naprawić w pierwszej kolejności.
      </>
    ),
  },
  {
    title: "Optymalizacja techniczna",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    desc: (
      <>
        Szybkość strony, Core Web Vitals, poprawny plik sitemap.xml i robots.txt, wdrożenie HTTPS,
        optymalizacja obrazów, <strong className="font-semibold text-ink">dane strukturalne
        Schema.org</strong> — to fundamenty, bez których żadna treść nie ma szans dobrze się
        pozycjonować. Wdrażamy poprawki bezpośrednio lub dostarczamy gotowe wytyczne dla developera.
      </>
    ),
  },
  {
    title: "Optymalizacja treści i słów kluczowych",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    desc: (
      <>
        Dobieramy <strong className="font-semibold text-ink">frazy kluczowe z realnym popytem</strong> —
        takie, których Twoi klienci faktycznie używają. Optymalizujemy istniejące podstrony i tworzymy
        nowe treści zgodne z intencją wyszukiwania. Nagłówki, meta tytuły, opisy i linkowanie wewnętrzne
        — wszystko dopasowane do{" "}
        <strong className="font-semibold text-ink">aktualnych wytycznych Google</strong>.
      </>
    ),
  },
  {
    title: "Link building i autorytet domeny",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    desc: (
      <>
        Google wciąż traktuje linki zewnętrzne jako jeden z{" "}
        <strong className="font-semibold text-ink">najsilniejszych sygnałów rankingowych</strong>.
        Budujemy profil linków z wartościowych, tematycznych źródeł — bez farm linków i technik,
        które mogą zaszkodzić. Skupiamy się na jakości, nie ilości, bo to właśnie{" "}
        <strong className="font-semibold text-ink">jeden mocny link bije sto słabych</strong>.
      </>
    ),
  },
];

const beforeAfter = [
  { before: "Strona na 3–5 stronie wyników Google", after: "Top 10, top 5 na główne frazy" },
  { before: "Ruch organiczny bliski zera", after: "Stabilny wzrost ruchu z miesiąca na miesiąc" },
  { before: "Wolna strona, błędy techniczne, brak sitemapy", after: "Poprawna technika, Core Web Vitals w normie" },
  { before: "Treści napisane bez myśli o SEO", after: "Strony zoptymalizowane pod konkretne frazy" },
  { before: "Brak linków zewnętrznych, niski autorytet", after: "Rosnący profil linków z tematycznych źródeł" },
];

const fears = [
  {
    fear: "SEO to długi proces — czy w ogóle warto zaczynać?",
    answer: "Tak — i właśnie dlatego warto zacząć jak najwcześniej. SEO to inwestycja, która rośnie z czasem. Ruch organiczny nie znika gdy przestajesz płacić — w przeciwieństwie do reklam. Pierwsze efekty widać po 2–4 miesiącach, a po roku różnica jest znacząca.",
  },
  {
    fear: "Poprzednia agencja nic nie zrobiła przez pół roku",
    answer: "To niestety częsty scenariusz. Dlatego co tydzień raportujemy wykonane działania i ich efekty. Masz stały wgląd w to, co robimy — żadnych ogólnych podsumowań raz na kwartał.",
  },
  {
    fear: "Moja branża jest za bardzo konkurencyjna",
    answer: "Każda branża ma frazy, na które można się pozycjonować. Zaczynamy od tzw. long tail — fraz mniej popularnych, ale z wyższą konwersją. To szybsza droga do pierwszych klientów z SEO, szczególnie dla firm lokalnych.",
  },
  {
    fear: "Nie wiem czy moja strona nadaje się do pozycjonowania",
    answer: "Bezpłatny audyt SEO pokaże dokładnie w jakim stanie jest strona i co trzeba naprawić zanim zaczniemy pozycjonowanie. Czasem wystarczy kilka poprawek technicznych, czasem konieczna jest głębsza przebudowa — zawsze mówimy o tym wprost.",
  },
];

export default function PozycjonowanieStronyPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Pozycjonowanie stron</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Twoja strona wysoko w Google.{" "}
                <span className="text-brand">Trwały ruch bez płacenia za kliknięcia.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                SEO to inwestycja która pracuje miesiącami. Budujemy widoczność organiczną opartą na audycie, optymalizacji technicznej i treściach — nie na skrótach które Google karze.
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

            <div>
              <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
                <div className="h-1 bg-brand w-full" />
                <div className="p-8">
                  <div className="mb-6">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-600 px-2.5 py-1 rounded-full mb-2">Bezpłatne</span>
                    <h2 className="text-xl font-bold text-ink">Bezpłatny audyt SEO</h2>
                    <p className="text-sm text-zinc-500 mt-1">Sprawdzimy Twoją stronę i powiemy co blokuje pozycje.</p>
                  </div>
                  <WizytowkaForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEO strony w 2026 ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Wiedza</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-10">
            Skuteczne pozycjonowanie strony{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w 2026 roku</span>
          </h2>
          <div className="space-y-6">
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              W 2026 roku SEO to znacznie więcej niż wstawienie słów kluczowych do treści.
              Google ocenia strony pod kątem <strong className="font-semibold text-ink">doświadczenia
              użytkownika, szybkości ładowania, autorytetu domeny</strong> i jakości treści.
              Algorytm jest coraz lepszy w odróżnianiu stron wartościowych od tych stworzonych
              wyłącznie pod wyszukiwarkę.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Dla firm lokalnych pozycjonowanie strony internetowej najlepiej działa w połączeniu
              z <Link href="/uslugi/wizytowka-google" className="text-brand font-semibold hover:underline">pozycjonowaniem wizytówki Google</Link>.
              Wizytówka generuje szybkie połączenia i zapytania o trasę, a strona buduje{" "}
              <strong className="font-semibold text-ink">autorytet i konwertuje ruch</strong> na
              zapytania ofertowe i sprzedaż.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Kluczem do skutecznego SEO jest <strong className="font-semibold text-ink">systematyczność
              i cierpliwość</strong>. Pierwsze wyraźne efekty widać po 2–4 miesiącach, ale to dopiero
              początek. Strony, które konsekwentnie rozwijają content i profil linków, budują
              przewagę, której konkurencja nie jest w stanie szybko nadrobić.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Pozycjonowanie strony to jedyny kanał marketingowy, w którym{" "}
              <strong className="font-semibold text-ink">efekty pozostają po zakończeniu
              współpracy</strong>. W przeciwieństwie do{" "}
              <Link href="/uslugi/google-ads" className="text-brand font-semibold hover:underline">Google Ads</Link>{" "}
              — gdzie reklama znika gdy kończysz płacić — dobrze wypozycjonowana strona
              utrzymuje pozycje jeszcze długo po zakończeniu kampanii SEO.
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
              Strona niewidoczna{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w Google?</span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Większość firm, które do nas trafiają, ma stronę od lat — ale nigdy nie była ona
              systematycznie pozycjonowana. To właśnie takie projekty mają największy potencjał wzrostu.
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

      {/* ── Co obejmuje ── */}
      <section className="py-20 bg-surface">
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
              <div key={i} className="relative bg-white rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200 overflow-hidden">
                <div className="absolute top-4 right-5 text-[5rem] font-bold leading-none text-brand/8 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">{s.icon}</div>
                <h3 className="text-lg font-bold text-ink mb-4">{s.title}</h3>
                <div className="w-10 h-0.5 bg-brand mb-4" />
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Koszt ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Cennik</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-10">
            Ile kosztuje pozycjonowanie strony{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w 2026 roku?</span>
          </h2>
          <div className="space-y-5">
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Koszt pozycjonowania strony zależy od <strong className="font-semibold text-ink">konkurencyjności
              branży, liczby fraz kluczowych i aktualnego stanu technicznego strony</strong>. Mały sklep
              lokalny i ogólnopolski serwis e-commerce to dwa zupełnie różne projekty.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Nasze ceny zaczynają się od <strong className="font-semibold text-ink">700 zł netto
              miesięcznie</strong> dla projektów lokalnych z ograniczoną konkurencją. Przy bardziej
              wymagających projektach — ogólnopolski zasięg, duża konkurencja, wiele podstron do
              optymalizacji — kwota rośnie proporcjonalnie do nakładu pracy.
            </p>
            <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-5">
              Każdą wycenę poprzedza <strong className="font-semibold text-ink">bezpłatny audyt SEO</strong>.
              Bez analizy nie jesteśmy w stanie podać uczciwej ceny — i nie chcemy tego robić.
              Pracujemy miesięcznie, bez długoletnich umów.
            </p>
          </div>
          <div className="mt-10 bg-surface rounded-2xl border border-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <p className="font-bold text-ink text-lg">Chcesz poznać cenę dla swojej strony?</p>
              <p className="text-zinc-500 text-sm mt-1">Bezpłatny audyt SEO, wycena w 24h.</p>
            </div>
            <Link href="/kontakt" className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-sm">
              Umów audyt SEO
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Obawy ── */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Szczerość</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Czego najbardziej obawiamy się{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">przy SEO?</span>
            </h2>
          </div>
          <div className="space-y-4">
            {fears.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-6">
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
      <section className="py-20 bg-white">
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
                {["Strona istnieje od lat, ale nikt jej nie widzi w Google", "Brak wiedzy które frazy warto pozycjonować", "Strona wolna, z błędami technicznymi, bez sitemapy", "Klienci przychodzą tylko z polecenia lub reklam płatnych"].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-surface rounded-xl p-4 border border-border">
                    <span className="w-2 h-2 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                    <p className="text-sm text-zinc-500">{t}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Klient po współpracy z MiauSEO</p>
              <div className="space-y-4">
                {["Strona widoczna na dziesiątkach fraz lokalnych i branżowych", "Rosnący ruch organiczny — bez płacenia za każde kliknięcie", "Technicznie poprawna strona z szybkim ładowaniem", "Stały dopływ zapytań ofertowych z Google"].map((t) => (
                  <div key={t} className="flex items-start gap-3 bg-brand/5 rounded-xl p-4 border border-brand/20">
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
            Pozycjonowanie strony to{" "}
            <span className="text-brand">inwestycja, która rośnie</span>{" "}
            z każdym miesiącem
          </h2>
          <div className="space-y-4 text-white/70 text-left max-w-2xl mx-auto mb-10">
            <p className="leading-relaxed">
              Ruch organiczny z Google to jedyny kanał, w którym efekty kumulują się w czasie.
              Im dłużej działasz — tym więcej fraz, tym więcej ruchu, tym więcej klientów.
              Reklamy wyłączone — ruch znika. SEO wyłączone — pozycje zostają.
            </p>
            <p className="leading-relaxed">
              Dla firm lokalnych najlepszy efekt daje połączenie pozycjonowania strony
              z <Link href="/uslugi/wizytowka-google" className="text-brand font-semibold hover:underline">pozycjonowaniem wizytówki Google</Link>.
              Oba kanały wzajemnie się wzmacniają i razem budują dominującą obecność w lokalnych wynikach wyszukiwania.
            </p>
            <p className="leading-relaxed">
              Zacznij od bezpłatnego audytu SEO. Pokażemy co blokuje widoczność Twojej strony
              i co zrobić żeby to zmienić. Konkretnie, bez ogólników.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors text-sm">
              Umów bezpłatny audyt SEO
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
