import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminKursyPage() {
  const supabase = await createClient();
  const { data: courses } = await supabase.from("courses").select("*, lessons(count)").order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-ink">Kursy</h1>
        <Link href="/admin/kursy/nowy"
          className="bg-brand hover:bg-brand-dark text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
          + Nowy kurs
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-border divide-y divide-border">
        {courses?.length === 0 && (
          <p className="p-6 text-sm text-zinc-400">Brak kursów.</p>
        )}
        {courses?.map((course) => (
          <div key={course.id} className="flex items-center gap-4 p-5 hover:bg-surface transition-colors">
            {course.thumbnail && (
              <img src={course.thumbnail} alt="" className="w-16 h-10 rounded-lg object-cover shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-ink text-sm truncate">{course.title}</p>
              <p className="text-xs text-zinc-400 mt-0.5">
                /kursy/{course.slug} · {course.price_pln} zł · {(course.lessons as unknown as { count: number }[])?.[0]?.count ?? 0} lekcji · {course.is_published ? "✅ Opublikowany" : "⏸ Ukryty"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href={`/kursy/${course.slug}`} target="_blank"
                className="text-xs text-zinc-400 hover:text-ink transition-colors">Podgląd</Link>
              <Link href={`/admin/kursy/${course.id}`}
                className="text-sm font-semibold text-brand hover:underline">Edytuj</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
