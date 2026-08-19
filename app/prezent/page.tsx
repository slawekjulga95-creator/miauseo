import type { Metadata } from "next";
import Image from "next/image";

/**
 * Landing wysyłany wyłącznie w mailu. Nie ma go w menu, w stopce ani w sitemapie,
 * dlatego dostaje noindex — ma żyć tylko pod adresem podanym w wiadomości.
 */
export const metadata: Metadata = {
  title: "Strona internetowa w prezencie | MiauSEO",
  description:
    "Oferta indywidualna: przy współpracy budujemy stronę internetową bez opłaty za wykonanie, razem z podstronami lokalizacyjnymi. Strona zostaje Pana własnością.",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: "https://miauseo.pl/prezent" },
};

const TELEFON = "+48 455 571 349";
const TELEFON_HREF = "tel:+48455571349";

const wZestawie = [
  {
    tytul: "Projekt i wykonanie od zera",
    opis: "Bez gotowych szablonów. Kolory i układ wyprowadzamy z tego, co Pan już ma: logo, auta, ubrań roboczych, zdjęć z realizacji.",
  },
  {
    tytul: "Teksty na wszystkie podstrony",
    opis: "Piszemy je my, po rozmowie z Panem. Nie musi Pan nic wypełniać ani wysyłać opisów usług.",
  },
  {
    tytul: "Obróbka Pana zdjęć",
    opis: "Zdjęcia z telefonu w zupełności wystarczą. Kadrowanie, prostowanie i kompresję bierzemy na siebie.",
  },
  {
    tytul: "Podstrona pod każdą usługę",
    opis: "Ktoś szukający malowania dachu wpisuje w Google coś zupełnie innego niż ktoś z zarośniętym podjazdem. Każda usługa dostaje swoje miejsce.",
  },
  {
    tytul: "Podstrony lokalizacyjne",
    opis: "Osobny adres dla każdej miejscowości, w której Pan pracuje. To ta część, która najmocniej rozszerza zasięg w wynikach lokalnych.",
  },
  {
    tytul: "Telefon wyeksponowany wszędzie",
    opis: "Numer w nagłówku, w treści i w przyklejonym pasku na telefonie. Strona ma dzwonić, a nie zbierać wyświetlenia.",
  },
  {
    tytul: "Wersja mobilna traktowana serio",
    opis: "Większość Pana klientów wejdzie z telefonu, więc od tego zaczynamy, a nie kończymy.",
  },
  {
    tytul: "Podpięcie wizytówki Google",
    opis: "Strona i wizytówka mają mówić to samo: ta sama nazwa, ten sam adres, ten sam numer. Google to sprawdza.",
  },
];

const kroki = [
  {
    nr: "01",
    tytul: "Rozmowa telefoniczna",
    opis: "Kilkanaście minut. Pyta Pan o wszystko, my pytamy o zakres usług i miejscowości, w których Pan pracuje.",
  },
  {
    nr: "02",
    tytul: "Ustalamy zasady współpracy",
    opis: "Strona powstaje w ramach współpracy nad widocznością firmy w Google. Warunki mówimy wprost i na spokojnie, bez zobowiązania po rozmowie.",
  },
  {
    nr: "03",
    tytul: "Budujemy stronę",
    opis: "Pana rola to przesłanie zdjęć i jedna rozmowa o tym, co Pan robi. Resztę, łącznie z tekstami, robimy my.",
  },
  {
    nr: "04",
    tytul: "Strona rusza i zostaje u Pana",
    opis: "Serwis jest Pana własnością od pierwszego dnia. Nie ma tu żadnej dzierżawy ani wynajmu strony.",
  },
];

const przyklady = [
  {
    nazwa: "UMYJEMY Morusiewicz",
    url: "umyjemy-morusiewicz.pl",
    href: "https://umyjemy-morusiewicz.pl",
    branza: "Mycie ciśnieniowe i malowanie dachów",
    obraz: "/realizacje/umyjemy-morusiewicz.png",
    opis:
      "Materiałem wyjściowym było kilkadziesiąt zdjęć z telefonu właściciela. Kolory strony wyszły z oklejenia jego busa.",
  },
  {
    nazwa: "Skup Aut Syców",
    url: "skupaut-sycow.pl",
    href: "https://skupaut-sycow.pl",
    branza: "Skup aut, złomowanie i pomoc drogowa",
    obraz: "/realizacje/skupaut-sycow.png",
    opis:
      "Dwadzieścia podstron lokalizacyjnych, każda pod inną miejscowość w promieniu trzydziestu kilometrów od bazy.",
  },
  {
    nazwa: "HydroNówka",
    url: "hydronowka.pl",
    href: "https://hydronowka.pl",
    branza: "Czyszczenie ciśnieniowe kostki i elewacji",
    obraz: "/realizacje/hydronowka.png",
    opis:
      "Jednoosobowa firma, która wcześniej działała tylko z ogłoszeń. Strona zebrała usługi, ceny i teren działania w jedno miejsce.",
  },
  {
    nazwa: "Rozluźnij Się",
    url: "rozluznijsie.pl",
    href: "https://rozluznijsie.pl",
    branza: "Gabinet masażu w Poznaniu",
    obraz: "/realizacje/rozluznijsie.png",
    opis:
      "Przepisana ze starego serwisu na nowo: pięćdziesiąt trzy podstrony, osobne strony zabiegów i dzielnic z dojazdem.",
  },
];

