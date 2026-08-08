import Image from "next/image";
import Link from "next/link";
import { getPopularPosts, formatDate } from "@/app/blog/posts";

/**
 * Jedna etykieta dla wszystkich kategorii. Wcześniej każda miała własny kolor
 * (fiolet, błękit, zieleń) i pasek wpisów rozjeżdżał się z resztą strony.
 */
const CHIP =
  "bg-white/90 backdrop-blur-sm border border-border text-ink text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full";

export default function BlogSection() {
  const posts = getPopularPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden py-24 bg-white border-b border-border">
      <div aria-hidden="true" className="tekstura-siatka absolute inset-0 -z-10" />
      <div aria-hidden="true" className="tekstura-ziarno absolute inset-0 -z-10" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Nagłówek */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <h2
              className="text-ink"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.12 }}
            >
              Najnowsze <span style={{ color: "var(--color-brand)" }}>wpisy</span>
            </h2>
            <p className="text-zinc-500 mt-5 leading-relaxed" style={{ maxWidth: "52ch" }}>
              Najczęściej czytane poradniki o <strong className="font-semibold text-ink">pozycjonowaniu wizytówki Google</strong> i{" "}
              <strong className="font-semibold text-ink">local SEO</strong> — bez lania wody.
            </p>
          </div>
          <Link
            href="/blog"
            className="group shrink-0 inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-brand transition-colors whitespace-nowrap"
          >
            Zobacz wszystkie wpisy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand group-hover:translate-x-1 transition-transform duration-200">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Karty */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-brand/50 hover:shadow-[0_24px_50px_-34px_rgba(17,17,17,0.5)]"
            >
              <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-100 shrink-0">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{ background: `linear-gradient(135deg, ${post.coverColor}22 0%, ${post.coverColor}44 100%)` }}
                  >
                    <span
                      className="text-[5rem] font-black leading-none select-none opacity-10"
                      style={{ color: post.coverColor }}
                    >
                      {post.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span className={CHIP}>{post.category}</span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime} min czytania</span>
                </div>
                <h3 className="text-[15px] font-bold text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors duration-200 mb-3">
                  {post.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-ink text-[13px] font-bold mt-auto pt-2 group-hover:text-brand transition-colors">
                  Czytaj więcej
                  <svg
                    className="text-brand group-hover:translate-x-1 transition-transform duration-150"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
