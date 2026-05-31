"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HeroForm() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (closed) return null;

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
    <div
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 w-[320px] transition-all duration-500 ease-out hidden lg:block ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-3xl shadow-2xl border border-border overflow-hidden">
        <div className="h-1 bg-brand w-full" />

        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/logo.png" alt="MiauSEO" width={84} height={24} className="h-6 w-auto" loading="lazy" />
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-green-50 text-green-600 px-2.5 py-1 rounded-full">
                  Bezpłatne
                </span>
              </div>
              <h3 className="text-base font-bold text-ink leading-snug">
                Umów konsultację
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Sprawdzimy Twoją wizytówkę i powiemy co poprawić.
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] text-zinc-500 font-medium">Średni czas odpowiedzi: <strong className="text-ink">15 minut</strong></span>
              </div>
            </div>
            <button
              onClick={() => setClosed(true)}
              className="w-7 h-7 rounded-full bg-surface hover:bg-border flex items-center justify-center text-zinc-400 hover:text-ink transition-colors shrink-0 ml-3"
              aria-label="Zamknij"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {sent ? (
            <div className="flex flex-col items-center text-center py-6 gap-3">
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
              <input
                type="text"
                required
                placeholder="Imię"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition"
              />
              <input
                type="text"
                required
                placeholder="Nazwa firmy"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
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
              <textarea
                required
                placeholder="Opisz swoje dotychczasowe doświadczenia z marketingiem..."
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-sm text-ink placeholder:text-zinc-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition resize-none"
              />
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
                className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm"
              >
                {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
