import type { Metadata } from "next";
import Link from "next/link";
import { terms, LETTERS, getTermsByLetter } from "./terms";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Słownik SEO/SEM – MiauSEO | Pojęcia i definicje",
  description: `Kompletny słownik SEO i SEM. ${terms.length}+ pojęć z dziedziny pozycjonowania, Google Ads i marketingu w wyszukiwarkach — alfabetycznie, z definicjami.`,
};

export default function SlownikPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <section className="py-20 px-6 bg-white relative overflow-hidden border-b border-border">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Słownik</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Słownik{" "}
                <span className="text-brand">SEO / SEM.</span>
                <br />Bez owijania w bawełnę.
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                {terms.length}+ pojęć z pozycjonowania, Google Ads i marketingu w wyszukiwarkach. Każde wyjaśnione prosto — bez zbędnego żargonu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200">
                  Blog SEO
                </Link>
                <Link href="/kontakt" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-7 py-3.5 rounded-xl transition-colors duration-200">
                  Bezpłatna konsultacja
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-5">Co znajdziesz w słowniku</p>
              <div className="space-y-4">
                {[
                  { bold: "Techniki SEO", rest: " — on-page, off-page, technical SEO i wszystko co wpływa na ranking." },
                  { bold: "Google Ads / SEM", rest: " — typy kampanii, stawki, wskaźniki i strategie reklamowe." },
                  { bold: "Metryki i KPI", rest: " — CTR, CPC, ROAS, ROI i inne wskaźniki skuteczności." },
                  { bold: "Algorytmy Google", rest: " — Panda, Penguin, Core Web Vitals i inne aktualizacje." },
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

      {/* Nawigacja alfabetyczna */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-border px-6 py-3">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-1.5">
            {LETTERS.map(letter => (
              <a
                key={letter}
                href={`#litera-${letter}`}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-zinc-500 hover:bg-brand hover:text-white transition-colors duration-150 border border-border hover:border-brand"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pojęcia alfabetycznie */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          {LETTERS.map(letter => {
            const letterTerms = getTermsByLetter(letter);
            return (
              <div key={letter} id={`litera-${letter}`} className="mb-16 scroll-mt-28">
                {/* Nagłówek litery */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-black text-brand/20 leading-none select-none w-12 shrink-0">
                    {letter}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs font-semibold text-zinc-400 shrink-0">
                    {letterTerms.length} {letterTerms.length === 1 ? "pojęcie" : letterTerms.length < 5 ? "pojęcia" : "pojęć"}
                  </span>
                </div>

                {/* Siatka pojęć */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {letterTerms.map(term => (
                    <Link
                      key={term.slug}
                      href={`/slownik/${term.slug}`}
                      className="group bg-white rounded-2xl border border-border p-5 hover:border-brand hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h2 className="text-sm font-bold text-ink group-hover:text-brand transition-colors leading-snug">
                          {term.term}
                        </h2>
                        <svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="shrink-0 mt-0.5 text-zinc-300 group-hover:text-brand transition-colors"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                        {term.shortDesc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl py-14 px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Praktyka, nie teoria</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Chcesz żebyśmy wdrożyli<br />to za Ciebie?
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm lg:mx-0 mx-auto">
              Bezpłatna konsultacja — sprawdzimy Twoją wizytówkę i powiemy co poprawić.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <Link
              href="/kontakt"
              className="block text-center bg-brand hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap"
            >
              Umów konsultację
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
