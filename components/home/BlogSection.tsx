import Image from "next/image";
import Link from "next/link";
import { getPopularPosts, formatDate, type Category } from "@/app/blog/posts";

const categoryStyle: Record<Category, string> = {
  "SEO":                   "bg-orange-100 text-brand",
  "Opinie":                "bg-green-100 text-green-700",
  "Poradnik":              "bg-violet-100 text-violet-700",
  "Wizytówka":             "bg-sky-100 text-sky-700",
  "WordPress":             "bg-blue-100 text-blue-700",
  "Sztuczna Inteligencja": "bg-purple-100 text-purple-700",
};

export default function BlogSection() {
  const posts = getPopularPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Nagłówek */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Z bloga
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-snug">
              Najpopularniejsze{" "}
              <span className="inline-block bg-brand text-white px-4 py-1 rounded-lg">
                wpisy
              </span>
            </h2>
            <p className="text-zinc-500 mt-4 max-w-xl text-sm">
              Najczęściej czytane poradniki o <strong className="font-semibold text-ink">pozycjonowaniu wizytówki Google</strong> i <strong className="font-semibold text-ink">local SEO</strong> — bez lania wody.
            </p>
          </div>
          <Link
            href="/blog"
            className="group shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-brand whitespace-nowrap"
          >
            Zobacz wszystkie wpisy
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-200">
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
              className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-brand/30 hover:shadow-lg transition-all duration-200"
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
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${categoryStyle[post.category]}`}>
                    {post.category}
                  </span>
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
                <div className="flex items-center gap-1.5 text-brand text-[13px] font-semibold mt-auto">
                  Czytaj więcej
                  <svg
                    className="group-hover:translate-x-1 transition-transform duration-150"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
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
