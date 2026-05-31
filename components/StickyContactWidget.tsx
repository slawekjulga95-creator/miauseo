"use client";

import { useState, useEffect } from "react";

export default function StickyContactWidget() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: false, phone: false });

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e = {
      name: !form.name.trim(),
      phone: !form.phone.trim(),
    };
    setErrors(e);
    return !e.name && !e.phone;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "widget", ...form }),
      });
    } catch {
      // pokaż success nawet przy błędzie — nie blokuj UX
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const show = visible && !closed;

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-stretch transition-all duration-500 ease-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {/* Toggle tab */}
      <button
        onClick={() => setClosed(true)}
        aria-label="Zamknij"
        className="bg-brand-dark text-white/70 hover:text-white w-7 flex items-center justify-center rounded-l-xl transition-colors shrink-0"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Form panel */}
      <div className="bg-brand text-white w-72 shadow-2xl rounded-l-2xl overflow-hidden">
        {submitted ? (
          <div className="p-7 flex flex-col items-center text-center h-full justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold mb-1">Gotowe!</p>
              <p className="text-white/75 text-sm leading-snug">
                Odezwiemy się w ciągu 30 minut roboczych.
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6">

            <form onSubmit={handleSubmit} noValidate className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Twoje imię"
                  value={form.name}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, name: e.target.value }));
                    if (errors.name) setErrors((er) => ({ ...er, name: false }));
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/15 placeholder-white/50 text-white text-sm outline-none focus:ring-2 focus:ring-white/40 transition ${
                    errors.name ? "ring-2 ring-white" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-white/80 text-xs mt-1">Podaj swoje imię</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Numer telefonu"
                  value={form.phone}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, phone: e.target.value }));
                    if (errors.phone) setErrors((er) => ({ ...er, phone: false }));
                  }}
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/15 placeholder-white/50 text-white text-sm outline-none focus:ring-2 focus:ring-white/40 transition ${
                    errors.phone ? "ring-2 ring-white" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="text-white/80 text-xs mt-1">Podaj numer telefonu</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white text-brand font-bold rounded-xl text-sm hover:bg-white/90 disabled:opacity-60 transition-colors mt-1"
              >
                {loading ? "Wysyłanie..." : "Zadzwońcie do mnie"}
              </button>
            </form>

            <p className="text-white/40 text-[10px] text-center mt-4 leading-snug">
              Bez spamu. Bez zobowiązań.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
