import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts, formatDate } from "@/app/blog/posts";
import type { Category } from "@/app/blog/posts";
import { articleContent } from "@/app/blog/content";
import { terms, getTermBySlug, getTermsByLetter } from "@/app/slownik/terms";
import { termContentMap } from "@/app/slownik/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const blogParams = getPublishedPosts().map((p) => ({ slug: p.slug }));
  const termParams = terms.map((t) => ({ slug: t.slug }));
  return [...blogParams, ...termParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (post) {
    return {
      title: `${post.title} – MiauSEO`,
      description: post.excerpt,
      alternates: { canonical: `https://miauseo.pl/${post.slug}` },
      openGraph: post.coverImage
        ? { images: [{ url: `https://miauseo.pl${post.coverImage}`, width: 1200, height: 630 }] }
        : { images: [{ url: "https://miauseo.pl/logo.png", width: 224, height: 64 }] },
    };
  }
  const term = getTermBySlug(slug);
  if (term) {
    const hasContent = slug in termContentMap;
    return {
      title: hasContent
        ? `${term.term} – definicja i zastosowanie | Słownik SEO MiauSEO`
        : `${term.term} – definicja | Słownik SEO MiauSEO`,
      description: term.shortDesc,
      alternates: { canonical: `https://miauseo.pl/${term.slug}` },
    };
  }
  return {};
}

