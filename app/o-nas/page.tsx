import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "O nas – MiauSEO",
  description: "Poznaj historię MiauSEO. 11 lat doświadczenia w marketingu lokalnym, pozycjonowaniu wizytówki Google i kampaniach reklamowych dla małych i średnich firm.",
};

const benefits = [
  {
    title: "Zawsze wiesz, co się dzieje",
    desc: (
      <>Masz <strong className="font-semibold text-ink">pełny wgląd w każdy etap</strong> i realne efekty naszej pracy. Bez ukrytych kosztów i niejasnych zasad — warunki znasz od pierwszego dnia. To Ty zachowujesz <strong className="font-semibold text-ink">pełną kontrolę</strong> nad swoim projektem.</>
    ),
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Współpraca dopasowana do Ciebie",
    desc: (
      <>Zakres działań <strong className="font-semibold text-ink">dostosowujemy do Twoich potrzeb</strong> i bieżącej sytuacji firmy. Chcesz coś zmienić albo przyspieszyć? Reagujemy na bieżąco. <strong className="font-semibold text-ink">Nie narzucamy sztywnego modelu</strong>, w który musisz się wpasować.</>
    ),
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: "Efekty widzisz bez pytania",
    desc: (
      <>Regularnie dostajesz <strong className="font-semibold text-ink">aktualizacje i konkretne wyniki</strong> — nie musisz dopominać się o raporty ani sprawdzać, czy coś się dzieje. Sami dbamy o to, <strong className="font-semibold text-ink">żebyś był na bieżąco</strong> na każdym etapie.</>
    ),
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    title: "Jedna osoba, która Cię zna",
    desc: (
      <>Masz <strong className="font-semibold text-ink">swojego opiekuna</strong>, który prowadzi Twój projekt od początku do końca. Nie przechodzisz między działami ani konsultantami. Zawsze wiesz, <strong className="font-semibold text-ink">do kogo się zgłosić</strong> — i kto odpowiada za Twoje wyniki.</>
    ),
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
];

const stages = [
  {
    num: "01",
    title: "Bezpłatna konsultacja",
    desc: "Rozmawiamy o Twojej firmie, branży i celach. Analizujemy obecną sytuację w Google i pokazujemy, co można poprawić. Zero zobowiązań.",
  },
  {
    num: "02",
    title: "Strategia i wycena",
    desc: "Przygotowujemy indywidualny plan działania dopasowany do Twojego rynku i budżetu. Wszystko transparentnie – wiesz za co płacisz.",
  },
  {
    num: "03",
    title: "Wdrożenie",
    desc: "Przejmujemy optymalizację wizytówki, kampanie reklamowe i całą komunikację. Ty skupiasz się na prowadzeniu firmy.",
  },
  {
    num: "04",
    title: "Raportowanie i optymalizacja",
    desc: "Co tydzień raport z wyników. Co miesiąc rozmowa o strategii. Optymalizujemy na bieżąco – żadnego czekania na efekty.",
  },
];


export default function ONasPage() {
  return (
    <main className="pt-20">

      {/* ── Co zyskujesz ze współpracy ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                Twoje korzyści
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
                Dlaczego klienci wybierają{" "}
                <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                  współpracę z nami
                </span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
                Współpraca, która jest <strong className="font-semibold text-ink">wygodna, bezpieczna i przejrzysta</strong>. Bez ukrytych zasad i sztywnych ram — z jasnym podziałem odpowiedzialności i realnymi efektami, które widzisz na bieżąco.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 benefity w siatce */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 75}>
                <div className="group h-full bg-white rounded-2xl p-7 border border-border hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-ink mb-3 leading-snug">{b.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Wyróżniony benefit — Zero automatycznych przedłużeń */}
          <ScrollReveal delay={100}>
            <div className="relative mt-6 overflow-hidden rounded-3xl bg-ink text-white p-9 sm:p-12">
              {/* subtelna poświata brandu */}
              <div className="pointer-events-none absolute -top-24 -right-16 w-80 h-80 rounded-full bg-brand/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-brand/10 blur-3xl" />

              <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                <div className="flex items-start gap-6 flex-1">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand/15 text-brand flex items-center justify-center ring-1 ring-brand/25">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11.5 14.5 16 9.5" />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-3">
                      Nasza obietnica
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-4">
                      Zero automatycznych przedłużeń
                    </h3>
                    <p className="text-white/70 leading-relaxed max-w-2xl">
                      Nie stosujemy ukrytych zapisów ani cichego odnawiania usług. O kontynuacji współpracy
                      decydujesz <strong className="font-semibold text-white">wyłącznie Ty</strong> — świadomie i bez presji.
                      Zostajesz z nami dlatego, że <strong className="font-semibold text-white">widzisz efekty</strong>, a nie
                      dlatego, że umowa sama się przedłużyła.
                    </p>
                  </div>
                </div>

                <Link
                  href="/kontakt"
                  className="shrink-0 inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-7 py-4 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap w-fit"
                >
                  Porozmawiajmy o współpracy
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Etapy współpracy ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Proces
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Etapy{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                współpracy
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s) => (
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

      {/* ── Podsumowanie + kontakt ── */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                Podsumowanie
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                Gotowi, żeby Twoja firma{" "}
                <span className="text-brand">pojawiała się pierwsza?</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                11 lat doświadczenia, setki zoptymalizowanych wizytówek i jedno proste podejście:
                robimy to, co działa. Bez zbędnych obietnic, bez ukrytych kosztów, bez długoletnich umów.
                Skontaktuj się z nami i zacznijmy od bezpłatnej analizy Twojej wizytówki Google.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">Telefon</p>
                    <a href="tel:+48455571349" className="font-semibold hover:text-brand transition-colors">+48 455 571 349</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">E-mail</p>
                    <a href="mailto:slawomir@miauseo.pl" className="font-semibold hover:text-brand transition-colors">slawomir@miauseo.pl</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm">
                Chcesz zobaczyć jak wyglądają efekty naszej pracy? Sprawdź stronę z wynikami kampanii
                i dowiedz się, jakie rezultaty osiągamy dla firm podobnych do Twojej.
              </p>
              <Link
                href="/pozycjonowanie-wizytowki-google"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl transition-colors duration-200 text-sm w-fit"
              >
                Pozycjonowanie wizytówki Google
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
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
