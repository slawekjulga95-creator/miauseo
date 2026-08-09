import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
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
  /** Link do case study na blogu — tylko tam, gdzie klient zgodził się na opis z nazwą. */
  caseStudy?: string;
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
  {
    name: "Rozluźnij Się",
    url: "rozluznijsie.pl",
    href: "https://rozluznijsie.pl",
    branza: "Salon masażu · Poznań Piątkowo",
    description: (
      <>
        Strona zbudowana od zera dla salonu masażu, który obsługuje klientów{" "}
        <strong className="text-ink">na miejscu i z dojazdem</strong>. Architektura powstała wokół
        tego, jak ludzie szukają masażu: osobno rodzaje zabiegów, osobno obszary dojazdu, osobno
        pierwsza wizyta i cennik. Doszła do tego zakładka blog, budująca kontekst tematyczny wokół
        usługi.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Podstrony lokalizacyjne pod obszary dojazdu",
      "Struktura pod frazy usługowe",
      "Cennik i sekcja pierwszej wizyty",
      "Blog i treści budujące kontekst",
      "Rezerwacja online wyeksponowana",
    ],
    image: "/realizacje/rozluznijsie.png",
    imageAlt: "Strona internetowa rozluznijsie.pl — salon masażu w Poznaniu",
    caseStudy: "/miauseo-opinie-mobilny-masaz",
  },
  {
    name: "Czysta Kostka 24",
    url: "czystakostka-24.pl",
    href: "https://czystakostka-24.pl",
    branza: "Czyszczenie kostki i elewacji · Odrano-Wola",
    description: (
      <>
        Firma czyszcząca kostkę brukową, tarasy, podjazdy i elewacje sprzętem
        wysokociśnieniowym. Strona musiała pokazać{" "}
        <strong className="text-ink">efekt „przed i po"</strong> oraz rozdzielić trzy różne usługi,
        które klienci mylą ze sobą — czyszczenie kostki, mycie elewacji i mycie ciśnieniowe hal.
        Każda dostała własne miejsce w strukturze.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Rozdzielenie usług na osobne podstrony",
      "Galeria realizacji przed i po",
      "Cennik i obszar działania",
      "Blog i treści usługowe",
      "Dwa numery kontaktowe w hero",
    ],
    image: "/realizacje/czystakostka-24.png",
    imageAlt: "Strona internetowa czystakostka-24.pl — czyszczenie kostki brukowej i elewacji",
  },
  {
    name: "Beskidzkie Mycie Bruku",
    url: "beskidzkiemyciebruku.pl",
    href: "https://beskidzkiemyciebruku.pl",
    branza: "Mobilne czyszczenie powierzchni · Żywiec, Bielsko-Biała",
    description: (
      <>
        Usługa mobilna, w której cała obietnica brzmi „przyjeżdżamy z własnym sprzętem i wodą".
        Strona prowadzi klienta przez{" "}
        <strong className="text-ink">cztery etapy współpracy</strong> — od zdjęcia nawierzchni, przez
        bezpłatną wycenę, po płatność dopiero po obejrzeniu efektu. Osobno wypisane są gminy, w
        których firma realnie pracuje.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Etapy współpracy widoczne w hero",
      "Podstrony pod obsługiwane gminy",
      "Zakres usług rozbity na kategorie",
      "Galeria realizacji",
      "Wycena na podstawie zdjęcia",
    ],
    image: "/realizacje/beskidzkiemyciebruku.png",
    imageAlt: "Strona internetowa beskidzkiemyciebruku.pl — mycie kostki brukowej w Beskidach",
  },
  {
    name: "Oskar Małusecki",
    url: "malowanie-oskar.pl",
    href: "https://malowanie-oskar.pl",
    branza: "Malowanie dachów · cała Polska",
    description: (
      <>
        Firma dekarska malująca dachy z blachy, dachówki ceramicznej i betonowej, działająca na
        terenie całego kraju. Przy zasięgu ogólnopolskim strona nie mogła opierać się na lokalizacji,
        więc oparliśmy ją na{" "}
        <strong className="text-ink">dowodach wykonanej pracy</strong> — realizacjach, zakresie usług
        i konkretnym opisie technologii malowania.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Oferta rozbita na typy pokryć",
      "Galeria zrealizowanych dachów",
      "Blog i treści branżowe",
      "Formularz bezpłatnej wyceny",
      "Kontakt telefoniczny w hero",
    ],
    image: "/realizacje/malowanie-oskar.png",
    imageAlt: "Strona internetowa malowanie-oskar.pl — malowanie dachów, Oskar Małusecki",
  },
  {
    name: "AKS-POL",
    url: "akspol-malowanie.pl",
    href: "https://akspol-malowanie.pl",
    branza: "Malowanie dachów · Jeżowe, podkarpackie",
    description: (
      <>
        Firma malująca dachy domów, gospodarstw, hal i kościołów w Jeżowem i okolicy. Strona jest
        celowo wąska i konkretna: <strong className="text-ink">jedna usługa, opisana dokładnie</strong>,
        bez rozpraszania uwagi na poboczne tematy. Mycie, gruntowanie i malowanie natryskiem
        wyjaśnione tak, żeby klient rozumiał, za co płaci.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Opis technologii krok po kroku",
      "Realizacje z okolicy",
      "Obszar działania w hero",
      "Wycena po obejrzeniu dachu",
      "Kontakt telefoniczny wyeksponowany",
    ],
    image: "/realizacje/akspol-malowanie.png",
    imageAlt: "Strona internetowa akspol-malowanie.pl — malowanie dachów w Jeżowem",
  },
  {
    name: "Adam Malowanie",
    url: "malowanie-adam.pl",
    href: "https://malowanie-adam.pl",
    branza: "Malowanie i renowacja dachów",
    description: (
      <>
        Usługi dekarskie z naciskiem na renowację dachów agregatami hydrodynamicznymi. Na tej stronie
        wszystko podporządkowane jest jednemu celowi:{" "}
        <strong className="text-ink">doprowadzeniu do bezpłatnej wyceny</strong> — formularz i numer
        telefonu są widoczne od pierwszego ekranu, a obok nich konkretna deklaracja czasu odpowiedzi.
      </>
    ),
    scope: [
      "Projekt i budowa strony od zera",
      "Formularz wyceny w pierwszym ekranie",
      "Sekcja realizacji",
      "Argumenty „dlaczego my\"",
      "Czyszczenie i impregnacja jako usługi",
      "Stały przycisk kontaktu na mobile",
    ],
    image: "/realizacje/malowanie-adam.png",
    imageAlt: "Strona internetowa malowanie-adam.pl — malowanie i renowacja dachów",
  },
];

