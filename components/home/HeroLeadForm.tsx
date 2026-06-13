"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import { useRouter } from "next/navigation";

export default function HeroLeadForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "hero", ...form }),
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

  return (
    <div className="bg-white rounded-3xl border border-brand/20 ring-1 ring-brand/10 overflow-hidden shadow-[0_24px_60px_-15px_rgba(243,111,33,0.35),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
      <div className="h-1.5 bg-brand w-full" />

      <div className="p-6 lg:p-7">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/logo.png" alt="MiauSEO" width={84} height={24} className="h-6 w-auto" />
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-600 px-2.5 py-1 rounded-full">
            Bezpłatne
          </span>
        </div>
        <h2 className="text-lg font-bold text-ink leading-snug">
          Umów bezpłatną konsultację
        </h2>
        <p className="text-xs text-zinc-400 mt-0.5 mb-2">
          Sprawdzimy Twoją widoczność w Google i powiemy, co poprawić.
        </p>
        <div className="flex items-center gap-1.5 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] text-zinc-500 font-medium">
            Średni czas odpowiedzi: <strong className="text-ink">15 minut</strong>
          </span>
        </div>

        {sent ? (
          <div className="flex flex-col items-center text-center py-8 gap-3">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="font-bold text-ink text-sm">Gotowe, odezwiemy się!</p>
            <p className="text-xs text-zinc-400">Zazwyczaj w ciągu kilku godzin.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Imię"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
              />
              <input
                type="tel"
                required
                placeholder="Telefon"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
              />
            </div>
            <input
              type="email"
              required
              placeholder="E-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
            />
            <textarea
              required
              placeholder="Jak możemy pomóc?"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition resize-none"
            />

            {/* Etapy współpracy */}
            <div className="flex items-start pt-1 pb-0.5 px-0.5">
              {["Konsultacja", "Współpraca", "Kontakt"].map((label, i, arr) => (
                <Fragment key={label}>
                  <div className="flex flex-col items-center shrink-0">
                    <span
                      className="flex items-center justify-center text-white font-bold rounded-full"
                      style={{
                        width: "1.6rem",
                        height: "1.6rem",
                        fontSize: "0.75rem",
                        background: "var(--color-brand)",
                        boxShadow: "0 2px 8px rgba(243,111,33,0.35)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-[0.68rem] font-bold text-ink mt-1.5 whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span
                      className="flex-1"
                      style={{
                        height: 0,
                        borderTop: "2px dashed var(--color-brand)",
                        margin: "0.8rem 0.4rem 0",
                        opacity: 0.6,
                      }}
                    />
                  )}
                </Fragment>
              ))}
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-0.5 accent-brand shrink-0"
              />
              <span className="text-[11px] text-zinc-400 leading-relaxed">
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez MiauSEO w celu realizacji usług, zgodnie z{" "}
                <a href="/polityka-prywatnosci" className="underline hover:text-brand">Polityką prywatności</a>.
              </span>
            </label>

            {error && (
              <p className="text-red-500 text-xs text-center">Błąd wysyłki. Zadzwoń: +48 503 575 067</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 text-sm"
            >
              {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
