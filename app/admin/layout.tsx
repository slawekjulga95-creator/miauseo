import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user?.email !== "slawekjulga95@gmail.com") redirect("/");

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="w-56 bg-ink text-white flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <Link href="/admin">
            <img src="/logo.png" alt="MiauSEO" className="h-8 w-auto brightness-0 invert" />
          </Link>
          <p className="text-xs text-white/40 mt-2 font-semibold uppercase tracking-widest">Admin</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { href: "/admin", label: "Dashboard" },
            { href: "/admin/kursy", label: "Kursy" },
            { href: "/admin/uzytkownicy", label: "Użytkownicy" },
          ].map((item) => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <Link href="/" className="text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Wróć na stronę
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
