import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Wizytówka Google",
    href: "/uslugi/wizytowka-google",
    desc: "Top 3 w Mapach Google i Local Pack. Więcej połączeń i klientów z Twojej okolicy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Pozycjonowanie strony",
    href: "/uslugi/pozycjonowanie-strony",
    desc: "Wyższe pozycje w organicznych wynikach Google i stały ruch na stronie.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Google Ads",
    href: "/uslugi/google-ads",
    desc: "Kampanie, które docierają do klientów gotowych do zakupu — dokładnie wtedy, gdy szukają.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    title: "Facebook / Meta Ads",
    href: "/uslugi/meta-ads",
    desc: "Reklamy na Facebooku i Instagramie, które budują zasięg i sprzedaż wśród lokalnych odbiorców.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "TikTok Ads",
    href: "/uslugi/tiktok-ads",
    desc: "Zasięgi i sprzedaż na najszybciej rosnącej platformie. Krótkie wideo, realne wyniki.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.84 1.55V6.79a4.85 4.85 0 0 1-1.07-.1z" />
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

function WhatWeDo() {
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
              Kompleksowy marketing lokalny — od wizytówki Google po kampanie reklamowe.
              Wybierz obszar, w którym chcesz rosnąć.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.href} delay={i * 75}>
              <Link
                href={s.href}
                className="group flex flex-col h-full bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-5">{s.desc}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Dowiedz się więcej
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
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
      <WhatWeDo />
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
