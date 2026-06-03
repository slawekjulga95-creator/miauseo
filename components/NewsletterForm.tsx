"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="bg-ink rounded-2xl overflow-hidden">
      {/* Zdjęcie — pełne, bez przycinania */}
      <Image
        src="/slawomir.png"
        alt="Sławomir"
        width={896}
        height={1200}
        sizes="256px"
        className="w-full h-auto block"
        priority
      />

      {/* Treść */}
      <div className="px-5 pb-5 pt-4">
        <p className="text-white font-bold text-base leading-tight">Sławomir</p>
        <p className="text-white/50 text-xs mt-0.5 mb-4">Konsultant SEO · MiauSEO</p>

        {status === "success" ? (
          <div className="bg-white/10 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-sm mb-1">Jesteś na liście!</p>
            <p className="text-white/60 text-xs leading-relaxed">Wysyłamy tylko wartościowe rzeczy — zero spamu.</p>
          </div>
        ) : (
          <>
            <p className="text-zinc-300 text-xs leading-relaxed mb-4">
              Zmiany w Google, praktyczne wskazówki SEO i case studies — prosto na Twoją skrzynkę. Bez lania wody.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres e-mail"
                required
                className="w-full px-3 py-2.5 text-sm rounded-xl border border-white/15 bg-white/10 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand/50 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand hover:bg-brand-dark disabled:opacity-60 text-white font-bold py-2.5 rounded-xl transition-colors duration-200 text-sm"
              >
                {status === "loading" ? "Zapisuję..." : "Dołącz do newslettera"}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-400">{msg}</p>
              )}
            </form>
            <p className="text-[10px] text-white/30 mt-2 text-center">
              Możesz wypisać się w każdej chwili.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
