import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions, categories } from "../questions";
import { contentMap } from "../content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const q = questions.find((q) => q.slug === slug);
  if (!q) return {};
  const hasContent = Boolean(contentMap[slug]);
  return {
    title: `${q.question} – MiauSEO`,
    description: hasContent
      ? `Kompletna odpowiedź: ${q.question}. Praktyczny poradnik o Google Business Profile od MiauSEO.`
      : `Odpowiedź na pytanie: ${q.question}. Praktyczna wiedza o wizytówce Google Business Profile od MiauSEO.`,
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const question = questions.find((q) => q.slug === slug);
  if (!question) notFound();

  const category = categories.find((c) => c.id === question.categoryId);
  const categoryQuestions = questions
    .filter((q) => q.categoryId === question.categoryId && q.id !== question.id)
    .slice(0, 5);
  const currentIndex = questions.findIndex((q) => q.slug === slug);
  const prev = currentIndex > 0 ? questions[currentIndex - 1] : null;
  const next = currentIndex < questions.length - 1 ? questions[currentIndex + 1] : null;

  const ContentComponent = (contentMap[slug] as (() => React.JSX.Element) | undefined) ?? null;

  return (
    <main className="pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-zinc-400 flex-wrap">
          <Link href="/" className="hover:text-brand transition-colors">Strona główna</Link>
          <span>/</span>
          <Link href="/pytania" className="hover:text-brand transition-colors">Pytania</Link>
          <span>/</span>
          <span className="text-zinc-600 truncate max-w-[280px]">{question.question}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── Article ── */}
          <article className="flex-1 min-w-0">

            {/* Back link + category */}
            {category && (
              <Link
                href="/pytania"
                className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-brand transition-colors mb-5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                {category.label}
              </Link>
            )}

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-8">
              {question.question}
            </h1>

            {/* Content or placeholder */}
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <div className="bg-surface border border-dashed border-border rounded-2xl p-10 text-center mb-10">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <p className="text-ink font-bold text-lg mb-2">Wpis w przygotowaniu</p>
                <p className="text-zinc-500 text-sm max-w-sm mx-auto">
                  Pełna odpowiedź na to pytanie zostanie opublikowana wkrótce. Tymczasem skontaktuj się — odpowiem bezpośrednio.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-block mt-6 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  Zapytaj bezpośrednio
                </Link>
              </div>
            )}

            {/* Inline CTA */}
            {ContentComponent && (
              <div className="mt-10 bg-surface border border-border rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-1">
                  <p className="font-bold text-ink mb-1">Chcesz żebym zajął się Twoją wizytówką?</p>
                  <p className="text-sm text-zinc-500">Bezpłatna konsultacja — sprawdzę profil i powiem co poprawić.</p>
                </div>
                <Link
                  href="/kontakt"
                  className="shrink-0 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
                >
                  Umów rozmowę
                </Link>
              </div>
            )}

            {/* Prev / Next */}
            <div className="flex gap-3 mt-10">
              {prev && (
                <Link
                  href={`/pytania/${prev.slug}`}
                  className="flex-1 group flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-brand/30 hover:bg-orange-50 transition-all duration-150"
                >
                  <svg className="shrink-0 text-zinc-400 group-hover:text-brand transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                  </svg>
                  <span className="text-sm text-zinc-600 line-clamp-2 group-hover:text-ink">{prev.question}</span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/pytania/${next.slug}`}
                  className="flex-1 group flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-brand/30 hover:bg-orange-50 transition-all duration-150 justify-end text-right"
                >
                  <span className="text-sm text-zinc-600 line-clamp-2 group-hover:text-ink">{next.question}</span>
                  <svg className="shrink-0 text-zinc-400 group-hover:text-brand transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              )}
            </div>
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-ink rounded-2xl p-6 text-center">
                <p className="text-white font-bold mb-2 text-sm">Potrzebujesz pomocy z wizytówką?</p>
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Bezpłatna konsultacja — sprawdzę Twój profil i powiem co poprawić.
                </p>
                <Link
                  href="/kontakt"
                  className="block bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  Umów rozmowę
                </Link>
              </div>

              {categoryQuestions.length > 0 && (
                <div className="border border-border rounded-2xl p-5">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Z tej kategorii</p>
                  <ul className="space-y-2">
                    {categoryQuestions.map((q) => (
                      <li key={q.id}>
                        <Link
                          href={`/pytania/${q.slug}`}
                          className="flex items-start gap-2 text-sm text-zinc-600 hover:text-brand transition-colors leading-snug py-1"
                        >
                          <svg className="shrink-0 mt-0.5 text-brand/50" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                          {q.question}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/pytania"
                    className="block mt-4 text-center text-xs font-semibold text-brand hover:underline"
                  >
                    Wszystkie pytania →
                  </Link>
                </div>
              )}
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