export default function StronyInternetowePage() {
  return (
    <main className="pt-20">
      {/* H1 zostaje dla wyszukiwarek i czytników ekranu — na ekranie od razu wchodzimy
          w realizacje, bez sekcji wstępnej. */}
      <h1 className="sr-only">Strony internetowe, które zbudowaliśmy dla klientów</h1>

      {/* Realizacje */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {realizacje.map((r, i) => (
            <Fragment key={r.url}>
            {i > 0 && (
              <div className="flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-border" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand/40" />
                <span className="h-px flex-1 bg-border" />
              </div>
            )}

            <article
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

                <div className="flex flex-wrap gap-3">
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
                  {r.caseStudy && (
                    <Link
                      href={r.caseStudy}
                      className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl bg-brand text-white hover:bg-brand-dark transition-colors duration-200"
                    >
                      Case study
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  )}
                </div>
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

            {/* CTA w połowie listy — dłuższe portfolio bez przerwy przewija się bez okazji do kontaktu */}
            {i === 2 && (
              <div className="bg-ink rounded-3xl px-8 py-10 md:px-12 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-white text-xl md:text-2xl font-bold leading-tight mb-2">
                    Twoja branża wygląda podobnie?
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Powiedz, czym się zajmujesz i skąd dziś przychodzą do Ciebie klienci. Odpiszę, co
                    da się zrobić i czy w ogóle warto zaczynać od strony.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="shrink-0 inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Napisz do nas
                </Link>
              </div>
            )}
            </Fragment>
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
