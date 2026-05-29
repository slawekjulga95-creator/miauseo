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
      <section className="py-24 px-6 bg-white relative overflow-hidden border-b border-border">
        <CatWatermark />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand mb-6">Blog</span>
              <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-tight mb-6">
                Wiedza o wizytówce Google.{" "}
                <span className="text-brand">Bez lania wody.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Praktyczne poradniki o pozycjonowaniu wizytówki Google, opiniach i local SEO. Wdrożysz sam — lub zlecisz nam, jeśli wolisz efekty bez czytania.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#wpisy" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200">
                  Czytaj wpisy
                </Link>
                <Link href="/kontakt" className="inline-block border border-border text-ink hover:border-brand hover:text-brand font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                  Wolę zlecić
                </Link>
              </div>
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-border">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-6">Co znajdziesz na blogu</p>
              <div className="space-y-5">
                {[
                  { bold: "Pozycjonowanie wizytówki Google", rest: " — jak wspiąć się do top 3 w Mapach bez płatnych reklam." },
                  { bold: "Opinie i reputacja", rest: " — jak zbierać recenzje, odpowiadać na negatywne i chronić profil." },
                  { bold: "Local SEO dla firm lokalnych", rest: " — cytowania, NAP, Local Pack i czynniki rankingowe w 2026." },
                  { bold: "Google Ads i Meta Ads", rest: " — kampanie które przynoszą leady, nie tylko kliknięcia." },
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

      <div id="wpisy"><BlogFilter posts={posts} /></div>

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
