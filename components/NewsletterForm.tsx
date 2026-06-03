"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg(data.error ?? "Błąd zapisu.");
        setStatus("error");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setMsg("Błąd połączenia. Spróbuj ponownie.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border rounded-2xl p-5 bg-surface">
        <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Newsletter</p>
        <p className="text-sm font-semibold text-ink mb-1">Jesteś na liście!</p>
        <p className="text-xs text-zinc-500 leading-relaxed">Wysyłamy tylko wartościowe rzeczy — zero spamu.</p>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-2xl p-5 bg-surface">
      <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Newsletter</p>
      <p className="text-sm font-semibold text-ink mb-1 leading-snug">
        Bądź na bieżąco z SEO
      </p>
      <p className="text-xs text-zinc-500 leading-relaxed mb-4">
        Nowe artykuły, zmiany w algorytmach Google i praktyczne wskazówki — prosto na skrzynkę.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Twój adres e-mail"
          required
          className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-white text-ink placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-2.5 rounded-xl transition-colors duration-200 text-sm"
        >
          {status === "loading" ? "Zapisuję..." : "Zapisz się"}
        </button>
        {status === "error" && (
          <p className="text-xs text-red-500">{msg}</p>
        )}
      </form>
      <p className="text-[10px] text-zinc-400 mt-2 leading-relaxed">
        Możesz wypisać się w każdej chwili. Zero spamu.
      </p>
    </div>
  );
}
