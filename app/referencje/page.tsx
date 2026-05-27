import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referencje – MiauSEO | Szczere opinie ze współpracy",
  description:
    "Prawdziwe referencje klientów MiauSEO. Piszemy wprost co poszło dobrze, co było trudne i jakie efekty osiągnęliśmy razem. Żadnej ściemy.",
};

const cases: {
  id: string;
  company: string;
  service: string;
  location: string;
  paragraphs: ReactNode[];
  good: string[];
  hard: string[];
  photo: string | null;
  reverse: boolean;
}[] = [
  {
    id: "01",
    company: "iHelpyou.pl",
    service: "Pozycjonowanie strony internetowej",
    location: "Serwis telefonów · Poznań",
    paragraphs: [
      <>iHelpyou.pl to serwis telefonów działający w centrum Poznania. Gdy zaczęliśmy współpracę, <strong className="text-ink">strona praktycznie nie istniała w organicznych wynikach Google</strong> — konkurencja z sieci franczyzowych dominowała na każde wartościowe frazy. Właściciel miał solidny warsztat i opinie klientów, ale <strong className="text-ink">online był niewidoczny</strong>.</>,
      <>Skupiliśmy się na <strong className="text-ink">audycie technicznym strony</strong>, optymalizacji struktury nagłówków i treści pod frazy lokalne: &quot;serwis telefonów Poznań&quot;, &quot;naprawa iPhone Poznań&quot; i kilkanaście podobnych. Równolegle zbudowaliśmy <strong className="text-ink">profil linków z lokalnych katalogów</strong> i branżowych serwisów. Proces trwał ok. <strong className="text-ink">4 miesiące</strong> zanim frazy zaczęły wchodzić do top 10.</>,
      <>Dziś strona notuje <strong className="text-ink">stabilny ruch organiczny</strong>, który przekłada się na telefony od nowych klientów. Współpraca trwa — co miesiąc raportujemy pozycje, ruch i zmiany w konkurencji. Właściciel wie dokładnie, <strong className="text-ink">za co płaci i co się dzieje z jego stroną</strong>.</>,
    ],
    good: [
      "Szybkie wdrożenie poprawek technicznych — właściciel sprawnie akceptował zmiany",
      "Otwartość na sugestie dotyczące treści i rozbudowy strony",
      "Regularne spotkania — zawsze wiedzieliśmy, co jest aktualne w biznesie",
    ],
    hard: [
      "Silna konkurencja franczyzowa z ogromnymi budżetami SEO wymusiła dłuższy czas oczekiwania na efekty",
      "Pierwsze 3 miesiące bez widocznych wzrostów — trudny okres wymagający cierpliwości z obu stron",
    ],
    photo: "/referencje/1.png",
    reverse: false,
  },
  {
    id: "02",
    company: "Estetic-Smile",
    service: "Pozycjonowanie wizytówki Google",
    location: "Gabinet Protetyczny · Piła",
    paragraphs: [
      <>Gabinet protetyczny Estetic-Smile działa w Pile — mieście, gdzie rynek stomatologiczny jest <strong className="text-ink">mocno obsadzony przez gabinety z wieloletnią historią</strong>. Klientka przyszła do nas po kilku miesiącach samodzielnych prób z wizytówką Google, <strong className="text-ink">które nie przyniosły efektów</strong>. Profil był założony, ale prawie pusty.</>,
      <>Zaczęliśmy od <strong className="text-ink">kompleksowej optymalizacji wizytówki</strong>: kategorie, opis, usługi z cenami, zdjęcia wnętrza i sprzętu. Następnie wdrożyliśmy <strong className="text-ink">systematyczne zbieranie opinii od pacjentów</strong> — bez nachalnego proszenia, po prostu łatwiejszy proces dla klienta. W ciągu 3 miesięcy <strong className="text-ink">liczba opinii wzrosła z 8 do ponad 40</strong>.</>,
      <>Wizytówka zaczęła pojawiać się w <strong className="text-ink">top 3 Mapy Google</strong> na frazy lokalne. Klientka zgłasza wyraźnie <strong className="text-ink">więcej telefonów z pytaniami o wolne terminy</strong> — co przed współpracą było rzadkością. To przykład, gdzie efekty są mierzalne i odczuwalne w codziennej pracy gabinetu.</>,
    ],
    good: [
      "Duże zaangażowanie klientki w zbieranie opinii od pacjentów",
      "Świetne zdjęcia wnętrza, które znacząco poprawiły atrakcyjność wizytówki",
      "Szybka komunikacja — odpowiedzi na pytania zawsze w ciągu dnia",
    ],
    hard: [
      "Branża medyczna ma ograniczenia w pewnych formach promocji — wymagała ostrożności w doborze słów w opisach",
      "Sezonowość — wakacje spowalniały pozyskiwanie nowych opinii",
    ],
    photo: "/referencje/2.png",
    reverse: true,
  },
  {
    id: "03",
    company: "Rozluznijsie.pl",
    service: "Pozycjonowanie wizytówki Google",
    location: "Gabinet masażu · Polska",
    paragraphs: [
      <>Rozluznijsie.pl to gabinet masażu, który trafił do nas z konkretnym problemem: <strong className="text-ink">wizytówka Google istniała, ale klienci z internetu prawie nie dzwonili</strong>. Właścicielka polegała głównie na stałych klientach i poleceniach — co jest dobre, ale <strong className="text-ink">nie buduje wzrostu</strong>.</>,
      <>Praca zaczęła się od <strong className="text-ink">analizy wizytówki i profilu słów kluczowych</strong>. Uzupełniliśmy ofertę usług, dodaliśmy zdjęcia, poprawiliśmy godziny i odpowiedzieliśmy na stare opinie. Wdrożyliśmy też <strong className="text-ink">prosty system przypominania klientom</strong> o możliwości wystawienia opinii po wizycie.</>,
      <>Po czterech miesiącach współpracy wizytówka weszła do widoczności na nowe frazy lokalne, <strong className="text-ink">liczba opinii się podwoiła</strong>, a właścicielka odnotowała <strong className="text-ink">wzrost nowych rezerwacji przez internet</strong>. Współpraca jest kontynuowana z fokusem na ekspansję na sąsiednie miasta.</>,
    ],
    good: [
      "Bardzo dobra relacja z klientami — wysoka naturalność opinii",
      "Elastyczność właścicielki w testowaniu nowych pomysłów na treść",
      "Wyraźny efekt w postaci nowych klientów — łatwy do zmierzenia",
    ],
    hard: [
      "Mała liczba startowych opinii sprawiła, że pierwsze tygodnie były mało widoczne w wynikach",
      "Konieczność edukacji na temat tego, że SEO to proces — nie jednorazowe działanie",
    ],
    photo: "/referencje/3.png",
    reverse: false,
  },
];

