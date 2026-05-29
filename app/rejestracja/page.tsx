"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RejestracjaPage() {
  const router = useRouter();
  const supabase = createClient();

  const [form, setForm] = useState({ email: "", password: "", password2: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.password2) { setError("Hasła się nie zgadzają."); return; }
    if (form.password.length < 6) { setError("Hasło musi mieć minimum 6 znaków."); return; }
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({ email: form.email, password: form.password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setDone(true);
    }
  };

  const input = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  if (done) return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md text-center bg-white rounded-3xl border border-border shadow-sm p-10">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 className="text-xl font-bold text-ink mb-2">Sprawdź skrzynkę email</h2>
        <p className="text-sm text-zinc-500">Wysłaliśmy link potwierdzający rejestrację na <strong className="text-ink">{form.email}</strong>. Kliknij w link żeby aktywować konto.</p>
        <Link href="/logowanie" className="inline-block mt-6 text-brand font-semibold text-sm hover:underline">Wróć do logowania</Link>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl border border-border shadow-sm p-10">
          <div className="text-center mb-8">
            <Link href="/"><img src="/logo.png" alt="MiauSEO" className="h-10 w-auto mx-auto mb-6" /></Link>
            <h1 className="text-2xl font-bold text-ink mb-1">Utwórz konto</h1>
            <p className="text-sm text-zinc-500">Uzyskaj dostęp do kursów MiauSEO</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Email</label>
              <input type="email" required placeholder="jan@firma.pl" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Hasło</label>
              <input type="password" required placeholder="Min. 6 znaków" value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })} className={input} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Powtórz hasło</label>
              <input type="password" required placeholder="••••••••" value={form.password2}
                onChange={(e) => setForm({ ...form, password2: e.target.value })} className={input} />
            </div>

            {error && <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm disabled:opacity-60">
              {loading ? "Tworzenie konta..." : "Utwórz konto"}
            </button>
          </form>

          <p className="text-center text-sm text-zinc-400 mt-6">
            Masz już konto?{" "}
            <Link href="/logowanie" className="text-brand font-semibold hover:underline">Zaloguj się</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
