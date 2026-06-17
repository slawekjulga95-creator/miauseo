import type { Metadata } from "next";
import Link from "next/link";
import ContactFormWrapper from "@/components/ContactFormWrapper";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Kontakt – MiauSEO | Bezpłatna konsultacja",
  description:
    "Skontaktuj się z MiauSEO. Bezpłatna konsultacja dotycząca pozycjonowania wizytówki Google, SEO strony, Google Ads i Meta Ads. Odpowiadamy w ciągu kilku godzin.",
};

const steps = [
  {
    num: "01",
    title: "Wypełniasz formularz",
    desc: "Kilka słów o firmie i sytuacji – im więcej napiszesz, tym lepiej przygotuję się do rozmowy.",
  },
  {
    num: "02",
    title: "Oddzwaniam lub piszę",
    desc: "W ciągu kilku godzin roboczych kontaktuję się z Tobą i umawiamy dogodny termin rozmowy.",
  },
  {
    num: "03",
    title: "Konsultacja 30–45 min",
    desc: "Analizujemy razem Twoją sytuację. Zero sprzedawania na siłę – tylko konkretna diagnoza i plan.",
  },
];

const faqs = [
  {
    q: "Czy konsultacja jest naprawdę bezpłatna?",
    a: "Tak, bez żadnych warunków. Nie musisz podjąć decyzji o współpracy. Rozmowa to po prostu wspólne spojrzenie na Twoją sytuację.",
  },
  {
    q: "Jak szybko oddzwonisz?",
    a: "Zazwyczaj w ciągu kilku godzin roboczych. W weekendy czas może być dłuższy — wtedy odpisuję w poniedziałek rano.",
  },
  {
    q: "Czy pracujesz z każdą branżą?",
    a: "Specjalizuję się w firmach lokalnych — usługi, handel, rzemiosło. Jeśli Twoja branża jest inna, powiem Ci szczerze czy mogę pomóc.",
  },
  {
    q: "Od czego zależy cena współpracy?",
    a: "Od zakresu działań, konkurencji w Twojej branży i lokalizacji. Na konsultacji omówimy to konkretnie — bez ogólnikowych cenników.",
  },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Kontakt</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Porozmawiajmy{" "}
                <span className="text-brand">o Twojej firmie.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Bezpłatna konsultacja bez zobowiązań. Sprawdzamy razem, czy i jak możemy Ci pomóc
                — <strong className="text-ink font-semibold">bez sprzedawania na siłę,</strong>{" "}
                tylko konkretna diagnoza i plan działania.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#formularz" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Napisz do mnie
                </a>
                <a href="tel:+48455571349" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  +48 455 571 349
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Dlaczego warto zadzwonić?</p>
              <div className="space-y-5">
                {[
                  { bold: "Bezpłatna analiza wizytówki Google", rest: " — sprawdzamy razem co blokuje Twoją widoczność i co można poprawić od zaraz." },
                  { bold: "Zero zobowiązań", rest: " — konsultacja to rozmowa, nie sprzedaż. Decyzja zawsze po Twojej stronie." },
                  { bold: "Odpowiedź w kilka godzin", rest: " — nie zostawiam wiadomości bez odpowiedzi. Pon–Pt, 9:00–17:00." },
                  { bold: "11 lat doświadczenia", rest: " — setki zoptymalizowanych wizytówek, realne wyniki dla firm z różnych branż." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed"><strong className="text-ink">{item.bold}</strong>{item.rest}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Formularz + kroki ── */}
      <section id="formularz" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Formularz */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Formularz</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
                Napisz{" "}
                <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                  do mnie
                </span>
              </h2>
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                <ContactFormWrapper />
              </div>
            </div>

            {/* Jak wygląda współpraca */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Proces</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
                Jak wygląda{" "}
                <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                  współpraca?
                </span>
              </h2>

              <div className="space-y-5 mb-10">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-5 items-start border-l-2 border-brand/20 pl-5">
                    <span className="text-[2.5rem] font-bold text-brand/20 leading-none shrink-0 tabular-nums">{step.num}</span>
                    <div>
                      <p className="font-bold text-ink mb-1">{step.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wide">Telefon</p>
                    <a href="tel:+48455571349" className="text-sm font-semibold text-ink hover:text-brand transition-colors">+48 455 571 349</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wide">E-mail</p>
                    <a href="mailto:slawomir@miauseo.pl" className="text-sm font-semibold text-ink hover:text-brand transition-colors">slawomir@miauseo.pl</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wide">Godziny pracy</p>
                    <p className="text-sm font-semibold text-ink">Pon – Pt, 9:00 – 17:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wide">NIP</p>
                    <p className="text-sm font-semibold text-ink">6070100514</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Etapy — karty ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Etapy</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Co się dzieje po{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                wysłaniu?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative bg-surface rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg transition-all duration-200">
                <div className="absolute top-4 right-5 text-[4rem] font-bold leading-none text-brand/10 select-none pointer-events-none">
                  {s.num}
                </div>
                <div className="w-10 h-0.5 bg-brand mb-5" />
                <h3 className="text-base font-bold text-ink mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + podsumowanie ── */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-8">
                Zanim napiszesz –{" "}
                <span className="text-brand">może tu znajdziesz odpowiedź</span>
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-l-2 border-brand/40 pl-5">
                    <p className="font-bold text-white mb-1 text-sm">{faq.q}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-brand">Znajdziesz mnie też na</p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:text-brand hover:bg-white/20 transition-all duration-150"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-white/70 leading-relaxed text-sm mb-6">
                  Wolisz od razu sprawdzić, co robimy? Przejrzyj stronę usług i dowiedz się,
                  jakie rezultaty osiągamy dla firm podobnych do Twojej.
                </p>
                <Link
                  href="/uslugi/wizytowka-google"
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl transition-colors duration-200 text-sm"
                >
                  Pozycjonowanie wizytówki Google
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="h-px bg-white/10" />

              <p className="text-white/40 text-xs">
                Elastyczna umowa · Bez długoletnich zobowiązań · Raport co tydzień
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
