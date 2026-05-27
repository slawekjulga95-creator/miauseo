import type { Metadata } from "next";
import Link from "next/link";
import { categories, questions } from "./questions";

export const metadata: Metadata = {
  title: "Pytania o wizytówkę Google – baza wiedzy MiauSEO",
  description:
    "50 najczęstszych pytań o wizytówkę Google Business Profile. Ogólne, SEO, opinie, optymalizacja, problemy techniczne – znajdź odpowiedź na swoje pytanie.",
};

const colorMap: Record<string, { badge: string; dot: string; hover: string; num: string }> = {
  zinc:  { badge: "bg-zinc-100 text-zinc-600",   dot: "bg-zinc-400",   hover: "hover:border-zinc-300 hover:bg-zinc-50",   num: "text-zinc-300"  },
  brand: { badge: "bg-orange-100 text-brand",    dot: "bg-brand",      hover: "hover:border-brand/30 hover:bg-orange-50", num: "text-brand/20"  },
  green: { badge: "bg-green-100 text-green-700", dot: "bg-green-500",  hover: "hover:border-green-200 hover:bg-green-50", num: "text-green-200" },
  violet:{ badge: "bg-violet-100 text-violet-700", dot: "bg-violet-500", hover: "hover:border-violet-200 hover:bg-violet-50", num: "text-violet-200" },
  red:   { badge: "bg-red-100 text-red-600",     dot: "bg-red-400",    hover: "hover:border-red-200 hover:bg-red-50",     num: "text-red-200"   },
};

export default function PytaniaPage() {
  return (
    <main className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-white py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
          <div className="lg:w-1/2">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Baza wiedzy</p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-5">
              <span className="bg-brand text-white px-2 py-0.5 rounded-md">Najczęstsze</span> pytania<br />
              <span className="text-brand">o wizytówkę Google</span>
            </h1>
            <p className="text-zinc-500 text-lg leading-relaxed">
              50 pytań, które klienci wpisują w Google. Klikaj w każde — trafiasz do pełnej odpowiedzi. Nowe wpisy dodajemy regularnie.
            </p>
          </div>
          {/* Stats */}
          <div className="lg:w-1/2 grid grid-cols-3 gap-4">
            {categories.map((cat) => {
              const c = colorMap[cat.color];
              const count = questions.filter((q) => q.categoryId === cat.id).length;
              return (
                <div key={cat.id} className="bg-surface rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-ink">{count}</p>
                  <p className={`text-xs font-semibold mt-1 px-2 py-0.5 rounded-full inline-block ${c.badge}`}>{cat.badge}</p>
                </div>
              );
            })}
            <div className="bg-ink rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-white">50</p>
              <p className="text-xs font-semibold mt-1 px-2 py-0.5 rounded-full inline-block bg-white/10 text-white">Razem</p>
            </div>
          </div>
        </div>
      </section>

      {/* Questions by category */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((cat) => {
            const c = colorMap[cat.color];
            const catQuestions = questions.filter((q) => q.categoryId === cat.id);
            return (
              <div key={cat.id}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`w-3 h-3 rounded-full shrink-0 ${c.dot}`} />
                  <h2 className="text-xl font-bold text-ink">{cat.label}</h2>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>{catQuestions.length} pytań</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                {/* Questions grid */}
                <div className="grid md:grid-cols-2 gap-3">
                  {catQuestions.map((q) => (
                    <Link
                      key={q.id}
                      href={`/pytania/${q.slug}`}
                      className={`group flex items-center gap-4 bg-white border border-border rounded-xl px-5 py-4 transition-all duration-150 ${c.hover}`}
                    >
                      {/* Number */}
                      <span className={`text-[2rem] font-bold leading-none shrink-0 select-none tabular-nums ${c.num}`}>
                        {String(q.id).padStart(2, "0")}
                      </span>
                      {/* Question */}
                      <span className="text-[15px] font-medium text-ink leading-snug flex-1 group-hover:text-inherit">
                        {q.question}
                      </span>
                      {/* Arrow */}
                      <svg
                        className="shrink-0 text-zinc-300 group-hover:text-brand transition-colors duration-150"
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl py-14 px-8 text-center">
          <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Masz inne pytanie?</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Nie znalazłeś odpowiedzi?<br />Zapytaj bezpośrednio.
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Każda firma jest inna. Napisz do mnie — odpowiem konkretnie, bez ogólników.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-xl transition-colors duration-200"
          >
            Napisz do mnie
          </Link>
        </div>
      </section>
    </main>
  );
}
