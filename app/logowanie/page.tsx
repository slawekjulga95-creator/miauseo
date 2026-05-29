"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/konto";
  const supabase = createClient();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword(form);
    if (error) {
      setError("Nieprawidłowy email lub hasło.");
      setLoading(false);
    } else {
      router.push(next);
      router.refresh();
    }
  };

  const input = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  return (
    <div className="bg-white rounded-3xl border border-border shadow-sm p-10">
      <div className="text-center mb-8">
        <Link href="/"><img src="/logo.png" alt="MiauSEO" className="h-10 w-auto mx-auto mb-6" /></Link>
        <h1 className="text-2xl font-bold text-ink mb-1">Zaloguj się</h1>
        <p className="text-sm text-zinc-500">Dostęp do Twoich kursów</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Email</label>
          <input type="email" required placeholder="jan@firma.pl" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Hasło</label>
          <input type="password" required placeholder="••••••••" value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })} className={input} />
        </div>

        {error && <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>}

        <button type="submit" disabled={loading}
          className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm disabled:opacity-60">
          {loading ? "Logowanie..." : "Zaloguj się"}
        </button>
      </form>

      <p className="text-center text-sm text-zinc-400 mt-6">
        Nie masz konta?{" "}
        <Link href="/rejestracja" className="text-brand font-semibold hover:underline">Zarejestruj się</Link>
      </p>
    </div>
  );
}

export default function LogowaniePage() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <Suspense fallback={<div className="bg-white rounded-3xl border border-border p-10 animate-pulse h-96" />}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
