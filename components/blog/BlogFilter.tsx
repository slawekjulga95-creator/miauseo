"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Post, Category } from "@/app/blog/posts";

const CATEGORIES: Category[] = ["SEO", "Opinie", "Poradnik", "Wizytówka", "WordPress"];

const categoryStyle: Record<Category, string> = {
  "SEO":       "bg-orange-100 text-brand",
  "Opinie":    "bg-green-100 text-green-700",
  "Poradnik":  "bg-violet-100 text-violet-700",
  "Wizytówka": "bg-sky-100 text-sky-700",
  "WordPress": "bg-blue-100 text-blue-700",
};

const categoryActiveBg: Record<Category, string> = {
  "SEO":       "bg-brand text-white",
  "Opinie":    "bg-green-600 text-white",
  "Poradnik":  "bg-violet-600 text-white",
  "Wizytówka": "bg-sky-600 text-white",
  "WordPress": "bg-blue-700 text-white",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<Category | null>(null);

  const counts = CATEGORIES.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = posts.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  const filtered = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <>
      {/* Category bar */}
      <div className="border-b border-border bg-white sticky top-[72px] z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActive(null)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
              active === null
                ? "bg-ink text-white"
                : "bg-surface text-zinc-500 hover:bg-border"
            }`}
          >
            Wszystkie
            <span className="ml-1.5 text-xs font-bold opacity-70">{posts.length}</span>
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? null : cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                active === cat
                  ? categoryActiveBg[cat]
                  : "bg-surface text-zinc-500 hover:bg-border"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs font-bold opacity-70">{counts[cat]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-zinc-400 text-center py-20">Brak wpisów w tej kategorii.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {filtered.map((post) => (
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
                    <h2 className="text-[15px] font-bold text-ink leading-snug line-clamp-3 group-hover:text-brand transition-colors duration-200 mb-3 flex-1">
                      {post.title}
                    </h2>
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
          )}
        </div>
      </section>
    </>
  );
}
