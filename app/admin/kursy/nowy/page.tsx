"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function NowyCursPage() {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    price_pln: "",
    thumbnail: "",
    is_published: false,
  });

  const input = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.from("courses").insert({
      title: form.title,
      slug: form.slug,
      description: form.description,
      price_pln: parseInt(form.price_pln) || 0,
      thumbnail: form.thumbnail || null,
      is_published: form.is_published,
    });
    if (error) { setError(error.message); setLoading(false); return; }
    router.push("/admin/kursy");
    router.refresh();
  };

  return (
    <div className="p-8 max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/kursy" className="text-zinc-400 hover:text-ink transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </Link>
        <h1 className="text-2xl font-bold text-ink">Nowy kurs</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Tytuł kursu *</label>
          <input required placeholder="Wizytówka stoi w miejscu..." value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })} className={input} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Slug (URL) *</label>
          <input required placeholder="wizytowka-stoi-w-miejscu" value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") })} className={input} />
          <p className="text-xs text-zinc-400 mt-1">miauseo.pl/kursy/{form.slug || "..."}</p>
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Opis</label>
          <textarea placeholder="Krótki opis kursu..." rows={3} value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className={`${input} resize-none`} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Cena (zł brutto) *</label>
            <input required type="number" placeholder="500" value={form.price_pln}
              onChange={(e) => setForm({ ...form, price_pln: e.target.value })} className={input} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Miniatura (URL)</label>
            <input placeholder="https://..." value={form.thumbnail}
              onChange={(e) => setForm({ ...form, thumbnail: e.target.value })} className={input} />
          </div>
        </div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={form.is_published}
            onChange={(e) => setForm({ ...form, is_published: e.target.checked })}
            className="accent-brand w-4 h-4" />
          <span className="text-sm font-semibold text-ink">Opublikuj kurs (widoczny na stronie)</span>
        </label>

        {error && <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl transition-colors disabled:opacity-60">
          {loading ? "Zapisywanie..." : "Utwórz kurs"}
        </button>
      </form>
    </div>
  );
}
