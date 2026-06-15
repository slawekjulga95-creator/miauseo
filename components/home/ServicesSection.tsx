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
        frazy, których naprawdę szukają klienci. Optymalizujemy treści, szybkość ładowania i strukturę,
        budujemy wartościowe linki i dbamy o techniczne SEO. Efekt? <strong className="font-semibold text-ink">Stały, darmowy ruch</strong>,
        który rośnie miesiąc po miesiącu i nie znika, gdy wyłączysz reklamy.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop&crop=center",
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
        gdy klienci szukają usług w Twojej okolicy. Optymalizujemy profil, kategorie, zdjęcia i opinie, a Ty
        zyskujesz <strong className="font-semibold text-ink">więcej telefonów, tras dojazdu i wizyt</strong>.
        To najprostsza droga do lokalnych klientów — także wtedy, gdy nie masz jeszcze strony internetowej.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80&fit=crop&crop=center",
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
        Twoją usługę w Google. Precyzyjnie dobieramy słowa kluczowe, ustawienia i budżet, a następnie codziennie
        optymalizujemy kampanie. Eliminujemy przepalanie pieniędzy i skupiamy się na{" "}
        <strong className="font-semibold text-ink">realnych zapytaniach i sprzedaży</strong>, a nie pustych kliknięciach.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80&fit=crop&crop=center",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    title: "Facebook / Meta Ads",
    href: "/uslugi/meta-ads",
    badge: null,
    desc: (
      <>
        Prowadzimy reklamy na <strong className="font-semibold text-ink">Facebooku i Instagramie</strong>, które
        trafiają do precyzyjnie dobranych grup odbiorców w Twojej okolicy. Tworzymy przyciągające kreacje,
        testujemy je na bieżąco i skalujemy to, co działa. Budujemy{" "}
        <strong className="font-semibold text-ink">rozpoznawalność marki i stały dopływ zapytań</strong> — nawet
        wtedy, gdy klient nie szukał Cię aktywnie.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80&fit=crop&crop=center",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "TikTok Ads",
    href: "/uslugi/tiktok-ads",
    badge: null,
    desc: (
      <>
        Wykorzystujemy <strong className="font-semibold text-ink">najszybciej rosnącą platformę</strong> w Polsce,
        żeby z krótkim wideo dotrzeć do tysięcy odbiorców. Tworzymy kampanie, które łączą{" "}
        <strong className="font-semibold text-ink">ogromne zasięgi z realną sprzedażą</strong>. To idealny moment,
        żeby wyprzedzić konkurencję, której jeszcze tam nie ma.
      </>
    ),
    photo: null,
    logo: (
      <div className="relative w-20 h-20">
        <svg viewBox="0 0 24 24" fill="#25F4EE" className="absolute inset-0 w-full h-full translate-x-[-3px] translate-y-[3px]">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#FE2C55" className="absolute inset-0 w-full h-full translate-x-[3px] translate-y-[-3px]">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="#ffffff" className="absolute inset-0 w-full h-full">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
        </svg>
      </div>
    ),
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
      </svg>
    ),
  },
  {
    title: "Kursy online",
    href: "/kursy",
    badge: null,
    desc: (
      <>
        Wolisz działać <strong className="font-semibold text-ink">samodzielnie</strong>? Pokazujemy krok po kroku,
        jak pozycjonować wizytówkę Google i prowadzić własne kampanie reklamowe. To{" "}
        <strong className="font-semibold text-ink">konkretna wiedza z praktyki</strong>, bez lania wody — gotowa
        do wdrożenia we własnej firmie od pierwszego dnia.
      </>
    ),
    photo: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80&fit=crop&crop=center",
    logo: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
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

export function WhatWeDo() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Oferta
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Czym się{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                zajmujemy
              </span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-sm">
              <strong className="font-semibold text-ink">Kompleksowy marketing lokalny</strong> — od wizytówki
              Google po kampanie reklamowe. <strong className="font-semibold text-ink">Wybierz obszar, w którym
              chcesz rosnąć.</strong>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 75}>
              <Link
                href={s.href}
                className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ${
                  s.badge ? "border-2 border-brand shadow-lg" : "border border-border hover:border-brand"
                }`}
              >
                {/* Zdjęcie lub logo + gradient + badge z ikoną */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  {s.badge && (
                    <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 bg-brand text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                      </svg>
                      {s.badge}
                    </span>
                  )}
                  {s.logo ? (
                    <div className="absolute inset-0 bg-[#010101] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {s.logo}
                    </div>
                  ) : (
                    <Image
                      src={s.photo as string}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur text-brand flex items-center justify-center shadow-lg">
                    {s.icon}
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white drop-shadow-sm">
                    {s.title}
                  </h3>
                </div>

                {/* Treść */}
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5">{s.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    Dowiedz się więcej
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
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
