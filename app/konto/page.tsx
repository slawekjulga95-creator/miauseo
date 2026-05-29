import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/LogoutButton";

export default async function KontoPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/logowanie");

  const { data: purchases } = await supabase
    .from("purchases")
    .select("*, course:courses(id, title, slug, thumbnail, lesson_count)")
    .eq("user_id", user.id);

  const hasAllAccess = purchases?.some((p) => p.all_access);
  const ownedCourses = purchases?.filter((p) => !p.all_access) ?? [];

  return (
    <main className="min-h-screen bg-surface pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-brand mb-1">Panel kursanta</p>
            <h1 className="text-3xl font-bold text-ink">Moje kursy</h1>
            <p className="text-sm text-zinc-500 mt-1">{user.email}</p>
          </div>
          <LogoutButton />
        </div>

        {/* All Access badge */}
        {hasAllAccess && (
          <div className="bg-brand text-white rounded-2xl px-6 py-4 mb-8 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span className="font-bold">All Access — masz dostęp do wszystkich kursów</span>
          </div>
        )}

        {/* Kursy */}
        {purchases && purchases.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {(hasAllAccess ? [] : ownedCourses).map((p) => p.course && (
              <div key={p.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                {p.course.thumbnail && (
                  <div className="aspect-video overflow-hidden">
                    <img src={p.course.thumbnail} alt={p.course.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="font-bold text-ink mb-4 leading-snug">{p.course.title}</h2>
                  <Link href={`/kursy/${p.course.slug}/ucz-sie`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-xl transition-colors duration-200 text-sm">
                    Kontynuuj naukę
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-border p-10 text-center">
            <p className="text-zinc-500 mb-4">Nie masz jeszcze żadnych kursów.</p>
            <Link href="/kursy" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
              Zobacz kursy
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
