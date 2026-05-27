import Link from "next/link";
import type { Metadata } from "next";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Zespół – MiauSEO",
  description: "Poznaj ludzi stojących za MiauSEO. Sławomir Jułga i Dominik Brudnowski — specjaliści od lokalnego SEO i kampanii reklamowych.",
};

const members = [
  {
    name: "Sławomir Jułga",
    role: "Założyciel & Strateg",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=90&fit=crop&crop=top",
    linkedin: "#",
    paragraphs: [
      <>
        Mam za sobą <strong className="font-semibold text-ink">11 lat doświadczenia w marketingu lokalnym</strong> i kampaniach reklamowych. Przez ten czas pracowałem z setkami firm — od jednoosobowych działalności po rozbudowane sieci lokalizacji.
      </>,
      <>
        Specjalizuję się w <strong className="font-semibold text-ink">pozycjonowaniu wizytówki Google Business Profile</strong> i strategii local SEO. Wiem, które sygnały rankingowe mają realny wpływ na widoczność, a które to tylko szum informacyjny.
      </>,
      <>
        MiauSEO zbudowałem z przekonania, że mała firma zasługuje na <strong className="font-semibold text-ink">agencję, która traktuje ją jak partnera</strong> — nie jak kolejny numer w kolejce. Dlatego pracujemy w modelu miesiąc do miesiąca, bez długoletnich umów.
      </>,
    ],
  },
  {
    name: "Dominik Brudnowski",
    role: "Specjalista ds. marketingu",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=90&fit=crop&crop=top",
    linkedin: "#",
    paragraphs: [
      <>
        Ekspert od <strong className="font-semibold text-ink">kampanii Google Ads i Meta Ads</strong> dla lokalnych firm. Specjalizuje się w generowaniu leadów z płatnych kanałów przy zachowaniu optymalnego kosztu pozyskania klienta.
      </>,
      <>
        Odpowiada za <strong className="font-semibold text-ink">codzienną optymalizację kampanii</strong> — analizuje dane, testuje kreacje i dostosowuje stawki tak, żeby każda złotówka budżetu reklamowego pracowała jak najlepiej.
      </>,
      <>
        Dba o to, żeby klienci MiauSEO zawsze wiedzieli <strong className="font-semibold text-ink">dokładnie co dzieje się z ich budżetem</strong> — pełna transparentność wyników to dla niego standard, nie opcja.
      </>,
    ],
  },
];

export default function ZespolPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white py-20 px-6">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <div className="lg:w-5/12 shrink-0">
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">O firmie</p>
              <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
                <span className="bg-brand text-white px-2 py-0.5 rounded-md">Nasz</span>{" "}
                zespół.
              </h1>
            </div>
            <div className="lg:w-7/12 lg:border-l-2 lg:border-brand/20 lg:pl-14 pb-1">
              <p className="text-zinc-600 text-[17px] leading-relaxed">
                Jesteśmy małym, wyspecjalizowanym zespołem. Nie zatrudniamy juniorów do obsługi klientów — <strong className="text-ink font-semibold">Twoje konto prowadzi senior</strong>, który wie co robi i odpowiada za wyniki.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Members ── */}
      {members.map((m, i) => (
        <section key={m.name} className={`py-24 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Text */}
              <div>
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                  {m.role}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug mb-8">
                  <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                    {m.name.split(" ")[0]}
                  </span>{" "}
                  {m.name.split(" ").slice(1).join(" ")}
                </h2>

                <div className="space-y-5 mb-8">
                  {m.paragraphs.map((p, j) => (
                    <p key={j} className="text-zinc-500 leading-relaxed border-l-2 border-brand/20 pl-4">
                      {p}
                    </p>
                  ))}
                </div>

                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3.5 rounded-xl transition-colors duration-200 text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452H17.01v-5.569c0-1.327-.024-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.583V9h3.299v1.561h.046c.459-.87 1.582-1.788 3.255-1.788 3.483 0 4.126 2.291 4.126 5.271v6.408zM5.337 7.433a1.91 1.91 0 1 1 0-3.82 1.91 1.91 0 0 1 0 3.82zm1.651 13.019H3.683V9h3.305v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn — {m.name}
                </a>
              </div>

              {/* Photo */}
              <div className={`relative ${i % 2 === 1 ? "pl-5 pt-5" : "pr-5 pt-5"}`}>
                <div
                  className={`absolute ${i % 2 === 1 ? "top-0 left-0" : "top-0 right-0"} rounded-2xl bg-brand/20`}
                  style={{ width: "calc(100% - 1.25rem)", height: "calc(100% - 1.25rem)" }}
                />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-24 bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
                Porozmawiajmy
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                Gotowi żeby Twoja firma{" "}
                <span className="text-brand">pojawiała się pierwsza?</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Skontaktuj się z nami i zacznijmy od bezpłatnej analizy Twojej wizytówki Google. Odpowiadamy tego samego dnia roboczego.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  Bezpłatna konsultacja
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/o-nas"
                  className="inline-block border border-white/20 text-white hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200"
                >
                  O firmie
                </Link>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col gap-6">
              <p className="text-white/80 leading-relaxed text-sm">
                Elastyczna umowa miesięczna, pełna transparentność kosztów i raport co tydzień — bez długoletnich zobowiązań i bez ukrytych opłat.
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
              <p className="text-white/40 text-xs">Pierwsze efekty widać już po kilku tygodniach</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
