import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "./posts";
import CatWatermark from "@/components/ui/CatWatermark";
import BlogFilter from "@/components/blog/BlogFilter";

export const metadata: Metadata = {
  title: "Blog – MiauSEO | Wiedza o wizytówce Google i local SEO",
  description:
    "Praktyczne poradniki o pozycjonowaniu wizytówki Google, opiniach, Local Pack i local SEO. Bez teorii – tylko to, co działa.",
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

      <BlogFilter posts={posts} />

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
