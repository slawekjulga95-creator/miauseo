import Link from "next/link";
import type { Metadata } from "next";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Wizytówka stoi w miejscu – kurs online | MiauSEO",
  description: "8 lekcji wideo o tym, jak naprawić wizytówkę Google Business Profile, która nie rośnie. Konkretne działania, plan naprawczy, dostęp nielimitowany. 500 zł brutto.",
};

const modules = [
  {
    num: "01",
    title: "Audyt wizytówki od zera",
    desc: "Jak przeprowadzić rzetelny audyt profilu GBP — elementy, które najczęściej umykają i jak je oceniać bez narzędzi premium.",
  },
  {
    num: "02",
    title: "Sygnały rankingowe Local Pack",
    desc: "Co tak naprawdę decyduje o pozycji w mapach Google w 2026 roku. Proximity, relevance, prominence — i jak możesz na nie wpływać.",
  },
  {
    num: "03",
    title: "NAP i cytowania w sieci",
    desc: "Dlaczego rozbieżność nazwy, adresu i telefonu potrafi zablokować wzrost pozycji. Jak audytować i naprawiać spójność danych.",
  },
  {
    num: "04",
    title: "Zdjęcia, posty i Q&A",
    desc: "Które elementy profilu Google naprawdę mają wpływ na widoczność — a które są tylko dekoracją. Konkretna odpowiedź z danymi.",
  },
  {
    num: "05",
    title: "Strategia zdobywania opinii",
    desc: "Jak zbierać recenzje bez nachalnego proszenia, jak odpowiadać na negatywne i co zrobić gdy ktoś próbuje zaszkodzić profilowi.",
  },
  {
    num: "06",
    title: "Linkowanie zewnętrzne do GBP",
    desc: "8 sprawdzonych miejsc, gdzie warto umieszczać linki do profilu Google Business — i dlaczego to wciąż ma znaczenie.",
  },
  {
    num: "07",
    title: "Analiza konkurencji w Local Pack",
    desc: "Jak sprawdzić, czym Twoi konkurenci wyprzedzają Cię w mapach — i jak systematycznie zamknąć tę lukę.",
  },
  {
    num: "08",
    title: "Plan naprawczy krok po kroku",
    desc: "Kompletna lista kontrolna i harmonogram działań naprawczych — tak żebyś wyszedł z kursu z gotowym planem, nie kolejnymi pytaniami.",
  },
];

const forWho = [
  {
    yes: true,
    text: "Właściciel firmy lokalnej, który sam zarządza wizytówką Google",
  },
  {
    yes: true,
    text: "Marketer lub specjalista, który chce zrozumieć local SEO głębiej",
  },
  {
    yes: true,
    text: "Agencja obsługująca klientów z wizytówkami GBP",
  },
  {
    yes: false,
    text: "Osoby szukające magicznego przycisku — tu jest praca do zrobienia",
  },
  {
    yes: false,
    text: "Firmy bez wizytówki Google — najpierw ją załóż i wróć",
  },
];

const includes = [
  "8 lekcji wideo (140 minut materiału)",
  "Dostęp nielimitowany — wracasz kiedy chcesz",
  "Lista kontrolna do samodzielnego audytu",
  "Plan naprawczy gotowy do wdrożenia",
  "Aktualizacje kursu bez dodatkowych opłat",
];

export default function KursWizytowkaPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:w-7/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Kurs online</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-6">
                Wizytówka stoi w miejscu —{" "}
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">napraw to</span>{" "}
                raz na zawsze.
              </h1>
              <p className="text-zinc-600 text-[17px] leading-relaxed mb-8">
                8 lekcji wideo o tym, jak diagnozować i naprawić wizytówkę Google Business Profile, która nie rośnie. Wychodzisz z gotowym planem działania — nie kolejnymi pytaniami.
              </p>
              <a
                href="#kup"
                className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
              >
                Kup kurs za 500 zł
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="lg:w-5/12 lg:border-l-2 lg:border-brand/20 lg:pl-14 pb-1 space-y-3">
              {includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Dla kogo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Ten kurs jest{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">dla Ciebie</span>
              {" "}jeśli…
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {forWho.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-5 flex items-start gap-4 ${
                  item.yes
                    ? "bg-white border-brand/20"
                    : "bg-zinc-50 border-border opacity-60"
                }`}
              >
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  item.yes ? "bg-brand text-white" : "bg-zinc-200 text-zinc-400"
                }`}>
                  {item.yes ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                </div>
                <p className={`text-sm leading-relaxed font-medium ${item.yes ? "text-ink" : "text-zinc-400"}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moduły */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Program kursu</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Co jest{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">w środku</span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-[15px]">
              8 modułów. Jeden cel. Każdy moduł to konkretne działania — nie teoria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {modules.map((m) => (
              <div key={m.num} className="relative bg-surface rounded-2xl border border-border hover:border-brand hover:shadow-md transition-all duration-200 p-6">
                <div className="absolute top-4 right-5 text-[3.5rem] font-black leading-none text-brand/8 select-none pointer-events-none">
                  {m.num}
                </div>
                <div className="w-8 h-0.5 bg-brand mb-4" />
                <h3 className="text-base font-bold text-ink mb-2 leading-snug pr-8">{m.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cena + zakup */}
      <section id="kup" className="py-20 px-6 bg-ink text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">Kup kurs</span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                Wizytówka stoi w miejscu —{" "}
                <span className="text-brand">napraw to raz na zawsze.</span>
              </h2>
              <ul className="space-y-3 mb-8">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-xs">
                Faktura VAT · Płatność jednorazowa · Dostęp natychmiast po zakupie
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Cena</p>
              <div className="flex items-end justify-center gap-2 mb-1">
                <span className="text-7xl font-black text-ink leading-none">500</span>
                <span className="text-3xl font-bold text-ink mb-2">zł</span>
              </div>
              <p className="text-zinc-400 text-sm mb-8">brutto (z VAT) · jednorazowo</p>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200 text-lg"
              >
                Kup kurs
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-zinc-400 text-xs mt-5">
                Masz pytania?{" "}
                <a href="mailto:kontakt@miauseo.pl" className="text-brand hover:underline font-semibold">
                  Napisz do nas
                </a>{" "}
                — odpiszemy tego samego dnia.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
