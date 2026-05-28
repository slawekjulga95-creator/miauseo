import ScrollReveal from "@/components/ui/ScrollReveal";

const problems = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: <>Wizytówka <strong className="text-brand">nie pojawia się</strong> w Mapach Google</>,
    desc: (
      <>
        Klienci szukają lokalnie, a Twoja firma <strong className="font-semibold text-ink">wypada poza top 3</strong>.
        Konkurencja zbiera połączenia, które powinny trafiać do Ciebie.
      </>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: <>Mało recenzji i <strong className="text-brand">brak odpowiedzi</strong> na opinie</>,
    desc: (
      <>
        Google promuje wizytówki z <strong className="font-semibold text-ink">aktywnymi i licznymi recenzjami</strong>.
        Brak reakcji na opinie — pozytywne czy negatywne — <strong className="font-semibold text-ink">obniża pozycję</strong> i zaufanie klientów.
      </>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: <>Niepełne lub <strong className="text-brand">błędne dane</strong> w wizytówce</>,
    desc: (
      <>
        Stary numer telefonu, błędne godziny, brak kategorii, opisu czy zdjęć.
        Algorytm Google <strong className="font-semibold text-ink">obniża widoczność</strong> wizytówek,
        które wyglądają na <strong className="font-semibold text-ink">porzucone</strong>.
      </>
    ),
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: <><strong className="text-brand">Zero aktywności</strong> — posty, Q&A, aktualizacje</>,
    desc: (
      <>
        Regularne posty i aktualizacje to <strong className="font-semibold text-ink">sygnał dla Google</strong>,
        że firma działa. Wizytówka bez aktywności traktowana jest jak{" "}
        <strong className="font-semibold text-ink">nieaktywna</strong> — i spada w wynikach.
      </>
    ),
  },
];

function PawPrint({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <ellipse cx="30" cy="48" rx="16" ry="13" fill="#FF6A00" />
      <ellipse cx="12" cy="30" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="25" cy="23" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="39" cy="23" rx="7" ry="9" fill="#FF6A00" />
      <ellipse cx="51" cy="30" rx="7" ry="9" fill="#FF6A00" />
    </svg>
  );
}

export default function ProblemSection() {
  return (
    <section id="sekret" className="relative py-24 bg-surface overflow-hidden">
      {/* paw print – right side */}
      <div className="absolute right-6 lg:right-14 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden md:block">
        <PawPrint className="w-20 h-20 opacity-50 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
            Rozumiemy Twój problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
            Brzmi{" "}
            <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
              znajomo?
            </span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
            To najczęstsze problemy z wizytówką Google, przez które{" "}
            <strong className="font-semibold text-ink">tracisz klientów każdego dnia.</strong>
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:flex lg:items-stretch lg:gap-0">
          {problems.flatMap((item, i) => {
            const card = (
              <ScrollReveal key={`card-${i}`} delay={i * 120} className="lg:flex-1">
                <div className="relative bg-white rounded-2xl p-7 h-full flex flex-col border border-border hover:border-brand hover:shadow-lg transition-all duration-200 overflow-hidden">
                  <div className="absolute top-3 right-4 text-[7rem] font-bold leading-none text-brand/10 select-none pointer-events-none">
                    {i + 1}
                  </div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-ink leading-snug pt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-0.5 bg-brand mb-5" />
                  <p className="text-zinc-500 leading-relaxed text-sm flex-1">{item.desc}</p>
                </div>
              </ScrollReveal>
            );
            const sep = i < problems.length - 1 ? (
              <div key={`sep-${i}`} className="hidden lg:flex items-center self-stretch px-3">
                <div
                  className="self-stretch w-px"
                  style={{
                    backgroundImage: "repeating-linear-gradient(to bottom, #FF6A00 0px, #FF6A00 8px, transparent 8px, transparent 16px)",
                    opacity: 0.35,
                    width: "2px",
                  }}
                />
              </div>
            ) : null;
            return sep ? [card, sep] : [card];
          })}
        </div>
      </div>
    </section>
  );
}
