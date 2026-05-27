import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts, formatDate } from "../posts";
import type { Category } from "../posts";
import { articleContent } from "../content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} – MiauSEO`,
    description: post.excerpt,
    openGraph: post.coverImage
      ? { images: [{ url: post.coverImage, width: 1200, height: 630 }] }
      : undefined,
  };
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

          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* CTA */}
              <div className="bg-ink rounded-2xl p-6 text-center">
                <p className="text-white font-bold mb-2 text-sm">Chcesz efektów, nie czytania?</p>
                <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
                  Zajmę się pozycjonowaniem Twojej wizytówki — Ty skupiasz się na biznesie.
                </p>
                <Link
                  href="/kontakt"
                  className="block bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm"
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
                          href={`/blog/${p.slug}`}
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
