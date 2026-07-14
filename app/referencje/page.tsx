import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Referencje – MiauSEO | Szczere opinie ze współpracy",
  description:
    "Prawdziwe referencje klientów MiauSEO. Piszemy wprost co poszło dobrze, co było trudne i jakie efekty osiągnęliśmy razem. Żadnej ściemy.",
};

const portfolio: {
  title: string;
  description: ReactNode;
  scope: string[];
  href: string;
}[] = [
  {
    title: "Protetyk",
    description: (
      <>
        Realizacja obejmowała <strong className="text-ink">kompleksową optymalizację obecności firmy w Google</strong>. Wykonaliśmy działania związane z poprawą <strong className="text-ink">widoczności lokalnej</strong>, optymalizacją <strong className="text-ink">wizytówki Google</strong>, przygotowaniem treści oraz rozwojem strony internetowej.
      </>
    ),
    scope: [
      "Optymalizacja wizytówki GBP",
      "Poprawa kategorii i usług",
      "Optymalizacja danych NAP",
      "Przygotowanie treści",
      "Linkowanie wewnętrzne",
      "Publikacja wpisów",
      "Optymalizacja SEO strony",
      "Wzrost widoczności lokalnej",
    ],
    href: "/miauseo-opinie-protetyk",
  },
  {
    title: "Skup telefonów",
    description: (
      <>
        Projekt realizowany w <strong className="text-ink">bardzo konkurencyjnej branży lokalnej</strong>. Skupiliśmy się na zwiększeniu <strong className="text-ink">widoczności wizytówki Google</strong> oraz poprawie <strong className="text-ink">pozycji na lokalne zapytania</strong> użytkowników.
      </>
    ),
    scope: [
      "Analiza konkurencji",
      "Optymalizacja wizytówki GBP",
      "Rozwój lokalnych fraz",
      "Poprawa widoczności usług",
      "Regularne aktualizacje",
      "Przygotowanie treści",
      "Wzrost zaangażowania",
      "SEO zwiększające ruch",
    ],
    href: "/miauseo-opinie-skup",
  },
  {
    title: "Mobilny masaż",
    description: (
      <>
        Stworzyliśmy <strong className="text-ink">stronę internetową</strong> oraz przygotowaliśmy <strong className="text-ink">fundamenty pod lokalne pozycjonowanie</strong> usługi mobilnej.
      </>
    ),
    scope: [
      "Stworzenie strony internetowej",
      "Przygotowanie struktury SEO",
      "Optymalizacja mobilna",
      "Treści usługowe",
      "Integracja z wizytówką GBP",
      "Fundament widoczności lokalnej",
    ],
    href: "/miauseo-opinie-mobilny-masaz",
  },
];

export default function ReferencjePage() {
  return (
    <main className="pt-24">
      {/* Realizacje – portfolio */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">
              Jak <span className="text-brand">działamy</span>
            </h1>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Przedstawiamy poniżej przykłady branż i sposób działania, aby osiągnąć efekty o których rozmawialiśmy. Każda branża jest inna, ale wdrożenie odpowiednich działań pomaga zwiększyć widoczność. Sprawdź jak wygląda współpraca i porozmawiajmy o Twojej firmie.
            </p>
            <p className="text-sm font-bold text-ink">Konkretne przykłady z opisem:</p>
          </div>

          <div className="grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto_1fr_auto] gap-6 items-stretch">
            {portfolio.map((p) => (
              <article
                key={p.href}
                className="flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-6 rounded-2xl p-7 bg-white border border-border hover:border-brand/40 transition-colors duration-200"
              >
                <Image
                  src="/logo.png"
                  alt="MiauSEO"
                  width={224}
                  height={64}
                  sizes="112px"
                  className="self-start justify-self-start h-8 w-auto mb-5"
                />
                <h3 className="text-xl font-bold text-ink mb-3">{p.title}</h3>
                <p className="text-[15px] text-zinc-600 leading-relaxed mb-6">{p.description}</p>

                <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">Zakres działań</p>
                <ul className="space-y-2.5 mb-8">
                  {p.scope.map((s, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-zinc-600 leading-relaxed whitespace-nowrap">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand" />
                      {s}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  aria-label={`Zobacz pełną realizację — ${p.title}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-3 rounded-xl border border-border text-ink hover:border-brand hover:text-brand transition-colors duration-200"
                >
                  Zobacz pełną realizację
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

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
