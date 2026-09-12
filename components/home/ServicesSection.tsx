import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Pozycjonowanie strony",
    href: "/uslugi/pozycjonowanie-strony",
    badge: "Najpopularniejsze",
    desc: (
      <>
        Wyprowadzamy Twoją stronę na <strong className="font-semibold text-ink">wysokie pozycje w Google</strong> na
        frazy, których naprawdę szukają klienci. Efekt to <strong className="font-semibold text-ink">stały, darmowy ruch</strong>,
        który nie znika, gdy wyłączysz reklamy.
      </>
    ),
    photo: "/uslugi/seo-pozycjonowanie.jpg",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Wizytówka Google",
    href: "/uslugi/wizytowka-google",
    badge: null,
    desc: (
      <>
        Dbamy o to, żeby Twoja firma była <strong className="font-semibold text-ink">widoczna w Mapach Google</strong>,
        gdy klienci szukają usług w okolicy. Zyskujesz <strong className="font-semibold text-ink">więcej telefonów, tras i wizyt</strong>,
        także bez własnej strony internetowej.
      </>
    ),
    photo: "/uslugi/wizytowka-google.jpg",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    href: "/uslugi/google-ads",
    badge: null,
    desc: (
      <>
        Docieramy do klientów <strong className="font-semibold text-ink">dokładnie w momencie</strong>, gdy wpisują
        Twoją usługę w Google. Pilnujemy budżetu, żeby szedł na <strong className="font-semibold text-ink">realne zapytania</strong>,
        a nie na puste kliknięcia.
      </>
    ),
    photo: "/uslugi/google-ads.jpg",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

const items = [
  {
    label: "Transparentność",
    title: ["Zero", " ukrytych kosztów"],
    paragraphs: [
      <>
        Kot nigdy nie ukryje, że jest głodny. My też nic nie ukrywamy.{" "}
        <strong className="font-semibold text-ink">Znasz cenę zanim podpiszesz cokolwiek.</strong> Żadnych
        niespodziewanych faktur, ukrytych opłat ani kosztów, o których dowiadujesz się po czasie.
      </>,
      <>
        Masz pytanie, dzwonisz. Chcesz wiedzieć co się dzieje z budżetem, piszesz.{" "}
        <strong className="font-semibold text-ink">Odpowiadamy szybko i mówimy wprost.</strong> Bez agencyjnego
        żargonu, bez czekania tygodniami na raport. Jesteś w kontakcie z człowiekiem, który faktycznie
        prowadzi Twoje konto.
      </>,
      <>
        Konta reklamowe należą do Ciebie, nie do nas.{" "}
        <strong className="font-semibold text-ink">Dostęp masz zawsze, do wszystkiego.</strong> Jeśli
        odejdziesz, zabierasz historię kampanii, dane i wyniki. Zero uzależnienia od agencji.
      </>,
    ],
    photo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?fit=crop&crop=center",
    alt: "Transparentność i zero ukrytych kosztów",
    reverse: true,
    cta: { label: "Referencje", href: "/referencje" },
  },
  {
    label: "Komunikacja",
    title: ["Cykliczny", " kontakt"],
    paragraphs: [
      <>
        Koty mają swojego człowieka. Ty też masz swojego opiekuna.{" "}
        <strong className="font-semibold text-ink">Jeden kontakt, jedno numer, jedna osoba</strong> która
        zna Twoją sytuację od pierwszej rozmowy. Bez przerzucania między konsultantami i tłumaczenia
        wszystkiego od nowa.
      </>,
      <>
        Raporty nie są po to, żeby zaśmiecić skrzynkę.{" "}
        <strong className="font-semibold text-ink">Dostajesz konkretne liczby i wnioski</strong> — co
        zadziałało, co nie i co robimy dalej. Żadnych ogólnikowych podsumowań, które nic nie mówią.
      </>,
      <>
        Zmiana w algorytmie Google, nowa szansa do wykorzystania, coś wartego Twojej uwagi?{" "}
        <strong className="font-semibold text-ink">Piszemy pierwsi</strong>. Nie czekamy aż zapytasz.
        To nie jest standard w branży.
      </>,
    ],
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?fit=crop&crop=center",
    alt: "Cykliczny kontakt z klientem",
    reverse: false,
    cta: { label: "Kontakt", href: "/kontakt" },
  },
];

/* Mini-podglądy tego, co klient realnie dostaje w Google. Rysowane w HTML,
   bez zdjęć i bez stocka — ten sam język co siatka i krzywa w hero. */

