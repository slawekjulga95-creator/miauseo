import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPublishedPosts, formatDate } from "./posts";
import type { Category } from "./posts";
import CatWatermark from "@/components/ui/CatWatermark";

export const metadata: Metadata = {
  title: "Blog – MiauSEO | Wiedza o wizytówce Google i local SEO",
  description:
    "Praktyczne poradniki o pozycjonowaniu wizytówki Google, opiniach, Local Pack i local SEO. Bez teorii – tylko to, co działa.",
};

const categoryStyle: Record<Category, string> = {
  "SEO":       "bg-orange-100 text-brand",
  "Opinie":    "bg-green-100 text-green-700",
  "Poradnik":  "bg-violet-100 text-violet-700",
  "Wizytówka": "bg-sky-100 text-sky-700",
  "Reklamy":   "bg-pink-100 text-pink-700",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <main className="pt-24 pb-24">
      {/* Hero */}
      <section className="bg-white border-b border-border py-16 px-6 relative overflow-hidden">
        <CatWatermark />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-4">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight">
              <span className="bg-brand text-white px-2 py-0.5 rounded-md">Wiedza</span> o wizytówce Google<br />
              <span className="text-brand">bez lania wody.</span>
            </h1>
          </div>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-sm lg:text-right">
            Poradniki, które możesz wdrożyć sam — lub zlecić nam, jeśli wolisz efekty bez czytania.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:border-brand/30 hover:shadow-lg transition-all duration-200"
              >
                {/* Cover image — fixed aspect ratio */}
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-zinc-100 shrink-0">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
                  {/* Category badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${categoryStyle[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Date + read time */}
                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 mb-3">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime} min czytania</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[15px] font-bold text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors duration-200 mb-3 flex-1">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[13px] text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
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

      {/* Newsletter / CTA */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-ink rounded-3xl py-14 px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Zostań na bieżąco</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Nowe wpisy co tydzień.<br />Zero spamu.
            </h2>
            <p className="text-zinc-400 text-sm max-w-sm lg:mx-0 mx-auto">
              Praktyczna wiedza o local SEO i wizytówce Google — prosto na Twój email.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <Link
              href="/kontakt"
              className="block text-center bg-brand hover:bg-brand-dark text-white font-bold px-10 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap"
            >
              Napisz do mnie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