const categoryStyle: Record<Category, string> = {
  "SEO":       "bg-orange-100 text-brand",
  "Opinie":    "bg-green-100 text-green-700",
  "Poradnik":  "bg-violet-100 text-violet-700",
  "Wizytówka": "bg-sky-100 text-sky-700",
  "WordPress": "bg-blue-100 text-blue-700",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // ── Słownik SEO/SEM ──────────────────────────────────
  const term = getTermBySlug(slug);
  if (term) {
    const related = getTermsByLetter(term.letter).filter(t => t.slug !== slug).slice(0, 6);
    const termIndex = terms.findIndex(t => t.slug === slug);
    const prev = termIndex > 0 ? terms[termIndex - 1] : null;
    const next = termIndex < terms.length - 1 ? terms[termIndex + 1] : null;
    return (
      <main className="pt-24 pb-24">
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
            <article className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Link href={`/slownik#litera-${term.letter}`} className="text-xs font-bold px-2.5 py-1 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors">
                  {term.letter}
                </Link>
                <span className="text-sm text-zinc-400">Słownik SEO/SEM</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">{term.term}</h1>
              <p className="text-lg text-zinc-500 leading-relaxed border-l-4 border-brand/30 pl-5 mb-10">{term.shortDesc}</p>
              <div className="prose-blog">
                {termContentMap[slug] ? (
                  termContentMap[slug]()
                ) : (
                  <>
                    <h2>Czym jest {term.term}?</h2>
                    <p>{term.shortDesc} Poniżej znajdziesz szczegółowe omówienie tego pojęcia, praktyczne przykłady i wskazówki jak wykorzystać tę wiedzę w strategii SEO lub SEM.</p>
                    <div className="not-prose mt-8 bg-surface border border-border rounded-2xl p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Rozbudowany opis wkrótce</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">Szczegółowy artykuł o pojęciu <strong className="text-ink">{term.term}</strong> jest w przygotowaniu.</p>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 border-t border-border pt-8">
                {prev && (
                  <Link href={`/${prev.slug}`} className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-border hover:border-brand transition-colors group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 group-hover:text-brand"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    <div><p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-0.5">Poprzednie</p><p className="text-sm font-semibold text-ink group-hover:text-brand leading-snug">{prev.term}</p></div>
                  </Link>
                )}
                {next && (
                  <Link href={`/${next.slug}`} className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-border hover:border-brand transition-colors group text-right">
                    <div><p className="text-[10px] text-zinc-400 uppercase tracking-widest mb-0.5">Następne</p><p className="text-sm font-semibold text-ink group-hover:text-brand leading-snug">{next.term}</p></div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-zinc-400 group-hover:text-brand"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                )}
              </div>
              <div className="mt-6">
                <Link href="/slownik" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-brand transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                  Cały słownik
                </Link>
              </div>
            </article>
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-28 space-y-6">
                <div className="bg-ink rounded-2xl p-6 text-center">
                  <p className="text-white font-bold mb-2 text-sm">Chcesz efektów, nie teorii?</p>
                  <p className="text-zinc-400 text-xs mb-4 leading-relaxed">Zajmiemy się pozycjonowaniem Twojej wizytówki.</p>
                  <Link href="/kontakt" className="block bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm">Bezpłatna konsultacja</Link>
                </div>
                {related.length > 0 && (
                  <div className="border border-border rounded-2xl p-5">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Inne pojęcia na „{term.letter}"</p>
                    <ul className="space-y-2">
                      {related.map(t => (
                        <li key={t.slug}><Link href={`/${t.slug}`} className="text-sm font-semibold text-ink hover:text-brand transition-colors leading-snug block">{t.term}</Link></li>
                      ))}
                    </ul>
                    <Link href={`/slownik#litera-${term.letter}`} className="inline-block mt-4 text-xs font-bold text-brand hover:underline">Wszystkie na „{term.letter}" →</Link>
                  </div>
                )}
                <div className="border border-border rounded-2xl p-5">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Słownik SEO/SEM</p>
                  <p className="text-xs text-zinc-500 mb-3 leading-relaxed">{terms.length}+ pojęć z dziedziny SEO i SEM.</p>
                  <Link href="/slownik" className="text-xs font-bold text-brand hover:underline">Przeglądaj cały słownik →</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://miauseo.pl" },
                { "@type": "ListItem", "position": 2, "name": "Słownik SEO/SEM", "item": "https://miauseo.pl/slownik" },
                { "@type": "ListItem", "position": 3, "name": term.term, "item": `https://miauseo.pl/${term.slug}` },
              ],
            }),
          }}
        />
      </main>
    );
  }

  // ── Blog post ─────────────────────────────────────────
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getPublishedPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const otherPosts = related.length > 0
    ? related
    : allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="px-6 py-4 border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-brand transition-colors">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-zinc-600 truncate max-w-[300px]">{post.title}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Article */}
          <article className="flex-1 min-w-0">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryStyle[post.category]}`}>
                {post.category}
              </span>
              <time dateTime={post.date} className="text-sm text-zinc-400">{formatDate(post.date)}</time>
              <span className="text-zinc-300">·</span>
              <span className="text-sm text-zinc-400">{post.readTime} min czytania</span>
              <span className="text-zinc-300">·</span>
              <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                Zespół MiauSEO
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl md:text-4xl font-bold text-ink leading-tight mb-6">
              {post.title}
            </h1>

            {/* Lead */}
            <p className="text-lg text-zinc-500 leading-relaxed border-l-4 border-brand/30 pl-5 mb-10">
              {post.excerpt}
            </p>

            {/* Cover */}
            <div className="w-full aspect-video rounded-2xl mb-10 overflow-hidden relative">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${post.coverColor}18 0%, ${post.coverColor}35 100%)` }}
                >
                  <span
                    className="text-[8rem] font-black leading-none select-none opacity-10"
                    style={{ color: post.coverColor }}
                  >
                    {post.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Treść artykułu */}
            <div className="prose-blog">
              {articleContent[slug] ?? (
                <>
                  <h2>Treść wkrótce</h2>
                  <p>Ten artykuł jest w przygotowaniu. Sprawdź inne wpisy lub skontaktuj się bezpośrednio.</p>
                </>
              )}
            </div>

            {/* CTA inline */}
            <div className="mt-12 bg-surface border border-border rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-5">
              <div className="flex-1">
                <p className="font-bold text-ink mb-1">Potrzebujesz pomocy z wizytówką Google?</p>
                <p className="text-sm text-zinc-500">Bezpłatna konsultacja — sprawdzę Twój profil i powiem co poprawić.</p>
              </div>
              <Link
                href="/kontakt"
                className="shrink-0 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
              >
                Umów rozmowę
              </Link>
            </div>

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-brand transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Wszystkie wpisy
              </Link>
            </div>
          </article>

          {/* Article + BreadcrumbList schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "headline": post.title,
                  "description": post.excerpt,
                  "image": post.coverImage ? `https://miauseo.pl${post.coverImage}` : "https://miauseo.pl/logo.png",
                  "datePublished": post.date,
                  "dateModified": post.date,
                  "url": `https://miauseo.pl/${post.slug}`,
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://miauseo.pl/${post.slug}`,
                  },
                  "author": {
                    "@type": "Organization",
                    "name": "MiauSEO",
                    "url": "https://miauseo.pl",
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "MiauSEO",
                    "url": "https://miauseo.pl",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://miauseo.pl/logo.png",
                      "width": 224,
                      "height": 64,
                    },
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://miauseo.pl" },
                    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://miauseo.pl/blog" },
                    { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://miauseo.pl/${post.slug}` },
                  ],
                },
              ]),
            }}
          />

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* CTA */}
              <div className="bg-ink rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/slawomir.png"
                    alt="Sławomir Jułga"
                    width={72}
                    height={96}
                    className="rounded-lg object-cover object-top shrink-0"
                    style={{ height: 96, width: 72 }}
                  />
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Sławomir Jułga</p>
                    <p className="text-white/60 text-xs mt-0.5 leading-snug">Konsultant</p>
                  </div>
                </div>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-zinc-300 text-xs leading-relaxed mb-2">
                  Nie działam według szablonów. Każdą współpracę zaczynam od poznania biznesu, analizy konkurencji i stworzenia <strong className="text-white">dopasowanej strategii marketingowej</strong>, która wspiera realny rozwój firmy.
                </p>
                <p className="text-zinc-300 text-xs leading-relaxed mb-2">
                  Dbam o to, aby Twoja marka była widoczna tam, gdzie klienci szukają usług i produktów. <strong className="text-white">Optymalizuję obecność w Google</strong>, zwiększam liczbę wartościowych zapytań i pomagam budować <strong className="text-white">przewagę nad konkurencją</strong>.
                </p>
                <p className="text-zinc-300 text-xs leading-relaxed mb-4">
                  Bez obietnic szybkich cudów. Zamiast tego stawiam na <strong className="text-white">sprawdzone działania</strong>, transparentną współpracę i wyniki, które przekładają się na <strong className="text-white">większą liczbę klientów</strong> oraz wzrost sprzedaży.
                </p>
                <Link
                  href="/kontakt"
                  className="block bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm text-center"
                >
                  Bezpłatna konsultacja
                </Link>
              </div>

              {/* Related / other posts */}
              {otherPosts.length > 0 && (
                <div className="border border-border rounded-2xl p-5">
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                    {related.length > 0 ? "Podobne wpisy" : "Inne wpisy"}
                  </p>
                  <ul className="space-y-4">
                    {otherPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${p.slug}`}
                          className="group flex flex-col gap-1"
                        >
                          {p.coverImage && (
                            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden mb-2">
                              <Image
                                src={p.coverImage}
                                alt={p.title}
                                fill
                                sizes="256px"
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <span className="text-sm font-semibold text-ink group-hover:text-brand transition-colors leading-snug line-clamp-2">
                            {p.title}
                          </span>
                          <span className="text-xs text-zinc-400">{formatDate(p.date)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Categories */}
              <div className="border border-border rounded-2xl p-5">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Kategorie</p>
                <div className="flex flex-wrap gap-2">
                  {(["SEO", "Opinie", "Poradnik", "Wizytówka", "WordPress"] as Category[]).map((cat) => (
                    <span key={cat} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryStyle[cat]}`}>
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
