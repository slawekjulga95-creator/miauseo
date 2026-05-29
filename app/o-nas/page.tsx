import Link from "next/link";
import type { Metadata } from "next";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "O nas – MiauSEO",
  description: "Poznaj historię MiauSEO. 11 lat doświadczenia w marketingu lokalnym, pozycjonowaniu wizytówki Google i kampaniach reklamowych dla małych i średnich firm.",
};

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

      {/* ── Hero ── */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">O firmie</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Poznaj ludzi za MiauSEO.{" "}
                <span className="text-brand">11 lat w marketingu lokalnym.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Nazwa MiauSEO nie jest przypadkowa. Pochodzi z zamiłowania do kotów: zwierząt <strong className="text-ink font-semibold">niezależnych, inteligentnych</strong> i odpornych na sztuczki. Dokładnie tak podchodzimy do pracy z klientami: <strong className="text-ink font-semibold">żadnych trików, tylko realne wyniki.</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/kontakt" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Porozmawiajmy o Twoim biznesie
                </Link>
                <Link href="/uslugi/wizytowka-google" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  Sprawdź ofertę
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Dlaczego MiauSEO?</p>
              <div className="space-y-5">
                {[
                  { bold: "11 lat doświadczenia", rest: " w marketingu lokalnym i kampaniach reklamowych. Setki firm, od jednoosobowych po sieci lokalizacji." },
                  { bold: "Bez długich umów", rest: " — elastyczne warunki współpracy dopasowane do Twoich potrzeb. Bez wiązania na lata." },
                  { bold: "Rozmowa przed ofertą", rest: " — najpierw rozumiem Twój biznes, potem proponuję rozwiązanie. Nie odwrotnie." },
                  { bold: "Pełna transparentność", rest: " — wiesz za co płacisz, co robimy i jakie wyniki to przynosi. Bez marketingowego języka." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed"><strong className="text-ink">{item.bold}</strong>{item.rest}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── O mnie ── */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left – text */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                Nasza historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
                Skąd wzięło się{" "}
                <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                  MiauSEO?
                </span>
              </h2>

              <div className="space-y-5">
                <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                  Nazwa MiauSEO nie jest przypadkowa. Pochodzi z{" "}
                  <strong className="font-semibold text-ink">zamiłowania do kotów</strong> – zwierząt, które są
                  niezależne, inteligentne i nigdy nie dają się nabrać na sztuczki. Dokładnie takie podejście
                  wyznajemy w pracy z klientami: <strong className="font-semibold text-ink">żadnych tricków,
                  tylko realne wyniki</strong>.
                </p>
                <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                  Mam za sobą <strong className="font-semibold text-ink">11 lat doświadczenia w marketingu
                  lokalnym</strong> i kampaniach reklamowych. Przez ten czas współpracowałem z setkami firm –
                  od jednoosobowych działalności po rozbudowane sieci lokalne. Widziałem, co działa, a co tylko
                  wygląda dobrze na raporcie.
                </p>
                <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                  Specjalizujemy się w <strong className="font-semibold text-ink">pozycjonowaniu wizytówki
                  Google</strong> – bo to właśnie tam toczy się walka o lokalnych klientów. Gdy ktoś wpisuje
                  nazwę usługi i miasto, chcemy żebyś to <strong className="font-semibold text-ink">Ty był
                  pierwszy</strong>, nie konkurencja.
                </p>
                <p className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                  Stawiamy na <strong className="font-semibold text-ink">długoterminowe relacje</strong>, nie
                  jednorazowe zlecenia. Dlatego pracujemy w modelu miesięcznym bez długoterminowych umów –
                  jeśli nie dostarczamy wyników, masz pełne prawo odejść. To nas mobilizuje do pracy lepiej
                  niż jakikolwiek kontrakt.
                </p>
              </div>
            </div>

            {/* Right – photo */}
            <div className="relative pr-5 pt-5">
              <div
                className="absolute top-0 right-0 rounded-2xl bg-brand/20"
                style={{ width: "calc(100% - 1.25rem)", height: "calc(100% - 1.25rem)" }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&q=85&fit=crop&crop=top"
                  alt="Założyciel MiauSEO"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
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
                    <a href="tel:+48600000000" className="font-semibold hover:text-brand transition-colors">+48 600 000 000</a>
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
                    <a href="mailto:kontakt@miauseo.pl" className="font-semibold hover:text-brand transition-colors">kontakt@miauseo.pl</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">Godziny pracy</p>
                    <p className="font-semibold">Pon – Pt, 9:00 – 17:00</p>
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
