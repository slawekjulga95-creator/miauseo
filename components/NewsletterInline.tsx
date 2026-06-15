"use client";

import { useState } from "react";

export default function NewsletterInline({ light = false }: { light?: boolean } = {}) {
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
      <div className={`rounded-xl p-4 text-center ${light ? "bg-brand/10" : "bg-white/10"}`}>
        <p className={`font-bold text-sm mb-1 ${light ? "text-ink" : "text-white"}`}>Jesteś na liście!</p>
        <p className={`text-xs leading-relaxed ${light ? "text-zinc-500" : "text-white/60"}`}>
          Wysyłamy tylko wartościowe rzeczy — zero spamu.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Twój adres e-mail"
          required
          className={`flex-1 px-4 py-3 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors ${
            light
              ? "border-border bg-white text-ink placeholder:text-zinc-400"
              : "border-white/15 bg-white/10 text-white placeholder:text-white/35 focus:ring-brand/50 focus:border-brand/50"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold px-6 py-3 rounded-xl transition-colors duration-200 text-sm whitespace-nowrap"
        >
          {status === "loading" ? "Zapisuję..." : "Zapisz się"}
        </button>
      </form>
      {status === "error" && <p className="text-xs text-red-500 mt-2">{msg}</p>}
      <p className={`text-[11px] mt-2.5 ${light ? "text-zinc-400" : "text-white/30"}`}>
        Bez spamu. Możesz wypisać się w każdej chwili.
      </p>
    </>
  );
}