export default function ReferencjePage() {
  return (
    <main className="pt-24">
      {/* Intro */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
            {/* Left — heading */}
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Referencje</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-8">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Zależy</span> mi na rozmowie<br />
                <span className="text-brand">o Twojej firmie.</span>
              </h1>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Porozmawiajmy o Twoim biznesie
                </Link>
                <Link
                  href="/uslugi/wizytowka-google"
                  className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Sprawdź ofertę
                </Link>
              </div>
            </div>

            {/* Right — text */}
            <div className="lg:w-7/12 space-y-5 text-zinc-600 text-[17px] leading-relaxed border-l-0 lg:border-l-2 lg:border-brand/20 lg:pl-14">
              <p>
                Większość agencji pokazuje dziesiątki logo klientów i screenshoty z wykresami rosnącymi w górę. Potem okazuje się, że wyniki dotyczyły jednego miesiąca, albo były mierzone w sposób, który wygodnie ukrywa brak realnych efektów.
              </p>
              <p>
                Ja robię to inaczej. Mam <strong className="text-ink font-bold">trzech klientów, z którymi mogę porozmawiać otwarcie</strong> — co poszło dobrze, co było trudne i czego nie powtórzymy. Nie ma tu setki logo dla wrażenia. Jest konkret.
              </p>
              <p>
                Najważniejsza jest dla mnie rozmowa o Twojej firmie — zanim cokolwiek zaproponuję. Każdy biznes jest inny i każda współpraca zaczyna się od zrozumienia, gdzie jesteś teraz i dokąd chcesz dotrzeć.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border max-w-5xl mx-auto" />

      {/* Case studies */}
      {cases.map((item, i) => (
        <section
          key={item.id}
          className={`py-20 px-6 ${i % 2 === 1 ? "bg-surface" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
              <span className="text-[4rem] font-bold text-brand/15 leading-none select-none">{item.id}</span>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold mb-1">{item.location}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-ink">{item.company}</h2>
                <p className="text-brand font-semibold text-sm mt-1">{item.service}</p>
              </div>
            </div>

            {/* Main 2-col */}
            <div className={`flex flex-col ${item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 mb-12`}>
              {/* Text */}
              <div className="lg:w-1/2 space-y-5">
                {item.paragraphs.map((p, j) => (
                  <p key={j} className="text-zinc-600 leading-relaxed text-[15px]">{p}</p>
                ))}
              </div>

              {/* Photo */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 min-h-[280px] flex items-center justify-center">
                    {item.photo ? (
                      <img
                        src={item.photo}
                        alt={`Wyniki ${item.company}`}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-3">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <p className="text-zinc-400 text-sm">Zdjęcie klienta</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-brand/15 -z-10" />
                </div>
              </div>
            </div>

            {/* Good / Hard */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Co poszło dobrze */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-green-800 text-sm uppercase tracking-wide">Co poszło dobrze</h3>
                </div>
                <ul className="space-y-3">
                  {item.good.map((g, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-green-900 leading-relaxed">
                      <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Co było trudne */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-orange-800 text-sm uppercase tracking-wide">Co było trudne</h3>
                </div>
                <ul className="space-y-3">
                  {item.hard.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-orange-900 leading-relaxed">
                      <span className="text-brand mt-0.5 shrink-0">–</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Twoja firma</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Chcę zrozumieć Twój biznes,<br />zanim cokolwiek zaproponuję.
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Bezpłatna rozmowa — bez sprzedawania, bez presji. Sprawdźmy razem czy i jak możemy Ci pomóc.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-xl transition-colors duration-200 text-lg"
          >
            Zacznijmy rozmowę
          </Link>
        </div>
      </section>
    </main>
  );
}
