import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Strony internetowe – MiauSEO | Zrealizowane projekty",
  description:
    "Strony internetowe, które zbudowaliśmy dla klientów. Każda realizacja to strona przygotowana pod konkretną usługę i lokalny rynek, a nie szablon z półki.",
  alternates: { canonical: "https://miauseo.pl/strony-internetowe" },
};

type Realizacja = {
  name: string;
  url: string;
  href: string;
  branza: string;
  description: ReactNode;
  scope: string[];
  image: string;
  imageAlt: string;
};

const realizacje: Realizacja[] = [
  {
    name: "Szybki Skup Aut",
    url: "szybkiskup-aut.pl",
    href: "https://szybkiskup-aut.pl",
    branza: "Skup i kasacja pojazdów · Siedlce",
    description: (
      <>
        Strona dla firmy skupującej samochody osobowe i dostawcze, zajmującej się również{" "}
        <strong className="text-ink">kasacją i złomowaniem pojazdów</strong>. Kluczowa była tu jedna
        rzecz: człowiek, który chce oddać auto, decyduje się w kilka minut i dzwoni. Cała strona jest
        więc zbudowana wokół{" "}
        <strong className="text-ink">szybkiego dotarcia do numeru telefonu</strong> i jasnego
        wyjaśnienia, jak wygląda odbiór auta oraz formalności.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Osobne podstrony usługowe",
      "Treści pod realne zapytania klientów",
      "Kontakt telefoniczny wyeksponowany",
      "Sekcja najczęstszych pytań",
      "Wsparcie widoczności wizytówki Google",
    ],
    image: "/realizacje/szybkiskup-aut.png",
    imageAlt: "Strona internetowa szybkiskup-aut.pl — skup i kasacja pojazdów w Siedlcach",
  },
];

export default function StronyInternetowePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="px-6 py-20 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-4">Realizacje</p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
            Strony internetowe, <span className="text-brand">które zbudowaliśmy</span>
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Każdy z tych projektów powstał pod konkretną usługę i konkretny rynek lokalny. Nie
            kupujemy szablonów i nie zmieniamy w nich kolorów — układ strony wynika z tego, jak
            klient danej firmy podejmuje decyzję.
          </p>
        </div>
      </section>

      {/* Realizacje */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-24">
          {realizacje.map((r, i) => (
            <article
              key={r.url}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Opis */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">
                  {r.branza}
                </p>
                <h2 className="text-3xl font-bold text-ink leading-tight mb-2">{r.name}</h2>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-brand hover:underline mb-6"
                >
                  {r.url} →
                </a>

                <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">{r.description}</p>

                <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-3">
                  Zakres prac
                </p>
                <ul className="space-y-2.5 mb-8">
                  {r.scope.map((s, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-600 leading-relaxed">
                      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-brand mt-2" />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl border border-border text-ink hover:border-brand hover:text-brand transition-colors duration-200"
                >
                  Zobacz stronę na żywo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              {/* Zrzut w ramce przeglądarki */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    <span className="ml-3 flex-1 truncate rounded-md bg-white border border-border px-3 py-1 text-xs text-zinc-500">
                      {r.url}
                    </span>
                  </div>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto bg-surface border border-border rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink leading-tight mb-4">
            Potrzebujesz strony dla <span className="text-brand">swojej firmy</span>?
          </h2>
          <p className="text-zinc-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Zaczynamy od rozmowy o tym, jak klienci trafiają do Ciebie dzisiaj i czego szukają, zanim
            zadzwonią. Dopiero z tego wychodzi układ strony i treści.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Porozmawiajmy o Twojej stronie
          </Link>
        </div>
      </section>
    </main>
  );
}