const pytania = [
  {
    p: "Czy naprawdę nie zapłacę za wykonanie strony?",
    o: "Nie. Za samo zaprojektowanie i zbudowanie serwisu nie wystawiamy faktury. Strona powstaje jako część współpracy nad widocznością firmy, bo bez niej ta praca ma mocno związane ręce.",
  },
  {
    p: "Dlaczego robią to Państwo za darmo?",
    o: "Bo to nam się opłaca. Pozycjonowanie wizytówki i firmy w Google działa dużo lepiej, kiedy jest do czego kierować ludzi. Wolimy zbudować dobrą stronę na start, niż potem tłumaczyć, dlaczego efekty są słabsze, niż mogłyby być.",
  },
  {
    p: "Czyją własnością jest gotowa strona?",
    o: "Pana. Nie wynajmujemy stron i nie trzymamy klientów na uwięzi. Jeżeli kiedykolwiek zakończymy współpracę, serwis zostaje tam, gdzie był, i działa dalej.",
  },
  {
    p: "Co jeśli po jakimś czasie zrezygnuję?",
    o: "Strona nie znika i nie przestaje działać. Zasady rozstania omawiamy wprost przy pierwszej rozmowie, żeby nie było potem niespodzianek.",
  },
  {
    p: "Ile to trwa?",
    o: "Zależy od liczby usług i miejscowości. Konkretny termin podajemy po rozmowie, kiedy wiemy, jak duży ma być serwis.",
  },
  {
    p: "Co z domeną i hostingiem?",
    o: "To jedyne rzeczy spoza naszej pracy, więc mówimy o nich osobno i wprost przy ustalaniu szczegółów. Nic nie pojawia się później w rachunku bez zapowiedzi.",
  },
  {
    p: "Ile pracy jest po mojej stronie?",
    o: "Jedna rozmowa i zdjęcia z telefonu. Nic więcej nie jest potrzebne, żeby ruszyć.",
  },
];

