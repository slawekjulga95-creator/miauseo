"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const courseData: Record<string, { title: string; price: number; slug: string }> = {
  "wizytowka-stoi-w-miejscu": {
    title: "Wizytówka stoi w miejscu – napraw to raz na zawsze",
    price: 500,
    slug: "wizytowka-stoi-w-miejscu",
  },
};

export default function KupPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const course = courseData[slug];

  const supabase = createClient();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    nip: "",
    consent: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!course) return <div className="p-10">Nie znaleziono kursu.</div>;

  const input = "w-full px-4 py-3 rounded-xl border border-border bg-white text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) { setError("Hasło musi mieć minimum 6 znaków."); return; }
    setLoading(true);
    setError("");

    // Utwórz konto lub zaloguj istniejące
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.name, nip: form.nip } },
    });

    if (signUpError && signUpError.message !== "User already registered") {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // Jeśli użytkownik już istnieje — zaloguj
    let userId = signUpData?.user?.id;
    if (!userId) {
      const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });
      if (loginError) { setError("Konto już istnieje — sprawdź hasło."); setLoading(false); return; }
      userId = loginData.user?.id;
    }

    // Przekieruj do płatności (placeholder — tutaj wejdzie Stripe)
    router.push(`/kursy/${slug}/platnosc`);
  };

  return (
    <main className="min-h-screen bg-surface pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link href={`/kursy/${slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-brand mb-8 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Wróć do kursu
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Formularz */}
          <div className="bg-white rounded-3xl border border-border p-8">
            <h1 className="text-2xl font-bold text-ink mb-2">Twoje dane</h1>
            <p className="text-sm text-zinc-500 mb-8">Podaj dane do faktury i dostępu do kursu.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Imię i nazwisko *</label>
                  <input type="text" required placeholder="Jan Kowalski" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-500 mb-1.5">NIP *</label>
                  <input type="text" required placeholder="1234567890" value={form.nip}
                    onChange={(e) => setForm({ ...form, nip: e.target.value })} className={input} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Email *</label>
                <input type="email" required placeholder="jan@firma.pl" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} />
                <p className="text-xs text-zinc-400 mt-1">Na ten adres wyślemy dostęp do kursu.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-500 mb-1.5">Hasło do konta *</label>
                <input type="password" required placeholder="Min. 6 znaków" value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })} className={input} />
                <p className="text-xs text-zinc-400 mt-1">Stworzymy konto — zaloguj się później przez /logowanie.</p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 accent-brand shrink-0" />
                <span className="text-[11px] text-zinc-400 leading-relaxed">
                  Wyrażam zgodę na przetwarzanie danych osobowych przez MiauSEO zgodnie z{" "}
                  <Link href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</Link>.
                </span>
              </label>

              {error && <p className="text-sm text-red-500 bg-red-50 px-4 py-2.5 rounded-xl">{error}</p>}

              <button type="submit" disabled={loading}
                className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60">
                {loading ? "Przetwarzanie..." : (
                  <>
                    Przejdź do płatności
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Podsumowanie */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border border-border p-8 mb-4">
              <p className="text-xs font-bold tracking-widest uppercase text-brand mb-4">Podsumowanie</p>
              <h2 className="font-bold text-ink text-lg leading-snug mb-6">{course.title}</h2>
              <ul className="space-y-2 mb-6 text-sm text-zinc-600">
                {["8 lekcji wideo · 140 minut", "Dostęp nielimitowany", "Lista kontrolna + plan naprawczy", "Aktualizacje bez dodatkowych opłat"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-5 flex items-center justify-between">
                <span className="text-sm text-zinc-500">Do zapłaty</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-ink">{course.price} zł</span>
                  <p className="text-xs text-zinc-400">brutto (z VAT)</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Bezpieczna płatność · Faktura VAT
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
