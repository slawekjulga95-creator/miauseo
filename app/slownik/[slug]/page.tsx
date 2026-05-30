import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { terms, getTermBySlug, getTermsByLetter } from "../terms";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return terms.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  return {
    title: `${term.term} – definicja i wyjaśnienie | Słownik SEO MiauSEO`,
    description: term.shortDesc,
  };
}

export default async function TermPage({ params }: Props) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const related = getTermsByLetter(term.letter)
    .filter(t => t.slug !== slug)
    .slice(0, 6);

  const termIndex = terms.findIndex(t => t.slug === slug);
  const prev = termIndex > 0 ? terms[termIndex - 1] : null;
  const next = termIndex < terms.length - 1 ? terms[termIndex + 1] : null;

  return (
    <main className="pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-brand transition-colors">Strona główna</Link>
          <span>/</span>
          <Link href="/slownik" className="hover:text-brand transition-colors">Słownik SEO/SEM</Link>
          <span>/</span>
          <span className="text-zinc-600 truncate max-w-[200px]">{term.term}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Główna treść */}
          <article className="flex-1 min-w-0">
            {/* Kategoria i litera */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                href={`/slownik#litera-${term.letter}`}
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors"
              >
                {term.letter}
              </Link>
              <span className="text-sm text-zinc-400">Słownik SEO/SEM</span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">
              {term.term}
            </h1>

            {/* Short desc jako lead */}
            <p className="text-lg text-zinc-500 leading-relaxed border-l-4 border-brand/30 pl-5 mb-10">
              {term.shortDesc}
            </p>

            {/* Treść — do uzupełnienia */}
            <div className="prose-blog">
              <h2>Czym jest {term.term}?</h2>
              <p>
                {term.shortDesc} Poniżej znajdziesz szczegółowe omówienie tego pojęcia, praktyczne przykłady zastosowania oraz wskazówki, jak wykorzystać tę wiedzę w swojej strategii SEO lub SEM.
              </p>

              <div className="not-prose mt-8 bg-surface border border-border rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Rozbudowany opis wkrótce</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Szczegółowy artykuł o pojęciu <strong className="text-ink">{term.term}</strong> jest w przygotowaniu. Już teraz możesz zapoznać się z definicją lub przejrzeć powiązane pojęcia z tej samej litery.
                </p>
              </div>
            </div>

            {/* Nawigacja prev/next */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 border-t border-border pt-8">
              {prev && (
                <Link
                  href={`/slownik/${prev.slug}`}
                  className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-border hover:border-brand transition-colors group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 group-hover:text-brand">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-0.5">Poprzednie</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-brand transition-colors leading-snug">{prev.term}</p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/slownik/${next.slug}`}
                  className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-border hover:border-brand transition-colors group text-right"
                >
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-0.5">Następne</p>
                    <p className="text-sm font-semibold text-ink group-hover:text-brand transition-colors leading-snug">{next.term}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 group-hover:text-brand">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              )}
            </div>

            {/* Wróć */}
            <div className="mt-6">
              <Link
                href="/slownik"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-brand transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
                </svg>
                Cały słownik
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">

              {/* CTA */}
              <div className="bg-ink rounded-2xl p-6 text-center">
                <p className="text-white font-bold mb-2 text-sm">Chcesz efektów, nie teorii?</p>
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Zajmiemy się pozycjonowaniem Twojej wizytówki — Ty skupiasz się na biznesie.
                </p>
                <Link
                  href="/kontakt"
                  className="block bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  Bezpłatna konsultacja
                </Link>
              </div>

              {/* Inne pojęcia na tę literę */}
              {related.length > 0 && (
                <div className="border border-border rounded-2xl p-5">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    Inne pojęcia na „{term.letter}"
                  </p>
                  <ul className="space-y-2">
                    {related.map(t => (
                      <li key={t.slug}>
                        <Link
                          href={`/slownik/${t.slug}`}
                          className="text-sm font-semibold text-ink hover:text-brand transition-colors leading-snug block"
                        >
                          {t.term}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/slownik#litera-${term.letter}`}
                    className="inline-block mt-4 text-xs font-bold text-brand hover:underline"
                  >
                    Wszystkie na „{term.letter}" →
                  </Link>
                </div>
              )}

              {/* Link do słownika */}
              <div className="border border-border rounded-2xl p-5">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Słownik SEO/SEM</p>
                <p className="text-xs text-zinc-500 mb-3 leading-relaxed">
                  {terms.length}+ pojęć z dziedziny SEO, SEM i marketingu w wyszukiwarkach.
                </p>
                <Link
                  href="/slownik"
                  className="text-xs font-bold text-brand hover:underline"
                >
                  Przeglądaj cały słownik →
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
