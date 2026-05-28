import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const items = [
  {
    label: "Współpraca",
    title: ["Elastyczna", " umowa"],
    paragraphs: [
      <>
        Kot nie da się przekonać na siłę. Zaufanie buduje się powoli, na własnych zasadach.
        Dlatego przygotowaliśmy <strong className="font-semibold text-ink">specjalne warianty współpracy</strong>,
        dzięki którym nie musisz od razu wiązać się na 12 miesięcy lub dłużej. Zacznij od mniejszego kroku.
      </>,
      <>
        Najpierw <strong className="font-semibold text-ink">poznajmy się</strong>. Zobaczysz jak pracujemy,
        co raportujemy i jakie wyniki potrafimy osiągać. Jeśli poczujesz, że warto, rozszerzymy współpracę.
        Jeśli nie, rozstajemy się bez żalu i{" "}
        <strong className="font-semibold text-ink">bez kar umownych</strong>.
      </>,
      <>
        Elastyczność to też <strong className="font-semibold text-ink">skalowalność</strong>. Gdy wyniki rosną,
        zwiększamy zakres. Gdy sezon zwalnia, przyhamujesz.{" "}
        <strong className="font-semibold text-ink">Ty decydujesz</strong>, my dowozimy.
      </>,
    ],
    photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&fit=crop&crop=center",
    alt: "Elastyczna umowa i współpraca",
    reverse: false,
    cta: { label: "O nas", href: "/o-nas" },
  },
  {
    label: "Transparentność",
    title: ["Zero", " ukrytych kosztów"],
    paragraphs: [
      <>
        Znasz cenę zanim podpiszesz umowę. Żadnych <strong className="font-semibold text-ink">niespodziewanych faktur</strong>,
        ukrytych opłat za raportowanie ani dodatkowych kosztów za narzędzia, których używamy po
        naszej stronie.
      </>,
      <>
        Każda złotówka jest opisana. Wiesz dokładnie{" "}
        <strong className="font-semibold text-ink">ile płacisz za obsługę</strong>, ile idzie na budżet
        reklamowy i co z tego wychodzi. <strong className="font-semibold text-ink">Pełna przejrzystość</strong> — bez domysłów.
      </>,
      <>
        Dostęp do kont reklamowych masz <strong className="font-semibold text-ink">zawsze po Twojej stronie</strong>.
        Konta należą do Ciebie — nie do agencji. Jeśli zdecydujesz się odejść, zabierasz wszystko ze sobą.
      </>,
    ],
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&fit=crop&crop=center",
    alt: "Transparentność i zero ukrytych kosztów",
    reverse: true,
    cta: { label: "Referencje", href: "/referencje" },
  },
  {
    label: "Komunikacja",
    title: ["Cykliczny", " kontakt"],
    paragraphs: [
      <>
        Masz dedykowanego opiekuna, do którego możesz napisać lub zadzwonić.{" "}
        <strong className="font-semibold text-ink">Nie przeskakujesz między konsultantami</strong>,
        nie tłumaczysz swojej sytuacji od nowa przy każdym kontakcie.
      </>,
      <>
        Co tydzień raport z wyników. Co miesiąc omówienie strategii i planów na kolejny okres.
        Żadnego <strong className="font-semibold text-ink">czekania tygodniami</strong> na odpowiedź
        i żadnych ogólnych podsumowań — tylko{" "}
        <strong className="font-semibold text-ink">konkretne liczby i wnioski</strong>.
      </>,
      <>
        Jeśli coś się zmienia w algorytmie Google albo pojawia się szansa do wykorzystania —{" "}
        <strong className="font-semibold text-ink">informujemy Cię jako pierwsi</strong>, nie czekamy
        aż sam zapytasz. Proaktywna komunikacja to nasz standard.
      </>,
    ],
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop&crop=center",
    alt: "Cykliczny kontakt z klientem",
    reverse: false,
    cta: { label: "Kontakt", href: "/kontakt" },
  },
];

function GBPScoreCTA() {
  return (
    <div className="py-10 bg-surface border-y border-brand/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-dashed border-brand/30 rounded-2xl p-8 bg-brand/5">
          <img src="/logo.png" alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-4 right-5 h-7 w-auto" />
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
                <line x1="2" y1="20" x2="22" y2="20"/>
              </svg>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md mb-2">Bezpłatne narzędzie AI</span>
              <h3 className="text-xl font-bold text-ink mb-2">Audyt <span className="text-brand">Widoczności</span> Wizytówki Google</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                Odpowiedz na <strong className="font-semibold text-ink">12 pytań</strong> i dowiedz się, <strong className="font-semibold text-ink">ile klientów tracisz miesięcznie</strong> przez nieoptymowaną wizytówkę Google. Dostaniesz <strong className="font-semibold text-ink">pełny raport z priorytetami</strong> i <strong className="font-semibold text-ink">roadmapą 30 dni</strong>.
              </p>
            </div>
          </div>
          <Link
            href="/gbp-score"
            className="shrink-0 inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
          >
            Sprawdź swój wynik
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChecklistaCTA() {
  return (
    <div className="py-10 bg-white border-y border-brand/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-dashed border-brand/30 rounded-2xl p-8 bg-brand/5">
          <img src="/logo.png" alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-4 right-5 h-7 w-auto" />
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md mb-2">Bezpłatne narzędzie</span>
              <h3 className="text-xl font-bold text-ink mb-2">Checklista Pozycjonowania Wizytówki Google</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                <strong className="font-semibold text-ink">28 punktów kontrolnych</strong> z wyjaśnieniami. Sprawdź samodzielnie <strong className="font-semibold text-ink">co zostało zrobione, a co wymaga poprawy</strong> — zanim wydasz <strong className="font-semibold text-ink">złotówkę na reklamę</strong>.
              </p>
            </div>
          </div>
          <Link
            href="/checklista-wizytowki-google"
            className="shrink-0 inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
          >
            Sprawdź checklistę
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-white">
      {items.map((item, i) => (
        <div key={i}>
          <div
            className={`relative py-20 overflow-hidden ${i % 2 === 1 ? "bg-surface" : "bg-white"}`}
          >
            {(i === 0 || i === 2) && (
              <img
                src="/logo.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-1/2 -translate-y-1/2 w-[480px] opacity-[0.04] grayscale"
                style={{ left: "calc(-4% + 100px)" }}
              />
            )}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${item.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>

                {/* Text */}
                <ScrollReveal>
                  <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                    {item.label}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
                    <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                      {item.title[0]}
                    </span>
                    {item.title[1]}
                  </h2>
                  <div className="space-y-5">
                    {item.paragraphs.map((p, j) => (
                      <p key={j} className="text-zinc-500 leading-relaxed text-sm border-l-2 border-brand/20 pl-4">
                        {p}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={item.cta.href}
                    className="inline-flex items-center gap-2.5 mt-8 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm mx-auto lg:mx-0 block w-fit"
                  >
                    {item.cta.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </ScrollReveal>

                {/* Photo */}
                <ScrollReveal delay={150}>
                  <div className={`relative ${item.reverse ? "pl-5 pt-5" : "pr-5 pt-5"}`}>
                    <div
                      className={`absolute ${item.reverse ? "top-0 left-0" : "top-0 right-0"} rounded-2xl bg-brand/25`}
                      style={{ width: "calc(100% - 1.25rem)", height: "calc(100% - 1.25rem)" }}
                    />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <img
                        src={item.photo}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
          {i === 0 && <ChecklistaCTA key="checklista-cta" />}
          {i === 2 && <GBPScoreCTA key="gbp-score-cta" />}
        </div>
      ))}
    </section>
  );
}
