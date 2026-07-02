import Link from "next/link";
import Image from "next/image";

const tools = [
  {
    title: "Audyt widoczności wizytówki Google",
    desc: "Odpowiedz na 12 pytań i sprawdź, ilu klientów tracisz przez nieoptymalną wizytówkę. Dostaniesz raport z priorytetami i roadmapą na 30 dni.",
    href: "/gbp-score",
    badge: "AI",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    title: "Checklista pozycjonowania wizytówki",
    desc: "28 punktów kontrolnych z wyjaśnieniami. Sprawdź samodzielnie, co zostało zrobione, a co wymaga poprawy — zanim wydasz złotówkę na reklamę.",
    href: "/checklista-wizytowki-google",
    badge: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Słownik SEO/SEM",
    desc: "Ponad 120 haseł z marketingu, SEO i reklamy wyjaśnionych prostym językiem. Idealny, gdy chcesz zrozumieć, za co płacisz agencji.",
    href: "/slownik",
    badge: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "Baza pytań o wizytówkę Google",
    desc: "50 konkretnych odpowiedzi na najczęstsze pytania o profil firmy w Google — od weryfikacji po zarządzanie opiniami.",
    href: "/pytania",
    badge: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function FreeToolsSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-sm">

          {/* Dwie kolumny: logo + nagłówek po lewej, narzędzia po prawej */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">

            {/* Lewa — logo + nagłówek */}
            <div className="lg:col-span-1">
              <Image
                src="/logo.png"
                alt="MiauSEO logo"
                width={224}
                height={64}
                sizes="224px"
                className="h-14 w-auto mb-6"
              />
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                Dla Ciebie, za darmo
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
                Sprawdź{" "}
                <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                  darmowe narzędzia
                </span>
              </h2>
              <p className="text-zinc-500 mt-4 text-sm">
                <strong className="font-semibold text-ink">Zero zobowiązań</strong> — skorzystaj z narzędzi
                i wiedzy, które przygotowaliśmy, kiedy tylko chcesz.
              </p>
            </div>

            {/* Prawa — narzędzia */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4 content-start">
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group flex flex-col h-full bg-surface rounded-2xl p-6 border border-border hover:border-brand hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                      {t.icon}
                    </div>
                    {t.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-brand text-white px-2.5 py-1 rounded-md">
                        {t.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2 leading-snug">{t.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{t.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Otwórz
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