export default function PrezentPage() {
  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="px-6 pt-28 pb-16 md:pt-32 md:pb-20 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-brand bg-white border border-border rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-brand" aria-hidden="true" />
            Oferta indywidualna
          </p>

          <h1 className="mt-7 text-3xl md:text-5xl font-black leading-tight text-ink">
            Zbudujemy Panu stronę internetową
            <br className="hidden md:block" /> bez opłaty za wykonanie
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-zinc-600">
            Przy współpracy nad widocznością firmy w Google robimy stronę od zera, razem z{" "}
            <strong className="text-ink">podstronami dla każdej miejscowości</strong>, w której Pan
            pracuje. <strong className="text-ink">Gotowy serwis zostaje Pana własnością</strong>,
            niezależnie od tego, co wydarzy się dalej.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={TELEFON_HREF}
              className="inline-flex items-center justify-center gap-2 bg-brand text-white hover:bg-brand-dark font-bold rounded-xl px-8 py-4 transition-colors"
            >
              Zadzwoń: {TELEFON}
            </a>
            <a
              href="#przyklady"
              className="inline-flex items-center justify-center border-2 border-ink text-ink hover:bg-ink hover:text-white font-bold rounded-xl px-8 py-4 transition-colors"
            >
              Zobacz, co zbudowaliśmy
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────── NA CZYM TO POLEGA ───────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">Bez drobnego druku</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink max-w-2xl">
            Na czym dokładnie polega ten układ
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
            Strona internetowa nie jest u nas osobnym produktem do sprzedania. Jest narzędziem, na
            którym pracuje wszystko, co robimy dla Pana firmy w Google. Dlatego wolimy zbudować ją
            sami i porządnie, zamiast liczyć za nią osobno.
          </p>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {kroki.map((k) => (
              <li
                key={k.nr}
                className="border border-border rounded-2xl p-6 hover:border-brand/50 transition-colors"
              >
                <span className="text-sm font-black text-brand">{k.nr}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{k.tytul}</h3>
                <p className="mt-2 text-zinc-600 leading-relaxed">{k.opis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── PODSTRONY LOKALIZACYJNE ────────────────── */}
      <section className="px-6 py-20 bg-ink text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">
            Tu leży cała siła
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-black max-w-3xl">
            Jedna strona to jedno miasto. Kilkanaście podstron to kilkanaście szans
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Klient rzadko wpisuje w Google samą usługę. Wpisuje usługę i miejscowość:{" "}
                <span className="text-white font-semibold">
                  „mycie kostki Suwałki”, „pomoc drogowa Kępno”, „masaż Winogrady”
                </span>
                . Strona, która o danej miejscowości nie mówi ani słowa, ma w takim zapytaniu bardzo
                słabą pozycję startową.
              </p>
              <p>
                Dlatego budujemy{" "}
                <strong className="text-white">osobną podstronę dla każdej miejscowości</strong>, w
                której Pan realnie pracuje. Każda ma własny adres, własny tytuł i własny tekst
                napisany pod tę okolicę, a nie skopiowany dwadzieścia razy.
              </p>
              <p>
                Do tego dochodzi podstrona pod każdą usługę. W praktyce zamiast jednej strony
                walczącej o wszystko dostaje Pan{" "}
                <strong className="text-white">kilkanaście osobnych wejść</strong> do firmy.
              </p>
            </div>

            <div className="border border-white/15 rounded-2xl p-6 bg-white/5">
              <p className="text-xs font-bold tracking-[0.14em] uppercase text-brand">
                Przykład z naszej realizacji
              </p>
              <p className="mt-3 text-sm text-zinc-400">
                Skup aut i pomoc drogowa w Sycowie, dwadzieścia podstron lokalizacyjnych:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Syców",
                  "Międzybórz",
                  "Twardogóra",
                  "Kępno",
                  "Bralin",
                  "Rychtal",
                  "Perzów",
                  "Oleśnica",
                  "Bierutów",
                  "Baranów",
                ].map((m) => (
                  <span
                    key={m}
                    className="text-sm border border-white/20 rounded-full px-3 py-1 text-zinc-200"
                  >
                    {m}
                  </span>
                ))}
                <span className="text-sm text-zinc-500 px-1 py-1">i kolejne dziesięć</span>
              </div>
              <p className="mt-5 text-sm text-zinc-400 leading-relaxed">
                Każda z nich odpowiada na inne zapytanie i każda prowadzi do tego samego telefonu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── CO W ZESTAWIE ───────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">Zakres</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink max-w-2xl">
            Co dostaje Pan w tej stronie
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {wZestawie.map((p) => (
              <div key={p.tytul} className="border border-border rounded-2xl p-6">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand/10 text-brand font-black"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{p.tytul}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{p.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── PRZYKŁADY ──────────────────────── */}
      <section id="przyklady" className="px-6 py-20 bg-surface scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">Realizacje</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink max-w-2xl">
            Strony, które zbudowaliśmy dla takich firm jak Pana
          </h2>
          <p className="mt-4 text-zinc-600 max-w-2xl leading-relaxed">
            Wszystkie działają i wszystkie należą do swoich właścicieli. Można je otworzyć i
            sprawdzić samemu.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {przyklady.map((r) => (
              <a
                key={r.url}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-border rounded-2xl overflow-hidden hover:border-brand/60 transition-colors"
              >
                <div className="relative aspect-[16/10] bg-zinc-100">
                  <Image
                    src={r.obraz}
                    alt={`Strona internetowa ${r.url} zbudowana przez MiauSEO`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.12em] uppercase text-zinc-500">
                    {r.branza}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-ink group-hover:text-brand transition-colors">
                    {r.nazwa}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{r.opis}</p>
                  <p className="mt-4 text-sm font-bold text-brand">{r.url} →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CO PO PANA STRONIE ───────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">Pana rola</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink">
              Tyle jest do zrobienia po Pana stronie
            </h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Wiemy, że nie ma Pan czasu na projekt informatyczny. Dlatego lista jest krótka i
              kończy się na jednej rozmowie.
            </p>
          </div>

          <ul className="space-y-4">
            {[
              "Jedna rozmowa telefoniczna o tym, co Pan robi i gdzie.",
              "Zdjęcia z telefonu: realizacje, sprzęt, auto, ekipa.",
              "Logo, jeżeli Pan je ma. Jeżeli nie, damy sobie radę bez niego.",
              "Akceptacja gotowej strony przed uruchomieniem.",
            ].map((t) => (
              <li key={t} className="flex gap-3 border-b border-border pb-4 last:border-0">
                <span className="text-brand font-black" aria-hidden="true">
                  ✓
                </span>
                <span className="text-zinc-700 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────── FAQ ──────────────────────────── */}
      <section className="px-6 py-20 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-brand">
            Zanim Pan zadzwoni
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-black text-ink">
            Pytania, które zwykle padają pierwsze
          </h2>

          <div className="mt-8 space-y-3">
            {pytania.map((f, i) => (
              <details
                key={f.p}
                open={i === 0}
                className="group bg-white border border-border rounded-2xl px-6 py-5 open:border-brand/50"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer font-bold text-ink list-none">
                  {f.p}
                  <span
                    className="shrink-0 text-brand text-xl leading-none transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-zinc-600 leading-relaxed">{f.o}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
