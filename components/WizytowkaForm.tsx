"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WizytowkaForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", company: "", email: "", message: "", consent: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "wizytowka", ...form }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      router.push("/dziekujemy");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center py-8 gap-3">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-bold text-ink">Gotowe, odezwiemy się!</p>
        <p className="text-sm text-zinc-400">Zazwyczaj w ciągu kilku godzin roboczych.</p>
      </div>
    );
  }

  const inp = "w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" required placeholder="Imię" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} className={inp} />
      <input type="tel" required placeholder="Telefon" value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inp} />
      <input type="text" placeholder="Nazwa firmy" value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })} className={inp} />
      <input type="email" required placeholder="E-mail" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} className={inp} />
      <textarea required placeholder="Jak możemy pomóc?" rows={3} value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inp} resize-none`} />
      <label className="flex items-start gap-2.5 cursor-pointer">
        <input type="checkbox" required checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 accent-brand shrink-0" />
        <span className="text-[11px] text-zinc-400 leading-relaxed">
          Wyrażam zgodę na przetwarzanie moich danych osobowych przez MiauSEO w celu odpowiedzi na zapytanie, zgodnie z{" "}
          <a href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</a>.
        </span>
      </label>
      {error && <p className="text-red-500 text-sm text-center">Błąd wysyłki. Spróbuj ponownie.</p>}
      <button type="submit" disabled={loading}
        className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm">
        {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
      </button>
      <p className="text-center text-xs text-zinc-400">Odpowiadamy w ciągu 24h. Zero spamu.</p>
    </form>
  );
}