function PodgladSerp() {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-brand/30 bg-brand/[0.06] px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="text-[0.6rem] font-bold text-white bg-brand rounded px-1.5 py-0.5">1</span>
          <span className="h-2 w-28 rounded-full bg-brand/70" />
        </div>
        <span className="mt-1.5 block h-1.5 w-full rounded-full bg-ink/10" />
      </div>
      {[2, 3].map((n) => (
        <div key={n} className="rounded-lg border border-border px-3 py-2 opacity-60">
          <div className="flex items-center gap-2">
            <span className="text-[0.6rem] font-bold text-zinc-400">{n}</span>
            <span className="h-2 w-20 rounded-full bg-ink/15" />
          </div>
          <span className="mt-1.5 block h-1.5 w-full rounded-full bg-ink/[0.07]" />
        </div>
      ))}
    </div>
  );
}

function PodgladWizytowki() {
  return (
    <div className="rounded-lg border border-border bg-white p-3">
      <div className="flex items-start gap-2.5">
        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <span className="block h-2 w-24 rounded-full bg-ink/70" />
          <div className="mt-2 flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#FF6A00" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
            ))}
            <span className="ml-1 text-[0.65rem] font-bold text-ink">4,9</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="flex-1 rounded-md bg-brand py-1.5 text-center text-[0.62rem] font-bold text-white">Zadzwoń</span>
        <span className="flex-1 rounded-md border border-border py-1.5 text-center text-[0.62rem] font-bold text-zinc-500">Trasa</span>
      </div>
    </div>
  );
}

function PodgladAds() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-lg border border-border bg-white px-3 py-2.5">
        <span className="text-[0.58rem] font-bold uppercase tracking-wider text-ink">Sponsorowane</span>
        <span className="mt-2 block h-2 w-24 rounded-full bg-brand/70" />
        <span className="mt-1.5 block h-1.5 w-full rounded-full bg-ink/10" />
      </div>
      <div className="flex items-end gap-1.5 h-12 px-1">
        {[35, 52, 44, 70, 88, 100].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, background: i > 3 ? "var(--color-brand)" : "rgba(255,106,0,0.28)" }}
          />
        ))}
      </div>
    </div>
  );
}

const PODGLADY = [<PodgladSerp key="serp" />, <PodgladWizytowki key="gbp" />, <PodgladAds key="ads" />];

export function WhatWeDo() {
  return (
    <div className="relative isolate overflow-hidden py-24 bg-white border-b border-border">
      <div aria-hidden="true" className="tekstura-siatka absolute inset-0 -z-10" />
      <div aria-hidden="true" className="tekstura-ziarno absolute inset-0 -z-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2
              className="text-ink"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12 }}
            >
              Czym się <span style={{ color: "var(--color-brand)" }}>zajmujemy</span>
            </h2>
            <p className="text-zinc-500 mt-5 leading-relaxed" style={{ maxWidth: "52ch" }}>
              <strong className="font-semibold text-ink">Kompleksowy marketing lokalny</strong> — od wizytówki
              Google po kampanie reklamowe. Wybierz obszar, w którym chcesz rosnąć.
            </p>
          </div>
        </ScrollReveal>

        {/* Bez kafelków ze zdjęciami: trzy kolumny rozdzielone włoskową linią,
            ta sama kreska co siatka w hero. */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 75} className="h-full">
              <Link
                href={s.href}
                className={`group flex flex-col h-full rounded-2xl bg-white p-6 transition-all duration-200 hover:shadow-[0_24px_50px_-34px_rgba(17,17,17,0.5)] ${
                  s.badge ? "border-2 border-brand" : "border border-border hover:border-brand/50"
                }`}
              >
                {/* Podgląd efektu, nie ikonka: to widzi klient w Google */}
                {/* Stała wysokość, żeby tytuły w trzech kolumnach stały w jednej linii */}
                <div className="rounded-xl bg-surface/70 border border-border p-4 h-[196px] flex flex-col justify-center">
                  {PODGLADY[i]}
                </div>

                <h3 className="mt-6 text-[1.3rem] font-bold text-ink tracking-[-0.02em] flex items-center gap-3 flex-wrap">
                  {s.title}
                  {s.badge && (
                    <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand border border-brand/35 rounded px-2 py-0.5 whitespace-nowrap">
                      {s.badge}
                    </span>
                  )}
                </h3>

                <p className="mt-4 text-[0.95rem] text-zinc-500 leading-relaxed">{s.desc}</p>

                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-brand transition-colors">
                  Dowiedz się więcej
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function GBPScoreCTA() {
  return (
    <div className="py-10 bg-surface border-y border-brand/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 border-2 border-dashed border-brand/30 rounded-2xl p-8 bg-brand/5">
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
      <ChecklistaCTA />
      {items.map((item, i) => (
        <div key={i}>
          <div
            className={`relative py-20 overflow-hidden ${i % 2 === 1 ? "bg-surface" : "bg-white"}`}
          >
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
                      <Image
                        src={item.photo}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>
          </div>
          {i === items.length - 1 && <GBPScoreCTA key="gbp-score-cta" />}
        </div>
      ))}
    </section>
  );
}
