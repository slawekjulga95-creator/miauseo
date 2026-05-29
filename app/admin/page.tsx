import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: courses } = await supabase.from("courses").select("*").order("created_at", { ascending: false });
  const { count: usersCount } = await supabase.from("purchases").select("*", { count: "exact", head: true });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-ink">Dashboard</h1>
        <p className="text-zinc-500 text-sm mt-1">Witaj z powrotem, Sławek.</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          { label: "Kursy", value: courses?.length ?? 0, href: "/admin/kursy" },
          { label: "Zakupy", value: usersCount ?? 0, href: "/admin/uzytkownicy" },
          { label: "Przychód", value: "—", href: "#" },
        ].map((stat) => (
          <Link key={stat.label} href={stat.href}
            className="bg-white rounded-2xl border border-border p-6 hover:border-brand/30 hover:shadow-sm transition-all">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">{stat.label}</p>
            <p className="text-3xl font-black text-ink">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Kursy */}
      <div className="bg-white rounded-2xl border border-border">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-bold text-ink">Kursy</h2>
          <Link href="/admin/kursy/nowy"
            className="bg-brand hover:bg-brand-dark text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors">
            + Dodaj kurs
          </Link>
        </div>
        <div className="divide-y divide-border">
          {courses?.length === 0 && (
            <p className="p-6 text-sm text-zinc-400">Brak kursów. <Link href="/admin/kursy/nowy" className="text-brand font-semibold">Dodaj pierwszy.</Link></p>
          )}
          {courses?.map((course) => (
            <div key={course.id} className="flex items-center justify-between p-5 hover:bg-surface transition-colors">
              <div>
                <p className="font-semibold text-ink text-sm">{course.title}</p>
                <p className="text-xs text-zinc-400 mt-0.5">/kursy/{course.slug} · {course.price_pln} zł · {course.is_published ? "✅ Opublikowany" : "⏸ Ukryty"}</p>
              </div>
              <Link href={`/admin/kursy/${course.id}`}
                className="text-sm font-semibold text-brand hover:underline">
                Edytuj
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
