"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Formularz kontaktowy w sidebarze wpisu blogowego. Sidebar jest sticky,
// więc formularz jedzie razem z czytelnikiem przez cały artykuł — dlatego
// jest maksymalnie krótki: imię, telefon, zgoda.
export default function BlogLeadForm() {
  const [form, setForm] = useState({ name: "", phone: "", consent: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "blog", name: form.name, phone: form.phone }),
      });
      if (!res.ok) throw new Error();
      router.push("/dziekujemy");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-brand/20 ring-1 ring-brand/10 overflow-hidden">
      <div className="h-1.5 bg-brand w-full" />
      <div className="p-5">
        <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-600 px-2.5 py-1 rounded-full mb-3">
          Bezpłatnie
        </span>
        <p className="text-ink font-bold text-base leading-snug">Sprawdzimy Twoją wizytówkę</p>
        <p className="text-xs text-zinc-500 leading-relaxed mt-1.5 mb-4">
          Zostaw numer, oddzwonimy i powiemy, co konkretnie poprawić w Twoim profilu w Google.
        </p>

        <form onSubmit={handleSubmit} className="space-y-2.5">
          <input
            type="text"
            required
            placeholder="Imię"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-500 placeholder:font-semibold focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
          />
          <input
            type="tel"
            required
            placeholder="Telefon"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-500 placeholder:font-semibold focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
          />

          <label className="flex items-start gap-2 cursor-pointer pt-0.5">
            <input
              type="checkbox"
              required
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              className="mt-0.5 accent-brand shrink-0"
            />
            <span className="text-[10px] text-zinc-400 leading-relaxed">
              Zgadzam się na kontakt i przetwarzanie danych zgodnie z{" "}
              <a href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</a>.
            </span>
          </label>

          {error && (
            <p className="text-red-500 text-[11px] text-center">Błąd wysyłki. Spróbuj ponownie.</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm"
          >
            {loading ? "Wysyłanie..." : "Oddzwońcie do mnie"}
          </button>
        </form>
      </div>
    </div>
  );
}
